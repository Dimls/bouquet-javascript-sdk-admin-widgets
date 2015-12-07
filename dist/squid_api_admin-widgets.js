this["squid_api"] = this["squid_api"] || {};
this["squid_api"]["template"] = this["squid_api"]["template"] || {};

this["squid_api"]["template"]["squid_api_collection_management_widget"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n        <button class=\"form-control squid-api-collection-modal-trigger\" ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.collectionAvailable), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n            ";
  if (helper = helpers.type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n        </button>\n        <div class=\"modal-wrapper\"></div>\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return " disabled=\"true\" ";
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n        <div class=\"squid-api-";
  if (helper = helpers.type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-collection-management\">\n            ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.roles)),stack1 == null || stack1 === false ? stack1 : stack1.create), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                <table style=\"width:100%\">\n                    <tbody ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.valueSelected), {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n                        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.models), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    </tbody>\n            </table>\n        </div>\n    ";
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                <button type=\"button\"  class=\"create btn btn-default\">\n                    <i class=\"fa fa-plus\"></i> New ";
  if (helper = helpers.type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n                </button>\n            ";
  return buffer;
  }

function program7(depth0,data) {
  
  
  return " ";
  }

function program9(depth0,data) {
  
  
  return " class=\"no-values\" ";
  }

function program11(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                            <tr ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.selected), {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " data-attr=\"";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                                <td class=\"select selected\">\n                                    ";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n                                </td>\n                                ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.roles)),stack1 == null || stack1 === false ? stack1 : stack1['delete']), {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                                ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.roles)),stack1 == null || stack1 === false ? stack1 : stack1.refresh), {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                                ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.roles)),stack1 == null || stack1 === false ? stack1 : stack1.edit), {hash:{},inverse:self.noop,fn:self.program(18, program18, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                            </tr>\n                        ";
  return buffer;
  }
function program12(depth0,data) {
  
  
  return " class=\"selected\" ";
  }

function program14(depth0,data) {
  
  
  return "\n                                    <td class=\"delete collection-option\"><i class=\"fa fa-trash-o\"></i></td>\n                                ";
  }

function program16(depth0,data) {
  
  
  return "\n                                    <td class=\"refresh collection-option\"><i class=\"fa fa-refresh\"></i></td>\n                                ";
  }

function program18(depth0,data) {
  
  
  return "\n                                    <td class=\"edit collection-option\"><i class=\"fa fa-pencil-square-o\"></i></td>\n                                ";
  }

  buffer += "<div class=\"squid-api-collection-management-widget\">\n    ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.modalHtml), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.modalHtml), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
  });

this["squid_api"]["template"]["squid_api_columns_management_widget"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n            <option ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.parentId), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\n        ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return " class=\"child\" ";
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n            <option value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.parentId), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " selected=\"selected\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\n        ";
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += " class=\"child";
  if (helper = helpers.depth) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.depth); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  return buffer;
  }

  buffer += "<div class=\"squid-api-admin-widget-columns-management\">\n    <select multiple=\"multiple\">\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.dynamic), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.nonDynamic), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </select>\n    <div class=\"management\">\n        <button type=\"button\" class=\"btn btn-default add\">\n            Create\n		</button>\n        <button type=\"button\" class=\"btn btn-default edit\" disabled=\"true\">\n            Edit\n		</button>\n        <button type=\"button\" class=\"btn btn-default delete\" disabled=\"true\">\n            Delete\n		</button>\n        <button type=\"button\" class=\"btn btn-default relations\">\n            Manage Relations\n		</button>\n    </div>\n</div>\n";
  return buffer;
  });

this["squid_api"]["template"]["squid_api_modal_view"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"squid-api-model-view modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Modal title</h4>\n      </div>\n      <div class=\"modal-body\">\n        ...\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </div>\n  </div>\n</div>\n";
  });

this["squid_api"]["template"]["squid_api_model_management_widget"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", self=this, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		<button type=\"button\"  class=\"btn btn-default\">\n			";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.buttonLabel), {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		</button>\n	";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n				";
  if (helper = helpers.buttonLabel) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.buttonLabel); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			";
  return buffer;
  }

function program4(depth0,data) {
  
  
  return "\n				<i class=\"fa fa-plus\"></i>\n			";
  }

  buffer += "<div class=\"";
  if (helper = helpers.view) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.view); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n	";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.accessible), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
  });

this["squid_api"]["template"]["squid_api_relation_management_widget"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n				<table style=\"width:100%\">\n					";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.models), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n				</table>\n				";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n						<tr data-value=";
  if (helper = helpers.oid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.oid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ">\n							<td class=\"domain\">";
  if (helper = helpers.leftName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.leftName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n							<td class=\"leftIcon\">\n							";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.leftMany), {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n							</td>\n							<td>\n							";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.rightMany), {hash:{},inverse:self.program(13, program13, data),fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n							</td>\n							<td class=\"domain\">";
  if (helper = helpers.rightName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.rightName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n							<td class=\"edit\"><i class=\"fa fa-pencil-square-o\"></i></td>\n							<td class=\"delete\"><i class=\"fa fa-trash-o\"></i></td>\n						</tr>\n					";
  return buffer;
  }
function program3(depth0,data) {
  
  
  return "\n									<svg width=\"110\" height=\"20\" xmlns=\"http://www.w3.org/2000/svg\">\n  										<ellipse stroke=\"#666\" ry=\"0.15625\" rx=\"42.53032\" id=\"svg_8\" cy=\"10.62595\" cx=\"65.93316\" fill-opacity=\"null\" stroke-opacity=\"null\" stroke-width=\"1.5\" fill=\"none\"/>\n  										<ellipse stroke=\"#666\" transform=\"rotate(23.859294891357422 14.261151313781737,6.493025302886963) \" ry=\"0.15625\" rx=\"9.98315\" id=\"svg_10\" cy=\"6.49303\" cx=\"14.26115\" fill-opacity=\"null\" stroke-opacity=\"null\" stroke-width=\"1.5\" fill=\"none\"/>\n  										<ellipse stroke=\"#666\" transform=\"rotate(0.7375706434249878 14.573644638061372,10.555437088012791) \" ry=\"0.15625\" rx=\"9.98315\" id=\"svg_11\" cy=\"10.55544\" cx=\"14.57365\" fill-opacity=\"null\" stroke-opacity=\"null\" stroke-width=\"1.5\" fill=\"none\"/>\n  										<ellipse stroke=\"#666\" transform=\"rotate(-20.462926864624023 14.4486494064331,14.430353164672844) \" ry=\"0.15625\" rx=\"9.98315\" id=\"svg_13\" cy=\"14.43035\" cx=\"14.44865\" fill-opacity=\"null\" stroke-opacity=\"null\" stroke-width=\"1.5\" fill=\"none\"/>\n									</svg>\n								";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n								";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.leftZeroOrOne), {hash:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n							";
  return buffer;
  }
function program6(depth0,data) {
  
  
  return "\n								<svg width=\"110\" height=\"20\" xmlns=\"http://www.w3.org/2000/svg\">\n										<ellipse fill=\"none\" stroke-width=\"1.5\" stroke-opacity=\"null\" fill-opacity=\"null\" cx=\"51.62104\" cy=\"10.37595\" id=\"svg_8\" rx=\"46.84273\" ry=\"0.15625\" stroke=\"#666\"/>\n										<ellipse fill=\"none\" stroke-width=\"12\" stroke-opacity=\"null\" fill-opacity=\"null\" cx=\"22.24682\" cy=\"10.28729\" id=\"svg_15\" rx=\"1.71832\" ry=\"1.53145\" transform=\"rotate(-0.039470430463552475 22.246822357181806,10.287289619445572) \" stroke=\"#666\"/>\n										<ellipse fill=\"none\" stroke-width=\"1.5\" stroke-opacity=\"null\" fill-opacity=\"null\" cx=\"60.32387\" cy=\"54.48737\" id=\"svg_16\" rx=\"29.16739\" ry=\"0.15625\" transform=\"rotate(90.55730438232422 60.323867797851555,54.48736953735351) \" stroke=\"#666\"/>\n										<ellipse fill=\"none\" stroke-width=\"1.5\" stroke-opacity=\"null\" fill-opacity=\"null\" cx=\"10.70595\" cy=\"10.10935\" id=\"svg_17\" rx=\"6.82828\" ry=\"0.15625\" transform=\"rotate(89.25360107421875 10.705955505371094,10.109351158142088) \" stroke=\"#666\"/>\n								</svg>\n									";
  }

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n									";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.leftOne), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n							 	";
  return buffer;
  }
function program9(depth0,data) {
  
  
  return "\n									<svg width=\"110\" height=\"20\" xmlns=\"http://www.w3.org/2000/svg\">\n										<ellipse stroke=\"#000\" ry=\"0.15625\" rx=\"46.84273\" id=\"svg_8\" cy=\"10.18846\" cx=\"55.99588\" fill-opacity=\"null\" stroke-opacity=\"null\" stroke-width=\"1.5\" fill=\"none\"/>\n										<ellipse stroke=\"#000\" transform=\"rotate(90.55730438232422 60.323867797851555,54.48736953735351) \" ry=\"0.15625\" rx=\"29.16739\" id=\"svg_16\" cy=\"54.48737\" cx=\"60.32387\" fill-opacity=\"null\" stroke-opacity=\"null\" stroke-width=\"1.5\" fill=\"none\"/>\n									</svg>\n									";
  }

function program11(depth0,data) {
  
  
  return "\n							<svg width=\"110.00000000000001\" height=\"20\" xmlns=\"http://www.w3.org/2000/svg\">\n								<ellipse fill=\"none\" stroke-width=\"1.5\" stroke-opacity=\"null\" fill-opacity=\"null\" cx=\"65.93316\" cy=\"10.62595\" id=\"svg_8\" rx=\"42.53032\" ry=\"0.15625\" stroke=\"#666\"/>\n								<ellipse fill=\"none\" stroke-width=\"1.5\" stroke-opacity=\"null\" fill-opacity=\"null\" cx=\"98.59446\" cy=\"6.49303\" id=\"svg_10\" rx=\"9.98315\" ry=\"0.15625\" transform=\"rotate(-20.98859405517578 98.59446716308595,6.493030071258536) \" stroke=\"#666\"/>\n								<ellipse fill=\"none\" stroke-width=\"1.5\" stroke-opacity=\"null\" fill-opacity=\"null\" cx=\"14.57365\" cy=\"10.55544\" id=\"svg_11\" rx=\"9.98315\" ry=\"0.15625\" transform=\"rotate(0.7375706434249878 14.573644638061372,10.555437088012791) \" stroke=\"#666\"/>\n								<ellipse fill=\"none\" stroke-width=\"1.5\" stroke-opacity=\"null\" fill-opacity=\"null\" cx=\"98.28197\" cy=\"14.76368\" id=\"svg_13\" rx=\"9.98315\" ry=\"0.15625\" transform=\"rotate(19.652103424072266 98.28196716308591,14.763684272766087) \" stroke=\"#666\"/>\n							</svg>\n								";
  }

function program13(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n								";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.rightZeroOrOne), {hash:{},inverse:self.program(16, program16, data),fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n							";
  return buffer;
  }
function program14(depth0,data) {
  
  
  return "\n									<svg width=\"110\" height=\"20\" xmlns=\"http://www.w3.org/2000/svg\">\n										<ellipse stroke=\"#666\" ry=\"0.15625\" rx=\"46.84273\" id=\"svg_8\" cy=\"10.37595\" cx=\"60.37079\" fill-opacity=\"null\" stroke-opacity=\"null\" stroke-width=\"1.5\" fill=\"none\"/>\n										<ellipse stroke=\"#666\" transform=\"rotate(-0.039470430463552475 88.36991882324197,10.287286758425585) \" ry=\"1.53145\" rx=\"1.71832\" id=\"svg_15\" cy=\"10.28729\" cx=\"88.36992\" fill-opacity=\"null\" stroke-opacity=\"null\" stroke-width=\"12\" fill=\"none\"/>\n										<ellipse stroke=\"#666\" transform=\"rotate(90.55730438232422 60.323867797851555,54.48736953735351) \" ry=\"0.15625\" rx=\"29.16739\" id=\"svg_16\" cy=\"54.48737\" cx=\"60.32387\" fill-opacity=\"null\" stroke-opacity=\"null\" stroke-width=\"1.5\" fill=\"none\"/>\n										<ellipse stroke=\"#666\" transform=\"rotate(89.25360107421875 100.32839202880858,10.109345436096195) \" ry=\"0.15625\" rx=\"6.82828\" id=\"svg_17\" cy=\"10.10935\" cx=\"100.32839\" fill-opacity=\"null\" stroke-opacity=\"null\" stroke-width=\"1.5\" fill=\"none\"/>\n									</svg>\n									";
  }

function program16(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n									";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.rightOne), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n							 	";
  return buffer;
  }

function program18(depth0,data) {
  
  
  return "\n				<div class=\"no-relations-available\">\n					no relations available\n				</div>\n			";
  }

  buffer += "<div id=\"squid-api-relations-widget-data-table\">\n	<div class=\"row\">\n		<div class=\"col-md-10\">\n		</div>\n		<div class=\"col-md-2\">\n			<button class=\"form-control add\">add</button>\n		</div>\n	</div>\n	<div class=\"row\">\n		<div class=\"col-md-12\">\n			";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.models), {hash:{},inverse:self.program(18, program18, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		</div>\n	</div>\n</div>\n";
  return buffer;
  });

