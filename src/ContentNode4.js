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
, TagNodes2 = 2
, TagNodes3 = 3
, TagNodes4 = 4
, TagNodes5 = 5
  
  
function ContentNode4(){
    ContentNode4.superclass.constructor.call(this)
    
    var s = Director.sharedDirector.winSize
    
    var label = new Label({
        string: 'Escena 4', 
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
ContentNode4.inherit(Nodes,{
    restart: function(){
        var contentSuite = this.parent
        contentSuite.addChild({
            child: this,
            tag: TagNodes4,
            z:3
        })
    }
    
})

module.exports = ContentNode4
