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
, ContentNode4 = require('/ContentNode4')
, ContentNode5 = require('/ContentNode5')

// Child Tag's
var TagSceneSuite1 = 1,
 TagSceneSuite2 = 2,
 TagSceneSuite3 = 3,
 TagSceneSuite4 = 4,
 TagSceneSuite5 = 5


function ContentSuite(){
    ContentSuite.superclass.constructor.call(this) 
    var contentNode1 = new ContentNode1(),
    contentNode2 = new ContentNode2(),
    contentNode3 = new ContentNode3(),
    contentNode4 = new ContentNode4(),
    contentNode5 = new ContentNode5()
    
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
    this.addChild({
        child:contentNode4,
        tag: TagSceneSuite4,
        z:3
    })
    this.addChild({
        child:contentNode5,
        tag: TagSceneSuite5,
        z:4
    })
    
    
}
ContentSuite.inherit(Nodes,{
    getNodes:function(){
        return this.children.length
    }
})
module.exports = ContentSuite


