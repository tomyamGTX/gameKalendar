gdjs.selectCode = {};
gdjs.selectCode.GDbulanbtnObjects1= [];
gdjs.selectCode.GDbulanbtnObjects2= [];
gdjs.selectCode.GDbulanbtnObjects3= [];
gdjs.selectCode.GDbulanbtnObjects4= [];
gdjs.selectCode.GDharibtnObjects1= [];
gdjs.selectCode.GDharibtnObjects2= [];
gdjs.selectCode.GDharibtnObjects3= [];
gdjs.selectCode.GDharibtnObjects4= [];
gdjs.selectCode.GDkembalibtn2Objects1= [];
gdjs.selectCode.GDkembalibtn2Objects2= [];
gdjs.selectCode.GDkembalibtn2Objects3= [];
gdjs.selectCode.GDkembalibtn2Objects4= [];
gdjs.selectCode.GDNewTextObjects1= [];
gdjs.selectCode.GDNewTextObjects2= [];
gdjs.selectCode.GDNewTextObjects3= [];
gdjs.selectCode.GDNewTextObjects4= [];
gdjs.selectCode.GDbg2Objects1= [];
gdjs.selectCode.GDbg2Objects2= [];
gdjs.selectCode.GDbg2Objects3= [];
gdjs.selectCode.GDbg2Objects4= [];


gdjs.selectCode.mapOfGDgdjs_9546selectCode_9546GDbulanbtnObjects2Objects = Hashtable.newFrom({"bulanbtn": gdjs.selectCode.GDbulanbtnObjects2});
gdjs.selectCode.asyncCallback23873524 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "months", false);
}}
gdjs.selectCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.selectCode.asyncCallback23873524(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.selectCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23870596);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.selectCode.GDbulanbtnObjects2, gdjs.selectCode.GDbulanbtnObjects3);

{for(var i = 0, len = gdjs.selectCode.GDbulanbtnObjects3.length ;i < len;++i) {
    gdjs.selectCode.GDbulanbtnObjects3[i].getBehavior("Tween").addObjectScaleTween("Hover", 1.05, 1.05, "bouncePast", 100, false, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23871132);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.selectCode.GDbulanbtnObjects2, gdjs.selectCode.GDbulanbtnObjects3);

{for(var i = 0, len = gdjs.selectCode.GDbulanbtnObjects3.length ;i < len;++i) {
    gdjs.selectCode.GDbulanbtnObjects3[i].setColor("9;122;255");
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23872084);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.selectCode.GDbulanbtnObjects2, gdjs.selectCode.GDbulanbtnObjects3);

{for(var i = 0, len = gdjs.selectCode.GDbulanbtnObjects3.length ;i < len;++i) {
    gdjs.selectCode.GDbulanbtnObjects3[i].getBehavior("Tween").addObjectScaleTween("Hover", 0.95, 0.95, "easeInCubic", 50, false, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23873204);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.selectCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23874300);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.selectCode.GDbulanbtnObjects2 */
{for(var i = 0, len = gdjs.selectCode.GDbulanbtnObjects2.length ;i < len;++i) {
    gdjs.selectCode.GDbulanbtnObjects2[i].getBehavior("Tween").addObjectScaleTween("Press", 1.05, 1.05, "bouncePast", 50, false, false);
}
}}

}


};gdjs.selectCode.mapOfGDgdjs_9546selectCode_9546GDbulanbtnObjects1Objects = Hashtable.newFrom({"bulanbtn": gdjs.selectCode.GDbulanbtnObjects1});
gdjs.selectCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23875292);
}
if (isConditionTrue_0) {
{/* Unknown object - skipped. */}}

}


};gdjs.selectCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("bulanbtn"), gdjs.selectCode.GDbulanbtnObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.selectCode.mapOfGDgdjs_9546selectCode_9546GDbulanbtnObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.selectCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("bulanbtn"), gdjs.selectCode.GDbulanbtnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.selectCode.mapOfGDgdjs_9546selectCode_9546GDbulanbtnObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.selectCode.GDbulanbtnObjects1 */
{for(var i = 0, len = gdjs.selectCode.GDbulanbtnObjects1.length ;i < len;++i) {
    gdjs.selectCode.GDbulanbtnObjects1[i].getBehavior("Tween").addObjectScaleTween("Hover", 0.95, 0.95, "bouncePast", 100, false, false);
}
}{for(var i = 0, len = gdjs.selectCode.GDbulanbtnObjects1.length ;i < len;++i) {
    gdjs.selectCode.GDbulanbtnObjects1[i].setColor("255;255;255");
}
}
{ //Subevents
gdjs.selectCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.selectCode.mapOfGDgdjs_9546selectCode_9546GDharibtnObjects2Objects = Hashtable.newFrom({"haribtn": gdjs.selectCode.GDharibtnObjects2});
gdjs.selectCode.asyncCallback23880108 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "days", false);
}}
gdjs.selectCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.selectCode.asyncCallback23880108(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.selectCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23877180);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.selectCode.GDharibtnObjects2, gdjs.selectCode.GDharibtnObjects3);

