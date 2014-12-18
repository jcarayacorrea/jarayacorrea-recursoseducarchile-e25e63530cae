/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var cocos  = require('cocos2d')   // Import the cocos2d module
, nodes  = cocos.nodes          // Convenient access to 'nodes'
, events = require('events')    // Import the events module
, geo    = require('geometry')  // Import the geometry module
, ccp    = geo.ccp              // Short hand to create points
, actions = cocos.actions

// Convenient access to some constructors
var Layer    = nodes.Layer
, Scene    = nodes.Scene
, Label    = nodes.Label
, Director = cocos.Director
, Nodes    = nodes.Node
, Sprite  = nodes.Sprite
, Rect     = geo.Rect
, Menu = nodes.Menu
, PointZero = geo.PointZero


// public classes
var BtnInfo = require('/BtnInfo')
, BtnHome = require('/BtnHome')
, BackgroundRecurso = require('/BackgroundRecurso')
, Btn = require('/CNBtn')

var TagSceneSuite1 = 1,
TagSceneSuite2 = 2,
TagSceneSuite3 = 3,
TagSceneSuite4 = 4,
TagSceneSuite5 = 5


function LayerRecurso(){
    LayerRecurso.superclass.constructor.call(this)
    //winSize
    this.isMouseEnabled = true
    var s = Director.sharedDirector.winSize
    
    //Nodes
   
    var btnInfo = new BtnInfo()
    , btnHome = new BtnHome()
    , bgRecurso = new BackgroundRecurso()
    
    var staticMenu = new Menu({
        items: [btnInfo, btnHome]
    })
    
    staticMenu.position= ccp(0,0)
    
    this.addChild({
        child: staticMenu
        , 
        z: 2
    })
    
    this.addChild({
        child: bgRecurso,
        z:1
    })
   
    
    

}
LayerRecurso.inherit(Layer,{
    createDynMenu:function(){
        var s = Director.sharedDirector.winSize
        
        var SceneRecurso = this.parent,
        contentSuite = SceneRecurso.getChild({
            tag:'Content'
        }),
        
        dmLength = contentSuite.getNodes()
        
        
        
        var menuArray = []
        
        for(var i=0;i<dmLength;++i){
            var btn = new Btn(i+1)
            menuArray[i] = btn 
        }
        
        var dynMenu = new Menu ({
            items:menuArray
        })
        dynMenu.position = PointZero()
        
        this.addChild({
            child: dynMenu,
            z:3
        })
        
        
        
                
        var space = 0.05
        , btnWidth = dynMenu.children[0].contentSize.width
        , btnHeight = dynMenu.children[0].contentSize.height
        , menuWidth = ((dmLength * btnWidth)+ ((space*btnWidth) *(dmLength-1)))*0.5
        , halfWidth = s.width*0.5
        
        
        
        var pos = halfWidth - menuWidth
        
        
        
        for (var i=0;i<dmLength;++i){
            //            var btnWidth = dynMenu.children[i].contentSize.width,
            //            btnHeight = dynMenu.children[i].contentSize.height
            dynMenu.children[i].position = ccp(pos + i*(btnWidth+(btnWidth * space)),btnHeight *0.3)
        //dynMenu.children[i].position = PointZero()
        // dynMenu.children[i].anchorPoint = PointZero()
            
        }
        
    },
    mouseUp:function(evt){
        var sceneRec = this.parent
        , conSuite=sceneRec.getChild({
            tag:'Content'
        })
        , contNode1 = conSuite.getChild({
            tag:TagSceneSuite1
        })
        contNode1.mouseUp(evt)
    },
   

    mouseDown:function(evt){
        var sceneRec = this.parent
        , conSuite=sceneRec.getChild({
            tag:'Content'
        })
        , contNode1 = conSuite.getChild({
            tag:TagSceneSuite1
        })
        contNode1.mouseDown(evt)
        
    },
    mouseMoved:function(evt){
        var sceneRec = this.parent
        , conSuite=sceneRec.getChild({
            tag:'Content'
        })
        , contNode1 = conSuite.getChild({
            tag:TagSceneSuite1
        })
        contNode1.mouseMoved(evt)
        
    }    
//    ,
//    orderChild: function(){
//        var sceneRec = this.parent
//        , conSuite=sceneRec.getChild({
//            tag:'Content'
//        })
//        , contNode1 = conSuite.getChild({
//            tag:TagSceneSuite1
//        })
//       
//        
//         var childLength = contNode1.children.length
//        for (var i=1;i<childLength;++i){
//            contNode1.children[i].tag=i
//            contNode1.children[i].z=i
//        }
//        //contNode1.setNodeRan = contNode1.nodesRan()
//        
//    }
    

})
module.exports= LayerRecurso
