/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
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
, Sprite   = nodes.Sprite
, Rect     = geo.Rect
, PointZero = geo.PointZero

//TAG
var TagSprite =1
  
function DropZone(){
    DropZone.superclass.constructor.call(this,{
        file: path.join(__dirname, '../test/DropZone.png'),
                                
        rect: new Rect(0,0,246,246)
    })
    
    var s= Director.sharedDirector.winSize
      
    
    this.anchorPoint= ccp(0,0)
    this.position = ccp(s.width-(this.contentSize.width* 1.5),(s.height*0.5)-(this.contentSize.height*0.5))
    //        sprite.position = PointZero
    
}
DropZone.inherit(Sprite,{
    containerBox:function(){
        var cBox = this.boundingBox
        cBox.x = this.position.x - this.contentSize.width*0.5
        cBox.y  = this.position.y - this.contentSize.height*0.5
        return cBox
    }
      
})

module.exports = DropZone



