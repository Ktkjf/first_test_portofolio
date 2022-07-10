var PhallainaPlayer;!function(t){var o=function(){function t(t,o){this.canvas=t,this.area=o,this.isMouseDown=!1,this.lastMouseCoord=null,this.wheeling=void 0,this.zoomSensitivity=2,this.dpr=window.devicePixelRatio||1,t.onwheel=this.onWheel.bind(this),t.onmousedown=this.onMouseDown.bind(this),t.onmouseup=this.onMouseUp.bind(this),t.onmousemove=this.onMouseMove.bind(this),t.onmouseleave=this.onMouseLeave.bind(this),t.ontouchstart=this.onTouchStart.bind(this),t.ontouchmove=this.onTouchMove.bind(this),t.ontouchend=this.onTouchEnd.bind(this)}return t.prototype.getLocalCoord=function(t){return{x:(t.clientX-this.canvas.offsetLeft)*this.dpr,y:(t.clientY-this.canvas.offsetTop)*this.dpr}},t.prototype.getLocalTouchCoord=function(t){return{x:(t.targetTouches[0].pageX-this.canvas.offsetLeft)*this.dpr,y:(t.targetTouches[0].pageY-this.canvas.offsetTop)*this.dpr}},t.prototype.onWheel=function(t){if(!this.wheeling){var o=this.getLocalCoord(t);this.isMouseDown=!0,this.lastMouseCoord=o,this.area.touchDown(o)}var i=0;return i=Math.abs(t.deltaY)<Math.abs(t.deltaX)?t.deltaX:t.deltaY,this.lastMouseCoord.x-=i,this.area.pan(this.lastMouseCoord),clearTimeout(this.wheeling),this.wheeling=setTimeout((function(t){var o=t.lastMouseCoord;t.wheeling=void 0,t.isMouseDown=!1,t.lastMouseCoord=null,t.area.touchUp(o)}),100,this),!1},t.prototype.onMouseDown=function(t){var o=this.getLocalCoord(t);this.isMouseDown=!0,this.lastMouseCoord=o,this.area.touchDown(o)},t.prototype.onMouseUp=function(t){var o=this.getLocalCoord(t);this.isMouseDown=!1,this.lastMouseCoord=null,this.area.touchUp(o)},t.prototype.onMouseMove=function(t){if(!this.wheeling){var o=this.getLocalCoord(t);if(this.isMouseDown){o.x,this.lastMouseCoord.x,o.y,this.lastMouseCoord.y;this.lastMouseCoord=o,this.area.pan(o)}}},t.prototype.onMouseLeave=function(t){this.isMouseDown=!1},t.prototype.onTouchStart=function(t){var o=this.getLocalTouchCoord(t);this.isMouseDown=!0,this.lastMouseCoord=o,this.area.touchDown(o)},t.prototype.onTouchEnd=function(t){this.isMouseDown=!1,this.lastMouseCoord&&this.area.touchUp(this.lastMouseCoord)},t.prototype.onTouchMove=function(t){if(!this.wheeling){var o=this.getLocalTouchCoord(t);this.isMouseDown&&(this.lastMouseCoord=o,this.area.pan(o))}},t}();t.MouseController=o}(PhallainaPlayer||(PhallainaPlayer={})),function(t){var o=function(){function t(){}return t.initGL=Module.cwrap("initGL","number",["number","number"]),t.onSurfaceChanged=Module.cwrap("onSurfaceChanged","",["number","number"]),t.touchBegan=Module.cwrap("touchBegan","",["number"]),t.touchMoved=Module.cwrap("touchMoved","",["number"]),t.touchEnded=Module.cwrap("touchEnded","",["number"]),t.update=Module.cwrap("update","",["number"]),t.draw=Module.cwrap("draw","",[]),t}(),i=function(){function i(t){this.canvas=t,this.lastUpdate=Date.now(),this.initialised=!1,this.isPortrait=!1}return i.prototype.init=function(){this.width=this.canvas.width,this.height=this.canvas.height,this.initialised=o.initGL(this.canvas.width,this.canvas.height),this.initialised?(o.onSurfaceChanged(this.canvas.width,this.canvas.height),this.mouseController=new t.MouseController(canvas,this),this.invalidate()):console.log("Could not initialise GL")},i.prototype.setPosition=function(t){this.position=t,this.invalidate()},i.prototype.setIsPortrait=function(t){this.isPortrait=t},i.prototype.debugview=function(){this.invalidate()},i.prototype.touchDown=function(t){this.isPortrait?o.touchBegan(t.y/this.canvas.width):o.touchBegan(t.x/this.canvas.width)},i.prototype.pan=function(t){this.isPortrait?o.touchMoved(t.y/this.canvas.width):o.touchMoved(t.x/this.canvas.width)},i.prototype.touchUp=function(t){this.isPortrait?o.touchEnded(t.y/this.canvas.width):o.touchEnded(t.x/this.canvas.width)},i.prototype.onSurfaceChanged=function(t,i){this.width==t&&this.height==i||(this.width=t,this.height=i,this.canvas.width=this.width,this.canvas.height=this.height,o.onSurfaceChanged(this.canvas.width,this.canvas.height))},i.prototype.render=function(){if(this.initialised){var t=Date.now(),i=(t-this.lastUpdate)/1e3;this.lastUpdate=t,o.update(i),o.draw(),this.invalidate()}},i.prototype.invalidate=function(){window.requestAnimationFrame(this.render.bind(this))},i}();t.Program=i}(PhallainaPlayer||(PhallainaPlayer={}));