this["squid_api"]["template"]["squid_api_shortcuts_admin_widget"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"squid-api-shortcuts-widgets\">\n<form>\n<div class=\"form-group\">\n    <label for=\"shortcutId\">Id</label>\n    <p class=\"help-block\">\n    This is the shortcut identifier which will be used as a URL parameter (\"index.html?shortcut=myid\").\n    If not set it will automatically be generated.</p>\n    <input type=\"text\" class=\"form-control\" id=\"shortcutId\">\n</div>\n<div class=\"form-group\">\n    <label for=\"shortcutName\">Name</label>\n    <p class=\"help-block\">This is a descriptive name for your shortcut. (Optional)</p>\n    <input type=\"text\" class=\"form-control\" id=\"shortcutName\">\n</div>\n<a href=\"#\" class=\"btn btn-primary\" id=\"saveBtn\">Save</a>\n</form>\n</div>";
  });

this["squid_api"]["template"]["squid_api_users_admin_widget"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  
  return "\n        <tr data-attr=\"add\">\n            <td><input class=\"add form-control input-sm\" placeholder=\"Login Value...\" data-attribute=\"login\"></td>\n            <td><input class=\"add form-control input-sm\" placeholder=\"Email Value...\" data-attribute=\"email\"></td>\n            <td><input class=\"add form-control input-sm\" placeholder=\"Password...\" data-attribute=\"password\" type=\"password\"></td>\n            <td class=\"user-value group-section\"><i class='field-icon fa fa-plus-square'></i><select class=\"add form-control input-sm\" data-attribute=\"groups\"></select></td>\n            <td class=\"action-section\"><span class=\"send-email-label\">Send Email: </span><input class=\"email-checkbox\" type=\"checkbox\" data-attribute=\"sendemail\"><button class=\"add btn btn-default\" data-value=\"add\">Add</button></td>\n        </tr>\n    ";
  }

  buffer += "<div class='sq-loading' style='position:absolute; width:100%; top:40%; z-index: 1;'>\n    <div class=\"spinner\">\n    <div class=\"rect5\"></div>\n    <div class=\"rect4\"></div>\n    <div class=\"rect3\"></div>\n    <div class=\"rect2\"></div>\n    <div class=\"rect1\"></div>\n    <div class=\"rect2\"></div>\n    <div class=\"rect3\"></div>\n    <div class=\"rect4\"></div>\n    <div class=\"rect5\"></div>\n    </div>\n</div>\n<div id=\"squid-api-admin-widgets-user-table\">\n<div class=\"api-feedback\"></div>\n<table class=\"sq-table\">\n    <thead>\n        <tr>\n            <th>Login</th>\n            <th>Email</th>\n            <th>Password</th>\n            <th>Groups</th>\n            <th>Action</th>\n        </tr>\n    </thead>\n    <tbody>\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.addUser), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </tbody>\n</table>\n</div>";
  return buffer;
  });
