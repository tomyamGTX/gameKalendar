gdjs.try_32again_32m1Code = {};
gdjs.try_32again_32m1Code.GDbgObjects1= [];
gdjs.try_32again_32m1Code.GDbgObjects2= [];
gdjs.try_32again_32m1Code.GDbgObjects3= [];
gdjs.try_32again_32m1Code.GDbgObjects4= [];
gdjs.try_32again_32m1Code.GDgagalObjects1= [];
gdjs.try_32again_32m1Code.GDgagalObjects2= [];
gdjs.try_32again_32m1Code.GDgagalObjects3= [];
gdjs.try_32again_32m1Code.GDgagalObjects4= [];
gdjs.try_32again_32m1Code.GDulangObjects1= [];
gdjs.try_32again_32m1Code.GDulangObjects2= [];
gdjs.try_32again_32m1Code.GDulangObjects3= [];
gdjs.try_32again_32m1Code.GDulangObjects4= [];
gdjs.try_32again_32m1Code.GDmenuObjects1= [];
gdjs.try_32again_32m1Code.GDmenuObjects2= [];
gdjs.try_32again_32m1Code.GDmenuObjects3= [];
gdjs.try_32again_32m1Code.GDmenuObjects4= [];


gdjs.try_32again_32m1Code.mapOfGDgdjs_9546try_959532again_959532m1Code_9546GDulangObjects2Objects = Hashtable.newFrom({"ulang": gdjs.try_32again_32m1Code.GDulangObjects2});
gdjs.try_32again_32m1Code.asyncCallback25737532 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "months", false);
}}
gdjs.try_32again_32m1Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.15), (runtimeScene) => (gdjs.try_32again_32m1Code.asyncCallback25737532(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.try_32again_32m1Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25736124);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.try_32again_32m1Code.GDulangObjects2, gdjs.try_32again_32m1Code.GDulangObjects3);

{for(var i = 0, len = gdjs.try_32again_32m1Code.GDulangObjects3.length ;i < len;++i) {
    gdjs.try_32again_32m1Code.GDulangObjects3[i].getBehavior("Tween").addObjectScaleTween("Hover", 1.2, 1.2, "linear", 100, false, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25736868);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.try_32again_32m1Code.GDulangObjects2 */
{for(var i = 0, len = gdjs.try_32again_32m1Code.GDulangObjects2.length ;i < len;++i) {
    gdjs.try_32again_32m1Code.GDulangObjects2[i].getBehavior("Tween").addObjectScaleTween("Hover", 0.8, 0.8, "linear", 50, false, false);
}
}
{ //Subevents
gdjs.try_32again_32m1Code.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.try_32again_32m1Code.mapOfGDgdjs_9546try_959532again_959532m1Code_9546GDulangObjects1Objects = Hashtable.newFrom({"ulang": gdjs.try_32again_32m1Code.GDulangObjects1});
gdjs.try_32again_32m1Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ulang"), gdjs.try_32again_32m1Code.GDulangObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.try_32again_32m1Code.mapOfGDgdjs_9546try_959532again_959532m1Code_9546GDulangObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.try_32again_32m1Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ulang"), gdjs.try_32again_32m1Code.GDulangObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.try_32again_32m1Code.mapOfGDgdjs_9546try_959532again_959532m1Code_9546GDulangObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.try_32again_32m1Code.GDulangObjects1 */
{for(var i = 0, len = gdjs.try_32again_32m1Code.GDulangObjects1.length ;i < len;++i) {
    gdjs.try_32again_32m1Code.GDulangObjects1[i].getBehavior("Tween").addObjectScaleTween("Hover", 1, 1, "linear", 100, false, false);
}
}}

}


};gdjs.try_32again_32m1Code.eventsList3 = function(runtimeScene) {

{


gdjs.try_32again_32m1Code.eventsList2(runtimeScene);
}


};gdjs.try_32again_32m1Code.mapOfGDgdjs_9546try_959532again_959532m1Code_9546GDmenuObjects2Objects = Hashtable.newFrom({"menu": gdjs.try_32again_32m1Code.GDmenuObjects2});
gdjs.try_32again_32m1Code.asyncCallback25740812 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "select", false);
}}
gdjs.try_32again_32m1Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.15), (runtimeScene) => (gdjs.try_32again_32m1Code.asyncCallback25740812(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.try_32again_32m1Code.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25739404);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.try_32again_32m1Code.GDmenuObjects2, gdjs.try_32again_32m1Code.GDmenuObjects3);

