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
, path   = require('path')

// Convenient access to some constructors
var Layer    = nodes.Layer
, Scene    = nodes.Scene
, Label    = nodes.Label
, Director = cocos.Director
, Nodes    = nodes.Node
, Sprite   = nodes.Sprite
, Rect     = geo.Rect
  
function DragObject(numero){
    DragObject.superclass.constructor.call(this,({
        file: path.join(__dirname, '../test/HUD_Boton'+numero+'Hold.png'),
                                
        rect: new Rect(0,0,82,82)
        }))
      
    
}
DragObject.inherit(Sprite,{
    objSelected:null,
    initialPos:null,
    containerBox:function(){
        var cBox = this.boundingBox
        cBox.x = this.position.x - this.contentSize.width*0.5
        cBox.y  = this.position.y - this.contentSize.height*0.5
        return cBox
    }
      
    })
module.exports = DragObject
