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
    
    layerRecurso.createDynMenu()
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
          var contentSuite = this.getChild({
                    tag:NodeTag2
                })
                
        for (var i=0;i<contentSuite.children.length;++i){
            contentSuite.children[i].visible=false
        }
         var actNode = state -1
         
         con 
        contentSuite.children[actNode].visible= true
        
        
    }
})
module.exports = SceneRecurso