import Route from "@ember/routing/route";

export default class IndexRoute extends Route {
  firstTime = true;

  model() {
    return {
      name: "wat",
    };
  }

  afterModel(resolvedModel, transition) {
    // if (this.firstTime) {
    //   this.firstTime = false;
    //   return;
    // }

    if (transition.to.queryParams.appName !== resolvedModel.name) {
      // transition.abort();
      return this.transitionTo({
        queryParams: {
          ...transition.to.queryParams,
          appName: resolvedModel.name,
        },
      });
    }
  }
}
