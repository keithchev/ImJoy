document.addEventListener('DOMContentLoaded', function () {
  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS.load('particles-js', '/static/js/particlesjs-config.json', function () {
    console.log('particles.js config loaded');
  });
});


Vue.component('label-selector', {
  props: ['all-labels'],
  template: document.getElementById('label-selector'),
});


const app = new Vue({
  el: '#app',
  data: {
    plugins: [],
    allLabels: [],
    filters: [],
    selected_plugin: {}
  },
  computed: {
    filteredPlugins: function () {
      const covered = this.plugins.filter((plugin) => plugin.cover_image);
      const plugins = covered.concat(this.plugins.filter((plugin) => !plugin.cover_image))

      return plugins.filter((plugin) =>
        this.filters.every((label) =>
          plugin.allLabels.includes(label)
        )
      );

    }
  },
  created: async function () {
    const that = this;
    const repos = [
      'oeway/ImJoy-Plugins',
      'imjoy-team/example-plugins',
      'oeway/ImJoy-Demo-Plugins',
    ]
    that.plugins = []
    for (let repo of repos) {
      try {
        const repository_url = `https://raw.githubusercontent.com/${repo}/master/manifest.imjoy.json`
        const response = await fetch(repository_url)
        const repo_manifest = JSON.parse(await response.text());
        const plugins = repo_manifest.plugins;
        for (let plugin of plugins) {
          plugin.repo = repo;
          plugin.url = `https://github.com/${repo}/tree/master/${plugin.uri}`;
          plugin.install_url = `/#/app?plugin=${repo}:${plugin.name}`;
          plugin.run_url = `/lite?plugin=${repo}:${plugin.name}`;
        }
        that.plugins = that.plugins.concat(plugins);
      } catch (e) {
        console.error(e)
      }
    }
    that.plugins.forEach((plugin) => {
      plugin.allLabels = plugin.labels || [];
      if (!!plugin.license) {
        plugin.allLabels.push(plugin.license);
      }
      if (typeof plugin.type === 'string') {
        plugin.allLabels.push(plugin.type);
      } else if (typeof plugin.type === 'object') {
        plugin.allLabels.concat(Object.values(plugin.type));
      }
      if (!!plugin.repo) {
        plugin.allLabels.push(plugin.repo);
      }
      if (plugin.tags) {
        plugin.allLabels.concat(plugin.tags);
      }
      if (plugin.cover) {
        if (typeof plugin.cover === 'string') {
          plugin.cover_image = plugin.cover
        } else if (Array.isArray(plugin.cover)) {
          plugin.cover_image = plugin.cover[0]
        }
      } else {
        plugin.cover_image = ''
      }
    });
    that.plugins.forEach((plugin) => {
      plugin.allLabels.forEach((label) => {
        if (that.allLabels.indexOf(label) === -1) {
          that.allLabels.push(label);
        }
      });
    });
    that.allLabels.sort((a, b) =>
      a.toLowerCase() < b.toLowerCase() ? -1 : 1
    );
    if (!this.$refs.plugin_info_dialog.showModal) {
      dialogPolyfill.registerDialog(this.$refs.plugin_info_dialog);
    }
  },
  methods: {
    run(plugin) {
      window.open(plugin.run_url, '_blank');
    },
    install(plugin) {
      window.open(plugin.install_url, '_blank');
    },
    showInfo(plugin) {
      this.selected_plugin = plugin;
      this.$refs.plugin_info_dialog.showModal();
    },
    closeInfo() {
      this.$refs.plugin_info_dialog.close();
    },
    etAl(authors) {
      if (!authors) {
        return ''
      }
      if (authors.length < 3) {
        return authors.join(", ");
      } else {
        return authors.slice(0, 3).join(", ") + " et al.";
      }
    },
    addRemoveToFilters(label) {
      if (this.filters.indexOf(label) === -1) {
        this.filters.push(label);
      } else {
        this.filters = this.filters
          .filter((x) => x !== label);
      }
    },
    checkActive(label) {
      return this.filters.indexOf(label) > -1;
    },
    clearAllFilters() {
      this.filters = [];
    },
    getLabelCount(label) {
      return this.filteredPlugins
        .filter((plugins) => plugins.allLabels.includes(label))
        .length;

    },
    getPluginsCount() {
      return this.filteredPlugins.length
    }
  }
});