import {ElementAnalyzerServiceBase} from './element-analizer.service'

export class DroppableElementAnalyzerService extends ElementAnalyzerServiceBase  {

    constructor(settings) {
        super(settings);
        this.settings = settings;
        this._tagsCanAccept = ['DIV', 'ARTICLE', 'ASIDE', 'FOOTER', 'HEADER', 'MAIN', 'SECTION', 'DD', 'LI', 'TD', 'FORM'];
        this.init();
    }

    isConfigurable (target) {
        return this.isElement(target) || this.isModule(target) || this.isRow(target);
    }

    isEditableLayout (node) {
        return this.this.isLayout(node) && this.isInEdit(node);
    }

    canMoveModule (node) {
        return this.isModule(node) && this.isInEdit(node);
    }


    canAcceptByClass (node) {
        return this.tools.hasAnyOfClasses(node, this.dropableElements());
    }

    canAcceptByTag (node) {
        if(!node || node.nodeType !== 1) return false;
        return this._tagsCanAccept.indexOf(node.nodeName) !== -1;
    }

    allowDrop (node) {
        return this.tools.parentsOrCurrentOrderMatchOrOnlyFirstOrNone(node, [this.settings.allowDrop, this.settings.nodrop]);
    }

    canInsertBeforeOrAfter (node) {
        return this.canAccept(node.parentNode);
    }

    canAccept (target) {
        // whether or not "target" can accept elements
        return !!(
            this.canAcceptByClass(target) &&
            this.isEditOrInEdit(target) &&
            this.allowDrop(target));

    }

    canReceiveElements(target) {
        return this.isEdit(target) && this.canAcceptByTag(target);
    }

    dropableElements (){
        return this._dropableElements;
    }

    getIteractionTarget(node) {
        return this.tools.firstWithAyOfClassesOnNodeOrParent(node, [
            this.settings.elementClass,
            this.settings.editClass,
            this.settings.moduleClass,
        ]);
    }

    getTarget (node) {

        const target = this.getIteractionTarget(node);
        if(!target || !this.isEditOrInEdit(node) || !this.allowDrop(node)) {
            return null;
        }
        const res = {
            target,
            canInsert: false,
            beforeAfter: false
        }
        if (this.isEdit(target)) {
            res.canInsert = true;
        } else if(this.isElement(target)) {
            if(this.canAcceptByTag(target)) {
                res.canInsert = true;
            }
            //if(this.canInsertBeforeOrAfter(target)) {
                res.beforeAfter = true;
            //}
        } else if(this.isModule(target)) {
            if(this.canInsertBeforeOrAfter(target)) {
                res.beforeAfter = true;
            } else {
                return null;
            }
        } else if(this.isLayout(target)) {
            if(this.canInsertBeforeOrAfter(target)) {
                res.beforeAfter = true;
            } else {
                return null;
            }
        }
        return res;
    }

    init () {
        this._dropableElements = [
            this.settings.elementClass,
            this.settings.cloneableClass,
            this.settings.editClass,
            this.settings.moduleClass,
            this.settings.colClass,
            this.settings.allowDrop,
        ];
    }
}





