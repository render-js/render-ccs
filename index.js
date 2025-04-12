import MMenu from "./menu/MMenu";
import MMenuItem from "./menu/MMenuItem";
import {AbstractPlugin} from "render-refer";
import MContent from "./input/MContent";

export class RenderCSS extends AbstractPlugin{

    plugin(render) {
        render.addTag(MContent);
        render.addTag(MMenu);
        render.addTag(MMenuItem);
    }
}