{for(var i = 0, len = gdjs.try_32again_32m1Code.GDmenuObjects3.length ;i < len;++i) {
    gdjs.try_32again_32m1Code.GDmenuObjects3[i].getBehavior("Tween").addObjectScaleTween("Hover", 1.2, 1.2, "linear", 100, false, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25740148);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.try_32again_32m1Code.GDmenuObjects2 */
{for(var i = 0, len = gdjs.try_32again_32m1Code.GDmenuObjects2.length ;i < len;++i) {
    gdjs.try_32again_32m1Code.GDmenuObjects2[i].getBehavior("Tween").addObjectScaleTween("Hover", 0.8, 0.8, "linear", 50, false, false);
}
}
{ //Subevents
gdjs.try_32again_32m1Code.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.try_32again_32m1Code.mapOfGDgdjs_9546try_959532again_959532m1Code_9546GDmenuObjects1Objects = Hashtable.newFrom({"menu": gdjs.try_32again_32m1Code.GDmenuObjects1});
gdjs.try_32again_32m1Code.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("menu"), gdjs.try_32again_32m1Code.GDmenuObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.try_32again_32m1Code.mapOfGDgdjs_9546try_959532again_959532m1Code_9546GDmenuObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.try_32again_32m1Code.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("menu"), gdjs.try_32again_32m1Code.GDmenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.try_32again_32m1Code.mapOfGDgdjs_9546try_959532again_959532m1Code_9546GDmenuObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.try_32again_32m1Code.GDmenuObjects1 */
{for(var i = 0, len = gdjs.try_32again_32m1Code.GDmenuObjects1.length ;i < len;++i) {
    gdjs.try_32again_32m1Code.GDmenuObjects1[i].getBehavior("Tween").addObjectScaleTween("Hover", 0.8, 0.8, "linear", 100, false, false);
}
}}

}


};gdjs.try_32again_32m1Code.eventsList7 = function(runtimeScene) {

{


gdjs.try_32again_32m1Code.eventsList3(runtimeScene);
}


{


gdjs.try_32again_32m1Code.eventsList6(runtimeScene);
}


};

gdjs.try_32again_32m1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.try_32again_32m1Code.GDbgObjects1.length = 0;
gdjs.try_32again_32m1Code.GDbgObjects2.length = 0;
gdjs.try_32again_32m1Code.GDbgObjects3.length = 0;
gdjs.try_32again_32m1Code.GDbgObjects4.length = 0;
gdjs.try_32again_32m1Code.GDgagalObjects1.length = 0;
gdjs.try_32again_32m1Code.GDgagalObjects2.length = 0;
gdjs.try_32again_32m1Code.GDgagalObjects3.length = 0;
gdjs.try_32again_32m1Code.GDgagalObjects4.length = 0;
gdjs.try_32again_32m1Code.GDulangObjects1.length = 0;
gdjs.try_32again_32m1Code.GDulangObjects2.length = 0;
gdjs.try_32again_32m1Code.GDulangObjects3.length = 0;
gdjs.try_32again_32m1Code.GDulangObjects4.length = 0;
gdjs.try_32again_32m1Code.GDmenuObjects1.length = 0;
gdjs.try_32again_32m1Code.GDmenuObjects2.length = 0;
gdjs.try_32again_32m1Code.GDmenuObjects3.length = 0;
gdjs.try_32again_32m1Code.GDmenuObjects4.length = 0;

gdjs.try_32again_32m1Code.eventsList7(runtimeScene);

return;

}

gdjs['try_32again_32m1Code'] = gdjs.try_32again_32m1Code;
