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
        rect: new Rect(0,0,960,600)
        })
     sprite.position = ccp(sprite.contentSize.width/2,sprite.contentSize.height/2)
     
     this.addChild(sprite)
        
     
}
BackgroundRecurso.inherit(Nodes)

module.exports = BackgroundRecurso