{for(var i = 0, len = gdjs.selectCode.GDharibtnObjects3.length ;i < len;++i) {
    gdjs.selectCode.GDharibtnObjects3[i].getBehavior("Tween").addObjectScaleTween("Hover", 1.05, 1.05, "bouncePast", 100, false, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23877716);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.selectCode.GDharibtnObjects2, gdjs.selectCode.GDharibtnObjects3);

{for(var i = 0, len = gdjs.selectCode.GDharibtnObjects3.length ;i < len;++i) {
    gdjs.selectCode.GDharibtnObjects3[i].setColor("9;122;255");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "04f47fbcf6c41c8e94f6f8c8d610c273ab576a1c940a988c02b6c59a36679c41_Jump_Land_02.wav", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23878668);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.selectCode.GDharibtnObjects2, gdjs.selectCode.GDharibtnObjects3);

{for(var i = 0, len = gdjs.selectCode.GDharibtnObjects3.length ;i < len;++i) {
    gdjs.selectCode.GDharibtnObjects3[i].getBehavior("Tween").addObjectScaleTween("Hover", 0.95, 0.95, "easeInCubic", 50, false, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23879788);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.selectCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23880884);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.selectCode.GDharibtnObjects2 */
{for(var i = 0, len = gdjs.selectCode.GDharibtnObjects2.length ;i < len;++i) {
    gdjs.selectCode.GDharibtnObjects2[i].getBehavior("Tween").addObjectScaleTween("Press", 1.05, 1.05, "bouncePast", 50, false, false);
}
}}

}


};gdjs.selectCode.mapOfGDgdjs_9546selectCode_9546GDharibtnObjects1Objects = Hashtable.newFrom({"haribtn": gdjs.selectCode.GDharibtnObjects1});
gdjs.selectCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23881876);
}
if (isConditionTrue_0) {
{/* Unknown object - skipped. */}}

}


};gdjs.selectCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("haribtn"), gdjs.selectCode.GDharibtnObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.selectCode.mapOfGDgdjs_9546selectCode_9546GDharibtnObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.selectCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("haribtn"), gdjs.selectCode.GDharibtnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.selectCode.mapOfGDgdjs_9546selectCode_9546GDharibtnObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.selectCode.GDharibtnObjects1 */
{for(var i = 0, len = gdjs.selectCode.GDharibtnObjects1.length ;i < len;++i) {
    gdjs.selectCode.GDharibtnObjects1[i].getBehavior("Tween").addObjectScaleTween("Hover", 0.95, 0.95, "bouncePast", 100, false, false);
}
}{for(var i = 0, len = gdjs.selectCode.GDharibtnObjects1.length ;i < len;++i) {
    gdjs.selectCode.GDharibtnObjects1[i].setColor("255;255;255");
}
}
{ //Subevents
gdjs.selectCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.selectCode.mapOfGDgdjs_9546selectCode_9546GDkembalibtn2Objects2Objects = Hashtable.newFrom({"kembalibtn2": gdjs.selectCode.GDkembalibtn2Objects2});
gdjs.selectCode.asyncCallback23886052 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MAINMENU", false);
}}
gdjs.selectCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.selectCode.asyncCallback23886052(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.selectCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23883892);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.selectCode.GDkembalibtn2Objects2, gdjs.selectCode.GDkembalibtn2Objects3);

