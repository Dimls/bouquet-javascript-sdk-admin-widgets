# jssdk-admin-widgets

Admin widgets allow manipulation / creation of user based objects stored within the API.

## Users Admin Widget
*Renders a multi functional user manipulation data table where manipulations or modifications can occur based on current logged in privileges.*
* status : api status model
* options :
  * fetchRecordsLater (boolean) : If set to true then user / group information will be fetched on instantiation rather than through the login model change event.

## Modal View
* Renders a given view into a modal. ".render()" needs to be called after instantiation to open
* options:
  * view (Backbone view object) : View to be passed into the modal
  * fadeAnimation (boolean) : If set to true then a fade in / fade out animation will occur on the given modal (default false)
  * header : If set to true then a modal header will be rendered
  * footer : If set to true then a modal footer will be rendered

## DimensionSelector
*Renders the list of dimensions within the domain*
* filters : the filters model
* options :
* template : a custom Handlebars template
* afterRender : called after render & when the widget is in a usable state