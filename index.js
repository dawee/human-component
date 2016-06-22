const React = require('react');


const instances = {};


class SourceWrapper {

  constructor(source) {
    this.source = source;
    this.props = {};
  }

  set(props) {
    this.props = Object.assign(this.props, props);
    return this;
  }

  el(...children) {
    return React.createElement(this.source, this.props, children);
  }

  static get(source) {
    if (! (source in instances)) instances[source] = new SourceWrapper(source);

    return instances[source];
  }
}


class Component {

  static set(props) {
    return SourceWrapper.get(this).set(props);
  }

  static el(...children) {
    const wrapper = SourceWrapper.get(this);

    return wrapper.el.apply(wrapper, children);
  }
}


exports.Component = Component;


exports.from = (source) => SourceWrapper.get(source);


exports.require = (module, id, sub) => {
  let imported = module.require(id);
  let autoSub = sub;

  if (!!imported && !autoSub && 'default' in imported) autoSub = 'default';
  if (!!autoSub) imported = imported[autoSub];

  return SourceWrapper.get(imported);
};