(function (root, factory) {
    root.squid_api.view.BookmarksManagementWidget = factory(root.Backbone, root.squid_api);

}(this, function (Backbone, squid_api, template) {

    var View = Backbone.View.extend({

        config : null,
        createOnlyView : false,
        autoOpen : null,
        parent : null,
        changeEventHandler : null,
        type : "Bookmark",
        typeLabel : null,
        typeLabelPlural : null,
        collectionView : null,

        initialize: function(options) {
            var me = this;

            this.config = squid_api.model.config;

            if (options) {
                if (options.autoOpen) {
                    this.autoOpen = true;
                }
                if (options.changeEventHandler) {
                    this.changeEventHandler = options.changeEventHandler;
                }
                if (options.typeLabel) {
                    this.typeLabel = options.typeLabel;
                }
                if (options.typeLabelPlural) {
                    this.typeLabelPlural = options.typeLabelPlural;
                }
                if (options.comparator) {
                    this.comparator = options.comparator;
                }
            }

            if (!this.typeLabel) {
                this.typeLabel = this.type;
            }
            if (!this.typeLabelPlural) {
                this.typeLabelPlural = this.typeLabel + "s";
            }

            if (!this.changeEventHandler) {
                this.changeEventHandler = function(value) {
                    if (value) {
                        squid_api.setBookmarkId(value);
                    }
                };
            }

            this.model = new squid_api.model.BookmarkModel();
            this.parent = new squid_api.model.ProjectModel();

            this.listenTo(this.config, "change:bookmark", this.setModel);
            this.listenTo(this.config, "change:project", this.setParent);
            this.listenTo(this.config, "change", this.afterRenderHandler);
            this.listenTo(this.config, "change:domain", function() {
                me.model.trigger("change");
            });

            this.render();
        },

        getRoles: function() {
            // roles
            var roles = {"create" : false, "edit" : false, "delete" : false, "refresh" : false};

            var parentRole = this.parent.get("_role");

            // write role
            if (parentRole == "OWNER" || parentRole == "WRITE" || parentRole == "READ") {
                if (this.config.get("domain")) {
                    roles.create = true;
                }
                roles.edit = true;
                roles.delete = true;
            }

            return roles;
        },

        afterRenderHandler : function() {
            var me = this;

            /* Config Compare with Current Model Config */
            var match = true;
            var el = this.$el.find("button");
            var model = this.model.get("config");

            // omit project / bookmark properties from comparison
            var config = _.omit(this.config.toJSON(), "project", "bookmark");

            if (! this.model.isNew()) {
                // get order of keys to compare
                var atts = Object.keys(config);

                for (i=0; i<atts.length; i++) {
                    // compare in raw state
                    if (JSON.stringify(model[atts[i]]) !== JSON.stringify(config[atts[i]])) {
                        match = false;
                    }
                }
                if (match) {
                    el.addClass("same");
                    el.removeClass("different");
                } else {
                    el.addClass("different");
                    el.removeClass("same");
                }

                /* Replace Current Config Events */
                if (this.formContent) {
                    this.formContent.$el.find("#btn-use-current-config").removeClass("disabled");
                    this.formContent.$el.find("#btn-use-current-config").click({form: this.formContent, config: this.config}, function(e) {
                        e.data.form.setValue({"config" : _.omit(e.data.config.toJSON(),"bookmark")});
                    });
                }
            } else if (this.formContent) {
                this.formContent.$el.find("#btn-use-current-config").addClass("disabled");
            }
        },

        comparator : function(a,b) {
            // default is : sort by alpha path + name
            var va = a.get("path")+a.get("name").toLowerCase();
            var vb = b.get("path")+b.get("name").toLowerCase();
            if (va < vb) {
                return -1;
            }
            if (va > vb) {
                return 1;
            }
            return 0;
        },

        beforeRenderHandler : function(model) {
            if (model.isNew()) {
                // set config to current state when creating a new model
                var config = this.config.toJSON();
                delete config.bookmark;
                delete config.project;
                model.set("config", config);
            }
        },

        setParent : function() {
            var me = this;
            var projectId = this.config.get("project");
            this.parent.set({"id" : {"projectId" : projectId}});
            this.parent.fetch();
        },

        setModel : function() {
            var me = this;
            var projectId = this.config.get("project");
            var bookmarkId = this.config.get("bookmark");
            if (bookmarkId) {
                this.model.set({"id" : {"projectId" : projectId, "bookmarkId" : bookmarkId}});
                this.model.fetch({
                    error: function(xhr) {
                        squid_api.model.status.set({"error":xhr});
                    }
                });
            } else {
                this.model.set({"id" : null});
            }
        },

        labelHandler : function(model) {
            var path = model.get("path");
            var user = path.indexOf("/USER/");
            if (user === 0) {
                path = path.substring(6);
                var userId;
                if (path.indexOf("/") > -1) {
                    userId = path.substring(0,path.indexOf("/"));
                    path = path.substring(path.indexOf("/"));
                } else {
                    userId = path;
                    path = "";
                }
                if (userId === squid_api.model.login.get("oid")) {
                    // self
                    path = "/My Bookmarks"+path;
                } else {
                    path = "/Others Bookmarks"+path;
                }
            } else {
                var shared = path.indexOf("/SHARED");
                if (shared === 0) {
                    if (path.length>7) {
                        path = "/Shared Bookmarks/"+path.substring(8);
                    } else {
                        path = "/Shared Bookmarks";
                    }
                }
            }
            return path +"/"+ model.get("name");
        },

        render: function() {
            var me = this;

            // Build the CollectionManagementWidget
            var viewOptions = {
                "el" : this.$el,
                "type" : "Bookmark",
                "typeLabel" : this.typeLabel,
                "typeLabelPlural" : this.typeLabelPlural,
                "model" : this.model,
                "parent" : this.parent,
                "autoOpen" : this.autoOpen,
                "changeEventHandler" : this.changeEventHandler,
                "comparator" : this.comparator,
                "beforeRenderHandler" : this.beforeRenderHandler,
                "afterRenderHandler" : this.afterRenderHandler,
                "labelHandler" : this.labelHandler,
                "displaySelected" : false,
                "getRoles" : this.getRoles
            };

            this.collectionView = new squid_api.view.CollectionManagementWidget(viewOptions);

            return this;
        }

    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.CollectionManagementWidget = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_collection_management_widget);

}(this, function (Backbone, squid_api, template) {

    var View = Backbone.View.extend({
        template : null,
        collection : null,
        config : null,
        type : null,
        typeLabelPlural : null,
        collectionAvailable : null,
        comparator : null,
        parentType : null,

        initialize: function(options) {
            var me = this;
            this.status = squid_api.model.status;

            // setup options
            if (options.template) {
                this.template = options.template;
            } else {
                this.template = template;
            }
            if (options.type) {
                this.type = options.type;
            }
            if (options.typeLabelPlural) {
                this.typeLabelPlural = options.typeLabelPlural;
            } else {
                this.typeLabelPlural = this.type + "s";
            }
            if (options.config) {
                this.config = options.config;
            } else {
                this.config = squid_api.model.config;
            }
            if (options.parent) {
                this.parent = options.parent;
            }
            if (options.modelView) {
                this.modelView = options.modelView;
            }
            if (options.modalView) {
                this.modalView = options.modalView;
            } else {
                this.modalView = squid_api.view.ModalView;
            }
            if (options.comparator) {
                this.comparator = options.comparator;
            } else {
                // default is : sort by alpha name and dynamic last
                this.comparator =  function(a, b) {
                    var r = me.dynamicComparator(a,b);
                    if (r === 0) {
                        r = me.alphaNameComparator(a,b);
                    }
                    return r;
                };
            }

            this.listenTo(this.config, "change:"+this.type.toLowerCase(), this.render);

            // once the parent role changes, initialize the collection
            if (this.parent) {
                this.listenTo(this.config, "change:"+this.parent.toLowerCase(), this.initCollection);
            } else {
                this.listenTo(squid_api.model.login, "change:accessToken", this.initCollection);
            }

            this.render();
        },

        setParent : function() {
            // set & fetch parent
            this.parent.set("id", { projectId : this.config.get("project")});
        },

        fetchParent : function() {
            // fetch parent
            this.parent.fetch({
                error: function() {
                    me.status.set({"error":response});
                }
            });
        },

        initCollection : function() {
            var me = this;

            // match a base collection
            for (var collectionItem in squid_api.model) {
                var str = collectionItem;
                var res = str.match(this.type + "Collection");
                if (res) {
                    this.collection = new squid_api.model[res]();
                }
            }
            if (this.collection) {
                this.$el.find("button").html("<span class='glyphicon glyphicon-refresh'></span> fetching " + me.typeLabelPlural);
                // once collection synced, re-render button
                this.collection.on("sync", this.render, this);
                // set & fetch collection
                if (this.parent) {
                    this.collection.parentId = this.config.get(this.parent);
                }
                this.collection.fetch({
                    success : function() {
                        me.collectionAvailable = true;
                    },
                    error : function(collection, response, options) {
                        me.status.set({"error":response});
                    }
                });
            }
        },

        alphaNameComparator : function(a,b) {
            var va = a.get("name").toLowerCase();
            var vb = b.get("name").toLowerCase();
            if (va < vb) {
                return -1;
            }
            if (va > vb) {
                return 1;
            }
            return 0;
        },

        dynamicComparator : function(a,b) {
            var da = a.get("dynamic");
            var db = b.get("dynamic");
            return (da === db) ? 0 : da ? 1 : -1;
        },

        events: {
            "click .squid-api-collection-modal-trigger": "initializeModal"
        },

        initializeModal: function(){
            this.modalView = new squid_api.view.ModalView({
                el : this.$el.find(".modal-wrapper"),
                internalView : new this.contentView()
            });
         },

        render: function() {
            var me = this;

            if (! this.contentView) {
                // modal content view
                this.contentView = Backbone.View.extend({
                    initialize: function() {
                        me.collection.on("sync", this.render, this);
                        this.listenTo(me.config, "change:"+me.type.toLowerCase(), this.render);

                        if (me.parent) {
                            this.listenTo(me.config, "change:"+me.parent.toLowerCase(), this.initParent);
                        } else {
                            this.listenTo(squid_api.model.login, "change:accessToken", this.initParent);
                        }

                        me.selectedModel = new squid_api.model[me.type + "Model"]();

                        this.listenTo(me.selectedModel, "change", function(model) {
                            // creation
                            if (model.get("oid")) {
                                // add model to collection
                                me.collection.add(model);
                            }
                        });

                        this.initParent();
                    },

                    initParent: function() {
                        if (me.parent) {
                            // match a base model
                            for (var modelItem in squid_api.model) {
                                var str = modelItem;
                                var res = str.match(me.parent + "Model");
                                if (res) {
                                    this.parentModel = new squid_api.model[res]();
                                    this.parentModel.set("id", {projectId : me.parent});
                                    // fetch model
                                    this.parentModel.fetch({
                                        success: this.render,
                                        error: function() {
                                            // status error
                                        }
                                    });
                                }
                            }
                        } else {
                            this.parentModel = squid_api.model.login;
                            this.render();
                        }
                    },

                    events: {
                        // select
                        "click .select": function(event) {
                            var value = $(event.target).parent('tr').attr('data-attr');
                            me.config.set(me.type.toLowerCase(), value);
                        },
                        "click .create": function() {
                            me.selectedModel.clear();
                            me.modalView.render(new me.modelView({
                                model : me.selectedModel
                            }));
                        },
                        "click .edit": function(event) {
                            var id = $(event.target).parents('tr').attr("data-attr");
                            var model = me.collection.get(id);
                            me.selectedModel.set(model.attributes, {"silent" : true});
                            me.modalView.render(new me.modelView({
                                model : me.selectedModel
                            }));
                        },
                        "click .refresh": function(event) {
                            var id = $(event.target).parents('tr').attr("data-attr");
                            var model = me.collection.get(id);
                            squid_api.refreshObjectType(model);
                        },
                        "click .delete": function(event) {
                            var id = $(event.target).parents('tr').attr("data-attr");
                            var model = me.collection.get(id);
                            if (confirm("are you sure you want to delete the " + model.definition.toLowerCase() + " " + model.get("name") + "?")) {
                                if (true) {
                                    model.destroy({
                                        wait : true,
                                        success:function(model) {
                                            // close modal
                                            $(me.collectionModal.el).trigger("hidden.bs.modal");
                                            // set status
                                            var message = me.type + " with name " + model.get("name") + " has been successfully deleted";
                                            me.status.set({'message' : message});
                                        },
                                        error : function(collection, response) {
                                            me.status.set({'error' : response});
                                        }
                                    });
                                }
                            }
                        }
                    },
                    getRoles: function() {
                        // roles
                        var roles = {"create" : false, "edit" : false, "delete" : false, "refresh" : false};
                        if (this.parentModel) {
                            var parentRole = this.parentModel.get("_role");
                            // write role
                            if (parentRole == "OWNER" || parentRole == "WRITE") {
                                roles.create = true;
                                roles.edit = true;
                                roles.delete = true;
                            }
                        }
                        return roles;

                    },
                    render: function() {
                        var jsonData = {
                            models : [],
                            roles : this.getRoles(),
                            type : me.type,
                            modalHtml : true
                        };
                        // store models
                        if (me.collection) {
                            for (i=0; i<me.collection.models.length; i++) {
                                var model = {};
                                model.label = me.collection.models[i].get("name");
                                model.value = me.collection.models[i].get("oid");
                                model.roles = this.getRoles();

                                // detect selected model
                                if (model.value == me.config.get(me.type.toLowerCase())) {
                                    model.selected = true;
                                }
                                jsonData.models.push(model);
                            }
                        }

                        // print template
                        var html = me.template(jsonData);
                        this.$el.html(html);
                        return this;
                    }
                    });
                }

                var jsonData = {
                    collectionAvailable : this.collectionAvailable,
                    type : this.typeLabelPlural,
                    modalHtml : false
                };

                // print template
                var html = $(this.template(jsonData));
                this.$el.html(html);

            return this;
        }

    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.ColumnsManagementWidget = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_columns_management_widget);

}(this, function (Backbone, squid_api, template) {

    var View = Backbone.View.extend({

        successHandler: null,
        errorHandler: null,
        modalElementClassName : "squid-api-admin-widgets-modal-form",
        buttonLabel : null,
        autoOpen: null,
        parent: null,
        schemasCallback : null,
        beforeRenderHandler : null,
        modalTitle : null,
        collection : null,

        initialize: function(options) {
            var me = this;

            // setup options
            if (options.template) {
                this.template = options.template;
            } else {
                this.template = template;
            }
            if (options.successHandler) {
                this.successHandler = options.successHandler;
            }
            if (options.errorHandler) {
                this.errorHandler = options.errorHandler;
            }
            if (options.buttonLabel) {
                this.buttonLabel = options.buttonLabel;
            }
            if (options.autoOpen) {
                this.autoOpen = options.autoOpen;
            }
            if (options.parent) {
                this.parent = options.parent;
            }
            if (options.schemasCallback) {
                this.schemasCallback = options.schemasCallback;
            }
            if (options.beforeRenderHandler) {
                this.beforeRenderHandler = options.beforeRenderHandler;
            }
            if (options.modalTitle) {
                this.modalTitle = options.modalTitle;
            }
            if (options.createOnlyView) {
                this.createOnlyView = options.createOnlyView;
            }
            if (options.type) {
                this.type = options.type;
            }
            if (options.config) {
            	this.config = options.config;
            } else {
            	this.config = squid_api.model.config;
            }
            if (options.filters) {
            	this.filters = options.filters;
            } else {
            	this.filters = squid_api.model.filters;
            }
            if (options.status) {
            	this.status = options.status;
            } else {
            	this.status = squid_api.model.status;
            }

            // relations
            me.relations = new squid_api.model.RelationCollection();
            me.relations.collectionAvailable = true;
            me.relations.parentId = {};
            me.relations.parentId.projectId = squid_api.model.config.get("project");
            me.relations.fetch({
                success: function() {
                    me.relations.fetched = true;
                }
            });
            // domains
            me.domains = new squid_api.model.DomainCollection();
            me.domains.collectionAvailable = true;
            me.domains.parentId = {};
            me.domains.parentId.projectId =  squid_api.model.config.get("project");
            me.domains.fetch({
                success: function() {
                    me.domains.fetched = true;
                }
            });
            this.render();
            if (this.collection) {
            	if (! this.collection.fetched) {
                    if (me.config.get("domain")) {
                        this.collection.parentId = {
                        	projectId : me.config.get("project"),
                        	domainId : me.config.get("domain")
                        };
                        this.collection.on("beforeFetch", function() {
                            me.formModal.$el.find("select").prop("disabled", true);
                        });
                        this.collection.fetch({
                            success: function() {
                                me.formModal.$el.find("select").prop("disabled", false);
                            }
                        });
                    }
                }
            }
            if (this.parent) {
                this.listenTo(this.parent, "change:id", this.render);
            }
        },

        updateForm : function() {
            var jsonData = this.viewData();
        },

        sortData : function(data) {

        	// build the parent index
        	var lookup = {};
            for (var ix1=0; ix1<data.length; ix1++)  {
            	lookup[data[ix1].id]=data[ix1];
            }
            // build the sort name
            for (var ix2=0; ix2<data.length; ix2++)  {
            	var parentId = data[ix2].parentId;
            	data[ix2].sortName = data[ix2].name;
            	data[ix2].depth = 0;
            	while (parentId) {
            		var parent = lookup[parentId];
            		if (parent) {
	            		data[ix2].sortName = parent.name + "/" + data[ix2].sortName;
	            		if (data[ix2].depth<5) data[ix2].depth++;
	            		parentId = parent.parentId;
            		} else {
            			break;
            		}
            	}
            }

        	// alphabetical sorting
            data.sort(function(a, b){
				 var nameA = a.sortName.toLowerCase();
				 var nameB = b.sortName.toLowerCase();
				 if (nameA < nameB)  {
					 // sort string ascending
					 return -1;
				 } else if (nameA > nameB) {
					 return 1;
				 } else {
					 return 0; // no sorting
				 }
        	});

            return data;
        },

        viewData: function() {
            var models = this.collection.models;
            var viewData = {"dynamic" : [], "nonDynamic" : []};
            for (i=0; i<models.length; i++) {
                var obj = {};
                obj.name = models[i].get("name");
                obj.id = models[i].get("oid");

                if (models[i].get("parentId")) {
                    obj.parentId = models[i].get("parentId")[this.model.definition.toLowerCase() + "Id"];
                }

                if (models[i].get("dynamic")) {
                    viewData.dynamic.push(obj);
                } else {
                    viewData.nonDynamic.push(obj);
                }
            }

            // sort data
            viewData.dynamic = this.sortData(viewData.dynamic);
            viewData.nonDynamic = this.sortData(viewData.nonDynamic);

            return viewData;
        },

        refreshChosenColumns: function(model) {
            var metrics = this.config.get("chosenMetrics");
            if (this.model.definition == "Metric") {
                if (metrics) {
                    if (metrics.indexOf(model.get("oid")) > -1) {
                        // remove metric from chosen array
                        this.config.set("chosenMetrics", metrics.splice(metrics.indexOf(model.get("oid")), 1));
                    }
                }
            }
        },

        refreshCollection: function() {
            var me = this;
            if (me.model.definition == "Dimension") {
                var selection = me.filters.get("selection");
                var period = me.config.get("period");
                var domain = me.config.get("domain");
                if (selection) {
                    var facets = selection.facets;
                    if (facets) {
                        var updatedFacets = [];
                        for (var i=0; i<facets.length; i++) {
                            if (me.collection.where({oid: facets[i].dimension.oid}).length === 0) {
                                // reset period if facet not found
                                if (period) {
                                    if (period[domain]) {
                                        if (period[domain].id == facets[i].id) {
                                            delete period[domain];
                                            me.config.set("period", period);
                                        }
                                    }
                                }
                                // reset user selection if facet not found
                                selection.facets.splice(i, 1);
                                me.config.trigger("change:domain", me.config);
                            }
                        }
                    }
                }
            } else if (me.model.definition == "Metric") {
                me.config.trigger("change:domain", me.config);
            }
        },

        render : function() {
            var me = this;
            var collection = this.collection;

            this.columnsView = Backbone.View.extend({
                initialize: function() {
                    this.collection = collection;
                    this.collection.on("add remove change", this.render, this);
                },
                activatePlugin: function() {
                    this.$el.find("select").bootstrapDualListbox({
                        moveOnSelect: false,
                        showFilterInputs: false,
                        filterTextClear : " ",
                        selectedListLabel: "Selected " + me.model.definition.toLowerCase() +"s",
                        nonSelectedListLabel: "Available " + me.model.definition.toLowerCase() +"s",
                        selectorMinimalHeight: 250
                    });
                },
                events: {
                    "click .add" : function() {
                        new squid_api.view.ModelManagementView({
                            model : new squid_api.model[me.model.definition + "Model"](),
                            collection : me.collection,
                            parent : me.parent,
                            autoOpen : true,
                            buttonLabel : "add",
                            successHandler : function() {
                                squid_api.model.status.set({'message' : me.model.definition +  " successfully created"});
                                me.collection.add(this);
                                me.refreshCollection();
                            }
                        });
                    },
                    "click .edit" : function(event) {
                        var id = $(event.target).attr("data-value");
                        var model = me.collection.get(id);
                        new squid_api.view.ModelManagementView({
                            model : model,
                            parent : me.parent,
                            collection : me.collection,
                            autoOpen : true,
                            buttonLabel : "add",
                            successHandler : function() {
                                squid_api.model.status.set({'message' : me.model.definition +  " successfully modified"});
                                me.refreshCollection();
                            }
                        });
                    },
                    "click .delete" : function(event) {
                        var id = $(event.target).attr("data-value");
                        var model = me.collection.get(id);
                        if (confirm("are you sure you want to delete the " + model.definition.toLowerCase() + " " + model.get("name") + "?")) {
                            console.log("here");
                            if (true) {
                                model.destroy({
                                    success:function(model) {
                                        var message = model.definition + " with name " + model.get("name") + " has been successfully deleted";
                                        squid_api.model.status.set({'message' : message});
                                        me.refreshCollection();
                                        /* if deleting a dimension/metric, we need to remove it
                                           from the config if it exists
                                         */
                                        me.refreshChosenColumns(model);
                                    }
                                });
                            }
                        }
                    },
                    "click .relations" : function() {
                        new squid_api.view.RelationModelManagementView({
                            el : this.el,
                            buttonLabel : "<i class='fa fa-arrows-h'></i>",
                            type : "Relation",
                            modalTitle : "Relation for domain: " + this.domainName,
                            collection : me.relations,
                            model : new squid_api.model.RelationModel(),
                            parent : me.domains,
                            autoOpen : true,
                            successHandler : function() {
                                var message = me.type + " with name " + this.get("name") + " has been successfully modified";
                                squid_api.model.status.set({'message' : message});
                            }
                        });
                    },
                    "change select" : function(event) {
                        var dynamic = [];
                        var nonDynamic = [];

                        // update edit element
                        var name = $(event.target).find("option:selected:last").html();
                        var value = $(event.target).find("option:selected:last").val();

                        //update edit / delete buttons
                        if (name !== undefined) {
                            this.$el.find(".edit").removeAttr("disabled");
                            this.$el.find(".edit").html("edit " + name);
                            this.$el.find(".edit").attr("data-value", value);

                            this.$el.find(".delete").removeAttr("disabled");
                            this.$el.find(".delete").html("delete " + name);
                            this.$el.find(".delete").attr("data-value", value);
                        }

                        // selected values in the second select box
                        var options1 = $(this.$el.find("select")[1]).find("option");
                        var options2 = $(this.$el.find("select")[0]).find("option");

                        // store visually updated attributes
                        for (i=0; i<options1.length; i++) {
                            nonDynamic.push(options1[i]);
                        }
                        for (i=0; i<options2.length; i++) {
                            dynamic.push(options2[i]);
                        }
                        // check nonDynamic Data
                        var model;
                        var changeCount = 0;
                        for (i=0; i<nonDynamic.length; i++) {
                            model = this.collection.get($(nonDynamic[i]).val());
                            if (model.get("dynamic") === true) {
                                changeCount++;
                                model.set({"dynamic":false},{silent: true});
                            }
                        }
                        // check dynamic Data
                        for (i=0; i<dynamic.length; i++) {
                            model = this.collection.get($(dynamic[i]).val());
                            if (model.get("dynamic") === false) {
                                changeCount++;
                                model.set({"dynamic":true},{silent: true});
                            }
                        }

                        // update all models at the same time
                        if (changeCount > 0) {
                            this.collection.saveAll(this.collection.models).then(function(collection, model) {
                                me.refreshCollection();
                            });
                        }
                    }
                },
                render: function() {
                    this.$el.html(template(me.viewData()));
                    this.activatePlugin();
                    return this;
                }
            });

            // instantiate a new modal view, set the content & automatically open
            if (this.formModal) {
                this.formModal.open();
            } else {
                this.formModal = new Backbone.BootstrapModal({
                    content: new this.columnsView(),
                    cancelText: "close",
                    title: me.type
                });
                this.formModal.open();
            }

            // modal wrapper class
            $(this.formModal.el).addClass(this.modalElementClassName);

            // modal definition class
            $(this.formModal.el).find(".modal-dialog").addClass(me.model.definition + "-primary");

            // on cancel
            this.formModal.on('cancel', function() {
                $(".squid-api-dialog").remove();
            });

            /* bootstrap doesn't remove modal from dom when clicking outside of it.
               Check to make sure it has been removed whenever it isn't displayed.
            */
            $(this.formModal.el).one('hidden.bs.modal', function () {
                me.closeModal();
            });
            $(this.formModal.el).find(".close").one("click", function() {
                $(me.formModal.el).trigger("hidden.bs.modal");
            });
            $(this.formModal.el).find(".cancel").one("click", function() {
                $(me.formModal.el).trigger("hidden.bs.modal");
            });
        },
        closeModal : function() {
            this.formModal.close();
            this.formModal.remove();
        }
    });

    return View;
}));

(function (root, factory) {
    factory(root.Backbone, root.squid_api);
}(this, function (Backbone, squid_api) {

    /*jshint multistr: true */

    squid_api.model.ProjectModel.prototype.definition = "Project";
    squid_api.model.ProjectModel.prototype.ignoredAttributes = [
                                                                'accessRights', 'config', 'relations', 'domains' ];
    squid_api.model.ProjectModel.prototype.schema = {
            "id" : {
                "title" : " ",
                "type" : "Object",
                "subSchema" : {
                    "projectId" : {
                        "options" : [],
                        "type" : "Text",
                        "editorClass" : "hidden"
                    }
                },
                "editorClass" : "hidden",
                "fieldClass" : "id"
            },
            "name" : {
                "type" : "Text",
                "editorClass" : "form-control",
                "fieldClass" : "name"
            },
            "dbUrl" : {
                "title" : "Database URL",
                "type" : "Text",
                "editorClass" : "form-control",
                "position" : 1,
                "fieldClass" : "dbUrl"
            },
            "dbUser" : {
                "title" : "Database User",
                "type" : "Text",
                "editorClass" : "form-control",
                "position" : 2,
                "fieldClass" : "dbUser"
            },
            "dbPassword" : {
                "title" : "Database Password",
                "type" : "Password",
                "editorClass" : "form-control",
                "position" : 3,
                "fieldClass" : "dbPassword"
            },
            "dbSchemas" : {
                "title" : "Database Schemas",
                "type" : "Checkboxes",
                "editorClass" : " ",
                "options" : [],
                "position" : 4,
                "fieldClass" : "dbSchemas"
            }
    };


    squid_api.model.DomainModel.prototype.definition = "Domain";
    squid_api.model.DomainModel.prototype.ignoredAttributes = [
                                                               'accessRights', 'dimensions', 'metrics' ];
    squid_api.model.DomainModel.prototype.schema = {
            "id" : {
                "title" : " ",
                "type" : "Object",
                "subSchema" : {
                    "projectId" : {
                        "options" : [],
                        "type" : "Text",
                        "editorClass" : "hidden"
                    },
                    "domainId" : {
                        "options" : [],
                        "type" : "Text",
                        "editorClass" : "form-control"
                    }
                },
                "editorClass" : "hidden",
                "fieldClass" : "id"
            },
            "name" : {
                "type" : "Text",
                "editorClass" : "form-control",
                "fieldClass" : "name"
            },
            "subject" : {
                "type" : "Object",
                "title" : "",
                "subSchema" : {
                    "value" : {
                        "title" : "Subject Value",
                        "type" : "DomainExpressionEditor",
                        "editorClass" : "form-control suggestion-box"
                    }
                },
                "position" : 1,
                "fieldClass" : "subject"
            }
    };

    squid_api.model.RelationModel.prototype.definition = "Relation";
    squid_api.model.RelationModel.prototype.ignoredAttributes = [ 'accessRights' ];
    squid_api.model.RelationModel.prototype.schema = {
            "id" : {
                "title" : " ",
                "type" : "Object",
                "subSchema" : {
                    "projectId" : {
                        "options" : [],
                        "type" : "Text",
                        "title" : " ",
                        "editorClass" : "hidden"
                    },
                    "relationId" : {
                        "options" : [],
                        "type" : "Text",
                        "editorClass" : "form-control"
                    }
                },
                "editorClass" : "hidden",
                "fieldClass" : "id"
            },
            "leftId" : {
                "title" : " ",
                "type" : "Object",
                "subSchema" : {
                    "projectId" : {
                        "options" : [],
                        "type" : "Text",
                        "title" : " ",
                        "editorClass" : "hidden"
                    },
                    "domainId" : {
                        "options" : [],
                        "type" : "Select",
                        "editorClass" : "form-control",
                        "title" : "Left Domain"
                    }
                },
                "fieldClass" : "leftId"
            },
            "leftCardinality" : {
                "type" : "Select",
                "editorClass" : "form-control",
                "options" : [ "ZERO_OR_ONE", "ONE", "MANY" ],
                "fieldClass" : "leftCardinality"
            },
            "rightCardinality" : {
                "type" : "Select",
                "editorClass" : "form-control",
                "options" : [ "ZERO_OR_ONE", "ONE", "MANY" ],
                "fieldClass" : "rightCardinality"
            },
            "rightId" : {
                "title" : " ",
                "type" : "Object",
                "subSchema" : {
                    "projectId" : {
                        "options" : [],
                        "type" : "Text",
                        "title" : " ",
                        "editorClass" : "hidden"
                    },
                    "domainId" : {
                        "options" : [],
                        "type" : "Select",
                        "editorClass" : "form-control",
                        "title" : "Right Domain"
                    }
                },
                "fieldClass" : "rightId"
            },
            "leftName" : {
                "type" : "Text",
                "editorClass" : "form-control",
                "fieldClass" : "leftName"
            },
            "rightName" : {
                "type" : "Text",
                "editorClass" : "form-control",
                "fieldClass" : "rightName"
            },
            "joinExpression" : {
                "title" : " ",
                "type" : "Object",
                "subSchema" : {
                    "value" : {
                        "title" : "Join Expression",
                        "type" : "RelationExpressionEditor",
                        "editorClass" : "form-control suggestion-box"
                    }
                },
                "fieldClass" : "joinExpression"
            }
    };

    squid_api.model.DimensionModel.prototype.definition = "Dimension";
    squid_api.model.DimensionModel.prototype.ignoredAttributes = [
                                                                  'options', 'accessRights', 'dynamic', 'attributes',
                                                                  'valueType' ];
    squid_api.model.DimensionModel.prototype.schema = {
            "id" : {
                "title" : " ",
                "type" : "Object",
                "subSchema" : {
                    "projectId" : {
                        "options" : [],
                        "type" : "Text",
                        "editorClass" : "hidden"
                    },
                    "domainId" : {
                        "options" : [],
                        "type" : "Text",
                        "editorClass" : "form-control"
                    },
                    "dimensionId" : {
                        "options" : [],
                        "type" : "Text",
                        "editorClass" : "form-control"
                    }
                },
                "editorClass" : "hidden",
                "fieldClass" : "id"
            },
            "name" : {
                "type" : "Text",
                "editorClass" : "form-control",
                "fieldClass" : "name"
            },
            "type" : {
                "type" : "Checkboxes",
                "editorClass" : " ",
                "options" : [ {
                    "val" : "CATEGORICAL",
                    "label" : "Indexed"
                }, {
                    "val" : "CONTINUOUS",
                    "label" : "Period"
                } ],
                "position" : 1,
                "fieldClass" : "type"
            },
            "parentId" : {
                "title" : " ",
                "type" : "Object",
                "subSchema" : {
                    "projectId" : {
                        "options" : [],
                        "type" : "Text",
                        "editorClass" : "hidden",
                        "fieldClass" : "hidden"
                    },
                    "domainId" : {
                        "options" : [],
                        "type" : "Text",
                        "editorClass" : "form-control",
                        "fieldClass" : "hidden"
                    },
                    "dimensionId" : {
                        "options" : [],
                        "type" : "Text",
                        "editorClass" : "form-control",
                        "title" : "Parent Dimension"
                    }
                },
                "position" : 2,
                "fieldClass" : "parentId"
            },
            "expression" : {
                "type" : "Object",
                title : "",
                "subSchema" : {
                    "value" : {
                        "type" : "DimensionExpressionEditor",
                        "editorClass" : "form-control suggestion-box",
                        "title" : "Expression Value"
                    }
                },
                "position" : 3,
                "fieldClass" : "expression"
            }
    };

    squid_api.model.MetricModel.prototype.definition = "Metric";
    squid_api.model.MetricModel.prototype.schema = {
            "id" : {
                "title" : " ",
                "type" : "Object",
                "subSchema" : {
                    "projectId" : {
                        "options" : [],
                        "type" : "Text",
                        "editorClass" : "hidden"
                    },
                    "domainId" : {
                        "options" : [],
                        "type" : "Text",
                        "editorClass" : "form-control"
                    },
                    "metricId" : {
                        "options" : [],
                        "type" : "Text",
                        "editorClass" : "form-control"
                    }
                },
                "editorClass" : "hidden",
                "fieldClass" : "id"
            },
            "dynamic" : {
                "type" : "Text",
                "editorClass" : "form-control",
                "fieldClass" : "dynamic hidden"
            },
            "name" : {
                "type" : "Text",
                "editorClass" : "form-control",
                "fieldClass" : "name"
            },
            "expression" : {
                "title" : "",
                "type" : "Object",
                "subSchema" : {
                    "value" : {
                        "title" : "Expression Value",
                        "type" : "MetricExpressionEditor",
                        "editorClass" : "form-control suggestion-box",
                    }
                },
                "position" : 1,
                "fieldClass" : "expression"
            }
    };

    squid_api.model.BookmarkModel.prototype.definition = "Bookmark";
    squid_api.model.BookmarkModel.prototype.ignoredAttributes = ['accessRights'];
    squid_api.model.BookmarkModel.prototype.schema = {
        "id" : {
            "title" : " ",
            "type" : "Object",
            "subSchema" : {
                "projectId" : {
                    "options" : [],
                    "type" : "Text",
                    "editorClass" : "hidden"
                },
                "bookmarkId" : {
                    "options" : [],
                    "type" : "Text",
                    "editorClass" : "form-control"
                }
            },
            "editorClass" : "hidden",
            "fieldClass" : "id"
        },
        "name" : {
            "type" : "Text",
            "editorClass" : "form-control",
            "fieldClass" : "name"
        },
        "description" : {
            "type" : "Text",
            "editorClass" : "form-control",
            "fieldClass" : "description"
        },
        "path" : {
            "type" : "Text",
            "editorClass" : "form-control",
            "fieldClass" : "path"
        },
        "config" : {
            "type" : "JsonTextArea",
            "template" : _.template('\
                            <div>\<div>\
                                <button class="btn btn-default" id="btn-use-current-config" type="button"><span class="glyphicon glyphicon-save"></span>use current config</button>\
                            </div>\<label for="<%= editorId %>">\
                                <% if (titleHTML){ %><%= titleHTML %>\
                                <% } else { %><%- title %><% } %>\
                              </label>\
                              <div>\
                                <span data-editor></span>\
                                <div class="error-text" data-error></div>\
                                <div class="error-help"><%= help %></div>\
                              </div>\
                            </div>\
                          ', null, null),
            "title" : "Config",
            "position" : 1,
            "fieldClass" : "config",
            "editorClass" : "form-control",
            "validators": [
                 function checkJSON(value, formValues) {
                     try {
                         if (value && (typeof value === "string")) {
                             JSON.parse(value);
                         }
                     } catch (e) {
                         return {
                             type: 'config',
                             message: 'Config must be valid JSON'
                         };
                     }
                 }
             ]
        }
    };

    // Define "jsonTextArea" Custom Editor
    var jsonTextArea = Backbone.Form.editors.Text.extend({

        tagName: 'textarea',

        /**
         * Override Text constructor so type property isn't set (issue #261)
         */
        initialize: function(options) {
            // Call parent constructor
            Backbone.Form.editors.Base.prototype.initialize.call(this, options);
            this.$el.attr("rows", 3);
        },

        setValue: function(value) {
            // beautify json value
            var val;
            if (value) {
                val = JSON.stringify(value, null, 4);
            }
            this.$el.val(val);
        },

        getValue: function() {
            // transform text value to json
            var json;
            var val = this.$el.val();
            if (val) {
                try {
                    json = JSON.parse(val);
                } catch (e) {
                    // parse error, ignore to let validation proceed
                    json = val;
                }
            }
            return json;
        },
    });

    // Define "baseExpressionEditor" Custom Editor
    var baseExpressionEditor = Backbone.Form.editors.Base.extend({
        tagName: 'textarea',
        modelId: null,

        events: {
            'keyup' : 'renderDialog',
            'click' : 'renderDialog'
        },

        initialize: function(options) {
            // Call parent constructor
            Backbone.Form.editors.Base.prototype.initialize.call(this, options);
            if (options.schema.modelId) {
                this.modelId = options.schema.modelId;
            }
        },

        getValue: function() {
            return this.$el.val();
        },

        setValue: function(value) {
            this.$el.val(value);
        },

        render: function() {
            this.setValue(this.value);

            return this;
        },

        performRequest: function(url, data) {
            var me = this;
            var request = $.ajax({
                type: "GET",
                url: url,
                dataType: 'json',
                data: data,
                success:function(response) {
                    // remove any existing suggestions dialogs
                    me.$el.parents().find(".squid-api-pre-suggestions").dialog("destroy").remove();
                    // detemine if there is an error or not
                    if (response.validateMessage.length === 0) {
                        me.$el.removeClass("invalid-expression").addClass("valid-expression");
                    } else {
                        me.$el.removeClass("valid-expression").addClass("invalid-expression");
                    }
                    // append box if definitions exist
                    if (response.suggestions && response.suggestions.length > 0) {
                        // store offset
                        var offset = response.filterIndex;
                        // append div
                        me.$el.after("<div class='squid-api-pre-suggestions squid-api-dialog'><ul></ul></div>");
                        for (i=0; i<response.suggestions.length; i++) {
                            me.$el.siblings(".squid-api-pre-suggestions").find("ul").append("<li class=\"" + response.suggestions[i].objectType.toString() + " " + response.suggestions[i].valueType.toLowerCase() + "\"><span class='suggestion'>" +  response.suggestions[i].suggestion + "</span><span class='valueType'>(" + response.suggestions[i].valueType.toLowerCase() + ")</span></li>");
                        }
                        me.$el.siblings(".squid-api-pre-suggestions").find("li").click(me, function(event) {
                            var item;
                            if ($(event.target).is("li")) {
                                item = $(event.target).find(".suggestion").html();
                            } else {
                                item = $(event.target).parent().find(".suggestion").html();
                            }
                            var str = me.$el.val().substring(0, offset) + item.substring(0);
                            me.setValue(str);
                            me.renderDialog();
                        });
                        me.$el.siblings(".squid-api-pre-suggestions").dialog({
                            dialogClass: "squid-api-suggestion-dialog squid-api-dialog",
                            position: { my: "center top", at: "center bottom+4", of: me.$el },
                            clickOutside: true, // clicking outside the dialog will close it
                            clickOutsideTrigger: me.$el, // Element (id or class) that triggers the dialog opening
                        });
                    } else {
                        // set message
                        squid_api.model.status.set("message", response.validateMessage);
                    }
                    me.$el.focus();
                },
                error: function(response) {
                    if (response.responseJSON.error) {
                        squid_api.model.status.set({'message' : response.responseJSON.error});
                    } else {
                        squid_api.model.status.set({'error' : response});
                    }
                }
            });
        }
    });

    var domainExpressionEditor = baseExpressionEditor.extend({
        renderDialog: function() {
            var url = squid_api.apiURL + "/projects/" + squid_api.model.config.get("project") + "/domains-suggestion";
            var data = {"expression" : this.$el.val(), "offset" : this.$el.prop("selectionStart") + 1, "access_token" : squid_api.model.login.get("accessToken")};
            this.performRequest(url, data);

        }
    });
    var dimensionExpressionEditor = baseExpressionEditor.extend({
        renderDialog: function() {
            var url = squid_api.apiURL + "/projects/" + squid_api.model.config.get("project") + "/domains/" + squid_api.model.config.get("domain") + "/dimensions-suggestion";
            var data = {"expression" : this.$el.val(), "offset" : this.$el.prop("selectionStart") + 1, "access_token" : squid_api.model.login.get("accessToken")};
            data.dimensionId = this.modelId;
            this.performRequest(url, data);

        }
    });
    var metricExpressionEditor = baseExpressionEditor.extend({
        renderDialog: function() {
            var url = squid_api.apiURL + "/projects/" + squid_api.model.config.get("project") + "/domains/" + squid_api.model.config.get("domain") + "/metrics-suggestion";
            var data = {"expression" : this.$el.val(), "offset" : this.$el.prop("selectionStart") + 1, "access_token" : squid_api.model.login.get("accessToken")};
            this.performRequest(url, data);

        }
    });
    var relationExpressionEditor = baseExpressionEditor.extend({
        renderDialog: function() {
            var url = squid_api.apiURL + "/projects/" + squid_api.model.project.get("id").projectId + "/relations-suggestion";
            var data = {"expression" : this.$el.val(), "offset" : this.$el.prop("selectionStart") + 1, "access_token" : squid_api.model.login.get("accessToken")};
            data.leftDomainId = $(".squid-api-admin-widgets-modal-form .leftId select").val();
            data.rightDomainId = $(".squid-api-admin-widgets-modal-form .rightId select").val();
            this.performRequest(url, data);

        }
    });

    // Register custom editors
    Backbone.Form.editors.JsonTextArea = jsonTextArea;
    Backbone.Form.editors.DomainExpressionEditor = domainExpressionEditor;
    Backbone.Form.editors.DimensionExpressionEditor = dimensionExpressionEditor;
    Backbone.Form.editors.MetricExpressionEditor = metricExpressionEditor;
    Backbone.Form.editors.RelationExpressionEditor = relationExpressionEditor;
}));

(function (root, factory) {
    root.squid_api.view.DomainManagementWidget = factory(root.Backbone, root.squid_api);

}(this, function (Backbone, squid_api, template) {

    var View = Backbone.View.extend({

        createOnlyView : null,
        config : null,
        domain : new squid_api.model.DomainModel(),
        project : new squid_api.model.ProjectModel(),

        initialize: function(options) {
        	if (options.config) {
        		this.config = options.config;
        	} else {
        		this.config = squid_api.model.config;
        	}
            if (options.createOnlyView) {
                this.createOnlyView = true;
            }
            if (options.options) {
                this.config = options.config;
            }
            if (options.status) {
            	this.status = options.status;
            } else {
            	this.status = squid_api.model.status;
            }
            this.listenTo(this.config, "change:domain", this.setDomain);
            this.listenTo(this.config, "change:project", this.setProject);
            this.render();
        },

        setProject : function() {
            var me = this;
            var projectId = this.config.get("project");
            this.project.set({"id" : {"projectId" : projectId}});
            this.project.fetch();
        },

        setDomain : function() {
            var me = this;
            var projectId = this.config.get("project");
            var domainId = this.config.get("domain");
            if (domainId) {
                this.domain.set({"id" : {"projectId" : projectId, "domainId" : domainId}});
                this.domain.fetch({
                    error: function(xhr) {
                        me.status.set({"error":xhr});
                    }
                });
            } else {
                this.domain.set({"id" : null});
            }
        },

        render: function() {
        	var me = this;

            var viewOptions = {
                    "el" : this.$el,
                    type : "Domain",
                    "model" : this.domain,
                    "parent" : this.project
            };

            if (this.createOnlyView) {
                viewOptions.successHandler = function(value) {
                    var collection = new squid_api.model.DomainCollection();
                    collection.create(this);
                    var message = me.type + " with name " + this.get("name") + " has been successfully created";
                    me.status.set({'message' : message});

                    if (!value) {
                        value = this.get("id").domainId;
                    }
                    squid_api.model.config.set({
                        "domain" : value
                    });
                    me.config.unset("bookmark");
                };
                viewOptions.buttonLabel = "Create a new one";
                viewOptions.createOnlyView = this.createOnlyView;
                var modelView = new squid_api.view.ModelManagementView(viewOptions);
            } else {
                viewOptions.changeEventHandler = function(value){
                    if (!value) {
                        value = this.get("id").domainId;
                    }
                    me.config.set({
                        "domain" : value
                    });
                    me.config.unset("bookmark");
                };
                // DomainCollectionManagementWidget
                var collectionView = new squid_api.view.CollectionManagementWidget(viewOptions);
            }

            return this;
        }
    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.ModalView = factory(root.Backbone, root.squid_api);

}(this, function (Backbone, squid_api, template) {

    var View = Backbone.View.extend({

        internalView : null,
        template : null,

        initialize: function(options) {
            if (options.template) {
                this.template = options.template;
            } else {
                this.template = squid_api.template.squid_api_modal_view;
            }
            if (options.internalView) {
                this.internalView = options.internalView;
            }
            // output base html
            this.renderBase();
            // show modal
            this.initializeModal();
            // update view
            this.render(this.internalView);
        },

        renderBase: function() {
            var html = this.template();
            this.$el.html(html);
        },
        initializeModal: function() {
            this.$el.find(".modal").modal();
        },
        render: function(view) {
            // insert template
            this.$el.find(".modal-body").html(view.el);

            return this;
        }
    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.ModelManagementWidget = factory(root.Backbone, root.squid_api);

}(this, function (Backbone, squid_api, template) {

    var View = Backbone.View.extend({

        model : null,

        initialize: function(options) {
            if (options.model) {
                this.model = options.model;
            }
            this.render();
        },

        formLengthCheck: function(data) {
            for (var x in data) {
                if (data[x].length === 0) {
                    data[x] = null;
                }
            }
            return data;
        },

        // contentView: function(formContent) {
        //     var me = this;
        //     this.contentView = Backbone.View.extend({
        //         initialize: function() {
        //             this.bind("ok", this.saveForm);
        //             this.render();
        //         },
        //         saveForm: function () {
        //             var error = formContent.validate();
        //             var isNew = me.model.isNew();
        //             if (! error) {
        //                 var data = me.formLengthCheck(formContent.getValue());
        //
        //                 // save model
        //                 me.model.save(data, {
        //                     success: function() {
        //                         alert("success");
        //                     },
        //                     error: function() {
        //                         alert("error");
        //                     }
        //                 });
        //             }
        //         },
        //         render: function() {
        //             this.$el.html(formContent.render().el);
        //             return this;
        //         }
        //     });
        // },

        render: function() {
            var me = this;

            // create form
            var formContent = new Backbone.Form({
                schema: me.model.schema,
                model: me.model
            });

            // place the form into a backbone view
            this.$el.html(formContent.render().el);

            return this;
        }

    });

    return View;
}));


(function (root, factory) {
    root.squid_api.view.ProjectModelWidget = factory(root.Backbone, root.squid_api);

}(this, function (Backbone, squid_api, template) {

    var View = squid_api.view.ModelManagementWidget.extend({

        contentView: function(formContent) {
            var me = this;
            this.contentView = Backbone.View.extend({
                initialize: function() {
                    this.bind("ok", this.saveForm);
                },
                saveForm: function () {
                    var error = formContent.validate();
                    var isNew = me.model.isNew();
                    if (! error) {
                        var data = me.formLengthCheck(formContent.getValue());

                        // me.model.schema[x].template = _.template('\
                        //             <div>\
                        //               <label for="<%= editorId %>">\
                        //                 <% if (titleHTML){ %><%= titleHTML %>\
                        //                 <% } else { %><%- title %><% } %>\
                        //               </label>\
                        //               <div>\
                        //                 <span data-editor></span>\
                        //                 <div class="error-text" data-error></div>\
                        //                 <div class="error-help"><%= help %></div>\
                        //               </div>\
                        //               <div>\
                        //                   <button class="btn btn-default" id="btn-check" type="button"><span class="glyphicon glyphicon-refresh"></span>' + checkConnectionText + '</button>\
                        //               </div>\
                        //             </div>\
                        //           ', null, null);

                        if (isNew) {
                            data.id.projectId = null;
                        }

                        // save model
                        me.model.save(data, {
                            success: function() {
                                alert("success");
                            },
                            error: function() {
                                alert("error");
                            }
                        });
                    }
                },
                render: function() {
                    this.$el.html(formContent.render().el);
                    return this;
                }
            });
        }

    });

    return View;
}));

// (function (root, factory) {
//     root.squid_api.view.RelationModelManagementView = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_relation_management_widget);
//
// }(this, function (Backbone, squid_api, template) {
//
//     var View = squid_api.view.ModelManagementView.extend({
//
//         successHandler: null,
//         errorHandler: null,
//         modalElementClassName : "squid-api-admin-widgets-modal-form squid-api-admin-widgets-modal-form-collection",
//         buttonLabel : null,
//         autoOpen: null,
//         parent: null,
//         schemasCallback : null,
//         beforeRenderHandler : null,
//         modalTitle : null,
//         collection : null,
//
//         initialize: function(options) {
//             var me = this;
//
//             // setup options
//             if (options.template) {
//                 this.template = options.template;
//             } else {
//                 this.template = template;
//             }
//             if (options.successHandler) {
//                 this.successHandler = options.successHandler;
//             }
//             if (options.errorHandler) {
//                 this.errorHandler = options.errorHandler;
//             }
//             if (options.buttonLabel) {
//                 this.buttonLabel = options.buttonLabel;
//             }
//             if (options.autoOpen) {
//                 this.autoOpen = options.autoOpen;
//             }
//             if (options.parent) {
//                 this.parent = options.parent;
//             }
//             if (options.schemasCallback) {
//                 this.schemasCallback = options.schemasCallback;
//             }
//             if (options.beforeRenderHandler) {
//                 this.beforeRenderHandler = options.beforeRenderHandler;
//             }
//             if (options.modalTitle) {
//                 this.modalTitle = options.modalTitle;
//             }
//             if (options.createOnlyView) {
//                 this.createOnlyView = options.createOnlyView;
//             }
//
//             // Set Form Schema
//             this.setSchema();
//
//             if (this.collection) {
//                 this.collection.on("reset change remove sync", this.updateForm, this);
//             }
//             if (this.model) {
//                 this.listenTo(this.model, 'change', this.setSchema);
//             }
//             if (this.parent) {
//                 this.listenTo(this.parent, "change:id", this.render);
//             }
//             if (this.autoOpen) {
//                 this.prepareForm();
//             }
//         },
//
//         updateForm : function() {
//             var jsonData = {"models" : this.viewData()};
//             this.relationView.$el.html(this.template(jsonData));
//         },
//
//         viewData: function() {
//             var models = squid_api.utils.getDomainRelations(this.collection.models, squid_api.model.config.get("domain"));
//             var arr = [];
//             for (i=0; i<models.length; i++) {
//                 var obj = {};
//                 obj.oid = models[i].get("oid");
//                 obj.leftName = models[i].get("leftName");
//                 obj.rightName = models[i].get("rightName");
//
//                 // set cardinality booleans for handlebar display
//                 var leftCardinality = models[i].get("leftCardinality");
//                 var rightCardinality = models[i].get("rightCardinality");
//                 if (leftCardinality == "MANY") {
//                     obj.leftMany = true;
//                 } else if (leftCardinality == "ZERO_OR_ONE") {
//                     obj.leftZeroOrOne = true;
//                 } else if (leftCardinality == "ONE") {
//                     obj.leftOne = true;
//                 }
//                 if (rightCardinality == "MANY") {
//                     obj.rightMany = true;
//                 } else if (rightCardinality == "ZERO_OR_ONE") {
//                     obj.rightZeroOrOne = true;
//                 } else if (rightCardinality == "ONE") {
//                     obj.rightOne = true;
//                 }
//                 arr.push(obj);
//             }
//
//             return arr;
//         },
//
//         renderForm : function() {
//             var me = this;
//             var jsonData = {"models" : this.viewData()};
//
//             // render the form into a backbone view
//             this.relationView = Backbone.View.extend({
//                 events: {
//                     "click .edit" : function(event) {
//                         var oid = $(event.target).parents("tr").attr("data-value");
//                         var model = me.collection.get(oid);
//                         new squid_api.view.ModelManagementView({
//                             el : $(this),
//                             model : model,
//                             parent : me.parent,
//                             autoOpen : true,
//                             beforeRenderHandler : me.beforeRenderHandler,
//                             buttonLabel : "edit",
//                             successHandler : function() {
//                                 var message = "relation successfully modified";
//                                 squid_api.model.status.set({'message' : message});
//                             }
//                         });
//                     },
//                     "click .delete" : function(event) {
//                         var oid = $(event.target).parents("tr").attr("data-value");
//                         var model = me.collection.get(oid);
//                         if (confirm("are you sure you want to delete this relation?")) {
//                             if (true) {
//                                 model.destroy({
//                                     success:function() {
//                                         $(me.formModal.el).trigger("hidden.bs.modal");
//                                         squid_api.model.status.set({'message' : "relation successfully deleted"});
//                                         me.collection.trigger("change");
//                                     }
//                                 });
//                             }
//                         }
//                     },
//                     "click .add" : function(event) {
//                         new squid_api.view.ModelManagementView({
//                             el : $(this),
//                             model : me.model,
//                             parent : me.parent,
//                             autoOpen : true,
//                             beforeRenderHandler : me.beforeRenderHandler,
//                             buttonLabel : "edit",
//                             successHandler : function() {
//                                 squid_api.model.status.set({'message' : "relation successfully created"});
//                                 me.collection.create(this);
//                             }
//                         });
//                     }
//                 },
//                 render: function() {
//                     this.$el.html(template(jsonData));
//                     return this;
//                 }
//             });
//
//             // instantiate relation view
//             this.relationView = new this.relationView();
//
//             // modal title
//             modalTitle = "Domain Relations";
//
//             // instantiate a new modal view, set the content & automatically open
//             this.formModal = new Backbone.BootstrapModal({
//                 content: this.relationView,
//                 cancelText: "close",
//                 title: modalTitle
//             }).open();
//
//             // modal wrapper class
//             $(this.formModal.el).addClass(this.modalElementClassName);
//
//             // modal definition class
//             $(this.formModal.el).find(".modal-dialog").addClass(me.model.definition);
//
//             /* bootstrap doesn't remove modal from dom when clicking outside of it.
//                Check to make sure it has been removed whenever it isn't displayed.
//             */
//             $(this.formModal.el).one('hidden.bs.modal', function () {
//                 me.closeModal();
//             });
//             $(this.formModal.el).find(".close").one("click", function() {
//                 $(me.formModal.el).trigger("hidden.bs.modal");
//             });
//             $(this.formModal.el).find(".cancel").one("click", function() {
//                 $(me.formModal.el).trigger("hidden.bs.modal");
//             });
//         },
//         closeModal : function() {
//             this.formModal.close();
//             this.formModal.remove();
//         }
//     });
//
//     return View;
// }));

(function (root, factory) {
    root.squid_api.view.ShortcutsAdminView = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_shortcuts_admin_widget);

}(this, function (Backbone, squid_api, template) {

    var View = Backbone.View.extend({
        template : null,
        onSave : null,

        initialize: function(options) {

            // setup options
            if (options.template) {
                this.template = options.template;
            } else {
                this.template = template;
            }

            if (options.onSave) {
                this.onSave = options.onSave;
            }

            this.render();
        },

        events: {
            'click #saveBtn'  : 'saveShortcut',
        },

        render: function() {
            var me = this;
            this.$el.html(this.template());
        },

        saveShortcut : function(event) {
            event.preventDefault();
            var me = this;
            var shortcutId = this.$el.find("#shortcutId").val();
            if (shortcutId === "") {
                shortcutId =  null;
            }
            var shortcutName = this.$el.find("#shortcutName").val();
            var currentStateId = squid_api.model.state.get("oid");
            // TODO handle the case when state ins't existing yet
            if (currentStateId) {
                var shortcutModel = new squid_api.model.ShortcutModel();
                var data = {
                    "id" : {
                        "customerId" : this.customerId,
                        "shortcutId" : shortcutId
                    },
                    "name" : shortcutName,
                    "stateId" : currentStateId
                };
                shortcutModel.save(data, {
                    success : function(model, response, options) {
                        squid_api.model.status.set("message", "Shortcut successfully saved with Id : "+model.get("oid"));
                        if (me.onSave) {
                            me.onSave.call();
                        }
                    },
                    error : function(model, response, options) {
                        squid_api.model.status.set('error', 'Shortcut save failed');
                    }
                });
            }
        }
    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.UsersAdminView = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_users_admin_widget);

}(this, function (Backbone, squid_api, template) {

    var View = Backbone.View.extend({
        template : null,
        widgetContainer : '#squid-api-admin-widgets-user-table',
        groupData : {},
        messageToDisplay: '',

        initialize: function(options) {
            var me = this;

            // setup options
            if (options.template) {
                this.template = options.template;
            } else {
                this.template = template;
            }

            if (options.status) {
                this.status = options.status;
            }

            if (! this.model) {
                // Connect to the api to retrieve user/group collections
                this.model = new squid_api.model.UserCollection();
                this.groups = new squid_api.model.GroupCollection();
            }

            this.model.on("reset change remove sync", this.render, this);

            this.render();
        },

        events: {
            'click td.user-value'  : 'modifyUserValue',
            'click .delete'  : 'deleteUser',
            'click button.add'  : 'addUser',
            'blur .edit' : 'updateValue',
            'keypress .edit' : 'updateValue',
            'click .group-value .badge' : 'deleteGroup',
            'mouseenter .group-value' : 'groupMouseOver',
            'mouseleave .group-value' : 'groupMouseOut',
            'mouseover td.user-value' : 'groupIconOver',
            'mouseout td.user-value' : 'groupIconOut',
        },

        groupIconOver: function(item) {
            if ($(item.currentTarget).siblings('.action-section').find('button').attr('data-value') !== 'add') {
                $(item.currentTarget).addClass('field-icon-on');
            }
        },

        groupIconOut: function(item) {
            if ($(item.currentTarget).siblings('.action-section').find('button').attr('data-value') !== 'add') {
                $(item.currentTarget).removeClass('field-icon-on');
            }
        },

        addUser: function(item) {
            var me = this;

            // Get all input fields
            var toShow = $(item.currentTarget).parents('tr').find('td input');
            var inputFields = $(item.currentTarget).parents('tr').find('td .add');

            var data = {};

            // Set to user Add mode
            if ($(item.currentTarget).attr('data-value') === 'add') {
                // Change add button to save and change attr-value
                $(item.currentTarget).attr('data-value', 'save');
                $(item.currentTarget).text('save');

                // Show input fields
                $(toShow).show();
                $(item.currentTarget).parents('tr').find('td span.send-email-label').show();

                // Focus on all input fields
                $(toShow).focus();

                // Hide Select
            } else {
                for(i=0; i<inputFields.length; i++) {
                    var attr = $(inputFields[i]).attr('data-attribute');
                    var value = $(inputFields[i]).val();
                    if (attr !== undefined) {
                        if (attr !== 'sendemail') {
                            if (attr === 'groups') {
                                if (value !== null) {
                                    data[attr] = [value];
                                }
                            } else {
                                if (value !== null) {
                                    data[attr] = value;
                                }
                            }
                        }
                    }
                }

                // Add to collection and sync
                data.id = {'userId' : null};

                // Get checkbox status before model refresh
                var sendEmail = $(this.widgetContainer + ' .email-checkbox').is(':checked');

                this.model.create(data, {
                    wait: true,
                    success: function(model, response){
                        var message = 'You have successfully saved user with login: ' + data.login;
                        if (sendEmail) {
                            var linkUrl = encodeURIComponent(squid_api.apiURL.substring(0, squid_api.apiURL.indexOf('/v'), 1) + "/admin/console/index.html?access_token={access_token}#!user");
                            var sendMailUrl = squid_api.apiURL + '/set-user-pwd?' + 'clientId=' + squid_api.clientId + '&email=' + data.email + '&customerId=' + squid_api.customerId + '&link_url=' + linkUrl;

                            $.get(sendMailUrl).done(function() {
                                message = message + ' and a confirmation email has been sent to:' + data.email;
                                me.status.set('message', message);
                            }).fail(function() {
                                message = message + ' but confirmation email was not sent';
                                me.status.set('message', message);
                            });
                        } else {
                            me.status.set('message', message);
                        }
                    },
                    error: function(model) {
                        me.status.set('message', model.responseJSON.error);
                    }
                });
            }
        },

        groupMouseOver: function(item) {
            $(item.currentTarget).append("<span class='badge'>x</span>");
        },

        groupMouseOut: function(item) {
            $(this.widgetContainer + ' .badge').remove();
        },

        deleteGroup: function(item) {
            var me = this;

            var itemData = $(item.currentTarget).parents('td');

            // Obtain current groupId
            var groupItems = $(item.currentTarget).parent("div").siblings('div');

            // Get the ID to find model in collection
            var modelId = $(item.currentTarget).parents('tr').attr('data-id');

            if (confirm('Are you sure you want to remove this group?')) {

                var groups = [];
                for (i=0; i<groupItems.length; i++) {
                    groups.push($(groupItems[i]).attr('attr-value'));
                }

                // Model to remove
                var model = this.model.get(modelId);

                // Create new object for model
                var data = {};
                data.groups = groups;

                // Save onto the server
                model.save(data, {
                    success : function(model, response) {
                        me.status.set('message', 'group successfully deleted');
                    }
                });
            } else {
                // To be refactored, (To remove the class after user-value click event)
                setTimeout(function() {
                    $(itemData).removeClass('editing');
                }, 1);
            }
        },

        deleteUser: function(item) {
            var me = this;

            // Get the ID to find model in collection
            var modelId = $(item.currentTarget).parents('tr').attr('data-id');

            if (confirm('Are you sure you want to remove this user?')) {
                // Model to remove
                var model = this.model.get(modelId);

                // Remove from collection
                this.model.remove(modelId);

                // Delete on the server
                model.destroy({success: function(model, response) {
                    me.status.set('message', 'user with login ' + model.get('login') + ' successfully deleted');
                }});
            }
        },

        remove: function() {
            this.$el.empty();
            this.stopListening();
            return this;
        },

        modifyUserValue: function(item) {
            // Show text inputs
            $(".editing").removeClass("editing");
            var currentTarget = $(item.currentTarget);

            currentTarget.addClass("editing");

            // Focus on input fields
            currentTarget.find("input").focus();

            // If Select Box
            if (currentTarget.find('select').length > 0 && currentTarget.find('select option').length < 1) {
                var groups = this.groups.toJSON();

                // Remove existing select options
                currentTarget.find("select options").remove();

                // Make sure select box is empty
                currentTarget.find("select").empty();
                // Append groups to dropdown
                for (var key in groups) {
                    if (groups[key].id) {
                        currentTarget.find("select").append("<option value='" + groups[key].id.userGroupId + "'>" + groups[key].name + "</option>");
                    }
                }
            }
        },

        updateValue: function(item) {
            var me = this;

            if (item.which == 13 || item.type == "focusout") {
                /*
                    Called after input areas have been manually focused by the user
                */

                // Variable setup
                var previousValue;
                var groupData;
                var groupArray = [];

                // Retrieve previous value from label / div fields
                if (this.$('.editing label').length > 0) {
                    previousValue = this.$('.editing label').text();
                }
                else {
                    groupData = this.$(this.widgetContainer + ' .editing div');
                    for (i=0; i<groupData.length; i++) {
                        groupArray.push($(groupData[i]).attr('attr-value'));
                    }
                    previousValue = "";
                }

                // Model Attribute to update
                var modelAttr = this.$(this.widgetContainer + ' .editing .edit').attr('data-attribute');

                // Updated Value
                var value;
                if (this.$(this.widgetContainer + ' .editing select.edit').length === 0) {
                    value = this.$(this.widgetContainer + ' .editing input.edit').val();
                } else {
                    value = this.$(this.widgetContainer + ' .editing select.edit option:selected').val();
                }

                // Get the ID to find model in collection
                var modelId = this.$('.editing').parent("tr").attr('data-id');

                // Trim the value
                var trimmedValue = false;
                if (value !== "null") {
                    trimmedValue = value.trim();
                }

                if (trimmedValue) {
                    if (previousValue !== trimmedValue) {
                        // Get model to update
                        var model = this.model.get(modelId);

                        // Create new object for model
                        var data = {};

                        if (modelAttr === 'groups') {
                            groupArray.push(value);
                            data[modelAttr] = groupArray;
                        } else {
                            data[modelAttr] = value;
                        }

                        // Update model (which also updates collection)
                        model.set(data);

                        // Update on server
                        model.save(data, {
                            success : function(model, response) {
                                me.status.set('message', 'successfully updated user with login : ' + model.get('login'));
                            },
                            error: function(model, response) {
                                me.model.fetch();
                            }
                        });
                    }
                }
                $(this.widgetContainer + ' .editing').removeClass('editing');
            }
        },

        fetchModels: function() {
            var me = this;

            this.groups.fetch({
                success : function(model, response) {
                    me.model.fetch({
                    success : function(model, response) {

                        }
                    });
                }
            });
        },

        render: function() {
            var me = this;

            // Store the role / ability to add
            var role;
            var addUser = true;

            // Obtain the role
            if (squid_api.model.customer) {
                role = squid_api.model.customer.get("_role");
            }

            // Can add user rules
            if (role !== "WRITE" && role !== "OWNER") {
                addUser = false;
            }

            // Render Template
            this.$el.html(this.template({
                addUser : addUser
            }));

            // Set ID for Table Render
            var globalID;

            if (this.$el.attr("id")) {
                globalID = "#" + this.$el.attr('id');
            } else {
                console.log("No ID assigned to DOM element for User Table");
            }

            // Collection models as an array of objects
            var users = this.model.toJSON();
            var groups = this.groups.toJSON();

            // If users exist then create data table in D3
            if (users && groups) {
                var tableRows = d3.select(globalID + " tbody").selectAll("tbody")
                    .data(users)
                    .enter()
                    .append("tr")
                    .attr("data-id", function(d) {
                        return d.id.userId; //So backbone recognises the model on update
                    });

                var loginValue = tableRows.append("td")
                    .html(function(d) {
                        return "<label>" + d.login + "</label><input class='edit form-control input-sm' data-attribute='login' value='" + d.login + "'/><i class='field-icon fa fa-pencil'></i>" ;
                    })
                    .attr('class', function(d) {
                        if (d._role !== "READ") {
                            return 'user-value';
                        }
                    });

                var emailValue = tableRows.append("td")
                    .html(function(d) {
                        return "<label>" + d.email + "</label><input class='edit form-control input-sm' data-attribute='email' value='" + d.email + "'/><i class='field-icon fa fa-pencil'></i>" ;
                    })
                    .attr('class', function(d) {
                        if (d._role !== "READ") {
                            return 'user-value';
                        }
                    });

                var passWordValue = tableRows.append("td")
                    .html(function(d) {
                        return "<label>*****</label><input class='edit form-control input-sm' type='password' data-attribute='password' value='null'/><i class='field-icon fa fa-pencil'></i>" ;
                    })
                    .attr('class', function(d) {
                        if (d._role !== "READ") {
                            return 'user-value';
                        }
                    });

                var groupValues = tableRows.append("td")

                    .html(function(d) {
                        var g = d.groups;
                        var data = "";
                        var canEdit;

                        if (d._role !== "READ") {
                            canEdit = 'group-value';
                        }

                        // Groups colour logic
                        if (g) {
                            for (i=0; i<g.length; i++) {
                                if (g[i] === "superuser") {
                                    data += "<div class='red " + canEdit + "' attr-id='groupId' class='red' attr-value='" + g[i] + "'></div>";
                                } else {
                                    var pattern = /admin/;
                                    if (pattern.test(g[i])) {
                                        data += "<div class='orange " + canEdit + "' attr-id='groupId' class='orange' attr-value='" + g[i] + "'></div>";
                                    } else {
                                        data += "<div class='" + canEdit + "' attr-id='groupId' attr-value='" + g[i] + "'></div>";
                                    }
                                }
                            }
                        }
                        data += "<i class='field-icon fa fa-plus-square'></i> <select class='edit form-control input-sm' data-attribute='groups'></select>";
                        return data;
                    })
                    .attr('class', function(d) {
                        if (d._role !== "READ") {
                            return ['user-value' + ' group-section'];
                        }
                    });

                // Print group names instead of their Id's
                this.assignGroupNames();

                var actionValues = tableRows.append("td")
                    .html(function(d) {
                        if (d._role !== "READ") {
                            return "<button class='delete form-control'>Delete</button>";
                        }
                    });
            }

            // Instantiate Data Table Plugin
            this.$el.find("#squid-api-admin-widgets-user-table table").DataTable({
                "lengthChange": false,
                "paging": false
            });
        },

        assignGroupNames: function() {
            /*
                Retrieve groupId / attribute values and match with api group data
                If we have a match, print the name of the group directly as the dom el.
            */
            var groupIds = $(this.widgetContainer + ' div[attr-id="groupId"]');
            var groups = this.groups.toJSON();
            if (groupIds.length > 0) {
                for (i=0; i<groupIds.length; i++) {
                    for (var key in groups) {
                        if (groups[key].oid === $(groupIds[i]).attr('attr-value')) {
                            $(groupIds[i]).text(groups[key].name);
                        }
                    }
                    var id = $(groupIds[i]).attr('attr-value');
                }
            }
        }
    });

    return View;
}));
