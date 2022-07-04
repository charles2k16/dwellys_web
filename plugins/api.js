import createApi from "~/api/apiService";

export default (ctx, inject) => {
  // inject the repository in the context (ctx.app.$repository)
  // And in the Vue instances (this.$repository in your components)

  const apiService = createApi(ctx.$axios);

  // You can reuse the repositoryWithAxios object:
  inject("registerApi", apiService("/signup"));
  inject("countriesApi", apiService("/countries"));
  inject("propertyTypesApi", apiService("/propertytypes"));
};
