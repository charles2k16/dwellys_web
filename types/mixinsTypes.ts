export interface IMixinState {
  background_style: ( style: string ) => object;
  apiUrl: string;
  getFullName: ( firstName: string, lastName: string ) => string;
  getFormatedDate: ( currentDate: string, type: string ) => string;
  getNotification: ( message: string, type: string ) => void;
  showProductDetails: ( id: string ) => void;
  getPriceWithCommas: ( productPrice: number ) => string;
  getPercentageData: ( data: number, total: number ) => number;
  checkCondition: ( condition: boolean ) => boolean;
  catchError: ( error: any ) => void;
  $message: Function;
  $confirm: Function;
  $notify: Function;
  $router: any;
  $auth: any,
}
