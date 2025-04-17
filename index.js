import MMenu from "./menu/MMenu";
import MMenuItem from "./menu/MMenuItem";
import {AbstractPlugin} from "render-refer";
import MContent from "./input/MContent";
import {Actions} from "./action/Actions";

export class RenderCSS extends AbstractPlugin{

    plugin(render,hooks) {
        render.addTag(MContent);
        render.addTag(MMenu);
        render.addTag(MMenuItem);

        render.injectElement("test",new Actions(hooks));
    }
}