{for(var i = 0, len = gdjs.selectCode.GDkembalibtn2Objects3.length ;i < len;++i) {
    gdjs.selectCode.GDkembalibtn2Objects3[i].getBehavior("Tween").addObjectScaleTween("Hover", 1.05, 1.05, "bouncePast", 100, false, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23884556);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.selectCode.GDkembalibtn2Objects2, gdjs.selectCode.GDkembalibtn2Objects3);

{for(var i = 0, len = gdjs.selectCode.GDkembalibtn2Objects3.length ;i < len;++i) {
    gdjs.selectCode.GDkembalibtn2Objects3[i].setColor("9;122;255");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "04f47fbcf6c41c8e94f6f8c8d610c273ab576a1c940a988c02b6c59a36679c41_Jump_Land_03.wav", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23885756);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.selectCode.GDkembalibtn2Objects2, gdjs.selectCode.GDkembalibtn2Objects3);

{for(var i = 0, len = gdjs.selectCode.GDkembalibtn2Objects3.length ;i < len;++i) {
    gdjs.selectCode.GDkembalibtn2Objects3[i].getBehavior("Tween").addObjectScaleTween("Hover", 0.95, 0.95, "easeInCubic", 50, false, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23886516);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.selectCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23887500);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.selectCode.GDkembalibtn2Objects2 */
{for(var i = 0, len = gdjs.selectCode.GDkembalibtn2Objects2.length ;i < len;++i) {
    gdjs.selectCode.GDkembalibtn2Objects2[i].getBehavior("Tween").addObjectScaleTween("Press", 1.05, 1.05, "bouncePast", 50, false, false);
}
}}

}


};gdjs.selectCode.mapOfGDgdjs_9546selectCode_9546GDkembalibtn2Objects1Objects = Hashtable.newFrom({"kembalibtn2": gdjs.selectCode.GDkembalibtn2Objects1});
gdjs.selectCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23888708);
}
if (isConditionTrue_0) {
{/* Unknown object - skipped. */}}

}


};gdjs.selectCode.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("kembalibtn2"), gdjs.selectCode.GDkembalibtn2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.selectCode.mapOfGDgdjs_9546selectCode_9546GDkembalibtn2Objects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.selectCode.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("kembalibtn2"), gdjs.selectCode.GDkembalibtn2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.selectCode.mapOfGDgdjs_9546selectCode_9546GDkembalibtn2Objects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.selectCode.GDkembalibtn2Objects1 */
{for(var i = 0, len = gdjs.selectCode.GDkembalibtn2Objects1.length ;i < len;++i) {
    gdjs.selectCode.GDkembalibtn2Objects1[i].getBehavior("Tween").addObjectScaleTween("Hover", 0.95, 0.95, "bouncePast", 100, false, false);
}
}{for(var i = 0, len = gdjs.selectCode.GDkembalibtn2Objects1.length ;i < len;++i) {
    gdjs.selectCode.GDkembalibtn2Objects1[i].setColor("255;255;255");
}
}
{ //Subevents
gdjs.selectCode.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.selectCode.eventsList12 = function(runtimeScene) {

{


gdjs.selectCode.eventsList3(runtimeScene);
}


{


gdjs.selectCode.eventsList7(runtimeScene);
}


{


gdjs.selectCode.eventsList11(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "824ceb44fd0c1656d52bf6dcc0f0f08104e24c0beef9e3e0a9905a90dd2745f8_32 - famicommunist manifesto.aac", true, 40, 1);
}}

}


};

gdjs.selectCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.selectCode.GDbulanbtnObjects1.length = 0;
gdjs.selectCode.GDbulanbtnObjects2.length = 0;
gdjs.selectCode.GDbulanbtnObjects3.length = 0;
gdjs.selectCode.GDbulanbtnObjects4.length = 0;
gdjs.selectCode.GDharibtnObjects1.length = 0;
gdjs.selectCode.GDharibtnObjects2.length = 0;
gdjs.selectCode.GDharibtnObjects3.length = 0;
gdjs.selectCode.GDharibtnObjects4.length = 0;
gdjs.selectCode.GDkembalibtn2Objects1.length = 0;
gdjs.selectCode.GDkembalibtn2Objects2.length = 0;
gdjs.selectCode.GDkembalibtn2Objects3.length = 0;
gdjs.selectCode.GDkembalibtn2Objects4.length = 0;
gdjs.selectCode.GDNewTextObjects1.length = 0;
gdjs.selectCode.GDNewTextObjects2.length = 0;
gdjs.selectCode.GDNewTextObjects3.length = 0;
gdjs.selectCode.GDNewTextObjects4.length = 0;
gdjs.selectCode.GDbg2Objects1.length = 0;
gdjs.selectCode.GDbg2Objects2.length = 0;
gdjs.selectCode.GDbg2Objects3.length = 0;
gdjs.selectCode.GDbg2Objects4.length = 0;

gdjs.selectCode.eventsList12(runtimeScene);

return;

}

gdjs['selectCode'] = gdjs.selectCode;
