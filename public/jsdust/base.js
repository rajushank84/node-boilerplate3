(function(){dust.register("public/templates/base.dust",body_0);function body_0(chk,ctx){return chk.write("<!DOCTYPE html><html lang=\"en\"><head><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><title>App name</title><link rel=\"stylesheet\" href=\"css/app.css\" /><link href=\"css/bootstrap.css\" rel=\"stylesheet\"><style>body {padding-top: 40px;}</style><link href=\"css/bootstrap-responsive.css\" rel=\"stylesheet\"></head><body>").partial("public/templates/inc/header.dust",ctx,null).write("<div class=\"container-fluid\" id=\"container\"><div class=\"row-fluid\"><div id=\"content\" class=\"span9\">").partial(body_1,ctx,null).write("</div></div></div><input type=\"hidden\" id=\"currentView\" value=\"").reference(ctx.get("viewName"),ctx,"h").write("\" /><script src=\"js/lib/dust-core-1.0.0.js\"></script><script data-main=\"js/main\" src=\"js/lib/jquery-min.js\"></script><script data-main=\"js/main\" src=\"js/lib/require.js\"></script><script src=\"js/lib/bootstrap-transition.js\"></script><script src=\"js/lib/bootstrap-collapse.js\"></script></body></html>");}function body_1(chk,ctx){return chk.write("public/templates/").reference(ctx.get("viewName"),ctx,"h").write(".dust");}return body_0;})();