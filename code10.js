gdjs.tahniah_32mCode = {};
gdjs.tahniah_32mCode.GDbgObjects1= [];
gdjs.tahniah_32mCode.GDbgObjects2= [];
gdjs.tahniah_32mCode.GDbgObjects3= [];
gdjs.tahniah_32mCode.GDbgObjects4= [];
gdjs.tahniah_32mCode.GDtahniahObjects1= [];
gdjs.tahniah_32mCode.GDtahniahObjects2= [];
gdjs.tahniah_32mCode.GDtahniahObjects3= [];
gdjs.tahniah_32mCode.GDtahniahObjects4= [];
gdjs.tahniah_32mCode.GDmenuObjects1= [];
gdjs.tahniah_32mCode.GDmenuObjects2= [];
gdjs.tahniah_32mCode.GDmenuObjects3= [];
gdjs.tahniah_32mCode.GDmenuObjects4= [];
gdjs.tahniah_32mCode.GDaimanObjects1= [];
gdjs.tahniah_32mCode.GDaimanObjects2= [];
gdjs.tahniah_32mCode.GDaimanObjects3= [];
gdjs.tahniah_32mCode.GDaimanObjects4= [];


gdjs.tahniah_32mCode.mapOfGDgdjs_9546tahniah_959532mCode_9546GDmenuObjects2Objects = Hashtable.newFrom({"menu": gdjs.tahniah_32mCode.GDmenuObjects2});
gdjs.tahniah_32mCode.asyncCallback25750804 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MAINMENU", false);
}}
gdjs.tahniah_32mCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.15), (runtimeScene) => (gdjs.tahniah_32mCode.asyncCallback25750804(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.tahniah_32mCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25749396);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.tahniah_32mCode.GDmenuObjects2, gdjs.tahniah_32mCode.GDmenuObjects3);

{for(var i = 0, len = gdjs.tahniah_32mCode.GDmenuObjects3.length ;i < len;++i) {
    gdjs.tahniah_32mCode.GDmenuObjects3[i].getBehavior("Tween").addObjectScaleTween("Hover", 1.2, 1.2, "linear", 100, false, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25750140);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.tahniah_32mCode.GDmenuObjects2 */
{for(var i = 0, len = gdjs.tahniah_32mCode.GDmenuObjects2.length ;i < len;++i) {
    gdjs.tahniah_32mCode.GDmenuObjects2[i].getBehavior("Tween").addObjectScaleTween("Hover", 0.8, 0.8, "linear", 50, false, false);
}
}
{ //Subevents
gdjs.tahniah_32mCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.tahniah_32mCode.mapOfGDgdjs_9546tahniah_959532mCode_9546GDmenuObjects1Objects = Hashtable.newFrom({"menu": gdjs.tahniah_32mCode.GDmenuObjects1});
gdjs.tahniah_32mCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("menu"), gdjs.tahniah_32mCode.GDmenuObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.tahniah_32mCode.mapOfGDgdjs_9546tahniah_959532mCode_9546GDmenuObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.tahniah_32mCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("menu"), gdjs.tahniah_32mCode.GDmenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.tahniah_32mCode.mapOfGDgdjs_9546tahniah_959532mCode_9546GDmenuObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.tahniah_32mCode.GDmenuObjects1 */
{for(var i = 0, len = gdjs.tahniah_32mCode.GDmenuObjects1.length ;i < len;++i) {
    gdjs.tahniah_32mCode.GDmenuObjects1[i].getBehavior("Tween").addObjectScaleTween("Hover", 1, 1, "linear", 100, false, false);
}
}}

}


};gdjs.tahniah_32mCode.eventsList3 = function(runtimeScene) {

{


gdjs.tahniah_32mCode.eventsList2(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "1799ea55aff96fe51e67c6b6d4f0fdb5aec53df30599cc2138852fae0e7cb638_29 - in the land of morose where the ladies smoke cloves.aac", true, 70, 1);
}}

}


};

gdjs.tahniah_32mCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.tahniah_32mCode.GDbgObjects1.length = 0;
gdjs.tahniah_32mCode.GDbgObjects2.length = 0;
gdjs.tahniah_32mCode.GDbgObjects3.length = 0;
gdjs.tahniah_32mCode.GDbgObjects4.length = 0;
gdjs.tahniah_32mCode.GDtahniahObjects1.length = 0;
gdjs.tahniah_32mCode.GDtahniahObjects2.length = 0;
gdjs.tahniah_32mCode.GDtahniahObjects3.length = 0;
gdjs.tahniah_32mCode.GDtahniahObjects4.length = 0;
gdjs.tahniah_32mCode.GDmenuObjects1.length = 0;
gdjs.tahniah_32mCode.GDmenuObjects2.length = 0;
gdjs.tahniah_32mCode.GDmenuObjects3.length = 0;
gdjs.tahniah_32mCode.GDmenuObjects4.length = 0;
gdjs.tahniah_32mCode.GDaimanObjects1.length = 0;
gdjs.tahniah_32mCode.GDaimanObjects2.length = 0;
gdjs.tahniah_32mCode.GDaimanObjects3.length = 0;
gdjs.tahniah_32mCode.GDaimanObjects4.length = 0;

gdjs.tahniah_32mCode.eventsList3(runtimeScene);

return;

}

gdjs['tahniah_32mCode'] = gdjs.tahniah_32mCode;
