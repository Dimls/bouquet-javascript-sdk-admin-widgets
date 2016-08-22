(function (root, factory) {
    root.squid_api.view.DimensionModelManagementWidget = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_model_management_widget);

}(this, function (Backbone, squid_api, template) {

    var View = squid_api.view.BaseModelManagementWidget.extend({

        customDataManipulation: function(data) {
            if (data.type.length === 0) {
                data.type = "INDEX";
            } else {
                data.type = data.type[0];
            }
            if (data.parentId.dimensionId !== null) {
                data.parentId.projectId = data.id.projectId;
                data.parentId.domainId = data.id.domainId;
            }
            if (data.expression) {
                if (data.expression.value === null) {
                    delete data.expression;
                }
            }
            return data;
        },

        onSave: function(model) {
            this.config.trigger("change:selection");
        },

        formEvents: function() {
            // to be overridden from other model management widgets
        },
        setSchema: function() {
            var dfd = $.Deferred();
            var schema = this.model.schema;
            var me = this;
            var project = this.model.get("id").projectId;
            var domain = this.model.get("id").domainId;
            squid_api.getCustomer().then(function(customer) {
                customer.get("projects").load(project).then(function(project) {
                    project.get("domains").load(domain).then(function(domain) {
                        domain.get("dimensions").load().then(function(dimensions) {
                            me.model.schema.parentId.subSchema.dimensionId.options = [me.model.schema.parentId.subSchema.dimensionId.options[0]];
                            for (i=0; i<dimensions.size(); i++) {
                                var dimension = dimensions.at(i);
                                if (dimension.get("oid") !== me.model.get("oid")) {
                                    if (dimension.get("dynamic") === false && dimension.get("valueType") !== "OBJECT") {
                                        var obj = {
                                            "val" : dimension.get("oid"),
                                            "label" : dimension.get("name")
                                        };
                                        me.model.schema.parentId.subSchema.dimensionId.options.push(obj);
                                    }
                                }
                            }
                            dfd.resolve(schema);
                        });
                    });
                });
            });
            return dfd;
        }
    });

    return View;
}));
