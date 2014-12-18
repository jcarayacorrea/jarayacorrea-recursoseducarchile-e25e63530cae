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
, PointZero = geo.PointZero

function CNBtn(numero){
    CNBtn.superclass.constructor.call(this,{
        normalImage: path.join(__dirname, '../resources/HUD_BotonActividad'+numero+'.png'),
        selectedImage: path.join(__dirname, '../resources/HUD_BotonActividad'+numero+'Hold.png'),
        callback: function(){
            if(this.parent.parent.parent.getState() != numero){
                this.parent.parent.parent.states =numero
            }
           
            this.parent.parent.parent.nodeSequence()
        }
        //anchorPoint: ccp(0,0)
    })
    this.anchorPoint = PointZero()
}
CNBtn.inherit(MenuItemImage)
module.exports = CNBtn

