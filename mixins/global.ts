import Vue from "vue";
import { IMixinState } from "@/types/mixinsTypes";

export default Vue.extend( {
  data () {
    return {
      apiUrl: "http://localhost:8000",
    };
  },
  methods: <IMixinState> {
    background_style ( image: string ) {
      const placeholder =
        "https://property.myludhiana.com/wp-content/uploads/2016/05/property_placeholder.jpg";
      const imageUrl = `${ this.apiUrl }/${ image }`;

      return {
        backgroundImage:
          image == "no photo" ? `url("${ placeholder }")` : `url("${ imageUrl }")`,
      };
    },
    getPercentageData ( data: number, total: number ): number {
      let percentage: number = ( data / total ) * 100;
      percentage = Math.round( percentage );
      return percentage;
    },
    catchError ( error: any ) {
      const err = Object.assign( {}, error );

      const responseErrorObject = err.response.data.errors

      //  get the object key and show the error message
      for ( const key in responseErrorObject ) {
        if ( responseErrorObject.hasOwnProperty( key ) ) {
          const errorMessage = responseErrorObject[ key ][ 0 ];
          this.getNotification( errorMessage, "error" );
        }
      }
    },
    getFullName ( firstName: string, lastName: string ): string {
      return `${ firstName } ${ lastName }`;
    },
    getFormatedDate ( currentDate: string, type: string ): string {
      if ( !currentDate ) return "None";

      const date = new Date( currentDate );
      const dateTimeFormat = new Intl.DateTimeFormat( "en", {
        year: "numeric",
        month: type === "long" ? "long" : "short",
        day: "2-digit",
      } );
      const [ { value: month }, , { value: day }, , { value: year } ] =
        dateTimeFormat.formatToParts( date );

      return `${ day }-${ month }-${ year }`;
    },
    getNotification ( message: string, type: string ) {
      this.$notify( {
        title:
          type === "success"
            ? "Success"
            : type === "error"
              ? "Error"
              : type === "warning"
                ? "Warning"
                : "Info",
        message,
        type,
      } );
    },
  },
} );
