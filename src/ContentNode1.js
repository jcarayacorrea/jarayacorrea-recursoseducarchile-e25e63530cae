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
, actions = cocos.actions

// Convenient access to some constructors
var Layer    = nodes.Layer
, Scene    = nodes.Scene
, Label    = nodes.Label
, Director = cocos.Director
, Nodes    = nodes.Node
, PointZero = geo.PointZero
, rectContainsPoint = geo.rectContainsPoint
, rectOverlapsRect = geo.rectOverlapsRect
, MoveTo = actions.MoveTo
, EaseElasticInOut = actions.EaseElasticInOut
, FadeOut = actions.FadeOut
, Sequence = actions.Sequence
, CallFunc = actions.CallFunc
, DelayTime = actions.DelayTime


// Public Classes
var DropZone = require('/DropZone'),
DragObject = require('/DragObject')

//Child Tag's
var TagNodes1 = 1,
TagNodes2 =2,
TagNodes3 =3,
TagNodes4 =4

  
  
function ContentNode1(){
    ContentNode1.superclass.constructor.call(this)
    
    var s = Director.sharedDirector.winSize
    
    //    var label = new Label({
    //        string: 'Escena 1', 
    //        fontName: 'Marker Felt', 
    //        fontSize: 48,
    //        fontColor: 'Black'
    //        
    //    })
    //    label.position = ccp(s.width/2, s.height/2)
    //    
    var dropZone = new DropZone()
      
    this.addChild({
        child: dropZone,
        tag: TagNodes1,
        z:0
    })
   
    var halfScreenHeight = s.height*0.5,
    length = 3,
    space = 0.3
     
    
    
    for(var i=0;i<length;++i){
        var dragObject = new DragObject(i+1),
        initialPosdragHeight = ((dragObject.contentSize.height * length)+ (space*(length-1)))*0.5,
        pos = halfScreenHeight + initialPosdragHeight
        dragObject.anchorPoint = ccp(0.5,0.5)
        
        dragObject.position = ccp(dragObject.contentSize.width*2,pos-((dragObject.contentSize.height * (length-1))*i))
        dragObject.initialPos = dragObject.position
        dragObject.objSelected = false
        this.addChild({
            child:dragObject,
            tag: (i+1),
            z:i+1
        })
    }

    
    //    this.addChild({
    //        child: label,
    //        tag: TagNodes1,
    //        z:0
    //    })
    
    
    this.visible=false
    this.setNodeRan=this.nodesRan()
}
ContentNode1.inherit(Nodes,{
    restart: function(){
        var contentSuite = this.parent
        contentSuite.addChild({
            child:this,
            tag: TagNodes1,
            z:4
        })
    },
    nodesRan: function (){
        var nodes = this.children.length,
        nodeRan = Math.floor((Math.random()*(nodes-1))+1)
        console.log('Nodos:'+ nodes)
        
        console.log('Aleatorio:'+nodeRan)
        return nodeRan
    },
    setNodeRan:0,
    mouseUp:function(evt){
       
        var cnLength = this.children.length
        ,corNode= this.setNodeRan
        for (var i =1;i<cnLength;++i){
           
            if(this.children[i].objSelected){
                if(rectOverlapsRect(this.children[0].containerBox(),this.children[i].containerBox())){
                    var blockTag =  this.children[corNode].tag
                    if (blockTag == this.children[i].tag){
                        this.delNum = i
                        this.children[i].objSelected = false  
                        var action2 = new DelayTime({
                            duration: 1
                        })
                        var action3 = new FadeOut({
                            duration:1.5
                        })
                        var action4 = new CallFunc({
                            target: this, 
                            method: 'delChild'
                        })
                        var action5 = new CallFunc({
                            target: this, 
                            method: 'changeNodeRand'
                        })
                            
                        var seqOK = new Sequence({
                            actions:[action3,action2,action4,action2,action5]
                            })
                        
                        this.children[i].runAction(seqOK)
                        
                        
                        
                        
                    } else{
                        this.children[i].objSelected = false
                        //var s = Director.sharedDirector.winSize
                        var action = new MoveTo({
                            duration:0.2,
                            position:this.children[i].initialPos
                        })
                        this.children[i].runAction(action)
                        
                    }
  
                }else{
                    this.children[i].objSelected = false
                    //var s = Director.sharedDirector.winSize
                    var action = new MoveTo({
                        duration:0.2,
                        position:this.children[i].initialPos
                    })
                    this.children[i].runAction(action)
                         
                }
            }
        }
        
    
     
    },
   

    mouseDown:function(evt){
       
        var cnLength = this.children.length
        for (var i =1;i<cnLength;++i){
            if(rectContainsPoint(this.children[i].containerBox(),evt.locationInCanvas)){
                this.children[i].objSelected = true
                this.children[i].position = evt.locationInCanvas
            }
            
        }
        
    },
    mouseMoved:function(evt){
        
        var cnLength = this.children.length
        for (var i =1;i<cnLength;++i){
            if(this.children[i].objSelected){
                 
                this.children[i].position = evt.locationInCanvas
            }
            
        }
        
    },
    delNum:0,
    delChild:function (){
        var numNode = this.delNum
        
        this.removeChild({
            child:this.children[numNode], 
            cleanUp:false
        })
        numNode = 0
       
    },
    changeNodeRand: function(){
        this.setNodeRan = this.nodesRan()
    }
//    ,
//    orderChild: function(){
//        var sceneRec = this.parent
//        , conSuite=sceneRec.getChild({
//            tag:'Content'
//        })
//        , this = conSuite.getChild({
//            tag:TagSceneSuite1
//        })
//       
//        
//         var childLength = this.children.length
//        for (var i=1;i<childLength;++i){
//            this.children[i].tag=i
//            this.children[i].z=i
//        }
//        //this.setNodeRan = this.nodesRan()
//        
//    }
    
})
   

module.exports = ContentNode1
