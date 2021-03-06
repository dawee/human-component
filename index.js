const React = require('react');


const instances = {};


class ElementGenerator {
  constructor(source) {
    this.source = source;
    this.enabled = true;
  }

  el(props, ...children) {
    let content = [];

    for (const child of children) {
      if (Array.isArray(child)) {
        content = content.concat(child);
      } else if (child !== null) {
        content.push(child);
      }
    }

    if (Array.isArray(content) && content.length === 0) content = null;
    if (Array.isArray(content) && content.length === 1) content = content[0];

    if (typeof this.source.getKey === 'function') {
      props = Object.assign({key: this.source.getKey(props)}, props);
    }

    return this.enabled ? React.createElement(this.source, props, content) : null;
  }

  static get(source, id) {
    if (! (id in instances)) instances[id] = new ElementGenerator(source);

    return instances[id];
  }

}

exports.from = (source) => ElementGenerator.get(source, source);

exports.require = (module, id, sub) => {
  let imported = module.require(id);
  let autoSub = sub;

  if (!!imported && !autoSub && 'default' in imported) autoSub = 'default';
  if (!!autoSub) imported = imported[autoSub];

  return ElementGenerator.get(imported, `${id}-${autoSub || 'default'}`);
};

