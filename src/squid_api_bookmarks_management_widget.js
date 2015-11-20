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

        initialize: function(options) {
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
                } else {
                    this.typeLabel = this.type;
                }
                if (options.typeLabelPlural) {
                    this.typeLabelPlural = options.typeLabelPlural;
                } else {
                    this.typeLabelPlural = this.typeLabel + "s";
                }
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
            this.render();
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
                "createOnlyView" : this.createOnlyView,
                "autoOpen" : this.autoOpen,
                "changeEventHandler" : this.changeEventHandler
            };
            var collectionView = new squid_api.view.CollectionManagementWidget(viewOptions);
            
            return this;
        }

    });

    return View;
}));