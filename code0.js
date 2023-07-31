gdjs.MAINMENUCode = {};
gdjs.MAINMENUCode.GDNewSpriteObjects1= [];
gdjs.MAINMENUCode.GDNewSpriteObjects2= [];
gdjs.MAINMENUCode.GDNewSpriteObjects3= [];
gdjs.MAINMENUCode.GDNewSpriteObjects4= [];
gdjs.MAINMENUCode.GDmulabtnObjects1= [];
gdjs.MAINMENUCode.GDmulabtnObjects2= [];
gdjs.MAINMENUCode.GDmulabtnObjects3= [];
gdjs.MAINMENUCode.GDmulabtnObjects4= [];
gdjs.MAINMENUCode.GDbg1Objects1= [];
gdjs.MAINMENUCode.GDbg1Objects2= [];
gdjs.MAINMENUCode.GDbg1Objects3= [];
gdjs.MAINMENUCode.GDbg1Objects4= [];
gdjs.MAINMENUCode.GDaimanObjects1= [];
gdjs.MAINMENUCode.GDaimanObjects2= [];
gdjs.MAINMENUCode.GDaimanObjects3= [];
gdjs.MAINMENUCode.GDaimanObjects4= [];


gdjs.MAINMENUCode.mapOfGDgdjs_9546MAINMENUCode_9546GDmulabtnObjects2Objects = Hashtable.newFrom({"mulabtn": gdjs.MAINMENUCode.GDmulabtnObjects2});
gdjs.MAINMENUCode.asyncCallback23859996 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "select", false);
}}
gdjs.MAINMENUCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.6), (runtimeScene) => (gdjs.MAINMENUCode.asyncCallback23859996(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MAINMENUCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23857708);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.MAINMENUCode.GDmulabtnObjects2, gdjs.MAINMENUCode.GDmulabtnObjects3);

{for(var i = 0, len = gdjs.MAINMENUCode.GDmulabtnObjects3.length ;i < len;++i) {
    gdjs.MAINMENUCode.GDmulabtnObjects3[i].getBehavior("Tween").addObjectScaleTween("Hover", 1.05, 1.05, "bouncePast", 100, false, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23858244);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.MAINMENUCode.GDmulabtnObjects2, gdjs.MAINMENUCode.GDmulabtnObjects3);

{for(var i = 0, len = gdjs.MAINMENUCode.GDmulabtnObjects3.length ;i < len;++i) {
    gdjs.MAINMENUCode.GDmulabtnObjects3[i].setColor("8;255;56");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "04f47fbcf6c41c8e94f6f8c8d610c273ab576a1c940a988c02b6c59a36679c41_Jump_Land_01.wav", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23859620);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.MAINMENUCode.GDmulabtnObjects2, gdjs.MAINMENUCode.GDmulabtnObjects3);

{for(var i = 0, len = gdjs.MAINMENUCode.GDmulabtnObjects3.length ;i < len;++i) {
    gdjs.MAINMENUCode.GDmulabtnObjects3[i].getBehavior("Tween").addObjectScaleTween("Hover", 0.95, 0.95, "easeInCubic", 50, false, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23860100);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MAINMENUCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23860724);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MAINMENUCode.GDmulabtnObjects2 */
{for(var i = 0, len = gdjs.MAINMENUCode.GDmulabtnObjects2.length ;i < len;++i) {
    gdjs.MAINMENUCode.GDmulabtnObjects2[i].getBehavior("Tween").addObjectScaleTween("Press", 1.05, 1.05, "bouncePast", 50, false, false);
}
}}

}


};gdjs.MAINMENUCode.mapOfGDgdjs_9546MAINMENUCode_9546GDmulabtnObjects1Objects = Hashtable.newFrom({"mulabtn": gdjs.MAINMENUCode.GDmulabtnObjects1});
gdjs.MAINMENUCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("mulabtn"), gdjs.MAINMENUCode.GDmulabtnObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MAINMENUCode.mapOfGDgdjs_9546MAINMENUCode_9546GDmulabtnObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.MAINMENUCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("mulabtn"), gdjs.MAINMENUCode.GDmulabtnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MAINMENUCode.mapOfGDgdjs_9546MAINMENUCode_9546GDmulabtnObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.MAINMENUCode.GDmulabtnObjects1 */
{for(var i = 0, len = gdjs.MAINMENUCode.GDmulabtnObjects1.length ;i < len;++i) {
    gdjs.MAINMENUCode.GDmulabtnObjects1[i].getBehavior("Tween").addObjectScaleTween("Hover", 0.95, 0.95, "bouncePast", 100, false, false);
}
}{for(var i = 0, len = gdjs.MAINMENUCode.GDmulabtnObjects1.length ;i < len;++i) {
    gdjs.MAINMENUCode.GDmulabtnObjects1[i].setColor("255;255;255");
}
}}

}


};gdjs.MAINMENUCode.eventsList3 = function(runtimeScene) {

{


gdjs.MAINMENUCode.eventsList2(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "7fa72663d2b3fcc4aa262ac256fd9e649c88f3acb73d50150a96a98fa4bdf7b3_Barnville.aac", true, 40, 1);
}}

}


};

gdjs.MAINMENUCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MAINMENUCode.GDNewSpriteObjects1.length = 0;
gdjs.MAINMENUCode.GDNewSpriteObjects2.length = 0;
gdjs.MAINMENUCode.GDNewSpriteObjects3.length = 0;
gdjs.MAINMENUCode.GDNewSpriteObjects4.length = 0;
gdjs.MAINMENUCode.GDmulabtnObjects1.length = 0;
gdjs.MAINMENUCode.GDmulabtnObjects2.length = 0;
gdjs.MAINMENUCode.GDmulabtnObjects3.length = 0;
gdjs.MAINMENUCode.GDmulabtnObjects4.length = 0;
gdjs.MAINMENUCode.GDbg1Objects1.length = 0;
gdjs.MAINMENUCode.GDbg1Objects2.length = 0;
gdjs.MAINMENUCode.GDbg1Objects3.length = 0;
gdjs.MAINMENUCode.GDbg1Objects4.length = 0;
gdjs.MAINMENUCode.GDaimanObjects1.length = 0;
gdjs.MAINMENUCode.GDaimanObjects2.length = 0;
gdjs.MAINMENUCode.GDaimanObjects3.length = 0;
gdjs.MAINMENUCode.GDaimanObjects4.length = 0;

gdjs.MAINMENUCode.eventsList3(runtimeScene);

return;

}

gdjs['MAINMENUCode'] = gdjs.MAINMENUCode;
