(function(){
__jah__.resources["/ActivityNode1.js"] = {data: function (exports, require, module, __filename, __dirname) {
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
// Pull in the modules we're going to use
var cocos  = require('cocos2d')   // Import the cocos2d module
  , nodes  = cocos.nodes          // Convenient access to 'nodes'
  , events = require('events')    // Import the events module
  , geo    = require('geometry')  // Import the geometry module
  , ccp    = geo.ccp              // Short hand to create points

// Convenient access to some constructors
var Layer    = nodes.Layer
  , Scene    = nodes.Scene
  , Label    = nodes.Label
  , Director = cocos.Director
  , Nodes    = nodes.Node

function ActivityNode1(){
    ActivityNode1.superclass.constructor.call(this)
}
ActivityNode1.inherit(Nodes)

module.exports = ActivityNode1


}, mimetype: "application/javascript", remote: false}; // END: /ActivityNode1.js


__jah__.resources["/ActivitySuite.js"] = {data: function (exports, require, module, __filename, __dirname) {
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
// Pull in the modules we're going to use
var cocos  = require('cocos2d')   // Import the cocos2d module
  , nodes  = cocos.nodes          // Convenient access to 'nodes'
  , events = require('events')    // Import the events module
  , geo    = require('geometry')  // Import the geometry module
  , ccp    = geo.ccp              // Short hand to create points

// Convenient access to some constructors
var Layer    = nodes.Layer
  , Scene    = nodes.Scene
  , Label    = nodes.Label
  , Director = cocos.Director
  , Nodes    = nodes.Node
  
 //Public classes
 var ActivityNode1 = require('/ActivityNode1')
 
 // Tag
 var ActivityTag1 = 1

function ActivitySuite(){
    ActivitySuite.superclass.constructor.call(this)
    
    var activityNode1 = new ActivityNode1()
    
    this.addChild({child:activityNode1,
    tag: ActivityTag1,
    z:0})

    
    
    
}
ActivitySuite.inherit(Nodes,{})

module.exports = ActivitySuite


}, mimetype: "application/javascript", remote: false}; // END: /ActivitySuite.js


__jah__.resources["/ANBtn1.js"] = {data: function (exports, require, module, __filename, __dirname) {
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */



}, mimetype: "application/javascript", remote: false}; // END: /ANBtn1.js


__jah__.resources["/BackgroundRecurso.js"] = {data: function (exports, require, module, __filename, __dirname) {
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var cocos  = require('cocos2d')   // Import the cocos2d module
, nodes  = cocos.nodes          // Convenient access to 'nodes'
, events = require('events')    // Import the events module
, geo    = require('geometry')  // Import the geometry module
, ccp    = geo.ccp              // Short hand to create points
, path = require('path')

// Convenient access to some constructors
var Layer    = nodes.Layer
, Scene    = nodes.Scene
, Label    = nodes.Label
, Director = cocos.Director
, Nodes    = nodes.Node
, Rect = geo.Rect
, Sprite = nodes.Sprite

function BackgroundRecurso(){
    BackgroundRecurso.superclass.constructor.call(this)
    
    var s= Director.sharedDirector.winSize
    
    var sprite = new Sprite({
        file:path.join(__dirname,'../resources/HUD_Fondo.png'),
        rect: new Rect(0,0,640,480)
        })
     sprite.position = ccp(sprite.contentSize.width/2,sprite.contentSize.height/2)
     
     this.addChild(sprite)
        
     
}
BackgroundRecurso.inherit(Nodes)

module.exports = BackgroundRecurso


}, mimetype: "application/javascript", remote: false}; // END: /BackgroundRecurso.js


__jah__.resources["/BtnActivity.js"] = {data: function (exports, require, module, __filename, __dirname) {
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
// Pull in the modules we're going to use
var cocos  = require('cocos2d')   // Import the cocos2d module
  , nodes  = cocos.nodes          // Convenient access to 'nodes'
  , events = require('events')    // Import the events module
  , geo    = require('geometry')  // Import the geometry module
  , ccp    = geo.ccp              // Short hand to create points

// Convenient access to some constructors
var Layer    = nodes.Layer
  , Scene    = nodes.Scene
  , Label    = nodes.Label
  , Director = cocos.Director
  , Nodes    = nodes.Node
  
  // Public Class
  

function BtnActivity(){
    BtnActivity.superclass.constructor.call(this)
    
    
}
BtnActivity.inherit(Nodes)
module.exports= BtnActivity



}, mimetype: "application/javascript", remote: false}; // END: /BtnActivity.js


__jah__.resources["/BtnHome.js"] = {data: function (exports, require, module, __filename, __dirname) {
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var cocos  = require('cocos2d')   // Import the cocos2d module
, nodes  = cocos.nodes          // Convenient access to 'nodes'
, events = require('events')    // Import the events module
, geo    = require('geometry')  // Import the geometry module
, ccp    = geo.ccp              // Short hand to create points
, path = require('path')

// Convenient access to some constructors
var Layer    = nodes.Layer
, Scene    = nodes.Scene
, Label    = nodes.Label
, Director = cocos.Director
, Nodes    = nodes.Node
, Sprite  = nodes.Sprite
,Rect     = geo.Rect
, MenuItemImage = nodes.MenuItemImage

function BtnHome(){
    BtnHome.superclass.constructor.call(this,{
        normalImage: path.join(__dirname, '../resources/HUD_BotonHome.png'),
        selectedImage: path.join(__dirname, '../resources/HUD_BotonHomeHold.png')
        })
    //var s = Director.sharedDirector.winSize
        
    this.position= ccp(this.contentSize.width/2,this.contentSize.height/2)
    
    
      
      
}
BtnHome.inherit(MenuItemImage)  
module.exports = BtnHome

}, mimetype: "application/javascript", remote: false}; // END: /BtnHome.js


__jah__.resources["/BtnInfo.js"] = {data: function (exports, require, module, __filename, __dirname) {
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var cocos  = require('cocos2d')   // Import the cocos2d module
, nodes  = cocos.nodes          // Convenient access to 'nodes'
, events = require('events')    // Import the events module
, geo    = require('geometry')  // Import the geometry module
, ccp    = geo.ccp              // Short hand to create points
, path   = require('path')

// Convenient access to some constructors
var Layer    = nodes.Layer
, Scene    = nodes.Scene
, Label    = nodes.Label
, Director = cocos.Director
, Nodes    = nodes.Node
, Sprite  = nodes.Sprite
,Rect     = geo.Rect
, MenuItemImage = nodes.MenuItemImage

function BtnInfo(){
    BtnInfo.superclass.constructor.call(this,{normalImage: path.join(__dirname, '../resources/HUD_BotonInfo.png'),selectedImage: path.join(__dirname, '../resources/HUD_BotonInfoHold.png')})
    
     var s = Director.sharedDirector.winSize
           
    this.position= ccp(s.width-(this.contentSize.width/2),this.contentSize.height/2)
   
    
    
    
    
}
BtnInfo.inherit(MenuItemImage)
module.exports = BtnInfo


}, mimetype: "application/javascript", remote: false}; // END: /BtnInfo.js


__jah__.resources["/CNBtn1.js"] = {data: function (exports, require, module, __filename, __dirname) {
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var cocos  = require('cocos2d')   // Import the cocos2d module
, nodes  = cocos.nodes          // Convenient access to 'nodes'
, events = require('events')    // Import the events module
, geo    = require('geometry')  // Import the geometry module
, ccp    = geo.ccp              // Short hand to create points
, path = require('path')

// Convenient access to some constructors
var Layer    = nodes.Layer
, Scene    = nodes.Scene
, Label    = nodes.Label
, Director = cocos.Director
, Nodes    = nodes.Node
, Sprite  = nodes.Sprite
, Rect     = geo.Rect
, MenuItemImage = nodes.MenuItemImage

// Public classes


function CNBtn1(){
    CNBtn1.superclass.constructor.call(this,{
        normalImage: path.join(__dirname, '../resources/HUD_BotonUno.png'),
         
        selectedImage: path.join(__dirname, '../resources/HUD_BotonUnoHold.png'),
        callback: function(){
            if(this.parent.parent.parent.getState() != 1){
                this.parent.parent.parent.states =1
            }
           
            this.parent.parent.parent.nodeSequence()
        }
    })
    
       
}
CNBtn1.inherit(MenuItemImage)
module.exports= CNBtn1


}, mimetype: "application/javascript", remote: false}; // END: /CNBtn1.js


__jah__.resources["/CNBtn2.js"] = {data: function (exports, require, module, __filename, __dirname) {
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var cocos  = require('cocos2d')   // Import the cocos2d module
, nodes  = cocos.nodes          // Convenient access to 'nodes'
, events = require('events')    // Import the events module
, geo    = require('geometry')  // Import the geometry module
, ccp    = geo.ccp              // Short hand to create points
, path = require('path')


// Convenient access to some constructors
var Layer    = nodes.Layer
, Scene    = nodes.Scene
, Label    = nodes.Label
, Director = cocos.Director
, Nodes    = nodes.Node
, Sprite  = nodes.Sprite
, Rect     = geo.Rect
, MenuItemImage = nodes.MenuItemImage

function CNBtn2(){
    CNBtn2.superclass.constructor.call(this,{
        normalImage: path.join(__dirname, '../resources/HUD_BotonDos.png'),
        selectedImage: path.join(__dirname, '../resources/HUD_BotonDosHold.png'),
        callback: function(){
            if(this.parent.parent.parent.getState() != 2){
                this.parent.parent.parent.states =2
            }
           
            this.parent.parent.parent.nodeSequence()
        }
    })

}
CNBtn2.inherit(MenuItemImage)
module.exports = CNBtn2


}, mimetype: "application/javascript", remote: false}; // END: /CNBtn2.js


__jah__.resources["/CNBtn3.js"] = {data: function (exports, require, module, __filename, __dirname) {
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var cocos  = require('cocos2d')   // Import the cocos2d module
, nodes  = cocos.nodes          // Convenient access to 'nodes'
, events = require('events')    // Import the events module
, geo    = require('geometry')  // Import the geometry module
, ccp    = geo.ccp              // Short hand to create points
, path = require('path')

// Convenient access to some constructors
var Layer    = nodes.Layer
, Scene    = nodes.Scene
, Label    = nodes.Label
, Director = cocos.Director
, Nodes    = nodes.Node
, Sprite  = nodes.Sprite
, Rect     = geo.Rect
, MenuItemImage = nodes.MenuItemImage

function CNBtn3(){
    CNBtn3.superclass.constructor.call(this,{normalImage: path.join(__dirname, '../resources/HUD_BotonTres.png'),
        selectedImage: path.join(__dirname, '../resources/HUD_BotonTresHold.png'),
         callback: function(){
            if(this.parent.parent.parent.getState() != 3){
                 this.parent.parent.parent.states =3
            }
           
            this.parent.parent.parent.nodeSequence()
        } 
    })
 
}
CNBtn3.inherit(MenuItemImage)
module.exports = CNBtn3


}, mimetype: "application/javascript", remote: false}; // END: /CNBtn3.js


__jah__.resources["/ContentNode1.js"] = {data: function (exports, require, module, __filename, __dirname) {
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict"  // Use strict JavaScript mode

// Pull in the modules we're going to use
var cocos  = require('cocos2d')   // Import the cocos2d module
, nodes  = cocos.nodes          // Convenient access to 'nodes'
, events = require('events')    // Import the events module
, geo    = require('geometry')  // Import the geometry module
, ccp    = geo.ccp              // Short hand to create points
, path = require('path')

// Convenient access to some constructors
var Layer    = nodes.Layer
, Scene    = nodes.Scene
, Label    = nodes.Label
, Director = cocos.Director
, Nodes    = nodes.Node

//Child Tag's
var TagNodes1 = 1
  
  
function ContentNode1(){
    ContentNode1.superclass.constructor.call(this)
    
    var s = Director.sharedDirector.winSize
    
    var label = new Label({
        string: 'Escena 1', 
        fontName: 'Marker Felt', 
        fontSize: 48,
        fontColor: 'Black'
        
    })
    label.position = ccp(s.width/2, s.height/2)
    
    this.addChild({
        child: label,
        tag: TagNodes1,
        z:0
    })
    this.visible=false
}
ContentNode1.inherit(Nodes)

module.exports = ContentNode1

}, mimetype: "application/javascript", remote: false}; // END: /ContentNode1.js


__jah__.resources["/ContentNode2.js"] = {data: function (exports, require, module, __filename, __dirname) {
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict"  // Use strict JavaScript mode

// Pull in the modules we're going to use
var cocos  = require('cocos2d')   // Import the cocos2d module
, nodes  = cocos.nodes          // Convenient access to 'nodes'
, events = require('events')    // Import the events module
, geo    = require('geometry')  // Import the geometry module
, ccp    = geo.ccp              // Short hand to create points
, path = require('path')

// Convenient access to some constructors
var Layer    = nodes.Layer
, Scene    = nodes.Scene
, Label    = nodes.Label
, Director = cocos.Director
, Nodes    = nodes.Node

//Child Tag's
var TagNodes1 = 1
  
  
function ContentNode2(){
    ContentNode2.superclass.constructor.call(this)
    
    var s = Director.sharedDirector.winSize
    
    var label = new Label({
        string: 'Escena 2', 
        fontName: 'Marker Felt', 
        fontSize: 48,
        fontColor: 'Black'
        
    })
    label.position = ccp(s.width/2, s.height/2)
    
    this.addChild({
        child: label,
        tag: TagNodes1,
        z:0
    })
    this.visible=false
}
ContentNode2.inherit(Nodes)

module.exports = ContentNode2



}, mimetype: "application/javascript", remote: false}; // END: /ContentNode2.js


__jah__.resources["/ContentNode3.js"] = {data: function (exports, require, module, __filename, __dirname) {
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict"  // Use strict JavaScript mode

// Pull in the modules we're going to use
var cocos  = require('cocos2d')   // Import the cocos2d module
, nodes  = cocos.nodes          // Convenient access to 'nodes'
, events = require('events')    // Import the events module
, geo    = require('geometry')  // Import the geometry module
, ccp    = geo.ccp              // Short hand to create points
, path = require('path')

// Convenient access to some constructors
var Layer    = nodes.Layer
, Scene    = nodes.Scene
, Label    = nodes.Label
, Director = cocos.Director
, Nodes    = nodes.Node

//Child Tag's
var TagNodes1 = 1
  
  
function ContentNode3(){
    ContentNode3.superclass.constructor.call(this)
    
    var s = Director.sharedDirector.winSize
    
    var label = new Label({
        string: 'Escena 3', 
        fontName: 'Marker Felt', 
        fontSize: 48,
        fontColor: 'Black'
        
    })
    label.position = ccp(s.width/2, s.height/2)
    
    this.addChild({
        child: label,
        tag: TagNodes1,
        z:0
    })
    this.visible=false
}
ContentNode3.inherit(Nodes)

module.exports = ContentNode3



}, mimetype: "application/javascript", remote: false}; // END: /ContentNode3.js


__jah__.resources["/ContentSuite.js"] = {data: function (exports, require, module, __filename, __dirname) {
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var cocos  = require('cocos2d')   // Import the cocos2d module
, nodes  = cocos.nodes          // Convenient access to 'nodes'
, events = require('events')    // Import the events module
, geo    = require('geometry')  // Import the geometry module
, ccp    = geo.ccp              // Short hand to create points

// Convenient access to some constructors
var Layer    = nodes.Layer
, Scene    = nodes.Scene
, Label    = nodes.Label
, Director = cocos.Director
, Nodes    = nodes.Node
  
// Public Classes
var LayerRecurso = require('/LayerRecurso')
, ContentNode1 = require('/ContentNode1')
, ContentNode2 = require('/ContentNode2')
, ContentNode3 = require('/ContentNode3')

// Child Tag's
var TagSceneSuite1 = 1,
 TagSceneSuite2 = 2,
 TagSceneSuite3 = 3


function ContentSuite(){
    ContentSuite.superclass.constructor.call(this) 
    var contentNode1 = new ContentNode1(),
    contentNode2 = new ContentNode2(),
    contentNode3 = new ContentNode3()
    
    this.addChild({
        child:contentNode1,
        tag: TagSceneSuite1,
        z:0
    })
    this.addChild({
        child:contentNode2,
        tag: TagSceneSuite2,
        z:1
    })
    this.addChild({
        child:contentNode3,
        tag: TagSceneSuite3,
        z:2
    })
    
    
}
ContentSuite.inherit(Nodes,{
    getNodes:function(){
        return this.children.length
    }
})
module.exports = ContentSuite



}, mimetype: "application/javascript", remote: false}; // END: /ContentSuite.js


__jah__.resources["/LabelDemo.js"] = {data: function (exports, require, module, __filename, __dirname) {
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */



}, mimetype: "application/javascript", remote: false}; // END: /LabelDemo.js


__jah__.resources["/LayerRecurso.js"] = {data: function (exports, require, module, __filename, __dirname) {
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var cocos  = require('cocos2d')   // Import the cocos2d module
, nodes  = cocos.nodes          // Convenient access to 'nodes'
, events = require('events')    // Import the events module
, geo    = require('geometry')  // Import the geometry module
, ccp    = geo.ccp              // Short hand to create points

// Convenient access to some constructors
var Layer    = nodes.Layer
, Scene    = nodes.Scene
, Label    = nodes.Label
, Director = cocos.Director
, Nodes    = nodes.Node
, Sprite  = nodes.Sprite
, Rect     = geo.Rect
, Menu = nodes.Menu
// public classes
var BtnInfo = require('/BtnInfo')
, BtnHome = require('/BtnHome')
, BackgroundRecurso = require('/BackgroundRecurso')
, Btn1 = require('/CNBtn1')
, Btn2 = require('/CNBtn2')
, Btn3 = require('/CNBtn3')


function LayerRecurso(){
    LayerRecurso.superclass.constructor.call(this)
    //winSize
    var s = Director.sharedDirector.winSize
    
    //Nodes
    
    var btnInfo = new BtnInfo()
    , btnHome = new BtnHome()
    , bgRecurso = new BackgroundRecurso()
    , btn1 = new Btn1()
    , btn2 = new Btn2()
    , btn3 = new Btn3()
    
    
    var staticMenu = new Menu({
        items: [btnInfo, btnHome]
    })
    
    staticMenu.position= ccp(0,0)
    var dynMenu= new Menu ({
        items:[btn1,btn2,btn3]
        })
    
    dynMenu.position= ccp(0,0)
    this.dynMenu = dynMenu
    //set Nodes Settings
    
    
    
    this.addChild({
        child: staticMenu
        , 
        z: 2
    })
    
    this.addChild({
        child: bgRecurso,
        z:1
    })
    
    this.addChild({
        child: dynMenu,
        z:3
    })
    

}
LayerRecurso.inherit(Layer,{
    dynMenu:null,
    csLenght:0,
    getcsLenght: function(){
        return this.csLenght
    },
    dmPosition:function(){
        var s = Director.sharedDirector.winSize
        
        var csLenght = this.getcsLenght()
        
        
        var menu = this.dynMenu
        
        var pos = (s.width/2)- ((menu.children[0].contentSize.width*csLenght)/2)
        
        var i
        
        for (i=0;i<csLenght;++i){
            menu.children[i].position = ccp((pos + (menu.children[i].contentSize.width*i)), menu.children[i].contentSize.height/2)
        }
        
    }
    })
module.exports= LayerRecurso

}, mimetype: "application/javascript", remote: false}; // END: /LayerRecurso.js


__jah__.resources["/main.js"] = {data: function (exports, require, module, __filename, __dirname) {
"use strict"  // Use strict JavaScript mode

// Pull in the modules we're going to use
var cocos  = require('cocos2d')   // Import the cocos2d module
  , nodes  = cocos.nodes          // Convenient access to 'nodes'
  , events = require('events')    // Import the events module
  , geo    = require('geometry')  // Import the geometry module
  , ccp    = geo.ccp              // Short hand to create points

// Convenient access to some constructors
var Layer    = nodes.Layer
  , Scene    = nodes.Scene
  , Label    = nodes.Label
  , Director = cocos.Director
  , Nodes    = nodes.Node

/**
 * @class Initial application layer
 * @extends cocos.nodes.Layer
 */
var SceneRecurso = require('/SceneRecurso')

/**
 * Entry point for the application
 */
function main () {
    // Initialise application

    // Get director singleton
    var director = Director.sharedDirector

    // Wait for the director to finish preloading our assets
    events.addListener(director, 'ready', function (director) {
        // Create a scene and layer
        var scene = new SceneRecurso()
       // Run the scene
        director.replaceScene(scene)
    })

    // Preload our assets
    director.runPreloadScene()
}


exports.main = main

}, mimetype: "application/javascript", remote: false}; // END: /main.js


__jah__.resources["/resources/desktop.ini"] = {data: __jah__.assetURL + "/resources/desktop.ini", mimetype: "text/plain", remote: true};
__jah__.resources["/resources/Fuentes_ODA19.fnt"] = {data: __jah__.assetURL + "/resources/Fuentes_ODA19.fnt", mimetype: "text/plain", remote: true};
__jah__.resources["/resources/Fuentes_ODA19.png"] = {data: __jah__.assetURL + "/resources/Fuentes_ODA19.png", mimetype: "image/png", remote: true};
__jah__.resources["/resources/HUD_BarraSeparadora.png"] = {data: __jah__.assetURL + "/resources/HUD_BarraSeparadora.png", mimetype: "image/png", remote: true};
__jah__.resources["/resources/HUD_BotonDos.png"] = {data: __jah__.assetURL + "/resources/HUD_BotonDos.png", mimetype: "image/png", remote: true};
__jah__.resources["/resources/HUD_BotonDosHold.png"] = {data: __jah__.assetURL + "/resources/HUD_BotonDosHold.png", mimetype: "image/png", remote: true};
__jah__.resources["/resources/HUD_BotonHome.png"] = {data: __jah__.assetURL + "/resources/HUD_BotonHome.png", mimetype: "image/png", remote: true};
__jah__.resources["/resources/HUD_BotonHomeHold.png"] = {data: __jah__.assetURL + "/resources/HUD_BotonHomeHold.png", mimetype: "image/png", remote: true};
__jah__.resources["/resources/HUD_BotonInfo.png"] = {data: __jah__.assetURL + "/resources/HUD_BotonInfo.png", mimetype: "image/png", remote: true};
__jah__.resources["/resources/HUD_BotonInfoHold.png"] = {data: __jah__.assetURL + "/resources/HUD_BotonInfoHold.png", mimetype: "image/png", remote: true};
__jah__.resources["/resources/HUD_BotonTres.png"] = {data: __jah__.assetURL + "/resources/HUD_BotonTres.png", mimetype: "image/png", remote: true};
__jah__.resources["/resources/HUD_BotonTresHold.png"] = {data: __jah__.assetURL + "/resources/HUD_BotonTresHold.png", mimetype: "image/png", remote: true};
__jah__.resources["/resources/HUD_BotonUno.png"] = {data: __jah__.assetURL + "/resources/HUD_BotonUno.png", mimetype: "image/png", remote: true};
__jah__.resources["/resources/HUD_BotonUnoHold.png"] = {data: __jah__.assetURL + "/resources/HUD_BotonUnoHold.png", mimetype: "image/png", remote: true};
__jah__.resources["/resources/HUD_Contenidos.png"] = {data: __jah__.assetURL + "/resources/HUD_Contenidos.png", mimetype: "image/png", remote: true};
__jah__.resources["/resources/HUD_CuadroMenu.png"] = {data: __jah__.assetURL + "/resources/HUD_CuadroMenu.png", mimetype: "image/png", remote: true};
__jah__.resources["/resources/HUD_Fondo.png"] = {data: __jah__.assetURL + "/resources/HUD_Fondo.png", mimetype: "image/png", remote: true};
__jah__.resources["/resources/HUD_Test.png"] = {data: __jah__.assetURL + "/resources/HUD_Test.png", mimetype: "image/png", remote: true};
__jah__.resources["/resources/ODA19_Titulo.png"] = {data: __jah__.assetURL + "/resources/ODA19_Titulo.png", mimetype: "image/png", remote: true};
__jah__.resources["/SceneRecurso.js"] = {data: function (exports, require, module, __filename, __dirname) {
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
// Pull in the modules we're going to use
var cocos  = require('cocos2d')   // Import the cocos2d module
, nodes  = cocos.nodes          // Convenient access to 'nodes'
, events = require('events')    // Import the events module
, geo    = require('geometry')  // Import the geometry module
, ccp    = geo.ccp              // Short hand to create points

// Convenient access to some constructors
var Layer    = nodes.Layer
,   Scene    = nodes.Scene
,   Label    = nodes.Label
,   Director = cocos.Director
,   Nodes    = nodes.Node
,   Sprite  = nodes.Sprite
,   Rect     = geo.Rect

// public classes

var ContentSuite = require('/ContentSuite'),
LayerRecurso = require('/LayerRecurso')
//ActivitySuite = require('/ActivitySuite')

// Nodes Tag's
var NodeTag1 ='Layer',
NodeTag2 = 'Content',
NodeTag3 = 'Activity'

// Child Tag's'
var TagChild1 = 1,
TagChild2 = 2,
TagChild3 = 3,
TagChild4 = 4,
TagChild5 = 5,
TagChild6 = 6,
TagChild7 = 7,
TagChild8 = 8,
TagChild9 = 9

function SceneRecurso(){
    SceneRecurso.superclass.constructor.call(this)
    
    var contentSuite = new ContentSuite(),
    layerRecurso = new LayerRecurso()
    
    //activitySuite = new ActivitySuite()
    
    layerRecurso.csLenght = contentSuite.getNodes()
    
    this.addChild({
        child: layerRecurso,
        tag: NodeTag1,
        z:0
    })
    
    this.addChild({
        child: contentSuite, 
        tag: NodeTag2,
        z:1
    })
    
    layerRecurso.dmPosition()
//    this.addChild({
//        child: activitySuite,
//        tag: NodeTag3,
//        z:2
//    })
    
    
}
SceneRecurso.inherit(Scene, {
    states:0,
    getState:function(){
        return this.states
    }, 
    nodeSequence:function(){
        var state = this.getState()
        
        switch(state){
            case 1:
                var contentSuite = this.getChild({
                    tag:NodeTag1
                }),
                nodeScene1 = contentSuite.getChild({
                    tag:TagScene1
                }),
                nodeScene2 = contentSuite.getChild({
                    tag:TagScene2
                }),
                nodeScene3 = contentSuite.getChild({
                    tag:TagScene3
                })
                nodeScene1.visible = true
                nodeScene2.visible = false
                nodeScene3.visible = false
                
                
                break
            case 2:
                var contentSuite = this.getChild({
                    tag:TagScene1
                }),
                nodeScene1 = contentSuite.getChild({
                    tag:TagScene1
                }),
                nodeScene2 = contentSuite.getChild({
                    tag:TagScene2
                }),
                nodeScene3 = contentSuite.getChild({
                    tag:TagScene3
                })
                nodeScene1.visible = false
                nodeScene2.visible = true
                nodeScene3.visible = false
                break
            case 3:
                var contentSuite = this.getChild({
                    tag:TagScene1
                }),
                nodeScene1 = contentSuite.getChild({
                    tag:TagScene1
                }),
                nodeScene2 = contentSuite.getChild({
                    tag:TagScene2
                }),
                nodeScene3 = contentSuite.getChild({
                    tag:TagScene3
                })
                nodeScene1.visible = false
                nodeScene2.visible = false
                nodeScene3.visible = true
                break
        }
        
        
    }
})
module.exports = SceneRecurso
}, mimetype: "application/javascript", remote: false}; // END: /SceneRecurso.js


})();