import Vue, { ComponentOptions } from "vue";

declare module "vue/types/options" {
  interface ComponentOptions<
    V extends Vue,
    Data = DefaultData<V>,
    Methods = DefaultMethods<V>,
    Computed = DefaultComputed,
    PropsDef = PropsDefinition<DefaultProps>,
    Props = DefaultProps
  > {
    head?: object | Function;
    layout?: string | Function;
    middleware?: string | string[] | object;
    scrollToTop?: boolean;
    transition?: String | object | Function;
    watchQuery?: boolean | string[];
  }
}

interface apiService {
  index: Function;
  show: Function;
  delete: Function;
  create: Function;
  update: Function;
  //  (query: object): Promise<any>
}

declare module "vue/types/vue" {
  interface Vue {
    $registerApi: apiService;
    $countriesApi: apiService;
    $propertyTypesApi: apiService;
    // $refs: { [key: string]: Vue | Element | (Vue | Element)[] | Function | undefined; }
  }
}
