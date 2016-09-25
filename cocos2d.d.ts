/// <reference path="cocos2d-lib.d.ts" />


declare namespace cc {
    // +--------------------------------------------------------------------------------
    // + File: cocos2d/core/base-nodes/CCClippingNode.js
    // +--------------------------------------------------------------------------------
    /**
     * the value of stencil bits.
     * @type Number
     */
    export const stencilBits:number;

    /**
     *
     *     cc.ClippingNode is a subclass of cc.Node.
     *     It draws its content (children) clipped using a stencil.
     *     The stencil is an other cc.Node that will not be drawn.
     *     The clipping is done using the alpha part of the stencil (adjusted with an alphaThreshold).
     *
     * @class
     * @extends cc.Node
     * @param {cc.Node} [stencil=null]
     *
     * @property {Number}   alphaThreshold  - Threshold for alpha value.
     * @property {Boolean}  inverted        - Indicate whether in inverted mode.
     * @property {cc.Node}  stencil         - he cc.Node to use as a stencil to do the clipping.
     */
    export class ClippingNode extends Node {
        //alphaThreshold: 0,
        //inverted: false,
        public alphaThreshold:number;
        public inverted:boolean;
        public stencil:Node;

        public constructor(stencil?:Node);
        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
         * @param {cc.Node} [stencil=null]
         */
        public ctor(stencil?:Node):void;

        /**
         * Initialization of the node, please do not call this function by yourself, you should pass the parameters to constructor to initialize it .
         * @function
         * @param {cc.Node} [stencil=null]
         */
        public init(stencil?:Node):boolean;

        /**
         *
         * The alpha threshold.
         * The content is drawn only where the stencil have pixel with alpha greater than the alphaThreshold.
         * Should be a float between 0 and 1.
         * This default to 1 (so alpha test is disabled).
         * </P>
         * @return {Number}
         */
        public getAlphaThreshold():number;

        /**
         * set alpha threshold.
         * @param {Number} alphaThreshold
         */
        public setAlphaThreshold(alphaThreshold:number):void;

        /**
         *
         *     Inverted. If this is set to YES,
         *     the stencil is inverted, so the content is drawn where the stencil is NOT drawn.
         *     This default to NO.
         *
         * @return {Boolean}
         */
        public isInverted():boolean;

        /**
         * set whether or not invert of stencil
         * @param {Boolean} inverted
         */
        public setInverted(inverted:boolean):void;

        /**
         * The cc.Node to use as a stencil to do the clipping.
         * The stencil node will be retained. This default to nil.
         * @return {cc.Node}
         */
        public getStencil():Node;

        /**
         * Set stencil.
         * @function
         * @param {cc.Node} stencil
         */
        public setStencil(stencil:Node):void;
    }
}


/// <reference path="../cocos2d-lib.d.ts" />

declare type CallFuncCallback = (targetOrData?:any, data?:any)=>any;

declare namespace cc {
    // +--------------------------------------------------------------------------------
    // + File: cocos2d/core/base-nodes/CCAction.js
    // +--------------------------------------------------------------------------------

    /** Default Action tag
     * @constant
     * @type {Number}
     * @default
     */
    export const ACTION_TAG_INVALID:number;

    /**
     * Base class for cc.Action objects.
     * @class
     *
     * @extends cc.Class
     *
     * @property {cc.Node}  target          - The target will be set with the 'startWithTarget' method. When the 'stop' method is called, target will be set to nil.
     * @property {cc.Node}  originalTarget  - The original target of the action.
     * @property {Number}   tag             - The tag of the action, can be used to find the action.
     */
    export class Action extends Class {
        public originalTarget:Node;
        public target:Node;
        public tag:number;

        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
         */
        public ctor():void;

        /**
         * to copy object with deep copy.
         * returns a clone of action.
         *
         * @return {cc.Action}
         */
        public clone():Action;

        /**
         * return true if the action has finished.
         *
         * @return {Boolean}
         */
        public isDone():boolean;

        /**
         * called before the action start. It will also set the target.
         *
         * @param {cc.Node} target
         */
        public startWithTarget(target:Node):void;

        /**
         * called after the action has finished. It will set the 'target' to nil. <br />
         * IMPORTANT: You should never call "action stop" manually. Instead, use: "target.stopAction(action);"
         */
        public stop():void;

        /**
         * called every frame with it's delta time. <br />
         * DON'T override unless you know what you are doing.
         *
         * @param {Number} dt
         */
        public step(dt:number):void;

        /**
         * Called once per frame. Time is the number of seconds of a frame interval.
         *
         * @param {Number}  dt
         */
        public update(dt:number):void;

        /**
         * get the target.
         *
         * @return {cc.Node}
         */
        public getTarget():Node;

        /**
         * The action will modify the target properties.
         *
         * @param {cc.Node} target
         */
        public setTarget(target:Node):void;

        /**
         * get the original target.
         *
         * @return {cc.Node}
         */
        public getOriginalTarget():Node;

        /**
         * Set the original target, since target can be nil. <br/>
         * Is the target that were used to run the action.  <br/>
         * Unless you are doing something complex, like cc.ActionManager, you should NOT call this method. <br/>
         * The target is 'assigned', it is not 'retained'. <br/>
         * @param {cc.Node} originalTarget
         */
        public setOriginalTarget(originalTarget:Node):void;

        /**
         * get tag number.
         * @return {Number}
         */
        public getTag():number;

        /**
         * set tag number.
         * @param {Number} tag
         */
        public setTag(tag:number):void;

        /**
         * Currently JavaScript Bindigns (JSB), in some cases, needs to use retain and release. This is a bug in JSB, <br/>
         * and the ugly workaround is to use retain/release. So, these 2 methods were added to be compatible with JSB. <br/>
         * This is a hack, and should be removed once JSB fixes the retain/release bug.
         */
        public retain():void;

        /**
         * Currently JavaScript Bindigns (JSB), in some cases, needs to use retain and release. This is a bug in JSB, <br/>
         * and the ugly workaround is to use retain/release. So, these 2 methods were added to be compatible with JSB. <br/>
         * This is a hack, and should be removed once JSB fixes the retain/release bug.
         */
        public release();
    }

    /**
     * Allocates and initializes the action.
     *
     * @function cc.action
     * @static
     * @return {cc.Action}
     *
     * @example
     * // return {cc.Action}
     * var action = cc.action();
     */
    export function action():Action;

    /**
     * Base class actions that do have a finite time duration. <br/>
     * Possible actions: <br/>
     * - An action with a duration of 0 seconds. <br/>
     * - An action with a duration of 35.5 seconds.
     *
     * Infinite time actions are valid
     * @class
     * @extends cc.Action
     */
    export class FiniteTimeAction extends Action {
        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
         */
        public ctor():void;

        /**
         * get duration of the action. (seconds)
         *
         * @return {Number}
         */
        public getDuration():number;

        /**
         * set duration of the action. (seconds)
         *
         * @param {Number} duration
         */
        public setDuration(duration:number):void;

        /**
         * Returns a reversed action. <br />
         * For example: <br />
         * - The action will be x coordinates of 0 move to 100. <br />
         * - The reversed action will be x of 100 move to 0.
         * - Will be rewritten
         *
         * @return {Null}
         */
        public reverse():void;

        /**
         * to copy object with deep copy.
         * returns a clone of action.
         *
         * @return {cc.FiniteTimeAction}
         */
        public clone():FiniteTimeAction;
    }

    /**
     * Changes the speed of an action, making it take longer (speed > 1)
     * or less (speed < 1) time. <br/>
     * Useful to simulate 'slow motion' or 'fast forward' effect.
     *
     * @warning This action can't be Sequenceable because it is not an cc.IntervalAction
     * @class
     * @extends cc.Action
     * @param {cc.ActionInterval} action
     * @param {Number} speed
     */
    export class Speed extends Action {
        //_speed: 0.0,
        //_innerAction: null,

        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
         * @param {cc.ActionInterval} action
         * @param {Number} speed
         */
        public ctor(action:ActionInterval, speed:number):void;
        public ctor():void;

        /**
         * initializes the action.
         *
         * @param {cc.ActionInterval} action
         * @param {Number} speed
         * @return {Boolean}
         */
        public initWithAction(action:ActionInterval, speed:number):boolean;

        /**
         * Gets the current running speed. <br />
         * Will get a percentage number, compared to the original speed.
         *
         * @return {Number}
         */
        public getSpeed():number;

        /**
         * alter the speed of the inner function in runtime.
         *
         * @param {Number} speed
         */
        public setSpeed(speed:number):void;

        /**
         * returns a reversed action. <br />
         * For example: <br />
         * - The action will be x coordinates of 0 move to 100. <br />
         * - The reversed action will be x of 100 move to 0.
         * - Will be rewritten
         *
         * @return {cc.Speed}
         */
        public reverse():Speed;

        /**
         * Set inner Action.
         * @param {cc.ActionInterval} action
         */
        public setInnerAction(action:ActionInterval):void;

        /**
         * Get inner Action.
         *
         * @return {cc.ActionInterval}
         */
        public getInnerAction():ActionInterval;
    }

    /**
     * creates the speed action.
     *
     * @function cc.speed
     * @param {cc.ActionInterval} action
     * @param {Number} speed
     * @return {cc.Speed}
     */
    export function speed(action:ActionInterval, speed:number):Speed;

    /**
     * cc.Follow is an action that "follows" a node.
     *
     * @example
     * //example
     * //Instead of using cc.Camera as a "follower", use this action instead.
     * layer.runAction(cc.follow(hero));
     *
     * @property {Number}  leftBoundary - world leftBoundary.
     * @property {Number}  rightBoundary - world rightBoundary.
     * @property {Number}  topBoundary - world topBoundary.
     * @property {Number}  bottomBoundary - world bottomBoundary.
     *
     * @param {cc.Node} followedNode
     * @param {cc.Rect} rect
     * @example
     * // creates the action with a set boundary
     * var sprite = new cc.Sprite("spriteFileName");
     * var followAction = new cc.Follow(sprite, cc.rect(0, 0, s.width * 2 - 100, s.height));
     * this.runAction(followAction);
     *
     * // creates the action with no boundary set
     * var sprite = new cc.Sprite("spriteFileName");
     * var followAction = new cc.Follow(sprite);
     * this.runAction(followAction);
     *
     * @class
     * @extends cc.Action
     */
    export class Follow extends Action {
        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. <br />
         * creates the action with a set boundary. <br/>
         * creates the action with no boundary set.
         * @param {cc.Node} followedNode
         * @param {cc.Rect} rect
         */
        public ctor(followedNode:Node, rect:Rect):void;
        public ctor():void;

        public initWithTarget(followedNode:Node, rect:Rect):boolean;

        /**
         * to copy object with deep copy.
         * returns a clone of action.
         *
         * @return {cc.Follow}
         */
        public clone():Follow;

        /**
         * Get whether camera should be limited to certain area.
         *
         * @return {Boolean}
         */
        public isBoundarySet():boolean;

        /**
         * alter behavior - turn on/off boundary.
         *
         * @param {Boolean} value
         */
        public setBoudarySet(value:boolean):void;
    }

    /**
     * creates the action with a set boundary. <br/>
     * creates the action with no boundary set.
     *
     * @function
     * @param {cc.Node} followedNode
     * @param {cc.Rect} rect
     * @return {cc.Follow|Null} returns the cc.Follow object on success
     * @example
     * // example
     * // creates the action with a set boundary
     * var sprite = new cc.Sprite("spriteFileName");
     * var followAction = cc.follow(sprite, cc.rect(0, 0, s.width * 2 - 100, s.height));
     * this.runAction(followAction);
     *
     * // creates the action with no boundary set
     * var sprite = new cc.Sprite("spriteFileName");
     * var followAction = cc.follow(sprite);
     * this.runAction(followAction);
     */
    export function follow(followedNode:Node, rect:Rect):Follow;

    // +--------------------------------------------------------------------------------
    // + File: cocos2d/core/base-nodes/CCActionCamera.js
    // +--------------------------------------------------------------------------------
    /**
     * Base class for cc.Camera actions
     * @class
     * @extends cc.ActionInterval
     */
    export class ActionCamera extends ActionInterval {
        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
         */
        public ctor():void;

        /**
         * called before the action start. It will also set the target.
         *
         * @param {cc.Node} target
         */
        public startWithTarget(target:Node):void;

        /**
         * to copy object with deep copy.
         * returns a new clone of the action
         *
         * @returns {cc.ActionCamera}
         */
        public clone():ActionCamera;

        /**
         * returns a reversed action. <br />
         * For example: <br />
         * - The action will be x coordinates of 0 move to 100. <br />
         * - The reversed action will be x of 100 move to 0.
         * - Will be rewritten
         *
         */
        public reverse():ActionCamera;
    }

    export interface SphericalCoordinates {
        newRadius:number;
        zenith:number;
        azimuth:number;
    }

    /**
     * Orbits the camera around the center of the screen using spherical coordinates.
     *
     * @param {Number} t time
     * @param {Number} radius
     * @param {Number} deltaRadius
     * @param {Number} angleZ
     * @param {Number} deltaAngleZ
     * @param {Number} angleX
     * @param {Number} deltaAngleX
     *
     * @class
     * @extends cc.ActionCamera
     */
    export class OrbitCamera extends ActionCamera {
        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. <br />
         * creates a cc.OrbitCamera action with radius, delta-radius,  z, deltaZ, x, deltaX.
         * @param {Number} t time
         * @param {Number} radius
         * @param {Number} deltaRadius
         * @param {Number} angleZ
         * @param {Number} deltaAngleZ
         * @param {Number} angleX
         * @param {Number} deltaAngleX
         */
        public ctor(t:number,
                    radius:number,
                    deltaRadius:number,
                    angleZ:number,
                    deltaAngleZ:number,
                    angleX:number,
                    deltaAngleX:number):void;
        public ctor():void;

        /**
         * initializes a cc.OrbitCamera action with radius, delta-radius,  z, deltaZ, x, deltaX
         * @param {Number} t time
         * @param {Number} radius
         * @param {Number} deltaRadius
         * @param {Number} angleZ
         * @param {Number} deltaAngleZ
         * @param {Number} angleX
         * @param {Number} deltaAngleX
         * @return {Boolean}
         */
        public initWithDuration(t:number,
                                radius:number,
                                deltaRadius:number,
                                angleZ:number,
                                deltaAngleZ:number,
                                angleX:number,
                                deltaAngleX:number):boolean;
        public initWithDuration(d:number):boolean;

        /**
         * positions the camera according to spherical coordinates
         * @return {Object}
         */
        public sphericalRadius():SphericalCoordinates;

        /**
         * called before the action start. It will also set the target.
         *
         * @param {cc.Node} target
         */
        public startWithTarget(target:Node):void;

        /**
         * to copy object with deep copy.
         * returns a new clone of the action
         *
         * @returns {cc.ActionCamera}
         */
        public clone():ActionCamera;
    }

    /**
     * creates a cc.OrbitCamera action with radius, delta-radius,  z, deltaZ, x, deltaX
     * @function
     * @param {Number} t time
     * @param {Number} radius
     * @param {Number} deltaRadius
     * @param {Number} angleZ
     * @param {Number} deltaAngleZ
     * @param {Number} angleX
     * @param {Number} deltaAngleX
     * @return {cc.OrbitCamera}
     */
    export function orbitCamera(t:number,
                                radius:number,
                                deltaRadius:number,
                                angleZ:number,
                                deltaAngleZ:number,
                                angleX:number,
                                deltaAngleX:number):OrbitCamera;


    // +--------------------------------------------------------------------------------
    // + File: cocos2d/core/base-nodes/CCActionCatmullRom.js
    // +--------------------------------------------------------------------------------
    /**
     * Returns the Cardinal Spline position for a given set of control points, tension and time. <br />
     * CatmullRom Spline formula. <br />
     * s(-ttt + 2tt - t)P1 + s(-ttt + tt)P2 + (2ttt - 3tt + 1)P2 + s(ttt - 2tt + t)P3 + (-2ttt + 3tt)P3 + s(ttt - tt)P4
     *
     * @function
     * @param {cc.Point} p0
     * @param {cc.Point} p1
     * @param {cc.Point} p2
     * @param {cc.Point} p3
     * @param {Number} tension
     * @param {Number} t
     * @return {cc.Point}
     */
    export function cardinalSplineAt(p0:cc.Point,
                                     p1:cc.Point,
                                     p2:cc.Point,
                                     p3:cc.Point,
                                     tension:number,
                                     t:number):cc.Point;

    /**
     * returns a new copy of the array reversed.
     *
     * @return {Array}
     */
    export function reverseControlPoints (controlPoints:cc.Point[]):cc.Point[];


    /**
     * returns a new clone of the controlPoints
     *
     * @param controlPoints
     * @returns {Array}
     */
    export function cloneControlPoints (controlPoints:cc.Point[]):cc.Point[];

    /**
     * returns a point from the array
     *
     * @param {Array} controlPoints
     * @param {Number} pos
     * @return {cc.Point}
     */
    export function getControlPointAt(controlPoints:cc.Point[], pos:number):cc.Point;

    /**
     * reverse the current control point array inline, without generating a new one <br />
     *
     * @param controlPoints
     */
    export function reverseControlPointsInline(controlPoints:cc.Point[]):void;


    /**
     * Cardinal Spline path. {@link http://en.wikipedia.org/wiki/Cubic_Hermite_spline#Cardinal_spline}
     * Absolute coordinates.
     *
     * @class
     * @extends cc.ActionInterval
     * @param {Number} duration
     * @param {Array} points array of control points
     * @param {Number} tension
     *
     * @example
     * //create a cc.CardinalSplineTo
     * var action1 = cc.cardinalSplineTo(3, array, 0);
     */
    export class CardinalSplineTo extends ActionInterval {
        ///** Array of control points */
        //_points:null,
        //_deltaT:0,
        //_tension:0,
        //_previousPosition:null,
        //_accumulatedDiff:null,

        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. <br />
         * Creates an action with a Cardinal Spline array of points and tension.
         * @param {Number} duration
         * @param {Array} points array of control points
         * @param {Number} tension
         */
        public ctor(duration:number, points:cc.Point[], tension:number):void;
        public ctor():void;

        /**
         * initializes the action with a duration and an array of points
         *
         * @param {Number} duration
         * @param {Array} points array of control points
         * @param {Number} tension
         *
         * @return {Boolean}
         */
        public initWithDuration(duration:number, points:cc.Point[], tension:number):boolean;
        public initWithDuration(d:number):boolean;

        /**
         * returns a new clone of the action
         *
         * @returns {cc.CardinalSplineTo}
         */
        public clone():CardinalSplineTo;

        /**
         * called before the action start. It will also set the target.
         *
         * @param {cc.Node} target
         */
        public startWithTarget(target:Node):void;

        /**
         * reverse a new cc.CardinalSplineTo. <br />
         * Along the track of movement in the opposite.
         *
         * @return {cc.CardinalSplineTo}
         */
        public reverse():CardinalSplineTo;

        /**
         * update position of target
         *
         * @param {cc.Point} newPos
         */
        public updatePosition(newPos:cc.Point):void;

        /**
         * Points getter
         *
         * @return {Array}
         */
        public getPoints():cc.Point[];

        /**
         * Points setter
         *
         * @param {Array} points
         */
        public setPoints(points:cc.Point[]):void;
    }

    /**
     * creates an action with a Cardinal Spline array of points and tension.
     *
     * @function
     * @param {Number} duration
     * @param {Array} points array of control points
     * @param {Number} tension
     * @return {cc.CardinalSplineTo}
     *
     * @example
     * //create a cc.CardinalSplineTo
     * var action1 = cc.cardinalSplineTo(3, array, 0);
     */
    export function cardinalSplineTo(duration:number, points:cc.Point[], tension:number):CardinalSplineTo;

    /**
     * Cardinal Spline path. {@link http://en.wikipedia.org/wiki/Cubic_Hermite_spline#Cardinal_spline}
     * Relative coordinates.
     *
     * @class
     * @extends cc.CardinalSplineTo
     * @param {Number} duration
     * @param {Array} points
     * @param {Number} tension
     *
     * @example
     * //create a cc.CardinalSplineBy
     * var action1 = cc.cardinalSplineBy(3, array, 0);
     */
    export class CardinalSplineBy extends CardinalSplineTo {
        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. <br />
         * creates an action with a Cardinal Spline array of points and tension.
         * @param {Number} duration
         * @param {Array} points
         * @param {Number} tension
         */
        public ctor(duration:number, points:cc.Point[], tension:number):void;
        public ctor():void;

        /**
         * reverse a new cc.CardinalSplineBy
         *
         * @return {cc.CardinalSplineBy}
         */
        public reverse():CardinalSplineBy;

        /**
         * returns a new clone of the action
         *
         * @returns {cc.CardinalSplineBy}
         */
        public clone():CardinalSplineBy;
    }

    /**
     * creates an action with a Cardinal Spline array of points and tension.
     *
     * @function
     * @param {Number} duration
     * @param {Array} points
     * @param {Number} tension
     *
     * @return {cc.CardinalSplineBy}
     */
    export function cardinalSplineBy(duration:number, points:cc.Point[], tension:number):CardinalSplineBy;

    /**
     * An action that moves the target with a CatmullRom curve to a destination point.<br/>
     * A Catmull Rom is a Cardinal Spline with a tension of 0.5.  <br/>
     * {@link http://en.wikipedia.org/wiki/Cubic_Hermite_spline#Catmull.E2.80.93Rom_spline}
     * Absolute coordinates.
     *
     * @class
     * @extends cc.CardinalSplineTo
     * @param {Number} dt
     * @param {Array} points
     *
     * @example
     * var action1 = cc.catmullRomTo(3, array);
     */
    export class CatmullRomTo extends CardinalSplineTo {
        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. <br />
         * creates an action with a Cardinal Spline array of points and tension.
         * @param {Number} dt
         * @param {Array} points
         * @param {number} [tension] Ignore, only here to suppress TypeScript compiler error for overloading method.
         */
        public ctor(dt:number, points:cc.Point[], tension:number):void;
        public ctor():void;

        /**
         * returns a new clone of the action
         * @returns {cc.CatmullRomTo}
         */
        public clone():CatmullRomTo;
    }

    /**
     * creates an action with a Cardinal Spline array of points and tension.
     *
     * @function
     * @param {Number} dt
     * @param {Array} points
     * @param {number} [tension] Ignore, only here to suppress TypeScript compiler error for overloading method.
     * @return {cc.CatmullRomTo}
     *
     * @example
     * var action1 = cc.catmullRomTo(3, array);
     */
    export function catmullRomTo(dt:number, points:cc.Point[], tension?:number):CatmullRomTo;

    /**
     * An action that moves the target with a CatmullRom curve by a certain distance.  <br/>
     * A Catmull Rom is a Cardinal Spline with a tension of 0.5.<br/>
     * http://en.wikipedia.org/wiki/Cubic_Hermite_spline#Catmull.E2.80.93Rom_spline
     * Relative coordinates.
     *
     * @class
     * @extends cc.CardinalSplineBy
     * @param {Number} dt
     * @param {Array} points
     *
     * @example
     * var action1 = cc.catmullRomBy(3, array);
     */
    export class CatmullRomBy extends CardinalSplineBy {
        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. <br />
         * Creates an action with a Cardinal Spline array of points and tension.
         * @param {Number} dt
         * @param {Array} points
         */
        public ctor(dt:number, points:cc.Point[]):void;
        public ctor():void;

        /**
         * initializes the action with a duration and an array of points
         *
         * @function
         * @param {Number} dt
         * @param {Array} points
         */
        public initWithDuration(dt:number, points:cc.Point[]):boolean;
        public initWithDuration(d:number):boolean;

        /**
         * returns a new clone of the action
         * @returns {cc.CatmullRomBy}
         */
        public clone():CatmullRomBy;
    }

    /**
     * Creates an action with a Cardinal Spline array of points and tension
     * @function
     * @param {Number} dt
     * @param {Array} points
     * @return {cc.CatmullRomBy}
     * @example
     * var action1 = cc.catmullRomBy(3, array);
     */
    export function catmullRomBy(dt:number, points:cc.Point[]):CatmullRomBy;

    // +--------------------------------------------------------------------------------
    // + File: cocos2d/core/base-nodes/CCActionEase.js
    // +--------------------------------------------------------------------------------
    /**
     * Base class for Easing actions
     * @class
     * @extends cc.ActionInterval
     * @param {cc.ActionInterval} action
     *
     * @deprecated since v3.0 Does not recommend the use of the base object.
     *
     * @example
     * var moveEase = new cc.ActionEase(action);
     */
    export class ActionEase extends ActionInterval {
        //_inner:null,

        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. <br />
         * creates the action of ActionEase.
         * @param {cc.ActionInterval} action
         */
        public ctor(action:ActionInterval):void;
        public ctor():void;

        /**
         * initializes the action
         *
         * @param {cc.ActionInterval} action
         * @return {Boolean}
         */
        public initWithAction(action:ActionInterval):boolean;

        /**
         * to copy object with deep copy.
         * returns a clone of action.
         *
         * @returns {cc.ActionEase}
         */
        public clone():ActionEase;

        /**
         * Create new action to original operation effect opposite. <br />
         * For example: <br />
         * - The action will be x coordinates of 0 move to 100. <br />
         * - The reversed action will be x of 100 move to 0.
         * - Will be rewritten
         * @return {cc.ActionEase}
         */
        public reverse():ActionEase;

        /**
         * Get inner Action.
         *
         * @return {cc.ActionInterval}
         */
        public getInnerAction():ActionInterval;
    }

    /**
     * creates the action of ActionEase
     *
     * @param {cc.ActionInterval} action
     * @return {cc.ActionEase}
     * @example
     * // example
     * var moveEase = cc.actionEase(action);
     */
    export function actionEase(action:ActionInterval):ActionEase;

    /**
     * Base class for Easing actions with rate parameters
     *
     * @class
     * @extends cc.ActionEase
     * @param {cc.ActionInterval} action
     * @param {Number} rate
     *
     * @deprecated since v3.0 please cc.easeRateAction(action, 3.0);
     *
     * @example
     * //The old usage
     * cc.EaseRateAction.create(action, 3.0);
     * //The new usage
     * var moveEaseRateAction = cc.easeRateAction(action, 3.0);
     */
    export class EaseRateAction extends ActionEase {
        //_rate:0,

        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. <br />
         * Creates the action with the inner action and the rate parameter.
         * @param {cc.ActionInterval} action
         * @param {Number} rate
         */
        public ctor(action:ActionInterval, rate?:number):void;
        public ctor():void;

        /**
         * Initializes the action with the inner action and the rate parameter
         * @param {cc.ActionInterval} action
         * @param {Number} rate
         * @return {Boolean}
         */
        public initWithAction(action:ActionInterval, rate?:number):boolean;

        /**
         * to copy object with deep copy.
         * returns a clone of action.
         *
         * @returns {cc.EaseRateAction}
         */
        public clone():EaseRateAction;

        /**
         * set rate value for the actions
         * @param {Number} rate
         */
        public setRate(rate:number):void;

        /** get rate value for the actions
         * @return {Number}
         */
        public getRate():number;

        /**
         * Create new action to original operation effect opposite. <br />
         * For example: <br />
         * - The action will be x coordinates of 0 move to 100. <br />
         * - The reversed action will be x of 100 move to 0.
         * - Will be rewritten
         * @return {cc.EaseRateAction}
         */
        public reverse():EaseRateAction;
    }

    /**
     * Creates the action with the inner action and the rate parameter.
     *
     * @param {cc.ActionInterval} action
     * @param {Number} rate
     * @return {cc.EaseRateAction}
     * @example
     * // example
     * var moveEaseRateAction = cc.easeRateAction(action, 3.0);
     */
    export function easeRateAction(action:ActionInterval, rate:number):EaseRateAction;

    /**
     * cc.EaseIn action with a rate. From slow to fast.
     *
     * @class
     * @extends cc.EaseRateAction
     *
     * @deprecated since v3.0 please use action.easing(cc.easeIn(3));
     *
     * @example
     * //The old usage
     * cc.EaseIn.create(action, 3);
     * //The new usage
     * action.easing(cc.easeIn(3.0));
     */
    export class EaseIn extends EaseRateAction {
        /**
         * Create a cc.easeIn action. Opposite with the original motion trajectory.
         * @return {cc.EaseIn}
         */
        public reverse():EaseIn;

        /**
         * to copy object with deep copy.
         * returns a clone of action.
         *
         * @returns {cc.EaseIn}
         */
        public clone():EaseIn;
    }

    /**
     * Creates the action easing object with the rate parameter. <br />
     * From slow to fast.
     *
     * @function
     * @param {Number} rate
     * @return {Object}
     * @example
     * // example
     * action.easing(cc.easeIn(3.0));
     */
    export function easeIn(rate:number):EaseIn;

    /**
     * cc.EaseOut action with a rate. From fast to slow.
     *
     * @class
     * @extends cc.EaseRateAction
     *
     * @deprecated since v3.0 please use action.easing(cc.easeOut(3))
     *
     * @example
     * //The old usage
     * cc.EaseOut.create(action, 3);
     * //The new usage
     * action.easing(cc.easeOut(3.0));
     */
    export class EaseOut extends EaseRateAction {
        /**
         * Create a cc.easeIn action. Opposite with the original motion trajectory.
         * @return {cc.EaseOut}
         */
        public reverse():EaseOut;

        /**
         * to copy object with deep copy.
         * returns a clone of action.
         *
         * @returns {cc.EaseOut}
         */
        public clone():EaseOut;
    }

    /**
     * Creates the action easing object with the rate parameter. <br />
     * From fast to slow.
     *
     * @function
     * @param {Number} rate
     * @return {Object}
     * @example
     * // example
     * action.easing(cc.easeOut(3.0));
     */
    export function easeOut(rate:number):EaseOut;

    /**
     * cc.EaseInOut action with a rate. <br />
     * Slow to fast then to slow.
     * @class
     * @extends cc.EaseRateAction
     *
     * @deprecated since v3.0 please use action.easing(cc.easeInOut(3.0))
     *
     * @example
     * //The old usage
     * cc.EaseInOut.create(action, 3);
     * //The new usage
     * action.easing(cc.easeInOut(3.0));
     */
    export class EaseInOut extends EaseRateAction {
        /**
         * to copy object with deep copy.
         * returns a clone of action.
         *
         * @returns {cc.EaseInOut}
         */
        public clone():EaseInOut;

        /**
         * Create a cc.EaseInOut action. Opposite with the original motion trajectory.
         * @return {cc.EaseInOut}
         */
        public reverse():EaseInOut;
    }

    /**
     * Creates the action easing object with the rate parameter. <br />
     * Slow to fast then to slow.
     * @function
     * @param {Number} rate
     * @return {Object}
     *
     * @example
     * //The new usage
     * action.easing(cc.easeInOut(3.0));
     */
    export function easeInOut(rate:number):EaseInOut;

    /**
     * cc.Ease Exponential In. Slow to Fast. <br />
     * Reference easeInExpo: <br />
     * {@link http://www.zhihu.com/question/21981571/answer/19925418}
     * @class
     * @extends cc.ActionEase
     *
     * @deprecated since v3.0 please action.easing(cc.easeExponentialIn())
     *
     * @example
     * //The old usage
     * cc.EaseExponentialIn.create(action);
     * //The new usage
     * action.easing(cc.easeExponentialIn());
     */
    export class EaseExponentialIn extends ActionEase {
        /**
         * Create a cc.EaseExponentialOut action. Opposite with the original motion trajectory.
         * @return {cc.EaseExponentialOut}
         */
        public reverse():EaseExponentialOut;

        /**
         * to copy object with deep copy.
         * returns a clone of action.
         *
         * @returns {cc.EaseExponentialIn}
         */
        public clone():EaseExponentialIn;
    }

    //// TODO: What's this for? Does it alter the inteface?
    //cc._easeExponentialInObj = {
    //    easing: function(dt){
    //        return dt === 0 ? 0 : Math.pow(2, 10 * (dt - 1));
    //    },
    //    reverse: function(){
    //        return cc._easeExponentialOutObj;
    //    }
    //};

    /**
     * Creates the action easing object with the rate parameter. <br />
     * Reference easeInExpo: <br />
     * {@link http://www.zhihu.com/question/21981571/answer/19925418}
     * @function
     * @return {Object}
     * @example
     * // example
     * action.easing(cc.easeExponentialIn());
     */
    export function easeExponentialIn():EaseExponentialIn;

    /**
     * Ease Exponential Out. <br />
     * Reference easeOutExpo: <br />
     * {@link http://www.zhihu.com/question/21981571/answer/19925418}
     * @class
     * @extends cc.ActionEase
     *
     * @deprecated since v3.0 please use action.easing(cc.easeExponentialOut())
     *
     * @example
     * //The old usage
     * cc.EaseExponentialOut.create(action);
     * //The new usage
     * action.easing(cc.easeExponentialOut());
     */
    export class EaseExponentialOut extends ActionEase {
        /**
         * Create a cc.EaseExponentialIn action. Opposite with the original motion trajectory.
         * @return {cc.EaseExponentialIn}
         */
        public reverse():EaseExponentialIn;

        /**
         * to copy object with deep copy.
         * returns a clone of action.
         *
         * @returns {cc.EaseExponentialOut}
         */
        public clone():EaseExponentialOut;
    }

    //cc._easeExponentialOutObj = {
    //    easing: function(dt){
    //        return dt === 1 ? 1 : (-(Math.pow(2, -10 * dt)) + 1);
    //    },
    //    reverse: function(){
    //        return cc._easeExponentialInObj;
    //    }
    //};

    /**
     * creates the action easing object. <br />
     * Reference easeOutExpo: <br />
     * {@link http://www.zhihu.com/question/21981571/answer/19925418}
     *
     * @return {Object}
     * @example
     * // example
     * action.easing(cc.easeExponentialOut());
     */
    export function easeExponentialOut():EaseExponentialOut;

    /**
     * Ease Exponential InOut. <br />
     * Reference easeInOutExpo: <br />
     * {@link http://www.zhihu.com/question/21981571/answer/19925418}
     *
     * @class
     * @extends cc.ActionEase
     *
     * @deprecated since v3.0 please use action.easing(cc.easeExponentialInOut)
     *
     * @example
     * //The old usage
     * cc.EaseExponentialInOut.create(action);
     * //The new usage
     * action.easing(cc.easeExponentialInOut());
     */
    export class EaseExponentialInOut extends ActionEase {

        /**
         * Create a cc.EaseExponentialInOut action. Opposite with the original motion trajectory.
         * @return {cc.EaseExponentialInOut}
         */
        public reverse():EaseExponentialInOut;

        /**
         * to copy object with deep copy.
         * returns a clone of action.
         *
         * @returns {cc.EaseExponentialInOut}
         */
        public clone():EaseExponentialInOut;
    }

    //cc._easeExponentialInOutObj = {
    //    easing: function(dt){
    //        if( dt !== 1 && dt !== 0) {
    //            dt *= 2;
    //            if (dt < 1)
    //                return 0.5 * Math.pow(2, 10 * (dt - 1));
    //            else
    //                return 0.5 * (-Math.pow(2, -10 * (dt - 1)) + 2);
    //        }
    //        return dt;
    //    },
    //    reverse: function(){
    //        return cc._easeExponentialInOutObj;
    //    }
    //};

    /**
     * creates an EaseExponentialInOut action easing object. <br />
     * Reference easeInOutExpo: <br />
     * {@link http://www.zhihu.com/question/21981571/answer/19925418}
     * @function
     * @return {Object}
     * @example
     * // example
     * action.easing(cc.easeExponentialInOut());
     */
    export function easeExponentialInOut():EaseExponentialInOut;

    /**
     * Ease Sine In. <br />
     * Reference easeInSine: <br />
     * {@link http://www.zhihu.com/question/21981571/answer/19925418}
     * @class
     * @extends cc.ActionEase
     *
     * @deprecated since v3.0 please use action.easing(cc.easeSineIn())
     *
     * @example
     * //The old usage
     * cc.EaseSineIn.create(action);
     * //The new usage
     * action.easing(cc.easeSineIn());
     */
    export class EaseSineIn extends ActionEase {
        /**
         * Create a cc.EaseSineOut action. Opposite with the original motion trajectory.
         * @return {cc.EaseSineOut}
         */
        public reverse():EaseSineOut;

        /**
         * to copy object with deep copy.
         * returns a clone of action.
         *
         * @returns {cc.EaseSineIn}
         */
        public clone():EaseSineIn;
    }

    //cc._easeSineInObj = {
    //    easing: function(dt){
    //        return (dt===0 || dt===1) ? dt : -1 * Math.cos(dt * Math.PI / 2) + 1;
    //    },
    //    reverse: function(){
    //        return cc._easeSineOutObj;
    //    }
    //};

    /**
     * creates an EaseSineIn action. <br />
     * Reference easeInSine: <br />
     * {@link http://www.zhihu.com/question/21981571/answer/19925418}
     * @function
     * @return {Object}
     * @example
     * // example
     * action.easing(cc.easeSineIn());
     */
    export function easeSineIn():EaseSineIn;

    /**
     * Ease Sine Out. <br />
     * Reference easeOutSine: <br />
     * {@link http://www.zhihu.com/question/21981571/answer/19925418}
     * @class
     * @extends cc.ActionEase
     *
     * @deprecated since v3.0 please use action.easing(cc.easeSineOut())
     *
     * @example
     * //The old usage
     * cc.EaseSineOut.create(action);
     * //The new usage
     * action.easing(cc.easeSineOut());
     */
    export class EaseSineOut extends ActionEase {
        /**
         * Create a cc.EaseSineIn action. Opposite with the original motion trajectory.
         * @return {cc.EaseSineIn}
         */
        public reverse():EaseSineIn;

        /**
         * to copy object with deep copy.
         * returns a clone of action.
         *
         * @returns {cc.EaseSineOut}
         */
        public clone():EaseSineOut;
    }

    //cc._easeSineOutObj = {
    //    easing: function(dt){
    //        return (dt===0 || dt===1) ? dt : Math.sin(dt * Math.PI / 2);
    //    },
    //    reverse: function(){
    //        return cc._easeSineInObj;
    //    }
    //};

    /**
     * Creates an EaseSineOut action easing object. <br />
     * Reference easeOutSine: <br />
     * {@link http://www.zhihu.com/question/21981571/answer/19925418}
     * @function
     * @return {Object}
     * @example
     * // example
     * action.easing(cc.easeSineOut());
     */
    export function easeSineOut():EaseSineOut;

    /**
     * Ease Sine InOut. <br />
     * Reference easeInOutSine: <br />
     * {@link http://www.zhihu.com/question/21981571/answer/19925418}
     * @class
     * @extends cc.ActionEase
     *
     * @deprecated since v3.0 please use action.easing(cc.easeSineInOut())
     *
     * @example
     * //The old usage
     * cc.EaseSineInOut.create(action);
     * //The new usage
     * action.easing(cc.easeSineInOut());
     */
    export class EaseSineInOut extends ActionEase {
        /**
         * to copy object with deep copy.
         * returns a clone of action.
         *
         * @returns {cc.EaseSineInOut}
         */
        public clone():EaseSineInOut;

        /**
         * Create a cc.EaseSineInOut action. Opposite with the original motion trajectory.
         * @return {cc.EaseSineInOut}
         */
        public reverse():EaseSineInOut;
    }

    //cc._easeSineInOutObj = {
    //    easing: function(dt){
    //        return (dt === 0 || dt === 1) ? dt : -0.5 * (Math.cos(Math.PI * dt) - 1);
    //    },
    //    reverse: function(){
    //        return cc._easeSineInOutObj;
    //    }
    //};

    /**
     * creates the action easing object. <br />
     * Reference easeInOutSine: <br />
     * {@link http://www.zhihu.com/question/21981571/answer/19925418}
     * @return {Object}
     * @example
     * // example
     * action.easing(cc.easeSineInOut());
     */
    export function easeSineInOut():EaseSineInOut;

    /**
     * Ease Elastic abstract class.
     * @class
     * @extends cc.ActionEase
     * @param {cc.ActionInterval} action
     * @param {Number} [period=0.3]
     *
     * @deprecated since v3.0 Does not recommend the use of the base object.
     */
    export class EaseElastic extends ActionEase {
        //_period: 0.3,

        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. <br />
         * Creates the action with the inner action and the period in radians (default is 0.3).
         * @param {cc.ActionInterval} action
         * @param {Number} [period=0.3]
         */
        public ctor(action:ActionInterval, period?:number):void;
        public ctor():void;

        /**
         * get period of the wave in radians. default is 0.3
         * @return {Number}
         */
        public getPeriod():number;

        /**
         * set period of the wave in radians.
         * @param {Number} period
         */
        public setPeriod(period:number):void;

        /**
         * Initializes the action with the inner action and the period in radians (default is 0.3)
         * @param {cc.ActionInterval} action
         * @param {Number} [period=0.3]
         * @return {Boolean}
         */
        public initWithAction(action:ActionInterval, period:number):boolean;
        public initWithAction(action:ActionInterval):boolean;

        /**
         * Create a action. Opposite with the original motion trajectory. <br />
         * Will be overwrite.
         * @return {null}
         */
        public reverse():EaseElastic;

        /**
         * to copy object with deep copy.
         * returns a clone of action.
         *
         * @returns {cc.EaseElastic}
         */
        public clone():EaseElastic;
    }

    /**
     * Ease Elastic In action. <br />
     * Reference easeInElastic: <br />
     * {@link http://www.zhihu.com/question/21981571/answer/19925418}
     * @warning This action doesn't use a bijective function. Actions like Sequence might have an unexpected result when used with this action.
     * @class
     * @extends cc.EaseElastic
     *
     * @deprecated since v3.0 please use action.easing(cc.easeElasticIn())
     *
     * @example
     * //The old usage
     * cc.EaseElasticIn.create(action, period);
     * //The new usage
     * action.easing(cc.easeElasticIn(period));
     */
    export class EaseElasticIn extends EaseElastic {
        /**
         * Create a action. Opposite with the original motion trajectory.
         * @return {cc.EaseElasticOut}
         */
        public reverse():EaseElasticOut;

        /**
         * to copy object with deep copy.
         * returns a clone of action.
         *
         * @returns {cc.EaseElasticIn}
         */
        public clone():EaseElasticIn;
    }


////default ease elastic in object (period = 0.3)
//    cc._easeElasticInObj = {
//        easing:function(dt){
//            if (dt === 0 || dt === 1)
//                return dt;
//            dt = dt - 1;
//            return -Math.pow(2, 10 * dt) * Math.sin((dt - (0.3 / 4)) * Math.PI * 2 / 0.3);
//        },
//        reverse:function(){
//            return cc._easeElasticOutObj;
//        }
//    };

    /**
     * Creates the action easing obejct with the period in radians (default is 0.3). <br />
     * Reference easeInElastic: <br />
     * {@link http://www.zhihu.com/question/21981571/answer/19925418}
     * @function
     * @param {Number} [period=0.3]
     * @return {Object}
     * @example
     * // example
     * action.easing(cc.easeElasticIn(3.0));
     */
    export function easeElasticIn(period?:number):EaseElasticIn;

    /**
     * Ease Elastic Out action. <br />
     * Reference easeOutElastic: <br />
     * {@link http://www.zhihu.com/question/21981571/answer/19925418}
     * @warning This action doesn't use a bijective function. Actions like Sequence might have an unexpected result when used with this action.
     * @class
     * @extends cc.EaseElastic
     *
     * @deprecated since v3.0 <br /> Please use action.easing(cc.easeElasticOut(period))
     *
     * @example
     * //The old usage
     * cc.EaseElasticOut.create(action, period);
     * //The new usage
     * action.easing(cc.easeElasticOut(period));
     */
    export class EaseElasticOut extends EaseElastic {

        /**
         * Create a action. Opposite with the original motion trajectory.
         * @return {cc.EaseElasticIn}
         */
        public reverse():EaseElasticIn;

        /**
         * to copy object with deep copy.
         * returns a clone of action.
         *
         * @returns {cc.EaseElasticOut}
         */
        public clone():EaseElasticOut;
    }

////default ease elastic out object (period = 0.3)
//    cc._easeElasticOutObj = {
//        easing: function (dt) {
//            return (dt === 0 || dt === 1) ? dt : Math.pow(2, -10 * dt) * Math.sin((dt - (0.3 / 4)) * Math.PI * 2 / 0.3) + 1;
//        },
//        reverse:function(){
//            return cc._easeElasticInObj;
//        }
//    };
    /**
     * Creates the action easing object with the period in radians (default is 0.3). <br />
     * Reference easeOutElastic: <br />
     * {@link http://www.zhihu.com/question/21981571/answer/19925418}
     * @function
     * @param {Number} [period=0.3]
     * @return {Object}
     * @example
     * // example
     * action.easing(cc.easeElasticOut(3.0));
     */
    export function easeElasticOut(period?:number):EaseElasticOut;

    /**
     * Ease Elastic InOut action. <br />
     * Reference easeInOutElastic: <br />
     * {@link http://www.zhihu.com/question/21981571/answer/19925418}
     * @warning This action doesn't use a bijective function. Actions like Sequence might have an unexpected result when used with this action.
     * @class
     * @extends cc.EaseElastic
     *
     * @deprecated since v3.0 please use action.easing(cc.easeElasticInOut())
     *
     * @example
     * //The old usage
     * cc.EaseElasticInOut.create(action, period);
     * //The new usage
     * action.easing(cc.easeElasticInOut(period));
     */
    export class EaseElasticInOut extends EaseElastic {
        /**
         * Create a action. Opposite with the original motion trajectory.
         * @return {cc.EaseElasticInOut}
         */
        public reverse():EaseElasticInOut;

        /**
         * to copy object with deep copy.
         * returns a clone of action.
         *
         * @returns {cc.EaseElasticInOut}
         */
        public clone():EaseElasticInOut;
    }

    /**
     * Creates the action easing object with the period in radians (default is 0.3). <br />
     * Reference easeInOutElastic: <br />
     * {@link http://www.zhihu.com/question/21981571/answer/19925418}
     * @function
     * @param {Number} [period=0.3]
     * @return {Object}
     * @example
     * // example
     * action.easing(cc.easeElasticInOut(3.0));
     */
    export function easeElasticInOut(period?:number):EaseElasticInOut;

    /**
     * cc.EaseBounce abstract class.
     *
     * @deprecated since v3.0 Does not recommend the use of the base object.
     *
     * @class
     * @extends cc.ActionEase
     */
    export class EaseBounce extends ActionEase {
        /**
         * @param {Number} time1
         * @return {Number}
         */
        public bounceTime(time1:number):number;

        /**
         * to copy object with deep copy.
         * returns a clone of action.
         *
         * @returns {cc.EaseBounce}
         */
        public clone():EaseBounce;

        /**
         * Create a action. Opposite with the original motion trajectory.
         * @return {cc.EaseBounce}
         */
        public reverse():EaseBounce;
    }

    /**
     * cc.EaseBounceIn action. <br />
     * Eased bounce effect at the beginning.
     * @warning This action doesn't use a bijective function. Actions like Sequence might have an unexpected result when used with this action.
     * @class
     * @extends cc.EaseBounce
     *
     * @deprecated since v3.0 please use action.easing(cc.easeBounceIn())
     *
     * @example
     * //The old usage
     * cc.EaseBounceIn.create(action);
     * //The new usage
     * action.easing(cc.easeBounceIn());
     */
    export class EaseBounceIn extends EaseBounce {
        /**
         * Create a action. Opposite with the original motion trajectory.
         * @return {cc.EaseBounceOut}
         */
        public reverse():EaseBounceOut;

        /**
         * to copy object with deep copy.
         * returns a clone of action.
         *
         * @returns {cc.EaseBounceIn}
         */
        public clone():EaseBounceIn;
    }

    //cc._easeBounceInObj = {
    //    easing: function(dt){
    //        return 1 - cc._bounceTime(1 - dt);
    //    },
    //    reverse: function(){
    //        return cc._easeBounceOutObj;
    //    }
    //};

    /**
     * Creates the action easing object. <br />
     * Eased bounce effect at the beginning.
     * @function
     * @return {Object}
     * @example
     * // example
     * action.easing(cc.easeBounceIn());
     */
    export function easeBounceIn():EaseBounceIn;

    /**
     * cc.EaseBounceOut action. <br />
     * Eased bounce effect at the ending.
     * @warning This action doesn't use a bijective function. Actions like Sequence might have an unexpected result when used with this action.
     * @class
     * @extends cc.EaseBounce
     *
     * @deprecated since v3.0 please use action.easing(cc.easeBounceOut())
     *
     * @example
     * //The old usage
     * cc.EaseBounceOut.create(action);
     * //The new usage
     * action.easing(cc.easeBounceOut());
     */
    export class EaseBounceOut extends EaseBounce {
        /**
         * Create a action. Opposite with the original motion trajectory.
         * @return {cc.EaseBounceIn}
         */
        public reverse():EaseBounceIn;

        /**
         * to copy object with deep copy.
         * returns a clone of action.
         *
         * @returns {cc.EaseBounceOut}
         */
        public clone():EaseBounceOut;
    }

    //cc._easeBounceOutObj = {
    //    easing: function(dt){
    //        return cc._bounceTime(dt);
    //    },
    //    reverse:function () {
    //        return cc._easeBounceInObj;
    //    }
    //};

    /**
     * Creates the action easing object. <br />
     * Eased bounce effect at the ending.
     * @function
     * @return {Object}
     * @example
     * // example
     * action.easing(cc.easeBounceOut());
     */
    export function easeBounceOut():EaseBounceOut;

    /**
     * cc.EaseBounceInOut action. <br />
     * Eased bounce effect at the begining and ending.
     * @warning This action doesn't use a bijective function. Actions like Sequence might have an unexpected result when used with this action.
     * @class
     * @extends cc.EaseBounce
     *
     * @deprecated since v3.0 <br /> Please use acton.easing(cc.easeBounceInOut())
     *
     * @example
     * //The old usage
     * cc.EaseBounceInOut.create(action);
     * //The new usage
     * action.easing(cc.easeBounceInOut());
     */
    export class EaseBounceInOut extends EaseBounce {
        /**
         * to copy object with deep copy.
         * returns a clone of action.
         *
         * @returns {cc.EaseBounceInOut}
         */
        public clone():EaseBounceInOut;

        /**
         * Create a action. Opposite with the original motion trajectory.
         * @return {cc.EaseBounceInOut}
         */
        public reverse():EaseBounceInOut;
    }

    //cc._easeBounceInOutObj = {
    //    easing: function (time1) {
    //        var newT;
    //        if (time1 < 0.5) {
    //            time1 = time1 * 2;
    //            newT = (1 - cc._bounceTime(1 - time1)) * 0.5;
    //        } else {
    //            newT = cc._bounceTime(time1 * 2 - 1) * 0.5 + 0.5;
    //        }
    //        return newT;
    //    },
    //    reverse: function(){
    //        return cc._easeBounceInOutObj;
    //    }
    //};

    /**
     * Creates the action easing object. <br />
     * Eased bounce effect at the begining and ending.
     * @function
     * @return {Object}
     * @example
     * // example
     * action.easing(cc.easeBounceInOut());
     */
    export function easeBounceInOut():EaseBounceInOut;

    /**
     * cc.EaseBackIn action. <br />
     * In the opposite direction to move slowly, and then accelerated to the right direction.
     * @warning This action doesn't use a bijective function. Actions like Sequence might have an unexpected result when used with this action.
     * @class
     * @extends cc.ActionEase
     *
     * @deprecated since v3.0 please use action.easing(cc.easeBackIn())
     *
     * @example
     * //The old usage
     * cc.EaseBackIn.create(action);
     * //The new usage
     * action.easing(cc.easeBackIn());
     */
    export class EaseBackIn extends ActionEase {
        /**
         * Create a action. Opposite with the original motion trajectory.
         * @return {cc.EaseBackOut}
         */
        public reverse():EaseBackOut;

        /**
         * to copy object with deep copy.
         * returns a clone of action.
         *
         * @returns {cc.EaseBackIn}
         */
        public clone():EaseBackIn;
    }

    //cc._easeBackInObj = {
    //    easing: function (time1) {
    //        var overshoot = 1.70158;
    //        return (time1===0 || time1===1) ? time1 : time1 * time1 * ((overshoot + 1) * time1 - overshoot);
    //    },
    //    reverse: function(){
    //        return cc._easeBackOutObj;
    //    }
    //};

    /**
     * Creates the action easing object. <br />
     * In the opposite direction to move slowly, and then accelerated to the right direction.
     * @function
     * @return {Object}
     * @example
     * // example
     * action.easing(cc.easeBackIn());
     */
    export function easeBackIn():EaseBackIn;

    /**
     * cc.EaseBackOut action. <br />
     * Fast moving more than the finish, and then slowly back to the finish.
     * @warning This action doesn't use a bijective function. Actions like Sequence might have an unexpected result when used with this action.
     * @class
     * @extends cc.ActionEase
     *
     * @deprecated since v3.0 please use action.easing(cc.easeBackOut());
     *
     * @example
     * //The old usage
     * cc.EaseBackOut.create(action);
     * //The new usage
     * action.easing(cc.easeBackOut());
     */
    export class EaseBackOut extends ActionEase {
        /**
         * Create a action. Opposite with the original motion trajectory.
         * @return {cc.EaseBackIn}
         */
        public reverse():EaseBackIn;

        /**
         * to copy object with deep copy.
         * returns a clone of action.
         *
         * @returns {cc.EaseBackOut}
         */
        public clone():EaseBackOut;
    }

    //cc._easeBackOutObj = {
    //    easing: function (time1) {
    //        var overshoot = 1.70158;
    //        time1 = time1 - 1;
    //        return time1 * time1 * ((overshoot + 1) * time1 + overshoot) + 1;
    //    },
    //    reverse: function(){
    //        return cc._easeBackInObj;
    //    }
    //};

    /**
     * Creates the action easing object. <br />
     * Fast moving more than the finish, and then slowly back to the finish.
     * @function
     * @return {Object}
     * @example
     * // example
     * action.easing(cc.easeBackOut());
     */
    export function easeBackOut():EaseBackOut;

    /**
     * cc.EaseBackInOut action. <br />
     * Begining of cc.EaseBackIn. Ending of cc.EaseBackOut.
     * @warning This action doesn't use a bijective function. Actions like Sequence might have an unexpected result when used with this action.
     * @class
     * @extends cc.ActionEase
     *
     * @deprecated since v3.0 <br /> Please use action.easing(cc.easeBackInOut())
     *
     * @example
     * //The old usage
     * cc.EaseBackInOut.create(action);
     * //The new usage
     * action.easing(cc.easeBackInOut());
     */
    export class EaseBackInOut extends ActionEase {
        /**
         * to copy object with deep copy.
         * returns a clone of action.
         *
         * @returns {cc.EaseBackInOut}
         */
        public clone():EaseBackInOut;

        /**
         * Create a action. Opposite with the original motion trajectory.
         * @return {cc.EaseBackInOut}
         */
        public reverse():EaseBackInOut;
    }
    
    //cc._easeBackInOutObj = {
    //    easing: function (time1) {
    //        var overshoot = 1.70158 * 1.525;
    //        time1 = time1 * 2;
    //        if (time1 < 1) {
    //            return (time1 * time1 * ((overshoot + 1) * time1 - overshoot)) / 2;
    //        } else {
    //            time1 = time1 - 2;
    //            return (time1 * time1 * ((overshoot + 1) * time1 + overshoot)) / 2 + 1;
    //        }
    //    },
    //    reverse: function(){
    //        return cc._easeBackInOutObj;
    //    }
    //};

    /**
     * Creates the action easing object. <br />
     * Begining of cc.EaseBackIn. Ending of cc.EaseBackOut.
     * @function
     * @return {Object}
     * @example
     * // example
     * action.easing(cc.easeBackInOut());
     */
    export function easeBackInOut():EaseBackInOut;

    /**
     * cc.EaseBezierAction action. <br />
     * Manually set a 4 order Bessel curve. <br />
     * According to the set point, calculate the trajectory.
     * @class
     * @extends cc.ActionEase
     * @param {cc.Action} action
     *
     * @deprecated since v3.0 <br /> Please use action.easing(cc.easeBezierAction())
     *
     * @example
     * //The old usage
     * var action = cc.EaseBezierAction.create(action);
     * action.setBezierParamer(0.5, 0.5, 1.0, 1.0);
     * //The new usage
     * action.easing(cc.easeBezierAction(0.5, 0.5, 1.0, 1.0));
     */
    export class EaseBezierAction extends ActionEase {

        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. <br />
         * Initialization requires the application of Bessel curve of action.
         * @param {cc.Action} action
         */
        public ctor(action:Action):void;
        public ctor():void;

        /**
         * to copy object with deep copy.
         * returns a clone of action.
         *
         * @returns {cc.EaseBezierAction}
         */
        public clone():EaseBezierAction;

        /**
         * Create a action. Opposite with the original motion trajectory.
         * @return {cc.EaseBezierAction}
         */
        public reverse():EaseBezierAction;

        /**
         * Set of 4 reference point
         * @param p0
         * @param p1
         * @param p2
         * @param p3
         */
        public setBezierParamer(p0:number, p1:number, p2:number, p3:number):void;
    }

    /**
     * Creates the action easing object. <br />
     * Into the 4 reference point. <br />
     * To calculate the motion curve.
     * @param {Number} p0 The first bezier parameter
     * @param {Number} p1 The second bezier parameter
     * @param {Number} p2 The third bezier parameter
     * @param {Number} p3 The fourth bezier parameter
     * @returns {Object}
     * @example
     * // example
     * action.easing(cc.easeBezierAction(0.5, 0.5, 1.0, 1.0));
     */
    export function easeBezierAction(p0:number, p1:number, p2:number, p3:number):EaseBezierAction;

    /**
     * cc.EaseQuadraticActionIn action. <br />
     * Reference easeInQuad: <br />
     * {@link http://www.zhihu.com/question/21981571/answer/19925418}
     * @class
     * @extends cc.ActionEase
     *
     * @deprecated since v3.0 <br /> Please use action.easing(cc.easeQuadraticAction())
     *
     * @example
     * //The old usage
     * cc.EaseQuadraticActionIn.create(action);
     * //The new usage
     * action.easing(cc.easeQuadraticActionIn());
     */
    export class EaseQuadraticActionIn extends ActionEase {
        /**
         * to copy object with deep copy.
         * returns a clone of action.
         *
         * @returns {cc.EaseQuadraticActionIn}
         */
        public clone():EaseQuadraticActionIn;

        /**
         * Create a action. Opposite with the original motion trajectory.
         * @return {cc.EaseQuadraticActionIn}
         */
        public reverse():EaseQuadraticActionIn;
    }

    //cc._easeQuadraticActionIn = {
    //    easing: cc.EaseQuadraticActionIn.prototype._updateTime,
    //    reverse: function(){
    //        return cc._easeQuadraticActionIn;
    //    }
    //};

    /**
     * Creates the action easing object. <br />
     * Reference easeInQuad: <br />
     * {@link http://www.zhihu.com/question/21981571/answer/19925418}
     * @returns {Object}
     * @example
     * //example
     * action.easing(cc.easeQuadraticActionIn());
     */
    export function easeQuadraticActionIn():EaseQuadraticActionIn;

    /**
     * cc.EaseQuadraticActionIn action. <br />
     * Reference easeOutQuad: <br />
     * {@link http://www.zhihu.com/question/21981571/answer/19925418}
     * @class
     * @extends cc.ActionEase
     *
     * @deprecated since v3.0 <br /> Please use action.easing(cc.easeQuadraticActionOut())
     *
     * @example
     * //The old usage
     * cc.EaseQuadraticActionOut.create(action);
     * //The new usage
     * action.easing(cc.easeQuadraticActionOut());
     */
    export class EaseQuadraticActionOut extends ActionEase {
        /**
         * to copy object with deep copy.
         * returns a clone of action.
         *
         * @returns {cc.EaseQuadraticActionOut}
         */
        public clone():EaseQuadraticActionOut;

        /**
         * Create a action. Opposite with the original motion trajectory.
         * @return {cc.EaseQuadraticActionOut}
         */
        public reverse():EaseQuadraticActionOut;
    }

    //cc._easeQuadraticActionOut = {
    //    easing: cc.EaseQuadraticActionOut.prototype._updateTime,
    //    reverse: function(){
    //        return cc._easeQuadraticActionOut;
    //    }
    //};

    /**
     * Creates the action easing object. <br />
     * Reference easeOutQuad: <br />
     * {@link http://www.zhihu.com/question/21981571/answer/19925418}
     * @function
     * @returns {Object}
     * @example
     * //example
     * action.easing(cc.easeQuadraticActionOut());
     */
    export function easeQuadraticActionOut():EaseQuadraticActionOut;

    /**
     * cc.EaseQuadraticActionInOut action. <br />
     * Reference easeInOutQuad: <br />
     * {@link http://www.zhihu.com/question/21981571/answer/19925418}
     * @class
     * @extends cc.ActionEase
     *
     * @deprecated since v3.0 <br /> Please use action.easing(cc.easeQuadraticActionInOut())
     *
     * @example
     * //The old usage
     * cc.EaseQuadraticActionInOut.create(action);
     * //The new usage
     * action.easing(cc.easeQuadraticActionInOut());
     */
    export class EaseQuadraticActionInOut extends ActionEase {
        /**
         * to copy object with deep copy.
         * returns a clone of action.
         *
         * @returns {cc.EaseQuadraticActionInOut}
         */
        public clone():EaseQuadraticActionInOut;

        /**
         * Create a action. Opposite with the original motion trajectory.
         * @return {cc.EaseQuadraticActionInOut}
         */
        public reverse():EaseQuadraticActionInOut;
    }

    //cc._easeQuadraticActionInOut = {
    //    easing: cc.EaseQuadraticActionInOut.prototype._updateTime,
    //    reverse: function(){
    //        return cc._easeQuadraticActionInOut;
    //    }
    //};

    /**
     * Creates the action easing object. <br />
     * Reference easeInOutQuad: <br />
     * {@link http://www.zhihu.com/question/21981571/answer/19925418}
     * @function
     * @returns {Object}
     * @example
     * //example
     * action.easing(cc.easeQuadraticActionInOut());
     */
    export function easeQuadraticActionInOut():EaseQuadraticActionInOut;

    /**
     * cc.EaseQuarticActionIn action. <br />
     * Reference easeInQuart: <br />
     * {@link http://www.zhihu.com/question/21981571/answer/19925418}
     * @class
     * @extends cc.ActionEase
     *
     * @deprecated since v3.0 <br /> Please use action.easing(cc.easeQuarticActionIn());
     *
     * @example
     * //The old usage
     * cc.EaseQuarticActionIn.create(action);
     * //The new usage
     * action.easing(cc.easeQuarticActionIn());
     */
    export class EaseQuarticActionIn extends ActionEase {
        /**
         * to copy object with deep copy.
         * returns a clone of action.
         *
         * @returns {cc.EaseQuarticActionIn}
         */
        public clone():EaseQuarticActionIn;

        /**
         * Create a action. Opposite with the original motion trajectory.
         * @return {cc.EaseQuarticActionIn}
         */
        public reverse():EaseQuarticActionIn;
    }

    //cc._easeQuarticActionIn = {
    //    easing: cc.EaseQuarticActionIn.prototype._updateTime,
    //    reverse: function(){
    //        return cc._easeQuarticActionIn;
    //    }
    //};

    /**
     * Creates the action easing object. <br />
     * Reference easeIntQuart: <br />
     * {@link http://www.zhihu.com/question/21981571/answer/19925418}
     * @function
     * @returns {Object}
     * @example
     * //example
     * action.easing(cc.easeQuarticActionIn());
     */
    export function easeQuarticActionIn():EaseQuarticActionIn;

    /**
     * cc.EaseQuarticActionOut action. <br />
     * Reference easeOutQuart: <br />
     * {@link http://www.zhihu.com/question/21981571/answer/19925418}
     * @class
     * @extends cc.ActionEase
     *
     * @deprecated since v3.0 <br /> Please use action.easing(cc.QuarticActionOut());
     *
     * @example
     * //The old usage
     * cc.EaseQuarticActionOut.create(action);
     * //The new usage
     * action.easing(cc.EaseQuarticActionOut());
     */
    export class EaseQuarticActionOut extends ActionEase {
        /**
         * to copy object with deep copy.
         * returns a clone of action.
         *
         * @returns {cc.EaseQuarticActionOut}
         */
        public clone():EaseQuarticActionOut;

        /**
         * Create a action. Opposite with the original motion trajectory.
         * @return {cc.EaseQuarticActionOut}
         */
        public reverse():EaseQuarticActionOut;
    }

    //cc._easeQuarticActionOut = {
    //    easing: cc.EaseQuarticActionOut.prototype._updateTime,
    //    reverse: function(){
    //        return cc._easeQuarticActionOut;
    //    }
    //};

    /**
     * Creates the action easing object. <br />
     * Reference easeOutQuart: <br />
     * {@link http://www.zhihu.com/question/21981571/answer/19925418}
     * @function
     * @returns {Object}
     * @example
     * //example
     * action.easing(cc.QuarticActionOut());
     */
    export function easeQuarticActionOut():EaseQuarticActionOut;

    /**
     * cc.EaseQuarticActionInOut action. <br />
     * Reference easeInOutQuart: <br />
     * {@link http://www.zhihu.com/question/21981571/answer/19925418}
     * @class
     * @extends cc.ActionEase
     *
     * @deprecated since v3.0 <br /> Please use action.easing(cc.easeQuarticActionInOut());
     *
     * @example
     * //The old usage
     * cc.EaseQuarticActionInOut.create(action);
     * //The new usage
     * action.easing(cc.easeQuarticActionInOut());
     */
    export class EaseQuarticActionInOut extends ActionEase {
        /**
         * to copy object with deep copy.
         * returns a clone of action.
         *
         * @returns {cc.EaseQuarticActionInOut}
         */
        public clone():EaseQuarticActionInOut;

        /**
         * Create a action. Opposite with the original motion trajectory.
         * @return {cc.EaseQuarticActionInOut}
         */
        public reverse():EaseQuarticActionInOut;
    }

    //cc._easeQuarticActionInOut = {
    //    easing: cc.EaseQuarticActionInOut.prototype._updateTime,
    //    reverse: function(){
    //        return cc._easeQuarticActionInOut;
    //    }
    //};

    /**
     * Creates the action easing object.  <br />
     * Reference easeInOutQuart: <br />
     * {@link http://www.zhihu.com/question/21981571/answer/19925418}
     * @function
     * @returns {Object}
     */
    export function easeQuarticActionInOut():EaseQuarticActionInOut;

    /**
     * cc.EaseQuinticActionIn action. <br />
     * Reference easeInQuint: <br />
     * {@link http://www.zhihu.com/question/21981571/answer/19925418}
     * @class
     * @extends cc.ActionEase
     *
     * @deprecated since v3.0 <br /> Please use action.easing(cc.easeQuinticActionIn());
     *
     * @example
     * //The old usage
     * cc.EaseQuinticActionIn.create(action);
     * //The new usage
     * action.easing(cc.easeQuinticActionIn());
     */
    export class EaseQuinticActionIn extends ActionEase {
        /**
         * to copy object with deep copy.
         * returns a clone of action.
         *
         * @returns {cc.EaseQuinticActionIn}
         */
        public clone():EaseQuinticActionIn;

        /**
         * Create a action. Opposite with the original motion trajectory.
         * @return {cc.EaseQuinticActionIn}
         */
        public reverse():EaseQuinticActionIn;
    }

    //cc._easeQuinticActionIn = {
    //    easing: cc.EaseQuinticActionIn.prototype._updateTime,
    //    reverse: function(){
    //        return cc._easeQuinticActionIn;
    //    }
    //};

    /**
     * Creates the action easing object. <br />
     * Reference easeInQuint: <br />
     * {@link http://www.zhihu.com/question/21981571/answer/19925418}
     * @function
     * @returns {Object}
     * @example
     * //example
     * action.easing(cc.easeQuinticActionIn());
     */
    export function easeQuinticActionIn():EaseQuinticActionIn;

    /**
     * cc.EaseQuinticActionOut action. <br />
     * Reference easeQuint: <br />
     * {@link http://www.zhihu.com/question/21981571/answer/19925418}
     * @class
     * @extends cc.ActionEase
     *
     * @deprecated since v3.0 <br /> Please use action.easing(cc.easeQuadraticActionOut());
     *
     * @example
     * //The old usage
     * cc.EaseQuinticActionOut.create(action);
     * //The new usage
     * action.easing(cc.easeQuadraticActionOut());
     */
    export class EaseQuinticActionOut extends ActionEase {
        /**
         * to copy object with deep copy.
         * returns a clone of action.
         *
         * @returns {cc.EaseQuinticActionOut}
         */
        public clone():EaseQuinticActionOut;

        /**
         * Create a action. Opposite with the original motion trajectory.
         * @return {cc.EaseQuinticActionOut}
         */
        public reverse():EaseQuinticActionOut;
    }

    //cc._easeQuinticActionOut = {
    //    easing: cc.EaseQuinticActionOut.prototype._updateTime,
    //    reverse: function(){
    //        return cc._easeQuinticActionOut;
    //    }
    //};

    /**
     * Creates the action easing object. <br />
     * Reference easeOutQuint: <br />
     * {@link http://www.zhihu.com/question/21981571/answer/19925418}
     * @function
     * @returns {Object}
     * @example
     * //example
     * action.easing(cc.easeQuadraticActionOut());
     */
    export function easeQuinticActionOut():EaseQuinticActionOut;

    /**
     * cc.EaseQuinticActionInOut action. <br />
     * Reference easeInOutQuint: <br />
     * {@link http://www.zhihu.com/question/21981571/answer/19925418}
     * @class
     * @extends cc.ActionEase
     *
     * @deprecated since v3.0 <br /> Please use action.easing(cc.easeQuinticActionInOut());
     *
     * @example
     * //The old usage
     * cc.EaseQuinticActionInOut.create(action);
     * //The new usage
     * action.easing(cc.easeQuinticActionInOut());
     */
    export class EaseQuinticActionInOut extends ActionEase {
        /**
         * to copy object with deep copy.
         * returns a clone of action.
         *
         * @returns {cc.EaseQuinticActionInOut}
         */
        public clone():EaseQuinticActionInOut;

        /**
         * Create a action. Opposite with the original motion trajectory.
         * @return {cc.EaseQuinticActionInOut}
         */
        public reverse():EaseQuinticActionInOut;
    }

    //cc._easeQuinticActionInOut = {
    //    easing: cc.EaseQuinticActionInOut.prototype._updateTime,
    //    reverse: function(){
    //        return cc._easeQuinticActionInOut;
    //    }
    //};

    /**
     * Creates the action easing object. <br />
     * Reference easeInOutQuint: <br />
     * {@link http://www.zhihu.com/question/21981571/answer/19925418}
     * @function
     * @returns {Object}
     * @example
     * //example
     * action.easing(cc.easeQuinticActionInOut());
     */
    export function easeQuinticActionInOut():EaseQuinticActionInOut;

    /**
     * cc.EaseCircleActionIn action. <br />
     * Reference easeInCirc: <br />
     * {@link http://www.zhihu.com/question/21981571/answer/19925418}
     * @class
     * @extends cc.ActionEase
     *
     * @deprecated since v3.0 <br /> Please use action.easing(cc.easeCircleActionIn());
     *
     * @example
     * //The old usage
     * cc.EaseCircleActionIn.create(action);
     * //The new usage
     * action.easing(cc.easeCircleActionIn());
     */
    export class EaseCircleActionIn extends ActionEase {
        /**
         * to copy object with deep copy.
         * returns a clone of action.
         *
         * @returns {cc.EaseCircleActionIn}
         */
        public clone():EaseCircleActionIn;

        /**
         * Create a action. Opposite with the original motion trajectory.
         * @return {cc.EaseCircleActionIn}
         */
        public reverse():EaseCircleActionIn;
    }

    //cc._easeCircleActionIn = {
    //    easing: cc.EaseCircleActionIn.prototype._updateTime,
    //    reverse: function(){
    //        return cc._easeCircleActionIn;
    //    }
    //};

    /**
     * Creates the action easing object. <br />
     * Reference easeInCirc: <br />
     * {@link http://www.zhihu.com/question/21981571/answer/19925418}
     * @function
     * @returns {Object}
     * @example
     * //example
     * action.easing(cc.easeCircleActionIn());
     */
    export function easeCircleActionIn():EaseCircleActionIn;

    /**
     * cc.EaseCircleActionOut action. <br />
     * Reference easeOutCirc: <br />
     * {@link http://www.zhihu.com/question/21981571/answer/19925418}
     * @class
     * @extends cc.ActionEase
     *
     * @deprecated since v3.0 <br /> Please use action.easing(cc.easeCircleActionOut());
     *
     * @example
     * //The old usage
     * cc.EaseCircleActionOut.create(action);
     * //The new usage
     * action.easing(cc.easeCircleActionOut());
     */
    export class EaseCircleActionOut extends ActionEase {
        /**
         * to copy object with deep copy.
         * returns a clone of action.
         *
         * @returns {cc.EaseCircleActionOut}
         */
        public clone():EaseCircleActionOut;

        /**
         * Create a action. Opposite with the original motion trajectory.
         * @return {cc.EaseCircleActionOut}
         */
        public reverse():EaseCircleActionOut;
    }

    //cc._easeCircleActionOut = {
    //    easing: cc.EaseCircleActionOut.prototype._updateTime,
    //    reverse: function(){
    //        return cc._easeCircleActionOut;
    //    }
    //};

    /**
     * Creates the action easing object. <br />
     * Reference easeOutCirc: <br />
     * {@link http://www.zhihu.com/question/21981571/answer/19925418}
     * @function
     * @returns {Object}
     * @exampple
     * //example
     * actioneasing(cc.easeCircleActionOut());
     */
    export function easeCircleActionOut():EaseCircleActionOut;

    /**
     * cc.EaseCircleActionInOut action. <br />
     * Reference easeInOutCirc: <br />
     * {@link http://www.zhihu.com/question/21981571/answer/19925418}
     * @class
     * @extends cc.ActionEase
     *
     * @deprecated since v3.0 <br /> Please use action.easing(cc.easeCircleActionInOut());
     *
     * @example
     * //The old usage
     * cc.EaseCircleActionInOut.create(action);
     * //The new usage
     * action.easing(cc.easeCircleActionInOut());
     */
    export class EaseCircleActionInOut extends ActionEase {
        /**
         * to copy object with deep copy.
         * returns a clone of action.
         *
         * @returns {cc.EaseCircleActionInOut}
         */
        public clone():EaseCircleActionInOut;

        /**
         * Create a action. Opposite with the original motion trajectory.
         * @return {cc.EaseCircleActionInOut}
         */
        public reverse():EaseCircleActionInOut;
    }

    //cc._easeCircleActionInOut = {
    //    easing: cc.EaseCircleActionInOut.prototype._updateTime,
    //    reverse: function(){
    //        return cc._easeCircleActionInOut;
    //    }
    //};

    /**
     * Creates the action easing object. <br />
     * Reference easeInOutCirc: <br />
     * {@link http://www.zhihu.com/question/21981571/answer/19925418}
     * @function
     * @returns {Object}
     * @example
     * //example
     * action.easing(cc.easeCircleActionInOut());
     */
    export function easeCircleActionInOut():EaseCircleActionInOut;

    /**
     * cc.EaseCubicActionIn action. <br />
     * Reference easeInCubic: <br />
     * {@link http://www.zhihu.com/question/21981571/answer/19925418}
     * @class
     * @extends cc.ActionEase
     *
     * @deprecated since v3.0 <br /> action.easing(cc.easeCubicActionIn());
     *
     * @example
     * //The old usage
     * cc.EaseCubicActionIn.create(action);
     * //The new usage
     * action.easing(cc.easeCubicActionIn());
     */
    export class EaseCubicActionIn extends ActionEase {
        /**
         * to copy object with deep copy.
         * returns a clone of action.
         *
         * @returns {cc.EaseCubicActionIn}
         */
        public clone():EaseCubicActionIn;

        /**
         * Create a action. Opposite with the original motion trajectory.
         * @return {cc.EaseCubicActionIn}
         */
        public reverse():EaseCubicActionIn;
    }

    //cc._easeCubicActionIn = {
    //    easing: cc.EaseCubicActionIn.prototype._updateTime,
    //    reverse: function(){
    //        return cc._easeCubicActionIn;
    //    }
    //};

    /**
     * Creates the action easing object. <br />
     * Reference easeInCubic: <br />
     * {@link http://www.zhihu.com/question/21981571/answer/19925418}
     * @function
     * @returns {Object}
     * @example
     * //example
     * action.easing(cc.easeCubicActionIn());
     */
    export function easeCubicActionIn():EaseCubicActionIn;

    /**
     * cc.EaseCubicActionOut action. <br />
     * Reference easeOutCubic: <br />
     * {@link http://www.zhihu.com/question/21981571/answer/19925418}
     * @class
     * @extends cc.ActionEase
     *
     * @deprecated since v3.0 <br /> Please use action.easing(cc.easeCubicActionOut());
     *
     * @example
     * //The old usage
     * cc.EaseCubicActionOut.create(action);
     * //The new usage
     * action.easing(cc.easeCubicActionOut());
     */
    export class EaseCubicActionOut extends ActionEase {
        /**
         * to copy object with deep copy.
         * returns a clone of action.
         *
         * @returns {cc.EaseCubicActionOut}
         */
        public clone():EaseCubicActionOut;

        /**
         * Create a action. Opposite with the original motion trajectory.
         * @return {cc.EaseCubicActionOut}
         */
        public reverse():EaseCubicActionOut;
    }

    //cc._easeCubicActionOut = {
    //    easing: cc.EaseCubicActionOut.prototype._updateTime,
    //    reverse: function(){
    //        return cc._easeCubicActionOut;
    //    }
    //};

    /**
     * Creates the action easing object. <br />
     * Reference easeOutCubic: <br />
     * {@link http://www.zhihu.com/question/21981571/answer/19925418}
     * @function
     * @returns {Object}
     * @example
     * //example
     * action.easing(cc.easeCubicActionOut());
     */
    export function easeCubicActionOut():EaseCubicActionOut;

    /**
     * cc.EaseCubicActionInOut action. <br />
     * Reference easeInOutCubic: <br />
     * {@link http://www.zhihu.com/question/21981571/answer/19925418}
     * @class
     * @extends cc.ActionEase
     *
     * @deprecated since v3.0 <br /> Please use action.easing(cc.easeCubicActionInOut());
     *
     * @example
     * //The old usage
     * cc.EaseCubicActionInOut.create(action);
     * //The new usage
     * action.easing(cc.easeCubicActionInOut());
     */
    export class EaseCubicActionInOut extends ActionEase {
        /**
         * to copy object with deep copy.
         * returns a clone of action.
         *
         * @returns {cc.EaseCubicActionInOut}
         */
        public clone():EaseCubicActionInOut;

        /**
         * Create a action. Opposite with the original motion trajectory.
         * @return {cc.EaseCubicActionInOut}
         */
        public reverse():EaseCubicActionInOut;
    }

    //cc._easeCubicActionInOut = {
    //    easing: cc.EaseCubicActionInOut.prototype._updateTime,
    //    reverse: function(){
    //        return cc._easeCubicActionInOut;
    //    }
    //};

    /**
     * Creates the action easing object. <br />
     * Reference easeInOutCubic: <br />
     * {@link http://www.zhihu.com/question/21981571/answer/19925418}
     * @function
     * @returns {Object}
     */
    export function easeCubicActionInOut():EaseCubicActionInOut;

    // +--------------------------------------------------------------------------------
    // + File: cocos2d/core/base-nodes/CCActionInstant.js
    // +--------------------------------------------------------------------------------
    /**
     * Instant actions are immediate actions. They don't have a duration like.
     * the CCIntervalAction actions.
     * @class
     * @extends cc.FiniteTimeAction
     */
    export class ActionInstant extends FiniteTimeAction {
        /**
         * returns a reversed action. <br />
         * For example: <br />
         * - The action will be x coordinates of 0 move to 100. <br />
         * - The reversed action will be x of 100 move to 0.
         * - Will be rewritten
         * @returns {cc.Action}
         */
        public reverse():ActionInstant;

        /**
         * to copy object with deep copy.
         * returns a clone of action.
         *
         * @return {cc.FiniteTimeAction}
         */
        public clone():ActionInstant;
    }

    /**
     * Show the node.
     * @class
     * @extends cc.ActionInstant
     */
    export class Show extends ActionInstant {
        /**
         * returns a reversed action. <br />
         * For example: <br />
         * - The action will be x coordinates of 0 move to 100. <br />
         * - The reversed action will be x of 100 move to 0.
         * - Will be rewritten
         * @returns {cc.Hide}
         */
        public reverse():Hide;

        /**
         * to copy object with deep copy.
         * returns a clone of action.
         *
         * @return {cc.FiniteTimeAction}
         */
        public clone():Show;
    }

    /**
     * Show the Node.
     * @function
     * @return {cc.Show}
     * @example
     * // example
     * var showAction = cc.show();
     */
    export function show():Show;

    /**
     * Hide the node.
     * @class
     * @extends cc.ActionInstant
     */
    export class Hide extends ActionInstant {
        /**
         * returns a reversed action. <br />
         * For example: <br />
         * - The action will be x coordinates of 0 move to 100. <br />
         * - The reversed action will be x of 100 move to 0.
         * - Will be rewritten
         * @returns {cc.Show}
         */
        public reverse():Show;

        /**
         * to copy object with deep copy.
         * returns a clone of action.
         *
         * @return {cc.Hide}
         */
        public clone():Hide;
    }

    /**
     * Hide the node.
     * @function
     * @return {cc.Hide}
     * @example
     * // example
     * var hideAction = cc.hide();
     */
    export function hide():Hide;

    /**
     * Toggles the visibility of a node.
     * @class
     * @extends cc.ActionInstant
     */
    export class ToggleVisibility extends ActionInstant {
        /**
         * returns a reversed action.
         * @returns {cc.ToggleVisibility}
         */
        public reverse():ToggleVisibility;

        /**
         * to copy object with deep copy.
         * returns a clone of action.
         *
         * @return {cc.ToggleVisibility}
         */
        public clone():ToggleVisibility;
    }

    /**
     * Toggles the visibility of a node.
     * @function
     * @return {cc.ToggleVisibility}
     * @example
     * // example
     * var toggleVisibilityAction = cc.toggleVisibility();
     */
    export function toggleVisibility():ToggleVisibility;

    /**
     * Delete self in the next frame.
     * @class
     * @extends cc.ActionInstant
     * @param {Boolean} [isNeedCleanUp=true]
     *
     * @example
     * // example
     * var removeSelfAction = new cc.RemoveSelf(false);
     */
    export class RemoveSelf extends ActionInstant {
        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. <br />
         * Create a RemoveSelf object with a flag indicate whether the target should be cleaned up while removing.
         * @param {Boolean} [isNeedCleanUp=true]
         */
        public ctor(isNeedCleanUp?:boolean):void;

        /**
         * Initialization of the node, please do not call this function by yourself, you should pass the parameters to constructor to initialize it .
         * @param isNeedCleanUp
         * @returns {boolean}
         */
        init(isNeedCleanUp?:boolean):boolean;

        /**
         * returns a reversed action.
         */
        public reverse():RemoveSelf;

        /**
         * to copy object with deep copy.
         * returns a clone of action.
         *
         * @return {cc.RemoveSelf}
         */
        public clone():RemoveSelf;
    }

    /**
     * Create a RemoveSelf object with a flag indicate whether the target should be cleaned up while removing.
     *
     * @function
     * @param {Boolean} [isNeedCleanUp=true]
     * @return {cc.RemoveSelf}
     *
     * @example
     * // example
     * var removeSelfAction = cc.removeSelf();
     */
    export function removeSelf(isNeedCleanUp?:boolean):RemoveSelf;

    /**
     * Flips the sprite horizontally.
     * @class
     * @extends cc.ActionInstant
     * @param {Boolean} flip Indicate whether the target should be flipped or not
     *
     * @example
     * var flipXAction = new cc.FlipX(true);
     */
    export class FlipX extends ActionInstant {
        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. <br />
         * Create a FlipX action to flip or unflip the target.
         * @param {Boolean} flip Indicate whether the target should be flipped or not
         */
        public ctor(flip:boolean):void;
        public ctor():void;

        /**
         * initializes the action with a set flipX.
         * @param {Boolean} flip
         * @return {Boolean}
         */
        initWithFlipX(flip:boolean):void;

        /**
         * returns a reversed action.
         * @return {cc.FlipX}
         */
        public reverse():FlipX;

        /**
         * to copy object with deep copy.
         * returns a clone of action.
         *
         * @return {cc.FiniteTimeAction}
         */
        public clone():FlipX;
    }

    /**
     * Create a FlipX action to flip or unflip the target.
     *
     * @function
     * @param {Boolean} flip Indicate whether the target should be flipped or not
     * @return {cc.FlipX}
     * @example
     * var flipXAction = cc.flipX(true);
     */
    export function flipX(flip:boolean):FlipX;

    /**
     * Flips the sprite vertically
     * @class
     * @extends cc.ActionInstant
     * @param {Boolean} flip
     * @example
     * var flipYAction = new cc.FlipY(true);
     */

    export class FlipY extends ActionInstant {
        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. <br />
         * Create a FlipY action to flip or unflip the target.
         *
         * @param {Boolean} flip
         */
        public ctor(flip:boolean):void;
        public ctor():void;

        /**
         * initializes the action with a set flipY.
         * @param {Boolean} flip
         * @return {Boolean}
         */
        public initWithFlipY(flip:boolean):boolean;

        /**
         * returns a reversed action.
         * @return {cc.FlipY}
         */
        public reverse():FlipY;

        /**
         * to copy object with deep copy.
         * returns a clone of action.
         *
         * @return {cc.FlipY}
         */
        public clone():FlipY;
    }

    /**
     * Create a FlipY action to flip or unflip the target.
     *
     * @function
     * @param {Boolean} flip
     * @return {cc.FlipY}
     * @example
     * var flipYAction = cc.flipY(true);
     */
    export function flipY(flip:boolean):FlipY;

    /**
     * Places the node in a certain position
     * @class
     * @extends cc.ActionInstant
     * @param {cc.Point|Number} pos
     * @param {Number} [y]
     * @example
     * var placeAction = new cc.Place(cc.p(200, 200));
     * var placeAction = new cc.Place(200, 200);
     */
    export class Place extends ActionInstant {
        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. <br />
         * Creates a Place action with a position.
         * @param {cc.Point|Number} pos
         * @param {Number} [y]
         */
        public ctor(pos:cc.Point|number, y?:number):void;
        public ctor():void;

        /**
         * Initializes a Place action with a position
         * @param {number} pos
         * @param {number} [y]
         * @return {Boolean}
         */
        public initWithPosition(pos:cc.Point|number, y?:number):boolean;

        /**
         * to copy object with deep copy.
         * returns a clone of action.
         *
         * @return {cc.Place}
         */
        public clone():Place;
    }

    /**
     * Creates a Place action with a position.
     * @function
     * @param {cc.Point|Number} pos
     * @param {Number} [y]
     * @return {cc.Place}
     * @example
     * // example
     * var placeAction = cc.place(cc.p(200, 200));
     * var placeAction = cc.place(200, 200);
     */
    export function place(pos:cc.Point|number, y?:number):Place;

    /**
     * Calls a 'callback'.
     * @class
     * @extends cc.ActionInstant
     * @param {function} selector
     * @param {object|null} [selectorTarget]
     * @param {*|null} [data] data for function, it accepts all data types.
     * @example
     * // example
     * // CallFunc without data
     * var finish = new cc.CallFunc(this.removeSprite, this);
     *
     * // CallFunc with data
     * var finish = new cc.CallFunc(this.removeFromParentAndCleanup, this,  true);
     */
    export class CallFunc extends ActionInstant {
        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. <br />
         * Creates a CallFunc action with the callback.
         * @param {function} selector
         * @param {object|null} [selectorTarget]
         * @param {*|null} [data] data for function, it accepts all data types.
         */
        public ctor(selector:CallFuncCallback, selectorTarget?:any, data?:any):void;
        public ctor():void;

        /**
         * Initializes the action with a function or function and its target
         * @param {function} selector
         * @param {object|Null} selectorTarget
         * @param {*|Null} [data] data for function, it accepts all data types.
         * @return {Boolean}
         */
        public initWithFunction(selector:CallFuncCallback, selectorTarget?:any, data?:any):boolean;

        /**
         * execute the function.
         */
        public execute():void;

        /**
         * Get selectorTarget.
         * @return {object}
         */
        public getTargetCallback():CallFuncCallback;

        /**
         * Set selectorTarget.
         * @param {object} sel
         */
        public setTargetCallback(sel:CallFuncCallback):void;

        /**
         * to copy object with deep copy.
         * returns a clone of action.
         *
         * @return {cc.CallFunc}
         */
        public clone():CallFunc;
    }

    /**
     * Creates the action with the callback
     * @function
     * @param {function} selector
     * @param {object|null} [selectorTarget]
     * @param {*|null} [data] data for function, it accepts all data types.
     * @return {cc.CallFunc}
     * @example
     * // example
     * // CallFunc without data
     * var finish = cc.callFunc(this.removeSprite, this);
     *
     * // CallFunc with data
     * var finish = cc.callFunc(this.removeFromParentAndCleanup, this._grossini,  true);
     */
    export function callFunc(selector:CallFuncCallback, selectorTarget?:any, data?:any):CallFunc;


    // +--------------------------------------------------------------------------------
    // + File: cocos2d/core/base-nodes/CCActionInterval.js
    // +--------------------------------------------------------------------------------
    /**
     * <p> An interval action is an action that takes place within a certain period of time. <br/>
     * It has an start time, and a finish time. The finish time is the parameter<br/>
     * duration plus the start time.</p>
     *
     * <p>These CCActionInterval actions have some interesting properties, like:<br/>
     * - They can run normally (default)  <br/>
     * - They can run reversed with the reverse method   <br/>
     * - They can run with the time altered with the Accelerate, AccelDeccel and Speed actions. </p>
     *
     * <p>For example, you can simulate a Ping Pong effect running the action normally and<br/>
     * then running it again in Reverse mode. </p>
     *
     * @class
     * @extends cc.FiniteTimeAction
     * @param {Number} d duration in seconds
     * @example
     * var actionInterval = new cc.ActionInterval(3);
     */
    export class ActionInterval extends FiniteTimeAction {
        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
         * @param {Number} d duration in seconds
         */
        public ctor(d:number):void;
        public ctor():void;

        /**
         * How many seconds had elapsed since the actions started to run.
         * @return {Number}
         */
        public getElapsed():number;

        /**
         * Initializes the action.
         * @param {Number} d duration in seconds
         * @return {Boolean}
         */
        public initWithDuration(d:number):boolean;

        /**
         * Returns a new clone of the action.
         * @returns {cc.ActionInterval}
         */
        public clone():ActionInterval;

        /**
         * Implementation of ease motion.
         *
         * @example
         * //example
         * action.easeing(cc.easeIn(3.0));
         * @param {Object} easeObj
         * @returns {cc.ActionInterval}
         */
        // TODO: Shouldn't this parameter type be ActionEase instead of any?
        public easing(easeObj:any):ActionInterval;

        /**
         * returns a reversed action. <br />
         * Will be overwrite.
         *
         * @return {null}
         */
        public reverse():ActionInterval;

        /**
         * Set amplitude rate.
         * @warning It should be overridden in subclass.
         * @param {Number} amp
         */
        public setAmplitudeRate(amp:number):void;

        /**
         * Get amplitude rate.
         * @warning It should be overridden in subclass.
         * @return {Number} 0
         */
        public getAmplitudeRate():number;

        /**
         * Changes the speed of an action, making it take longer (speed>1)
         * or less (speed<1) time. <br/>
         * Useful to simulate 'slow motion' or 'fast forward' effect.
         *
         * @param speed
         * @returns {cc.Action}
         */
        public speed(speed:number):ActionInterval;

        /**
         * Get this action speed.
         * @return {Number}
         */
        public getSpeed():number;

        /**
         * Set this action speed.
         * @param {Number} speed
         * @returns {cc.ActionInterval}
         */
        public setSpeed(speed:number):ActionInterval;

        /**
         * Repeats an action a number of times.
         * To repeat an action forever use the CCRepeatForever action.
         * @param times
         * @returns {cc.ActionInterval}
         */
        public repeat(times:number):ActionInterval;

        /**
         * Repeats an action for ever.  <br/>
         * To repeat the an action for a limited number of times use the Repeat action. <br/>
         * @returns {cc.ActionInterval}
         */
        public repeatForever():ActionInterval;
    }

    /**
     * An interval action is an action that takes place within a certain period of time.
     * @function
     * @param {Number} d duration in seconds
     * @return {cc.ActionInterval}
     * @example
     * // example
     * var actionInterval = cc.actionInterval(3);
     */
    export function actionInterval(d:number):ActionInterval;

    /**
     * Runs actions sequentially, one after another.
     * @class
     * @extends cc.ActionInterval
     * @param {Array|cc.FiniteTimeAction} tempArray
     * @example
     * // create sequence with actions
     * var seq = new cc.Sequence(act1, act2);
     *
     * // create sequence with array
     * var seq = new cc.Sequence(actArray);
     */
    export class Sequence extends ActionInterval {
        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. <br />
         * Create an array of sequenceable actions.
         * @param {Array|cc.FiniteTimeAction} tempArray
         */
        public ctor(tempArray:FiniteTimeAction[]):void;
        public ctor():void;

        /**
         * Initializes the action <br/>
         * @param {cc.FiniteTimeAction} actionOne
         * @param {cc.FiniteTimeAction} actionTwo
         * @return {Boolean}
         */
        public initWithTwoActions(actionOne:FiniteTimeAction, actionTwo:FiniteTimeAction):boolean;

        /**
         * returns a new clone of the action
         * @returns {cc.Sequence}
         */
        public clone():Sequence;

        /**
         * Returns a reversed action.
         * @return {cc.Sequence}
         */
        public reverse():Sequence;
    }

    /** helper constructor to create an array of sequenceable actions
     * @function
     * @param {Array|cc.FiniteTimeAction} tempArray
     * @return {cc.Sequence}
     * @example
     * // example
     * // create sequence with actions
     * var seq = cc.sequence(act1, act2);
     *
     * // create sequence with array
     * var seq = cc.sequence(actArray);
     * todo: It should be use new
     */
    export function sequence(tempArray:FiniteTimeAction[]):Sequence;

    /**
     * Repeats an action a number of times.
     * To repeat an action forever use the CCRepeatForever action.
     * @class
     * @extends cc.ActionInterval
     * @param {cc.FiniteTimeAction} action
     * @param {Number} times
     * @example
     * var rep = new cc.Repeat(cc.sequence(jump2, jump1), 5);
     */
    export class Repeat extends ActionInterval {
        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. <br />
         * Creates a Repeat action. Times is an unsigned integer between 1 and pow(2,30).
         * @param {cc.FiniteTimeAction} action
         * @param {Number} times
         */
        public ctor(action:FiniteTimeAction, times:number):void;
        public ctor():void;

        /**
         * @param {cc.FiniteTimeAction} action
         * @param {Number} times
         * @return {Boolean}
         */
        public initWithAction(action:FiniteTimeAction, times:number):boolean;

        /**
         * returns a new clone of the action
         * @returns {cc.Repeat}
         */
        public clone():Repeat;

        /**
         * returns a reversed action.
         * @return {cc.Repeat}
         */
        public reverse():Repeat;

        /**
         * Set inner Action.
         * @param {cc.FiniteTimeAction} action
         */
        public setInnerAction(action:FiniteTimeAction):void;

        /**
         * Get inner Action.
         * @return {cc.FiniteTimeAction}
         */
        public getInnerAction():FiniteTimeAction;
    }

    /**
     * Creates a Repeat action. Times is an unsigned integer between 1 and pow(2,30)
     * @function
     * @param {cc.FiniteTimeAction} action
     * @param {Number} times
     * @return {cc.Repeat}
     * @example
     * // example
     * var rep = cc.repeat(cc.sequence(jump2, jump1), 5);
     */
    export function repeat(action:FiniteTimeAction, times:number):Repeat;

    /**  Repeats an action for ever.  <br/>
     * To repeat the an action for a limited number of times use the Repeat action. <br/>
     * @warning This action can't be Sequenceable because it is not an IntervalAction
     * @class
     * @extends cc.ActionInterval
     * @param {cc.FiniteTimeAction} action
     * @example
     * var rep = new cc.RepeatForever(cc.sequence(jump2, jump1), 5);
     */
    export class RepeatForever extends ActionInterval {
        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. <br />
         * Create a acton which repeat forever.
         * @param {cc.FiniteTimeAction} action
         */
        public ctor(action:FiniteTimeAction):void;
        public ctor():void;

        /**
         * @param {cc.ActionInterval} action
         * @return {Boolean}
         */
        public initWithAction(action:FiniteTimeAction):boolean;

        /**
         * returns a new clone of the action
         * @returns {cc.RepeatForever}
         */
        public clone():RepeatForever;

        /**
         * Returns a reversed action.
         * @return {cc.RepeatForever}
         */
        public reverse():RepeatForever;

        /**
         * Set inner action.
         * @param {cc.ActionInterval} action
         */
        public setInnerAction(action:ActionInterval):void;

        /**
         * Get inner action.
         * @return {cc.ActionInterval}
         */
        public getInnerAction():ActionInterval;
    }

    /**
     * Create a acton which repeat forever
     * @function
     * @param {cc.FiniteTimeAction} action
     * @return {cc.RepeatForever}
     * @example
     * // example
     * var repeat = cc.repeatForever(cc.rotateBy(1.0, 360));
     */
    export function repeatForever(action:FiniteTimeAction):RepeatForever;

    /** Spawn a new action immediately
     * @class
     * @extends cc.ActionInterval
     */
    export class Spawn extends ActionInterval {
        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
         * @param {Array|cc.FiniteTimeAction} tempArray
         */
        public ctor(tempArray:FiniteTimeAction[]):void;
        public ctor():void;

        /** initializes the Spawn action with the 2 actions to spawn
         * @param {cc.FiniteTimeAction} action1
         * @param {cc.FiniteTimeAction} action2
         * @return {Boolean}
         */
        public initWithTwoActions(action1:FiniteTimeAction, action2:FiniteTimeAction):boolean;

        /**
         * returns a new clone of the action
         * @returns {cc.Spawn}
         */
        public clone():Spawn;

        /**
         * Returns a reversed action.
         * @return {cc.Spawn}
         */
        public reverse():Spawn;
    }

    /**
     * Create a spawn action which runs several actions in parallel.
     * @function
     * @param {Array|cc.FiniteTimeAction}tempArray
     * @return {cc.FiniteTimeAction}
     * @example
     * // example
     * var action = cc.spawn(cc.jumpBy(2, cc.p(300, 0), 50, 4), cc.rotateBy(2, 720));
     * todo:It should be the direct use new
     */
    export function spawn(tempArray:FiniteTimeAction[]):FiniteTimeAction;

    /**
     * Rotates a cc.Node object to a certain angle by modifying it's.
     * rotation attribute. <br/>
     * The direction will be decided by the shortest angle.
     * @class
     * @extends cc.ActionInterval
     * @param {Number} duration duration in seconds
     * @param {Number} deltaAngleX deltaAngleX in degrees.
     * @param {Number} [deltaAngleY] deltaAngleY in degrees.
     * @example
     * var rotateTo = new cc.RotateTo(2, 61.0);
     */
    export class RotateTo extends ActionInterval {
        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. <br />
         * Creates a RotateTo action with x and y rotation angles.
         * @param {Number} duration duration in seconds
         * @param {Number} deltaAngleX deltaAngleX in degrees.
         * @param {Number} [deltaAngleY] deltaAngleY in degrees.
         */
        public ctor(duration:number, deltaAngleX:number, deltaAngleY:number):void;
        public ctor():void;

        /**
         * Initializes the action.
         * @param {Number} duration
         * @param {Number} deltaAngleX
         * @param {Number} deltaAngleY
         * @return {Boolean}
         */
        public initWithDuration(duration:number, deltaAngleX:number, deltaAngleY:number):boolean;
        public initWithDuration(duration:number):boolean;

        /**
         * returns a new clone of the action
         * @returns {cc.RotateTo}
         */
        public clone():RotateTo;

        /**
         * RotateTo reverse not implemented.
         * Will be overridden.
         */
        public reverse():RotateTo;
    }

    /**
     * Creates a RotateTo action with separate rotation angles.
     * To specify the angle of rotation.
     * @function
     * @param {Number} duration duration in seconds
     * @param {Number} deltaAngleX deltaAngleX in degrees.
     * @param {Number} [deltaAngleY] deltaAngleY in degrees.
     * @return {cc.RotateTo}
     * @example
     * // example
     * var rotateTo = cc.rotateTo(2, 61.0);
     */
    export function rotateTo(duration:number, deltaAngleX:number, deltaAngleY?:number):RotateTo;

    /**
     * Rotates a cc.Node object clockwise a number of degrees by modifying it's rotation attribute.
     * Relative to its properties to modify.
     * @class
     * @extends  cc.ActionInterval
     * @param {Number} duration duration in seconds
     * @param {Number} deltaAngleX deltaAngleX in degrees
     * @param {Number} [deltaAngleY] deltaAngleY in degrees
     * @example
     * var actionBy = new cc.RotateBy(2, 360);
     */
    export class RotateBy extends ActionInterval {
        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
         * @param {Number} duration duration in seconds
         * @param {Number} deltaAngleX deltaAngleX in degrees
         * @param {Number} [deltaAngleY] deltaAngleY in degrees
         */
        public ctor(duration:number, deltaAngleX:number, deltaAngleY:number):void;
        public ctor():void;

        /**
         * Initializes the action.
         * @param {Number} duration duration in seconds
         * @param {Number} deltaAngleX deltaAngleX in degrees
         * @param {Number} [deltaAngleY=] deltaAngleY in degrees
         * @return {Boolean}
         */
        public initWithDuration(duration:number, deltaAngleX:number, deltaAngleY:number):boolean;
        public initWithDuration(duration:number):boolean;

        /**
         * returns a new clone of the action
         * @returns {cc.RotateBy}
         */
        public clone():RotateBy;

        /**
         * Returns a reversed action.
         * @return {cc.RotateBy}
         */
        public reverse():RotateBy;
    }

    /**
     * Rotates a cc.Node object clockwise a number of degrees by modifying it's rotation attribute.
     * Relative to its properties to modify.
     * @function
     * @param {Number} duration duration in seconds
     * @param {Number} deltaAngleX deltaAngleX in degrees
     * @param {Number} [deltaAngleY] deltaAngleY in degrees
     * @return {cc.RotateBy}
     * @example
     * // example
     * var actionBy = cc.rotateBy(2, 360);
     */
    export function rotateBy(duration:number, deltaAngleX:number, deltaAngleY:number):RotateBy;

    /**
     * <p>
     *     Moves a CCNode object x,y pixels by modifying it's position attribute.                                  <br/>
     *     x and y are relative to the position of the object.                                                     <br/>
     *     Several CCMoveBy actions can be concurrently called, and the resulting                                  <br/>
     *     movement will be the sum of individual movements.
     * </p>
     * @class
     * @extends cc.ActionInterval
     * @param {Number} duration duration in seconds
     * @param {cc.Point|Number} deltaPos
     * @param {Number} [deltaY]
     * @example
     * var actionTo = cc.moveBy(2, cc.p(windowSize.width - 40, windowSize.height - 40));
     */
    export class MoveBy extends ActionInterval {
        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
         * @param {Number} duration duration in seconds
         * @param {cc.Point|Number} deltaPos
         * @param {Number} [deltaY]
         */
        public ctor(duration:number, deltaPos:number|cc.Point, deltaY?:number):void;
        public ctor():void;

        /**
         * Initializes the action.
         * @param {Number} duration duration in seconds
         * @param {cc.Point} position
         * @param {Number} [y]
         * @return {Boolean}
         */
        public initWithDuration(duration:number, position:number|cc.Point, y?:number):boolean;
        public initWithDuration(duration:number):boolean;

        /**
         * returns a new clone of the action
         * @returns {cc.MoveBy}
         */
        public clone():MoveBy;

        /**
         * MoveTo reverse is not implemented
         * @return {cc.MoveBy}
         */
        public reverse():MoveBy;
    }

    /**
     * Create the action.
     * Relative to its coordinate moves a certain distance.
     * @function
     * @param {Number} duration duration in seconds
     * @param {cc.Point|Number} deltaPos
     * @param {Number} deltaY
     * @return {cc.MoveBy}
     * @example
     * // example
     * var actionTo = cc.moveBy(2, cc.p(windowSize.width - 40, windowSize.height - 40));
     */
    export function moveBy(duration:number, deltaPos:number|cc.Point, deltaY?:number):MoveBy;

    /**
     * Moves a CCNode object to the position x,y. x and y are absolute coordinates by modifying it's position attribute. <br/>
     * Several CCMoveTo actions can be concurrently called, and the resulting                                            <br/>
     * movement will be the sum of individual movements.
     * @class
     * @extends cc.MoveBy
     * @param {Number} duration duration in seconds
     * @param {cc.Point|Number} position
     * @param {Number} y
     * @example
     * var actionBy = new cc.MoveTo(2, cc.p(80, 80));
     */
    export class MoveTo extends MoveBy {
        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
         * @param {Number} duration duration in seconds
         * @param {cc.Point|Number} position
         * @param {Number} y
         */
        public ctor(duration:number, position:number|cc.Point, y:number):void;
        public ctor():void;

        /**
         * Initializes the action.
         * @param {Number} duration  duration in seconds
         * @param {cc.Point} position
         * @param {Number} y
         * @return {Boolean}
         */
        public initWithDuration(duration:number, position:number|cc.Point, y:number):boolean;
        public initWithDuration(duration:number):boolean;

        /**
         * returns a new clone of the action
         * @returns {cc.MoveTo}
         */
        public clone():MoveTo;
    }

    /**
     * Create new action.
     * Moving to the specified coordinates.
     * @function
     * @param {Number} duration duration in seconds
     * @param {cc.Point} position
     * @param {Number} y
     * @return {cc.MoveBy}
     * @example
     * // example
     * var actionBy = cc.moveTo(2, cc.p(80, 80));
     */
    export function moveTo(duration:number, position:number|cc.Point, y?:number):MoveTo;

    /**
     * Skews a cc.Node object to given angles by modifying it's skewX and skewY attributes
     * @class
     * @extends cc.ActionInterval
     * @param {Number} t time in seconds
     * @param {Number} sx
     * @param {Number} sy
     * @example
     * var actionTo = new cc.SkewTo(2, 37.2, -37.2);
     */
    export class SkewTo extends ActionInterval {
        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
         * @param {Number} t time in seconds
         * @param {Number} sx
         * @param {Number} sy
         */
        public ctor(t:number, sx:number, sy:number):void;
        public ctor():void;

        /**
         * Initializes the action.
         * @param {Number} t time in seconds
         * @param {Number} sx
         * @param {Number} sy
         * @return {Boolean}
         */
        public initWithDuration(t:number, sx:number, sy:number):boolean;
        public initWithDuration(duration:number):boolean;

        /**
         * returns a new clone of the action
         * @returns {cc.SkewTo}
         */
        public clone():SkewTo;

    }

    /**
     * Create new action.
     * Skews a cc.Node object to given angles by modifying it's skewX and skewY attributes.
     * Changes to the specified value.
     * @function
     * @param {Number} t time in seconds
     * @param {Number} sx
     * @param {Number} sy
     * @return {cc.SkewTo}
     * @example
     * // example
     * var actionTo = cc.skewTo(2, 37.2, -37.2);
     */
    export function skewTo(t:number, sx:number, sy:number):SkewTo;

    /**
     * Skews a cc.Node object by skewX and skewY degrees.
     * Relative to its attribute modification.
     * @class
     * @extends cc.SkewTo
     * @param {Number} t time in seconds
     * @param {Number} sx  skew in degrees for X axis
     * @param {Number} sy  skew in degrees for Y axis
     */
    export class SkewBy extends SkewTo {
        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
         * @param {Number} t time in seconds
         * @param {Number} sx  skew in degrees for X axis
         * @param {Number} sy  skew in degrees for Y axis
         */
        public ctor(t:number, sx:number, sy:number):void;
        public ctor():void;

        /**
         * Initializes the action.
         * @param {Number} t time in seconds
         * @param {Number} sx  skew in degrees for X axis
         * @param {Number} sy  skew in degrees for Y axis
         * @return {Boolean}
         */
        public initWithDuration(t:number, sx:number, sy:number):boolean;
        public initWithDuration(duration:number):boolean;

        /**
         * returns a new clone of the action
         * @returns {cc.SkewBy}
         */
        public clone():SkewBy;

        /**
         * Returns a reversed action.
         * @return {cc.SkewBy}
         */
        public reverse():SkewBy;
    }

    /**
     * Skews a cc.Node object by skewX and skewY degrees. <br />
     * Relative to its attribute modification.
     * @function
     * @param {Number} t time in seconds
     * @param {Number} sx sx skew in degrees for X axis
     * @param {Number} sy sy skew in degrees for Y axis
     * @return {cc.SkewBy}
     * @example
     * // example
     * var actionBy = cc.skewBy(2, 0, -90);
     */
    export function skewBy(t:number, sx:number, sy:number):SkewBy;

    /**
     * Moves a cc.Node object simulating a parabolic jump movement by modifying it's position attribute.
     * Relative to its movement.
     * @class
     * @extends cc.ActionInterval
     * @param {Number} duration
     * @param {cc.Point|Number} position
     * @param {Number} [y]
     * @param {Number} height
     * @param {Number} jumps
     * @example
     * var actionBy = new cc.JumpBy(2, cc.p(300, 0), 50, 4);
     * var actionBy = new cc.JumpBy(2, 300, 0, 50, 4);
     */
    export class JumpBy extends ActionInterval {
        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
         * @param {Number} duration
         * @param {cc.Point|Number} position
         * @param {Number} [y]
         * @param {Number} height
         * @param {Number} jumps
         */
        public ctor(duration:number, position:number|cc.Point, y?:number, height?:number, jumps?:number):void;
        public ctor():void;

        /**
         * Initializes the action.
         * @param {Number} duration
         * @param {cc.Point|Number} position
         * @param {Number} [y]
         * @param {Number} height
         * @param {Number} jumps
         * @return {Boolean}
         * @example
         * actionBy.initWithDuration(2, cc.p(300, 0), 50, 4);
         * actionBy.initWithDuration(2, 300, 0, 50, 4);
         */
        public initWithDuration(duration:number,
                                position:number|cc.Point,
                                y?:number,
                                height?:number,
                                jumps?:number):boolean;
        public initWithDuration(duration:number):boolean;

        /**
         * returns a new clone of the action
         * @returns {cc.JumpBy}
         */
        public clone():JumpBy;


        /**
         * Returns a reversed action.
         * @return {cc.JumpBy}
         */
        public reverse():JumpBy;
    }

    /**
     * Moves a cc.Node object simulating a parabolic jump movement by modifying it's position attribute.
     * Relative to its movement.
     * @function
     * @param {Number} duration
     * @param {cc.Point|Number} position
     * @param {Number} [y]
     * @param {Number} height
     * @param {Number} jumps
     * @return {cc.JumpBy}
     * @example
     * // example
     * var actionBy = cc.jumpBy(2, cc.p(300, 0), 50, 4);
     * var actionBy = cc.jumpBy(2, 300, 0, 50, 4);
     */
    export function jumpBy(duration:number, position:number|cc.Point, y?:number, height?:number, jumps?:number):JumpBy;

    /**
     * Moves a cc.Node object to a parabolic position simulating a jump movement by modifying it's position attribute. <br />
     * Jump to the specified location.
     * @class
     * @extends cc.JumpBy
     * @param {Number} duration
     * @param {cc.Point|Number} position
     * @param {Number} [y]
     * @param {Number} height
     * @param {Number} jumps
     * @example
     * var actionTo = new cc.JumpTo(2, cc.p(300, 0), 50, 4);
     * var actionTo = new cc.JumpTo(2, 300, 0, 50, 4);
     */
    export class JumpTo extends JumpBy {
        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
         * @param {Number} duration
         * @param {cc.Point|Number} position
         * @param {Number} [y]
         * @param {Number} height
         * @param {Number} jumps
         */
        public ctor(duration:number, position:number|cc.Point, y?:number, height?:number, jumps?:number):void;
        public ctor():void;

        /**
         * Initializes the action.
         * @param {Number} duration
         * @param {cc.Point|Number} position
         * @param {Number} [y]
         * @param {Number} height
         * @param {Number} jumps
         * @return {Boolean}
         * @example
         * actionTo.initWithDuration(2, cc.p(300, 0), 50, 4);
         * actionTo.initWithDuration(2, 300, 0, 50, 4);
         */
        public initWithDuration(duration:number,
                                position:number|cc.Point,
                                y?:number,
                                height?:number,
                                jumps?:number):boolean;
        public initWithDuration(duration:number):boolean;

        /**
         * returns a new clone of the action
         * @returns {cc.JumpTo}
         */
        public clone():JumpTo;
    }

    /**
     * Moves a cc.Node object to a parabolic position simulating a jump movement by modifying it's position attribute. <br />
     * Jump to the specified location.
     * @function
     * @param {Number} duration
     * @param {cc.Point|Number} position
     * @param {Number} [y]
     * @param {Number} height
     * @param {Number} jumps
     * @return {cc.JumpTo}
     * @example
     * // example
     * var actionTo = cc.jumpTo(2, cc.p(300, 300), 50, 4);
     * var actionTo = cc.jumpTo(2, 300, 300, 50, 4);
     */
    export function jumpTo(duration:number, position:number|cc.Point, y?:number, height?:number, jumps?:number):JumpTo;
    
    /**
     * @function
     * @param {Number} a
     * @param {Number} b
     * @param {Number} c
     * @param {Number} d
     * @param {Number} t
     * @return {Number}
     */
    export function bezierAt(a:number, b:number, c:number, d:number, t:number):number;

    /** An action that moves the target with a cubic Bezier curve by a certain distance.
     * Relative to its movement.
     * @class
     * @extends cc.ActionInterval
     * @param {Number} t time in seconds
     * @param {Array} c Array of points
     * @example
     * var bezier = [cc.p(0, windowSize.height / 2), cc.p(300, -windowSize.height / 2), cc.p(300, 100)];
     * var bezierForward = new cc.BezierBy(3, bezier);
     */
    export class BezierBy extends ActionInterval {
        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
         * @param {Number} duration time in seconds
         * @param {Array} c Array of points
         */
        public ctor(duration:number, c:cc.Point[]):void;
        public ctor():void;

        /**
         * Initializes the action.
         * @param {Number} duration time in seconds
         * @param {Array} c Array of points
         * @return {Boolean}
         */
        public initWithDuration(duration:number, c:cc.Point[]):boolean;
        public initWithDuration(duration:number):boolean;

        /**
         * returns a new clone of the action
         * @returns {cc.BezierBy}
         */
        public clone():BezierBy;

        /**
         * Returns a reversed action.
         * @return {cc.BezierBy}
         */
        public reverse():BezierBy;
    }

    /**
     * An action that moves the target with a cubic Bezier curve by a certain distance.
     * Relative to its movement.
     * @function
     * @param {Number} duration time in seconds
     * @param {Array} c Array of points
     * @return {cc.BezierBy}
     * @example
     * // example
     * var bezier = [cc.p(0, windowSize.height / 2), cc.p(300, -windowSize.height / 2), cc.p(300, 100)];
     * var bezierForward = cc.bezierBy(3, bezier);
     */
    export function bezierBy(duration:number, c:cc.Point[]):BezierBy;

    /** An action that moves the target with a cubic Bezier curve to a destination point.
     * @class
     * @extends cc.BezierBy
     * @param {Number} t
     * @param {Array} c array of points
     * @example
     * var bezier = [cc.p(0, windowSize.height / 2), cc.p(300, -windowSize.height / 2), cc.p(300, 100)];
     * var bezierTo = new cc.BezierTo(2, bezier);
     */
    export class BezierTo extends BezierBy {
        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
         * @param {Number} duration
         * @param {Array} c array of points
         * var bezierTo = new cc.BezierTo(2, bezier);
         */
        public ctor(duration:number, c:cc.Point[]):void;
        public ctor():void;

        /**
         * Initializes the action.
         * @param {Number} duration time in seconds
         * @param {Array} c Array of points
         * @return {Boolean}
         */
        public initWithDuration(duration:number, c:cc.Point[]):boolean;
        public initWithDuration(duration:number):boolean;

        /**
         * returns a new clone of the action
         * @returns {cc.BezierTo}
         */
        public clone():BezierTo;
    }

    /**
     * An action that moves the target with a cubic Bezier curve to a destination point.
     * @function
     * @param {Number} duration
     * @param {Array} c array of points
     * @return {cc.BezierTo}
     * @example
     * // example
     * var bezier = [cc.p(0, windowSize.height / 2), cc.p(300, -windowSize.height / 2), cc.p(300, 100)];
     * var bezierTo = cc.bezierTo(2, bezier);
     */
    export function bezierTo(duration:number, c:cc.Point[]):BezierTo;

    /** Scales a cc.Node object to a zoom factor by modifying it's scale attribute.
     * @warning This action doesn't support "reverse"
     * @class
     * @extends cc.ActionInterval
     * @param {Number} duration
     * @param {Number} sx  scale parameter in X
     * @param {Number} [sy] scale parameter in Y, if Null equal to sx
     * @example
     * // It scales to 0.5 in both X and Y.
     * var actionTo = new cc.ScaleTo(2, 0.5);
     *
     * // It scales to 0.5 in x and 2 in Y
     * var actionTo = new cc.ScaleTo(2, 0.5, 2);
     */
    export class ScaleTo extends ActionInterval {
        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
         * @param {Number} duration
         * @param {Number} sx  scale parameter in X
         * @param {Number} [sy] scale parameter in Y, if Null equal to sx
         */
        public ctor(duration:number, sx:number, sy?:number):void;
        public ctor():void;

        /**
         * Initializes the action.
         * @param {Number} duration
         * @param {Number} sx
         * @param {Number} [sy=]
         * @return {Boolean}
         */
        public initWithDuration(duration:number, sx:number, sy?:number):boolean;
        public initWithDuration(duration:number):boolean;

        /**
         * returns a new clone of the action
         * @returns {cc.ScaleTo}
         */
        public clone():ScaleTo;
    }

    /**
     * Scales a cc.Node object to a zoom factor by modifying it's scale attribute.
     * @function
     * @param {Number} duration
     * @param {Number} sx  scale parameter in X
     * @param {Number} [sy] scale parameter in Y, if Null equal to sx
     * @return {cc.ScaleTo}
     * @example
     * // example
     * // It scales to 0.5 in both X and Y.
     * var actionTo = cc.scaleTo(2, 0.5);
     *
     * // It scales to 0.5 in x and 2 in Y
     * var actionTo = cc.scaleTo(2, 0.5, 2);
     */
    export function scaleTo(duration:number, sx:number, sy?:number):ScaleTo;

    /** Scales a cc.Node object a zoom factor by modifying it's scale attribute.
     * Relative to its changes.
     * @class
     * @extends cc.ScaleTo
     */
    export class ScaleBy extends ScaleTo {
        /**
         * Returns a reversed action.
         * @return {cc.ScaleBy}
         */
        public reverse():ScaleBy;

        /**
         * returns a new clone of the action
         * @returns {cc.ScaleBy}
         */
        public clone():ScaleBy;
    }

    /**
     * Scales a cc.Node object a zoom factor by modifying it's scale attribute.
     * Relative to its changes.
     * @function
     * @param {Number} duration duration in seconds
     * @param {Number} sx sx  scale parameter in X
     * @param {Number|Null} [sy=] sy scale parameter in Y, if Null equal to sx
     * @return {cc.ScaleBy}
     * @example
     * // example without sy, it scales by 2 both in X and Y
     * var actionBy = cc.scaleBy(2, 2);
     *
     * //example with sy, it scales by 0.25 in X and 4.5 in Y
     * var actionBy2 = cc.scaleBy(2, 0.25, 4.5);
     */
    export function scaleBy(duration:number, sx:number, sy?:number):ScaleBy;

    /** Blinks a cc.Node object by modifying it's visible attribute
     * @class
     * @extends cc.ActionInterval
     * @param {Number} duration  duration in seconds
     * @param {Number} blinks  blinks in times
     * @example
     * var action = new cc.Blink(2, 10);
     */
    export class Blink extends ActionInterval {
        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
         * @param {Number} duration  duration in seconds
         * @param {Number} blinks  blinks in times
         */
        public ctor(duration:number, blinks:number):void;
        public ctor():void;

        /**
         * Initializes the action.
         * @param {Number} duration duration in seconds
         * @param {Number} blinks blinks in times
         * @return {Boolean}
         */
        public initWithDuration(duration:number, blinks:number):boolean;
        public initWithDuration(duration:number):boolean;

        /**
         * returns a new clone of the action
         * @returns {cc.Blink}
         */
        public clone():Blink;

        /**
         * Returns a reversed action.
         * @return {cc.Blink}
         */
        public reverse():Blink;
    }

    /**
     * Blinks a cc.Node object by modifying it's visible attribute.
     * @function
     * @param {Number} duration  duration in seconds
     * @param blinks blinks in times
     * @return {cc.Blink}
     * @example
     * // example
     * var action = cc.blink(2, 10);
     */
    export function blink(duration:number, blinks:number):Blink;

    /** Fades an object that implements the cc.RGBAProtocol protocol. It modifies the opacity from the current value to a custom one.
     * @warning This action doesn't support "reverse"
     * @class
     * @extends cc.ActionInterval
     * @param {Number} duration
     * @param {Number} opacity 0-255, 0 is transparent
     * @example
     * var action = new cc.FadeTo(1.0, 0);
     */
    export class FadeTo extends ActionInterval {
        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
         * @param {Number} duration
         * @param {Number} opacity 0-255, 0 is transparent
         */
        public ctor(duration:number, opacity:number):void;
        public ctor():void;

        /**
         * Initializes the action.
         * @param {Number} duration  duration in seconds
         * @param {Number} opacity
         * @return {Boolean}
         */
        public initWithDuration(duration:number, opacity:number):boolean;
        public initWithDuration(duration:number):boolean;

        /**
         * returns a new clone of the action
         * @returns {cc.FadeTo}
         */
        public clone():FadeTo;
    }

    /**
     * Fades an object that implements the cc.RGBAProtocol protocol. It modifies the opacity from the current value to a custom one.
     * @function
     * @param {Number} duration
     * @param {Number} opacity 0-255, 0 is transparent
     * @return {cc.FadeTo}
     * @example
     * // example
     * var action = cc.fadeTo(1.0, 0);
     */
    export function fadeTo(duration:number, opacity:number):FadeTo;

    /** Fades In an object that implements the cc.RGBAProtocol protocol. It modifies the opacity from 0 to 255.<br/>
     * The "reverse" of this action is FadeOut
     * @class
     * @extends cc.FadeTo
     * @param {Number} duration duration in seconds
     */
    export class FadeIn extends FadeTo {
        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
         * @param {Number} duration duration in seconds
         */
        public ctor(duration:number):void;
        public ctor():void;

        /**
         * Returns a reversed action.
         * @return {cc.FadeOut}
         */
        public reverse():FadeOut;

        /**
         * returns a new clone of the action
         * @returns {cc.FadeIn}
         */
        public clone():FadeIn;
    }

    /**
     * Fades In an object that implements the cc.RGBAProtocol protocol. It modifies the opacity from 0 to 255.
     * @function
     * @param {Number} duration duration in seconds
     * @return {cc.FadeIn}
     * @example
     * //example
     * var action = cc.fadeIn(1.0);
     */
    export function fadeIn(duration:number):FadeIn;

    /** Fades Out an object that implements the cc.RGBAProtocol protocol. It modifies the opacity from 255 to 0.
     * The "reverse" of this action is FadeIn
     * @class
     * @extends cc.FadeTo
     * @param {Number} duration duration in seconds
     */
    export class FadeOut extends FadeTo {
        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
         * @param {Number} duration duration in seconds
         */
        public ctor(duration:number):void;
        public ctor():void;

        /**
         * Returns a reversed action.
         * @return {cc.FadeIn}
         */
        public reverse():FadeIn;

        /**
         * returns a new clone of the action
         * @returns {cc.FadeOut}
         */
        public clone():FadeOut;
    }

    /**
     * Fades Out an object that implements the cc.RGBAProtocol protocol. It modifies the opacity from 255 to 0.
     * @function
     * @param {Number} duration  duration in seconds
     * @return {cc.FadeOut}
     * @example
     * // example
     * var action = cc.fadeOut(1.0);
     */
    export function fadeOut(duration:number):FadeOut;

    /** Tints a cc.Node that implements the cc.NodeRGB protocol from current tint to a custom one.
     * @warning This action doesn't support "reverse"
     * @class
     * @extends cc.ActionInterval
     * @param {Number} duration
     * @param {Number} red 0-255
     * @param {Number} green  0-255
     * @param {Number} blue 0-255
     * @example
     * var action = new cc.TintTo(2, 255, 0, 255);
     */
    export class TintTo extends ActionInterval {
        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
         * @param {Number} duration
         * @param {Number} red 0-255
         * @param {Number} green  0-255
         * @param {Number} blue 0-255
         */
        public ctor(duration:number, red:number, green:number, blue:number):void;
        public ctor():void;

        /**
         * Initializes the action.
         * @param {Number} duration
         * @param {Number} red 0-255
         * @param {Number} green 0-255
         * @param {Number} blue 0-255
         * @return {Boolean}
         */
        public initWithDuration(duration:number, red:number, green:number, blue:number):boolean;
        public initWithDuration(duration:number):boolean;

        /**
         * returns a new clone of the action
         * @returns {cc.TintTo}
         */
        public clone():TintTo;
    }

    /**
     * Tints a cc.Node that implements the cc.NodeRGB protocol from current tint to a custom one.
     * @function
     * @param {Number} duration
     * @param {Number} red 0-255
     * @param {Number} green  0-255
     * @param {Number} blue 0-255
     * @return {cc.TintTo}
     * @example
     * // example
     * var action = cc.tintTo(2, 255, 0, 255);
     */
    export function tintTo(duration:number, red:number, green:number, blue:number):TintTo;

    /**  Tints a cc.Node that implements the cc.NodeRGB protocol from current tint to a custom one.
     * Relative to their own color change.
     * @class
     * @extends cc.ActionInterval
     * @param {Number} duration  duration in seconds
     * @param {Number} deltaRed
     * @param {Number} deltaGreen
     * @param {Number} deltaBlue
     * @example
     * var action = new cc.TintBy(2, -127, -255, -127);
     */
    export class TintBy extends ActionInterval {
        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
         * @param {Number} duration  duration in seconds
         * @param {Number} deltaRed
         * @param {Number} deltaGreen
         * @param {Number} deltaBlue
         */
        public ctor(duration:number, deltaRed:number, deltaGreen:number, deltaBlue:number):void;
        public ctor():void;

        /**
         * Initializes the action.
         * @param {Number} duration
         * @param {Number} deltaRed 0-255
         * @param {Number} deltaGreen 0-255
         * @param {Number} deltaBlue 0-255
         * @return {Boolean}
         */
        public initWithDuration(duration:number, deltaRed:number, deltaGreen:number, deltaBlue:number):boolean;
        public initWithDuration(duration:number):boolean;

        /**
         * returns a new clone of the action
         * @returns {cc.TintBy}
         */
        public clone():TintBy;

        /**
         * Returns a reversed action.
         * @return {cc.TintBy}
         */
        public reverse():TintBy;
    }

    /**
     * Tints a cc.Node that implements the cc.NodeRGB protocol from current tint to a custom one.
     * Relative to their own color change.
     * @function
     * @param {Number} duration  duration in seconds
     * @param {Number} deltaRed
     * @param {Number} deltaGreen
     * @param {Number} deltaBlue
     * @return {cc.TintBy}
     * @example
     * // example
     * var action = cc.tintBy(2, -127, -255, -127);
     */
    export function tintBy(duration:number, deltaRed:number, deltaGreen:number, deltaBlue:number):TintBy;

    /** Delays the action a certain amount of seconds
     * @class
     * @extends cc.ActionInterval
     */
    export class DelayTime extends ActionInterval {
        /**
         * Returns a reversed action.
         * @return {cc.DelayTime}
         */
        public reverse():DelayTime;

        /**
         * returns a new clone of the action
         * @returns {cc.DelayTime}
         */
        public clone():DelayTime;
    }

    /**
     * Delays the action a certain amount of seconds
     * @function
     * @param {Number} d duration in seconds
     * @return {cc.DelayTime}
     * @example
     * // example
     * var delay = cc.delayTime(1);
     */
    export function delayTime(d:number):DelayTime;

    /**
     * <p>
     * Executes an action in reverse order, from time=duration to time=0                                     <br/>
     * @warning Use this action carefully. This action is not sequenceable.                                 <br/>
     * Use it as the default "reversed" method of your own actions, but using it outside the "reversed"      <br/>
     * scope is not recommended.
     * </p>
     * @class
     * @extends cc.ActionInterval
     * @param {cc.FiniteTimeAction} action
     * @example
     *  var reverse = new cc.ReverseTime(this);
     */
    export class ReverseTime extends ActionInterval {
        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
         * @param {cc.FiniteTimeAction} action
         */
        public ctor(action:FiniteTimeAction):void;
        public ctor():void;

        /**
         * @param {cc.FiniteTimeAction} action
         * @return {Boolean}
         */
        public initWithAction(action:FiniteTimeAction):boolean;

        /**
         * returns a new clone of the action
         * @returns {cc.ReverseTime}
         */
        public clone():ReverseTime;

        /**
         * Returns a reversed action.
         * @return {cc.ActionInterval}
         */
        public reverse():ReverseTime;
    }

    /**
     * Executes an action in reverse order, from time=duration to time=0.
     * @function
     * @param {cc.FiniteTimeAction} action
     * @return {cc.ReverseTime}
     * @example
     * // example
     *  var reverse = cc.reverseTime(this);
     */
    export function reverseTime(action:FiniteTimeAction):ReverseTime;

    /**  Animates a sprite given the name of an Animation
     * @class
     * @extends cc.ActionInterval
     * @param {cc.Animation} animation
     * @example
     * // create the animation with animation
     * var anim = new cc.Animate(dance_grey);
     */
    export class Animate extends ActionInterval {
        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. <br />
         * create the animate with animation.
         * @param {cc.Animation} animation
         */
        public ctor(animation:Animation):void;
        public ctor():void;

        /**
         * @return {cc.Animation}
         */
        public getAnimation():Animation;

        /**
         * @param {cc.Animation} animation
         */
        public setAnimation(animation:Animation):void;

        /**
         * Gets the index of sprite frame currently displayed.
         * @return {Number}
         */
        public getCurrentFrameIndex():number;

        /**
         * @param {cc.Animation} animation
         * @return {Boolean}
         */
        public initWithAnimation(animation:Animation):boolean;

        /**
         * returns a new clone of the action
         * @returns {cc.Animate}
         */
        public clone():Animate;

        /**
         * Returns a reversed action.
         * @return {cc.Animate}
         */
        public reverse():Animate;
    }

    /**
     * create the animate with animation
     * @function
     * @param {cc.Animation} animation
     * @return {cc.Animate}
     * @example
     * // example
     * // create the animation with animation
     * var anim = cc.animate(dance_grey);
     */
    export function animate(animation:Animation):Animate;

    /**
     * <p>
     *     Overrides the target of an action so that it always runs on the target<br/>
     *     specified at action creation rather than the one specified by runAction.
     * </p>
     * @class
     * @extends cc.ActionInterval
     * @param {cc.Node} target
     * @param {cc.FiniteTimeAction} action
     */
    export class TargetedAction extends ActionInterval {
        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. <br />
         * Create an action with the specified action and forced target.
         * @param {cc.Node} target
         * @param {cc.FiniteTimeAction} action
         */
        public ctor(target:Node, action:FiniteTimeAction):void;
        public ctor():void;

        /**
         * Init an action with the specified action and forced target
         * @param {cc.Node} target
         * @param {cc.FiniteTimeAction} action
         * @return {Boolean}
         */
        public initWithTarget(target:Node, action:FiniteTimeAction):boolean;

        /**
         * returns a new clone of the action
         * @returns {cc.TargetedAction}
         */
        public clone():TargetedAction;

        /**
         * return the target that the action will be forced to run with
         * @return {cc.Node}
         */
        public getForcedTarget():Node;

        /**
         * set the target that the action will be forced to run with
         * @param {cc.Node} forcedTarget
         */
        public setForcedTarget(forcedTarget:Node):void;
    }

    /**
     * Create an action with the specified action and forced target
     * @function
     * @param {cc.Node} target
     * @param {cc.FiniteTimeAction} action
     * @return {cc.TargetedAction}
     */
    export function targetedAction(target:Node, action:FiniteTimeAction):TargetedAction;

    // +--------------------------------------------------------------------------------
    // + File: cocos2d/core/base-nodes/CCActionTween.js
    // +--------------------------------------------------------------------------------
    /**
     *
     * @class
     * @extends cc.Class
     */
    export class ActionTweenDelegate extends Class {
        /**
         * Update Tween Action.
         * @param value
         * @param key
         */
        public updateTweenAction(value:any, key:string):void;
    }

    /**
     * cc.ActionTween
     * cc.ActionTween is an action that lets you update any property of an object.
     *
     * @class
     * @extends cc.ActionInterval
     * @example
     * //For example, if you want to modify the "width" property of a target from 200 to 300 in 2 seconds, then:
     *  var modifyWidth = cc.actionTween(2,"width",200,300)
     *  target.runAction(modifyWidth);
     *
     * //Another example: cc.ScaleTo action could be rewriten using cc.PropertyAction:
     * // scaleA and scaleB are equivalents
     * var scaleA = cc.scaleTo(2,3);
     * var scaleB = cc.actionTween(2,"scale",1,3);
     * @param {Number} duration
     * @param {String} key
     * @param {Number} from
     * @param {Number} to
     */
    export class ActionTween extends ActionInterval {
        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. <br />
         * Creates an initializes the action with the property name (key), and the from and to parameters.
         * @param {Number} duration
         * @param {String} key
         * @param {Number} from
         * @param {Number} to
         */
        // TODO: Not all of these parameters are required, figure out how this is supposed to be defined
        public ctor(duration:number, key:string, from:number, to:number):void;
        public ctor():void;

        /**
         * initializes the action with the property name (key), and the from and to parameters.
         * @param {Number} duration
         * @param {String} key
         * @param {Number} from
         * @param {Number} to
         * @return {Boolean}
         */
        public initWithDuration(duration:number, key:string, from:number, to:number):boolean;
        public initWithDuration(duration:number):boolean;

        /**
         * Start this tween with target.
         * @param {cc.ActionTweenDelegate} target
         */
        public startWithTarget(target:ActionTweenDelegate|Node):void;

        /**
         * returns a reversed action.
         * @return {cc.ActionTween}
         */
        public reverse():ActionTween;

        /**
         * to copy object with deep copy.
         * returns a clone of action.
         *
         * @return {cc.ActionTween}
         */
        public clone():ActionTween;
    }

    /**
     * Creates an initializes the action with the property name (key), and the from and to parameters.
     * @function
     * @param {Number} duration
     * @param {String} key
     * @param {Number} from
     * @param {Number} to
     * @return {cc.ActionTween}
     */
    export function actionTween(duration:number, key:string, from:number, to:number):ActionTween;
}
/// <reference path="../cocos2d-lib.d.ts" />

/**
 * Audio support in the browser
 *
 * MULTI_CHANNEL        : Multiple audio while playing - If it doesn't, you can only play background music
 * WEB_AUDIO            : Support for WebAudio - Support W3C WebAudio standards, all of the audio can be played
 * AUTOPLAY             : Supports auto-play audio - if Don‘t support it, On a touch detecting background music canvas, and then replay
 * REPLAY_AFTER_TOUCH   : The first music will fail, must be replay after touchstart
 * USE_EMPTIED_EVENT    : Whether to use the emptied event to replace load callback
 * DELAY_CREATE_CTX     : delay created the context object - only webAudio
 * NEED_MANUAL_LOOP     : WebAudio loop attribute failure, need to manually perform loop
 *
 * May be modifications for a few browser version
 */

declare namespace cc {
    /**
     * Encapsulate DOM and webAudio
     */
    export class Audio extends Class {
        public volume:number;
        public loop:boolean;
        public src:any;

        // TODO: Figure out what type context is supposed to be
        public constructor(context:any, volume:number, url:string);

        public ctor(context:any, volume:number, url:string):void;
        public ctor():void;

        // TODO: Figure out what type buffer is supposed to be
        public setBuffer(buffer:any):void;

        // TODO: Figure out what type element is supposed to be
        public setElement(element:any):void;

        public play(offset:number, loop:boolean):void;

        public getPlaying():boolean;


        public stop():void;

        public pause():void;

        public resume():void;

        public setVolume(volume:number):void;

        public getVolume():number;

        public cloneNode():Audio;
    }

    /**
     * cc.audioEngine is the singleton object, it provide simple audio APIs.
     * @namespace
     */
    export namespace audioEngine {
        /**
         * Indicates whether any background music can be played or not.
         * @returns {boolean} true if the background music is playing, otherwise false
         */
        export function willPlayMusic():boolean;

        /**
         * Play music.
         * @param {String} url The path of the music file without filename extension.
         * @param {Boolean} loop Whether the music loop or not.
         * @example
         * //example
         * cc.audioEngine.playMusic(path, false);
         */
        export function playMusic(url:string, loop:boolean):void;

        /**
         * Stop playing music.
         * @param {Boolean} [releaseData] If release the music data or not.As default value is false.
         * @example
         * //example
         * cc.audioEngine.stopMusic();
         */
        export function stopMusic(releaseData?:boolean):void;

        /**
         * Pause playing music.
         * @example
         * //example
         * cc.audioEngine.pauseMusic();
         */
        export function pauseMusic():void;

        /**
         * Resume playing music.
         * @example
         * //example
         * cc.audioEngine.resumeMusic();
         */
        export function resumeMusic():void;

        /**
         * Rewind playing music.
         * @example
         * //example
         * cc.audioEngine.rewindMusic();
         */
        export function rewindMusic():void;

        /**
         * The volume of the music max value is 1.0,the min value is 0.0 .
         * @return {Number}
         * @example
         * //example
         * var volume = cc.audioEngine.getMusicVolume();
         */
        export function getMusicVolume():number;

        /**
         * Set the volume of music.
         * @param {Number} volume Volume must be in 0.0~1.0 .
         * @example
         * //example
         * cc.audioEngine.setMusicVolume(0.5);
         */
        export function setMusicVolume(volume:number):void;

        /**
         * Whether the music is playing.
         * @return {Boolean} If is playing return true,or return false.
         * @example
         * //example
         *  if (cc.audioEngine.isMusicPlaying()) {
         *      cc.log("music is playing");
         *  }
         *  else {
         *      cc.log("music is not playing");
         *  }
         */
        export function isMusicPlaying():boolean;

        /**
         * Play sound effect.
         * @param {String} url The path of the sound effect with filename extension.
         * @param {Boolean} loop Whether to loop the effect playing, default value is false
         * @return {Number|null} the audio id
         * @example
         * //example
         * var soundId = cc.audioEngine.playEffect(path);
         */
        export function playEffect(url:string, loop:boolean):void;

        /**
         * Set the volume of sound effects.
         * @param {Number} volume Volume must be in 0.0~1.0 .
         * @example
         * //example
         * cc.audioEngine.setEffectsVolume(0.5);
         */
        export function setEffectsVolume(volume:number):void;

        /**
         * The volume of the effects max value is 1.0,the min value is 0.0 .
         * @return {Number}
         * @example
         * //example
         * var effectVolume = cc.audioEngine.getEffectsVolume();
         */
        export function getEffectsVolume():number;

        /**
         * Pause playing sound effect.
         * @param {cc.Audio} audio The return value of function playEffect.
         * @example
         * //example
         * cc.audioEngine.pauseEffect(audioID);
         */
        export function pauseEffect(audio:Audio):void;

        /**
         * Pause all playing sound effect.
         * @example
         * //example
         * cc.audioEngine.pauseAllEffects();
         */
        export function pauseAllEffects():void;

        /**
         * Resume playing sound effect.
         * @param {cc.Audio} audio The return value of function playEffect.
         * @audioID
         * //example
         * cc.audioEngine.resumeEffect(audioID);
         */
        export function resumeEffect(audio:Audio):void;

        /**
         * Resume all playing sound effect
         * @example
         * //example
         * cc.audioEngine.resumeAllEffects();
         */
        export function resumeAllEffects():void;

        /**
         * Stop playing sound effect.
         * @param {cc.Audio} audio The return value of function playEffect.
         * @example
         * //example
         * cc.audioEngine.stopEffect(audioID);
         */
        export function stopEffect(audio:Audio):void;

        /**
         * Stop all playing sound effects.
         * @example
         * //example
         * cc.audioEngine.stopAllEffects();
         */
        export function stopAllEffects():void;

        /**
         * Unload the preloaded effect from internal buffer
         * @param {String} url
         * @example
         * //example
         * cc.audioEngine.unloadEffect(EFFECT_FILE);
         */
        export function unloadEffect(url:string):void;

        /**
         * End music and effects.
         */
        export function end():void;
    }
}/// <reference path="../cocos2d-lib.d.ts" />

declare module cc {
// +--------------------------------------------------------------------------------
// + File: cocos2d/core/base-nodes/CCNode.js
// +--------------------------------------------------------------------------------

// Class Definitions
    /**
     * cc.Node is the root class of all node. Anything that gets drawn or contains things that get drawn is a cc.Node.
     * The most popular cc.Nodes are: cc.Scene, cc.Layer, cc.Sprite, cc.Menu.
     *
     * The main features of a cc.Node are:
     * - They can contain other cc.Node nodes (addChild, getChildByTag, removeChild, etc)
     * - They can schedule periodic callback (schedule, unschedule, etc)
     * - They can execute actions (runAction, stopAction, etc)
     *
     * Some cc.Node nodes provide extra functionality for them or their children.
     *
     * Subclassing a cc.Node usually means (one/all) of:
     * - overriding constructor function "ctor" to initialize resources and schedule callbacks
     * - create callbacks to handle the advancement of time
     *
     * Features of cc.Node:
     * - position
     * - scale (x, y)
     * - rotation (in degrees, clockwise)
     * - anchor point
     * - size
     * - color
     * - opacity
     * - visible
     * - z-order
     * - WebGL z position
     *
     *  Default values:
     * - rotation: 0
     * - position: (x=0,y=0)
     * - scale: (x=1,y=1)
     * - contentSize: (x=0,y=0)
     * - anchorPoint: (x=0,y=0)
     * - color: (r=255,g=255,b=255)
     * - opacity: 255
     *
     *  Limitations:
     * - A cc.Node is a "void" object. It doesn't have a texture
     *
     * Order in transformations with grid disabled
     * -# The node will be translated (position)
     * -# The node will be rotated (rotation)
     * -# The node will be scaled (scale)
     *
     * Order in transformations with grid enabled
     * -# The node will be translated (position)
     * -# The node will be rotated (rotation)
     * -# The node will be scaled (scale)
     * -# The grid will capture the screen
     * -# The node will be moved according to the camera values (camera)
     * -# The grid will render the captured screen
     *
     * @class
     * @extends cc.Class
     *
     * @property {Number}               x                   - x axis position of node
     * @property {Number}               y                   - y axis position of node
     * @property {Number}               width               - Width of node
     * @property {Number}               height              - Height of node
     * @property {Number}               anchorX             - Anchor point's position on x axis
     * @property {Number}               anchorY             - Anchor point's position on y axis
     * @property {Boolean}              ignoreAnchor        - Indicate whether ignore the anchor point property for positioning
     * @property {Number}               skewX               - Skew x
     * @property {Number}               skewY               - Skew y
     * @property {Number}               zIndex              - Z order in depth which stands for the drawing order
     * @property {Number}               vertexZ             - WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex
     * @property {Number}               rotation            - Rotation of node
     * @property {Number}               rotationX           - Rotation on x axis
     * @property {Number}               rotationY           - Rotation on y axis
     * @property {Number}               scale               - Scale of node
     * @property {Number}               scaleX              - Scale on x axis
     * @property {Number}               scaleY              - Scale on y axis
     * @property {Boolean}              visible             - Indicate whether node is visible or not
     * @property {cc.Color}             color               - Color of node, default value is white: (255, 255, 255)
     * @property {Boolean}              cascadeColor        - Indicate whether node's color value affect its child nodes, default value is false
     * @property {Number}               opacity             - Opacity of node, default value is 255
     * @property {Boolean}              opacityModifyRGB    - Indicate whether opacity affect the color value, default value is false
     * @property {Boolean}              cascadeOpacity      - Indicate whether node's opacity value affect its child nodes, default value is false
     * @property {Array}                children            - <@readonly> All children nodes
     * @property {Number}               childrenCount       - <@readonly> Number of children
     * @property {cc.Node}              parent              - Parent node
     * @property {Boolean}              running             - <@readonly> Indicate whether node is running or not
     * @property {Number}               tag                 - Tag of node
     * @property {Object}               userData            - Custom user data
     * @property {Object}               userObject          - User assigned CCObject, similar to userData, but instead of holding a void* it holds an id
     * @property {Number}               arrivalOrder        - The arrival order, indicates which children is added previously
     * @property {cc.ActionManager}     actionManager       - The CCActionManager object that is used by all actions.
     * @property {cc.Scheduler}         scheduler           - cc.Scheduler used to schedule all "updates" and timers.
     * @property {cc.GridBase}          grid                - grid object that is used when applying effects
     * @property {cc.GLProgram}         shaderProgram       - The shader program currently used for this node
     * @property {Number}               glServerState       - The state of OpenGL server side
     */
    export class Node extends Class {
        // TODO: Properly declare these things below, they are unknown or as-yet undeclared types:
        //public grid:GridBase;
        //public shaderProgram:GLProgram;

        public actionManager:ActionManager;
        public anchorX:number;
        public anchorY:number;
        public arrivalOrder:number;

        public cascadeColor:boolean;
        public cascadeOpacity:boolean;
        public children:Node[];
        public childrenCount:number;
        public color:Color;
        public glServerState:number;
        public height:number;
        public ignoreAnchor:boolean;
        public opacity:number;
        public opacityModifyRGB:boolean;
        public parent:Node;
        public rotation:number;
        public rotationX:number;
        public rotationY:number;
        public running:boolean;
        public scale:number;
        public scaleX:number;
        public scaleY:number;
        public scheduler:Scheduler;
        public skewX:number;
        public skewY:number;
        public tag:number;
        public userData:any;
        public userObject:Class; // <-- is this return type of cc.Class correct?!? Not sure ...
        public vertexZ:number;
        public width:number;
        public x:number;
        public y:number;
        public visible:boolean;
        public zIndex:number;

        public constructor();

        /**
         * Initializes the instance of cc.Node
         * @function
         * @returns {boolean} Whether the initialization was successful.
         */
        public init():boolean;

        /** "add" logic MUST only be in this method
         *
         * If the child is added to a 'running' node, then 'onEnter' and 'onEnterTransitionDidFinish' will be called immediately.
         * @function
         * @param {cc.Node} child  A child node
         * @param {number} [localZOrder]  Z order for drawing priority. Please refer to setZOrder(int)
         * @param {number|string} [tag]  An integer or a name to identify the node easily. Please refer to setTag(int) and setName(string)
         */
        public addChild(child:Node, localZOrder?:number, tag?:number|string):void;

        /**
         * Adds a component to the node's component container.
         * @function
         * @param {cc.Component} component
         *
         * TODO: Uncomment once Component is defined.
         */
        //addComponent(component:Component):void;

        /**
         * Returns a "local" axis aligned bounding box of the node.
         * @deprecated since v3.0, please use getBoundingBox instead
         * @return {cc.Rect}
         */
        public boundingBox():Rect;

        /**
         * Stops all running actions and schedulers
         * @function
         */
        public cleanup():void;

        /**
         * Converts a Point to node (local) space coordinates. The result is in Points.
         * @function
         * @param {cc.Point} worldPoint
         * @return {cc.Point}
         */
        public convertToNodeSpace(worldPoint:Point):Point;

        /**
         * Converts a Point to node (local) space coordinates. The result is in Points.
         * treating the returned/received node point as anchor relative.
         * @function
         * @param {cc.Point} worldPoint
         * @return {cc.Point}
         */
        public convertToNodeSpaceAR(worldPoint:Point):Point;

        /** convenience methods which take a cc.Touch instead of cc.Point
         * @function
         * @param {cc.Touch} touch The touch object
         * @return {cc.Point}
         */
        public convertTouchToNodeSpace(touch:Touch):Point;

        /**
         * converts a cc.Touch (world coordinates) into a local coordinate. This method is AR (Anchor Relative).
         * @function
         * @param {cc.Touch} touch The touch object
         * @return {cc.Point}
         */
        public convertTouchToNodeSpaceAR(touch:Touch):Point;

        /**
         * Converts a Point to world space coordinates. The result is in Points.
         * @function
         * @param {cc.Point} nodePoint
         * @return {cc.Point}
         */
        public convertToWorldSpace(nodePoint:Point):Point;

        /**
         * Converts a local Point to world space coordinates.The result is in Points.
         * treating the returned/received node point as anchor relative.
         * @function
         * @param {cc.Point} nodePoint
         * @return {cc.Point}
         */
        public convertToWorldSpaceAR(nodePoint:Point):Point;

        public doEnumerate(name:string, callback:(arg:Node) => boolean):void;

        /**
         * TODO: Fill this out with an explanation of this method's purpose/functionality.
         *
         * @function
         * @param {cc.Node} node ???
         * @param {string} name ???
         * @param {function} callback ???
         */
        public doEnumerateRecursive(node:Node, name:string, callback:(arg:Node) => boolean):void;

        /**
         * Render function using the canvas 2d context or WebGL context, internal usage only, please do not call this function
         * @function
         * @param {CanvasRenderingContext2D} ctx The render context
         */
        public draw(ctx:CanvasRenderingContext2D):void;

        /**
         * Render function using the canvas 2d context or WebGL context, internal usage only, please do not call this function
         * @function
         * @param {WebGLRenderingContext} ctx The render context
         */
        public draw(ctx:WebGLRenderingContext):void;

        /** Search the children of the receiving node to perform processing for nodes which share a name.
         *
         * @param name The name to search for, supports c++11 regular expression.
         * Search syntax options:
         * `//`: Can only be placed at the begin of the search string. This indicates that it will search recursively.
         * `..`: The search should move up to the node's parent. Can only be placed at the end of string.
         * `/` : When placed anywhere but the start of the search string, this indicates that the search should move to the node's children.
         *
         * @code
         * enumerateChildren("//MyName", ...): This searches the children recursively and matches any node with the name `MyName`.
         * enumerateChildren("[[:alnum:]]+", ...): This search string matches every node of its children.
         * enumerateChildren("A[[:digit:]]", ...): This searches the node's children and returns any child named `A0`, `A1`, ..., `A9`.
         * enumerateChildren("Abby/Normal", ...): This searches the node's grandchildren and returns any node whose name is `Normal`
         * and whose parent is named `Abby`.
         * enumerateChildren("//Abby/Normal", ...): This searches recursively and returns any node whose name is `Normal` and whose
         * parent is named `Abby`.
         * @endcode
         *
         * @warning Only support alpha or number for name, and not support unicode.
         *
         * @param callback A callback function to execute on nodes that match the `name` parameter. The function takes the following arguments:
         *  `node`
         *      A node that matches the name
         *  And returns a boolean result. Your callback can return `true` to terminate the enumeration.
         *
         */
        public enumerateChildren(name:string, callback:(arg:Node) => boolean):void;

        ///**
        // * Properties configuration function
        // * All properties in attrs will be set to the node,
        // * when the setter of the node is available,
        // * the property will be set via setter function.
        // *
        // * @function
        // * @param {Object} attrs Properties to be set to node
        // */
        //attr(attrs);

        /**
         * Returns an action from the running action list by its tag.
         * @function
         * @see cc.Node#getTag and cc.Node#setTag
         * @param {Number} tag
         * @return {cc.Action} The action object with the given tag.
         */
        public getActionByTag(tag:number):Action;

        /**
         * Returns the CCActionManager object that is used by all actions.
         * (IMPORTANT: If you set a new cc.ActionManager, then previously created actions are going to be removed.)
         * @function
         * @see cc.Node#setActionManager
         * @return {cc.ActionManager} A CCActionManager object.
         */
        public getActionManager():ActionManager;

        /**
         *  Returns a copy of the anchor point.
         *  Anchor point is the point around which all transformations and positioning manipulations take place.
         *  It's like a pin in the node where it is "attached" to its parent.
         *  The anchorPoint is normalized, like a percentage. (0,0) means the bottom-left corner and (1,1) means the top-right corner.
         *  But you can use values higher than (1,1) and lower than (0,0) too.
         *  The default anchor point is (0.5,0.5), so it starts at the center of the node.
         * @function
         * @return {cc.Point}  The anchor point of node.
         */
        public getAnchorPoint():Point;

        /**
         * Returns a copy of the anchor point in absolute pixels.
         * you can only read it. If you wish to modify it, use setAnchorPoint
         * @see cc.Node#getAnchorPoint
         * @function
         * @return {cc.Point} The anchor point in absolute pixels.
         */
        public getAnchorPointInPoints():Point;

        /**
         * Returns a "local" axis aligned bounding box of the node.
         * The returned box is relative only to its parent.
         * @function
         * @return {cc.Rect} The calculated bounding box of the node
         */
        public getBoundingBox():Rect;

        /**
         * Returns a "world" axis aligned bounding box of the node.
         * @function
         * @return {cc.Rect}
         */
        public getBoundingBoxToWorld():Rect;

        /**
         * Returns a camera object that lets you move the node using a gluLookAt
         * @function
         * @return {cc.Camera} A CCCamera object that lets you move the node using a gluLookAt
         * @deprecated since v3.0, no alternative function
         * @example
         * var camera = node.getCamera();
         * camera.setEye(0, 0, 415/2);
         * camera.setCenter(0, 0, 0);
         *
         * TODO: Uncomment once Camera is defined.
         */
        //getCamera():Camera;

        /**
         * Returns a child from the container given its name
         * @function
         * @param {String} name A name to find the child node.
         * @return {cc.Node} a CCNode object whose name equals to the input parameter
         */
        public getChildByName(name:string):Node;

        /**
         * Returns a child from the container given its tag
         * @function
         * @param {Number} tag An identifier to find the child node.
         * @return {cc.Node} a CCNode object whose tag equals to the input parameter
         */
        public getChildByTag(tag:number):Node;

        /**
         * Returns an array of all children
         * Composing a "tree" structure is a very important feature of CCNode
         * @function
         * @return {Array} An array of children
         * @example
         *  //This sample code traverses all children nodes, and set their position to (0,0)
         *  var allChildren = parent.getChildren();
         *  for(var i = 0; i < allChildren.length; i++) {
         *      allChildren[i].setPosition(0, 0);
         *  }
         */
        public getChildren():Node[];

        /**
         * Returns the amount of children.
         * @function
         * @return {Number} The amount of children.
         */
        public getChildrenCount():number;

        /**
         * Returns the color of Node
         * @function
         * @returns {cc.Color}
         */
        public getColor():Color;

        /**
         * Returns a component identified by the name given.
         * @function
         * @param {String} name The name to search for
         * @return {cc.Component} The component found
         *
         * TODO: Uncomment once Component is defined.
         */
        //getComponent(name:string):Component;

        /**
         * Returns a copy the untransformed size of the node.
         * The contentSize remains the same no matter the node is scaled or rotated.
         * All nodes has a size. Layer and Scene has the same size of the screen by default.
         * @function
         * @return {cc.Size} The untransformed size of the node.
         */
        public getContentSize():Size;

        /**
         * Returns the displayed color of Node,
         * the difference between displayed color and color is that displayed color is calculated based on color and parent node's color when cascade color enabled.
         * @function
         * @returns {cc.Color}
         */
        public getDisplayedColor():Color;

        /**
         * Returns the displayed opacity of Node,
         * the difference between displayed opacity and opacity is that displayed opacity is calculated based on opacity and parent node's opacity when cascade opacity enabled.
         * @function
         * @returns {number} displayed opacity
         */
        public getDisplayedOpacity():number;

        /**
         * Return the Node's Global Z Order.
         * @function
         * @returns {number} The node's global Z order
         */
        public getGlobalZOrder():number;

        /**
         * Returns the state of OpenGL server side.
         * @function
         * @return {Number} The state of OpenGL server side.
         * @deprecated since v3.0, no need anymore
         */
        public getGLServerState():number;

        /**
         * Returns the local Z order of this node.
         * @function
         * @returns {Number} The local (relative to its siblings) Z order.
         */
        public getLocalZOrder():number;

        /**
         * Returns a string that is used to identify the node.
         * @function
         * @returns {string} A string that identifies the node.
         */
        public getName():string;

        /**
         * TODO: Fill this out with an explanation of the method's purpose/function.
         * @function
         * @param {cc.Node} ancester An ancestor of the target node
         * @return {cc.AffineTransform} The affine transform object
         */
        public getNodeToParentAffineTransform(ancestor:Node):AffineTransform;

        /**
         * Returns the matrix that transform the node's (local) space coordinates into the parent's space coordinates.
         * The matrix is in Pixels.
         * @function
         * @param {cc.Node} ancester An ancestor of the target node
         * @return {cc.AffineTransform} The affine transform object
         */
        public getNodeToParentTransform(ancestor:Node):AffineTransform;

        /**
         * Returns the world affine transform matrix. The matrix is in Pixels.
         * @function
         * @return {cc.AffineTransform}
         */
        public getNodeToWorldTransform():AffineTransform;

        /**
         * returns the normalized position
         * @returns {cc.Point}
         */
        public getNormalizedPosition():Point;

        /** Returns the numbers of actions that are running plus the ones that are schedule to run (actions in actionsToAdd and actions arrays).
         *    Composable actions are counted as 1 action. Example:
         *    If you are running 1 Sequence of 7 actions, it will return 1.
         *    If you are running 7 Sequences of 2 actions, it will return 7.
         * @function
         * @return {Number} The number of actions that are running plus the ones that are schedule to run
         */
        public getNumberOfRunningActions():number;

        /**
         * Returns the opacity of Node
         * @function
         * @returns {number} opacity
         */
        public getOpacity():number;

        /**
         * Returns the arrival order, indicates which children should be added previously.
         * @function
         * @return {Number} The arrival order.
         */
        public getOrderOfArrival():number;

        /**
         * Returns a reference to the parent node
         * @function
         * @return {cc.Node} A reference to the parent node
         */
        public getParent():Node;

        /**
         * Returns the matrix that transform parent's space coordinates to the node's (local) space coordinates.
         * The matrix is in Pixels.
         * @function
         * @return {cc.AffineTransform}
         */
        public getParentToNodeTransform():AffineTransform;

        /**
         * Returns a copy of the position (x,y) of the node in cocos2d coordinates. (0,0) is the left-bottom corner.
         * @function
         * @return {cc.Point} The position (x,y) of the node in OpenGL coordinates
         */
        public getPosition():Point;

        /**
         * Returns the x axis position of the node in cocos2d coordinates.
         * @function
         * @return {Number}
         */
        public getPositionX():number;

        /**
         * Returns the y axis position of the node in cocos2d coordinates.
         * @function
         * @return {Number}
         */
        public getPositionY():number;

        /**
         * Returns the rotation (angle) of the node in degrees. 0 is the default rotation angle. Positive values rotate node clockwise.
         * @function
         * @return {Number} The rotation of the node in degrees.
         */
        public getRotation():number;

        /**
         * Returns the X axis rotation (angle) which represent a horizontal rotational skew of the node in degrees.
         * 0 is the default rotation angle. Positive values rotate node clockwise
         * (support only in WebGL rendering mode)
         * @function
         * @return {Number} The X rotation in degrees.
         */
        public getRotationX():number;

        /**
         * Returns the Y axis rotation (angle) which represent a vertical rotational skew of the node in degrees.
         * 0 is the default rotation angle. Positive values rotate node clockwise
         * (support only in WebGL rendering mode)
         * @function
         * @return {Number} The Y rotation in degrees.
         */
        public getRotationY():number;

        /**
         * Returns the scale factor of the node.
         * @warning: Assertion will fail when _scaleX != _scaleY.
         * @function
         * @return {Number} The scale factor
         */
        public getScale():number;

        /**
         * Returns the scale factor on X axis of this node
         * @function
         * @return {Number} The scale factor on X axis.
         */
        public getScaleX():number;

        /**
         * Returns the scale factor on Y axis of this node
         * @function
         * @return {Number} The scale factor on Y axis.
         */
        public getScaleY():number;

        /**
         *
         *   Returns the cc.Scheduler object used to schedule all "updates" and timers.
         *
         * @function
         * @return {cc.Scheduler} A CCScheduler object.
         */
        public getScheduler():Scheduler;

        /**
         * Return the shader program currently used for this node
         * @function
         * @return {cc.GLProgram} The shader program currently used for this node
         *
         * TODO: Uncomment once GLProgram is defined.
         */
        //getShaderProgram():GLProgram;

        /**
         * Returns the skew degrees in X
         * The X skew angle of the node in degrees.
         * This angle describes the shear distortion in the X direction.
         * Thus, it is the angle between the Y axis and the left edge of the shape
         * The default skewX angle is 0. Positive values distort the node in a CW direction.
         *
         * @function
         * @return {Number} The X skew angle of the node in degrees.
         */
        public getSkewX():number;

        /**
         * Returns the skew degrees in Y
         * The Y skew angle of the node in degrees.
         * This angle describes the shear distortion in the Y direction.
         * Thus, it is the angle between the X axis and the bottom edge of the shape
         * The default skewY angle is 0. Positive values distort the node in a CCW direction.
         *
         * @function
         * @return {Number} The Y skew angle of the node in degrees.
         */
        public getSkewY():number;

        /**
         * Returns a tag that is used to identify the node easily.
         * @function
         * @return {Number} An integer that identifies the node.
         * @example
         *  //You can set tags to node then identify them easily.
         * // set tags
         * node1.setTag(TAG_PLAYER);
         * node2.setTag(TAG_MONSTER);
         * node3.setTag(TAG_BOSS);
         * parent.addChild(node1);
         * parent.addChild(node2);
         * parent.addChild(node3);
         * // identify by tags
         * var allChildren = parent.getChildren();
         * for(var i = 0; i < allChildren.length; i++){
         *     switch(node.getTag()) {
         *         case TAG_PLAYER:
         *             break;
         *         case TAG_MONSTER:
         *             break;
         *         case TAG_BOSS:
         *             break;
         *     }
         * }
         */
        public getTag():number;

        /**
         *
         *     Returns a custom user data pointer
         *     You can set everything in UserData pointer, a data block, a structure or an object.
         *
         * @function
         * @return {object}  A custom user data pointer
         */
        public getUserData():any;

        /**
         * Returns a user assigned cocos2d object.
         * Similar to userData, but instead of holding all kinds of data it can only hold a cocos2d object
         * @function
         * @return {object} A user assigned CCObject
         */
        public getUserObject():any;

        /**
         * Returns WebGL Z vertex of this node.
         * @function
         * @return {Number} WebGL Z vertex of this node
         */
        public getVertexZ():number;

        /**
         * Returns the inverse world affine transform matrix. The matrix is in Pixels.
         * @function
         * @return {cc.AffineTransform}
         */
        public getWorldToNodeTransform():AffineTransform;

        /**
         * Returns z order of this node
         * @function
         * @return {Number}
         * @deprecated since 3.0, please use getLocalZOrder instead
         */
        public getZOrder():number;

        /**
         *
         *     Sets whether the anchor point will be ignored when you position this node.
         *     When anchor point ignored, position will be calculated based on the origin point (0, 0) in parent's coordinates.
         *     This is an internal method, only used by CCLayer and CCScene. Don't call it outside framework.
         *     The default value is false, while in CCLayer and CCScene are true
         *
         * @function
         * @param {Boolean} newValue true if anchor point will be ignored when you position this node
         */
        public ignoreAnchorPointForPosition(newValue:boolean):boolean;

        /**
         * Returns whether node's color value affect its child nodes.
         * @function
         * @returns {boolean}
         */
        public isCascadeColorEnabled():boolean;

        /**
         * Returns whether node's opacity value affect its child nodes.
         * @function
         * @returns {boolean}
         */
        public isCascadeOpacityEnabled():boolean;

        /**
         * Returns whether the anchor point will be ignored when you position this node.
         * When anchor point ignored, position will be calculated based on the origin point (0, 0) in parent's coordinates.
         * @function
         * @see cc.Node#ignoreAnchorPointForPosition
         * @return {Boolean} true if the anchor point will be ignored when you position this node.
         */
        public isIgnoreAnchorPointForPosition():boolean;

        /**
         * Get whether color should be changed with the opacity value
         * @function
         * @return {Boolean}
         */
        public isOpacityModifyRGB():boolean;

        /**
         *
         *     Returns whether or not the node accepts event callbacks.
         *     Running means the node accept event callbacks like onEnter(), onExit(), update()
         *
         * @function
         * @return {Boolean} Whether or not the node is running.
         */
        public isRunning():boolean;

        /**
         * Returns if the node is visible
         * @function
         * @see cc.Node#setVisible
         * @return {Boolean} true if the node is visible, false if the node is hidden.
         */
        public isVisible():boolean;

        /**
         * Returns the matrix that transform the node's (local) space coordinates into the parent's space coordinates.
         * The matrix is in Pixels.
         * @function
         * @return {cc.AffineTransform}
         * @deprecated since v3.0, please use getNodeToParentTransform instead
         */
        public nodeToParentTransform():AffineTransform;

        /**
         * @function
         * @deprecated since v3.0, please use getNodeToWorldTransform instead
         */
        public nodeToWorldTransform():AffineTransform;

        /**
         *
         *     Event callback that is invoked every time when CCNode enters the 'stage'.
         *     If the CCNode enters the 'stage' with a transition, this event is called when the transition starts.
         *     During onEnter you can't access a "sister/brother" node.
         *     If you override onEnter, you must call its parent's onEnter function with this._super().
         *
         * @function
         */
        public onEnter():void;

        /**
         *
         *     Event callback that is invoked when the CCNode enters in the 'stage'.
         *     If the CCNode enters the 'stage' with a transition, this event is called when the transition finishes.
         *     If you override onEnterTransitionDidFinish, you shall call its parent's onEnterTransitionDidFinish with this._super()
         *
         * @function
         */
        public onEnterTransitionDidFinish():void;

        /**
         *
         * callback that is called every time the cc.Node leaves the 'stage'.
         * If the cc.Node leaves the 'stage' with a transition, this callback is called when the transition finishes.
         * During onExit you can't access a sibling node.
         * If you override onExit, you shall call its parent's onExit with this._super().
         *
         * @function
         */
        public onExit():void;

        /**
         * callback that is called every time the cc.Node leaves the 'stage'.
         * If the cc.Node leaves the 'stage' with a transition, this callback is called when the transition starts.
         * If you override onExitTransitionDidStart, you shall call its parent's onExitTransitionDidStart with this._super()
         * @function
         */
        public onExitTransitionDidStart():void;

        /**
         * @function
         * @deprecated since v3.0, please use getParentToNodeTransform instead
         */
        public parentToNodeTransform():AffineTransform;

        /**
         * Pauses all scheduled selectors and actions.
         * This method is called internally by onExit
         * @function
         */
        public pause():void;

        /**
         * Pauses all scheduled selectors and actions.
         * This method is called internally by onExit
         * @deprecated since v3.0, please use pause instead
         * @function
         */
        public pauseSchedulerAndActions():void;

        /**
         * Currently JavaScript Bindings (JSB), in some cases, needs to use retain and release. This is a bug in JSB,
         * and the ugly workaround is to use retain/release. So, these 2 methods were added to be compatible with JSB.
         * This is a hack, and should be removed once JSB fixes the retain/release bug
         * You will need to retain an object if you created an engine object and haven't added it into the scene graph during the same frame.
         * Otherwise, JSB's native autorelease pool will consider this object a useless one and release it directly,
         * when you want to use it later, a "Invalid Native Object" error will be raised.
         * The retain function can increase a reference count for the native object to avoid it being released,
         * you need to manually invoke release function when you think this object is no longer needed, otherwise, there will be memory learks.
         * retain and release function call should be paired in developer's game code.
         * @function
         * @see cc.Node#retain
         */
        public release():void;

        /**
         * Removes all children from the container and do a cleanup all running actions depending on the cleanup parameter.
         * If the cleanup parameter is not passed, it will force a cleanup.
         * @function
         * @param {Boolean} [cleanup=true] true if all running actions on all children nodes should be cleanup, false otherwise.
         */
        public removeAllChildren(cleanup?:boolean):void;

        /**
         * TODO: This method makes no sense. How is it any different than just calling Node::removeAllChildren()?
         *       I'm guessing this is a bug, and that this method should take no params,
         *       and call Node::removeAllChildren(true).
         * Removes all children from the container and do a cleanup all running actions depending on the cleanup parameter.
         * @param {Boolean} [cleanup=true]
         */
        public removeAllChildrenWithCleanup(cleanup?:boolean):void;

        /**
         * Removes all components of cc.Node, it called when cc.Node is exiting from stage.
         * @function
         */
        public removeAllComponents():void;

        /** Removes a child from the container. It will also cleanup all running actions depending on the cleanup parameter.
         * If the cleanup parameter is not passed, it will force a cleanup.
         *  "remove" logic MUST only be on this method
         * If a class wants to extend the 'removeChild' behavior it only needs
         * to override this method
         * @function
         * @param {cc.Node} child  The child node which will be removed.
         * @param {Boolean} [cleanup=true]  true if all running actions and callbacks on the child node will be cleanup, false otherwise.
         */
        public removeChild(child:Node, cleanup?:boolean):void;

        /**
         * Removes a child from the container by tag value. It will also cleanup all running actions depending on the cleanup parameter.
         * If the cleanup parameter is not passed, it will force a cleanup.
         * @function
         * @param {Number} tag An integer number that identifies a child node
         * @param {Boolean} [cleanup=true] true if all running actions and callbacks on the child node will be cleanup, false otherwise.
         * @see cc.Node#removeChildByTag
         */
        public removeChildByTag(tag:number, cleanup?:boolean):void;

        /**
         * Removes a component identified by the given name or removes the component object given
         * @function
         * @param {cc.Component} component
         *
         * TODO: Uncomment once Component is defined.
         */
        //removeComponent(component:Component):void;

        /**
         * Removes a component identified by the given name or removes the component object given
         * @function
         * @param {String} name
         */
        public removeComponent(name:string):void;

        /**
         * Remove itself from its parent node. If cleanup is true, then also remove all actions and callbacks.
         * If the cleanup parameter is not passed, it will force a cleanup.
         * If the node orphan, then nothing happens.
         * @function
         * @param {Boolean} [cleanup=true] true if all actions and callbacks on this node should be removed, false otherwise.
         * @see cc.Node#removeFromParentAndCleanup
         */
        public removeFromParent(cleanup?:boolean):void;

        /**
         * Removes this node itself from its parent node.
         * If the node orphan, then nothing happens.
         * @deprecated since v3.0, please use removeFromParent() instead
         * @param {Boolean} [cleanup=true] true if all actions and callbacks on this node should be removed, false otherwise.
         */
        public removeFromParentAndCleanup(cleanup:boolean):void;

        /** Reorders a child according to a new z value.
         * The child MUST be already added.
         * @function
         * @param {cc.Node} child An already added child node. It MUST be already added.
         * @param {Number} zOrder Z order for drawing priority. Please refer to setZOrder(int)
         */
        public reorderChild(child:Node, zOrder:number):void;

        /**
         * Resumes all scheduled selectors and actions.
         * This method is called internally by onEnter
         */
        public resume():void;

        /**
         * Resumes all scheduled selectors and actions.
         * This method is called internally by onEnter
         * @function
         * @deprecated since v3.0, please use resume() instead
         */
        public resumeSchedulerAndActions():void;

        /**
         * Currently JavaScript Bindings (JSB), in some cases, needs to use retain and release. This is a bug in JSB,
         * and the ugly workaround is to use retain/release. So, these 2 methods were added to be compatible with JSB.
         * This is a hack, and should be removed once JSB fixes the retain/release bug
         * You will need to retain an object if you created an engine object and haven't added it into the scene graph during the same frame.
         * Otherwise, JSB's native autorelease pool will consider this object a useless one and release it directly,
         * when you want to use it later, a "Invalid Native Object" error will be raised.
         * The retain function can increase a reference count for the native object to avoid it being released,
         * you need to manually invoke release function when you think this object is no longer needed, otherwise, there will be memory learks.
         * retain and release function call should be paired in developer's game code.
         * @function
         * @see cc.Node#release
         */
        public retain():void;

        /**
         * Executes an action, and returns the action that is executed.
         * The node becomes the action's target. Refer to cc.Action's getTarget()
         * @function
         * @warning Starting from v0.8 actions don't retain their target anymore.
         * @param {cc.Action} action
         * @return {cc.Action} An Action pointer
         */
        public runAction(action:Action):Action;

        /**
         *Sets the additional transform.
         *  The additional transform will be concatenated at the end of getNodeToParentTransform.
         *  It could be used to simulate `parent-child` relationship between two nodes (e.g. one is in BatchNode, another isn't).
         *
         *  @function
         *  @param {cc.AffineTransform} xform  The additional transform
         *  @example
         * // create a batchNode
         * var batch = new cc.SpriteBatchNode("Icon-114.png");
         * this.addChild(batch);
         *
         * // create two sprites, spriteA will be added to batchNode, they are using different textures.
         * var spriteA = new cc.Sprite(batch->getTexture());
         * var spriteB = new cc.Sprite("Icon-72.png");
         *
         * batch.addChild(spriteA);
         *
         * // We can't make spriteB as spriteA's child since they use different textures. So just add it to layer.
         * // But we want to simulate `parent-child` relationship for these two node.
         * this.addChild(spriteB);
         *
         * //position
         * spriteA.setPosition(ccp(200, 200));
         *
         * // Gets the spriteA's transform.
         * var t = spriteA.getNodeToParentTransform();
         *
         * // Sets the additional transform to spriteB, spriteB's position will based on its pseudo parent i.e. spriteA.
         * spriteB.setAdditionalTransform(t);
         *
         * //scale
         * spriteA.setScale(2);
         *
         * // Gets the spriteA's transform.
         * t = spriteA.getNodeToParentTransform();
         *
         * // Sets the additional transform to spriteB, spriteB's scale will based on its pseudo parent i.e. spriteA.
         * spriteB.setAdditionalTransform(t);
         *
         * //rotation
         * spriteA.setRotation(20);
         *
         * // Gets the spriteA's transform.
         * t = spriteA.getNodeToParentTransform();
         *
         * // Sets the additional transform to spriteB, spriteB's rotation will based on its pseudo parent i.e. spriteA.
         * spriteB.setAdditionalTransform(t);
         */
        public setAdditionalTransform(xform:AffineTransform):void;

        /**
         * Schedules a custom selector.
         * If the selector is already scheduled, then the interval parameter will be updated without scheduling it again.
         * @function
         * @param {function} callback A function wrapped as a selector
         * @param {Number} interval  Tick interval in seconds. 0 means tick every frame. If interval = 0, it's recommended to use scheduleUpdate() instead.
         * @param {Number} repeat    The selector will be executed (repeat + 1) times, you can use kCCRepeatForever for tick infinitely.
         * @param {Number} delay     The amount of time that the first tick will wait before execution.
         * @param {String} key The only string identifying the callback
         */
        public schedule(callback:(arg?:any) => void, interval:number, repeat:boolean, delay:number, key:String):void;

        /**
         * Schedules a callback function that runs only once, with a delay of 0 or larger
         * @function
         * @see cc.Node#schedule
         * @param {function} callback  A function wrapped as a selector
         * @param {Number} delay  The amount of time that the first tick will wait before execution.
         * @param {String} key The only string identifying the callback
         */
        public scheduleOnce(callback:(arg?:any) => void, delay:number, key?:string):void;

        /**
         * schedules the "update" method.
         * It will use the order number 0. This method will be called every frame.
         * Scheduled methods with a lower order value will be called before the ones that have a higher order value.
         * Only one "update" method could be scheduled per node.
         * @function
         */
        public scheduleUpdate():void;

        /**
         *
         * schedules the "update" callback function with a custom priority.
         * This callback function will be called every frame.
         * Scheduled callback functions with a lower priority will be called before the ones that have a higher value.
         * Only one "update" callback function could be scheduled per node (You can't have 2 'update' callback functions).
         *
         * @function
         * @param {Number} priority
         */
        public scheduleUpdateWithPriority(priority:number):void;

        /**
         * Sets the cc.ActionManager object that is used by all actions.
         * @function
         * @warning If you set a new CCActionManager, then previously created actions will be removed.
         * @param {cc.ActionManager} actionManager A CCActionManager object that is used by all actions.
         */
        public setActionManager(actionManager:ActionManager):void;

        /**
         *
         *     Sets the anchor point in percent.
         *
         *     anchor point is the point around which all transformations and positioning manipulations take place.
         *     It's like a pin in the node where it is "attached" to its parent.
         *     The anchorPoint is normalized, like a percentage. (0,0) means the bottom-left corner and (1,1) means the top-right corner.
         *     But you can use values higher than (1,1) and lower than (0,0) too.
         *     The default anchor point is (0.5,0.5), so it starts at the center of the node.
         *
         * @function
         * @param {cc.Point} point The anchor point of node or The x axis anchor of node.
         * @param {Number} [y] The y axis anchor of node.
         */
        public setAnchorPoint(point:Point|number, y?:number):void;


        /**
         * Enable or disable cascade color, if cascade enabled, child nodes' opacity will be the cascade value of parent color and its own color.
         * @param {boolean} cascadeColorEnabled
         */
        public setCascadeColorEnabled(cascadeColorEnabled:boolean):void;

        /**
         * Enable or disable cascade opacity, if cascade enabled, child nodes' opacity will be the multiplication of parent opacity and its own opacity.
         * @function
         * @param {boolean} cascadeOpacityEnabled
         */
        public setCascadeOpacityEnabled(cascadeOpacityEnabled:boolean):void;

        /**
         * Sets the color of Node.
         * When color doesn't include opacity value like cc.color(128,128,128), this function only change the color.
         * When color include opacity like cc.color(128,128,128,100), then this function will change the color and the opacity.
         * @function
         * @param {cc.Color} color The new color given
         */
        public setColor(color:Color):void;

        /**
         *
         *     Sets the untransformed size of the node.
         *
         *     The contentSize remains the same no matter the node is scaled or rotated.
         *     All nodes has a size. Layer and Scene has the same size of the screen.
         *
         * @function
         * @param {Number} size The untransformed size's width of the node.
         * @param {Number} [height] The untransformed size's height of the node.
         */
        public setContentSize(size:Size|number, height?:number):void;

        /**
         * Defines the oder in which the nodes are renderer.
         * Nodes that have a Global Z Order lower, are renderer first.
         *
         * In case two or more nodes have the same Global Z Order, the oder is not guaranteed.
         * The only exception if the Nodes have a Global Z Order == 0. In that case, the Scene Graph order is used.
         *
         * By default, all nodes have a Global Z Order = 0. That means that by default, the Scene Graph order is used to render the nodes.
         *
         * Global Z Order is useful when you need to render nodes in an order different than the Scene Graph order.
         *
         * Limitations: Global Z Order can't be used used by Nodes that have SpriteBatchNode as one of their ancestors.
         * And if ClippingNode is one of the ancestors, then "global Z order" will be relative to the ClippingNode.
         * @function
         * @param {Number} globalZOrder
         */
        public setGlobalZOrder(globalZOrder:number):void;

        /**
         * Sets the state of OpenGL server side.
         * @function
         * @param {Number} state The state of OpenGL server side.
         * @deprecated since v3.0, no need anymore
         */
        public setGLServerState(state:number):void;

        /**
         *  LocalZOrder is the 'key' used to sort the node relative to its siblings.
         *
         * The Node's parent will sort all its children based ont the LocalZOrder value.
         * If two nodes have the same LocalZOrder, then the node that was added first to the children's array
         * will be in front of the other node in the array.
         *
         * Also, the Scene Graph is traversed using the "In-Order" tree traversal algorithm ( http://en.wikipedia.org/wiki/Tree_traversal#In-order )
         *
         * And Nodes that have LocalZOder values < 0 are the "left" subtree
         * While Nodes with LocalZOder >=0 are the "right" subtree.
         * @function
         * @param {Number} localZOrder
         */
        public setLocalZOrder(localZOrder:number):void;

        /**
         * Changes the name that is used to identify the node easily.
         * @function
         * @param {String} name
         */
        public setName(name:string):void;

        /**
         * TODO: Update this with an explanation of this method's purpose/functionality.
         */
        public setNodeDirty():void;

        /**
         *
         * Sets the position (x,y) using values between 0 and 1.
         * The positions in pixels is calculated like the following:
         *   _position = _normalizedPosition * parent.getContentSize()
         *
         * @param {cc.Point} pos
         */
        public setNormalizedPosition(pos:Point):void;

        /**
         *
         * Sets the position (x,y) using values between 0 and 1.
         * The positions in pixels is calculated like the following:
         *   _position = _normalizedPosition * parent.getContentSize()
         *
         * @param {Number} x
         * @param {Number} y
         */
        public setNormalizedPosition(x:number, y:number):void;

        /**
         * Sets the opacity of Node
         * @function
         * @param {Number} opacity
         */
        public setOpacity(opacity:number):void;

        /**
         * Set whether color should be changed with the opacity value,
         * useless in cc.Node, but this function is override in some class to have such behavior.
         * @function
         * @param {Boolean} opacityValue
         */
        public setOpacityModifyRGB(opacityValue:boolean):void;

        /**
         *
         *     Sets the arrival order when this node has a same ZOrder with other children.
         *
         *     A node which called addChild subsequently will take a larger arrival order,
         *     If two children have the same Z order, the child with larger arrival order will be drawn later.
         *
         * @function
         * @warning This method is used internally for zOrder sorting, don't change this manually
         * @param {Number} order  The arrival order.
         */
        public setOrderOfArrival(order:number):void;

        /**
         * Sets the parent node
         * @param {cc.Node} parent A reference to the parent node
         */
        public setParent(parent:Node):void;

        /**
         *
         *     Changes the position (x,y) of the node in cocos2d coordinates.
         *     The original point (0,0) is at the left-bottom corner of screen.
         *     Usually we use cc.p(x,y) to compose CCPoint object.
         *     and Passing two numbers (x,y) is more efficient than passing CCPoint object.
         *
         * @function
         * @param {cc.Point} point The position (x,y) of the node in coordinates or the X coordinate for position
         * @param {Number} [y] The Y coordinate for position
         * @example
         *    var size = cc.winSize;
         *    node.setPosition(size.width/2, size.height/2);
         */
        public setPosition(point:Point|number, y?:number):void;

        /**
         * Sets the x axis position of the node in cocos2d coordinates.
         * @function
         * @param {Number} x The new position in x axis
         */
        public setPositionX(x:number):void;

        /**
         * Sets the y axis position of the node in cocos2d coordinates.
         * @function
         * @param {Number} y The new position in y axis
         */
        public setPositionY(y:number):void;

        /**
         *
         *     Sets the rotation (angle) of the node in degrees.
         *
         *      0 is the default rotation angle.
         *      Positive values rotate node clockwise, and negative values for anti-clockwise.
         *
         * @function
         * @param {Number} degrees The rotation of the node in degrees.
         */
        public setRotation(degrees:number):void;

        /**
         *
         *     Sets the X rotation (angle) of the node in degrees which performs a horizontal rotational skew.
         *     (support only in WebGL rendering mode)
         *     0 is the default rotation angle.
         *     Positive values rotate node clockwise, and negative values for anti-clockwise.
         *
         * @param {Number} degrees The X rotation in degrees which performs a horizontal rotational skew.
         */
        public setRotationX(degrees:number):void;

        /**
         *
         *    Sets the Y rotation (angle) of the node in degrees which performs a vertical rotational skew.
         *    (support only in WebGL rendering mode)
         *    0 is the default rotation angle.
         *    Positive values rotate node clockwise, and negative values for anti-clockwise.
         *
         * @param degrees The Y rotation in degrees.
         */
        public setRotationY(degrees:number):void;

        /**
         * Uniformly modifies both the X and Y scale values. 1.0 is the default scale factor.
         * @function
         * @param {Number} scale
         */
        public setScale(scale:number):void;

        /**
         * Sets the scale factor of the node. 1.0 is the default scale factor. This function can modify the X and Y scale at the same time.
         * @function
         * @param {Number} scaleX
         * @param {Number} scaleY
         */
        public setScale(scaleX:number, scaleY:number):void;

        /**
         *
         *     Changes the scale factor on X axis of this node
         *     The default value is 1.0 if you haven't changed it before
         *
         * @function
         * @param {Number} scale The scale factor on X axis.
         */
        public setScaleX(scale:number):void;

        /**
         *
         *     Changes the scale factor on Y axis of this node
         *     The Default value is 1.0 if you haven't changed it before.
         *
         * @function
         * @param {Number} scale The scale factor on Y axis.
         */
        public setScaleY(scale:number):void;

        /**
         *
         *   Sets a CCScheduler object that is used to schedule all "updates" and timers.
         *   IMPORTANT: If you set a new cc.Scheduler, then previously created timers/update are going to be removed.
         *
         * @function
         * @warning If you set a new CCScheduler, then previously created timers/update are going to be removed.
         * @param scheduler A cc.Scheduler object that is used to schedule all "update" and timers.
         */
        public setScheduler(scheduler:Scheduler):void;

        /**
         *
         *     Sets the shader program for this node
         *
         *     Since v2.0, each rendering node must set its shader program.
         *     It should be set in initialize phase.
         *
         * @function
         * @param {cc.GLProgram} newShaderProgram The shader program which fetches from CCShaderCache.
         * @example
         * node.setGLProgram(cc.shaderCache.programForKey(cc.SHADER_POSITION_TEXTURECOLOR));
         *
         * TODO: Uncomment once GLProgram is defined.
         */
        //setShaderProgram(newShaderProgram:GLProgram):void;

        /**
         *
         * Changes the X skew angle of the node in degrees.
         *
         * This angle describes the shear distortion in the X direction.
         * Thus, it is the angle between the Y axis and the left edge of the shape
         * The default skewX angle is 0. Positive values distort the node in a CW direction.
         *
         * @function
         * @param {Number} angle The X skew angle of the node in degrees.
         */
        public setSkewX(angle:number):void;

        /**
         *
         * Changes the Y skew angle of the node in degrees.
         *
         * This angle describes the shear distortion in the Y direction.
         * Thus, it is the angle between the X axis and the bottom edge of the shape
         * The default skewY angle is 0. Positive values distort the node in a CCW direction.
         *
         * @function
         * @param {Number} angle The Y skew angle of the node in degrees.
         */
        public setSkewY(angle:number):void;

        /**
         * Changes the tag that is used to identify the node easily.
         * Please refer to getTag for the sample code.
         * @function
         * @see cc.Node#getTag
         * @param {Number} tag A integer that identifies the node.
         */
        public setTag(tag:number):void;

        /**
         *
         *    Sets a custom user data reference
         *    You can set everything in UserData reference, a data block, a structure or an object, etc.
         *
         * @function
         * @warning Don't forget to release the memory manually in JSB, especially before you change this data pointer, and before this node is autoreleased.
         * @param {object} data A custom user data
         */
        public setUserData(data:any):void;

        /**
         *
         *      Sets a user assigned cocos2d object
         *      Similar to UserData, but instead of holding all kinds of data it can only hold a cocos2d object
         *      In JSB, the UserObject will be retained once in this method, and the previous UserObject (if existed) will be release.
         *      The UserObject will be released in CCNode's destruction.
         *
         * @param {object} obj A user cocos2d object
         */
        public setUserObject(obj:any):void;

        /**
         *
         *     Sets the real WebGL Z vertex.
         *
         *      Differences between openGL Z vertex and cocos2d Z order:
         *      - WebGL Z modifies the Z vertex, and not the Z order in the relation between parent-children
         *      - WebGL Z might require to set 2D projection
         *      - cocos2d Z order works OK if all the nodes uses the same WebGL Z vertex. eg: vertexZ = 0
         *
         *      @warning Use it at your own risk since it might break the cocos2d parent-children z order
         *
         * @function
         * @param {Number} angle
         */
        public setVertexZ(angle:number):void;

        /**
         * Sets whether the node is visible
         * The default value is true
         * @function
         * @param {Boolean} visible Pass true to make the node visible, false to hide the node.
         */
        public setVisible(visible:boolean):void;

        /**
         *
         *     Sets the Z order which stands for the drawing order, and reorder this node in its parent's children array.
         *
         *      The Z order of node is relative to its "brothers": children of the same parent.
         *      It's nothing to do with OpenGL's z vertex. This one only affects the draw order of nodes in cocos2d.
         *      The larger number it is, the later this node will be drawn in each message loop.
         *      Please refer to setVertexZ(float) for the difference.
         *
         * @function
         * @param {Number} z Z order of this node.
         * @deprecated since 3.0, please use setLocalZOrder instead
         */
        public setZOrder(z:number):void;

        /**
         *
         *     Sorts the children array once before drawing, instead of every time when a child is added or reordered.
         *     This approach can improves the performance massively.
         *
         * @function
         * @note Don't call this manually unless a child added needs to be removed in the same frame
         */
        public sortAllChildren():void;

        /**
         * Stops and removes an action from the running action list.
         * @function
         * @param {cc.Action} action An action object to be removed.
         */
        public stopAction(action:Action):void;

        /**
         * Removes an action from the running action list by its tag.
         * @function
         * @param {Number} tag A tag that indicates the action to be removed.
         */
        public stopActionByTag(tag:number):void;

        /**
         * Stops and removes all actions from the running action list .
         * @function
         */
        public stopAllActions():void;

        /**
         * Performs view-matrix transformation based on position, scale, rotation and other attributes.
         * @function
         * @param {cc.Node.RenderCmd} parentCmd parent's render command
         * @param {boolean} recursive whether call its children's transform
         */
        public transform(parentCmd:Node.RenderCmd, recursive:boolean):void;

        // TODO: The comments say to never call this externally, but it's not marked as private (no '_' prefix).
        //       Determine whether or not this should be exposed, and if not, remove it.
        //       For now though, leave it commented out.
        // Internal use only, do not call it by yourself,
        //transformAncestors():void;

        /**
         * unschedules a custom callback function.
         * @function
         * @see cc.Node#schedule
         * @param {function} callback_fn  A function wrapped as a selector
         */
        public unschedule(callback_fn:(arg?:any) => void):void;

        /**
         * unschedule all scheduled callback functions: custom callback functions, and the 'update' callback function.
         * Actions are not affected by this method.
         * @function
         */
        public unscheduleAllCallbacks():void;

        /**
         * Unschedules the "update" method.
         * @function
         * @see cc.Node#scheduleUpdate
         */
        public unscheduleUpdate():void;

        /**
         * Update will be called automatically every frame if "scheduleUpdate" is called when the node is "live".
         * The default behavior is to invoke the visit function of node's componentContainer.
         * Override me to implement your own update logic.
         * @function
         * @param {Number} dt Delta time since last update
         */
        public update(dt:number):void;

        /**
         * Update the displayed color of Node
         * @function
         * @param {cc.Color} parentColor
         */
        public updateDisplayedColor(parentColor:Color):void;

        /**
         * Update displayed opacity
         * @function
         * @param {Number} parentOpacity
         */
        public updateDisplayedOpacity(parentOpacity:number):void;

        /**
         *
         * Calls children's updateTransform() method recursively.
         *
         * This method is moved from CCSprite, so it's no longer specific to CCSprite.
         * As the result, you apply CCSpriteBatchNode's optimization on your customed CCNode.
         * e.g., batchNode->addChild(myCustomNode), while you can only addChild(sprite) before.
         *
         * @function
         */
        public updateTransform():void;

        /**
         * Recursive method that visit its children and draw them
         * @function
         * @param {cc.Node.RenderCmd} parentCmd
         */
        public visit(parentCmd:Node.RenderCmd):void;

        /**
         * @function
         * @deprecated since v3.0, please use getWorldToNodeTransform instead
         */
        public worldToNodeTransform():AffineTransform;
    }


    // +--------------------------------------------------------------------------------
    // + File: cocos2d/core/base-nodes/CCAtlasNode.js
    // +--------------------------------------------------------------------------------
    /**
     * <p>cc.AtlasNode is a subclass of cc.Node, it knows how to render a TextureAtlas object. </p>
     *
     * <p>If you are going to render a TextureAtlas consider subclassing cc.AtlasNode (or a subclass of cc.AtlasNode)</p>
     *
     * <p>All features from cc.Node are valid</p>
     *
     * <p>You can create a cc.AtlasNode with an Atlas file, the width, the height of each item and the quantity of items to render</p>
     *
     * @class
     * @extends cc.Node
     *
     * @param {String} tile
     * @param {Number} tileWidth
     * @param {Number} tileHeight
     * @param {Number} itemsToRender
     * @example
     * var node = new cc.AtlasNode("pathOfTile", 16, 16, 1);
     *
     * @property {cc.Texture2D}     texture         - Current used texture
     * @property {cc.TextureAtlas}  textureAtlas    - Texture atlas for cc.AtlasNode
     * @property {Number}           quadsToDraw     - Number of quads to draw
     */
    export class AtlasNode extends Node {
        public texture:Texture2D;
        public textureAtlas:TextureAtlas;
        public quadsToDraw:number;

        /**
         * <p>Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.</p>
         * @param {String} tile
         * @param {Number} tileWidth
         * @param {Number} tileHeight
         * @param {Number} itemsToRender
         */
        public constructor(tile:string, tileWidth:number, tileHeight:number, itemsToRender:number);
        //public ctor(tile?:string, tileWidth?:number, tileHeight?:number, itemsToRender?:number):void;

        /**
         * Updates the Atlas (indexed vertex array).
         * Empty implementation, shall be overridden in subclasses
         * @function
         */
        public updateAtlasValues():void;

        /**
         * Get node's blend function
         * @function
         * @return {cc.BlendFunc}
         */
        public getBlendFunc():BlendFunc;

        /**
         * Set node's blend function
         * This function accept either cc.BlendFunc object or source value and destination value
         * @function
         * @param {Number | cc.BlendFunc} src
         * @param {Number} dst
         */
        public setBlendFunc(src:BlendFunc|number, dst?:number):void;

        /**
         * Set the atlas texture
         * @function
         * @param {cc.TextureAtlas} value The texture
         */
        public setTextureAtlas(value:TextureAtlas):void;

        /**
         * Get the atlas texture
         * @function
         * @return {cc.TextureAtlas}
         */
        public getTextureAtlas():TextureAtlas;

        /**
         * Get the number of quads to be rendered
         * @function
         * @return {Number}
         */
        public getQuadsToDraw():number;

        /**
         * Set the number of quads to be rendered
         * @function
         * @param {Number} quadsToDraw
         */
        public setQuadsToDraw(quadsToDraw:number):void;

        /**
         * Initializes an cc.AtlasNode object with an atlas texture file name, the width, the height of each tile and the quantity of tiles to render
         * @function
         * @param {String} tile             The atlas texture file name
         * @param {Number} tileWidth        The width of each tile
         * @param {Number} tileHeight       The height of each tile
         * @param {Number} itemsToRender    The quantity of tiles to be rendered
         * @return {Boolean}
         */
        public initWithTileFile(tile:string, tileWidth:number, tileHeight:number, itemsToRender:number):boolean;

        /**
         * Initializes an CCAtlasNode with an atlas texture, the width, the height of each tile and the quantity of tiles to render
         * @function
         * @param {cc.Texture2D} texture    The atlas texture
         * @param {Number} tileWidth        The width of each tile
         * @param {Number} tileHeight       The height of each tile
         * @param {Number} itemsToRender    The quantity of tiles to be rendered
         * @return {Boolean}
         */
        public initWithTexture(texture:Texture2D, tileWidth:number, tileHeight:number, itemsToRender:number):boolean;

        /**
         * Get the current texture
         * @function
         * @return {cc.Texture2D}
         */
        public getTexture():Texture2D;

        /**
         * Replace the current texture with a new one
         * @function
         * @param {cc.Texture2D} texture    The new texture
         */
        public setTexture(texture:Texture2D):void;
    }
}/// <reference path="../cocos2d-lib.d.ts" />

/****************************************************************************
 Copyright (c) 2011-2012 cocos2d-x.org
 Copyright (c) 2013-2014 Chukong Technologies Inc.

 http://www.cocos2d-x.org

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/


/**
 * The main namespace of Cocos2d-JS, all engine core classes, functions, properties and constants are defined in this namespace
 * @namespace
 * @name cc
 */
declare namespace cc {

    type LoadJsonCallback = (error:Error, json:{}) => void;

    export interface ConfigKey {
        engineDir:string;
        dependencies:string;
        debugMode:string;
        showFPS:string;
        frameRate:string;
        id:string;
        renderMode:string;
        jsList:string;
        classReleaseMode:string;
    }

    // +-------------------- Variable Definitions --------------------+ //
    //export const director:Director;

    // +-------------------- Function Definitions --------------------+ //

    /**
     * A string tool to construct a string with format string.
     * for example:
     *      cc.formatStr("a: %d, b: %b", a, b);
     *      cc.formatStr(a, b, c);
     * @returns {String}
     */
    export function formatStr(...args:any[]):string;

    export function log(...args:any[]):void;

    export function warn(...args:any[]):void;

    export function error(...args:any[]):void;

    export function assert(test:boolean, msg:string):void;

    export function newElement(x);

    // export function _addEventListener(element, type, listener, useCapture);

    /**
     * Iterate over an object or an array, executing a function for each matched element.
     * @param {object|array} obj
     * @param {function} iterator
     * @param {object} [context]
     */
    export function each(obj:any, iterator:(ctx:any, prop:any, index:number) => boolean, context:any):void;

    /**
     * Copy all of the properties in source objects to target object and return the target object.
     * @param {object} target
     * @param {object|Array} sources
     * @returns {object}
     */
    export function extend(target:any):any;

    /**
     * Check the obj whether is function or not
     * @param {any} obj
     * @returns {boolean}
     */
    export function isFunction(obj:any):boolean;

    /**
     * Check the obj whether is number or not
     * @param {any} obj
     * @returns {boolean}
     */
    export function isNumber(obj:any):boolean;

    /**
     * Check the obj whether is string or not
     * @param {any} obj
     * @returns {boolean}
     */
    export function isString(obj:any):boolean;

    /**
     * Check the obj whether is array or not
     * @param {any} obj
     * @returns {boolean}
     */
    export function isArray(obj:any):boolean;

    /**
     * Check the obj whether is undefined or not
     * @param {any} obj
     * @returns {boolean}
     */
    export function isUndefined(obj:any):boolean

    /**
     * Check the obj whether is object or not
     * @param {*} obj
     * @returns {boolean}
     */
    export function isObject(obj:any):boolean;

    /**
     * Check the url whether cross origin
     * @param {String} url
     * @returns {boolean}
     */
    export function isCrossOrigin(url:string):boolean;

    // +-------------------- Class Definitions --------------------+ //

    /**
     * Async Pool class, a helper of cc.async
     * @param {Object|Array} srcObj
     * @param {Number} limit the limit of parallel number
     * @param {function} iterator
     * @param {function} onEnd
     * @param {object} target
     * @constructor
     */
    export class AsyncPool {
        constructor(srcObj:any, limit:number, iterator:() => void, onEnd:() => void, target:any);

        onIterator(iterator:any, target:any):void;

        onEnd(endCb:any, endCbTarget:any):void;

        flow():void;
    }

    /**
     * @class
     */
    export namespace async {
        /**
         * Do tasks series.
         * @param {Array|Object} tasks
         * @param {function} [cb] callback
         * @param {Object} [target]
         * @return {cc.AsyncPool}
         */
        export function series(tasks:any, cb:any, target:any):AsyncPool;

        /**
         * Do tasks parallel.
         * @param {Array|Object} tasks
         * @param {function} cb callback
         * @param {Object} [target]
         * @return {cc.AsyncPool}
         */
        export function parallel(tasks:any, cb:any, target:any):AsyncPool;

        /**
         * Do tasks waterfall.
         * @param {Array|Object} tasks
         * @param {function} cb callback
         * @param {Object} [target]
         * @return {cc.AsyncPool}
         */
        export function waterfall(tasks:any, cb:any, target:any):AsyncPool;

        /**
         * Do tasks by iterator.
         * @param {Array|Object} tasks
         * @param {function|Object} iterator
         * @param {function} [callback]
         * @param {Object} [target]
         * @return {cc.AsyncPool}
         */
        export function map(tasks:any, iterator:any, callback:any, target:any):AsyncPool;

        /**
         * Do tasks by iterator limit.
         * @param {Array|Object} tasks
         * @param {Number} limit
         * @param {function} iterator
         * @param {function} cb callback
         * @param {AsyncPool} [target]
         */
        export function mapLimit(tasks:any, limit:any, iterator:any, cb:any, target:any):AsyncPool;
    }

    /**
     * @class
     */
    export namespace path {

        // Is there a built-in RegEx type in TypeScript
        //normalizeRE: /[^\.\/]+\/\.\.\//,


        /**
         * Join strings to be a path.
         * @example
         cc.path.join("a", "b.png");//-->"a/b.png"
         cc.path.join("a", "b", "c.png");//-->"a/b/c.png"
         cc.path.join("a", "b");//-->"a/b"
         cc.path.join("a", "b", "/");//-->"a/b/"
         cc.path.join("a", "b/", "/");//-->"a/b/"
         * @returns {string}
         */
        export function join():string;

        /**
         * Get the ext name of a path.
         * @example
         cc.path.extname("a/b.png");//-->".png"
         cc.path.extname("a/b.png?a=1&b=2");//-->".png"
         cc.path.extname("a/b");//-->null
         cc.path.extname("a/b?a=1&b=2");//-->null
         * @param {string} pathStr
         * @returns {*}
         */
        export function extname(pathStr:string):string;

        /**
         * Get the main name of a file name
         * @param {string} fileName
         * @returns {string}
         */
        export function mainFileName(fileName:string):string;

        /**
         * Get the file name of a file path.
         * @example
         cc.path.basename("a/b.png");//-->"b.png"
         cc.path.basename("a/b.png?a=1&b=2");//-->"b.png"
         cc.path.basename("a/b.png", ".png");//-->"b"
         cc.path.basename("a/b.png?a=1&b=2", ".png");//-->"b"
         cc.path.basename("a/b.png", ".txt");//-->"b.png"
         * @param {string} pathStr
         * @param {string} [extname]
         * @returns {*}
         */
        export function basename(pathStr:string, extname:string):string;

        /**
         * Get dirname of a file path.
         * @example
         * unix
         cc.path.driname("a/b/c.png");//-->"a/b"
         cc.path.driname("a/b/c.png?a=1&b=2");//-->"a/b"
         cc.path.dirname("a/b/");//-->"a/b"
         cc.path.dirname("c.png");//-->""
         * windows
         cc.path.driname("a\\b\\c.png");//-->"a\b"
         cc.path.driname("a\\b\\c.png?a=1&b=2");//-->"a\b"
         * @param {string} pathStr
         * @returns {*}
         */
        export function dirname(pathStr:string):string;

        /**
         * Change extname of a file path.
         * @example
         cc.path.changeExtname("a/b.png", ".plist");//-->"a/b.plist"
         cc.path.changeExtname("a/b.png?a=1&b=2", ".plist");//-->"a/b.plist?a=1&b=2"
         * @param {string} pathStr
         * @param {string} [extname]
         * @returns {string}
         */
        export function changeExtname(pathStr:string, extname:string):string;

        /**
         * Change file name of a file path.
         * @example
         cc.path.changeBasename("a/b/c.plist", "b.plist");//-->"a/b/b.plist"
         cc.path.changeBasename("a/b/c.plist?a=1&b=2", "b.plist");//-->"a/b/b.plist?a=1&b=2"
         cc.path.changeBasename("a/b/c.plist", ".png");//-->"a/b/c.png"
         cc.path.changeBasename("a/b/c.plist", "b");//-->"a/b/b"
         cc.path.changeBasename("a/b/c.plist", "b", true);//-->"a/b/b.plist"
         * @param {String} pathStr
         * @param {String} basename
         * @param {Boolean} [isSameExt]
         * @returns {string}
         */
        export function changeBasename(pathStr:string, basename:string, isSameExt:boolean):string;
    }

    /**
     * Loader for resource loading process. It's a singleton object.
     * @class
     */
        //export class loader {
    export namespace loader {
        //_jsCache: {},//cache for js
        //_register: {},//register of loaders
        //_langPathCache: {},//cache for lang path
        //_aliases: {},//aliases for res url
        //
        //resPath: "",//root path of resource
        //audioPath: "",//root path of audio
        //cache: {},//cache for data loaded

        /**
         * Get XMLHttpRequest.
         * @returns {XMLHttpRequest}
         */
        export function getXMLHttpRequest():XMLHttpRequest;

        //@MODE_BEGIN DEV

        /**
         * Load js files.
         * If the third parameter doesn't exist, then the baseDir turns to be "".
         *
         * @param {string} [baseDir]   The pre path for jsList or the list of js path.
         * @param {array} jsList    List of js path.
         * @param {function} [cb]  Callback function
         * @returns {*}
         */
        export function loadJs(baseDir:string, jsList:string[], cb:any):void;

        /**
         * Load js width loading image.
         *
         * @param {string} [baseDir]
         * @param {array} jsList
         * @param {function} [cb]
         */
        export function loadJsWithImg(baseDir:string, jsList:string[], cb:any):void;

        /**
         * Load a single resource as txt.
         * @param {string} url
         * @param {function} [cb] arguments are : err, txt
         */
        export function loadTxt(url:string, cb:any):void;

        export function loadCsb(url:string, cb:any):void;

        /**
         * Load a single resource as json.
         * @param {string} url
         * @param {LoadJsonCallback} [cb] arguments are : err, json
         */
        export function loadJson(url:string, cb?:LoadJsonCallback):void;

        /**
         * TODO: Uncomment this when Image is defined
         * Load a single image.
         * @param {!string} url
         * @param {object} [option]
         * @param {function} callback
         * @returns {Image}
         */
        //loadImg(url:string, option:any, callback:any):Image;

        /**
         * Get url with basePath.
         * @param {string} basePath
         * @param {string} [url]
         * @returns {*}
         */
        export function getUrl(basePath:string, url:string):string;

        /**
         * Load resources then call the callback.
         * @param {string} resources
         * @param {function} [option] callback or trigger
         * @param {function|Object} [loadCallback]
         * @return {cc.AsyncPool}
         */
        export function load(resources:string, option:any, loadCallback:any):AsyncPool;

        /**
         * <p>
         *     Loads alias map from the contents of a filename.                                        <br/>
         *                                                                                                                 <br/>
         *     @note The plist file name should follow the format below:                                                   <br/>
         *     <?xml version="1.0" encoding="UTF-8"?>                                                                      <br/>
         *         <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">  <br/>
         *             <plist version="1.0">                                                                               <br/>
         *                 <dict>                                                                                          <br/>
         *                     <key>filenames</key>                                                                        <br/>
         *                     <dict>                                                                                      <br/>
         *                         <key>sounds/click.wav</key>                                                             <br/>
         *                         <string>sounds/click.caf</string>                                                       <br/>
         *                         <key>sounds/endgame.wav</key>                                                           <br/>
         *                         <string>sounds/endgame.caf</string>                                                     <br/>
         *                         <key>sounds/gem-0.wav</key>                                                             <br/>
         *                         <string>sounds/gem-0.caf</string>                                                       <br/>
         *                     </dict>                                                                                     <br/>
         *                     <key>metadata</key>                                                                         <br/>
         *                     <dict>                                                                                      <br/>
         *                         <key>version</key>                                                                      <br/>
         *                         <integer>1</integer>                                                                    <br/>
         *                     </dict>                                                                                     <br/>
         *                 </dict>                                                                                         <br/>
         *              </plist>                                                                                           <br/>
         * </p>
         * @param {String} url  The plist file name.
         * @param {Function} [callback]
         */
        export function loadAliases(url:string, callback:any):void;

        /**
         * Register a resource loader into loader.
         * @param {string} extNames
         * @param {function} loader
         */
        export function register(extNames:string, loader:any):void;

        /**
         * Get resource data by url.
         * @param url
         * @returns {*}
         */
        export function getRes(url:string):any;

        /**
         * Release the cache of resource by url.
         * @param url
         */
        export function release(url:string):void;

        /**
         * Resource cache of all resources.
         */
        export function releaseAll():void;
    }


    /**
     * create a webgl context
     * @param {HTMLCanvasElement} canvas
     * @param {Object} opt_attribs
     * @return {WebGLRenderingContext}
     */
    export function create3DContext(canvas:HTMLCanvasElement, opt_attribs:any):WebGLRenderingContext;

    /**
     * System variables
     * @namespace
     * @name cc.sys
     */
    export namespace sys {
        /**
         * English language code
         * @memberof cc.sys
         * @name LANGUAGE_ENGLISH
         * @constant
         * @type {Number}
         */
        export const LANGUAGE_ENGLISH:string;

        /**
         * Chinese language code
         * @memberof cc.sys
         * @name LANGUAGE_CHINESE
         * @constant
         * @type {Number}
         */
        export const LANGUAGE_CHINESE:string;

        /**
         * French language code
         * @memberof cc.sys
         * @name LANGUAGE_FRENCH
         * @constant
         * @type {Number}
         */
        export const LANGUAGE_FRENCH:string;

        /**
         * Italian language code
         * @memberof cc.sys
         * @name LANGUAGE_ITALIAN
         * @constant
         * @type {Number}
         */
        export const LANGUAGE_ITALIAN:string;

        /**
         * German language code
         * @memberof cc.sys
         * @name LANGUAGE_GERMAN
         * @constant
         * @type {Number}
         */
        export const LANGUAGE_GERMAN:string;

        /**
         * Spanish language code
         * @memberof cc.sys
         * @name LANGUAGE_SPANISH
         * @constant
         * @type {Number}
         */
        export const LANGUAGE_SPANISH:string;

        /**
         * Spanish language code
         * @memberof cc.sys
         * @name LANGUAGE_DUTCH
         * @constant
         * @type {Number}
         */
        export const LANGUAGE_DUTCH:string;

        /**
         * Russian language code
         * @memberof cc.sys
         * @name LANGUAGE_RUSSIAN
         * @constant
         * @type {Number}
         */
        export const LANGUAGE_RUSSIAN:string;

        /**
         * Korean language code
         * @memberof cc.sys
         * @name LANGUAGE_KOREAN
         * @constant
         * @type {Number}
         */
        export const LANGUAGE_KOREAN:string;

        /**
         * Japanese language code
         * @memberof cc.sys
         * @name LANGUAGE_JAPANESE
         * @constant
         * @type {Number}
         */
        export const LANGUAGE_JAPANESE:string;

        /**
         * Hungarian language code
         * @memberof cc.sys
         * @name LANGUAGE_HUNGARIAN
         * @constant
         * @type {Number}
         */
        export const LANGUAGE_HUNGARIAN:string;

        /**
         * Portuguese language code
         * @memberof cc.sys
         * @name LANGUAGE_PORTUGUESE
         * @constant
         * @type {Number}
         */
        export const LANGUAGE_PORTUGUESE:string;

        /**
         * Arabic language code
         * @memberof cc.sys
         * @name LANGUAGE_ARABIC
         * @constant
         * @type {Number}
         */
        export const LANGUAGE_ARABIC:string;

        /**
         * Norwegian language code
         * @memberof cc.sys
         * @name LANGUAGE_NORWEGIAN
         * @constant
         * @type {Number}
         */
        export const LANGUAGE_NORWEGIAN:string;

        /**
         * Polish language code
         * @memberof cc.sys
         * @name LANGUAGE_POLISH
         * @constant
         * @type {Number}
         */
        export const LANGUAGE_POLISH:string;

        /**
         * @memberof cc.sys
         * @name OS_IOS
         * @constant
         * @type {string}
         */
        export const OS_IOS:string;

        /**
         * @memberof cc.sys
         * @name OS_ANDROID
         * @constant
         * @type {string}
         */
        export const OS_ANDROID:string;

        /**
         * @memberof cc.sys
         * @name OS_WINDOWS
         * @constant
         * @type {string}
         */
        export const OS_WINDOWS:string;

        /**
         * @memberof cc.sys
         * @name OS_MARMALADE
         * @constant
         * @type {string}
         */
        export const OS_MARMALADE:string;

        /**
         * @memberof cc.sys
         * @name OS_LINUX
         * @constant
         * @type {string}
         */
        export const OS_LINUX:string;

        /**
         * @memberof cc.sys
         * @name OS_BADA
         * @constant
         * @type {string}
         */
        export const OS_BADA:string;

        /**
         * @memberof cc.sys
         * @name OS_BLACKBERRY
         * @constant
         * @type {string}
         */
        export const OS_BLACKBERRY:string;

        /**
         * @memberof cc.sys
         * @name OS_OSX
         * @constant
         * @type {string}
         */
        export const OS_OSX:string;

        /**
         * @memberof cc.sys
         * @name OS_WP8
         * @constant
         * @type {string}
         */
        export const OS_WP8:string;

        /**
         * @memberof cc.sys
         * @name OS_WINRT
         * @constant
         * @type {string}
         */
        export const OS_WINRT:string;

        /**
         * @memberof cc.sys
         * @name OS_UNKNOWN
         * @constant
         * @type {string}
         */
        export const OS_UNKNOWN:string;

        /**
         * @memberof cc.sys
         * @name UNKNOWN
         * @constant
         * @default
         * @type {Number}
         */
        export const UNKNOWN:number;

        /**
         * @memberof cc.sys
         * @name WIN32
         * @constant
         * @default
         * @type {Number}
         */
        export const WIN32:number;

        /**
         * @memberof cc.sys
         * @name LINUX
         * @constant
         * @default
         * @type {Number}
         */
        export const LINUX:number;

        /**
         * @memberof cc.sys
         * @name MACOS
         * @constant
         * @default
         * @type {Number}
         */
        export const MACOS:number;

        /**
         * @memberof cc.sys
         * @name ANDROID
         * @constant
         * @default
         * @type {Number}
         */
        export const ANDROID:number;

        /**
         * @memberof cc.sys
         * @name IOS
         * @constant
         * @default
         * @type {Number}
         */
        export const IPHONE:number;

        /**
         * @memberof cc.sys
         * @name IOS
         * @constant
         * @default
         * @type {Number}
         */
        export const IPAD:number;

        /**
         * @memberof cc.sys
         * @name BLACKBERRY
         * @constant
         * @default
         * @type {Number}
         */
        export const BLACKBERRY:number;

        /**
         * @memberof cc.sys
         * @name NACL
         * @constant
         * @default
         * @type {Number}
         */
        export const NACL:number;

        /**
         * @memberof cc.sys
         * @name EMSCRIPTEN
         * @constant
         * @default
         * @type {Number}
         */
        export const EMSCRIPTEN:number;

        /**
         * @memberof cc.sys
         * @name TIZEN
         * @constant
         * @default
         * @type {Number}
         */
        export const TIZEN:number;

        /**
         * @memberof cc.sys
         * @name WINRT
         * @constant
         * @default
         * @type {Number}
         */
        export const WINRT:number;

        /**
         * @memberof cc.sys
         * @name WP8
         * @constant
         * @default
         * @type {Number}
         */
        export const WP8:number;

        /**
         * @memberof cc.sys
         * @name MOBILE_BROWSER
         * @constant
         * @default
         * @type {Number}
         */
        export const MOBILE_BROWSER:number;

        /**
         * @memberof cc.sys
         * @name DESKTOP_BROWSER
         * @constant
         * @default
         * @type {Number}
         */
        export const DESKTOP_BROWSER:number;

        export const BROWSER_TYPE_WECHAT:string;
        export const BROWSER_TYPE_ANDROID:string;
        export const BROWSER_TYPE_IE:string;
        export const BROWSER_TYPE_QQ:string;
        export const BROWSER_TYPE_MOBILE_QQ:string;
        export const BROWSER_TYPE_UC:string;
        export const BROWSER_TYPE_360:string;
        export const BROWSER_TYPE_BAIDU_APP:string;
        export const BROWSER_TYPE_BAIDU:string;
        export const BROWSER_TYPE_MAXTHON:string;
        export const BROWSER_TYPE_OPERA:string;
        export const BROWSER_TYPE_OUPENG:string;
        export const BROWSER_TYPE_MIUI:string;
        export const BROWSER_TYPE_FIREFOX:string;
        export const BROWSER_TYPE_SAFARI:string;
        export const BROWSER_TYPE_CHROME:string;
        export const BROWSER_TYPE_LIEBAO:string;
        export const BROWSER_TYPE_QZONE:string;
        export const BROWSER_TYPE_SOUGOU:string;
        export const BROWSER_TYPE_UNKNOWN:string;

        /**
         * Is native ? This is set to be true in jsb auto.
         * @memberof cc.sys
         * @name isNative
         * @type {Boolean}
         */
        export const isNative:boolean;

        /**
         * Indicate whether system is mobile system
         * @memberof cc.sys
         * @name isMobile
         * @type {Boolean}
         */
        export const isMobile:boolean;

        /**
         * Indicate the running platform
         * @memberof cc.sys
         * @name platform
         * @type {Number}
         */
        export const platform:number;

        /**
         * Indicate the current language of the running system
         * @memberof cc.sys
         * @name language
         * @type {String}
         */
        export const language:string;

        /**
         * Indicate the running os name
         * @memberof cc.sys
         * @name os
         * @type {String}
         */
        export const os:string;

        /**
         * Indicate the running browser type
         * @memberof cc.sys
         * @name browserType
         * @type {String}
         */
        export const browserType:string;

        /**
         * Indicate the running browser version
         * @memberof cc.sys
         * @name browserVersion
         * @type {Number}
         */
        export const browserVersion:number;

        /**
         * Indicate the real pixel resolution of the whole game window
         * @memberof cc.sys
         * @name windowPixelResolution
         * @type {Number}
         */
        export const windowPixelResolution:number;

        export namespace localStorage {
            export function getItem(name:string):string;
            export function setItem(name:string, value:string):void;
            export function removeItem(name:string):void;
            export function clear():void;

            ///**
            // * cc.sys.localStorage is a local storage component.
            // * @memberof cc.sys
            // * @name localStorage
            // * @type {Object}
            // */
            //try {
            //    var localStorage = sys.localStorage = win.localStorage;
            //    localStorage.setItem("storage", "");
            //    localStorage.removeItem("storage");
            //    localStorage = null;
            //} catch (e) {
            //    var warn = function () {
            //        cc.warn("Warning: localStorage isn't enabled. Please confirm browser cookie or privacy option");
            //    }
            //    sys.localStorage = {
            //        getItem: warn,
            //        setItem: warn,
            //        removeItem: warn,
            //        clear: warn
            //    };
        }

        export namespace capabilities {
            //var capabilities = sys.capabilities = {"canvas": true};
            //if (cc._renderType === cc._RENDER_TYPE_WEBGL)
            //    capabilities["opengl"] = true;
            //if (docEle['ontouchstart'] !== undefined || doc['ontouchstart'] !== undefined || nav.msPointerEnabled)
            //    capabilities["touches"] = true;
            //if (docEle['onmouseup'] !== undefined)
            //    capabilities["mouse"] = true;
            //if (docEle['onkeyup'] !== undefined)
            //    capabilities["keyboard"] = true;
            //if (win.DeviceMotionEvent || win.DeviceOrientationEvent)
            //    capabilities["accelerometer"] = true;
        }

        /**
         * Forces the garbage collection, only available in JSB
         * @memberof cc.sys
         * @name garbageCollect
         * @function
         */
        export function garbageCollect():void;

        /**
         * Dumps rooted objects, only available in JSB
         * @memberof cc.sys
         * @name dumpRoot
         * @function
         */
        export function dumpRoot():void;

        /**
         * Restart the JS VM, only available in JSB
         * @memberof cc.sys
         * @name restartVM
         * @function
         */
        export function restartVM():void;

        /**
         * Clean a script in the JS VM, only available in JSB
         * @memberof cc.sys
         * @name cleanScript
         * @param {String} jsfile
         * @function
         */
        export function cleanScript(jsfile:string):void;

        /**
         * Check whether an object is valid,
         * In web engine, it will return true if the object exist
         * In native engine, it will return true if the JS object and the correspond native object are both valid
         * @memberof cc.sys
         * @name isObjectValid
         * @param {Object} obj
         * @return {boolean} Validity of the object
         * @function
         */
        export function isObjectValid(obj:any):boolean;

        /**
         * Dump system informations
         * @memberof cc.sys
         * @name dump
         * @function
         */
        export function dump():void;

        /**
         * Open a url in browser
         * @memberof cc.sys
         * @name openURL
         * @param {String} url
         */
        export function openURL(url:string):void;
    }

// +++++++++++++++++++++++++something about sys end+++++++++++++++++++++++++++++

// +++++++++++++++++++++++++something about CCGame begin+++++++++++++++++++++++++++

    /**
     * Device oriented vertically, home button on the bottom
     * @constant
     * @type {Number}
     */
    export const ORIENTATION_PORTRAIT:number;

    /**
     * Device oriented vertically, home button on the top
     * @constant
     * @type {Number}
     */
    export const ORIENTATION_PORTRAIT_UPSIDE_DOWN:number;

    /**
     * Device oriented horizontally, home button on the right
     * @constant
     * @type {Number}
     */
    export const ORIENTATION_LANDSCAPE_LEFT:number;

    /**
     * Device oriented horizontally, home button on the left
     * @constant
     * @type {Number}
     */
    export const ORIENTATION_LANDSCAPE_RIGHT:number;

    /**
     * @type {cc.EGLView}
     * @name cc.view
     * cc.view is the shared view object.
     */
    export const view:EGLView;

    /**
     * @type {cc.Director}
     * @name cc.director
     */
    export const director:Director;
    /**
     * @type {cc.Size}
     * @name cc.winSize
     * cc.winSize is the alias object for the size of the current game window.
     */
    export const winSize:Size;

    // Parsers
    export const saxParser:SAXParser;

    /**
     * @type {cc.PlistParser}
     * @name cc.plistParser
     * A Plist Parser
     */
    export const plistParser:PlistParser;

    /**
     * An object to boot the game.
     * @class
     * @name cc.game
     */
    //cc.game = /** @lends cc.game# */{
    export namespace game {
        export const DEBUG_MODE_NONE:number;
        export const DEBUG_MODE_INFO:number;
        export const DEBUG_MODE_WARN:number;
        export const DEBUG_MODE_ERROR:number;
        export const DEBUG_MODE_INFO_FOR_WEB_PAGE:number;
        export const DEBUG_MODE_WARN_FOR_WEB_PAGE:number;
        export const DEBUG_MODE_ERROR_FOR_WEB_PAGE:number;

        export const EVENT_HIDE:string;
        export const EVENT_SHOW:string;
        export const EVENT_RESIZE:string;

        ///**
        // * Key of config
        // * @constant
        // * @type {Object}
        // */
        export const CONFIG_KEY:ConfigKey;

        ///**
        // * Config of game
        // * @type {Object}
        // */
        //config: null,

        /**
         * Callback when the scripts of engine have been load.
         * @type {Function}
         */
        export function onStart();

        /**
         * Callback when game exits.
         * @type {Function}
         */
        export function onStop();

        /**
         * Set frameRate of game.
         * @param frameRate
         */
        export function setFrameRate(frameRate:number):void;

        /**
         * Restart game.
         */
        export function restart():void;

        /**
         * Run game.
         */
        export function run(id?:number):void;

        /**
         * Prepare game.
         * @param cb
         */
        export function prepare(cb?:() => void):void;
    }
}

declare module cc {
    ////////////////////////////////////////////////////////////////////////////////
    // File: cocos2d/core/cocoa/CCAffineTransform.js
    ////////////////////////////////////////////////////////////////////////////////

    // Function Definitions

    /**
     * Concatenate a transform matrix to another and return the result:
     * t' = t1 * t2
     * @function
     * @param {cc.AffineTransform} lhs The first transform object
     * @param {cc.AffineTransform} rhs The transform object to concatenate
     * @return {cc.AffineTransform} The result of concatenation
     */
    export function affineTransformConcat(lhs, rhs):AffineTransform;

    /**
     * Concatenate a transform matrix to another
     * The results are reflected in the first matrix.
     * t' = t1 * t2
     * @function
     * @param {cc.AffineTransform} lhs The first transform object
     * @param {cc.AffineTransform} rhs The transform object to concatenate
     * @return {cc.AffineTransform} The result of concatenation
     */
    export function affineTransformConcatIn(lhs, rhs):AffineTransform;

    /**
     * Return true if an affine transform equals to another, false otherwise.
     * @function
     * @param {cc.AffineTransform} lhs The first transform to compare
     * @param {cc.AffineTransform} rhs The second transform to compare
     * @return {Boolean}
     */
    export function affineTransformEqualToTransform(lhs:AffineTransform, rhs:AffineTransform):boolean;

    /**
     * Create a identity transformation matrix:
     * [ 1, 0, 0,
     *   0, 1, 0 ]
     * @function
     *
     * @return {cc.AffineTransform}
     * @deprecated since v3.0, please use cc.affineTransformMakeIdentity() instead
     * @see cc.affineTransformMakeIdentity
     */
    export function affineTransformIdentity():AffineTransform;

    /**
     * Get the invert transform of an AffineTransform object
     * @function
     * @param {cc.AffineTransform} xform The source transform
     * @return {cc.AffineTransform} The inverted transform object
     */
    export function affineTransformInvert(xform:AffineTransform):AffineTransform;

    /**
     * Create a cc.AffineTransform object with all contents in the matrix
     * @function
     *
     * @param {number} a
     * @param {number} b
     * @param {number} c
     * @param {number} d
     * @param {number} tx
     * @param {number} ty
     * @return {cc.AffineTransform}
     */
    export function affineTransformMake(a:number, b:number, c:number, d:number,
                                        tx:number, ty:number):AffineTransform;

    /**
     * Create a identity transformation matrix:
     * [ 1, 0, 0,
     *   0, 1, 0 ]
     * @function
     *
     * @return {cc.AffineTransform}
     */
    export function affineTransformMakeIdentity():AffineTransform;

    /**
     * Create a new affine transformation with a base transformation matrix and a rotation based on it.
     * @function
     * @param {cc.AffineTransform} xform The base affine transform object
     * @param {number} angle The angle to rotate
     * @return {cc.AffineTransform}
     */
    export function affineTransformRotate(xform:AffineTransform, angle:number):AffineTransform;

    /**
     * Create a new affine transformation with a base transformation matrix and a scale based on it.
     * @function
     * @param {cc.AffineTransform} xform The base affine transform object
     * @param {number} sx The scale on x axis
     * @param {number} sy The scale on y axis
     * @return {cc.AffineTransform}
     */
    export function affineTransformScale(xform:AffineTransform, sx:number, sy:number):AffineTransform;

    /**
     * Create a new affine transformation with a base transformation matrix and a translation based on it.
     * @function
     *
     * @param {cc.AffineTransform} xform The base affine transform object
     * @param {number} tx The translation on x axis
     * @param {number} ty The translation on y axis
     * @return {cc.AffineTransform}
     */
    export function affineTransformTranslate(xform:AffineTransform, tx:number, ty:number):AffineTransform;

    /**
     * Apply the affine transformation on a point.
     * @function
     *
     * @param {cc.Point|number} point
     * @param {cc.AffineTransform|number} xform transform matrix
     * @return {cc.Point}
     */
    export function pointApplyAffineTransform(point:Point, xform:AffineTransform):Point;

    /**
     * Apply the affine transformation on a point.
     * @function
     *
     * @param {cc.Point|number} x
     * @param {cc.AffineTransform|number} y
     * @param {cc.AffineTransform} xform
     * @return {cc.Point}
     */
    export function pointApplyAffineTransform(x:number, y:number, xform:AffineTransform):Point;

    /**
     * Apply the affine transformation on a rect.
     * @function
     *
     * @param {cc.Rect} rect
     * @param {cc.AffineTransform} xform
     * @return {cc.Rect}
     */
    export function rectApplyAffineTransform(rect:Rect, xform:AffineTransform):Rect;

    /**
     * Apply the affine transformation on a size.
     * @function
     *
     * @param {cc.Size} size
     * @param {cc.AffineTransform} xform
     * @return {cc.Size}
     */
    export function sizeApplyAffineTransformfunction(size:Size, xform:AffineTransform):Size;

    //+---------- Class Definitions ----------+//

    /**
     * cc.AffineTransform class represent an affine transform matrix. It's composed basically by translation, rotation, scale transformations.<br/>
     * Please do not use its constructor directly, use cc.affineTransformMake alias function instead.
     *
     * @class cc.AffineTransform
     * @param {number} a
     * @param {number} b
     * @param {number} c
     * @param {number} d
     * @param {number} tx
     * @param {number} ty
     * @see cc.affineTransformMake
     */
    export class AffineTransform {
        constructor(a:number, b:number, c:number, d:number, tx:number, ty:number);
    }

    ////////////////////////////////////////////////////////////////////////////////
    // File: cocos2d/core/cocoa/CCGeometry.js
    ////////////////////////////////////////////////////////////////////////////////

    // Function Definitions
    /**
     * Helper function that creates a cc.Point.
     * @function
     * @param {number|cc.Point} x a number or a point object
     * @param {number} y
     * @return {cc.Point}
     * @example
     * var point1 = cc.p();
     * var point2 = cc.p(100, 100);
     * var point3 = cc.p(point2);
     * var point4 = cc.p({x: 100, y: 100});
     */
    export function p(x:number, y:number):Point;

    /**
     * Check whether a point's value equals to another
     * @function
     * @param {cc.Point} lhs The first Point to compare
     * @param {cc.Point} rhs The second Point to compare
     * @return {Boolean}
     */
    export function pointEqualToPoint(lhs:Point, rhs:Point):boolean;

    /**
     * Helper function that creates a cc.Rect.
     * @function
     * @param {number|cc.Rect} x a number or a rect object
     * @param {number} y
     * @param {number} width
     * @param {number} height
     * @returns {cc.Rect}
     * @example
     * var rect1 = cc.rect();
     * var rect2 = cc.rect(100,100,100,100);
     * var rect3 = cc.rect(rect2);
     * var rect4 = cc.rect({x: 100, y: 100, width: 100, height: 100});
     */
    export function rect(x:Rect):Rect;
    export function rect(number, y:number, width:number, height:number):Rect;

    /**
     * Check whether a rect contains a point
     * @function
     * @param {cc.Rect} rect The source rect
     * @param {cc.Point} point The point to check
     * @return {Boolean}
     */
    export function rectContainsPoint(rect:Rect, point:Point):boolean;

    /**
     * Check whether the rect1 contains rect2
     * @function
     * @param {cc.Rect} outer The outer rect to compare
     * @param {cc.Rect} inner The inner rect to compare
     * @return {Boolean}
     */
    export function rectContainsRect(outer:Rect, inner:Rect):boolean;

    /**
     * Returns the rightmost x-value of a rect
     * @function
     * @param {cc.Rect} rect The source rect
     * @return {number} The rightmost x value
     */
    export function rectGetMaxX(rect:Rect):boolean;

    /**
     * Return the topmost y-value of a rect
     * @function
     * @param {cc.Rect} rect The source rect
     * @return {number} The topmost y value
     */
    export function rectGetMaxY(rect:Rect):boolean;

    /**
     * Return the midpoint x-value of a rect
     * @function
     * @param {cc.Rect} rect The source rect
     * @return {number} The midpoint x value
     */
    export function rectGetMidX(rect:Rect):boolean;

    /**
     * Return the midpoint y-value of `rect'
     * @function
     * @param {cc.Rect} rect The source rect
     * @return {number} The midpoint y value
     */
    export function rectGetMidY(rect:Rect):boolean;

    /**
     * Returns the leftmost x-value of a rect
     * @function
     * @param {cc.Rect} rect
     * @return {number} The leftmost x value
     */
    export function rectGetMinX(rect:Rect):boolean;

    /**
     * Return the bottommost y-value of a rect
     * @function
     * @param {cc.Rect} rect
     * @return {number} The bottommost y value
     */
    export function rectGetMinY(rect:Rect):boolean;

    /**
     * Check whether a rect's value equals to another
     * @function
     * @param {cc.Rect} lhs First rectangle to compare
     * @param {cc.Rect} rhs Second rectangle to compare
     * @return {Boolean}
     */
    export function rectEqualToRect(lhs:Rect, rhs:Rect):boolean;

    /**
     * Returns the overlapping portion of 2 rectangles
     * @function
     * @param {cc.Rect} lhs The first Rect to intersect
     * @param {cc.Rect} rhs The second Rect to intersect
     * @return {cc.Rect}
     */
    export function rectIntersection(lhs:Rect, rhs:Rect):Rect;

    /**
     * Check whether a rect intersect with another
     * @function
     * @param {cc.Rect} lhs
     * @param {cc.Rect} rhs
     * @return {Boolean}
     */
    export function rectIntersectsRect(lhs:Rect, rhs:Rect):boolean;

    /**
     * Check whether a rect overlaps another
     * @function
     * @param {cc.Rect} lhs The first Rect to compare
     * @param {cc.Rect} rhs The second Rect to compare
     * @return {Boolean}
     */
    export function rectOverlapsRect(lhs:Rect, rhs:Rect):boolean;

    /**
     * Returns the smallest rectangle that contains the two source rectangles.
     * @function
     * @param {cc.Rect} lhs The first Rect to union
     * @param {cc.Rect} rhs The second Rect to union
     * @return {cc.Rect}
     */
    export function rectUnion(lhs:Rect, rhs:Rect):Rect;

///**
// * Check whether all fields of a rect are 0
// * @function
// * @param {cc.Rect} rect Rectangle to compare
// * @return {Boolean}
// */
//export function _rectEqualToZero(rect: Rect): boolean;

    /**
     * Helper function that creates a cc.Size.
     * @function
     * @param {number|cc.Size} width width or a size object
     * @param {number} height height
     * @return {cc.Size}
     * @example
     * var size1 = cc.size();
     * var size2 = cc.size(100,100);
     * var size3 = cc.size(size2);
     * var size4 = cc.size({width: 100, height: 100});
     */
    export function size(width:number, height:number):Size;

    /**
     * Check whether a Size's value equals to another
     * @function
     * @param {cc.Size} lhs First size to compare
     * @param {cc.Size} rhs Second size to compare
     * @return {Boolean}
     */
    export function sizeEqualToSize(lhs:Size, rhs:Size):boolean;

// Class Definitions
    /**
     * cc.Point is the class for point object, please do not use its constructor to create points, use cc.p() alias function instead.
     * @class cc.Point
     * @param {number} x
     * @param {number} y
     * @see cc.p
     */
    export class Point {
        public x:number;
        public y:number;

        constructor(x:number, y:number);
    }

    /**
     * cc.Rect is the class for rect object, please do not use its constructor to create rects, use cc.rect() alias function instead.
     * @class cc.Rect
     * @param {number} width
     * @param {number} height
     * @see cc.rect
     */
    export class Rect {
        public x:number;
        public y:number;
        public width:number;
        public height:number;

        constructor(x:number, y:number, width:number, height:number);
    }

    /**
     * cc.Size is the class for size object, please do not use its constructor to create sizes, use cc.size() alias function instead.
     * @class cc.Size
     * @param {number} width
     * @param {number} height
     * @see cc.size
     */
    export class Size {
        public width:number;
        public height:number;

        constructor(width:number, height:number);
    }
}
/// <reference path="../cocos2d-lib.d.ts" />

declare namespace cc {
    ////////////////////////////////////////////////////////////////////////////////
    // File: cocos2d/core/CCActionManager.js
    ////////////////////////////////////////////////////////////////////////////////

    // Class Definitions
    /**
     * cc.ActionManager is a class that can manage actions.<br/>
     * Normally you won't need to use this class directly. 99% of the cases you will use the CCNode interface,
     * which uses this class's singleton object.
     * But there are some cases where you might need to use this class. <br/>
     * Examples:<br/>
     * - When you want to run an action where the target is different from a CCNode.<br/>
     * - When you want to pause / resume the actions<br/>
     * @class
     * @extends cc.Class
     * @example
     * var mgr = new cc.ActionManager();
     */
    export class ActionManager extends Class {
        constructor();

        /** Adds an action with a target.
         * If the target is already present, then the action will be added to the existing target.
         * If the target is not present, a new instance of this target will be created either paused or not,
         * and the action will be added to the newly created target.
         * When the target is paused, the queued actions won't be 'ticked'.
         *
         * @param {cc.Action} action
         * @param {cc.Node} target
         * @param {Boolean} paused
         */
        addAction(action: Action, target: Node, paused: boolean): void;

        /** Gets an action given its tag an a target
         * @param {Number} tag
         * @param {object} target
         * @return {cc.Action|Null}  return the Action with the given tag on success
         *
         * TODO: Restricting the target to cc.Node. Figure out a better way to do this (while avoiding "any")
         *       if non cc.Node objects can have actions.
         */
        getActionByTag(tag: number, target: Node): Action;

        /** Returns the numbers of actions that are running in a certain target. <br/>
         * Composable actions are counted as 1 action. <br/>
         * Example: <br/>
         * - If you are running 1 Sequence of 7 actions, it will return 1. <br/>
         * - If you are running 7 Sequences of 2 actions, it will return 7.
         * @param {object} target
         * @return {Number}
         *
         * TODO: Restricting the target to cc.Node. Figure out a better way to do this (while avoiding "any")
         *       if non cc.Node objects can have actions.
         */
        numberOfRunningActionsInTarget(target: Node): number;

        /**
         * Pauses all running actions, returning a list of targets whose actions were paused.
         * @return {Array}  a list of targets whose actions were paused.
         */
        pauseAllRunningActions(): void;

        /** Pauses the target: all running actions and newly added actions will be paused.
         * @param {object} target
         *
         * TODO: Restricting the target to cc.Node. Figure out a better way to do this (while avoiding "any")
         *       if non cc.Node objects can have actions.
         */
        pauseTarget(target: Node): void;

        /** purges the shared action manager. It releases the retained instance. <br/>
         * because it uses this, so it can not be static
         */
        purgeSharedManager(): void;

        /** Resumes the target. All queued actions will be resumed.
         * @param {object} target
         *
         * TODO: Restricting the target to cc.Node. Figure out a better way to do this (while avoiding "any")
         *       if non cc.Node objects can have actions.
         */
        resumeTarget(target: Node): void;

        /**
         * Resume a set of targets (convenience function to reverse a pauseAllRunningActions call)
         * @param {Array} targetsToResume
         *
         * TODO: Restricting the targets to cc.Node. Figure out a better way to do this (while avoiding "any")
         *       if non cc.Node objects can have actions.
         */
        resumeTargets(targetsToResume: Node[]): void;

        /** Removes an action given an action reference.
         * @param {cc.Action} action The action to be removed.
         */
        removeAction(action: Action): void;

        /** Removes an action given its tag and the target
         * @param {Number} tag
         * @param {object} target
         *
         * TODO: Restricting the target to cc.Node. Figure out a better way to do this (while avoiding "any")
         *       if non cc.Node objects can have actions.
         */
        removeActionByTag(tag: number, target: Node);

        /**
         * Removes all actions from all the targets.
         */
        removeAllActions(): void;

        /** Removes all actions from a certain target. <br/>
         * All the actions that belongs to the target will be removed.
         * @param {object} target
         * @param {boolean} forceDelete
         *
         * TODO: I believe that actions can be run on objects other than cc.Node. How should this be handled?
         *       Is there some type of interface I can use so that this method doesn't have to take "any"?
         *       For now, I'm restricting this to only allowing cc.Node.
         */
        removeAllActionsFromTarget(target: Node, forceDelete: boolean): void;

        /**
         * @param {Number} dt delta time in seconds
         */
        update(dt: number): void;
    }

    /**
     * @class
     * @extends cc.Class
     * @example
     * var element = new cc.HashElement();
     */
    export class HashElement extends Class {}

    ////////////////////////////////////////////////////////////////////////////////
    // File: cocos2d/core/CCDirector.js
    ////////////////////////////////////////////////////////////////////////////////

    // Variable Definitions
    var g_NumberOfDraws: number;
    var defaultFPS: number;

    // Function Definitions
    /**
     * TODO: Fill in this description later
     *
     * @function
     * @param {AffineTransform} xform The transformation matrix.
     */
    export function GLToClipTransform(xform: AffineTransform): void;

    // Class Definitions
    /**
     * <p>
     *    ATTENTION: USE cc.director INSTEAD OF cc.Director.<br/>
     *    cc.director is a singleton object which manage your game's logic flow.<br/>
     *    Since the cc.director is a singleton, you don't need to call any constructor or create functions,<br/>
     *    the standard way to use it is by calling:<br/>
     *      - cc.director.methodName(); <br/>
     *
     *    It creates and handle the main Window and manages how and when to execute the Scenes.<br/>
     *    <br/>
     *    The cc.director is also responsible for:<br/>
     *      - initializing the OpenGL context<br/>
     *      - setting the OpenGL pixel format (default on is RGB565)<br/>
     *      - setting the OpenGL pixel format (default on is RGB565)<br/>
     *      - setting the OpenGL buffer depth (default one is 0-bit)<br/>
     - setting the color for clear screen (default one is BLACK)<br/>
     *      - setting the projection (default one is 3D)<br/>
     *      - setting the orientation (default one is Portrait)<br/>
     *      <br/>
     *    <br/>
     *    The cc.director also sets the default OpenGL context:<br/>
     *      - GL_TEXTURE_2D is enabled<br/>
     *      - GL_VERTEX_ARRAY is enabled<br/>
     *      - GL_COLOR_ARRAY is enabled<br/>
     *      - GL_TEXTURE_COORD_ARRAY is enabled<br/>
     * </p>
     * <p>
     *   cc.director also synchronizes timers with the refresh rate of the display.<br/>
     *   Features and Limitations:<br/>
     *      - Scheduled timers & drawing are synchronizes with the refresh rate of the display<br/>
     *      - Only supports animation intervals of 1/60 1/30 & 1/15<br/>
     * </p>
     * @class
     * @name cc.Director
     */
    export class Director extends Class {
        /**
         * The event after draw of cc.Director
         * @constant
         * @type {string}
         * @example
         *   cc.eventManager.addCustomListener(cc.Director.EVENT_AFTER_DRAW, function(event) {
         *           cc.log("after draw event.");
         *       });
         */
        public static EVENT_AFTER_DRAW: string;

        /**
         * The event after update of cc.Director
         * @constant
         * @type {string}
         * @example
         *   cc.eventManager.addCustomListener(cc.Director.EVENT_AFTER_UPDATE, function(event) {
         *           cc.log("after update event.");
         *       });
         */
        public static EVENT_AFTER_UPDATE: string;

        /**
         * The event after visit of cc.Director
         * @constant
         * @type {string}
         * @example
         *   cc.eventManager.addCustomListener(cc.Director.EVENT_AFTER_VISIT, function(event) {
         *           cc.log("after visit event.");
         *       });
         */
        public static EVENT_AFTER_VISIT: string;

        /**
         * The event projection changed of cc.Director
         * @constant
         * @type {string}
         * @example
         *   cc.eventManager.addCustomListener(cc.Director.EVENT_PROJECTION_CHANGED, function(event) {
         *           cc.log("Projection changed.");
         *       });
         */
        public static EVENT_PROJECTION_CHANGED: string;

        //Possible OpenGL projections used by director
        /**
         * Constant for 2D projection (orthogonal projection)
         * @constant
         * @type {Number}
         */
        public static PROJECTION_2D: number;

        /**
         * Constant for 3D projection with a fovy=60, znear=0.5f and zfar=1500.
         * @constant
         * @type {Number}
         */
        public static PROJECTION_3D: number;

        /**
         * Constant for custom projection, if cc.Director's projection set to it, it calls "updateProjection" on the projection delegate.
         * @constant
         * @type {Number}
         */
        public static PROJECTION_CUSTOM: number;

        /**
         * Constant for default projection of cc.Director, default projection is 3D projection
         * @constant
         * @type {Number}
         */
        public static PROJECTION_DEFAULT: number;

        public sharedDirector: Director;
        public firstUseDirector: boolean;

        //pubic static _getInstance = function () {

        constructor();
        init(): boolean;

        /**
         * calculates delta time since last time it was called
         */
        calculateDeltaTime(): number;

        /**
         * Converts a view coordinate to an WebGL coordinate<br/>
         * Useful to convert (multi) touches coordinates to the current layout (portrait or landscape)<br/>
         * Implementation can be found in CCDirectorWebGL
         * @function
         * @param {cc.Point} uiPoint
         * @return {cc.Point}
         */
        convertToGL(uiPoint: Point): Point;

        /**
         * Converts an WebGL coordinate to a view coordinate<br/>
         * Useful to convert node points to window points for calls such as glScissor<br/>
         * Implementation can be found in CCDirectorWebGL
         * @function
         * @param {cc.Point} glPoint
         * @return {cc.Point}
         */
        convertToUI(glPoint: Point): Point;

        /**
         *  Draw the scene. This method is called every frame. Don't call it manually.
         */
        drawScene(): void;

        /**
         * End the life of director in the next frame
         */
        end(): void;

        /**
         * Returns the cc.ActionManager associated with this director
         * @return {cc.ActionManager}
         */
        getActionManager(): ActionManager;

        /**
         * Returns the FPS value
         * @return {Number}
         */
        getAnimationInterval(): number;

        /**
         * Returns the size in pixels of the surface. It could be different than the screen size.<br/>
         * High-res devices might have a higher surface size than the screen size.
         * @return {Number}
         */
        getContentScaleFactor(): number;

        /**
         * Returns the cc.director delegate.
         * @return {cc.DirectorDelegate}
         */
        getDelegate(): DirectorDelegate;

        /**
         * Returns the delta time since last frame
         * @return {Number}
         */
        getDeltaTime(): number;

        /**
         * This object will be visited after the main scene is visited.<br/>
         * This object MUST implement the "visit" selector.<br/>
         * Useful to hook a notification object
         * @return {cc.Node}
         */
        getNotificationNode(): Node;

        /**
         * Get the CCEGLView, where everything is rendered.<br/>
         * Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js.
         * @function
         * @return {cc.view}
         */
        getOpenGLView(): View;

        /**
         * Sets an OpenGL projection.<br/>
         * Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js.
         * @function
         * @return {Number}
         */
        getProjection(): number;

        /**
         * Returns current running Scene. Director can only run one Scene at the time
         * @return {cc.Scene}
         */
        getRunningScene(): Scene;

        /**
         * Returns the cc.Scheduler associated with this director
         * @return {cc.Scheduler}
         */
        getScheduler(): Scheduler;

        /**
         * Returns seconds per frame
         * @return {Number}
         */
        getSecondsPerFrame(): number;

        /**
         * Returns how many frames were called since the director started
         * @return {Number}
         */
        getTotalFrames(): number;

        /**
         * Returns the size of the WebGL view in points.<br/>
         * It takes into account any possible rotation (device orientation) of the window
         * @return {cc.Size}
         */
        getWinSize(): Size;

        /**
         * Returns the size of the OpenGL view in pixels.<br/>
         * It takes into account any possible rotation (device orientation) of the window.<br/>
         * On Mac winSize and winSizeInPixels return the same value.
         * @return {cc.Size}
         */
        getWinSizeInPixels(): Size;

        /**
         * Returns the visible size of the running scene
         * @function
         * @return {cc.Size}
         */
        getVisibleSize(): Size;

        /**
         * Returns the visible origin of the running scene
         * @function
         * @return {cc.Point}
         */
        getVisibleOrigin(): Point;

        /**
         * Returns the z eye, only available in WebGL mode
         * @function
         * @return {Number}
         */
        getZEye(): number;

        /**
         * Returns whether or not to display the FPS informations
         * @return {Boolean}
         */
        isDisplayStats(): boolean;

        /**
         * Returns whether next delta time equals to zero
         * @return {Boolean}
         */
        isNextDeltaTimeZero(): boolean;

        /**
         * Returns whether or not the Director is paused
         * @return {Boolean}
         */
        isPaused(): boolean;

        /**
         * Returns whether or not the replaced scene will receive the cleanup message.<br>
         * If the new scene is pushed, then the old scene won't receive the "cleanup" message.<br/>
         * If the new scene replaces the old one, the it will receive the "cleanup" message.
         * @return {Boolean}
         */
        isSendCleanupToScene(): boolean;

        /**
         * Pause the director's ticker
         */
        pause(): void;

        /**
         * Pops out a scene from the queue.<br/>
         * This scene will replace the running one.<br/>
         * The running scene will be deleted. If there are no more scenes in the stack the execution is terminated.<br/>
         * ONLY call it if there is a running scene.
         * @function
         */
        popScene(): void;

        /**
         * Pops out all scenes from the queue until it reaches "level".                             <br/>
         * If level is 0, it will end the director.                                                 <br/>
         * If level is 1, it will pop all scenes until it reaches to root scene.                    <br/>
         * If level is <= than the current stack level, it won't do anything.
         * @param {Number} level
         */
        popToSceneStackLevel(level: number): void;

        /**
         * Pops out all scenes from the queue until the root scene in the queue. <br/>
         * This scene will replace the running one.  <br/>
         * Internally it will call "popToSceneStackLevel(1)"
         */
        popToRootScene(): void;

        /**
         * Removes cached all cocos2d cached data. It will purge the cc.textureCache, cc.spriteFrameCache, cc.animationCache
         */
        purgeCachedData(): void;

        /**
         * Purge the cc.director itself, including unschedule all schedule, remove all event listeners, clean up and exit the running scene, stops all animations, clear cached data.
         */
        purgeDirector(): void;

        /**
         * Suspends the execution of the running scene, pushing it on the stack of suspended scenes.<br/>
         * The new scene will be executed.<br/>
         * Try to avoid big stacks of pushed scenes to reduce memory allocation.<br/>
         * ONLY call it if there is a running scene.
         * @param {cc.Scene} scene
         */
        pushScene(scene: Scene): void;

        /**
         * Resume director after pause, if the current scene is not paused, nothing will happen.
         */
        resume(): void;

        /**
         * Run a scene. Replaces the running scene with a new one or enter the first scene.
         * @param {cc.Scene} scene
         */
        runScene(scene: Scene): void;

        /**
         * Sets the cc.ActionManager associated with this director
         * @param {cc.ActionManager} actionManager
         */
        setActionManager(actionManager: ActionManager): void;

        /**
         * Enables/disables OpenGL alpha blending.<br/>
         * Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js.
         * @function
         * @param {Boolean} on
         */
        setAlphaBlending(newValue: boolean): void;

        /**
         * set color for clear screen.<br/>
         * Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js
         * @function
         * @param {cc.color} newValue
         */
        setClearColor(newValue: Color): void;

        /**
         * The size in pixels of the surface. It could be different than the screen size.<br/>
         * High-res devices might have a higher surface size than the screen size.
         * @param {Number} newValue
         */
        setContentScaleFactor(newValue: number): void;

        /**
         * Sets the cc.director delegate. It shall implement the CCDirectorDelegate protocol
         * @return {cc.DirectorDelegate}
         */
        setDelegate(delegate: DirectorDelegate): void;

        /**
         * Sets the default values based on the CCConfiguration info
         */
        setDefaultValues(): void;

        /**
         * Enables or disables WebGL depth test.<br/>
         * Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js
         * @function
         * @param {Boolean} newValue
         */
        setDepthTest(newValue: boolean): void;

        /**
         * Sets whether display the FPS on the bottom-left corner
         * @param {Boolean} displayStats
         */
        setDisplayStats(newValue: boolean): void;

        /**
         * Sets whether next delta time equals to zero
         * @param {Boolean} newValue
         */
        setNextDeltaTimeZero(newValue: boolean): void;

        /**
         * Starts the registered next scene
         */
        setNextScene(): void;

        /**
         * Sets Notification Node
         * @param {cc.Node} node
         */
        setNotificationNode(node: Node): void;

        /**
         * Sets the view, where everything is rendered, do not call this function.<br/>
         * Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js.
         * @function
         * @param {cc.view} openGLView
         */
        setOpenGLView(newValue: View): void;

        /**
         * Sets an OpenGL projection.<br/>
         * Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js.
         * @function
         * @param {Number} projection
         */
        setProjection(newValue: number): void;

        /**
         * Sets the cc.Scheduler associated with this director
         * @param {cc.Scheduler} scheduler
         */
        setScheduler(scheduler: Scheduler): void;

        /**
         * Update the view port.<br/>
         * Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js.
         * @function
         */
        setViewport(): void;
    }


    /***************************************************
     * implementation of DisplayLinkDirector
     **************************************************/
        //cc.DisplayLinkDirector = cc.Director.extend(/** @lends cc.Director# */{
    export class DisplayLinkDirector extends Director {
        /**
         * Run main loop of director
         */
        mainLoop(): void;

        /**
         * Sets animation interval
         * @param {Number} value the animation interval desired
         */
        setAnimationInterval(value: number): void;

        /**
         * Starts Animation
         */
        startAnimation(): void;

        /**
         * Stops animation
         */
        stopAnimation(): void;
    }

    ////////////////////////////////////////////////////////////////////////////////
    // File: cocos2d/core/CCDirector.js
    ////////////////////////////////////////////////////////////////////////////////

    // Variable Definitions
    var PRIORITY_NON_SYSTEM: number;

    // Function Definitions

    /**
     * Helper function to create a HashTimerEntry;
     * @Class
     * @param {Array} timers
     * @param {cc.Class} target  hash key (retained)
     * @param {Number} timerIndex
     * @param {cc.Timer} currentTimer
     * @param {Boolean} currentTimerSalvaged
     * @param {Boolean} paused
     * @param {Array} hh
     * @see cc.HashTimerEntry;
     */
    export function hashSelectorEntry(timers: any[], target: Class, timerIndex: number, currentTimer: Timer,
                                      currentTimerSalvaged: boolean, paused: boolean, hh: any[]): HashTimerEntry;

    // Class Definitions

    /**
     * Hash Element used for "selectors with interval"
     * @Class
     * @param {Array} timers
     * @param {cc.Class} target  hash key (retained)
     * @param {Number} timerIndex
     * @param {cc.Timer} currentTimer
     * @param {Boolean} currentTimerSalvaged
     * @param {Boolean} paused
     * @param {Array} hh
     */
    export class HashTimerEntry {
        constructor(timers: any[], target: Class, timerIndex: number, currentTimer: Timer,
                    currentTimerSalvaged: boolean, paused: boolean, hh: any[]);
    }

    /**
     * A update entry list
     * @Class
     * @name cc.HashUpdateEntry
     * @param {Array} list Which list does it belong to ?
     * @param {cc.ListEntry} entry entry in the list
     * @param {cc.Class} target hash key (retained)
     * @param {function} callback
     * @param {Array} hh
     *
     * TODO: What kind of arrays for the list and hh params, can we specify a type here?
     */
    export class HashUpdateEntry {
        constructor(list: any[], entry: ListEntry, target: Class, callback: (arg?: any) => void, hh: any[]);
    }

    /**
     * A list double-linked list used for "updates with priority"
     * @Class
     * @name cc.ListEntry
     * @param {cc.ListEntry} prev
     * @param {cc.ListEntry} next
     * @param {function} callback
     * @param {cc.Class} target not retained (retained by hashUpdateEntry)
     * @param {Number} priority
     * @param {Boolean} paused
     * @param {Boolean} markedForDeletion selector will no longer be called and entry will be removed at end of the next tick
     *
     * TODO: What's the signature for the callback param, can we specify a type here?
     */
    export class ListEntry {
        constructor(prev: ListEntry, next: ListEntry, callback: (arg?:any) => void, target: Class,
                    priority: number, paused: boolean, markedForDeletion: boolean);
    }

    /**
     * <p>
     *    Scheduler is responsible of triggering the scheduled callbacks.<br/>
     *    You should not use NSTimer. Instead use this class.<br/>
     *    <br/>
     *    There are 2 different types of callbacks (selectors):<br/>
     *       - update callback: the 'update' callback will be called every frame. You can customize the priority.<br/>
     *       - custom callback: A custom callback will be called every frame, or with a custom interval of time<br/>
     *       <br/>
     *    The 'custom selectors' should be avoided when possible. It is faster, and consumes less memory to use the 'update callback'. *
     * </p>
     * @class
     * @extends cc.Class
     *
     * @example
     * //register a schedule to scheduler
     * cc.director.getScheduler().schedule(callback, this, interval, !this._isRunning);
     */
    export class Scheduler extends Class {
        /**
         * Priority level reserved for system services.
         * @constant
         * @type Number
         */
        public static PRIORITY_SYSTEM:number;

        constructor();

        /**
         * Returns time scale of scheduler
         * @return {Number}
         */
        getTimeScale():number;

        /**
         * TODO: Put an explanation here for this method's purpose/functionality.
         *       Also, again we have a key parameter, and WTF is the proper type?!?
         * @param {any} key ???
         * @param {Class} target
         */
        isScheduled(key:any, target:Class):void;

        /**
         * Returns whether or not the target is paused
         * @param {cc.Class} target
         * @return {Boolean}
         */
        isTargetPaused(target:Class):boolean;

        /**
         * <p>
         *  Pause all selectors from all targets.<br/>
         *  You should NEVER call this method, unless you know what you are doing.
         * </p>
         */
        pauseAllTargets():void;

        /**
         * Pause all selectors from all targets with a minimum priority. <br/>
         * You should only call this with kCCPriorityNonSystemMin or higher.
         * @param {Number} minPriority
         */
        pauseAllTargetsWithMinPriority(minPriority):void;

        /**
         * <p>
         *    Pauses the target.<br/>
         *    All scheduled selectors/update for a given target won't be 'ticked' until the target is resumed.<br/>
         *    If the target is not present, nothing happens.
         * </p>
         * @param {cc.Class} target
         */
        pauseTarget(target:Class):void;

        /**
         * Resumes the target.<br/>
         * The 'target' will be unpaused, so all schedule selectors/update will be 'ticked' again.<br/>
         * If the target is not present, nothing happens.
         * @param {cc.Class} target
         */
        resumeTarget(target:Class):void;

        /**
         * Resume selectors on a set of targets.<br/>
         * This can be useful for undoing a call to pauseAllCallbacks.
         * @param {Array} targetsToResume
         */
        resumeTargets(targetsToResume:Class[]):void;

        /**
         * TODO: Put an explanation here for this method's purpose/functionality.
         *       Also, again we have a key parameter, and WTF is the proper type?!?
         *
         * @param {cc.Class} target
         * @param {function} callback
         * @param {Number} interval
         * @param {Number} repeat
         * @param {Number} delay
         * @param {Boolean} paused
         * @param {any} key
         * @example
         */
        schedule(callback:(arg?:any) => void, target:Class,
                 interval:number, repeat:number, delay:number, paused:boolean, key:any):void;

        /**
         * <p>
         *   The scheduled method will be called every 'interval' seconds.</br>
         *   If paused is YES, then it won't be called until it is resumed.<br/>
         *   If 'interval' is 0, it will be called every frame, but if so, it recommended to use 'scheduleUpdateForTarget:' instead.<br/>
         *   If the callback function is already scheduled, then only the interval parameter will be updated without re-scheduling it again.<br/>
         *   repeat let the action be repeated repeat + 1 times, use cc.REPEAT_FOREVER to let the action run continuously<br/>
         *   delay is the amount of time the action will wait before it'll start<br/>
         * </p>
         * @deprecated since v3.4 please use .schedule
         * @param {cc.Class} target
         * @param {function} callback_fn
         * @param {Number} interval
         * @param {Number} repeat
         * @param {Number} delay
         * @param {Boolean} paused
         * @example
         * //register a schedule to scheduler
         * cc.director.getScheduler().scheduleCallbackForTarget(this, function, interval, repeat, delay, !this._isRunning );
         */
        scheduleCallbackForTarget(target:Class, callback_fn:(arg?:any) => void,
                                  interval:number, repeat:number, delay:number, paused:boolean):void;

        /**
         * TODO: Put an explanation here for this method's purpose/functionality.
         *       Also, again we have a key parameter, and WTF is the proper type?!?
         *
         * @param {cc.Class} target
         * @param {Number} priority
         * @param {Boolean} paused
         * @example
         */
        scheduleUpdate(target:Class, priority:number, paused:boolean):void;

        /**
         * <p>
         *    Schedules the 'update' callback_fn for a given target with a given priority.<br/>
         *    The 'update' callback_fn will be called every frame.<br/>
         *    The lower the priority, the earlier it is called.
         * </p>
         * @deprecated since v3.4 please use .scheduleUpdate
         * @param {cc.Class} target
         * @param {Number} priority
         * @param {Boolean} paused
         * @example
         * //register this object to scheduler
         * cc.director.getScheduler().scheduleUpdateForTarget(this, priority, !this._isRunning );
         */
        scheduleUpdateForTarget(target:Class, priority:number, paused:boolean):void;

        /**
         * <p>
         *    Modifies the time of all scheduled callbacks.<br/>
         *    You can use this property to create a 'slow motion' or 'fast forward' effect.<br/>
         *    Default is 1.0. To create a 'slow motion' effect, use values below 1.0.<br/>
         *    To create a 'fast forward' effect, use values higher than 1.0.<br/>
         *    @warning It will affect EVERY scheduled selector / action.
         * </p>
         * @param {Number} timeScale
         */
        setTimeScale(timeScale:number):void;

        /**
         * TODO: Put an explanation here for this method's purpose/functionality.
         *       Also, again we have a key parameter, and WTF is the proper type?!?
         * @param {any} key ???
         * @param {Class} target
         */
        unschedule(key:any, target:Class):void;

        /**
         * TODO: Put an explanation here for this method's purpose/functionality.
         */
        unscheduleAll():void;

        /**
         *  <p>
         *      Unschedules all function callbacks from all targets. <br/>
         *      You should NEVER call this method, unless you know what you are doing.
         *  </p>
         * @deprecated since v3.4 please use .unscheduleAllWithMinPriority
         */
        unscheduleAllCallbacks():void;

        /**
         * Unschedules all function callbacks for a given target. This also includes the "update" callback function.
         * @deprecated since v3.4 please use .unscheduleAll
         * @param {cc.Class} target
         */
        unscheduleAllCallbacksForTarget(target:Class):void;

        /**
         * <p>
         *    Unschedules all function callbacks from all targets with a minimum priority.<br/>
         *    You should only call this with kCCPriorityNonSystemMin or higher.
         * </p>
         * @deprecated since v3.4 please use .unscheduleAllWithMinPriority
         * @param {Number} minPriority
         */
        unscheduleAllCallbacksWithMinPriority(minPriority:number):void;

        /**
         * TODO: Put an explanation here for this method's purpose/functionality.
         * @param {Class} target
         */
        unscheduleAllForTarget(target:Class):void;

        /**
         * TODO: Put an explanation here for this method's purpose/functionality.
         * @param {Number} minPriority ???
         */
        unscheduleAllWithMinPriority(minPriority:number):void;

        /**
         * <p>
         *   Unschedule a callback function for a given target.<br/>
         *   If you want to unschedule the "update", use unscheudleUpdateForTarget.
         * </p>
         * @deprecated since v3.4 please use .unschedule
         * @param {cc.Class} target
         * @param {function} callback callback[Function] or key[String]
         * @example
         * //unschedule a callback of target
         * cc.director.getScheduler().unscheduleCallbackForTarget(function, this);
         */
        unscheduleCallbackForTarget(target:Class, callback:(arg?:any) => void):void;

        /**
         * TODO: Put an explanation here for this method's purpose/functionality.
         * @param {Class} target
         */
        unscheduleUpdate(target:Class):void;

        /**
         * Unschedules the update callback function for a given target
         * @param {cc.Class} target
         * @deprecated since v3.4 please use .unschedule
         * @example
         * //unschedules the "update" method.
         * cc.director.getScheduler().unscheduleUpdateForTarget(this);
         */
        unscheduleUpdateForTarget(target:Class):void;

        /**
         * 'update' the scheduler. (You should NEVER call this method, unless you know what you are doing.)
         * @param {Number} dt delta time
         */
        update(dt:number):void;
    }

    /**
     * Light weight timer
     * @class
     * @extends cc.Class
     */
    export class Timer extends Class {
        constructor();

        /**
         * TODO: Comment this with an explanation of this method's purpose / functionality
         * TODO: In the implementation (CCScheduler.js), this returns a number (0).
         *       I see no use for this anywhere, as all concrete implementations return nothing.
         *       So I'm making this, as well as all overridden methods, return void.
         */
        cancel():void;

        /**
         * TODO: Comment this with an explanation of this method's purpose / functionality
         *
         * @return {Number} returns interval of timer
         */
        getInterval():number;

        /**
         * TODO: Comment this with an explanation of this method's purpose / functionality
         *
         * @param {Number} interval set interval in seconds
         */
        setInterval(interval:number):void;

        /**
         * TODO: Comment this with an explanation of this method's purpose / functionality
         *
         * @param {Number} seconds ???
         * @param {Number} repeat ???
         * @param {Number} delay ???
         */
        setupTimerWithInterval(seconds:number, repeat:boolean, delay:number):void;

        /**
         * TODO: Comment this with an explanation of this method's purpose / functionality
         *
         * TODO: In the implementation (CCScheduler.js), this returns a number (0).
         *       I see no use for this anywhere, as all concrete implementations return nothing.
         *       So I'm making this, as well as all overridden methods, return void.
         */
        trigger():void;

        /**
         * triggers the timer
         * @param {Number} dt delta time
         */
        update(dt:number):void;
    }

    /**
     * TODO: Comment this with an explanation of this class' purpose / functionality
     *
     * @class cc.TimerTargetCallback
     */
        //cc.TimerTargetCallback = cc.Timer.extend({
    export class TimerTargetCallback extends Timer {

        constructor();

        /**
         * TODO: Comment this with an explanation of this method's purpose / functionality
         * WTF is "key" used for, and WTF kind of type is it?!?
         *
         * @param {cc.Scheduler} scheduler ???
         * @param {Function} callback ???
         * @param {cc.Class} target ???
         * @param {any} key ???
         * @param {Number} seconds ???
         * @param {Boolean} repeat ???
         * @param {Number} delay ???
         * @return {boolean} ???
         */
        initWithCallback(scheduler:Scheduler, callback:(arg?:any) => void, target:Class,
                         key:any, seconds:number, repeat:boolean, delay:number):boolean;

        getCallback():((arg?:any) => void);

        getKey():any;

        trigger():void;

        cancel():void;
    }

    /**
     * TODO: Comment this with an explanation of this class' purpose / functionality
     *
     * @class cc.TimerTargetSelector
     */
    export class TimerTargetSelector extends Timer {

        constructor();

        /**
         * TODO: Comment this with an explanation of this method's purpose / functionality
         *
         */
        cancel():void;

        /**
         * TODO: Comment this with an explanation of this method's purpose / functionality
         *
         * @return {Function} ???
         */
        getSelector():((arg?:any) => void);

        /**
         * TODO: Comment this with an explanation of this method's purpose / functionality
         *
         * @param {cc.Scheduler} scheduler ???
         * @param {Function} selector ???
         * @param {cc.Class} target ???
         * @param {Number} seconds ???
         * @param {Boolean} repeat ???
         * @param {Number} delay ???
         * @return {boolean} ???
         */
        initWithSelector(scheduler:Scheduler, selector:(arg?:any) => void, target:Class,
                         seconds:number, repeat:boolean, delay:number):boolean;

        /**
         * TODO: Comment this with an explanation of this method's purpose / functionality
         *
         */
        trigger():void;
    }


    // Module definitions
    export module Node {
        //+-------------------- Function Definitions --------------------+//
        ///**
        // * Allocates and initializes a node.
        // * @deprecated since v3.0, please use new construction instead.
        // * @see cc.Node
        // * @return {cc.Node}
        // */
        //export function create():Node;

        // Class Definitions
        export class RenderCmd{}
    }

}
/// <reference path="../cocos2d-lib.d.ts" />


declare namespace cc {
    ////////////////////////////////////////////////////////////////////////////////
    // File: cocos2d/core/event-manager/CCEvent.js
    ////////////////////////////////////////////////////////////////////////////////
    /**
     * Base class of all kinds of events.
     * @class
     * @extends cc.Class
     */
    export class Event extends Class {
        /**
         * The type code of Touch event.
         * @constant
         * @type {number}
         */
        public static TOUCH:number;

        /**
         * The type code of Keyboard event.
         * @constant
         * @type {number}
         */
        public static KEYBOARD:number;

        /**
         * The type code of Acceleration event.
         * @constant
         * @type {number}
         */
        public static ACCELERATION:number;

        /**
         * The type code of Mouse event.
         * @constant
         * @type {number}
         */
        public static MOUSE:number;

        /**
         * The type code of UI focus event.
         * @constant
         * @type {number}
         */
        public static FOCUS:number;

        /**
         * The type code of Custom event.
         * @constant
         * @type {number}
         */
        public static CUSTOM:number;

        public constructor(type:number);

        /**
         * Gets the event type
         * @function
         * @returns {Number}
         */
        public getType():number;

        /**
         * Stops propagation for current event
         * @function
         */
        public stopPropagation();

        /**
         * Checks whether the event has been stopped
         * @function
         * @returns {boolean}
         */
        public isStopped():boolean;

        /**
         * 
         *     Gets current target of the event                                                            
         *     note: It only be available when the event listener is associated with node.                
         *          It returns 0 when the listener is associated with fixed priority.
         * 
         * @function
         * @returns {cc.Node}  The target with which the event associates.
         */
        public getCurrentTarget():Node;
    }


    /**
     * The Custom event
     * @class
     * @extends cc.Event
     */
    //cc.EventCustom = cc.Event.extend(/** @lends cc.EventCustom# */{
    export class EventCustom extends Event {
        public constructor(eventName:string);

        /**
         * Sets user data
         * @param {*} data
         */
        public setUserData(data:any):void;

        /**
         * Gets user data
         * @returns {*}
         */
        public getUserData():any;

        /**
         * Gets event name
         * @returns {String}
         */
        public getEventName():string;
    }

    /**
     * The mouse event
     * @class
     * @extends cc.Event
     */
    export class EventMouse extends Event {
        /**
         * The none event code of  mouse event.
         * @constant
         * @type {number}
         */
        public static NONE:number;
        /**
         * The event type code of mouse down event.
         * @constant
         * @type {number}
         */
        public static DOWN:number;
        /**
         * The event type code of mouse up event.
         * @constant
         * @type {number}
         */
        public static UP:number;
        /**
         * The event type code of mouse move event.
         * @constant
         * @type {number}
         */
        public static MOVE:number;
        /**
         * The event type code of mouse scroll event.
         * @constant
         * @type {number}
         */
        public static SCROLL:number;

        /**
         * The tag of Mouse left button
         * @constant
         * @type {Number}
         */
        public static BUTTON_LEFT:number;

        /**
         * The tag of Mouse right button  (The right button number is 2 on browser)
         * @constant
         * @type {Number}
         */
        public static BUTTON_RIGHT:number;

        /**
         * The tag of Mouse middle button  (The right button number is 1 on browser)
         * @constant
         * @type {Number}
         */
        public static BUTTON_MIDDLE:number;

        /**
         * The tag of Mouse button 4
         * @constant
         * @type {Number}
         */
        public static BUTTON_4:number;

        /**
         * The tag of Mouse button 5
         * @constant
         * @type {Number}
         */
        public static BUTTON_5:number;

        /**
         * The tag of Mouse button 6
         * @constant
         * @type {Number}
         */
        public static BUTTON_6:number;

        /**
         * The tag of Mouse button 7
         * @constant
         * @type {Number}
         */
        public static BUTTON_7:number;

        /**
         * The tag of Mouse button 8
         * @constant
         * @type {Number}
         */
        public static BUTTON_8:number;


        public constructor(eventType:number);

        /**
         * Sets scroll data
         * @param {number} scrollX
         * @param {number} scrollY
         */
        public setScrollData(scrollX:number, scrollY:number):void;

        /**
         * Returns the x axis scroll value
         * @returns {number}
         */
        public getScrollX():number;

        /**
         * Returns the y axis scroll value
         * @returns {number}
         */
        public getScrollY():number;

        /**
         * Sets cursor location
         * @param {number} x
         * @param {number} y
         */
        public setLocation(x:number, y:number):void;

        /**
         * Returns cursor location
         * @return {cc.Point} location
         */
        public getLocation():Point;

        /**
         * Returns the current cursor location in screen coordinates
         * @return {cc.Point}
         */
        public getLocationInView():Point;

        /**
         * Returns the delta distance from the previous location to current location
         * @return {cc.Point}
         */
        public getDelta():Point;

        /**
         * Returns the X axis delta distance from the previous location to current location
         * @return {Number}
         */
        public getDeltaX():number;

        /**
         * Returns the Y axis delta distance from the previous location to current location
         * @return {Number}
         */
        public getDeltaY():number;

        /**
         * Sets mouse button
         * @param {number} button
         */
        public setButton(button:number):void;

        /**
         * Returns mouse button
         * @returns {number}
         */
        public getButton():number;

        /**
         * Returns location X axis data
         * @returns {number}
         */
        public getLocationX():number;

        /**
         * Returns location Y axis data
         * @returns {number}
         */
        public getLocationY():number;
    }

    /**
     * The touch event
     * @class
     * @extends cc.Event
     */
    //cc.EventTouch = cc.Event.extend(/** @lends cc.EventTouch# */{
    //enum EventCode {
    //    BEGAN = 0,
    //    MOVED = 1,
    //    ENDED = 2,
    //    CANCELLED = 3
    //}
        export interface EventCodeMap {
            BEGAN:number;
        MOVED:number;
        ENDED:number;
        CANCELLED:number
    }

    export class EventTouch extends Event {
        /**
         * The maximum touch numbers
         * @constant
         * @type {Number}
         */
        public static MAX_TOUCHES:number;

        public static EventCode:EventCodeMap;

        public constructor(arr:Touch[]);

        /**
         * Returns event code
         * @returns {number}
         */
        public getEventCode():number;

        /**
         * Returns touches of event
         * @returns {Array}
         */
        public getTouches():Touch[];
    }

    // TODO: Uncomment this class when ccui.Widget is defined.
    ///**
    // * Focus change event for UI widget
    // * @class
    // * @extends cc.Event
    // */
    //export class EventFocus extends Event {
    //    /**
    //     * Constructor function.
    //     * @param {ccui.Widget} widgetLoseFocus
    //     * @param {ccui.Widget} widgetGetFocus
    //     */
    //    public constructor(widgetLoseFocus:ccui.Widget, widgetGetFocus:ccui.Widget);
    //}

    ////////////////////////////////////////////////////////////////////////////////
    // File: cocos2d/core/event-manager/CCEventExtension.js
    ////////////////////////////////////////////////////////////////////////////////
    /**
     * The acceleration event
     * @class
     * @extends cc.Event
     */
    //cc.EventAcceleration = cc.Event.extend(/** @lends cc.EventAcceleration# */{
    export class EventAcceleration extends Event {
        public constructor(acc:number);
    }

    /**
     * The keyboard event
     * @class
     * @extends cc.Event
     */
    //cc.EventKeyboard = cc.Event.extend(/** @lends cc.EventKeyboard# */{
    export class EventKeyboard extends Event {
        public constructor(keyCode:number, isPressed:boolean);
    }

    ////////////////////////////////////////////////////////////////////////////////
    // File: cocos2d/core/event-manager/CCEventHelper.js
    ////////////////////////////////////////////////////////////////////////////////
// The event helper
    export class EventHelper extends Class {
        public apply(object:any):void;

        //public addEventListener(type:string, listener:EventListener, target:Node):void;
        public addEventListener(type:string, listener:EventListener, target:Node):void;

        public hasEventListener(type:string, listener:EventListener, target:Node):boolean;

        //    if ( this._listeners === undefined )
        //        return false;
        //
        //    var listeners = this._listeners;
        //    if ( listeners[ type ] !== undefined ) {
        //        for(var i = 0, len = listeners.length; i < len ; i++){
        //            var selListener = listeners[i];
        //            if(selListener.callback === listener && selListener.eventTarget === target)
        //                return true;
        //        }
        //    }
        //    return false;
        //},

        public removeEventListener(type:string, target:Node):void;

        //    if ( this._listeners === undefined )
        //        return;
        //
        //    var listeners = this._listeners;
        //    var listenerArray = listeners[ type ];
        //
        //    if ( listenerArray !== undefined ) {
        //        for(var i = 0; i < listenerArray.length ; ){
        //            var selListener = listenerArray[i];
        //            if(selListener.eventTarget === target)
        //                listenerArray.splice( i, 1 );
        //            else
        //                i++
        //        }
        //    }
        //},

        public dispatchEvent(event:Event, clearAfterDispatch:boolean):void;
    }

    ////////////////////////////////////////////////////////////////////////////////
    // File: cocos2d/core/event-manager/CCEventListener.js
    ////////////////////////////////////////////////////////////////////////////////
    /**
     * 
     *     The base class of event listener.                                                                        
     *     If you need custom listener which with different callback, you need to inherit this class.               
     *     For instance, you could refer to EventListenerAcceleration, EventListenerKeyboard,                       
     *      EventListenerTouchOneByOne, EventListenerCustom.
     * 
     * @class
     * @extends cc.Class
     */
    export class EventListener extends Class {
        // event listener type
        /**
         * The type code of unknown event listener.
         * @constant
         * @type {number}
         */
        public static UNKNOWN:number;

        /**
         * The type code of one by one touch event listener.
         * @constant
         * @type {number}
         */
        public static TOUCH_ONE_BY_ONE:number;

        /**
         * The type code of all at once touch event listener.
         * @constant
         * @type {number}
         */
        public static TOUCH_ALL_AT_ONCE:number;

        /**
         * The type code of keyboard event listener.
         * @constant
         * @type {number}
         */
        public static KEYBOARD:number;

        /**
         * The type code of mouse event listener.
         * @constant
         * @type {number}
         */
        public static MOUSE:number;

        /**
         * The type code of acceleration event listener.
         * @constant
         * @type {number}
         */
        public static ACCELERATION:number;

        ///**
        // * The type code of focus event listener.
        // * @constant
        // * @type {number}
        // */
        //public static ACCELERATION:number;

        /**
         * The type code of custom event listener.
         * @constant
         * @type {number}
         */
        public static CUSTOM:number;

        /**
         * The type code of Focus change event listener.
         * @constant
         * @type {number}
         */
        public static FOCUS:number;

        /**
         * Initializes event with type and callback function
         * @param {number} type
         * @param {string} listenerID
         * @param {function} callback
         */
        public constructor(type:number, listenerID:string, callback:()=>void);

        /**
         * Checks whether the listener is available.
         * @returns {boolean}
         */
        public checkAvailable():boolean;

        /**
         * Clones the listener, its subclasses have to override this method.
         * @returns {cc.EventListener}
         */
        public clone():EventListener;

        /**
         *  Enables or disables the listener
         *  @note Only listeners with `enabled` state will be able to receive events.
         *          When an listener was initialized, it's enabled by default.
         *          An event listener can receive events when it is enabled and is not paused.
         *          paused state is always false when it is a fixed priority listener.
         * @param {boolean} enabled
         */
        public setEnabled(enabled:boolean):void;

        /**
         * Checks whether the listener is enabled
         * @returns {boolean}
         */
        public isEnabled():boolean;

        /**
         * Currently JavaScript Bindings (JSB), in some cases, needs to use retain and release. This is a bug in JSB,
         * and the ugly workaround is to use retain/release. So, these 2 methods were added to be compatible with JSB.
         * This is a hack, and should be removed once JSB fixes the retain/release bug
         * You will need to retain an object if you created a listener and haven't added it any target node during the same frame.
         * Otherwise, JSB's native autorelease pool will consider this object a useless one and release it directly,
         * when you want to use it later, a "Invalid Native Object" error will be raised.
         * The retain function can increase a reference count for the native object to avoid it being released,
         * you need to manually invoke release function when you think this object is no longer needed, otherwise, there will be memory learks.
         * retain and release function call should be paired in developer's game code.
         * @function
         * @see cc.EventListener#release
         */
        retain():void;

        /**
         * Currently JavaScript Bindings (JSB), in some cases, needs to use retain and release. This is a bug in JSB,
         * and the ugly workaround is to use retain/release. So, these 2 methods were added to be compatible with JSB.
         * This is a hack, and should be removed once JSB fixes the retain/release bug
         * You will need to retain an object if you created a listener and haven't added it any target node during the same frame.
         * Otherwise, JSB's native autorelease pool will consider this object a useless one and release it directly,
         * when you want to use it later, a "Invalid Native Object" error will be raised.
         * The retain function can increase a reference count for the native object to avoid it being released,
         * you need to manually invoke release function when you think this object is no longer needed, otherwise, there will be memory learks.
         * retain and release function call should be paired in developer's game code.
         * @function
         * @see cc.EventListener#retain
         */
        public release():void;

        /**
         * Create a EventListener object by json object
         * @function
         * @static
         * @param {object} obj a json object
         * @returns {cc.EventListener}
         * todo: It should be the direct use new
         * @example
         * cc.EventListener.create({
         *       event: cc.EventListener.TOUCH_ONE_BY_ONE,
         *       swallowTouches: true,
         *       onTouchBegan: function (touch, event) {
         *           //do something
         *           return true;
         *       }
         *    });
         */
        public static create(obj:any):EventListener;
    }

    ////////////////////////////////////////////////////////////////////////////////
    // File: cocos2d/core/event-manager/CCEventManager.js
    ////////////////////////////////////////////////////////////////////////////////
    /**
     * 
     *  cc.eventManager is a singleton object which manages event listener subscriptions and event dispatching. 
     *                                                                                                              
     *  The EventListener list is managed in such way so that event listeners can be added and removed          
     *  while events are being dispatched.
     * 
     * @class
     * @name cc.eventManager
     */
    export class EventManager extends Class {
        //Priority dirty flag
        public static DIRTY_NONE:number;
        public static DIRTY_FIXED_PRIORITY:number;
        public static DIRTY_SCENE_GRAPH_PRIORITY:number;
        public static DIRTY_ALL:number;

        /**
         * Pauses all listeners which are associated the specified target.
         * @param {cc.Node} node
         * @param {Boolean} [recursive=false]
         */
        public pauseTarget(node:Node, recursive:boolean):void;

        /**
         * Resumes all listeners which are associated the specified target.
         * @param {cc.Node} node
         * @param {Boolean} [recursive=false]
         */
        public resumeTarget(node:Node, recursive:boolean):void;

        /**
         * 
         * Adds a event listener for a specified event.                                                                                                            
         * if the parameter "nodeOrPriority" is a node, it means to add a event listener for a specified event with the priority of scene graph.                   
         * if the parameter "nodeOrPriority" is a Number, it means to add a event listener for a specified event with the fixed priority.                          
         * 
         * @param {cc.EventListener|Object} listener The listener of a specified event or a object of some event parameters.
         * @param {cc.Node|Number} nodeOrPriority The priority of the listener is based on the draw order of this node or fixedPriority The fixed priority of the listener.
         * @note  The priority of scene graph will be fixed value 0. So the order of listener item in the vector will be ' <0, scene graph (0 priority), >0'.
         *         A lower priority will be called before the ones that have a higher value. 0 priority is forbidden for fixed priority since it's used for scene graph based priority.
         *         The listener must be a cc.EventListener object when adding a fixed priority listener, because we can't remove a fixed priority listener without the listener handler,
         *         except calls removeAllListeners().
         * @return {cc.EventListener} Return the listener. Needed in order to remove the event from the dispatcher.
         */
        public addListener(listener:EventListener, nodeOrPriority:Node|number):EventListener;

        /**
         * Adds a Custom event listener. It will use a fixed priority of 1.
         * @param {string} eventName
         * @param {function} callback
         * @return {cc.EventListener} the generated event. Needed in order to remove the event from the dispatcher
         */
        public addCustomListener(eventName:string, callback:()=>void);

        /**
         * Remove a listener
         * @param {cc.EventListener} listener an event listener or a registered node target
         */
        public removeListener(listener:EventListener):void;

        /**
         * Removes all listeners with the same event listener type or removes all listeners of a node
         * @param {Number|cc.Node} listenerType listenerType or a node
         * @param {Boolean} [recursive=false]
         */
        public removeListeners(listenerType:Node|number, recursive?:boolean);

        /**
         * Removes all custom listeners with the same event name
         * @param {string} customEventName
         */
        public removeCustomListeners(customEventName:string):void;

        /**
         * Removes all listeners
         */
        public removeAllListeners():void;

        /**
         * Sets listener's priority with fixed value.
         * @param {cc.EventListener} listener
         * @param {Number} fixedPriority
         */
        public setPriority(listener:EventListener, fixedPriority:number):void;

        /**
         * Whether to enable dispatching events
         * @param {boolean} enabled
         */
        public setEnabled(enabled:boolean):void;

        /**
         * Checks whether dispatching events is enabled
         * @returns {boolean}
         */
        public isEnabled():boolean;

        /**
         * Dispatches the event, also removes all EventListeners marked for deletion from the event dispatcher list.
         * @param {cc.Event} event
         */
        public dispatchEvent(event:Event):void;

        /**
         * Dispatches a Custom Event with a event name an optional user data
         * @param {string} eventName
         * @param {*} optionalUserData
         */
        public dispatchCustomEvent(eventName:string, optionalUserData:any):void;
    }

    export const eventManager:EventManager;

    ////////////////////////////////////////////////////////////////////////////////
    // File: cocos2d/core/event-manager/CCTouch.js
    ////////////////////////////////////////////////////////////////////////////////

    /**
     * The touch event class
     * @class
     * @extends cc.Class
     *
     * @param {Number} x
     * @param {Number} y
     * @param {Number} id
     */
    export class Touch extends Class {
        public constructor(x:number, y:number, id:number);

        /**
         * Returns the current touch location in OpenGL coordinates
         * @return {cc.Point}
         */
        public getLocation():Point;

        /**
         * Returns X axis location value
         * @returns {number}
         */
        public getLocationX():number;

        /**
         * Returns Y axis location value
         * @returns {number}
         */
        public getLocationY():number;

        /**
         * Returns the previous touch location in OpenGL coordinates
         * @return {cc.Point}
         */
        public getPreviousLocation():Point;

        /**
         * Returns the start touch location in OpenGL coordinates
         * @returns {cc.Point}
         */
        public getStartLocation():Point;

        /**
         * Returns the delta distance from the previous touche to the current one in screen coordinates
         * @return {cc.Point}
         */
        public getDelta():Point;

        /**
         * Returns the current touch location in screen coordinates
         * @return {cc.Point}
         */
        public getLocationInView():Point;

        /**
         * Returns the previous touch location in screen coordinates
         * @return {cc.Point}
         */
        public getPreviousLocationInView():Point;

        /**
         * Returns the start touch location in screen coordinates
         * @return {cc.Point}
         */
        public getStartLocationInView():Point;

        /**
         * Returns the id of cc.Touch
         * @return {Number}
         */
        public getID():number;

        /**
         * Sets information to touch
         * @param {Number} id
         * @param  {Number} x
         * @param  {Number} y
         */
        public setTouchInfo(id:number, x:number, y:number):void;
    }
}
/// <reference path="../cocos2d-lib.d.ts" />

declare namespace cc {

// +--------------------------------------------------------------------------------
// + File: cocos2d/core/base-nodes/CCLabelTTF.js
// +--------------------------------------------------------------------------------
    /**
     * <p>cc.LabelTTF is a subclass of cc.TextureNode that knows how to render text labels with system font or a ttf font file<br/>
     * All features from cc.Sprite are valid in cc.LabelTTF<br/>
     * cc.LabelTTF objects are slow for js-binding on mobile devices.<br/>
     * Consider using cc.LabelAtlas or cc.LabelBMFont instead.<br/>
     * You can create a cc.LabelTTF from a font name, alignment, dimension and font size or a cc.FontDefinition object.</p>
     * @class
     * @extends cc.Sprite
     *
     * @param {String} text
     * @param {String|cc.FontDefinition} [fontName="Arial"]
     * @param {Number} [fontSize=16]
     * @param {cc.Size} [dimensions=cc.size(0,0)]
     * @param {Number} [hAlignment=cc.TEXT_ALIGNMENT_LEFT]
     * @param {Number} [vAlignment=cc.VERTICAL_TEXT_ALIGNMENT_TOP]
     * @example
     * var myLabel = new cc.LabelTTF('label text',  'Times New Roman', 32, cc.size(320,32), cc.TEXT_ALIGNMENT_LEFT);
     *
     * var fontDef = new cc.FontDefinition();
     * fontDef.fontName = "Arial";
     * fontDef.fontSize = "32";
     * var myLabel = new cc.LabelTTF('label text',  fontDef);
     *
     * @property {String}       string          - Content string of label
     * @property {Number}       textAlign       - Horizontal Alignment of label: cc.TEXT_ALIGNMENT_LEFT|cc.TEXT_ALIGNMENT_CENTER|cc.TEXT_ALIGNMENT_RIGHT
     * @property {Number}       verticalAlign   - Vertical Alignment of label: cc.VERTICAL_TEXT_ALIGNMENT_TOP|cc.VERTICAL_TEXT_ALIGNMENT_CENTER|cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM
     * @property {Number}       fontSize        - Font size of label
     * @property {String}       fontName        - Font name of label
     * @property {String}       font            - The label font with a style string: e.g. "18px Verdana"
     * @property {Number}       boundingWidth   - Width of the bounding box of label, the real content width is limited by boundingWidth
     * @property {Number}       boundingHeight  - Height of the bounding box of label, the real content height is limited by boundingHeight
     * @property {cc.Color}     fillStyle       - The fill color
     * @property {cc.Color}     strokeStyle     - The stroke color
     * @property {Number}       lineWidth       - The line width for stroke
     * @property {Number}       shadowOffsetX   - The x axis offset of shadow
     * @property {Number}       shadowOffsetY   - The y axis offset of shadow
     * @property {Number}       shadowOpacity   - The opacity of shadow
     * @property {Number}       shadowBlur      - The blur size of shadow
     */
    export class LabelTTF extends Sprite implements Label {
        ///** @expose */
        public string:string;
        /** @expose */
        public textAlign:number;
        /** @expose */
        public verticalAlign:number;
        /** @expose */
        public fontSize:number;
        /** @expose */
        public fontName:string;
        /** @expose */
        public font:string;
        /** @expose */
        public boundingSize:number;
        /** @expose */
        public boundingWidth:number;
        /** @expose */
        public boundingHeight:number;
        /** @expose */
        public fillStyle:Color;
        /** @expose */
        public strokeStyle:Color;
        /** @expose */
        public lineWidth:number;
        /** @expose */
        public shadowOffset:number;
        /** @expose */
        public shadowOffsetX:number;
        /** @expose */
        public shadowOffsetY:number;
        /** @expose */
        public shadowOpacity:number;
        /** @expose */
        public shadowBlur:number;

        public constructor(label:string, fontName:string, fontSize:number, dimensions?:Size, hAlignment?:number, vAlignment?:number);
        //public ctor(label?:string, fontName?:string, fontSize?:number, dimensions?:Size, hAlignment?:number, vAlignment?:number):boolean;

        /**
         * Initializes the cc.LabelTTF with a font name, alignment, dimension and font size, do not call it by yourself,
         * you should pass the correct arguments in constructor to initialize the label.
         * @param {String} label string
         * @param {String} fontName
         * @param {Number} fontSize
         * @param {cc.Size} [dimensions=]
         * @param {Number} [hAlignment=]
         * @param {Number} [vAlignment=]
         * @return {Boolean} return false on error
         */
        public initWithString(label:string, fontName:string, fontSize:number, dimensions?:Size, hAlignment?:number, vAlignment?:number):boolean;

        public getLineHeight():number;

        public setLineHeight(lineHeight:number):void;

        /**
         * Returns the text of the label
         * @return {String}
         */
        public getString():string;

        /**
         * Returns Horizontal Alignment of cc.LabelTTF
         * @return {cc.TEXT_ALIGNMENT_LEFT|cc.TEXT_ALIGNMENT_CENTER|cc.TEXT_ALIGNMENT_RIGHT}
         */
        public getHorizontalAlignment():number;

        /**
         * Returns Vertical Alignment of cc.LabelTTF
         * @return {cc.VERTICAL_TEXT_ALIGNMENT_TOP|cc.VERTICAL_TEXT_ALIGNMENT_CENTER|cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM}
         */
        public getVerticalAlignment():number;

        /**
         * Returns the dimensions of cc.LabelTTF, the dimension is the maximum size of the label, set it so that label will automatically change lines when necessary.
         * @see cc.LabelTTF#setDimensions, cc.LabelTTF#boundingWidth and cc.LabelTTF#boundingHeight
         * @return {cc.Size}
         */
        public getDimensions():Size;

        /**
         * Returns font size of cc.LabelTTF
         * @return {Number}
         */
        public getFontSize():number;

        /**
         * Returns font name of cc.LabelTTF
         * @return {String}
         */
        public getFontName():string;

        /**
         * Initializes the CCLabelTTF with a font name, alignment, dimension and font size, do not call it by yourself, you should pass the correct arguments in constructor to initialize the label.
         * @param {String} text
         * @param {cc.FontDefinition} textDefinition
         * @return {Boolean}
         */
        public initWithStringAndTextDefinition(text:string, textDefinition:FontDefinition):boolean;

        /**
         * Sets the text definition used by this label
         * @param {cc.FontDefinition} theDefinition
         */
        public setTextDefinition(theDefinition:FontDefinition):void;

        /**
         * Extract the text definition used by this label
         * @return {cc.FontDefinition}
         */
        public getTextDefinition():FontDefinition;

        /**
         * Enable or disable shadow for the label
         * @param {cc.Color | Number} a Color or The x axis offset of the shadow
         * @param {cc.Size | Number} b Size or The y axis offset of the shadow
         * @param {Number} c The blur size of the shadow or The opacity of the shadow (0 to 1)
         * @param {null | Number} d Null or The blur size of the shadow
         * @example
         *   old:
         *     labelttf.enableShadow(shadowOffsetX, shadowOffsetY, shadowOpacity, shadowBlur);
         *   new:
         *     labelttf.enableShadow(shadowColor, offset, blurRadius);
         */
        public enableShadow(a:Color|number, b:Size|number, c:number, d?:number):void;

        /**
         * Disable shadow rendering
         */
        public disableShadow():void;

        /**
         * Enable label stroke with stroke parameters
         * @param {cc.Color} strokeColor The color of stroke
         * @param {Number} strokeSize The size of stroke
         */
        public enableStroke(strokeColor:Color, strokeSize:number):void;

        /**
         * Disable label stroke
         */
        public disableStroke():void;

        /**
         * Sets the text fill color
         * @function
         * @param {cc.Color} fillColor The fill color of the label
         */
        public setFontFillColor(fillColor:Color):void;

        /**
         * Changes the text content of the label
         * @warning Changing the string is as expensive as creating a new cc.LabelTTF. To obtain better performance use cc.LabelAtlas
         * @param {String} text Text content for the label
         */
        public setString(text:string):void;

        /**
         * Sets Horizontal Alignment of cc.LabelTTF
         * @param {cc.TEXT_ALIGNMENT_LEFT|cc.TEXT_ALIGNMENT_CENTER|cc.TEXT_ALIGNMENT_RIGHT} alignment Horizontal Alignment
         */
        public setHorizontalAlignment(alignment:number):void;

        /**
         * Sets Vertical Alignment of cc.LabelTTF
         * @param {cc.VERTICAL_TEXT_ALIGNMENT_TOP|cc.VERTICAL_TEXT_ALIGNMENT_CENTER|cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM} verticalAlignment
         */
        public setVerticalAlignment(verticalAlignment:number):void;

        /**
         * Set Dimensions of cc.LabelTTF, the dimension is the maximum size of the label, set it so that label will automatically change lines when necessary.
         * @param {cc.Size|Number} dim dimensions or width of dimensions
         * @param {Number} [height] height of dimensions
         */
        public setDimensions(dim:Size|number, height?:number):void;

        /**
         * Sets font size of cc.LabelTTF
         * @param {Number} fontSize
         */
        public setFontSize(fontSize:number):void;

        /**
         * Sets font name of cc.LabelTTF
         * @param {String} fontName
         */
        public setFontName(fontName:number):void;

        public setTextureRect(rect:Rect, rotated:boolean, untrimmedSize:Size):boolean;

        /**
         * set Target to draw on
         * @param {boolean} onCacheMode
         */
        public setDrawMode(onCacheMode:boolean):void;
    }
}/// <reference path="../cocos2d-lib.d.ts" />

declare module cc {

    ////////////////////////////////////////////////////////////////////////////////
    // File: cocos2d/layers/CCLayer.js
    ////////////////////////////////////////////////////////////////////////////////

    //+-------------------- Variable Definitions --------------------+//
    //+-------------------- Function Definitions --------------------+//
    //+-------------------- Class Definitions --------------------+//

    /** cc.Layer is a subclass of cc.Node that implements the TouchEventsDelegate protocol.
     * All features from cc.Node are valid, plus the bake feature: Baked layer can cache a static layer to improve performance
     * @class
     * @extends cc.Node
     */
    export class Layer extends Node {
        /**
         * Constructor of cc.Layer, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
         */
        constructor();

        /**
         * Sets the layer to cache all of children to a bake sprite, and draw itself by bake sprite. recommend using it in UI.
         * This is useful only in html5 engine
         * @function
         * @see cc.Layer#unbake
         */
        public bake():void;

        /**
         * Cancel the layer to cache all of children to a bake sprite.
         * This is useful only in html5 engine
         * @function
         * @see cc.Layer#bake
         */
        public unbake():void;
    }

    /**
     *
     * CCLayerColor is a subclass of CCLayer that implements the CCRGBAProtocol protocol.
     *  All features from CCLayer are valid, plus the following new features:
     * - opacity
     * - RGB colors
     * @class
     * @extends cc.Layer
     *
     * @param {cc.Color} [color=] The color of the layer
     * @param {Number} [width=] The width of the layer
     * @param {Number} [height=] The height of the layer
     *
     * @example
     * // Example
     * //Create a yellow color layer as background
     * var yellowBackground = new cc.LayerColor(cc.color(255,255,0,255));
     * //If you didn't pass in width and height, it defaults to the same size as the canvas
     *
     * //create a yellow box, 200 by 200 in size
     * var yellowBox = new cc.LayerColor(cc.color(255,255,0,255), 200, 200);
     */
    export class LayerColor extends Layer {
        /**
         * Constructor of cc.LayerColor
         * @function
         * @param {cc.Color} [color=]
         * @param {Number} [width=]
         * @param {Number} [height=]
         */
        constructor(color:Color, width?:number, height?:number);
        ctor(color?:Color, width?:number, height?:number);

        /**
         * Returns the blend function
         * @return {cc.BlendFunc}
         */
        public getBlendFunc():BlendFunc;

        /**
         * Sets the blend func, you can pass either a cc.BlendFunc object or source and destination value separately
         * @param {cc.BlendFunc} func
         */
        public setBlendFunc(func:BlendFunc):void;

        /**
         * Sets the blend func, you can pass either a cc.BlendFunc object or source and destination value separately
         * @param {Number} src
         * @param {Number} [dst]
         */
        public setBlendFunc(src:number, dst:number):void;
    }

    /**
     *
     * CCLayerGradient is a subclass of cc.LayerColor that draws gradients across the background.
     *
     * All features from cc.LayerColor are valid, plus the following new features:
     *      * direction
     *      * final color
     *      * interpolation mode
     *
     * Color is interpolated between the startColor and endColor along the given
     * vector (starting at the origin, ending at the terminus).  If no vector is
     * supplied, it defaults to (0, -1) -- a fade from top to bottom.
     *
     * If 'compressedInterpolation' is disabled, you will not see either the start or end color for
     * non-cardinal vectors; a smooth gradient implying both end points will be still
     * be drawn, however.
     *
     * If 'compressedInterpolation' is enabled (default mode) you will see both the start and end colors of the gradient.
     *
     * @class
     * @extends cc.LayerColor
     *
     * @param {cc.Color} start Starting color
     * @param {cc.Color} end Ending color
     * @param {cc.Point} [v=cc.p(0, -1)] A vector defines the gradient direction, default direction is from top to bottom
     *
     * @property {cc.Color} startColor              - Start color of the color gradient
     * @property {cc.Color} endColor                - End color of the color gradient
     * @property {Number}   startOpacity            - Start opacity of the color gradient
     * @property {Number}   endOpacity              - End opacity of the color gradient
     * @property {Number}   vector                  - Direction vector of the color gradient
     * @property {Number}   compressedInterpolation  - Indicate whether or not the interpolation will be compressed
     */
    export class LayerGradient extends LayerColor {
        /**
         * TODO: Make some kind of type for the "stops" array, I believe the fields are: {p:number, color:Color}
         * Constructor of cc.LayerGradient
         * @param {cc.Color} start
         * @param {cc.Color} end
         * @param {cc.Point} [v=cc.p(0, -1)]
         * @param {Array|Null} stops
         *
         * @example Using ColorStops argument:
         * //startColor & endColor are for default and backward compatibility
         * var layerGradient = new cc.LayerGradient(cc.color.RED, new cc.Color(255,0,0,0), cc.p(0, -1),
         *                                          [{p:0, color: cc.color.RED},
         *                                           {p:.5, color: new cc.Color(0,0,0,0)},
         *                                           {p:1, color: cc.color.RED}]);
         * //where p = A value between 0.0 and 1.0 that represents the position between start and end in a gradient
         *
         */
        constructor(start:Color, end:Color, v:Point, stops?:any[]);
        ctor(start?:Color, end?:Color|number, v?:Point|number, stops?:any[]);
    }
}
/// <reference path="../cocos2d-lib.d.ts" />

declare namespace cc {
    ////////////////////////////////////////////////////////////////////////////////
    // File: cocos2d/core/platform/CCClass.js
    ////////////////////////////////////////////////////////////////////////////////

    //+---------- Function definitions ----------+//

    /**
     * Common getter setter configuration function
     * @function
     * @param {Object}   proto      A class prototype or an object to config
     * @param {String}   prop       Property name
     * @param {function} getter     Getter function for the property
     * @param {function} setter     Setter function for the property
     * @param {String}   getterName Name of getter function for the property
     * @param {String}   setterName Name of setter function for the property
     */
    export function defineGetterSetter(proto, prop, getter, setter, getterName, setterName): void;

    // TODO: Can restrict clone() to overloaded declarations that take a cc.Class and and Array, instead of an Any?
    /**
     * Create a new object and copy all properties in an exist object to the new object
     * @function
     * @param {object|Array} obj The source object
     * @return {Array|object} The created object
     */
    export function clone(obj: any): any;

    // TODO: Can restrict inject() to overloaded declarations that take a cc.Class and and Array, instead of an Any?
    // TODO: Fill these comments in with a descrition of what the function does
    /**
     * Fill in this description later, I believe the methods just injects the prototype of the source object into the
     * destination object (all properties in src => dest).
     *
     * @function
     * @param {object|Array} srcPrototype The source object
     * @param {object|Array} destPrototype The destination object
     * @return {Array|object} The modified object
     */
    export function inject(srcPrototype: any, destPrototype: any): any;

    //+---------- Class definitions ----------+//

    /* Managed JavaScript Inheritance
     * Based on John Resig's Simple JavaScript Inheritance http://ejohn.org/blog/simple-javascript-inheritance/
     * MIT Licensed.
     */
    export class Class {
        public ctor():void;
        public description():string;
    }

    // +---------------------------------------------------------------------------
    // File: cocos2d/core/platform/CCMacro.js
    // +---------------------------------------------------------------------------

    // Variables / Constants
    /**
     * @constant
     * @type Number
     */
    export const INVALID_INDEX:number;

    /**
     * PI is the ratio of a circle's circumference to its diameter.
     * @constant
     * @type Number
     */
    export const PI:number;

    /**
     * @constant
     * @type Number
     */
    export const FLT_MAX:number;

    /**
     * @constant
     * @type Number
     */
    export const FLT_MIN:number;

    /**
     * @constant
     * @type Number
     */
    export const RAD:number;

    /**
     * @constant
     * @type Number
     */
    export const DEG:number;

    /**
     * maximum unsigned int value
     * @constant
     * @type Number
     */
    export const UINT_MAX:number;

    /**
     * 
     *     Linear interpolation between 2 numbers, the ratio sets how much it is biased to each end
     * 
     * @param {Number} a number A
     * @param {Number} b number B
     * @param {Number} r ratio between 0 and 1
     * @function
     * @example
     * cc.lerp(2,10,0.5)//returns 6
     * cc.lerp(2,10,0.2)//returns 3.6
     */
    export function lerp(a:number, b:number, r:number):number;

    /**
     * get a random number from 0 to 0xffffff
     * @function
     * @returns {number}
     */
    export function rand():number;

    /**
     * returns a random float between -1 and 1
     * @return {Number}
     * @function
     */
    export function randomMinus1To1():number;

    /**
     * returns a random float between 0 and 1
     * @return {Number}
     * @function
     */
    export function random0To1():number;

    /**
     * converts degrees to radians
     * @param {Number} angle
     * @return {Number}
     * @function
     */
    export function degreesToRadians(angle:number):number;

    /**
     * converts radians to degrees
     * @param {Number} angle
     * @return {Number}
     * @function
     */
    export function radiansToDegrees(angle:number):number;

    /**
     * converts radians to degrees
     * @param {Number} angle
     * @return {Number}
     * @function
     */
    export function radiansToDegress(angle:number):number;

    /**
     * @constant
     * @type Number
     */
    export const REPEAT_FOREVER:number;

    /**
     * Helpful macro that setups the GL server state, the correct GL program and sets the Model View Projection matrix
     * @param {cc.Node} node setup node
     * @function
     */
    export function nodeDrawSetup(node:Node):void;

    /**
     * 
     *     GL states that are enabled:
     *       - GL_TEXTURE_2D
     *       - GL_VERTEX_ARRAY
     *       - GL_TEXTURE_COORD_ARRAY
     *       - GL_COLOR_ARRAY
     * 
     * @function
     */
    export function enableDefaultGLStates():void;

    /**
     * 
     *   Disable default GL states:
     *     - GL_TEXTURE_2D
     *     - GL_TEXTURE_COORD_ARRAY
     *     - GL_COLOR_ARRAY
     * 
     * @function
     */
    export function disableDefaultGLStates();

    /**
     * 
     *  Increments the GL Draws counts by one.
     *  The number of calls per frame are displayed on the screen when the CCDirector's stats are enabled.
     * 
     * @param {Number} addNumber
     * @function
     */
    export function incrementGLDraws(addNumber:number):void;

    /**
     * @constant
     * @type Number
     */
    export const FLT_EPSILON:number;

    /**
     * 
     *     On Mac it returns 1;
     *     On iPhone it returns 2 if RetinaDisplay is On. Otherwise it returns 1
     * 
     * @return {Number}
     * @function
     */
    export function contentScaleFactor():number;

    /**
     * Converts a Point in points to pixels
     * @param {cc.Point} points
     * @return {cc.Point}
     * @function
     */
    export function pointPointsToPixels(points:Point):Point;

    /**
     * Converts a Point in pixels to points
     * @param {cc.Rect} pixels
     * @return {cc.Point}
     * @function
     */
    export function pointPixelsToPoints(pixels:Rect):Point;

    /**
     * Converts a Size in points to pixels
     * @param {cc.Size} sizeInPoints
     * @return {cc.Size}
     * @function
     */
    export function sizePointsToPixels(sizeInPoints:Size):Size;

    /**
     * Converts a size in pixels to points
     * @param {cc.Size} sizeInPixels
     * @return {cc.Size}
     * @function
     */
    export function sizePixelsToPoints(sizeInPixels:Size):Size;

    /**
     * Converts a rect in pixels to points
     * @param {cc.Rect} pixel
     * @return {cc.Rect}
     * @function
     */
    export function rectPixelsToPoints(pixels:Rect):Rect;

    /**
     * Converts a rect in points to pixels
     * @param {cc.Rect} point
     * @return {cc.Rect}
     * @function
     */
    export function rectPointsToPixels(point:Rect):Rect;

//some gl constant variable
    /**
     * @constant
     * @type Number
     */
    export const ONE:number;

    /**
     * @constant
     * @type Number
     */
    export const ZERO:number;

    /**
     * @constant
     * @type Number
     */
    export const SRC_ALPHA:number;

    /**
     * @constant
     * @type Number
     */
    export const SRC_ALPHA_SATURATE:number;

    /**
     * @constant
     * @type Number
     */
    export const SRC_COLOR:number;

    /**
     * @constant
     * @type Number
     */
    export const DST_ALPHA:number;

    /**
     * @constant
     * @type Number
     */
    export const DST_COLOR:number;

    /**
     * @constant
     * @type Number
     */
    export const ONE_MINUS_SRC_ALPHA:number;

    /**
     * @constant
     * @type Number
     */
    export const ONE_MINUS_SRC_COLOR:number;

    /**
     * @constant
     * @type Number
     */
    export const ONE_MINUS_DST_ALPHA:number;

    /**
     * @constant
     * @type Number
     */
    export const ONE_MINUS_DST_COLOR:number;

    /**
     * @constant
     * @type Number
     */
    export const ONE_MINUS_CONSTANT_ALPHA:number;

    /**
     * @constant
     * @type Number
     */
    export const ONE_MINUS_CONSTANT_COLOR:number;

    /**
     * the constant variable equals gl.LINEAR for texture
     * @constant
     * @type Number
     */
    export const LINEAR:number;

    /**
     * the constant variable equals gl.REPEAT for texture
     * @constant
     * @type Number
     */
    export const REPEAT:number;

    /**
     * the constant variable equals gl.CLAMP_TO_EDGE for texture
     * @constant
     * @type Number
     */
    export const CLAMP_TO_EDGE:number;

    /**
     * the constant variable equals gl.MIRRORED_REPEAT for texture
     * @constant
     * @type Number
     */
    export const MIRRORED_REPEAT:number;

    /**
     * default gl blend src function. Compatible with premultiplied alpha images.
     * @constant
     * @name export const BLEND_SRC
     * @type Number
     */
    export const BLEND_SRC:number;

    /**
     * default gl blend dst function. Compatible with premultiplied alpha images.
     * @constant
     * @type Number
     */
    export const BLEND_DST:number;

    /**
     * Check webgl error.Error will be shown in console if exists.
     * @function
     */
    export function checkGLErrorDebug();

//Possible device orientations
    /**
     * Device oriented vertically, home button on the bottom (UIDeviceOrientationPortrait)
     * @constant
     * @type Number
     */
    export const DEVICE_ORIENTATION_PORTRAIT:number;

    /**
     * Device oriented horizontally, home button on the right (UIDeviceOrientationLandscapeLeft)
     * @constant
     * @type Number
     */
    export const DEVICE_ORIENTATION_LANDSCAPE_LEFT:number;

    /**
     * Device oriented vertically, home button on the top (UIDeviceOrientationPortraitUpsideDown)
     * @constant
     * @type Number
     */
    export const DEVICE_ORIENTATION_PORTRAIT_UPSIDE_DOWN:number;

    /**
     * Device oriented horizontally, home button on the left (UIDeviceOrientationLandscapeRight)
     * @constant
     * @type Number
     */
    export const DEVICE_ORIENTATION_LANDSCAPE_RIGHT:number;

    /**
     * In browsers, we only support 2 orientations by change window size.
     * @constant
     * @type Number
     */
    export const DEVICE_MAX_ORIENTATIONS:number;


// ------------------- vertex attrib flags -----------------------------
    /**
     * @constant
     * @type {Number}
     */
    export const VERTEX_ATTRIB_FLAG_NONE:number;
    /**
     * @constant
     * @type {Number}
     */
    export const VERTEX_ATTRIB_FLAG_POSITION:number;
    /**
     * @constant
     * @type {Number}
     */
    export const VERTEX_ATTRIB_FLAG_COLOR:number;
    /**
     * @constant
     * @type {Number}
     */
    export const VERTEX_ATTRIB_FLAG_TEX_COORDS:number;
    /**
     * @constant
     * @type {Number}
     */
    export const VERTEX_ATTRIB_FLAG_POS_COLOR_TEX:number;

    /**
     * GL server side states
     * @constant
     * @type {Number}
     */
    export const GL_ALL:number;

//-------------Vertex Attributes-----------
    /**
     * @constant
     * @type {Number}
     */
    export const VERTEX_ATTRIB_POSITION:number;
    /**
     * @constant
     * @type {Number}
     */
    export const VERTEX_ATTRIB_COLOR:number;
    /**
     * @constant
     * @type {Number}
     */
    export const VERTEX_ATTRIB_TEX_COORDS:number;
    /**
     * @constant
     * @type {Number}
     */
    export const VERTEX_ATTRIB_MAX:number;

//------------Uniforms------------------
    /**
     * @constant
     * @type {Number}
     */
    export const UNIFORM_PMATRIX:number;
    /**
     * @constant
     * @type {Number}
     */
    export const UNIFORM_MVMATRIX:number;
    /**
     * @constant
     * @type {Number}
     */
    export const UNIFORM_MVPMATRIX:number;
    /**
     * @constant
     * @type {Number}
     */
    export const UNIFORM_TIME:number;
    /**
     * @constant
     * @type {Number}
     */
    export const UNIFORM_SINTIME:number;
    /**
     * @constant
     * @type {Number}
     */
    export const UNIFORM_COSTIME:number;
    /**
     * @constant
     * @type {Number}
     */
    export const UNIFORM_RANDOM01:number;
    /**
     * @constant
     * @type {Number}
     */
    export const UNIFORM_SAMPLER:number;
    /**
     * @constant
     * @type {Number}
     */
    export const UNIFORM_MAX:number;

//------------Shader Name---------------
    /**
     * @constant
     * @type {String}
     */
    export const SHADER_POSITION_TEXTURECOLOR:string;
    /**
     * @constant
     * @type {String}
     */
    export const SHADER_POSITION_TEXTURECOLORALPHATEST:string;
    /**
     * @constant
     * @type {String}
     */
    export const SHADER_POSITION_COLOR:string;
    /**
     * @constant
     * @type {String}
     */
    export const SHADER_POSITION_TEXTURE:string;
    /**
     * @constant
     * @type {String}
     */
    export const SHADER_POSITION_TEXTURE_UCOLOR:string;
    /**
     * @constant
     * @type {String}
     */
    export const SHADER_POSITION_TEXTUREA8COLOR:string;
    /**
     * @constant
     * @type {String}
     */
    export const SHADER_POSITION_UCOLOR:string;
    /**
     * @constant
     * @type {String}
     */
    export const SHADER_POSITION_LENGTHTEXTURECOLOR:string;

//------------uniform names----------------
    /**
     * @constant
     * @type {String}
     */
    export const UNIFORM_PMATRIX_S:string;
    /**
     * @constant
     * @type {String}
     */
    export const UNIFORM_MVMATRIX_S:string;
    /**
     * @constant
     * @type {String}
     */
    export const UNIFORM_MVPMATRIX_S:string;
    /**
     * @constant
     * @type {String}
     */
    export const UNIFORM_TIME_S:string;
    /**
     * @constant
     * @type {String}
     */
    export const UNIFORM_SINTIME_S:string;
    /**
     * @constant
     * @type {String}
     */
    export const UNIFORM_COSTIME_S:string;
    /**
     * @constant
     * @type {String}
     */
    export const UNIFORM_RANDOM01_S:string;
    /**
     * @constant
     * @type {String}
     */
    export const UNIFORM_SAMPLER_S:string;
    /**
     * @constant
     * @type {String}
     */
    export const UNIFORM_ALPHA_TEST_VALUE_S:string;

//------------Attribute names--------------
    /**
     * @constant
     * @type {String}
     */
    export const ATTRIBUTE_NAME_COLOR:string;
    /**
     * @constant
     * @type {String}
     */
    export const ATTRIBUTE_NAME_POSITION:string;
    /**
     * @constant
     * @type {String}
     */
    export const ATTRIBUTE_NAME_TEX_COORD:string;


    /**
     * default size for font size
     * @constant
     * @type Number
     */
    export const ITEM_SIZE:number;

    /**
     * default tag for current item
     * @constant
     * @type Number
     */
    export const CURRENT_ITEM:number;
    /**
     * default tag for zoom action tag
     * @constant
     * @type Number
     */
    export const ZOOM_ACTION_TAG:number;
    /**
     * default tag for normal
     * @constant
     * @type Number
     */
    export const NORMAL_TAG:number;

    /**
     * default selected tag
     * @constant
     * @type Number
     */
    export const SELECTED_TAG:number;

    /**
     * default disabled tag
     * @constant
     * @type Number
     */
    export const DISABLE_TAG:number;


// Array utils

    /**
     * Verify Array's Type
     * @param {Array} arr
     * @param {function} type
     * @return {Boolean}
     * @function
     */
    export function arrayVerifyType(arr:any[], type:any):boolean;

    /**
     * Searches for the first occurance of object and removes it. If object is not found the function has no effect.
     * @function
     * @param {Array} arr Source Array
     * @param {*} delObj  remove object
     */
    export function arrayRemoveObject(arr:any[], delObj:any):void;

    /**
     * Removes from arr all values in minusArr. For each Value in minusArr, the first matching instance in arr will be removed.
     * @function
     * @param {Array} arr Source Array
     * @param {Array} minusArr minus Array
     */
    export function arrayRemoveArray(arr:any[], minusArr:any[]):void;

    /**
     * Inserts some objects at index
     * @function
     * @param {Array} arr
     * @param {Array} addObjs
     * @param {Number} index
     * @return {Array}
     */
    export function arrayAppendObjectsToIndex(arr:any[], addObjs:any[], index:number):any[];

    /**
     * Copy an array's item to a new array (its performance is better than Array.slice)
     * @param {Array} arr
     * @return {Array}
     */
    export function copyArray(arr:any[]):any[];


    ////////////////////////////////////////////////////////////////////////////////
    // File: cocos2d/core/platform/CCTypes.js
    ////////////////////////////////////////////////////////////////////////////////

    //+---------- Variable definitions ----------+//
    /**
     * text alignment : left
     * @constant
     * @type Number
     */
    export var TEXT_ALIGNMENT_LEFT;

    /**
     * text alignment : center
     * @constant
     * @type Number
     */
    export var TEXT_ALIGNMENT_CENTER;

    /**
     * text alignment : right
     * @constant
     * @type Number
     */
    export var TEXT_ALIGNMENT_RIGHT;

    /**
     * text alignment : top
     * @constant
     * @type Number
     */
    export var VERTICAL_TEXT_ALIGNMENT_TOP;

    /**
     * text alignment : center
     * @constant
     * @type Number
     */
    export var VERTICAL_TEXT_ALIGNMENT_CENTER;

    /**
     * text alignment : bottom
     * @constant
     * @type Number
     */
    export var VERTICAL_TEXT_ALIGNMENT_BOTTOM;

    //+---------- Function definitions ----------+//
    /**
     * @function
     * @returns {cc.BlendFunc}
     */
    export function blendFuncDisable():BlendFunc;

    /**
     * Generate a color object based on multiple forms of parameters
     * @example
     *
     * // 1. All channels seperately as parameters
     * var color1 = cc.color(255, 255, 255, 255);
     *
     * // 2. Convert a hex string to a color
     * var color2 = cc.color("#000000");
     *
     * // 3. An color object as parameter
     * var color3 = cc.color({r: 255, g: 255, b: 255, a: 255});
     *
     * Alpha channel is optional. Default value is 255
     *
     * @param {String|cc.Color} color
     * @return {cc.Color}
     */
    export function color(color:Color|string):Color;

    /**
     * Generate a color object based on multiple forms of parameters
     * @example
     *
     * // 1. All channels seperately as parameters
     * var color1 = cc.color(255, 255, 255, 255);
     *
     * // 2. Convert a hex string to a color
     * var color2 = cc.color("#000000");
     *
     * // 3. An color object as parameter
     * var color3 = cc.color({r: 255, g: 255, b: 255, a: 255});
     *
     * Alpha channel is optional. Default value is 255
     *
     * @param {Number} red
     * @param {Number} green
     * @param {Number} blue
     * @param {Number} [alpha=255]
     * @return {cc.Color}
     */
    export function color(red:number, green:number, blue:number, alpha?:number):Color;

    /**
     * returns true if both ccColor3B are equal. Otherwise it returns false.
     * @function
     * @param {cc.Color} color1
     * @param {cc.Color} color2
     * @return {Boolean}  true if both ccColor3B are equal. Otherwise it returns false.
     */
    export function colorEqual(color1:Color, color2:Color);

    /**
     * convert Color to a string of color for style.
     * e.g.  cc.color(255,6,255)  to : "#ff06ff"
     * @function
     * @param {cc.Color} color
     * @return {String}
     */
    export function colorToHex(color:Color):string;

    /**
     * convert a string of color for style to Color.
     * e.g. "#ff06ff"  to : cc.color(255,6,255)
     * @function
     * @param {String} hex
     * @return {cc.Color}
     */
    export function hexToColor(hex:string):Color;

    /**
     * Helper macro that creates an Tex2F type: A texcoord composed of 2 floats: u, y
     * @function
     * @param {Number} u
     * @param {Number} v
     * @return {cc.Tex2F}
     */
    export function tex2(u:number, v:number):Tex2F;

    /**
     * Helper macro that creates an Vertex2F type composed of 2 floats: x, y
     * @function
     * @param {Number} x
     * @param {Number} y
     * @return {cc.Vertex2F}
     */
    export function vertex2(x:number, y:number):Vertex2F;

    /**
     * Helper macro that creates an Vertex3F type composed of 3 floats: x, y, z
     * @function
     * @param {Number} x
     * @param {Number} y
     * @param {Number} z
     * @return {cc.Vertex3F}
     */
    export function vertex3(x:number, y:number, z:number):Vertex3F;

    //+---------- Class definitions ----------+//
    /**
     * the device accelerometer reports values for each axis in units of g-force
     * @class cc.Acceleration
     */
    export class Acceleration {
        /**
         * the device accelerometer reports values for each axis in units of g-force
         * @constructor
         * @param {Number} x
         * @param {Number} y
         * @param {Number} z
         * @param {Number} timestamp
         */
        constructor (x:number, y:number, z:number, timestamp:number);
    }

    /**
     * Blend Function used for textures
     * @Class cc.BlendFunc
     */
    export class BlendFunc {
        /**
         * Blend Function used for textures
         * @Constructor
         * @param {Number} src source blend function
         * @param {Number} dst destination blend function
         */
        constructor(src:number, dst:number);
    }

    /**
     * Color class, please use cc.color() to construct a color
     * @class cc.Color
     * @see cc.color
     */
    export class Color {
        public r:number;
        public g:number;
        public b:number;
        public a:number;

        /**
         * Color class, please use cc.color() to construct a color
         * @class cc.Color
         * @param {Number} red
         * @param {Number} green
         * @param {Number} blue
         * @param {Number} alpha
         * @see cc.color
         */
        constructor(red:number, green:number, blue:number, alpha:number);
    }

    /**
     * TODO: Define type for properties arg in c'tor. Figure out what the structure for props is and make a class.
     * Common usage:
     *
     * var fontDef = new cc.FontDefinition();
     * fontDef.fontName = "Arial";
     * fontDef.fontSize = 12;
     * ...
     *
     * OR using inline definition usefull for constructor injection
     *
     * var fontDef = new cc.FontDefinition({
     *  fontName: "Arial",
     *  fontSize: 12
     * });
     *
     *
     *
     * @class cc.FontDefinition
     */
    export class FontDefinition {
        public fontName;
        public fontSize;
        public textAlign;
        public verticalAlign;
        public fillStyle;
        public boundingWidth;
        public boundingHeight;

        public strokeEnabled;
        public strokeStyle;
        public lineWidth;
        public lineHeight;
        public fontStyle;
        public fontWeight;

        public shadowEnabled;
        public shadowOffsetX;
        public shadowOffsetY;
        public shadowBlur;
        public shadowOpacity;

        /**
         * TODO: Define type for properties arg in c'tor. Figure out what the structure for props is and make a class (or more likely, an interface).
         * @param {Object} properties - (OPTIONAL) Allow inline FontDefinition
         * @constructor
         */
        constructor(properties:any);
    }

    /**
     * @class cc.Tex2F
     */
    export class Tex2F {
        /**
         * @constructor
         * @param {Number} u
         * @param {Number} v
         */
        constructor(u:number, v:number);
    }

    /**
     * @class cc.Vertex2F
     */
    export class Vertex2F {
        /**
         * @constructor
         * @param {Number} x
         * @param {Number} y
         */
        constructor(x:number, y:number);
    }

    /**
     * @class cc.Vertex3F
     */
    export class Vertex3F {
        /**
         * @constructor
         * @param {Number} x
         * @param {Number} y
         * @param {Number} z
         */
        constructor (x:number, y:number, z:number);
    }

    ////////////////////////////////////////////////////////////////////////////////
    // File: cocos2d/core/platform/CCTypesWebGL.js
    ////////////////////////////////////////////////////////////////////////////////
    //    //redefine cc.Vertex2F
    //    /**
    //     * @class cc.Vertex2F
    //     * @param {Number} x
    //     * @param {Number}y
    //     * @param {Array} arrayBuffer
    //     * @param {Number}offset
    //     * @constructor
    //     */
    //    cc.Vertex2F = function (x, y, arrayBuffer, offset) {
    //        this._arrayBuffer = arrayBuffer || new ArrayBuffer(cc.Vertex2F.BYTES_PER_ELEMENT);
    //        this._offset = offset || 0;
    //
    //        this._xF32 = new Float32Array(this._arrayBuffer, this._offset, 1);
    //        this._yF32 = new Float32Array(this._arrayBuffer, this._offset + 4, 1);
    //        this._xF32[0] = x || 0;
    //        this._yF32[0] = y || 0;
    //    };
    //    /**
    //     * @constant
    //     * @type {number}
    //     */
    //    cc.Vertex2F.BYTES_PER_ELEMENT = 8;
    //
    //    _p = cc.Vertex2F.prototype;
    //    _p._getX = function () {
    //        return this._xF32[0];
    //    };
    //    _p._setX = function (xValue) {
    //        this._xF32[0] = xValue;
    //    };
    //    _p._getY = function () {
    //        return this._yF32[0];
    //    };
    //    _p._setY = function (yValue) {
    //        this._yF32[0] = yValue;
    //    };
    //    /** @expose */
    //    _p.x;
    //    cc.defineGetterSetter(_p, "x", _p._getX, _p._setX);
    //    /** @expose */
    //    _p.y;
    //    cc.defineGetterSetter(_p, "y", _p._getY, _p._setY);
    //
    //    // redefine cc.Vertex3F
    //    /**
    //     * @class cc.Vertex3F
    //     * @param {Number} x
    //     * @param {Number} y
    //     * @param {Number}z
    //     * @param {Array} arrayBuffer
    //     * @param {Number} offset
    //     * @constructor
    //     */
    //    cc.Vertex3F = function (x, y, z, arrayBuffer, offset) {
    //        this._arrayBuffer = arrayBuffer || new ArrayBuffer(cc.Vertex3F.BYTES_PER_ELEMENT);
    //        this._offset = offset || 0;
    //
    //        var locArrayBuffer = this._arrayBuffer, locOffset = this._offset;
    //        this._xF32 = new Float32Array(locArrayBuffer, locOffset, 1);
    //        this._xF32[0] = x || 0;
    //        this._yF32 = new Float32Array(locArrayBuffer, locOffset + Float32Array.BYTES_PER_ELEMENT, 1);
    //        this._yF32[0] = y || 0;
    //        this._zF32 = new Float32Array(locArrayBuffer, locOffset + Float32Array.BYTES_PER_ELEMENT * 2, 1);
    //        this._zF32[0] = z || 0;
    //    };
    //    /**
    //     * @constant
    //     * @type {number}
    //     */
    //    cc.Vertex3F.BYTES_PER_ELEMENT = 12;
    //
    //    _p = cc.Vertex3F.prototype;
    //    _p._getX = function () {
    //        return this._xF32[0];
    //    };
    //    _p._setX = function (xValue) {
    //        this._xF32[0] = xValue;
    //    };
    //    _p._getY = function () {
    //        return this._yF32[0];
    //    };
    //    _p._setY = function (yValue) {
    //        this._yF32[0] = yValue;
    //    };
    //    _p._getZ = function () {
    //        return this._zF32[0];
    //    };
    //    _p._setZ = function (zValue) {
    //        this._zF32[0] = zValue;
    //    };
    //    /** @expose */
    //    _p.x;
    //    cc.defineGetterSetter(_p, "x", _p._getX, _p._setX);
    //    /** @expose */
    //    _p.y;
    //    cc.defineGetterSetter(_p, "y", _p._getY, _p._setY);
    //    /** @expose */
    //    _p.z;
    //    cc.defineGetterSetter(_p, "z", _p._getZ, _p._setZ);
    //
    //    // redefine cc.Tex2F
    //    /**
    //     * @class cc.Tex2F
    //     * @param {Number} u
    //     * @param {Number} v
    //     * @param {Array} arrayBuffer
    //     * @param {Number} offset
    //     * @constructor
    //     */
    //    cc.Tex2F = function (u, v, arrayBuffer, offset) {
    //        this._arrayBuffer = arrayBuffer || new ArrayBuffer(cc.Tex2F.BYTES_PER_ELEMENT);
    //        this._offset = offset || 0;
    //
    //        this._uF32 = new Float32Array(this._arrayBuffer, this._offset, 1);
    //        this._vF32 = new Float32Array(this._arrayBuffer, this._offset + 4, 1);
    //        this._uF32[0] = u || 0;
    //        this._vF32[0] = v || 0;
    //    };
    //    /**
    //     * @constants
    //     * @type {number}
    //     */
    //    cc.Tex2F.BYTES_PER_ELEMENT = 8;
    //
    //    _p = cc.Tex2F.prototype;
    //    _p._getU = function () {
    //        return this._uF32[0];
    //    };
    //    _p._setU = function (xValue) {
    //        this._uF32[0] = xValue;
    //    };
    //    _p._getV = function () {
    //        return this._vF32[0];
    //    };
    //    _p._setV = function (yValue) {
    //        this._vF32[0] = yValue;
    //    };
    //    /** @expose */
    //    _p.u;
    //    cc.defineGetterSetter(_p, "u", _p._getU, _p._setU);
    //    /** @expose */
    //    _p.v;
    //    cc.defineGetterSetter(_p, "v", _p._getV, _p._setV);

    //redefine cc.Quad2
    /**
     * @class cc.Quad2
     * @param {cc.Vertex2F} tl
     * @param {cc.Vertex2F} tr
     * @param {cc.Vertex2F} bl
     * @param {cc.Vertex2F} br
     * @param {Array} arrayBuffer
     * @param {Number} offset
     * @constructor
     */
    export class Quad2 {
        public static BYTES_PER_ELEMENT:number;
        public constructor(tl:Vertex2F, tr:Vertex2F, bl:Vertex2F, br:Vertex2F, arrayBuffer:Quad2[], offset:number);
    }


    /**
     * A 3D Quad. 4 * 3 floats
     * @Class cc.Quad3
     * @Construct
     * @param {cc.Vertex3F} bl1
     * @param {cc.Vertex3F} br1
     * @param {cc.Vertex3F} tl1
     * @param {cc.Vertex3F} tr1
     */
    export class Quad3 {
        public constructor(bl1:Vertex3F, br1:Vertex3F, tl1:Vertex3F, tr1:Vertex3F);
    }

    //redefine cc.V3F_C4B_T2F
    /**
     * @class cc.V3F_C4B_T2F
     * @param {cc.Vertex3F} vertices
     * @param { cc.color} colors
     * @param {cc.Tex2F} texCoords
     * @param {Array} arrayBuffer
     * @param {Number} offset
     * @constructor
     */
    export class V3F_C4B_T2F {
        public static BYTES_PER_ELEMENT:number;
        public constructor (vertices:Vertex3F, colors:Color, texCoords:Tex2F, arrayBuffer:V3F_C4B_T2F[], offset:number);
    }

    //redefine cc.V3F_C4B_T2F_Quad
    /**
     * @cc.class cc.V3F_C4B_T2F_Quad
     * @param {cc.V3F_C4B_T2F} tl
     * @param {cc.V3F_C4B_T2F} bl
     * @param {cc.V3F_C4B_T2F} tr
     * @param {cc.V3F_C4B_T2F} br
     * @param {Array} arrayBuffer
     * @param {Number} offset
     * @constructor
     */
    export class V3F_C4B_T2F_Quad {
        public static BYTES_PER_ELEMENT:number;

        public constructor(tl:V3F_C4B_T2F, bl:V3F_C4B_T2F, tr:V3F_C4B_T2F, br:V3F_C4B_T2F, arrayBuffer:V3F_C4B_T2F[], offset:number);
    }

    /**
     * @function
     * @returns {cc.V3F_C4B_T2F_Quad}
     */
    export function V3F_C4B_T2F_QuadZero(): V3F_C4B_T2F_Quad;

    /**
     * @function
     * @param {cc.V3F_C4B_T2F_Quad} sourceQuad
     * @return {cc.V3F_C4B_T2F_Quad}
     */
    export function V3F_C4B_T2F_QuadCopy(sourceQuad:V3F_C4B_T2F_Quad): V3F_C4B_T2F_Quad;

    /**
     * @function
     * @param {Array} sourceQuads
     * @returns {Array}
     */
    export function V3F_C4B_T2F_QuadsCopy(sourceQuads:V3F_C4B_T2F_Quad[]): V3F_C4B_T2F_Quad[];

    //redefine cc.V2F_C4B_T2F
    /**
     * @class cc.V2F_C4B_T2F
     * @param {cc.Vertex2F} vertices
     * @param {cc.color} colors
     * @param {cc.Tex2F} texCoords
     * @param {Array} arrayBuffer
     * @param {Number} offset
     * @constructor
     */
        //cc.V2F_C4B_T2F = function (vertices, colors, texCoords, arrayBuffer, offset) {
    export class V2F_C4B_T2F {
        public static BYTES_PER_ELEMENT:number;
        public constructor(vertices:Vertex2F, colors:Color, texCoords:Tex2F, arrayBuffer:V2F_C4B_T2F[], offset:number);
    }

    //redefine cc.V2F_C4B_T2F_Triangle
    /**
     * @class cc.V2F_C4B_T2F_Triangle
     * @param {cc.V2F_C4B_T2F} a
     * @param {cc.V2F_C4B_T2F} b
     * @param {cc.V2F_C4B_T2F} c
     * @param {Array} arrayBuffer
     * @param {Number} offset
     * @constructor
     */
    export class V2F_C4B_T2F_Triangle {
        public static BYTES_PER_ELEMENT:number;
        public constructor(a:V2F_C4B_T2F, b:V2F_C4B_T2F, c:V2F_C4B_T2F, arrayBuffer:V2F_C4B_T2F_Triangle[], offset:number);
    }

    ////////////////////////////////////////////////////////////////////////////////
    // File: cocos2d/core/platform/CCEGLView.js
    ////////////////////////////////////////////////////////////////////////////////
    // TODO: Figure out where the fuck the cc.View class is defined
    export interface View extends Class {}

    /**
     * @ignore
     */
    //cc.Touches = [];
    //cc.TouchesIntergerDict = {};

    export const DENSITYDPI_DEVICE:string;
    export const DENSITYDPI_HIGH:string;
    export const DENSITYDPI_MEDIUM:string;
    export const DENSITYDPI_LOW:string;

    /**
     * cc.view is the singleton object which represents the game window.
     * It's main task include: 
     *  - Apply the design resolution policy
     *  - Provide interaction with the window, like resize event on web, retina display support, etc...
     *  - Manage the game view port which can be different with the window
     *  - Manage the content scale and translation
     * 
     * Since the cc.view is a singleton, you don't need to call any constructor or create functions,
     * the standard way to use it is by calling:
     *  - cc.view.methodName(); 
     * @class
     * @name cc.view
     * @extend cc.Class
     */
    export class EGLView extends Class implements View {
        /**
         * Constructor of cc.EGLView
         */
        //ctor: function () {
        //public constructor();

        /**
         * 
         * Sets view's target-densitydpi for android mobile browser. it can be set to:           
         *   1. cc.DENSITYDPI_DEVICE, value is "device-dpi"                                      
         *   2. cc.DENSITYDPI_HIGH, value is "high-dpi"  (default value)                         
         *   3. cc.DENSITYDPI_MEDIUM, value is "medium-dpi" (browser's default value)            
         *   4. cc.DENSITYDPI_LOW, value is "low-dpi"                                            
         *   5. Custom value, e.g: "480"                                                         
         * 
         * @param {String} densityDPI
         */
        public setTargetDensityDPI(densityDPI:string):void;

        /**
         * Returns the current target-densitydpi value of cc.view.
         * @returns {String}
         */
        public getTargetDensityDPI():string;

        /**
         * Sets whether resize canvas automatically when browser's size changed.
         * Useful only on web.
         * @param {Boolean} enabled Whether enable automatic resize with browser's resize event
         */
        public resizeWithBrowserSize(enabled:boolean):void;

        /**
         * Sets the callback function for cc.view's resize action,
         * this callback will be invoked before applying resolution policy, 
         * so you can do any additional modifications within the callback.
         * Useful only on web.
         * @param {Function|null} callback The callback function
         */
        public setResizeCallback(callback?:()=>void):void;

        // TODO: Shouldn't this return a boolean?!?
        public initialize():void;

        /**
         * Sets whether the engine modify the "viewport" meta in your web page.
         * It's enabled by default, we strongly suggest you not to disable it.
         * And even when it's enabled, you can still set your own "viewport" meta, it won't be overridden
         * Only useful on web
         * @param {Boolean} enabled Enable automatic modification to "viewport" meta
         */
        public adjustViewPort(enabled:boolean):void;

        /**
         * Retina support is enabled by default for Apple device but disabled for other devices,
         * it takes effect only when you called setDesignResolutionPolicy
         * Only useful on web
         * @param {Boolean} enabled  Enable or disable retina display
         */
        public enableRetina(enabled:boolean):void;

        /**
         * Check whether retina display is enabled.
         * Only useful on web
         * @return {Boolean}
         */
        public isRetinaEnabled():boolean;

        /**
         * If enabled, the application will try automatically to enter full screen mode on mobile devices
         * You can pass true as parameter to enable it and disable it by passing false.
         * Only useful on web
         * @param {Boolean} enabled  Enable or disable auto full screen on mobile devices
         */
        public enableAutoFullScreen(enabled:boolean):void;

        /**
         * Check whether auto full screen is enabled.
         * Only useful on web
         * @return {Boolean} Auto full screen enabled or not
         */
        public isAutoFullScreenEnabled():boolean;

        /**
         * Force destroying EGL view, subclass must implement this method.
         */
        public end();

        /**
         * Get whether render system is ready(no matter opengl or canvas),
         * this name is for the compatibility with cocos2d-x, subclass must implement this method.
         * @return {Boolean}
         */
        public isOpenGLReady():boolean;

        /*
         * Set zoom factor for frame. This method is for debugging big resolution (e.g.new ipad) app on desktop.
         * @param {Number} zoomFactor
         */
        public setFrameZoomFactor(zoomFactor:number):void;

        /**
         * Exchanges the front and back buffers, subclass must implement this method.
         */
        public swapBuffers():void;

        /**
         * Open or close IME keyboard , subclass must implement this method.
         * @param {Boolean} isOpen
         */
        public setIMEKeyboardState(isOpen:boolean):void;

        /**
         * Sets the resolution translate on EGLView
         * @param {Number} offsetLeft
         * @param {Number} offsetTop
         */
        public setContentTranslateLeftTop(offsetLeft:number, offsetTop:number):void;

        /**
         * Returns the resolution translate on EGLView
         * @return {cc.Size|Object}
         */
        //public getContentTranslateLeftTop():any
        public getContentTranslateLeftTop():Size;

        /**
         * Returns the canvas size of the view.
         * On native platforms, it returns the screen size since the view is a fullscreen view.
         * On web, it returns the size of the canvas element.
         * @return {cc.Size}
         */
        public getCanvasSize():Size;

        /**
         * Returns the frame size of the view.
         * On native platforms, it returns the screen size since the view is a fullscreen view.
         * On web, it returns the size of the canvas's outer DOM element.
         * @return {cc.Size}
         */
        public getFrameSize():Size;

        /**
         * On native, it sets the frame size of view.
         * On web, it sets the size of the canvas's outer DOM element.
         * @param {Number} width
         * @param {Number} height
         */
        public setFrameSize(width:number, height:number):void;

        /**
         * Empty function
         */
        public centerWindow();

        /**
         * Returns the visible area size of the view port.
         * @return {cc.Size}
         */
        public getVisibleSize():Size;

        /**
         * Returns the visible area size of the view port.
         * @return {cc.Size}
         */
        public getVisibleSizeInPixel():Size;

        /**
         * Returns the visible origin of the view port.
         * @return {cc.Point}
         */
        public getVisibleOrigin():Point;

        /**
         * Returns the visible origin of the view port.
         * @return {cc.Point}
         */
        public getVisibleOriginInPixel():Point;

        /**
         * Returns whether developer can set content's scale factor.
         * @return {Boolean}
         */
        public canSetContentScaleFactor():boolean;

        /**
         * Returns the current resolution policy
         * @see cc.ResolutionPolicy
         * @return {cc.ResolutionPolicy}
         */
        public getResolutionPolicy():ResolutionPolicy;

        /**
         * Sets the current resolution policy
         * @see cc.ResolutionPolicy
         * @param {cc.ResolutionPolicy|Number} resolutionPolicy
         */
        public setResolutionPolicy(resolutionPolicy:number|ResolutionPolicy):void;

        /**
         * Sets the resolution policy with designed view size in points.
         * The resolution policy include: 
         * [1] ResolutionExactFit       Fill screen by stretch-to-fit: if the design resolution ratio of width to height is different from the screen resolution ratio, your game view will be stretched.
         * [2] ResolutionNoBorder       Full screen without black border: if the design resolution ratio of width to height is different from the screen resolution ratio, two areas of your game view will be cut.
         * [3] ResolutionShowAll        Full screen with black border: if the design resolution ratio of width to height is different from the screen resolution ratio, two black borders will be shown.
         * [4] ResolutionFixedHeight    Scale the content's height to screen's height and proportionally scale its width
         * [5] ResolutionFixedWidth     Scale the content's width to screen's width and proportionally scale its height
         * [cc.ResolutionPolicy]        [Web only feature] Custom resolution policy, constructed by cc.ResolutionPolicy
         * @param {Number} width Design resolution width.
         * @param {Number} height Design resolution height.
         * @param {cc.ResolutionPolicy|Number} resolutionPolicy The resolution policy desired
         */
        public setDesignResolutionSize(width:number, height:number, resolutionPolicy:number|ResolutionPolicy):void;

        /**
         * Returns the designed size for the view.
         * Default resolution size is the same as 'getFrameSize'.
         * @return {cc.Size}
         */
        public getDesignResolutionSize():Size;

        /**
         * Sets the document body to desired pixel resolution and fit the game content to it.
         * This function is very useful for adaptation in mobile browsers.
         * In some HD android devices, the resolution is very high, but its browser performance may not be very good.
         * In this case, enabling retina display is very costy and not suggested, and if retina is disabled, the image may be blurry.
         * But this API can be helpful to set a desired pixel resolution which is in between.
         * This API will do the following:
         *     1. Set viewport's width to the desired width in pixel
         *     2. Set body width to the exact pixel resolution
         *     3. The resolution policy will be reset with designed view size in points.
         * @param {Number} width Design resolution width.
         * @param {Number} height Design resolution height.
         * @param {cc.ResolutionPolicy|Number} resolutionPolicy The resolution policy desired
         */
        public setRealPixelResolution(width:number, height:number, resolutionPolicy:number|ResolutionPolicy):void;

        /**
         * Sets view port rectangle with points.
         * @param {Number} x
         * @param {Number} y
         * @param {Number} w width
         * @param {Number} h height
         */
        public setViewPortInPoints(x:number, y:number, w:number, h:number):void;

        /**
         * Sets Scissor rectangle with points.
         * @param {Number} x
         * @param {Number} y
         * @param {Number} w
         * @param {Number} h
         */
        public setScissorInPoints(x:number, y:number, w:number, h:number):void;

        /**
         * Returns whether GL_SCISSOR_TEST is enable
         * @return {Boolean}
         */
        public isScissorEnabled():boolean;

        /**
         * Returns the current scissor rectangle
         * @return {cc.Rect}
         */
        public getScissorRect():Rect;

        /**
         * Sets the name of the view
         * @param {String} viewName
         */
        public setViewName(viewName:string):void;

        /**
         * Returns the name of the view
         * @return {String}
         */
        public getViewName():string;

        /**
         * Returns the view port rectangle.
         * @return {cc.Rect}
         */
        public getViewPortRect(rect:Rect);

        /**
         * Returns scale factor of the horizontal direction (X axis).
         * @return {Number}
         */
        public getScaleX():number;

        /**
         * Returns scale factor of the vertical direction (Y axis).
         * @return {Number}
         */
        public getScaleY():number;

        /**
         * Returns device pixel ratio for retina display.
         * @return {Number}
         */
        public getDevicePixelRatio():number;

        /**
         * Returns the real location in view for a translation based on a related position
         * @param {Number} tx The X axis translation
         * @param {Number} ty The Y axis translation
         * @param {Object} relatedPos The related position object including "left", "top", "width", "height" informations
         * @return {cc.Point}
         */
        // TODO: Figure out wtf this relatedPos object is
        public convertToLocationInView(tx:number, ty:number, relatedPos:any):Point;
    }

    /**
     * cc.ContainerStrategy class is the root strategy class of container's scale strategy,
     * it controls the behavior of how to scale the cc.container and cc._canvas object
     *
     * @class
     * @extends cc.Class
     */
    export class ContainerStrategy extends Class {
        /**
         * Manipulation before appling the strategy
         * @param {cc.view} view The target view
         */
        public preApply(view:View):void;

        /**
         * Function to apply this strategy
         * @param {cc.view} view
         * @param {cc.Size} designedResolution
         */
        public apply(view:View, designedResolution:Size):void;

        /**
         * Manipulation after applying the strategy
         * @param {cc.view} view  The target view
         */
        public postApply(view:View):void;
    }

    /**
     * cc.ContentStrategy class is the root strategy class of content's scale strategy,
     * it controls the behavior of how to scale the scene and setup the viewport for the game
     *
     * @class
     * @extends cc.Class
     */
    export class ContentStrategy extends Class {
        /**
         * Manipulation before applying the strategy
         * @param {cc.view} view The target view
         */
        public preApply(view:View);

        /**
         * Function to apply this strategy
         * The return value is {scale: [scaleX, scaleY], viewport: {cc.Rect}},
         * The target view can then apply these value to itself, it's preferred not to modify directly its private variables
         * @param {cc.view} view
         * @param {cc.Size} designedResolution
         * @return {object} scaleAndViewportRect
         */
        // TODO: Figure out what return value is
        public apply(view:View, designedResolution:Size):any;

        /**
         * Manipulation after applying the strategy
         * @param {cc.view} view The target view
         */
        public postApply(view:View):void;
    }

// Container scale strategies
    /**
     * @class
     * @extends cc.ContainerStrategy
     */
    export class EqualToFrame extends ContainerStrategy {
        public apply(view:View, designedResolution?:Size):void;
    }

    /**
     * @class
     * @extends cc.ContainerStrategy
     */
    export class ProportionalToFrame extends ContainerStrategy {
        public apply(view:View, designedResolution:Size):void;
    }

    /**
     * @class
     * @extends EqualToFrame
     */
    export class EqualToWindow extends EqualToFrame {
        public preApply(view:View);
        public apply(view:View, designedResolution:Size):any;
    }

    /**
     * @class
     * @extends ProportionalToFrame
     */
    export class ProportionalToWindow extends ProportionalToFrame {
        public preApply(view:View);

        public apply(view:View, designedResolution:Size):any;
    }

    /**
     * @class
     * @extends cc.ContainerStrategy
     */
    export class OriginalContainer extends ContainerStrategy {
        public apply(view:View, designedResolution:Size):any;
    }


//// #NOT STABLE on Android# Alias: Strategy that makes the container's size equals to the window's size
////    cc.ContainerStrategy.EQUAL_TO_WINDOW = new EqualToWindow();
//// #NOT STABLE on Android# Alias: Strategy that scale proportionally the container's size to window's size
////    cc.ContainerStrategy.PROPORTION_TO_WINDOW = new ProportionalToWindow();
//// Alias: Strategy that makes the container's size equals to the frame's size
//        cc.ContainerStrategy.EQUAL_TO_FRAME = new EqualToFrame();
//// Alias: Strategy that scale proportionally the container's size to frame's size
//        cc.ContainerStrategy.PROPORTION_TO_FRAME = new ProportionalToFrame();
//// Alias: Strategy that keeps the original container's size
//        cc.ContainerStrategy.ORIGINAL_CONTAINER = new OriginalContainer();
//

// Content scale strategies
    export class ExactFit extends ContainerStrategy {
        public apply(view:View, designedResolution:Size):any;
    }

    export class ShowAll extends ContainerStrategy {
        public apply(view:View, designedResolution:Size):any;
    }

    export class NoBorder extends ContainerStrategy {
        public apply(view:View, designedResolution:Size):any;
    }

    export class FixedHeight extends ContainerStrategy {
        public apply(view:View, designedResolution:Size):any;
        public postApply(view:View):void;
    }

    export class FixedWidth extends ContainerStrategy {
        public apply(view:View, designedResolution:Size):any;
        public postApply(view:View):void;
    }

//// Alias: Strategy to scale the content's size to container's size, non proportional
//        cc.ContentStrategy.EXACT_FIT = new ExactFit();
//// Alias: Strategy to scale the content's size proportionally to maximum size and keeps the whole content area to be visible
//        cc.ContentStrategy.SHOW_ALL = new ShowAll();
//// Alias: Strategy to scale the content's size proportionally to fill the whole container area
//        cc.ContentStrategy.NO_BORDER = new NoBorder();
//// Alias: Strategy to scale the content's height to container's height and proportionally scale its width
//        cc.ContentStrategy.FIXED_HEIGHT = new FixedHeight();
//// Alias: Strategy to scale the content's width to container's width and proportionally scale its height
//        cc.ContentStrategy.FIXED_WIDTH = new FixedWidth();
//
//    })();
//
    /**
     * cc.ResolutionPolicy class is the root strategy class of scale strategy,
     * its main task is to maintain the compatibility with Cocos2d-x
     *
     * @class
     * @extends cc.Class
     * @param {cc.ContainerStrategy} containerStg The container strategy
     * @param {cc.ContentStrategy} contentStg The content strategy
     */
    export class ResolutionPolicy extends Class {
        /**
         * @memberOf cc.ResolutionPolicy#
         * @name EXACT_FIT
         * @constant
         * @type Number
         * @static
         * The entire application is visible in the specified area without trying to preserve the original aspect ratio.
         * Distortion can occur, and the application may appear stretched or compressed.
         */
        public static EXACT_FIT:number;

        /**
         * @memberOf cc.ResolutionPolicy#
         * @name NO_BORDER
         * @constant
         * @type Number
         * @static
         * The entire application fills the specified area, without distortion but possibly with some cropping,
         * while maintaining the original aspect ratio of the application.
         */
        public static NO_BORDER:number;

        /**
         * @memberOf cc.ResolutionPolicy#
         * @name SHOW_ALL
         * @constant
         * @type Number
         * @static
         * The entire application is visible in the specified area without distortion while maintaining the original
         * aspect ratio of the application. Borders can appear on two sides of the application.
         */
        public static SHOW_ALL:number;

        /**
         * @memberOf cc.ResolutionPolicy#
         * @name FIXED_HEIGHT
         * @constant
         * @type Number
         * @static
         * The application takes the height of the design resolution size and modifies the width of the internal
         * canvas so that it fits the aspect ratio of the device
         * no distortion will occur however you must make sure your application works on different
         * aspect ratios
         */
        public static FIXED_HEIGHT:number;

        /**
         * @memberOf cc.ResolutionPolicy#
         * @name FIXED_WIDTH
         * @constant
         * @type Number
         * @static
         * The application takes the width of the design resolution size and modifies the height of the internal
         * canvas so that it fits the aspect ratio of the device
         * no distortion will occur however you must make sure your application works on different
         * aspect ratios
         */
        public static FIXED_WIDTH:number;

        /**
         * @memberOf cc.ResolutionPolicy#
         * @name UNKNOWN
         * @constant
         * @type Number
         * @static
         * Unknow policy
         */
        public static UNKNOWN:number;

        /**
         * Constructor of cc.ResolutionPolicy
         * @param {cc.ContainerStrategy} containerStg
         * @param {cc.ContentStrategy} contentStg
         */
        public constructor(containerStg:ContainerStrategy, contentStg:ContainerStrategy);

        /**
         * Manipulation before applying the resolution policy
         * @param {cc.view} view The target view
         */
        public preApply(view:View);

        /**
         * Function to apply this resolution policy
         * The return value is {scale: [scaleX, scaleY], viewport: {cc.Rect}},
         * The target view can then apply these value to itself, it's preferred not to modify directly its private variables
         * @param {cc.view} view The target view
         * @param {cc.Size} designedResolution The user defined design resolution
         * @return {object} An object contains the scale X/Y values and the viewport rect
         */
        public apply(view:View, designedResolution:Size):any;

        /**
         * Manipulation after appyling the strategy
         * @param {cc.view} view The target view
         */
        public postApply(view:View):void;

        /**
         * Setup the container's scale strategy
         * @param {cc.ContainerStrategy} containerStg
         */
        public setContainerStrategy(containerStg:ContainerStrategy):void;

        /**
         * Setup the content's scale strategy
         * @param {cc.ContentStrategy} contentStg
         */
        public setContentStrategy(contentStg:ContainerStrategy):void;
    }
}
/// <reference path="../cocos2d-lib.d.ts" />

declare module cc {
    ////////////////////////////////////////////////////////////////////////////////
    // File: cocos2d/core/scenes/CCLoaderScene.js
    ////////////////////////////////////////////////////////////////////////////////
    /**
     * cc.LoaderScene is a scene that you can load it when you loading files
     * cc.LoaderScene can present thedownload progress
     * @class
     * @extends cc.Scene
     * @example
     * var lc = new cc.LoaderScene();
     */
    export class LoaderScene extends Scene {
        // static constructor
        /**
         * cc.LoaderScene.preload can present a loaderScene with download progress.
         * when all the resource are downloaded it will invoke call function
         * @param resources
         * @param cb
         * @param target
         * @returns {cc.LoaderScene|*}
         * @example
         * //Example
         * cc.LoaderScene.preload(g_resources, function () {
               cc.director.runScene(new HelloWorldScene());
           }, this);
         */
        static preload(resources:any[], cb:(target:Class) => void, target:Class):LoaderScene;

        /**
         * init with resources
         * @param {Array} resources
         * @param {Function|String} cb
         * @param {Object} target
         */
        initWithResources(resources:any[], cb:(target:Class) => void|string, target:Class):boolean;
    }

    ////////////////////////////////////////////////////////////////////////////////
    // File: cocos2d/core/scenes/CCScene.js
    ////////////////////////////////////////////////////////////////////////////////
    /**
     * cc.Scene is a subclass of cc.Node that is used only as an abstract concept.
     *  cc.Scene an cc.Node are almost identical with the difference that cc.Scene has it's
     * anchor point (by default) at the center of the screen.
     *
     * For the moment cc.Scene has no other logic than that, but in future releases it might have
     * additional logic.
     *
     * It is a good practice to use and cc.Scene as the parent of all your nodes.
     * @class
     * @extends cc.Node
     * @example
     * var scene = new cc.Scene();
     */
    export class Scene extends Node {}
}

/// <reference path="../cocos2d-lib.d.ts" />

declare namespace cc {
    // NOTE:
    //  I ignored the following files in the sprites directory, I do not believe they alter cc.Sprite's interface:
    //      - CCSpriteBatchNodeCanvas
    //      - CCSpriteBatchNodeWebGl
    //      - CCSpriteBatchNodeRenderCmd

    // +--------------------------------------------------------------------------------
    // + File: cocos2d/core/sprites/CCAnimation.js
    // +--------------------------------------------------------------------------------
    /**
     * <p>
     *    cc.AnimationFrame
     *    A frame of the animation. It contains information like:
     *       - sprite frame name
     *       - # of delay units.
     *       - offset
     * </p>
     * @class
     * @extends cc.Class
     * @param spriteFrame
     * @param delayUnits
     * @param userInfo
     * @returns {AnimationFrame}
     */
    export class AnimationFrame extends Class {
        public ctor():void;
        public ctor(spriteFrame:SpriteFrame, delayUnits:number, userInfo:any):void;

        /**
         * Create a new animation frame and copy all contents into it
         * @returns {AnimationFrame}
         */
        public clone():AnimationFrame;

        ///**
        // * Create a new animation frame and copy all contents into it
        // * @returns {AnimationFrame}
        // */
        //public copyWithZone(pZone:string):AnimationFrame;

        /**
         * Create a new animation frame and copy all contents into it
         * @returns {AnimationFrame}
         */
        public copy():AnimationFrame;

        /**
         * initializes the animation frame with a spriteframe, number of delay units and a notification user info
         * @param {cc.SpriteFrame} spriteFrame
         * @param {Number} delayUnits
         * @param {object} userInfo
         */
        public initWithSpriteFrame(spriteFrame:SpriteFrame, delayUnits:number, userInfo:any):boolean;

        /**
         * Returns sprite frame to be used
         * @return {cc.SpriteFrame}
         */
        public getSpriteFrame():SpriteFrame;

        /**
         * Sets sprite frame to be used
         * @param {cc.SpriteFrame} spriteFrame
         */
        public setSpriteFrame(spriteFrame:SpriteFrame):void;

        /**
         * Returns how many units of time the frame takes getter
         * @return {Number}
         */
        public getDelayUnits():number;

        /**
         * Sets how many units of time the frame takes setter
         * @param delayUnits
         */
        public setDelayUnits(delayUnits:number):void;

        /**
         * Returns the user custom information
         * @return {object}
         */
        public getUserInfo():any;

        /**
         * Sets the user custom information
         * @param {object} userInfo
         */
        public setUserInfo(userInfo:any):void;
    }

    /**
     * <p>
     *     A cc.Animation object is used to perform animations on the cc.Sprite objects.<br/>
     *     <br/>
     *      The cc.Animation object contains cc.SpriteFrame objects, and a possible delay between the frames. <br/>
     *      You can animate a cc.Animation object by using the cc.Animate action.
     * </p>
     * @class
     * @extends cc.Class
     * @param {Array} frames
     * @param {Number} delay
     * @param {Number} [loops=1]
     *
     * @example
     * // 1. Creates an empty animation
     * var animation1 = new cc.Animation();
     *
     * // 2. Create an animation with sprite frames, delay and loops.
     * var spriteFrames = [];
     * var frame = cc.spriteFrameCache.getSpriteFrame("grossini_dance_01.png");
     * spriteFrames.push(frame);
     * var animation1 = new cc.Animation(spriteFrames);
     * var animation2 = new cc.Animation(spriteFrames, 0.2);
     * var animation2 = new cc.Animation(spriteFrames, 0.2, 2);
     *
     * // 3. Create an animation with animation frames, delay and loops.
     * var animationFrames = [];
     * var frame =  new cc.AnimationFrame();
     * animationFrames.push(frame);
     * var animation1 = new cc.Animation(animationFrames);
     * var animation2 = new cc.Animation(animationFrames, 0.2);
     * var animation3 = new cc.Animation(animationFrames, 0.2, 2);
     *
     * //create an animate with this animation
     * var action = cc.animate(animation1);
     *
     * //run animate
     * sprite.runAction(action);
     */
    export class Animation extends Class {
        public ctor():void;
        public ctor(frames:SpriteFrame[], delay:number, loops:number):void;

        /**
         * Returns the array of animation frames
         * @return {Array}
         */
        public getFrames():SpriteFrame[];

        /**
         * Sets array of animation frames
         * @param {Array} frames
         */
        public setFrames(frames:SpriteFrame[]):void;

        /**
         * Adds a frame to a cc.Animation, the frame will be added with one "delay unit".
         * @param {cc.SpriteFrame} frame
         */
        public addSpriteFrame(frame:SpriteFrame):void;

        /**
         * Adds a frame with an image filename. Internally it will create a cc.SpriteFrame and it will add it. The frame will be added with one "delay unit".
         * @param {String} fileName
         */
        public addSpriteFrameWithFile(fileName:string):void;

        /**
         * Adds a frame with a texture and a rect. Internally it will create a cc.SpriteFrame and it will add it. The frame will be added with one "delay unit".
         * @param {cc.Texture2D} texture
         * @param {cc.Rect} rect
         */
        public addSpriteFrameWithTexture(texture:Texture2D, rect:Rect):void;

        /**
         * Initializes a cc.Animation with cc.AnimationFrame, do not call this method yourself, please pass parameters to constructor to initialize.
         * @param {Array} arrayOfAnimationFrames
         * @param {Number} delayPerUnit
         * @param {Number} [loops=1]
         */
        public initWithAnimationFrames(arrayOfAnimationFrames:AnimationFrame[], delayPerUnit:number, loops?:number):boolean;

        /**
         * Clone the current animation
         * @return {cc.Animation}
         */
        public clone():Animation;

        ///**
        // * Clone the current animation
        // * @return {cc.Animation}
        // */
        //copyWithZone:function (pZone) {
        //    var pCopy = new cc.Animation();
        //    pCopy.initWithAnimationFrames(this._copyFrames(), this._delayPerUnit, this._loops);
        //    pCopy.setRestoreOriginalFrame(this._restoreOriginalFrame);
        //    return pCopy;
        //},

        /**
         * Clone the current animation
         * @returns {cc.Animation}
         */
        public copy():Animation;

        /**
         * Returns how many times the animation is going to loop. 0 means animation is not animated. 1, animation is executed one time, ...
         * @return {Number}
         */
        public getLoops():number;

        /**
         * Sets how many times the animation is going to loop. 0 means animation is not animated. 1, animation is executed one time, ...
         * @param {Number} value
         */
        public setLoops(value:number):void;

        /**
         * Sets whether or not it shall restore the original frame when the animation finishes
         * @param {Boolean} restOrigFrame
         */
        public setRestoreOriginalFrame(restOrigFrame:boolean):void;

        /**
         * Returns whether or not it shall restore the original frame when the animation finishes
         * @return {Boolean}
         */
        public getRestoreOriginalFrame():boolean;

        /**
         * Returns duration in seconds of the whole animation. It is the result of totalDelayUnits * delayPerUnit
         * @return {Number}
         */
        public getDuration():number;

        /**
         * Returns delay in seconds of the "delay unit"
         * @return {Number}
         */
        public getDelayPerUnit():number;

        /**
         * Sets delay in seconds of the "delay unit"
         * @param {Number} delayPerUnit
         */
        public setDelayPerUnit(delayPerUnit:number):void;

        /**
         * Returns total delay units of the cc.Animation.
         * @return {Number}
         */
        public getTotalDelayUnits():number;

        /**
         * Initializes a cc.Animation with frames and a delay between frames, do not call this method yourself, please pass parameters to constructor to initialize.
         * @param {Array} frames
         * @param {Number} delay
         * @param {Number} [loops=1]
         */
        public initWithSpriteFrames(frames:SpriteFrame[], delay:number, loops?:number):boolean;

        /**
         * <p>Currently JavaScript Bindings (JSB), in some cases, needs to use retain and release. This is a bug in JSB,
         * and the ugly workaround is to use retain/release. So, these 2 methods were added to be compatible with JSB.
         * This is a hack, and should be removed once JSB fixes the retain/release bug<br/>
         * You will need to retain an object if you created an engine object and haven't added it into the scene graph during the same frame.<br/>
         * Otherwise, JSB's native autorelease pool will consider this object a useless one and release it directly,<br/>
         * when you want to use it later, a "Invalid Native Object" error will be raised.<br/>
         * The retain function can increase a reference count for the native object to avoid it being released,<br/>
         * you need to manually invoke release function when you think this object is no longer needed, otherwise, there will be memory learks.<br/>
         * retain and release function call should be paired in developer's game code.</p>
         * @function
         * @see cc.Animation#release
         */
        public retain():void;

        /**
         * <p>Currently JavaScript Bindings (JSB), in some cases, needs to use retain and release. This is a bug in JSB,
         * and the ugly workaround is to use retain/release. So, these 2 methods were added to be compatible with JSB.
         * This is a hack, and should be removed once JSB fixes the retain/release bug<br/>
         * You will need to retain an object if you created an engine object and haven't added it into the scene graph during the same frame.<br/>
         * Otherwise, JSB's native autorelease pool will consider this object a useless one and release it directly,<br/>
         * when you want to use it later, a "Invalid Native Object" error will be raised.<br/>
         * The retain function can increase a reference count for the native object to avoid it being released,<br/>
         * you need to manually invoke release function when you think this object is no longer needed, otherwise, there will be memory learks.<br/>
         * retain and release function call should be paired in developer's game code.</p>
         * @function
         * @see cc.Animation#retain
         */
        public release():void;
    }

    // +--------------------------------------------------------------------------------
    // + File: cocos2d/core/sprites/CCAnimationCache.js
    // +--------------------------------------------------------------------------------
    /**
     * <p>
     *     cc.animationCache is a singleton object that manages the Animations.<br/>
     *     It saves in a cache the animations. You should use this class if you want to save your animations in a cache.<br/>
     * <br/>
     * example<br/>
     * cc.animationCache.addAnimation(animation,"animation1");<br/>
     * </p>
     * @class
     * @name cc.animationCache
     */
    export namespace animationCache {
        /**
         * Adds a cc.Animation with a name.
         * @param {cc.Animation} animation
         * @param {String} name
         */
        export function addAnimation(animation:Animation, name:string):void;

        /**
         * Deletes a cc.Animation from the cache.
         * @param {String} name
         */
        export function removeAnimation(name:string):void;

        /**
         * <p>
         *     Returns a cc.Animation that was previously added.<br/>
         *      If the name is not found it will return nil.<br/>
         *      You should retain the returned copy if you are going to use it.</br>
         * </p>
         * @param {String} name
         * @return {cc.Animation}
         */
        export function getAnimation(name:string):Animation;

        /**
         * <p>
         *    Adds an animations from a plist file.<br/>
         *    Make sure that the frames were previously loaded in the cc.SpriteFrameCache.
         * </p>
         * @param {String} plist
         */
        export function addAnimations(plist:string):void;
    }

    // +--------------------------------------------------------------------------------
    // + File: cocos2d/core/sprites/CCBakeSprite.js
    // +--------------------------------------------------------------------------------
    /****************************************************************************
     Copyright (c) 2013-2014 Chukong Technologies Inc.

     http://www.cocos2d-x.org

     Permission is hereby granted, free of charge, to any person obtaining a copy
     of _t software and associated documentation files (the "Software"), to deal
     in the Software without restriction, including without limitation the rights
     to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     copies of the Software, and to permit persons to whom the Software is
     furnished to do so, subject to the following conditions:

     The above copyright notice and this permission notice shall be included in
     all copies or substantial portions of the Software.

     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     THE SOFTWARE.
     ****************************************************************************/

    /**
     * cc.BakeSprite is a type of sprite that will be cached.
     * @class
     * @extend cc.Sprite
     */
    export class BakeSprite extends Sprite {
        public ctor():void;


        // TODO: Figure out (and define if necessary) the proper return types for these methods
        //public getCacheContext():CanvasContextWrapper;
        //public getCacheCanvas():???;

        /**
         * reset the cache canvas size
         * @param {cc.Size|Number} sizeOrWidth  size or width
         * @param {Number} [height]
         */
        public resetCanvasSize(sizeOrWidth:cc.Size|number, height?:number):void;
    }

    // +--------------------------------------------------------------------------------
    // + File: cocos2d/core/sprites/CCSprite.js
    // +--------------------------------------------------------------------------------

    /**
     * cc.Sprite is a 2d image ( http://en.wikipedia.org/wiki/Sprite_(computer_graphics) )
     *
     * cc.Sprite can be created with an image, or with a sub-rectangle of an image.
     *
     * If the parent or any of its ancestors is a cc.SpriteBatchNode then the following features/limitations are valid
     *    - Features when the parent is a cc.BatchNode:
     *        - MUCH faster rendering, specially if the cc.SpriteBatchNode has many children. All the children will be drawn in a single batch.
     *
     *    - Limitations
     *        - Camera is not supported yet (eg: CCOrbitCamera action doesn't work)
     *        - GridBase actions are not supported (eg: CCLens, CCRipple, CCTwirl)
     *        - The Alias/Antialias property belongs to CCSpriteBatchNode, so you can't individually set the aliased property.
     *        - The Blending function property belongs to CCSpriteBatchNode, so you can't individually set the blending function property.
     *        - Parallax scroller is not supported, but can be simulated with a "proxy" sprite.
     *
     *  If the parent is an standard cc.Node, then cc.Sprite behaves like any other cc.Node:
     *    - It supports blending functions
     *    - It supports aliasing / antialiasing
     *    - But the rendering will be slower: 1 draw per children.
     *
     * The default anchorPoint in cc.Sprite is (0.5, 0.5).
     * @class
     * @extends cc.Node
     *
     * @param {String|cc.SpriteFrame|HTMLImageElement|cc.Texture2D} fileName  The string which indicates a path to image file, e.g., "scene1/monster.png".
     * @param {cc.Rect} rect  Only the contents inside rect of pszFileName's texture will be applied for this sprite.
     * @param {Boolean} [rotated] Whether or not the texture rectangle is rotated.
     * @example
     *
     * 1.Create a sprite with image path and rect
     * var sprite1 = new cc.Sprite("res/HelloHTML5World.png");
     * var sprite2 = new cc.Sprite("res/HelloHTML5World.png",cc.rect(0,0,480,320));
     *
     * 2.Create a sprite with a sprite frame name. Must add "#" before frame name.
     * var sprite = new cc.Sprite('#grossini_dance_01.png');
     *
     * 3.Create a sprite with a sprite frame
     * var spriteFrame = cc.spriteFrameCache.getSpriteFrame("grossini_dance_01.png");
     * var sprite = new cc.Sprite(spriteFrame);
     *
     * 4.Create a sprite with an existing texture contained in a CCTexture2D object
     *      After creation, the rect will be the size of the texture, and the offset will be (0,0).
     * var texture = cc.textureCache.addImage("HelloHTML5World.png");
     * var sprite1 = new cc.Sprite(texture);
     * var sprite2 = new cc.Sprite(texture, cc.rect(0,0,480,320));
     *
     * @property {Boolean}              dirty               - Indicates whether the sprite needs to be updated.
     * @property {Boolean}              flippedX            - Indicates whether or not the sprite is flipped on x axis.
     * @property {Boolean}              flippedY            - Indicates whether or not the sprite is flipped on y axis.
     * @property {Number}               offsetX             - <@readonly> The offset position on x axis of the sprite in texture. Calculated automatically by editors like Zwoptex.
     * @property {Number}               offsetY             - <@readonly> The offset position on x axis of the sprite in texture. Calculated automatically by editors like Zwoptex.
     * @property {Number}               atlasIndex          - The index used on the TextureAtlas.
     * @property {cc.Texture2D}         texture             - Texture used to render the sprite.
     * @property {Boolean}              textureRectRotated  - <@readonly> Indicate whether the texture rectangle is rotated.
     * @property {cc.TextureAtlas}      textureAtlas        - The weak reference of the cc.TextureAtlas when the sprite is rendered using via cc.SpriteBatchNode.
     * @property {cc.SpriteBatchNode}   batchNode           - The batch node object if this sprite is rendered by cc.SpriteBatchNode.
     * @property {cc.V3F_C4B_T2F_Quad}  quad                - <@readonly> The quad (tex coords, vertex coords and color) information.
     */
    export class Sprite extends Node {
        public dirty:boolean;
        public flippedX:boolean;
        public flippedY:boolean;
        public offsetX:number;
        public offsetY:number;
        public atlasIndex:number;
        public texture:Texture2D;
        public textureRectRotated:boolean;
        public textureAtlas:TextureAtlas;
        public batchNode:SpriteBatchNode;
        public quad:V3F_C4B_T2F_Quad;

        /**
         * cc.Sprite invalid index on the cc.SpriteBatchNode
         * @constant
         * @type {Number}
         */
        public static INDEX_NOT_INITIALIZED:number;

        public constructor(fileName:string, rect?:Rect, rotated?:boolean);

        /**
         * Returns whether the texture have been loaded
         * @returns {boolean}
         */
        public textureLoaded():boolean;

        /**
         * Add a event listener for texture loaded event.
         * @param {Function} callback
         * @param {Object} target
         * @deprecated since 3.1, please use addEventListener instead
         */

        /**
         * Returns whether or not the Sprite needs to be updated in the Atlas
         * @return {Boolean} True if the sprite needs to be updated in the Atlas, false otherwise.
         */
        public isDirty():boolean;

        /**
         * Makes the sprite to be updated in the Atlas.
         * @param {Boolean} bDirty
         */
        public setDirty(bDirty:boolean):void;

        /**
         * Returns whether or not the texture rectangle is rotated.
         * @return {Boolean}
         */
        public isTextureRectRotated():boolean;

        /**
         * Returns the index used on the TextureAtlas.
         * @return {Number}
         */
        public getAtlasIndex():number;

        /**
         * Sets the index used on the TextureAtlas.
         * @warning Don't modify this value unless you know what you are doing
         * @param {Number} atlasIndex
         */
        public setAtlasIndex(atlasIndex:number):void;

        /**
         * Returns the rect of the cc.Sprite in points
         * @return {cc.Rect}
         */
        public getTextureRect():Rect;

        /**
         * Returns the weak reference of the cc.TextureAtlas when the sprite is rendered using via cc.SpriteBatchNode
         * @return {cc.TextureAtlas}
         */
        public getTextureAtlas():TextureAtlas;

        /**
         * Sets the weak reference of the cc.TextureAtlas when the sprite is rendered using via cc.SpriteBatchNode
         * @param {cc.TextureAtlas} textureAtlas
         */
        public setTextureAtlas(textureAtlas:TextureAtlas):void;

        /**
         * Returns the offset position of the sprite. Calculated automatically by editors like Zwoptex.
         * @return {cc.Point}
         */
        public getOffsetPosition():Point;

        /**
         * Returns the blend function
         * @return {cc.BlendFunc}
         */
        public getBlendFunc():BlendFunc;

        /**
         * Initializes a sprite with a SpriteFrame. The texture and rect in SpriteFrame will be applied on this sprite.
         * Please pass parameters to the constructor to initialize the sprite, do not call this function yourself,
         * @param {cc.SpriteFrame} spriteFrame A CCSpriteFrame object. It should includes a valid texture and a rect
         * @return {Boolean}  true if the sprite is initialized properly, false otherwise.
         */
        public initWithSpriteFrame(spriteFrame:SpriteFrame):boolean;

        /**
         * Initializes a sprite with a sprite frame name.
         * A cc.SpriteFrame will be fetched from the cc.SpriteFrameCache by name.
         * If the cc.SpriteFrame doesn't exist it will raise an exception.
         * Please pass parameters to the constructor to initialize the sprite, do not call this function yourself.
         * @param {String} spriteFrameName A key string that can fected a valid cc.SpriteFrame from cc.SpriteFrameCache
         * @return {Boolean} true if the sprite is initialized properly, false otherwise.
         * @example
         * var sprite = new cc.Sprite();
         * sprite.initWithSpriteFrameName("grossini_dance_01.png");
         */
        public initWithSpriteFrameName(spriteFrameName:string):boolean;

        /**
         * Tell the sprite to use batch node render.
         * @param {cc.SpriteBatchNode} batchNode
         */
        public useBatchNode(batchNode:SpriteBatchNode):boolean;

        /**
         *
         *    set the vertex rect.
         *    It will be called internally by setTextureRect.
         *    Useful if you want to create 2x images from SD images in Retina Display.
         *    Do not call it manually. Use setTextureRect instead.
         *    (override this method to generate "double scale" sprites)
         *
         * @param {cc.Rect} rect
         */
        public setVertexRect(rect:Rect):void;

        /**
         * Sets whether the sprite should be flipped horizontally or not.
         * @param {Boolean} flippedX true if the sprite should be flipped horizontally, false otherwise.
         */
        public setFlippedX(flippedX:boolean):void;

        /**
         * Sets whether the sprite should be flipped vertically or not.
         * @param {Boolean} flippedY true if the sprite should be flipped vertically, false otherwise.
         */
        public setFlippedY(flippedY:boolean):void;

        /**
         *
         * Returns the flag which indicates whether the sprite is flipped horizontally or not.
         *
         * It only flips the texture of the sprite, and not the texture of the sprite's children.
         * Also, flipping the texture doesn't alter the anchorPoint.
         * If you want to flip the anchorPoint too, and/or to flip the children too use:
         *      sprite.setScaleX(sprite.getScaleX() * -1);
         * @return {Boolean} true if the sprite is flipped horizontally, false otherwise.
         */
        public isFlippedX():boolean;

        /**
         *
         *     Return the flag which indicates whether the sprite is flipped vertically or not.
         *
         *      It only flips the texture of the sprite, and not the texture of the sprite's children.
         *      Also, flipping the texture doesn't alter the anchorPoint.
         *      If you want to flip the anchorPoint too, and/or to flip the children too use:
         *         sprite.setScaleY(sprite.getScaleY() * -1);
         * @return {Boolean} true if the sprite is flipped vertically, false otherwise.
         */
        public isFlippedY():boolean;

        // Animation

        /**
         * Changes the display frame with animation name and index.
         * The animation name will be get from the CCAnimationCache
         * @param {String} animationName
         * @param {Number} frameIndex
         */
        public setDisplayFrameWithAnimationName(animationName:string, frameIndex:number):void;

        /**
         * Returns the batch node object if this sprite is rendered by cc.SpriteBatchNode
         * @returns {cc.SpriteBatchNode|null} The cc.SpriteBatchNode object if this sprite is rendered by cc.SpriteBatchNode, null if the sprite isn't used batch node.
         */
        public getBatchNode():SpriteBatchNode;

        // CCTextureProtocol
        /**
         * Returns the texture of the sprite node
         * @returns {cc.Texture2D}
         */
        public getTexture():Texture2D;

        /**
         * Returns the quad (tex coords, vertex coords and color) information.
         * @return {cc.V3F_C4B_T2F_Quad|null} Returns a cc.V3F_C4B_T2F_Quad object when render mode is WebGL, returns null when render mode is Canvas.
         */
        public getQuad():V3F_C4B_T2F_Quad;

        /**
         * conforms to cc.TextureProtocol protocol
         * @function
         * @param {Number|cc.BlendFunc} src
         * @param {Number} dst
         */
        public setBlendFunc(src:BlendFunc|number, dst?:number):void;

        /**
         *
         *     Initializes a sprite with an image filename.
         *
         *     This method will find pszFilename from local file system, load its content to CCTexture2D,
         *     then use CCTexture2D to create a sprite.
         *     After initialization, the rect used will be the size of the image. The offset will be (0,0).
         *     Please pass parameters to the constructor to initialize the sprite, do not call this function yourself.
         *
         * @param {String} filename The path to an image file in local file system
         * @param {cc.Rect} rect The rectangle assigned the content area from texture.
         * @return {Boolean} true if the sprite is initialized properly, false otherwise.
         */
        public initWithFile(filename:string, rect:Rect):boolean;

        /**
         * Initializes a sprite with a texture and a rect in points, optionally rotated.
         * After initialization, the rect used will be the size of the texture, and the offset will be (0,0).
         * Please pass parameters to the constructor to initialize the sprite, do not call this function yourself.
         * @function
         * @param {cc.Texture2D|HTMLImageElement|HTMLCanvasElement} texture A pointer to an existing CCTexture2D object. You can use a CCTexture2D object for many sprites.
         * @param {cc.Rect} [rect] Only the contents inside rect of this texture will be applied for this sprite.
         * @param {Boolean} [rotated] Whether or not the texture rectangle is rotated.
         * @param {Boolean} [counterclockwise=true] Whether or not the texture rectangle rotation is counterclockwise (texture package is counterclockwise, spine is clockwise).
         * @return {Boolean} true if the sprite is initialized properly, false otherwise.
         */
        public initWithTexture(texture:HTMLCanvasElement, rect?:Rect, rotated?:boolean, counterclockwise?:boolean):boolean;
        public initWithTexture(texture:HTMLImageElement, rect?:Rect, rotated?:boolean, counterclockwise?:boolean):boolean;
        public initWithTexture(texture:Texture2D, rect?:Rect, rotated?:boolean, counterclockwise?:boolean):boolean;

        /**
         * Updates the texture rect of the CCSprite in points.
         * @function
         * @param {cc.Rect} rect a rect of texture
         * @param {Boolean} [rotated] Whether or not the texture is rotated
         * @param {cc.Size} [untrimmedSize] The original pixels size of the texture
         * @param {Boolean} [needConvert] contentScaleFactor switch
         */
        public setTextureRect(rect:Rect, rotated?:boolean, untrimmedSize?:Size, needConvert?:boolean):boolean;

        // Frames
        /**
         * Sets a new sprite frame to the sprite.
         * @function
         * @param {cc.SpriteFrame|String} newFrame
         */
        public setSpriteFrame(newFrame:string|SpriteFrame):void;

        /**
         * Sets a new display frame to the sprite.
         * @param {cc.SpriteFrame|String} newFrame
         * @deprecated
         */
        public setDisplayFrame(newFrame:string|SpriteFrame):SpriteFrame;

        /**
         * Returns whether or not a cc.SpriteFrame is being displayed
         * @function
         * @param {cc.SpriteFrame} frame
         * @return {Boolean}
         */
        public isFrameDisplayed(frame:SpriteFrame):boolean;

        /**
         * Returns the current displayed frame.
         * @return {cc.SpriteFrame}
         */
        public getSpriteFrame():SpriteFrame;

        /**
         * Sets the batch node to sprite
         * @function
         * @param {cc.SpriteBatchNode|null} spriteBatchNode
         * @example
         *  var batch = new cc.SpriteBatchNode("Images/grossini_dance_atlas.png", 15);
         *  var sprite = new cc.Sprite(batch.texture, cc.rect(0, 0, 57, 57));
         *  batch.addChild(sprite);
         *  layer.addChild(batch);
         */
        public setBatchNode(spriteBatchNode?:SpriteBatchNode):void;

        // CCTextureProtocol
        /**
         * Sets the texture of sprite
         * @function
         * @param {cc.Texture2D|String} texture
         */
        public setTexture(texture:string|Texture2D):void;
    }

    // +--------------------------------------------------------------------------------
    // + File: cocos2d/core/sprites/CCSpriteBatchNode.js
    // +--------------------------------------------------------------------------------

    /**
     *
     *     A cc.SpriteBatchNode can reference one and only one texture (one image file, one texture atlas).
     *     Only the cc.Sprites that are contained in that texture can be added to the cc.SpriteBatchNode.
     *     All cc.Sprites added to a cc.SpriteBatchNode are drawn in one WebGL draw call.
     *     If the cc.Sprites are not added to a cc.SpriteBatchNode then an WebGL draw call will be needed for each one, which is less efficient.
     *
     *     Limitations:
     *       - The only object that is accepted as child (or grandchild, grand-grandchild, etc...) is cc.Sprite or any subclass of cc.Sprite.
     *          eg: particles, labels and layer can't be added to a cc.SpriteBatchNode.
     *       - Either all its children are Aliased or Antialiased. It can't be a mix.
     *          This is because "alias" is a property of the texture, and all the sprites share the same texture.
     *
     * @class
     * @extends cc.Node
     *
     * @param {String|cc.Texture2D} fileImage
     * @param {Number} capacity
     * @example
     *
     * // 1. create a SpriteBatchNode with image path
     * var spriteBatchNode = new cc.SpriteBatchNode("res/animations/grossini.png", 50);
     *
     * // 2. create a SpriteBatchNode with texture
     * var texture = cc.textureCache.addImage("res/animations/grossini.png");
     * var spriteBatchNode = new cc.SpriteBatchNode(texture,50);
     *
     * @property {cc.TextureAtlas}  textureAtlas    - The texture atlas
     * @property {Array}            descendants     - <@readonly> Descendants of sprite batch node
     */
    export class SpriteBatchNode extends Node {
        /**
         * @constant
         * @type Number
         */
        public static DEFAULT_CAPACITY:number;
        public texture:Texture2D;
        public textureAtlas:TextureAtlas;

        public ctor(fileImage?:string|Texture2D, capacity?:number);

        /**
         *
         *    This is the opposite of "addQuadFromSprite.
         *    It add the sprite to the children and descendants array, but it doesn't update add it to the texture atlas
         *
         * @param {cc.Sprite} child
         * @param {Number} z zOrder
         * @param {Number} aTag
         * @return {cc.SpriteBatchNode}
         */
        public addSpriteWithoutQuad(child:Sprite, z:number, aTag:number);

        // property
        /**
         * Return TextureAtlas of cc.SpriteBatchNode
         * @return {cc.TextureAtlas}
         */
        public getTextureAtlas():TextureAtlas;

        /**
         * TextureAtlas of cc.SpriteBatchNode setter
         * @param {cc.TextureAtlas} textureAtlas
         */
        public setTextureAtlas(textureAtlas:TextureAtlas):void;

        /**
         * Return Descendants of cc.SpriteBatchNode
         * @return {Array}
         */
        public getDescendants():Sprite[];

        /**
         *
         *    Initializes a cc.SpriteBatchNode with a file image (.png, .jpeg, .pvr, etc) and a capacity of children.
         *    The capacity will be increased in 33% in runtime if it run out of space.
         *    The file will be loaded using the TextureMgr.
         *    Please pass parameters to constructor to initialize the sprite batch node, do not call this function yourself.
         *
         * @param {String} fileImage
         * @param {Number} capacity
         * @return {Boolean}
         */
        public initWithFile(fileImage:string, capacity:number):boolean;

        /**
         *
         *    initializes a cc.SpriteBatchNode with a file image (.png, .jpeg, .pvr, etc) and a capacity of children.
         *    The capacity will be increased in 33% in runtime if it run out of space.
         *    The file will be loaded using the TextureMgr.
         *    Please pass parameters to constructor to initialize the sprite batch node, do not call this function yourself.
         *
         *    NOTE: Parameters are optional so that Node::init() can be properly overridden.
         *
         * @param {String} [fileImage]
         * @param {Number} [capacity]
         * @return {Boolean}
         */
        init(fileImage?:string, capacity?:number):boolean;

        /**
         * Increase Atlas Capacity
         */
        public increaseAtlasCapacity():void;

        /**
         * Removes a child given a certain index. It will also cleanup the running actions depending on the cleanup parameter.
         * @warning Removing a child from a cc.SpriteBatchNode is very slow
         * @param {Number} index
         * @param {Boolean} doCleanup
         */
        public removeChildAtIndex(index:number, doCleanup?:boolean):void;

        /**
         * Rebuild index in order for child
         * @param {cc.Sprite} pobParent
         * @param {Number} index
         * @return {Number}
         */
        public rebuildIndexInOrder(pobParent:Sprite, index:number):number;

        /**
         * Returns highest atlas index in child
         * @param {cc.Sprite} sprite
         * @return {Number}
         */
        public highestAtlasIndexInChild(sprite:Sprite):number;

        /**
         * Returns lowest atlas index in child
         * @param {cc.Sprite} sprite
         * @return {Number}
         */
        public lowestAtlasIndexInChild(sprite:Sprite):number;

        /**
         * Returns atlas index for child
         * @param {cc.Sprite} sprite
         * @param {Number} nZ
         * @return {Number}
         */
        public atlasIndexForChild(sprite:Sprite, nZ:number):number;

        /**
         * Sprites use this to start sortChildren, don't call this manually
         * @param {Boolean} reorder
         */
        public reorderBatch(reorder:boolean):void;

        /**
         * Sets the source and destination blending function for the texture
         * @param {Number | cc.BlendFunc} src
         * @param {Number} dst
         */
        public setBlendFunc(src:BlendFunc|number, dst?:number):void;

        /**
         * Returns the blending function used for the texture
         * @return {cc.BlendFunc}
         */
        public getBlendFunc():BlendFunc;

        ///**
        // * Reorder children (override reorderChild of cc.Node)
        // * @override
        // * @param {cc.Sprite} child
        // * @param {Number} zOrder
        // */
        //public reorderChild(child:Node, zOrder:number):void;
        //
        ///**
        // * Removes a child from cc.SpriteBatchNode (override removeChild of cc.Node)
        // * @param {cc.Sprite} child
        // * @param {Boolean} cleanup
        // */
        //public removeChild(child:Node, cleanup?:boolean):void;
        ////public removeChild(child:Sprite, cleanup?:boolean):void;

        /**
         *
         *   Updates a quad at a certain index into the texture atlas. The CCSprite won't be added into the children array.
         *   This method should be called only when you are dealing with very big AtlasSrite and when most of the cc.Sprite won't be updated.
         *   For example: a tile map (cc.TMXMap) or a label with lots of characters (BitmapFontAtlas)
         *
         * @function
         * @param {cc.Sprite} sprite
         * @param {Number} index
         */
        public updateQuadFromSprite(sprite:Sprite, index:number):void;

        /**
         *
         *    Inserts a quad at a certain index into the texture atlas. The cc.Sprite won't be added into the children array.
         *    This method should be called only when you are dealing with very big AtlasSprite and when most of the cc.Sprite won't be updated.
         *    For example: a tile map (cc.TMXMap) or a label with lots of characters (cc.LabelBMFont)
         *
         * @function
         * @param {cc.Sprite} sprite
         * @param {Number} index
         */
        public insertQuadFromSprite(sprite:Sprite, index:number):void;

        /**
         *
         *    Initializes a cc.SpriteBatchNode with a texture2d and capacity of children.
         *    The capacity will be increased in 33% in runtime if it run out of space.
         *    Please pass parameters to constructor to initialize the sprite batch node, do not call this function yourself.
         *
         * @function
         * @param {cc.Texture2D} tex
         * @param {Number} [capacity]
         * @return {Boolean}
         */
        public initWithTexture(tex:Texture2D, capacity?:number):boolean;

        /**
         * Insert a child
         * @param {cc.Sprite} sprite The child sprite
         * @param {Number} index The insert index
         */
        public insertChild(sprite:Sprite, index:number):void;

        /**
         * Add child at the end, faster than insert child
         * @function
         * @param {cc.Sprite} sprite
         */
        public appendChild(sprite:Sprite):void;

        /**
         * Removes sprite from TextureAtlas
         * @function
         * @param {cc.Sprite} sprite
         */
        public removeSpriteFromAtlas(sprite:Sprite):void;

        // CCTextureProtocol
        /**
         * Returns texture of the sprite batch node
         * @function
         * @return {cc.Texture2D}
         */
        public getTexture():Texture2D;

        /**
         * Sets the texture of the sprite batch node.
         * @function
         * @param {cc.Texture2D} texture
         */
        public setTexture(texture:Texture2D):void;

    }


    // +--------------------------------------------------------------------------------
    // + File: cocos2d/core/sprites/CCSpriteFrame.js
    // +--------------------------------------------------------------------------------
    /**
     *
     *    A cc.SpriteFrame has:
     *      - texture: A cc.Texture2D that will be used by the cc.Sprite
     *      - rectangle: A rectangle of the texture
     *
     *    You can modify the frame of a cc.Sprite by doing:
     *
     * @class
     * @extends cc.Class
     *
     * @param {String|cc.Texture2D} filename
     * @param {cc.Rect} rect If parameters' length equal 2, rect in points, else rect in pixels
     * @param {Boolean} [rotated] Whether the frame is rotated in the texture
     * @param {cc.Point} [offset] The offset of the frame in the texture
     * @param {cc.Size} [originalSize] The size of the frame in the texture
     *
     * @example
     * // 1. Create a cc.SpriteFrame with image path
     * var frame1 = new cc.SpriteFrame("res/grossini_dance.png",cc.rect(0,0,90,128));
     * var frame2 = new cc.SpriteFrame("res/grossini_dance.png",cc.rect(0,0,90,128),false,0,cc.size(90,128));
     *
     * // 2. Create a cc.SpriteFrame with a texture, rect, rotated, offset and originalSize in pixels.
     * var texture = cc.textureCache.addImage("res/grossini_dance.png");
     * var frame1 = new cc.SpriteFrame(texture, cc.rect(0,0,90,128));
     * var frame2 = new cc.SpriteFrame(texture, cc.rect(0,0,90,128),false,0,cc.size(90,128));
     */
    export class SpriteFrame {
        public constructor(filename:string|Texture2D, rect:Rect, rotated:boolean, offset:Point, originalSize:Size);

        /**
         * Returns whether the texture have been loaded
         * @returns {boolean}
         */
        public textureLoaded():boolean;


        /**
         * Gets the rect of the frame in the texture
         * @return {cc.Rect}
         */
        public getRectInPixels():Rect;

        /**
         * Sets the rect of the frame in the texture
         * @param {cc.Rect} rectInPixels
         */
        public setRectInPixels(rectInPixels:Rect):void;

        /**
         * Returns whether the sprite frame is rotated in the texture.
         * @return {Boolean}
         */
        public isRotated():boolean;

        /**
         * Set whether the sprite frame is rotated in the texture.
         * @param {Boolean} bRotated
         */
        public setRotated(bRotated:boolean):void;

        /**
         * Returns the rect of the sprite frame in the texture
         * @return {cc.Rect}
         */
        public getRect():Rect;

        /**
         * Sets the rect of the sprite frame in the texture
         * @param {cc.Rect} rect
         */
        public setRect(rect:Rect):void;

        /**
         * Returns the offset of the sprite frame in the texture in pixel
         * @return {cc.Point}
         */
        public getOffsetInPixels():Point;

        /**
         * Sets the offset of the sprite frame in the texture in pixel
         * @param {cc.Point} offsetInPixels
         */
        public setOffsetInPixels(offsetInPixels:Point):void;

        /**
         * Returns the original size of the trimmed image
         * @return {cc.Size}
         */
        public getOriginalSizeInPixels():Size;

        /**
         * Sets the original size of the trimmed image
         * @param {cc.Size} sizeInPixels
         */
        public setOriginalSizeInPixels(sizeInPixels:Size):void;

        /**
         * Returns the original size of the trimmed image
         * @return {cc.Size}
         */
        public getOriginalSize():Size;

        /**
         * Sets the original size of the trimmed image
         * @param {cc.Size} sizeInPixels
         */
        public setOriginalSize(sizeInPixels:Size):void;

        /**
         * Returns the texture of the frame
         * @return {cc.Texture2D}
         */
        public getTexture():Texture2D;

        /**
         * Sets the texture of the frame, the texture is retained automatically
         * @param {cc.Texture2D} texture
         */
        public setTexture(texture:Texture2D):void;

        /**
         * Returns the offset of the frame in the texture
         * @return {cc.Point}
         */
        public getOffset():Point;

        /**
         * Sets the offset of the frame in the texture
         * @param {cc.Point} offset
         */
        public setOffset(offset:Point):void;

        /**
         * Clone the sprite frame
         * @returns {SpriteFrame}
         */
        public clone:SpriteFrame;

        ///**
        // * TODO: Figure out if this is even needed, it seems like some strange Obj-C artifact that shouldn't exist
        // *       in the cocos2d-js codebase (or cocos2d-x C++ either, for that matter).
        // * Copy the sprite frame
        // * @return {cc.SpriteFrame}
        // */
        //public copyWithZone():SpriteFrame;
        //
        ///**
        // * Copy the sprite frame
        // * @returns {cc.SpriteFrame}
        // */
        //public copy():SpriteFrame;

        /**
         * Initializes SpriteFrame with Texture, rect, rotated, offset and originalSize in pixels.
         * Please pass parameters to the constructor to initialize the sprite, do not call this function yourself.
         * @param {String|cc.Texture2D} texture
         * @param {cc.Rect} rect if parameters' length equal 2, rect in points, else rect in pixels
         * @param {Boolean} [rotated=false]
         * @param {cc.Point} [offset=cc.p(0,0)]
         * @param {cc.Size} [originalSize=rect.size]
         * @return {Boolean}
         */
        //initWithTexture:function (texture, rect, rotated, offset, originalSize) {
        public initWithTexture(texture:string|Texture2D,
                               rect:Rect,
                               rotated:boolean,
                               offset:Point,
                               originalSize:Size):boolean;
    }

    // +--------------------------------------------------------------------------------
    // + File: cocos2d/core/sprites/CCSpriteFrameCache.js
    // +--------------------------------------------------------------------------------
    /**
     *
     * cc.spriteFrameCache is a singleton that handles the loading of the sprite frames. It saves in a cache the sprite frames.
     *
     * example
     * // add SpriteFrames to spriteFrameCache With File
     * cc.spriteFrameCache.addSpriteFrames(s_grossiniPlist);
     *
     * @class
     * @name cc.spriteFrameCache
     */
        //export namespace spriteFrameCache = /** @lends cc.spriteFrameCache# */{
    export namespace spriteFrameCache {
        /**
         *
         *   Adds multiple Sprite Frames from a plist or json file.
         *   A texture will be loaded automatically. The texture name will composed by replacing the .plist or .json suffix with .png
         *   If you want to use another texture, you should use the addSpriteFrames:texture method.
         *
         * @param {String} url file path
         * @param {HTMLImageElement|cc.Texture2D|string} texture
         * @example
         * // add SpriteFrames to SpriteFrameCache With File
         * cc.spriteFrameCache.addSpriteFrames(s_grossiniPlist);
         * cc.spriteFrameCache.addSpriteFrames(s_grossiniJson);
         */
        export function addSpriteFrames(url:string, texture:HTMLImageElement|Texture2D|string):void;

        /**
         *
         *  Adds an sprite frame with a given name.
         *  If the name already exists, then the contents of the old name will be replaced with the new one.
         *
         * @param {cc.SpriteFrame} frame
         * @param {String} frameName
         */
        export function addSpriteFrame(frame:SpriteFrame, frameName:string):void;

        /**
         *
         *   Purges the dictionary of loaded sprite frames.
         *   Call this method if you receive the "Memory Warning".
         *   In the short term: it will free some resources preventing your app from being killed.
         *   In the medium term: it will allocate more resources.
         *   In the long term: it will be the same.
         *
         */
        export function removeSpriteFrames():void;

        /**
         * Deletes an sprite frame from the sprite frame cache.
         * @param {String} name
         */
        export function removeSpriteFrameByName(name:string):void;

        /**
         *
         *     Removes multiple Sprite Frames from a plist file.
         *     Sprite Frames stored in this file will be removed.
         *     It is convinient to call this method when a specific texture needs to be removed.
         *
         * @param {String} url Plist filename
         */
        export function removeSpriteFramesFromFile(url:string):void;

        /**
         *
         *    Removes all Sprite Frames associated with the specified textures.
         *    It is convenient to call this method when a specific texture needs to be removed.
         *
         * @param {HTMLImageElement|HTMLCanvasElement|cc.Texture2D} texture
         */
        export function removeSpriteFramesFromTexture(texture:HTMLImageElement|HTMLCanvasElement|Texture2D):void;

        /**
         *
         *   Returns an Sprite Frame that was previously added.
         *   If the name is not found it will return nil.
         *   You should retain the returned copy if you are going to use it.
         *
         * @param {String} name name of SpriteFrame
         * @return {cc.SpriteFrame}
         * @example
         * //get a SpriteFrame by name
         * var frame = cc.spriteFrameCache.getSpriteFrame("grossini_dance_01.png");
         */
        export function getSpriteFrame(name:string):SpriteFrame;
    }
}
/// <reference path="../cocos2d-lib.d.ts" />

// +--------------------  CCPointExtension.js  --------------------+
/**
 * cc.Point extensions based on Chipmunk's cpVect file.
 * These extensions work both with cc.Point
 *
 * The "ccp" prefix means: "CoCos2d Point"
 *
 *  //Examples:
 * - cc.pAdd( cc.p(1,1), cc.p(2,2) ); // preferred cocos2d way
 * - cc.pAdd( cc.p(1,1), cc.p(2,2) ); // also ok but more verbose
 * - cc.pAdd( cc.cpv(1,1), cc.cpv(2,2) ); // mixing chipmunk and cocos2d (avoid)
 */

declare namespace cc {
    /**
     * smallest such that 1.0+FLT_EPSILON != 1.0
     * @constant
     * @type Number
     */
    const POINT_EPSILON:number;

    /**
     * Returns opposite of point.
     * @param {cc.Point} point
     * @return {cc.Point}
     */
    export function pNeg(point:Point): Point;

    /**
     * Calculates sum of two points.
     * @param {cc.Point} v1
     * @param {cc.Point} v2
     * @return {cc.Point}
     */
    export function pAdd(v1:Point, v2:Point): Point;

    /**
     * Calculates difference of two points.
     * @param {cc.Point} v1
     * @param {cc.Point} v2
     * @return {cc.Point}
     */
    //cc.pSub = function (v1, v2) {
    //    return cc.p(v1.x - v2.x, v1.y - v2.y);
    //};
    export function pSub(v1:Point, v2:Point): Point;

    /**
     * Returns point multiplied by given factor.
     * @param {cc.Point} point
     * @param {Number} factor
     * @return {cc.Point}
     */
    //cc.pMult = function (point, floatVar) {
    //    return cc.p(point.x * floatVar, point.y * floatVar);
    //};
    export function pMult(point:Point, factor:number): Point;

    /**
     * Calculates midpoint between two points.
     * @param {cc.Point} v1
     * @param {cc.Point} v2
     * @return {cc.Point}
     */
    //cc.pMidpoint = function (v1, v2) {
    //    return cc.pMult(cc.pAdd(v1, v2), 0.5);
    //};
    export function pMidpoint(v1:Point, v2:Point): Point;

    /**
     * Calculates dot product of two points.
     * @param {cc.Point} v1
     * @param {cc.Point} v2
     * @return {Number}
     */
    //cc.pDot = function (v1, v2) {
    //    return v1.x * v2.x + v1.y * v2.y;
    //};
    export function pDot(v1:Point, v2:Point): number;

    /**
     * Calculates cross product of two points.
     * @param {cc.Point} v1
     * @param {cc.Point} v2
     * @return {Number}
     */
    //cc.pCross = function (v1, v2) {
    //    return v1.x * v2.y - v1.y * v2.x;
    //};
    export function pCross(v1:Point, v2:Point): number;

    /**
     * Calculates perpendicular of v, rotated 90 degrees counter-clockwise -- cross(v, perp(v)) >= 0
     * @param {cc.Point} point
     * @return {cc.Point}
     */
    //cc.pPerp = function (point) {
    //    return cc.p(-point.y, point.x);
    //};
    export function pPerp(point:Point): Point;

    /**
     * Calculates perpendicular of v, rotated 90 degrees clockwise -- cross(v, rperp(v)) <= 0
     * @param {cc.Point} point
     * @return {cc.Point}
     */
    //cc.pRPerp = function (point) {
    //    return cc.p(point.y, -point.x);
    //};
    export function pRPerp(point:Point): Point;

    /**
     * Calculates the projection of v1 over v2.
     * @param {cc.Point} v1
     * @param {cc.Point} v2
     * @return {cc.pMult}
     */
    //cc.pProject = function (v1, v2) {
    //    return cc.pMult(v2, cc.pDot(v1, v2) / cc.pDot(v2, v2));
    //};
    export function pProject(v1:Point, v2:Point): Point;

    /**
     * Rotates two points.
     * @param  {cc.Point} v1
     * @param  {cc.Point} v2
     * @return {cc.Point}
     */
    //cc.pRotate = function (v1, v2) {
    //    return cc.p(v1.x * v2.x - v1.y * v2.y, v1.x * v2.y + v1.y * v2.x);
    //};
    export function pRotate(v1:Point, v2:Point): Point;

    /**
     * Unrotates two points.
     * @param  {cc.Point} v1
     * @param  {cc.Point} v2
     * @return {cc.Point}
     */
    //cc.pUnrotate = function (v1, v2) {
    //    return cc.p(v1.x * v2.x + v1.y * v2.y, v1.y * v2.x - v1.x * v2.y);
    //};
    export function pUnrotate(v1:Point, v2:Point): Point;

    /**
     * Calculates the square length of a cc.Point (not calling sqrt() )
     * @param  {cc.Point} point
     *@return {number}
     */
    //cc.pLengthSQ = function (v) {
    //    return cc.pDot(v, v);
    //};
    export function pLengthSQ(point:Point): number;

    /**
     * Calculates the square distance between two points (not calling sqrt() )
     * @param {cc.Point} point1
     * @param {cc.Point} point2
     * @return {number}
     */
    //cc.pDistanceSQ = function (point1, point2) {
    //    return cc.pLengthSQ(cc.pSub(point1, point2));
    //};
    export function pDistanceSQ(point1:Point, point2:Point): number;

    /**
     * Calculates distance between point an origin
     * @param  {cc.Point} point
     * @return {number}
     */
    //cc.pLength = function (v) {
    //    return Math.sqrt(cc.pLengthSQ(v));
    //};
    export function pLength(point:Point): number;

    /**
     * Calculates the distance between two points
     * @param {cc.Point} point1
     * @param {cc.Point} point2
     * @return {Number}
     */
    //cc.pDistance = function (v1, v2) {
    //    return cc.pLength(cc.pSub(v1, v2));
    //};
    export function pDistance(point1:Point, point2:Point): number;

    /**
     * Returns point multiplied to a length of 1.
     * @param {cc.Point} point
     * @return {cc.Point}
     */
    //cc.pNormalize = function (v) {
    //    var n = cc.pLength(v);
    //    return n === 0 ? cc.p(v) : cc.pMult(v, 1.0 / n);
    //};
    export function pNormalize(point:Point): Point;

    /**
     * Converts radians to a normalized vector.
     * @param {Number} radians
     * @return {cc.Point}
     */
    //cc.pForAngle = function (a) {
    //    return cc.p(Math.cos(a), Math.sin(a));
    //};
    export function pForAngle(radians:number): Point;

    /**
     * Converts a vector to radians.
     * @param {cc.Point} point
     * @return {number}
     */
    //cc.pToAngle = function (v) {
    //    return Math.atan2(v.y, v.x);
    //};
    export function pToAngle(point:Point): number;

    /**
     * Clamp a value between from and to.
     * @param {number} value
     * @param {number} min_inclusive
     * @param {number} max_inclusive
     * @return {number}
     */
    //cc.clampf = function (value, min_inclusive, max_inclusive) {
    //    if (min_inclusive > max_inclusive) {
    //        var temp = min_inclusive;
    //        min_inclusive = max_inclusive;
    //        max_inclusive = temp;
    //    }
    //    return value < min_inclusive ? min_inclusive : value < max_inclusive ? value : max_inclusive;
    //};
    export function clampf(value:number, min_inclusive:number, max_inclusive:number): number;

    /**
     * Clamp a point between from and to.
     * @param {Point} point
     * @param {Point} min_inclusive
     * @param {Point} max_inclusive
     * @return {cc.Point}
     */
    //cc.pClamp = function (p, min_inclusive, max_inclusive) {
    //    return cc.p(cc.clampf(p.x, min_inclusive.x, max_inclusive.x), cc.clampf(p.y, min_inclusive.y, max_inclusive.y));
    //};
    export function pClamp(point:Point, min_inclusive:Point, max_inclusive:Point): Point;

    /**
     * Quickly convert cc.Size to a cc.Point
     * @param {cc.Size} size
     * @return {cc.Point}
     */
    //cc.pFromSize = function (s) {
    //    return cc.p(s.width, s.height);
    //};
    export function pFromSize(size:Size): Point;

    /**
     * Run a math operation function on each point component
     * Math.abs, Math.floor, Math.ceil, Math.round.
     * @param {cc.Point} point
     * @param {Function} opFunc
     * @return {cc.Point}
     * @example
     * //For example: let's try to take the floor of x,y
     * var p = cc.pCompOp(cc.p(10,10),Math.abs);
     */
    //cc.pCompOp = function (p, opFunc) {
    //    return cc.p(opFunc(p.x), opFunc(p.y));
    //};
    export function pCompOp(point:Point, opFunc:(arg:number) => number): Point;

    /**
     * Linear Interpolation between two points a and b
     * alpha == 0 ? a
     * alpha == 1 ? b
     * otherwise a value between a..b
     * @param {cc.Point} point1
     * @param {cc.Point} point2
     * @param {number} alpha
     * @return {cc.Point}
     */
    //cc.pLerp = function (a, b, alpha) {
    //    return cc.pAdd(cc.pMult(a, 1 - alpha), cc.pMult(b, alpha));
    //};
    export function pLerp(point1:Point, point2:Point, alpha:number): Point;

    /**
     * @param {cc.Point} point1
     * @param {cc.Point} point2
     * @param {number} variance
     * @return {boolean} if points have fuzzy equality which means equal with some degree of variance.
     */
    //cc.pFuzzyEqual = function (a, b, variance) {
    //    if (a.x - variance <= b.x && b.x <= a.x + variance) {
    //        if (a.y - variance <= b.y && b.y <= a.y + variance)
    //            return true;
    //    }
    //    return false;
    //};
    export function pFuzzyEqual(point1:Point, point2:Point, variance:number): boolean;

    /**
     * Multiplies a and b components, a.x*b.x, a.y*b.y
     * @param {cc.Point} point1
     * @param {cc.Point} point2
     * @return {cc.Point}
     */
    //cc.pCompMult = function (a, b) {
    //    return cc.p(a.x * b.x, a.y * b.y);
    //};
    export function pCompMult(point1:Point, point2:Point): Point;

    /**
     * @param {cc.Point} point1
     * @param {cc.Point} point2
     * @return {number} the signed angle in radians between two vector directions
     */
    //cc.pAngleSigned = function (a, b) {
    //    var a2 = cc.pNormalize(a);
    //    var b2 = cc.pNormalize(b);
    //    var angle = Math.atan2(a2.x * b2.y - a2.y * b2.x, cc.pDot(a2, b2));
    //    if (Math.abs(angle) < cc.POINT_EPSILON)
    //        return 0.0;
    //    return angle;
    //};
    export function pAngleSigned(point1:Point, point2:Point): number;

    /**
     * @param {cc.Point} point1
     * @param {cc.Point} point2
     * @return {Number} the angle in radians between two vector directions
     */
    //cc.pAngle = function (a, b) {
    //    var angle = Math.acos(cc.pDot(cc.pNormalize(a), cc.pNormalize(b)));
    //    if (Math.abs(angle) < cc.POINT_EPSILON) return 0.0;
    //    return angle;
    //};
    export function pAngle(point1:Point, point2:Point): number;

    /**
     * Rotates a point counter clockwise by the angle around a pivot
     * @param {cc.Point} point point is the point to rotate
     * @param {cc.Point} pivot pivot is the pivot, naturally
     * @param {number} radians angle is the angle of rotation cw in radians
     * @return {cc.Point} the rotated point
     */
    //cc.pRotateByAngle = function (v, pivot, angle) {
    //    var r = cc.pSub(v, pivot);
    //    var cosa = Math.cos(angle), sina = Math.sin(angle);
    //    var t = r.x;
    //    r.x = t * cosa - r.y * sina + pivot.x;
    //    r.y = t * sina + r.y * cosa + pivot.y;
    //    return r;
    //};
    export function pRotateByAngle(point:Point, pivot:Point, radians:number): Point;

    /**
     * A general line-line intersection test
     * indicating successful intersection of a line
     * note that to truly test intersection for segments we have to make
     * sure that s & t lie within [0..1] and for rays, make sure s & t > 0
     * the hit point is        p3 + t * (p4 - p3);
     * the hit point also is    p1 + s * (p2 - p1);
     * @param {cc.Point} a a is the startpoint for the first line P1 = (p1 - p2).
     * @param {cc.Point} b b is the endpoint for the first line P1 = (p1 - p2).
     * @param {cc.Point} c c is the startpoint for the second line P2 = (p3 - p4).
     * @param {cc.Point} d d is the endpoint for the second line P2 = (p3 - p4).
     * @param {cc.Point} retP retP.x is the range for a hitpoint in P1 (pa = p1 + s*(p2 - p1)), 
     * retP.y is the range for a hitpoint in P3 (pa = p2 + t*(p4 - p3)).
     * @return {boolean}
     */
    //cc.pLineIntersect = function (A, B, C, D, retP) {
    //    if ((A.x === B.x && A.y === B.y) || (C.x === D.x && C.y === D.y)) {
    //        return false;
    //    }
    //    var BAx = B.x - A.x;
    //    var BAy = B.y - A.y;
    //    var DCx = D.x - C.x;
    //    var DCy = D.y - C.y;
    //    var ACx = A.x - C.x;
    //    var ACy = A.y - C.y;
    //
    //    var denom = DCy * BAx - DCx * BAy;
    //
    //    retP.x = DCx * ACy - DCy * ACx;
    //    retP.y = BAx * ACy - BAy * ACx;
    //
    //    if (denom === 0) {
    //        if (retP.x === 0 || retP.y === 0) {
    //            // Lines incident
    //            return true;
    //        }
    //        // Lines parallel and not incident
    //        return false;
    //    }
    //
    //    retP.x = retP.x / denom;
    //    retP.y = retP.y / denom;
    //
    //    return true;
    //};
    export function pLineIntersect(a:Point, b:Point, c:Point, d:Point, retP:Point): boolean;

    /**
     * ccpSegmentIntersect return YES if Segment A-B intersects with segment C-D.
     * @param {cc.Point} a
     * @param {cc.Point} b
     * @param {cc.Point} c
     * @param {cc.Point} d
     * @return {Boolean}
     */
    //cc.pSegmentIntersect = function (A, B, C, D) {
    //    var retP = cc.p(0, 0);
    //    if (cc.pLineIntersect(A, B, C, D, retP))
    //        if (retP.x >= 0.0 && retP.x <= 1.0 && retP.y >= 0.0 && retP.y <= 1.0)
    //            return true;
    //    return false;
    //};
    export function pSegmentIntersect(a:Point, b:Point, c:Point, d:Point): boolean;

    /**
     * ccpIntersectPoint return the intersection point of line A-B, C-D
     * @param {cc.Point} a
     * @param {cc.Point} b
     * @param {cc.Point} c
     * @param {cc.Point} d
     * @return {cc.Point}
     */
    //cc.pIntersectPoint = function (A, B, C, D) {
    //    var retP = cc.p(0, 0);
    //
    //    if (cc.pLineIntersect(A, B, C, D, retP)) {
    //        // Point of intersection
    //        var P = cc.p(0, 0);
    //        P.x = A.x + retP.x * (B.x - A.x);
    //        P.y = A.y + retP.x * (B.y - A.y);
    //        return P;
    //    }
    //
    //    return cc.p(0, 0);
    //};
    export function pIntersectPoint(a:Point, b:Point, c:Point, d:Point): Point;

    /**
     * check to see if both points are equal
     * @param {cc.Point} a a ccp a
     * @param {cc.Point} b b ccp b to be compared
     * @return {boolean} the true if both ccp are same
     */
    //cc.pSameAs = function (A, B) {
    //    if ((A != null) && (B != null)) {
    //        return (A.x === B.x && A.y === B.y);
    //    }
    //    return false;
    //};
    export function pIntersectPoint(a:Point, b:Point): boolean;


    // High Perfomance In Place Operationrs ---------------------------------------

    /**
     * sets the position of the point to 0
     * @param {cc.Point} point
     */
    //cc.pZeroIn = function (v) {
    //    v.x = 0;
    //    v.y = 0;
    //};
    export function pZeroIn(point:Point): void;

    /**
     * copies the position of one point to another
     * @param {cc.Point} point1
     * @param {cc.Point} point2
     */
    //cc.pIn = function (v1, v2) {
    //    v1.x = v2.x;
    //    v1.y = v2.y;
    //};
    export function pIn(point1:Point, point2:Point): void;

    /**
     * multiplies the point with the given factor (inplace)
     * @param {cc.Point} point
     * @param {Number} factor
     */
    //cc.pMultIn = function (point, floatVar) {
    //    point.x *= floatVar;
    //    point.y *= floatVar;
    //};
    export function pMultIn(point:Point, factor:number): void;

    /**
     * subtracts one point from another (inplace)
     * @param {cc.Point} point1
     * @param {cc.Point} point2
     */
    //cc.pSubIn = function (v1, v2) {
    //    v1.x -= v2.x;
    //    v1.y -= v2.y;
    //};
    export function pSubIn(point1:Point, point2:Point): void;

    /**
     * adds one point to another (inplace)
     * @param {cc.Point} point1
     * @param {cc.Point} point2
     */
    //cc.pAddIn = function (v1, v2) {
    //    v1.x += v2.x;
    //    v1.y += v2.y;
    //};
    export function pAddIn(point1:Point, point2:Point): void;

    /**
     * normalizes the point (inplace)
     * @param {cc.Point} point
     */
    //cc.pNormalizeIn = function (v) {
    //    cc.pMultIn(v, 1.0 / Math.sqrt(v.x * v.x + v.y * v.y));
    //};
    export function pNormalizeIn(point:Point): void;

}
/// <reference path="../cocos2d-lib.d.ts" />

// TODO: Figure out what's going on here. In lib.d.ts, this declaration exists:
//          declare var Image: {new(width?: number, height?: number): HTMLImageElement; };
//       What exactly does the declare var mean, and why it is not resolved below by TextureAtlas::get/setTexture?
//       Does that mean the DefinitelyTyped file is set up improperly? Or am I somehow using it incorrectly?

interface Image extends HTMLImageElement {}

declare namespace cc {
    ////////////////////////////////////////////////////////////////////////////////
    // File: cocos2d/core/sprites/CCTexture2D.js
    ////////////////////////////////////////////////////////////////////////////////
//CONSTANTS:

    /**
     * Horizontal center and vertical center.
     * @constant
     * @type Number
     */
    const ALIGN_CENTER:number;

    /**
     * Horizontal center and vertical top.
     * @constant
     * @type Number
     */
    const ALIGN_TOP:number;

    /**
     * Horizontal right and vertical top.
     * @constant
     * @type Number
     */
    const ALIGN_TOP_RIGHT:number;

    /**
     * Horizontal right and vertical center.
     * @constant
     * @type Number
     */
    const ALIGN_RIGHT:number;

    /**
     * Horizontal right and vertical bottom.
     * @constant
     * @type Number
     */
    const ALIGN_BOTTOM_RIGHT:number;

    /**
     * Horizontal center and vertical bottom.
     * @constant
     * @type Number
     */
    const ALIGN_BOTTOM:number;

    /**
     * Horizontal left and vertical bottom.
     * @constant
     * @type Number
     */
    const ALIGN_BOTTOM_LEFT:number;

    /**
     * Horizontal left and vertical center.
     * @constant
     * @type Number
     */
    const ALIGN_LEFT:number;

    /**
     * Horizontal left and vertical top.
     * @constant
     * @type Number
     */
    const ALIGN_TOP_LEFT:number;
//----------------------Possible texture pixel formats----------------------------


// By default PVR images are treated as if they don't have the alpha channel premultiplied
    const PVRHaveAlphaPremultiplied_: boolean;

//cc.Texture2DWebGL move to TextureWebGL.js

    //cc.game.addEventListener(cc.game.EVENT_RENDERER_INITED, function () {
    //
    //    if (cc._renderType === cc.game.RENDER_TYPE_CANVAS) {
    //
    //        var proto = {
    //            _contentSize: null,
    //            _textureLoaded: false,
    //            _htmlElementObj: null,
    //            url: null,
    //            _pattern: null,
    //
    //            ctor: function () {
    //                this._contentSize = cc.size(0, 0);
    //                this._textureLoaded = false;
    //                this._htmlElementObj = null;
    //                this._pattern = "";
    //            },
    //
    //            /**
    //             * get width in pixels
    //             * @return {Number}
    //             */
    //            getPixelsWide: function () {
    //                return this._contentSize.width;
    //            },
    //
    //            /**
    //             * get height of in pixels
    //             * @return {Number}
    //             */
    //            getPixelsHigh: function () {
    //                return this._contentSize.height;
    //            },
    //
    //            /**
    //             * get content size
    //             * @returns {cc.Size}
    //             */
    //            getContentSize: function () {
    //                var locScaleFactor = cc.contentScaleFactor();
    //                return cc.size(this._contentSize.width / locScaleFactor, this._contentSize.height / locScaleFactor);
    //            },
    //
    //            _getWidth: function () {
    //                return this._contentSize.width / cc.contentScaleFactor();
    //            },
    //            _getHeight: function () {
    //                return this._contentSize.height / cc.contentScaleFactor();
    //            },
    //
    //            /**
    //             * get content size in pixels
    //             * @returns {cc.Size}
    //             */
    //            getContentSizeInPixels: function () {
    //                return this._contentSize;
    //            },
    //
    //            /**
    //             * init with HTML element
    //             * @param {HTMLImageElement|HTMLCanvasElement} element
    //             */
    //            initWithElement: function (element) {
    //                if (!element)
    //                    return;
    //                this._htmlElementObj = element;
    //                this._contentSize.width = element.width;
    //                this._contentSize.height = element.height;
    //                this._textureLoaded = true;
    //            },
    //
    //            /**
    //             * HTMLElement Object getter
    //             * @return {HTMLImageElement|HTMLCanvasElement}
    //             */
    //            getHtmlElementObj: function () {
    //                return this._htmlElementObj;
    //            },
    //
    //            /**
    //             * check whether texture is loaded
    //             * @returns {boolean}
    //             */
    //            isLoaded: function () {
    //                return this._textureLoaded;
    //            },
    //
    //            /**
    //             * handle loaded texture
    //             */
    //            handleLoadedTexture: function () {
    //                var self = this;
    //                if (self._textureLoaded) return;
    //                if (!self._htmlElementObj) {
    //                    var img = cc.loader.getRes(self.url);
    //                    if (!img) return;
    //                    self.initWithElement(img);
    //                }
    //
    //                var locElement = self._htmlElementObj;
    //                self._contentSize.width = locElement.width;
    //                self._contentSize.height = locElement.height;
    //
    //                //dispatch load event to listener.
    //                self.dispatchEvent("load");
    //            },
    //
    //            /**
    //             * description of cc.Texture2D
    //             * @returns {string}
    //             */
    //            description: function () {
    //                return "<cc.Texture2D | width = " + this._contentSize.width + " height " + this._contentSize.height + ">";
    //            },
    //
    //            initWithData: function (data, pixelFormat, pixelsWide, pixelsHigh, contentSize) {
    //                //support only in WebGl rendering mode
    //                return false;
    //            },
    //
    //            initWithImage: function (uiImage) {
    //                //support only in WebGl rendering mode
    //                return false;
    //            },
    //
    //            initWithString: function (text, fontName, fontSize, dimensions, hAlignment, vAlignment) {
    //                //support only in WebGl rendering mode
    //                return false;
    //            },
    //
    //            releaseTexture: function () {
    //                cc.loader.release(this.url);
    //            },
    //
    //            getName: function () {
    //                //support only in WebGl rendering mode
    //                return null;
    //            },
    //
    //            getMaxS: function () {
    //                //support only in WebGl rendering mode
    //                return 1;
    //            },
    //
    //            setMaxS: function (maxS) {
    //                //support only in WebGl rendering mode
    //            },
    //
    //            getMaxT: function () {
    //                return 1;
    //            },
    //
    //            setMaxT: function (maxT) {
    //                //support only in WebGl rendering mode
    //            },
    //
    //            getPixelFormat: function () {
    //                //support only in WebGl rendering mode
    //                return null;
    //            },
    //
    //            getShaderProgram: function () {
    //                //support only in WebGl rendering mode
    //                return null;
    //            },
    //
    //            setShaderProgram: function (shaderProgram) {
    //                //support only in WebGl rendering mode
    //            },
    //
    //            hasPremultipliedAlpha: function () {
    //                //support only in WebGl rendering mode
    //                return false;
    //            },
    //
    //            hasMipmaps: function () {
    //                //support only in WebGl rendering mode
    //                return false;
    //            },
    //
    //            releaseData: function (data) {
    //                //support only in WebGl rendering mode
    //                data = null;
    //            },
    //
    //            keepData: function (data, length) {
    //                //support only in WebGl rendering mode
    //                return data;
    //            },
    //
    //            drawAtPoint: function (point) {
    //                //support only in WebGl rendering mode
    //            },
    //
    //            drawInRect: function (rect) {
    //                //support only in WebGl rendering mode
    //            },
    //
    //            /**
    //             * init with ETC file
    //             * @warning does not support on HTML5
    //             */
    //            initWithETCFile: function (file) {
    //                cc.log(cc._LogInfos.Texture2D_initWithETCFile);
    //                return false;
    //            },
    //
    //            /**
    //             * init with PVR file
    //             * @warning does not support on HTML5
    //             */
    //            initWithPVRFile: function (file) {
    //                cc.log(cc._LogInfos.Texture2D_initWithPVRFile);
    //                return false;
    //            },
    //
    //            /**
    //             * init with PVRTC data
    //             * @warning does not support on HTML5
    //             */
    //            initWithPVRTCData: function (data, level, bpp, hasAlpha, length, pixelFormat) {
    //                cc.log(cc._LogInfos.Texture2D_initWithPVRTCData);
    //                return false;
    //            },
    //
    //            setTexParameters: function (texParams, magFilter, wrapS, wrapT) {
    //                if (magFilter !== undefined)
    //                    texParams = {minFilter: texParams, magFilter: magFilter, wrapS: wrapS, wrapT: wrapT};
    //
    //                if (texParams.wrapS === cc.REPEAT && texParams.wrapT === cc.REPEAT) {
    //                    this._pattern = "repeat";
    //                    return;
    //                }
    //
    //                if (texParams.wrapS === cc.REPEAT) {
    //                    this._pattern = "repeat-x";
    //                    return;
    //                }
    //
    //                if (texParams.wrapT === cc.REPEAT) {
    //                    this._pattern = "repeat-y";
    //                    return;
    //                }
    //
    //                this._pattern = "";
    //            },
    //
    //            setAntiAliasTexParameters: function () {
    //                //support only in WebGl rendering mode
    //            },
    //
    //            setAliasTexParameters: function () {
    //                //support only in WebGl rendering mode
    //            },
    //
    //            generateMipmap: function () {
    //                //support only in WebGl rendering mode
    //            },
    //
    //            stringForFormat: function () {
    //                //support only in WebGl rendering mode
    //                return "";
    //            },
    //
    //            bitsPerPixelForFormat: function (format) {
    //                //support only in WebGl rendering mode
    //                return -1;
    //            },
    //
    //            /**
    //             * add listener for loaded event
    //             * @param {Function} callback
    //             * @param {cc.Node} target
    //             * @deprecated since 3.1, please use addEventListener instead
    //             */
    //            addLoadedEventListener: function (callback, target) {
    //                this.addEventListener("load", callback, target);
    //            },
    //
    //            /**
    //             * remove listener from listeners by target
    //             * @param {cc.Node} target
    //             */
    //            removeLoadedEventListener: function (target) {
    //                this.removeEventListener("load", target);
    //            },
    //
    //            _generateColorTexture: function () {/*overide*/
    //            },
    //            _generateTextureCacheForColor: function () {
    //                if (this.channelCache)
    //                    return this.channelCache;
    //
    //                var textureCache = [
    //                    document.createElement("canvas"),
    //                    document.createElement("canvas"),
    //                    document.createElement("canvas"),
    //                    document.createElement("canvas")
    //                ];
    //                renderToCache(this._htmlElementObj, textureCache);
    //                return this.channelCache = textureCache;
    //            },
    //
    //            //hack for gray effect
    //            _grayElementObj: null,
    //            _backupElement: null,
    //            _isGray: false,
    //            _switchToGray: function (toGray) {
    //                if (!this._textureLoaded || this._isGray === toGray)
    //                    return;
    //                this._isGray = toGray;
    //                if (this._isGray) {
    //                    this._backupElement = this._htmlElementObj;
    //                    if (!this._grayElementObj)
    //                        this._grayElementObj = cc.Texture2D._generateGrayTexture(this._htmlElementObj);
    //                    this._htmlElementObj = this._grayElementObj;
    //                } else {
    //                    if (this._backupElement !== null)
    //                        this._htmlElementObj = this._backupElement;
    //                }
    //            }
    //        };
    //
    //        var renderToCache = function (image, cache) {
    //            var w = image.width;
    //            var h = image.height;
    //
    //            cache[0].width = w;
    //            cache[0].height = h;
    //            cache[1].width = w;
    //            cache[1].height = h;
    //            cache[2].width = w;
    //            cache[2].height = h;
    //            cache[3].width = w;
    //            cache[3].height = h;
    //
    //            var cacheCtx = cache[3].getContext("2d");
    //            cacheCtx.drawImage(image, 0, 0);
    //            var pixels = cacheCtx.getImageData(0, 0, w, h).data;
    //
    //            var ctx;
    //            for (var rgbI = 0; rgbI < 4; rgbI++) {
    //                ctx = cache[rgbI].getContext("2d");
    //
    //                var to = ctx.getImageData(0, 0, w, h);
    //                var data = to.data;
    //                for (var i = 0; i < pixels.length; i += 4) {
    //                    data[i] = (rgbI === 0) ? pixels[i] : 0;
    //                    data[i + 1] = (rgbI === 1) ? pixels[i + 1] : 0;
    //                    data[i + 2] = (rgbI === 2) ? pixels[i + 2] : 0;
    //                    data[i + 3] = pixels[i + 3];
    //                }
    //                ctx.putImageData(to, 0, 0);
    //            }
    //            image.onload = null;
    //        };
    //
    //        //change color function
    //        if (cc.sys._supportCanvasNewBlendModes) {
    //            //multiply mode
    //            //Primary afferent, Draw a new texture based on rect
    //            proto._generateColorTexture = function (r, g, b, rect, canvas) {
    //                var onlyCanvas = false;
    //                if (canvas)
    //                    onlyCanvas = true;
    //                else
    //                    canvas = document.createElement("canvas");
    //                var textureImage = this._htmlElementObj;
    //                if (!rect)
    //                    rect = cc.rect(0, 0, textureImage.width, textureImage.height);
    //
    //                canvas.width = rect.width;
    //                canvas.height = rect.height;
    //
    //                var context = canvas.getContext("2d");
    //                context.globalCompositeOperation = "source-over";
    //                context.fillStyle = "rgb(" + (r | 0) + "," + (g | 0) + "," + (b | 0) + ")";
    //                context.fillRect(0, 0, rect.width, rect.height);
    //                context.globalCompositeOperation = "multiply";
    //                context.drawImage(
    //                    textureImage,
    //                    rect.x, rect.y, rect.width, rect.height,
    //                    0, 0, rect.width, rect.height
    //                );
    //                context.globalCompositeOperation = "destination-atop";
    //                context.drawImage(
    //                    textureImage,
    //                    rect.x, rect.y, rect.width, rect.height,
    //                    0, 0, rect.width, rect.height
    //                );
    //                if (onlyCanvas)
    //                    return canvas;
    //                var newTexture = new cc.Texture2D();
    //                newTexture.initWithElement(canvas);
    //                newTexture.handleLoadedTexture();
    //                return newTexture;
    //            };
    //        } else {
    //            //Four color map overlay
    //            proto._generateColorTexture = function (r, g, b, rect, canvas) {
    //                var onlyCanvas = false;
    //                if (canvas)
    //                    onlyCanvas = true;
    //                else
    //                    canvas = document.createElement("canvas");
    //
    //                var textureImage = this._htmlElementObj;
    //                if (!rect)
    //                    rect = cc.rect(0, 0, textureImage.width, textureImage.height);
    //                var x, y, w, h;
    //                x = rect.x;
    //                y = rect.y;
    //                w = rect.width;
    //                h = rect.height;
    //                if (!w || !h)
    //                    return;
    //
    //                canvas.width = w;
    //                canvas.height = h;
    //
    //                var context = canvas.getContext("2d");
    //                var tintedImgCache = cc.textureCache.getTextureColors(this);
    //                context.globalCompositeOperation = 'lighter';
    //                context.drawImage(
    //                    tintedImgCache[3],
    //                    x, y, w, h,
    //                    0, 0, w, h
    //                );
    //                if (r > 0) {
    //                    context.globalAlpha = r / 255;
    //                    context.drawImage(
    //                        tintedImgCache[0],
    //                        x, y, w, h,
    //                        0, 0, w, h
    //                    );
    //                }
    //                if (g > 0) {
    //                    context.globalAlpha = g / 255;
    //                    context.drawImage(
    //                        tintedImgCache[1],
    //                        x, y, w, h,
    //                        0, 0, w, h
    //                    );
    //                }
    //                if (b > 0) {
    //                    context.globalAlpha = b / 255;
    //                    context.drawImage(
    //                        tintedImgCache[2],
    //                        x, y, w, h,
    //                        0, 0, w, h
    //                    );
    //                }
    //                if (onlyCanvas)
    //                    return canvas;
    //
    //                var newTexture = new cc.Texture2D();
    //                newTexture.initWithElement(canvas);
    //                newTexture.handleLoadedTexture();
    //                return newTexture;
    //            };
    //        }
    //
    //        /**
    //         * 
    //         * This class allows to easily create OpenGL or Canvas 2D textures from images, text or raw data.                                    
    //         * The created cc.Texture2D object will always have power-of-two dimensions.                                                
    //         * Depending on how you create the cc.Texture2D object, the actual image area of the texture might be smaller than the texture dimensions 
    //         *  i.e. "contentSize" != (pixelsWide, pixelsHigh) and (maxS, maxT) != (1.0, 1.0).                                           
    //         * Be aware that the content of the generated textures will be upside-down! 
    //         * @name cc.Texture2D
    //         * @class
    //         * @extends cc.Class
    //         *
    //         * @property {WebGLTexture}     name            - <@readonly> WebGLTexture Object
    //         * @property {Number}           pixelFormat     - <@readonly> Pixel format of the texture
    //         * @property {Number}           pixelsWidth     - <@readonly> Width in pixels
    //         * @property {Number}           pixelsHeight    - <@readonly> Height in pixels
    //         * @property {Number}           width           - Content width in points
    //         * @property {Number}           height          - Content height in points
    //         * @property {cc.GLProgram}     shaderProgram   - The shader program used by drawAtPoint and drawInRect
    //         * @property {Number}           maxS            - Texture max S
    //         * @property {Number}           maxT            - Texture max T
    //         */
    //        cc.Texture2D = cc.Class.extend(/** @lends cc.Texture2D# */proto);
    //
    //        cc.Texture2D._generateGrayTexture = function (texture, rect, renderCanvas) {
    //            if (texture === null)
    //                return null;
    //            renderCanvas = renderCanvas || document.createElement("canvas");
    //            rect = rect || cc.rect(0, 0, texture.width, texture.height);
    //            renderCanvas.width = rect.width;
    //            renderCanvas.height = rect.height;
    //
    //            var context = renderCanvas.getContext("2d");
    //            context.drawImage(texture, rect.x, rect.y, rect.width, rect.height, 0, 0, rect.width, rect.height);
    //            var imgData = context.getImageData(0, 0, rect.width, rect.height);
    //            var data = imgData.data;
    //            for (var i = 0, len = data.length; i < len; i += 4) {
    //                data[i] = data[i + 1] = data[i + 2] = 0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2];
    //            }
    //            context.putImageData(imgData, 0, 0);
    //            return renderCanvas;
    //        };
    //
    //    } else if (cc._renderType === cc.game.RENDER_TYPE_WEBGL) {
    //        cc.assert(cc.isFunction(cc._tmp.WebGLTexture2D), cc._LogInfos.MissingFile, "TexturesWebGL.js");
    //        cc._tmp.WebGLTexture2D();
    //        delete cc._tmp.WebGLTexture2D;
    //    }
    //
    //    cc.EventHelper.prototype.apply(cc.Texture2D.prototype);
    //
    //    cc.assert(cc.isFunction(cc._tmp.PrototypeTexture2D), cc._LogInfos.MissingFile, "TexturesPropertyDefine.js");
    //    cc._tmp.PrototypeTexture2D();
    //    delete cc._tmp.PrototypeTexture2D;
    //});

    export class Texture2D extends Class {
        public isLoaded(): boolean;
    }

    ////////////////////////////////////////////////////////////////////////////////
    // File: cocos2d/core/textures/CCTextureAtlas.js
    ////////////////////////////////////////////////////////////////////////////////
    /**
     * A class that implements a Texture Atlas. 
     * Supported features: 
     * The atlas file can be a PNG, JPG. 
     * Quads can be updated in runtime 
     * Quads can be added in runtime 
     * Quads can be removed in runtime 
     * Quads can be re-ordered in runtime 
     * The TextureAtlas capacity can be increased or decreased in runtime.
     * @class
     * @extends cc.Class
     *
     * @property {Boolean}  dirty           - Indicates whether or not the array buffer of the VBO needs to be updated.
     * @property {Image}    texture         - Image texture for cc.TextureAtlas.
     * @property {Number}   capacity        - <@readonly> Quantity of quads that can be stored with the current texture atlas size.
     * @property {Number}   totalQuads      - <@readonly> Quantity of quads that are going to be drawn.
     * @property {Array}    quads           - <@readonly> Quads that are going to be rendered
     */
    //cc.TextureAtlas = cc.Class.extend(/** @lends cc.TextureAtlas# */{  //WebGL only
    export class TextureAtlas extends Class {
        //public get totalQuads(): number;
        //public get capacity(): number;
        //public get quads(): V3F_C4B_T2F_Quad[];
        //public set quads(quads:V3F_C4B_T2F_Quad[]);
        public totalQuads:number;
        public capacity:number;
        public quads:V3F_C4B_T2F_Quad[];
        //public quads(quads:V3F_C4B_T2F_Quad[]);

        /**
         * Creates a TextureAtlas with an filename and with an initial capacity for Quads.
         * The TextureAtlas capacity can be increased in runtime.
         * Constructor of cc.TextureAtlas
         * @param {String|cc.Texture2D} fileName
         * @param {Number} capacity
         * @example
         * 1.
         * //creates a TextureAtlas with  filename
         * var textureAtlas = new cc.TextureAtlas("res/hello.png", 3);
         * 2.
         * //creates a TextureAtlas with texture
         * var texture = cc.textureCache.addImage("hello.png");
         * var textureAtlas = new cc.TextureAtlas(texture, 3);
         */
        public constructor(fileName:string, capacity:number);
        public constructor(fileName:Texture2D, capacity:number);

        /**
         * Quantity of quads that are going to be drawn.
         * @return {Number}
         */
        public getTotalQuads():number;

        /**
         * Quantity of quads that can be stored with the current texture atlas size
         * @return {Number}
         */
        public getCapacity():number;

        /**
         * Texture of the texture atlas
         * @return {Image}
         */
        public getTexture():Image;

        /**
         * @param {Image} texture
         */
        public setTexture(texture:Image):void;

        /**
         * specify if the array buffer of the VBO needs to be updated
         * @param {Boolean} dirty
         */
        public setDirty(dirty:boolean):void;

        /**
         * whether or not the array buffer of the VBO needs to be updated
         * @returns {boolean}
         */
        public isDirty():boolean;

        /**
         * Quads that are going to be rendered
         * @return {Array}
         */
        public getQuads():V3F_C4B_T2F_Quad[];

        /**
         * @param {Array} quads
         */
        public setQuads(quads:V3F_C4B_T2F_Quad[]):void;

        /**
         * Description
         * @return {String}
         */
        description():string;

        /**
         * Initializes a TextureAtlas with a filename and with a certain capacity for Quads.
         * The TextureAtlas capacity can be increased in runtime.
         * WARNING: Do not reinitialize the TextureAtlas because it will leak memory.
         * @param {String} file
         * @param {Number} capacity
         * @return {Boolean}
         * @example
         * //example
         * var textureAtlas = new cc.TextureAtlas();
         * textureAtlas.initWithTexture("hello.png", 3);
         */
        public initWithFile(file:string, capacity:number):boolean;

        /**
         * Initializes a TextureAtlas with a previously initialized Texture2D object, and
         * with an initial capacity for Quads.
         * The TextureAtlas capacity can be increased in runtime.
         * WARNING: Do not reinitialize the TextureAtlas because it will leak memory
         * @param {Image} texture
         * @param {Number} capacity
         * @return {Boolean}
         * @example
         * //example
         * var texture = cc.textureCache.addImage("hello.png");
         * var textureAtlas = new cc.TextureAtlas();
         * textureAtlas.initWithTexture(texture, 3);
         */
        public initWithTexture(texture:Image, capacity:number):boolean;

        /**
         * Updates a Quad (texture, vertex and color) at a certain index
         * index must be between 0 and the atlas capacity - 1
         * @param {cc.V3F_C4B_T2F_Quad} quad
         * @param {Number} index
         */
        public updateQuad(quad:V3F_C4B_T2F_Quad, index:number):void;

        /**
         * Inserts a Quad (texture, vertex and color) at a certain index
         * index must be between 0 and the atlas capacity - 1
         * @param {cc.V3F_C4B_T2F_Quad} quad
         * @param {Number} index
         */
        public insertQuad(quad:V3F_C4B_T2F_Quad, index:number):void;

        /**
         *
         *      Inserts a c array of quads at a given index
         *      index must be between 0 and the atlas capacity - 1
         *      this method doesn't enlarge the array when amount + index > totalQuads
         *
         * @param {Array} quads
         * @param {Number} index
         * @param {Number} amount
         */
        public insertQuads(quads:V3F_C4B_T2F_Quad[], index:number, amount:number):void;

        /**
         * Removes the quad that is located at a certain index and inserts it at a new index
         * This operation is faster than removing and inserting in a quad in 2 different steps
         * @param {Number} fromIndex
         * @param {Number} newIndex
         */
        public insertQuadFromIndex(fromIndex:number, newIndex:number):void;

        /**
         * Removes a quad at a given index number.
         * The capacity remains the same, but the total number of quads to be drawn is reduced in 1
         * @param {Number} index
         */
        public removeQuadAtIndex(index:number):void;

        /**
         * Removes a given number of quads at a given index
         * @param {Number} index
         * @param {Number} amount
         */
        public removeQuadsAtIndex(index:number, amount:number):void;

        /**
         * Removes all Quads.
         * The TextureAtlas capacity remains untouched. No memory is freed.
         * The total number of quads to be drawn will be 0
         */
        removeAllQuads():void;

        /**
         * Resize the capacity of the CCTextureAtlas.
         * The new capacity can be lower or higher than the current one
         * It returns YES if the resize was successful.
         * If it fails to resize the capacity it will return NO with a new capacity of 0.
         * no used for js
         * @param {Number} newCapacity
         * @return {Boolean}
         */
        public resizeCapacity(newCapacity:number):boolean;

        /**
         * Used internally by CCParticleBatchNode                                    
         * don't use this unless you know what you're doing
         * @param {Number} amount
         */
        public increaseTotalQuadsWith(amount:number):void;

        /**
         * Moves an amount of quads from oldIndex at newIndex
         * @param {Number} oldIndex
         * @param {Number} amount
         * @param {Number} newIndex
         */
        public moveQuadsFromIndex(oldIndex:number, amount:number, newIndex:number):void;

        /**
         * Ensures that after a realloc quads are still empty                                
         * Used internally by CCParticleBatchNode
         * @param {Number} index
         * @param {Number} amount
         */
        public fillWithEmptyQuadsFromIndex(index:number, amount:number):void;

        // TextureAtlas - Drawing

        /**
         * Draws all the Atlas's Quads
         */
        public drawQuads():void;
    }
}
/// <reference path="../../cocos2d-lib.d.ts" />

declare namespace cc {
  
  /**
   * To use cc.pool you must have a class with unuse and reuse functions
   */
  export interface Poolable {
    
    /**
     * cc.pool will call unuse function when you put it into the pool
     */    
    unuse(): void
    
    /**
     * cc.pool will call reuse function when you retrieve an object from the pool to reinitialize it with the given parameters.
     * @param {any[]} args
     */
    reuse(...args: any[]): void
  }

  /**
   * <p>
   *  cc.pool is a singleton object serves as an object cache pool.<br/>
   *  It can helps you to improve your game performance for objects which need frequent release and recreate operations<br/>
   *  Some common use case is :
   *      1. Bullets in game (die very soon, massive creation and recreation, no side effect on other objects)
   *      2. Blocks in candy crash (massive creation and recreation)
   *      etc...
   * </p>
   *
  * @example
  * var sp = new cc.Sprite("a.png");
  * this.addChild(sp);
  * cc.pool.putInPool(sp);
  *
  * cc.pool.getFromPool(cc.Sprite, "a.png");
  * @class
  * @name cc.pool
  */
  export namespace pool {
    /**
     * Put the obj in pool
     * @param {cc.Poolable} obj
     */
    function putInPool(obj: Poolable): void
    
    /**
     * Check if this kind of obj has already in pool
     * @param {cc.Class} objClass
     * @returns {boolean} if this kind of obj is already in pool return true,else return false;
     */
    function hasObject(objClass: Class): boolean
    
    /**
     * Remove the obj if you want to delete it;
     * @param {cc.Poolable} obj
     */
    function removeObject(obj: Poolable): void
    
    /**
     * Get the obj from pool
     * @param {cc.Class} objClass
     * @param {any[]} args
     * @returns {any} call the reuse function an return the obj
     */
    function getFromPool(objClass: Class, ...args: any[]): any
    
    /**
     * remove all objs in pool and reset the pool
     */
    function drainAllPools(): void
  }
}

/// <reference path="../../cocos2d-lib.d.ts" />

declare namespace ccs {
  
  ////////////////////////////////////////////////////////////////////////////////
  // File: cocos2d/extensions/cocosstudio/load.js
  ////////////////////////////////////////////////////////////////////////////////

  /**
   * Parsed out object from studio JSON file
   */
  export interface Loadable {
    node: cc.Node;
    action: cc.Action;
  }
  
  /**
   * Analysis of studio JSON file
   * The incoming file name, parse out the corresponding object
   * Temporary support file list:
   *   ui 1.*
   *   node 1.* - 2.*
   *   action 1.* - 2.*
   *   scene 0.* - 1.*
   * @param {string} file
   * @param {string} [path=] Resource path
   * @returns {{node: cc.Node, action: cc.Action}}
   */
  export function load(file: string, path?: string): Loadable
  
  /**
   * Analysis of studio JSON file and layout ui widgets by visible size.
   * The incoming file name, parse out the corresponding object
   * Temporary support file list:
   *   ui 1.*
   *   node 1.* - 2.*
   *   action 1.* - 2.*
   *   scene 0.* - 1.*
   * @param {string} file
   * @param {string} [path=] Resource path
   * @returns {{node: cc.Node, action: cc.Action}}
   */
  export function loadWithVisibleSize(file: string, path?: string): Loadable
}
/// <reference path="../../cocos2d-lib.d.ts" />


declare namespace cc {
    // +--------------------------------------------------------------------------------
    // + File: CCScrollView.js
    // +--------------------------------------------------------------------------------

    /**
     * @ignore
     */
    export const SCROLLVIEW_DIRECTION_NONE:number;
    export const SCROLLVIEW_DIRECTION_HORIZONTAL:number;
    export const SCROLLVIEW_DIRECTION_VERTICAL:number;
    export const SCROLLVIEW_DIRECTION_BOTH:number;
    export const SCROLL_DEACCEL_RATE:number;
    export const SCROLL_DEACCEL_DIST:number;
    export const BOUNCE_DURATION:number;
    export const INSET_RATIO:number;
    export const MOVE_INCH:number;
    export const BOUNCE_BACK_FACTOR:number;

    export function convertDistanceFromPointToInch(pointDis:number):number;

    export interface ScrollViewDelegate extends Class {
        scrollViewDidScroll(view:ScrollView):void;
        scrollViewDidZoom(view:ScrollView):void;
    }

    /**
     * ScrollView support for cocos2d -x.
     * It provides scroll view functionalities to cocos2d projects natively.
     * @class
     * @extends cc.Layer
     *
     * @property {cc.Point}                 minOffset   - <@readonly> The current container's minimum offset
     * @property {cc.Point}                 maxOffset   - <@readonly> The current container's maximum offset
     * @property {Boolean}                  bounceable  - Indicate whether the scroll view is bounceable
     * @property {cc.Size}                  viewSize    - The size of the scroll view
     * @property {cc.Layer}                 container   - The inside container of the scroll view
     * @property {Number}                   direction   - The direction allowed to scroll: cc.SCROLLVIEW_DIRECTION_BOTH by default, or cc.SCROLLVIEW_DIRECTION_NONE | cc.SCROLLVIEW_DIRECTION_HORIZONTAL | cc.SCROLLVIEW_DIRECTION_VERTICAL
     * @property {cc.ScrollViewDelegate}    delegate    - The inside container of the scroll view
     * @property {Boolean}                  clippingToBounds   - Indicate whether the scroll view clips its children
     */
    export class ScrollView extends Layer {
        public minOffset:Point;
        public maxOffset:Point;
        public bounceable:boolean;
        public viewSize:Size;
        public container:Node;
        public direction:number;
        public delegate:ScrollViewDelegate;
        public clippingToBounds:boolean;

        /**
         * @contructor
         * @param size
         * @param container
         * @returns {ScrollView}
         */
        public constructor(size:Size, container?:Node);

        public ctor(size?:Size, container?:Node);

        public init():boolean;

        /**
         * initialized whether success or fail
         * @param {cc.Size} size
         * @param {cc.Node} container
         * @return {Boolean}
         */
        public initWithViewSize(size:Size, container?:Node):boolean;

        /**
         * Sets a new content offset. It ignores max/min offset. It just sets what's given. (just like UIKit's UIScrollView)
         *
         * @param {cc.Point} offset new offset
         * @param {Number} [animated=] If true, the view will scroll to the new offset
         */
        public setContentOffset(offset:Point, animated?:number):void;

        public getContentOffset():Point;

        /**
         * Sets a new content offset. It ignores max/min offset. It just sets what's given. (just like UIKit's UIScrollView) 
         * You can override the animation duration with this method.
         * 
         * @param {cc.Point} offset new offset
         * @param {Number} dt animation duration
         */
        public setContentOffsetInDuration(offset:Point, dt:number):void;

        /**
         * Sets a new scale and does that for a predefined duration.
         *
         * @param {Number} scale a new scale vale
         * @param {Boolean} [animated=null] if YES, scaling is animated
         */
        public setZoomScale(scale:number, animated?:boolean):void;

        public getZoomScale():Point;

        /**
         * Sets a new scale for container in a given duration.
         *
         * @param {Number} s a new scale value
         * @param {Number} dt animation duration
         */
        public setZoomScaleInDuration(s:number, dt:number):void;

        /**
         * Returns the current container's minimum offset. You may want this while you animate scrolling by yourself
         * @return {cc.Point} Returns the current container's minimum offset.
         */
        public minContainerOffset():Point;

        /**
         * Returns the current container's maximum offset. You may want this while you animate scrolling by yourself
         * @return {cc.Point} Returns the current container's maximum offset.
         */
        public maxContainerOffset():Point;

        /**
         * Determines if a given node's bounding box is in visible bounds
         * @param {cc.Node} node
         * @return {Boolean} YES if it is in visible bounds
         */
        public isNodeVisible(node:Node):boolean;

        /**
         * Provided to make scroll view compatible with SWLayer's pause method
         */
        //public pause(sender?:Class):void;

        /**
         * Provided to make scroll view compatible with SWLayer's resume method
         */
        //public resume(sender?:Class):void;

        public isDragging():boolean;

        public isTouchMoved():boolean;

        public isBounceable():boolean;

        public setBounceable(bounceable:boolean):void;

        /**
         * 
         * size to clip. CCNode boundingBox uses contentSize directly.                   
         * It's semantically different what it actually means to common scroll views.    
         * Hence, this scroll view will use a separate size property.
         * 
         */
        public getViewSize():Size;

        public setViewSize(size:Size):void;

        public getContainer():Node;

        public setContainer(container:Node):void;

        /**
         * direction allowed to scroll. CCScrollViewDirectionBoth by default.
         */
        public getDirection():number;

        public setDirection(direction:number):void;

        public getDelegate():ScrollViewDelegate;

        public setDelegate(delegate:ScrollViewDelegate):void;

        /** override functions */
        // optional
        public onTouchBegan(touch:Touch, event:Event):boolean;

        public onTouchMoved(touch:Touch, event:Event):void;

        public onTouchEnded(touch:Touch, event:Event):void;

        public onTouchCancelled(touch:Touch, event:Event):void;

        public updateInset():void;

        /**
         * Determines whether it clips its children or not.
         */
        public isClippingToBounds():boolean;

        public setClippingToBounds(clippingToBounds:Size):void;

        public isTouchEnabled():boolean;

        public setTouchEnabled(enabled:boolean):void;
    }

    // +--------------------------------------------------------------------------------
    // + File: CCSorting.js
    // +--------------------------------------------------------------------------------
    /**
     * The sortable object interface
     * @class
     * @extends cc.Class
     */
    export class SortableObject extends Class {
        setObjectID(objectId:number):void;
        getObjectID():number;
    }

    /**
     * The SortedObject class
     * @class
     * @extends cc.SortableObject
     */
    export class SortedObject extends SortableObject {
        public constructor();
        public ctor();
        public getObjectID():number;
        public setObjectID(objectID:number):void;
    }

    /**
     * Array for object sorting utils
     * @class
     * @extend cc.Class
     */
    export class ArrayForObjectSorting extends Class {
        public ctor();

        public constructor();

        /**
         * Inserts a given object into array.
         *
         * Inserts a given object into array with key and value that are used in
         * sorting. "value" must respond to message, compare:, which returns
         * (NSComparisonResult). If it does not respond to the message, it is appended.
         * If the compare message does not result NSComparisonResult, sorting behavior
         * is not defined. It ignores duplicate entries and inserts next to it.
         *
         * @function
         * @param {Object} addObject    Object to insert
         */
        public insertSortedObject(addObject:{}):void;

        /*!
         * Removes an object in array.
         *
         * Removes an object with given key and value. If no object is found in array
         * with the key and value, no action is taken.
         *
         * @function
         * @param {Object} delObject    Object to remove
         */
        public removeSortedObject(delObject:{}):void;

        /*!
         * Sets a new value of the key for the given object.
         *
         * In case where sorting value must be changed, this message must be sent to
         * keep consistency of being sorted. If it is changed externally, it must be
         * sorted completely again.
         *
         * @function
         * @param {Number} tag          Tag to set
         * @param {Object} setObject    The object which would be set
         */
        public setObjectID_ofSortedObject(tag:number, setObject:{}):void;

        public objectWithObjectID(tag:number):{};

        /*!
         * Returns an object with given key and value.
         *
         * Returns an object with given key and value. If no object is found,
         * it returns nil.
         *
         * @function
         * @param {Number} tag  Tag to locate object
         * @return {Object|null}
         */
        public getObjectWithObjectID(tag:number):{};

        /*!
         * Returns an index of the object with given key and value.
         *
         * Returns the index of an object with given key and value.
         * If no object is found, it returns an index at which the given object value
         * would have been located. If object must be located at the end of array,
         * it returns the length of the array, which is out of bound.
         *
         * @function
         * @param {Number} idxObj   Id to locate object
         * @return {Number} index of an object found
         */
        public indexOfSortedObject(idxObj:number):number;

        //implement array method
        public count():number;

        public lastObject():{};

        public objectAtIndex(idx:number):{};

        public addObject(addObj:{}):void;

        public removeObjectAtIndex(idx:number):void;

        public insertObject(addObj:{}, idx:number):void;
    }

    // +--------------------------------------------------------------------------------
    // + File: CCTableView.js
    // +--------------------------------------------------------------------------------

    /****************************************************************************
     Copyright (c) 2008-2010 Ricardo Quesada
     Copyright (c) 2011-2012 cocos2d-x.org
     Copyright (c) 2013-2014 Chukong Technologies Inc.
     Copyright (c) 2010 Sangwoo Im

     http://www.cocos2d-x.org

     Permission is hereby granted, free of charge, to any person obtaining a copy
     of this software and associated documentation files (the "Software"), to deal
     in the Software without restriction, including without limitation the rights
     to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     copies of the Software, and to permit persons to whom the Software is
     furnished to do so, subject to the following conditions:

     The above copyright notice and this permission notice shall be included in
     all copies or substantial portions of the Software.

     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     THE SOFTWARE.
     ****************************************************************************/

    /**
     * The constant value of the fill style from top to bottom for cc.TableView
     * @constant
     * @type {number}
     */
    export const TABLEVIEW_FILL_TOPDOWN:number;

    /**
     * The constant value of the fill style from bottom to top for cc.TableView
     * @constant
     * @type {number}
     */
    export const TABLEVIEW_FILL_BOTTOMUP:number;

    /**
     * Abstract class for SWTableView cell node
     * @class
     * @abstract
     * @extends cc.Node
     *
     * @property {Number}   objectId    - The index used internally by SWTableView and its subclasses
     */
    export class TableViewCell extends Node {
        public objectId:number;

        /**
         * The index used internally by SWTableView and its subclasses
         */
        public getIdx():number;

        public setIdx(idx:number):void;

        /**
         * Cleans up any resources linked to this cell and resets <code>idx</code> property.
         */
        public reset():void;

        public setObjectID(idx:number):void;

        public getObjectID():number;
    }

    /**
     * Sole purpose of this delegate is to single touch event in this version.
     */
    export interface TableViewDelegate extends ScrollViewDelegate {
        /**
         * Delegate to respond touch event
         *
         * @param {cc.TableView} table table contains the given cell
         * @param {cc.TableViewCell} cell  cell that is touched
         */
        tableCellTouched(table:TableView, cell:TableViewCell):void;

        /**
         * Delegate to respond a table cell press event.
         *
         * @param {cc.TableView} table table contains the given cell
         * @param {cc.TableViewCell} cell  cell that is pressed
         */
        tableCellHighlight(table:TableView, cell:TableViewCell):void;

        /**
         * Delegate to respond a table cell release event
         *
         * @param {cc.TableView} table table contains the given cell
         * @param {cc.TableViewCell} cell  cell that is pressed
         */
        tableCellUnhighlight(table:TableView, cell:TableViewCell):void;

        /**
         * <p>
         * Delegate called when the cell is about to be recycled. Immediately                     <br/>
         * after this call the cell will be removed from the scene graph and                      <br/>
         * recycled.
         * </p>
         * @param table table contains the given cell
         * @param cell  cell that is pressed
         */
        tableCellWillRecycle(table:TableView, cell:TableViewCell):void;
    }

    /**
     * Data source that governs table backend data.
     */
    export class TableViewDataSource extends Class {
        /**
         * cell size for a given index
         * @param {cc.TableView} table table to hold the instances of Class
         * @param {Number} idx the index of a cell to get a size
         * @return {cc.Size} size of a cell at given index
         */
        public tableCellSizeForIndex(table:TableView, idx:number):Size;

        /**
         * cell height for a given table.
         *
         * @param {cc.TableView} table table to hold the instances of Class
         * @return {cc.Size} cell size
         */
        public cellSizeForTable(table:TableView):Size;

        /**
         * a cell instance at a given index
         * @param {cc.TableView} table table to hold the instances of Class
         * @param idx index to search for a cell
         * @return {cc.TableViewCell} cell found at idx
         */
        public tableCellAtIndex(table:TableView, idx:number):TableViewCell;

        /**
         * Returns number of cells in a given table view.
         * @param {cc.TableView} table table to hold the instances of Class
         * @return {Number} number of cells
         */
        public numberOfCellsInTableView(table:TableView):number;
    }

    /**
     * UITableView counterpart for cocos2d for iphone.
     * this is a very basic, minimal implementation to bring UITableView-like component into cocos2d world.
     *
     * @class
     * @extends cc.ScrollView
     *
     * @property {cc.TableViewDataSource}   dataSource          - The data source of the table view
     * @property {cc.TableViewDelegate}     delegate            - The event delegate of the table view
     * @property {Number}                   verticalFillOrder   - The index to determine how cell is ordered and filled in the view
     *
     */
    export class TableView extends ScrollView {
        public dataSource:TableViewDataSource;
        public delegate:TableViewDelegate;
        public verticalFillOrder:number;

        /**
         * The
         * @param dataSource
         * @param size
         * @param container
         */
        public ctor(dataSource:TableViewDataSource, size:Size, container:Node):void;
        public ctor():void;

        /**
         * data source
         */
        public getDataSource():TableViewDataSource;

        public setDataSource(source:TableViewDataSource):void;

        /**
         * delegate
         */
        public getDelegate():TableViewDelegate;

        public setDelegate(delegate:TableViewDelegate):void;

        /**
         * determines how cell is ordered and filled in the view.
         */
        public setVerticalFillOrder(fillOrder:number):void;

        public getVerticalFillOrder():number;

        //public initWithViewSize(size:Size, container:Node):boolean;

        /**
         * Updates the content of the cell at a given index.
         *
         * @param idx index to find a cell
         */
        public updateCellAtIndex(idx:number):void;

        /**
         * Inserts a new cell at a given index
         *
         * @param idx location to insert
         */
        public insertCellAtIndex(idx:number):void;

        /**
         * Removes a cell at a given index
         *
         * @param idx index to find a cell
         */
        public removeCellAtIndex(idx:number):void;

        /**
         * reloads data from data source.  the view will be refreshed.
         */
        public reloadData():void;

        /**
         * Dequeues a free cell if available. nil if not.
         *
         * @return {TableViewCell} free cell
         */
        public dequeueCell():TableViewCell;

        /**
         * Returns an existing cell at a given index. Returns nil if a cell is nonexistent at the moment of query.
         *
         * @param idx index
         * @return {cc.TableViewCell} a cell at a given index
         */
        public cellAtIndex(idx:number):TableViewCell;

        public scrollViewDidScroll(view:Node):void;

        public scrollViewDidZoom(view:Node):void;

        //onTouchBegan(touch:Touch, event:Event):boolean;
        //
        //onTouchMoved(touch:Touch, event:Event):void;
        //
        //onTouchCancelled(touch:Touch, event:Event):void;
        //
        //onTouchEnded(touch:Touch, event:Event):void;
    }
}
/// <reference path="../cocos2d-lib.d.ts" />

declare namespace cc {
  // +--------------------------------------------------------------------------------
  // + File: cocos2d/tilemap/CCTMXLayer.js
  // +--------------------------------------------------------------------------------

  /**
   * <p>cc.TMXLayer represents the TMX layer. </p>
   *
   * <p>It is a subclass of cc.SpriteBatchNode. By default the tiles are rendered using a cc.TextureAtlas. <br />
   * If you modify a tile on runtime, then, that tile will become a cc.Sprite, otherwise no cc.Sprite objects are created. <br />
   * The benefits of using cc.Sprite objects as tiles are: <br />
   * - tiles (cc.Sprite) can be rotated/scaled/moved with a nice API </p>
   *
   * <p>If the layer contains a property named "cc.vertexz" with an integer (in can be positive or negative), <br />
   * then all the tiles belonging to the layer will use that value as their OpenGL vertex Z for depth. </p>
   *
   * <p>On the other hand, if the "cc.vertexz" property has the "automatic" value, then the tiles will use an automatic vertex Z value. <br />
   * Also before drawing the tiles, GL_ALPHA_TEST will be enabled, and disabled after drawing them. The used alpha func will be:  </p>
   *
   * glAlphaFunc( GL_GREATER, value ) <br />
   *
   * <p>"value" by default is 0, but you can change it from Tiled by adding the "cc_alpha_func" property to the layer. <br />
   * The value 0 should work for most cases, but if you have tiles that are semi-transparent, then you might want to use a different value, like 0.5.</p>
   * @class
   * @extends cc.SpriteBatchNode
   *
   * @property {cc.Sprite[]}          tiles               - Tiles for layer
   * @property {cc.TMXTilesetInfo}    tileset             - Tileset for layer
   * @property {number}               layerOrientation    - Layer orientation
   * @property {any[]}                properties          - Properties from the layer. They can be added using tilemap editors
   * @property {string}               layerName           - Name of the layer
   * @property {number}               layerWidth          - Width of the layer
   * @property {number}               layerHeight         - Height of the layer
   * @property {number}               tileWidth           - Width of a tile
   * @property {number}               tileHeight          - Height of a tile
   */
  export class TMXLayer extends SpriteBatchNode {
    /**
     * Pointer to the map of tiles
     * @member {cc.Sprite[]} tiles
     */
    tiles: Sprite[];

    /**
     * Tile set information for the layer
     * @member {cc.TMXTilesetInfo} tileset
     */
    tileset: TMXTilesetInfo;
        
    /**
     * Layer orientation, which is the same as the map orientation
     * @member {number} layerOrientation
     */
    layerOrientation: number;
    
    /**
     * properties from the layer. They can be added using Tiled
     * @member {any[]} properties
     */
    properties: any[];

    /**
     * The layer name
     * @member {string} layerName
     */
    layerName: string;
    
    /**
     * Texture of cc.SpriteBatchNode
     * @member {cc.Texture2D} texture
     */
    texture: Texture2D;

    /**
     * Width of the layer
     * @member {number} layerWidth
     */
    layerWidth: number;

    /**
     * Height of the layer
     * @member {number} layerHeight
     */
    layerHeight: number;

    /**
     * Width of a tile
     * @member {number} tileWidth
     */
    tileWidth: number;

    /**
     * Height of a tile
     * @member {number} tileHeight
     */
    tileHeight: number;

    /**
     * Creates a cc.TMXLayer with an tile set info, a layer info and a map info   <br/>
     * Constructor of cc.TMXLayer
     * @param {cc.TMXTilesetInfo} tilesetInfo
     * @param {cc.TMXLayerInfo} layerInfo
     * @param {cc.TMXMapInfo} mapInfo
     */
    constructor(tilesetInfo: TMXTilesetInfo, layerInfo: TMXLayerInfo, mapInfo: TMXMapInfo);
    
    /**
     * Sets the untransformed size of the TMXLayer.
     * @override
     * @param {cc.Size|number} size The untransformed size of the TMXLayer or The untransformed size's width of the TMXLayer.
     * @param {number} [height] The untransformed size's height of the TMXLayer.
     */
    setContentSize(size: Size|number, height: number): void;

    /**
     * Gets layer size.
     * @return {cc.Size}
     */
    getLayerSize(): Size;

    /**
     * Set layer size
     * @param {cc.Size} Var
     */
    setLayerSize(Var: Size): void;

    /**
     * Size of the map's tile (could be different from the tile's size)
     * @return {cc.Size}
     */
    getMapTileSize(): Size;

    /**
     * Set the map tile size.
     * @param {cc.Size} Var
     */
    setMapTileSize(Var: Size): void;

    /**
     * Initializes a cc.TMXLayer with a tileset info, a layer info and a map info
     * @param {cc.TMXTilesetInfo} tilesetInfo
     * @param {cc.TMXLayerInfo} layerInfo
     * @param {cc.TMXMapInfo} mapInfo
     * @return {boolean}
     */
    initWithTilesetInfo(tilesetInfo: TMXTilesetInfo, layerInfo: TMXLayerInfo, mapInfo: TMXMapInfo): boolean;

    /**
     * <p>Dealloc the map that contains the tile position from memory. <br />
     * Unless you want to know at runtime the tiles positions, you can safely call this method. <br />
     * If you are going to call layer.getTileGIDAt() then, don't release the map</p>
     */
    releaseMap(): void;

    /**
     * <p>Returns the tile (cc.Sprite) at a given a tile coordinate. <br/>
     * The returned cc.Sprite will be already added to the cc.TMXLayer. Don't add it again.<br/>
     * The cc.Sprite can be treated like any other cc.Sprite: rotated, scaled, translated, opacity, color, etc. <br/>
     * You can remove either by calling: <br/>
     * - layer.removeChild(sprite, cleanup); <br/>
     * - or layer.removeTileAt(ccp(x,y)); </p>
     * @param {cc.Point|number} pos or x
     * @param {number} [y]
     * @return {cc.Sprite}
     */
    getTileAt(pos: Point|number, y: number): Sprite;

    /**
     * Returns the tile gid at a given tile coordinate. <br />
     * if it returns 0, it means that the tile is empty. <br />
     * This method requires the the tile map has not been previously released (eg. don't call layer.releaseMap())<br />
     * @param {cc.Point|number} pos or x
     * @param {number} [y]
     * @return {number}
     */
    getTileGIDAt(pos: Point|number, y: number): number;

    /**
     *  lipped tiles can be changed dynamically
     * @param {cc.Point|number} pos or x
     * @param {number} [y]
     * @return {number}
     */
    getTileFlagsAt(pos: Point|number, y: number): number;

    /**
     * <p>Sets the tile gid (gid = tile global id) at a given tile coordinate.<br />
     * The Tile GID can be obtained by using the method "tileGIDAt" or by using the TMX editor . Tileset Mgr +1.<br />
     * If a tile is already placed at that position, then it will be removed.</p>
     * @param {number} gid
     * @param {cc.Point|number} posOrX position or x
     * @param {number} flagsOrY flags or y
     * @param {number} [flags]
     */
    setTileGID(gid: number, posOrX: Point|number, flagsOrY: number, flags: number): void;

    /**
     * Removes a tile at given tile coordinate
     * @param {cc.Point|number} pos position or x
     * @param {number} [y]
     */
    removeTileAt(pos: Point|number, y: number): void;

    /**
     * Returns the position in pixels of a given tile coordinate
     * @param {cc.Point|number} pos position or x
     * @param {number} [y]
     * @return {cc.Point}
     */
    getPositionAt(pos: Point|number, y: number): Point;

    /**
     * Return the value for the specific property name
     * @param {string} propertyName
     * @return {any}
     */
    getProperty(propertyName: string): any;

    /**
     * Creates the tiles
     */
    setupTiles(): void;
    
    /**
     * Remove child
     * @param  {cc.Sprite} sprite
     * @param  {boolean} cleanup
     */
    removeChild(sprite: Sprite, cleanup: boolean): void;
  }
}/// <reference path="../cocos2d-lib.d.ts" />

declare namespace cc {
  // +--------------------------------------------------------------------------------
  // + File: cocos2d/tilemap/CCTMXObjectGroup.js
  // +--------------------------------------------------------------------------------
  
  /**
   * cc.TMXObjectGroup represents the TMX object group.
   * @class
   * @extends cc.Class
   *
   * @property {any[]}    properties  - Properties from the group. They can be added using tilemap editors
   * @property {string}   groupName   - Name of the group
   */
  export class TMXObjectGroup extends Class {
    /**
     * Properties from the group. They can be added using tilemap editors
     * @member {any[]} properties
     */
    properties: any[]
    
    /**
     * Name of the group
     * @member {string} groupName
     */
    groupName: string

    /**
     * <p>The cc.TMXObjectGroup's constructor. <br/>
     * This function will automatically be invoked when you create a node using new construction: "var node = new cc.TMXObjectGroup()".<br/>
     * Override it to extend its behavior, remember to call "this._super()" in the extended "ctor" function.</p>
     */
    constructor()

    /**
     * Offset position of child objects
     * @return {cc.Point}
     */
    getPositionOffset(): Point

    /**
     * Offset position of child objects
     * @param {cc.Point} offset
     */
    setPositionOffset(offset: Point): void

    /**
     * List of properties stored in a dictionary
     * @param {any} Var
     */
    setProperties(Var: any): void

    /**
     * Return the value for the specific property name
     * @param {string} propertyName
     * @return {any}
     */
    propertyNamed(propertyName: string): any

    /**
     * <p>Return the dictionary for the specific object name. <br />
     * It will return the 1st object found on the array for the given name.</p>
     * @param {string} objectName
     * @return {any|null}
     */
    getObject(objectName: string): any

    /**
     * Gets the objects.
     * @return {any[]}
     */
    getObjects(): any[]

    /**
     * Set the objects.
     * @param {any} objects
     */
    setObjects(objects: any): void
  }
}/// <reference path="../cocos2d-lib.d.ts" />

declare namespace cc {
  // +--------------------------------------------------------------------------------
  // + File: cocos2d/tilemap/CCTMXTiledMap.js
  // +--------------------------------------------------------------------------------
    
  /**
   Orthogonal orientation
  * @const {number} TMX_ORIENTATION_ORTHO
  */
  export const TMX_ORIENTATION_ORTHO: number

  /**
   * Hexagonal orientation
   * @const {number} TMX_ORIENTATION_HEX
   */

  export const TMX_ORIENTATION_HEX: number

  /**
   * Isometric orientation
   * @const {number} TMX_ORIENTATION_ISO
   */
  export const TMX_ORIENTATION_ISO: number
  
  /**
   * <p>cc.TMXTiledMap knows how to parse and render a TMX map.</p>
   *
  * <p>It adds support for the TMX tiled map format used by http://www.mapeditor.org <br />
  * It supports isometric, hexagonal and orthogonal tiles.<br />
  * It also supports object groups, objects, and properties.</p>
  * @class
  * @extends cc.Node
  * @param {string} tmxFile tmxFile fileName or content string
  * @param {string} resourcePath   If tmxFile is a file name ,it is not required.If tmxFile is content string ,it is must required.

  *
  * @property {any[]}               properties      - Properties from the map. They can be added using tilemap editors
  * @property {number}              mapOrientation  - Map orientation
  * @property {TMXObjectGroup[]}    objectGroups    - Object groups of the map
  * @property {number}              mapWidth        - Width of the map
  * @property {number}              mapHeight       - Height of the map
  * @property {number}              tileWidth       - Width of a tile
  * @property {number}              tileHeight      - Height of a tile
  *
  * @example
  * //example
  * 1.
  * //create a TMXTiledMap with file name
  * var tmxTiledMap = new cc.TMXTiledMap("res/orthogonal-test1.tmx");
  * 2.
  * //create a TMXTiledMap with content string and resource path
  * var resources = "res/TileMaps";
  * var filePath = "res/TileMaps/orthogonal-test1.tmx";
  * var xmlStr = cc.loader.getRes(filePath);
  * var tmxTiledMap = new cc.TMXTiledMap(xmlStr, resources);
  */
  export class TMXTiledMap extends Node {
    /**
     * The properties
     * @member {any[]} properties
     */
    properties: any[]
    
    /**
     * Map orientation
     * @member {number} mapOrientation
     */
    mapOrientation: number

    /**
     * Object groups
     * @member {TMXObjectGroup[]} objectGroups
     */
    objectGroups: TMXObjectGroup[]

    /**
     * Width of the map
     * @member {number} mapWidth
     */
    mapWidth: number

    /**
     * Height of the map
     * @member {number} mapHeight
     */
    mapHeight: number

    /**
     * Width of a tile
     * @member {number} tileWidth
     */
    tileWidth: number

    /**
     * Height of a tile
     * @member {number} tileHeight
     */
    tileHeight: number

    /**
     * Creates a TMX Tiled Map with a TMX file  or content string. <br/>
     * Constructor of cc.TMXTiledMap
     * @param {string} tmxFile tmxFile fileName or content string
     * @param {string} resourcePath   If tmxFile is a file name ,it is not required.If tmxFile is content string ,it is must required.
     */
    constructor(tmxFile: string, resourcePath?: string)

    /**
     * Gets the map size.
     * @return {cc.Size}
     */
    getMapSize(): Size

    /**
     * Set the map size.
     * @param {cc.Size} Var
     */
    setMapSize(Var: Size): void
    
    /**
     * Gets the tile size.
     * @return {cc.Size}
     */
    getTileSize(): Size

    /**
     * Set the tile size
     * @param {cc.Size} Var
     */
    setTileSize(Var: Size): void

    /**
     * Initializes the instance of cc.TMXTiledMap with tmxFile
     * @param {string} tmxFile
     * @return {boolean} Whether the initialization was successful.
     * @example
     * //example
     * var map = new cc.TMXTiledMap()
     * map.initWithTMXFile("hello.tmx");
     */
    initWithTMXFile(tmxFile: string): boolean

    /**
     * Initializes the instance of cc.TMXTiledMap with tmxString
     * @param {string} tmxString
     * @param {string} resourcePath
     * @return {boolean} Whether the initialization was successful.
     */
    initWithXML(tmxString: string, resourcePath: string): boolean
    
    /**
     * Return All layers array.
     * @returns {TMXLayer[]}
     */
    allLayers(): TMXLayer[]

    /**
     * return the TMXLayer for the specific layer
     * @param {string} layerName
     * @return {cc.TMXLayer}
     */
    getLayer(layerName: string): TMXLayer

    /**
     * Return the TMXObjectGroup for the specific group
     * @param {string} groupName
     * @return {cc.TMXObjectGroup}
     */
    getObjectGroup(groupName: string): TMXObjectGroup

    /**
     * Return the value for the specific property name
     * @param {string} propertyName
     * @return {string}
     */
    getProperty(propertyName: string): string

    /**
     * Return properties dictionary for tile GID
     * @param {number} GID
     * @return {any}
     */
    getPropertiesForGID(GID: number): any
  }  
}/// <reference path="../cocos2d-lib.d.ts" />

declare namespace cc {
  // +--------------------------------------------------------------------------------
  // + File: cocos2d/tilemap/CCTMXXMLParser.js
  // +--------------------------------------------------------------------------------

  /**
   * @const {number} TMX_PROPERTY_NONE
   */
  export const TMX_PROPERTY_NONE: number

  /**
   * @const {number} TMX_PROPERTY_MAP
   */
  export const TMX_PROPERTY_MAP: number

  /**
   * @const {number} TMX_PROPERTY_LAYER
   */
  export const TMX_PROPERTY_LAYER: number

  /**
   * @const {number} TMX_PROPERTY_OBJECTGROUP
   */
  export const TMX_PROPERTY_OBJECTGROUP: number

  /**
   * @const {number} TMX_PROPERTY_OBJECT
   */
  export const TMX_PROPERTY_OBJECT: number

  /**
   * @const {number} TMX_PROPERTY_TILE
   */
  export const TMX_PROPERTY_TILE: number

  /**
   * @const {number} TMX_TILE_HORIZONTAL_FLAG
   */
  export const TMX_TILE_HORIZONTAL_FLAG: number

  /**
   * @const {number} TMX_TILE_VERTICAL_FLAG
   */
  export const TMX_TILE_VERTICAL_FLAG: number

  /**
   * @const {number} TMX_TILE_DIAGONAL_FLAG
   */
  export const TMX_TILE_DIAGONAL_FLAG: number

  /**
   * @const {number} TMX_TILE_FLIPPED_ALL
   */
  export const TMX_TILE_FLIPPED_ALL: number

  /**
   * @const {number} TMX_TILE_FLIPPED_MASK
   */
  export const TMX_TILE_FLIPPED_MASK: number

  /**
   * <p>cc.TMXLayerInfo contains the information about the layers like: <br />
   * - Layer name<br />
   * - Layer size <br />
   * - Layer opacity at creation time (it can be modified at runtime)  <br />
   * - Whether the layer is visible (if it's not visible, then the CocosNode won't be created) <br />
   *  <br />
   * This information is obtained from the TMX file.</p>
   * @class
   * @extends cc.Class
   *
   * @property {any[]}    properties  - Properties of the layer info.
   */
  export class TMXLayerInfo extends cc.Class {
    /**
     * The Properties.
     * @member {any[]} properties
     */
    properties: any[]

    /**
     * @member {boolean} visible
     */
    visible: boolean     
     
    /**
     * @member {boolean} ownTiles
     */
    ownTiles: boolean
    
    /**
     * @member {number} offset
     */
    offset: number

    constructor()
    
    /**
     * @const {number} ATTRIB_NONE
     */
    static ATTRIB_NONE: number
    
    /**
     * @const {number} ATTRIB_BASE64
     */
    static ATTRIB_BASE64: number

    /**
     * @const {number} ATTRIB_GZIP 
     */
    static ATTRIB_GZIP: number
    /**
     * @const {number} ATTRIB_ZLIB 
     */
    static ATTRIB_ZLIB: number    
  }

  /**
   * <p>cc.TMXTilesetInfo contains the information about the tilesets like: <br />
   * - Tileset name<br />
   * - Tileset spacing<br />
   * - Tileset margin<br />
   * - size of the tiles<br />
   * - Image used for the tiles<br />
   * - Image size<br />
   *
   * This information is obtained from the TMX file. </p>
   * @class
   * @extends cc.Class
   *
   * @property {string} name - Tileset name
   * @property {number} firstGid - First gid
   * @property {number} spacing - Spacing
   * @property {number} margin - Margin
   * @property {string} sourceImage - Filename containing the tiles (should be sprite sheet / texture atlas)
   * @property {cc.Size|null} imageSize - Size in pixels of the image
   */
  export class TMXTilesetInfo extends Class {
    /**
     * Tileset name
     * @member {string} name
     */
    name: string

    /**
     * First gid
     * @member {number} firstGid
     */
    firstGid: number

    /**
     * Spacing
     * @member {number} spacing
     */
    spacing: number

    /**
     * Margin
     * @member {number} margin
     */
    margin: number

    /**
     * Filename containing the tiles (should be sprite sheet / texture atlas)
     * @member {string} sourceImage
     */
    sourceImage: string

    /**
     * Size in pixels of the image
     * @member {cc.Size|null} imageSize
     */
    imageSize: Size

    constructor()

    /**
     * Return rect
     * @param {number} gid
     * @return {cc.Rect}
     */
    rectForGID(gid: number): Rect
  }

  class SAXParser {}
  
  /**
   * <p>cc.TMXMapInfo contains the information about the map like: <br/>
   *- Map orientation (hexagonal, isometric or orthogonal)<br/>
  *- Tile size<br/>
  *- Map size</p>
  *
  * <p>And it also contains: <br/>
  * - Layers (an array of TMXLayerInfo objects)<br/>
  * - Tilesets (an array of TMXTilesetInfo objects) <br/>
  * - ObjectGroups (an array of TMXObjectGroupInfo objects) </p>
  *
  * <p>This information is obtained from the TMX file. </p>
  * @class
  * @extends cc.saxParser
  *
  * @property {any[]}    properties          - Properties of the map info.
  * @property {number}   orientation         - Map orientation.
  * @property {any}      parentElement       - Parent element.
  * @property {number}   parentGID           - Parent GID.
  * @property {any}      layerAttrs          - Layer attributes.
  * @property {boolean}  storingCharacters   - Is reading storing characters stream.
  * @property {string}   tmxFileName         - TMX file name.
  * @property {string}   currentString       - Current string stored from characters stream.
  * @property {number}   mapWidth            - Width of the map
  * @property {number}   mapHeight           - Height of the map
  * @property {number}   tileWidth           - Width of a tile
  * @property {number}   tileHeight          - Height of a tile
  *
  * @param {string} tmxFile fileName or content string
  * @param {string} resourcePath  If tmxFile is a file name ,it is not required.If tmxFile is content string ,it is must required.
  * @example
  * 1.
  * //create a TMXMapInfo with file name
  * var tmxMapInfo = new cc.TMXMapInfo("res/orthogonal-test1.tmx");
  * 2.
  * //create a TMXMapInfo with content string and resource path
  * var resources = "res/TileMaps";
  * var filePath = "res/TileMaps/orthogonal-test1.tmx";
  * var xmlStr = cc.loader.getRes(filePath);
  * var tmxMapInfo = new cc.TMXMapInfo(xmlStr, resources);
  */
  export class TMXMapInfo extends cc.SAXParser {
    /**
     * Properties of the map info.
     * @member {any[]} properties
     */
    properties: any[]

    /**
     * Map orientation.
     * @member {number} orientation
     */
    orientation: number
    
    /**
     * Parent element
     * @member {any} parentElement
     */
    parentElement: any
    
    /**
     * Parent GID
     * @member {number} parentGID
     */
    parentGID: number
    
    /**
     * Layer attributes.
     * @member {any} layerAttrs
     */
    layerAttrs: any
    
    /**
     * Is reading storing characters stream.
     * @member {boolean} storingCharacters
     */
    storingCharacters: boolean
    
    /**
     * TMX file name.
     * @member {string} tmxFileName
     */
    tmxFileName: string

    /**
     * Current string stored from characters stream.
     * @member {string} currentString
     */
    currentString: string

    /**
     * Creates a TMX Format with a tmx file or content string                           <br/>
     * Constructor of cc.TMXMapInfo
     * @param {string} tmxFile fileName or content string
     * @param {string} resourcePath  If tmxFile is a file name ,it is not required.If tmxFile is content string ,it is must required.
     */
    constructor(tmxFile: string, resourcePath: string)
    
    /**
     * Map width & height
     * @return {cc.Size}
     */
    getMapSize(): Size

    /**
     * Map width & height
     * @param {cc.Size} value
     */
    setMapSize(value: Size): void

    /**
     * Tiles width & height
     * @return {cc.Size}
     */
    getTileSize(): Size

    /**
     * Tiles width & height
     * @param {cc.Size} value
     */
    setTileSize(value: Size): void

    /**
     * Layers
     * @return {cc.TMXLayerInfo[]}
     */
    getLayers(): TMXLayerInfo[]

    /**
     * Layers
     * @param {cc.TMXLayerInfo} value
     */
    setLayers(value: TMXLayerInfo): void

    /**
     * tilesets
     * @return {cc.TMXTilesetInfo[]}
     */
    getTilesets(): TMXTilesetInfo[]

    /**
     * tilesets
     * @param {cc.TMXTilesetInfo} value
     */
    setTilesets(value: TMXTilesetInfo): void

    /**
     * ObjectGroups
     * @return {cc.TMXObjectGroup[]}
     */
    getObjectGroups(): TMXObjectGroup[]

    /**
     * ObjectGroups
     * @param {cc.TMXObjectGroup} value
     */
    setObjectGroups(value: TMXObjectGroup): void

    /**
     * Initializes a TMX format with a  tmx file
     * @param {string} tmxFile
     * @return {Element}
     */
    initWithTMXFile(tmxFile: string): Element

    /**
     * initializes a TMX format with an XML string and a TMX resource path
     * @param {string} tmxString
     * @param {string} resourcePath
     * @return {boolean}
     */
    initWithXML(tmxString: string, resourcePath: string): boolean

    /** Initalises parsing of an XML file, either a tmx (Map) file or tsx (Tileset) file
     * @param {string} tmxFile
     * @param {boolean} [isXmlString=false]
     * @return {Element}
     */
    parseXMLFile(tmxFile: string, isXmlString: boolean): Element

    /**
     * initializes parsing of an XML string, either a tmx (Map) string or tsx (Tileset) string
     * @param {string} xmlString
     * @return {boolean}
     */
    parseXMLString(xmlString: string): boolean

    /**
     * Gets the tile properties.
     * @return {any[]}
     */
    getTileProperties(): any[]

    /**
     * Set the tile properties.
     * @param {any} tileProperties
     */
    setTileProperties(tileProperties: any): void

    /**
     * Width of the map
     * @member {number} mapWidth
     */
    mapWidth: number             

    /**
     * Height of the map
     * @member {number} mapHeight
     */
    mapHeight: number             

    /**
     * Width of a tile
     * @member {number} tileWidth
     */
    tileWidth: number             

    /**
     * Height of a tile
     * @member {number} tileHeight
     */
    tileHeight: number             
  }
}/// <reference path="cocos2d-lib.d.ts" />


/**
 * The namespace for jsb exclusive APIs, all APIs in this namespace should never be used in Web engine.
 * So please check whether the running environment is native or not before any usage.
 * @namespace
 * @name jsb
 * @example
 *
 * if(cc.sys.isNative) {
 *     cc.log(cc.fileUtils.fullPathForFilename("test.js"));
 * }
 */
declare namespace jsb {
    // TODO: This is probably a bad idea to declare these as enums (since they clearly are not TS enums), but let's try it out and at least see if the values resolve properly
    export enum DiffType {
        ADDED,
        DELETED,
        MODIFIED
    }

    export enum DownloadState {
        UNSTARTED,
        DOWNLOADING,
        SUCCESSED
    }

    export enum EventCode {
        ERROR_NO_LOCAL_MANIFEST,
        ERROR_DOWNLOAD_MANIFEST,
        ERROR_PARSE_MANIFEST,
        NEW_VERSION_FOUND,
        ALREADY_UP_TO_DATE,
        UPDATE_PROGRESSION,
        ASSET_UPDATED,
        ERROR_UPDATING,
        UPDATE_FINISHED,
        UPDATE_FAILED,
        ERROR_DECOMPRESS,
    }

    export enum ErrorCode {
        CREATE_FILE,
        NETWORK,
        NO_NEW_VERSION,
        UNCOMPRESS
    }

    export enum State {
        UNCHECKED,
        PREDOWNLOAD_VERSION,
        DOWNLOADING_VERSION,
        VERSION_LOADED,
        PREDOWNLOAD_MANIFEST,
        DOWNLOADING_MANIFEST,
        MANIFEST_LOADED,
        NEED_UPDATE,
        UPDATING,
        UP_TO_DATE,
        FAIL_TO_UPDATE
    }



    /**
     * ATTENTION: USE jsb.fileUtils INSTEAD OF jsb.FileUtils.
     * jsb.fileUtils is the native file utils' singleton object,
     * please refer to Cocos2d-x's API to know how to use it.
     * Only available in JSB
     * @class
     * @name jsb.fileUtils
     * @extend cc.Class
     */
    //jsb.fileUtils = /** @lends jsb.fileUtils# */{
    export const fileUtils:FileUtils;

    export class FileUtils {

        /**
         * @function fullPathForFilename
         * @param {String} filename
         * @return {String}
         */
        public fullPathForFilename(filename:string):string;

        /**
         * @function getStringFromFile
         * @param {String} filename
         * @return {String}
         */
        public getStringFromFile(filename:string):string;

        /**
         * @function removeFile
         * @param {String} filepath
         * @return {boolean}
         */
        public removeFile(filepath:string):boolean;

        /**
         * @function isAbsolutePath
         * @param {String} path
         * @return {boolean}
         */
        public isAbsolutePath(path:string):boolean;

        /**
         * @function renameFile
         * @param {String} path or old full path
         * @param {String} oldname or new full path
         * @param {String} [name] new name
         * @return {boolean}
         */
        public renameFile(path:string, oldname:string, name?:string):boolean;

        /**
         * @function loadFilenameLookupDictionaryFromFile
         * @param {String} filename
         */
        public loadFilenameLookupDictionaryFromFile(filename:string):void;

        /**
         * @function isPopupNotify
         * @return {boolean}
         */
        public isPopupNotify():boolean;

        /**
         * @function getValueVectorFromFile
         * @param {String} arg0
         * @return {Array}
         * TODO: Figure out exactly what data type this is, not quite sure yet and this isn't in the C++ FileUtils API docs...
         */
        public getValueVectorFromFile(arg0:string):any[];

        /**
         * @function getSearchPaths
         * @return {Array}
         */
        public getSearchPaths():string[];

        /**
         * @function writeToFile
         * @param {{}} dict
         * @param {String} fullPath
         * @return {boolean}
         */
        public writeToFile(dict:{}, fullPath:string):boolean;

        /**
         * @function getValueMapFromFile
         * @param {String} filename
         * @return {{}}
         */
        public getValueMapFromFile(filename:string):{};

        /**
         * @function getFileSize
         * @param {String} filepath
         * @return {number}
         */
        public getFileSize(filepath:string):number;

        /**
         * @function removeDirectory
         * @param {String} dirPath
         * @return {boolean}
         */
        public removeDirectory(dirPath:string):boolean;

        /**
         * @function setSearchPaths
         * @param {Array} searchPaths
         */
        public setSearchPaths(searchPaths:string[]):void;

        /**
         * @function writeStringToFile
         * @param {String} dataStr
         * @param {String} fullPath
         * @return {boolean}
         */
        public writeStringToFile(dataStr:string, fullPath:string):boolean;

        /**
         * @function setSearchResolutionsOrder
         * @param {Array} searchResolutionsOrder
         */
        public setSearchResolutionsOrder(searchResolutionsOrder:string[]):void;

        /**
         * @function addSearchResolutionsOrder
         * @param {String} order
         * TODO: This does not match the C++ API, expected an optional bool argument here
         */
        public addSearchResolutionsOrder(order:string):void;

        /**
         * @function addSearchPath
         * @param {String} path
         * TODO: This does not match the C++ API, expected an optional bool argument here
         */
        public addSearchPath(path:string):void;

        /**
         * @function isFileExist
         * @param {String} filename
         * @return {boolean}
         */
        public isFileExist(filename:string):boolean;

        /**
         * @function purgeCachedEntries
         */
        public purgeCachedEntries():void;

        /**
         * @function fullPathFromRelativeFile
         * @param {String} filename
         * @param {String} relativeFile
         * @return {String}
         */
        public fullPathFromRelativeFile(filename:string, relativeFile:string):string;

        /**
         * @function isDirectoryExist
         * @param {String} dirPath
         * @return {boolean}
         */
        public isDirectoryExist(dirPath:string):boolean;

        /**
         * @function getSearchResolutionsOrder
         * @return {Array}
         */
        public getSearchResolutionsOrder():string[];

        /**
         * @function createDirectory
         * @param {String} dirPath
         * @return {boolean}
         */
        public createDirectory(dirPath:string):boolean;

        /**
         * @function createDirectories
         * @param {String} dirPath
         * @return {boolean}
         * TODO: This arguments list doesn't even make sense, I'd expect an array of strings. Look into this later on.
         */
        public createDirectories(dirPath:string):boolean;

        /**
         * @function getWritablePath
         * @return {String}
         */
        public getWritablePath():string;
    }

    /**
     * @class
     */
    //jsb.EventAssetsManager = cc.Class.extend(/** @lends jsb.EventAssetsManager# */{
    export class EventAssetsManager extends cc.Class {
        /**
         * @function EventAssetsManager
         * @constructor
         * @param {String} eventName
         * @param {AssetsManager} manager
         * @param {EventCode} code
         * @param {number} [percent]
         * @param {number} [percentByFile]
         * @param {String} [assetId]
         * @param {String} [message]
         * @param {number} [curle_code]
         * @param {number} [curlm_code]
         */
        public constructor(
            eventName:string,
            manager:AssetsManager,
            code:EventCode,
            percent?:number,
            percentByFile?:number,
            assetId?:string,
            message?:string,
            curle_code?:number,
            curlm_code?:number);

        /**
         * @function getAssetsManager
         * @return {AssetsManager}
         */
        public getAssetsManager():AssetsManager;

        /**
         * @function getAssetId
         * @return {String}
         */
        public getAssetId():string;

        /**
         * @function getCURLECode
         * @return {int}
         */
        public getCURLECode():number;

        /**
         * @function getMessage
         * @return {String}
         */
        public getMessage():string;

        /**
         * @function getCURLMCode
         * @return {int}
         */
        public getCURLMCode():number;

        /**
         * @function getPercentByFile
         * @return {number}
         */
        public getPercentByFile():number;

        /**
         * @function getEventCode
         * @return {EventCode}
         */
        public getEventCode():EventCode;

        /**
         * @function getPercent
         * @return {number}
         */
        public getPercent():number;

    }

    /**
     * @class
     */
    export class EventListenerAssetsManager extends cc.Class {
        /**
         * @function init
         * @param {AssetsManager} assetsmanager
         * @param {function} callback
         * @return {boolean}
         */
        public init(assetsmanager:AssetsManager, callback:(mgr:EventAssetsManager)=>void):boolean;

        /**
         * @function create
         * @param {AssetsManager} assetsmanager
         * @param {function} callback
         * @return {EventListenerAssetsManager}
         */
        public create(assetsmanager:AssetsManager, callback:(mgr:EventAssetsManager)=>void):EventListenerAssetsManager;
    }

    /**
     * @class
     * jsb.AssetsManager is the native AssetsManager for your game resources or scripts.
     * please refer to this document to know how to use it: http://www.cocos2d-x.org/docs/manual/framework/html5/v3/assets-manager/en
     * Only available in JSB
     */
    export class AssetsManager extends cc.Class {
        /**
         * @function getState
         * @return {State}
         */
        public getState():State;

        /**
         * @function checkUpdate
         */
        public checkUpdate():void;

        /**
         * @function getStoragePath
         * @return {String}
         */
        public getStoragePath():string;

        /**
         * @function update
         */
        public update():void;

        /**
         * @function getLocalManifest
         * @return {jsb.Manifest}
         */
        public getLocalManifest():Manifest;

        /**
         * @function getRemoteManifest
         * @return {jsb.Manifest}
         */
        public getRemoteManifest():Manifest;

        /**
         * @function downloadFailedAssets
         */
        public downloadFailedAssets():void;

        /**
         * @function create
         * @param {String} manifestUrl
         * @param {String} storagePath
         * @return {jsb.AssetsManager}
         */
        public create(manifestUrl:string, storagePath:string):AssetsManager;

        /**
         * @function AssetsManager
         * @constructor
         * @param {String} manifestUrl
         * @param {String} storagePath
         */
        public ctor(manifestUrl:string, storagePath:string):void;
        public ctor():void;
    }

    /**
     * @class
     */
    export class Manifest extends cc.Class {
        /**
         * @function getManifestFileUrl
         * @return {String}
         */
        public getManifestFileUrl():string;

        /**
         * @function isVersionLoaded
         * @return {boolean}
         */
        public isVersionLoaded():boolean;

        /**
         * @function isLoaded
         * @return {boolean}
         */
        public isLoaded():boolean;

        /**
         * @function getPackageUrl
         * @return {String}
         */
        public getPackageUrl():string;

        /**
         * @function getVersion
         * @return {String}
         */
        public getVersion():string;

        /**
         * @function getVersionFileUrl
         * @return {String}
         */
        public getVersionFileUrl():string;
    }

    // TODO: I don't know the best way to represent this, because I can't find a reference in the C++ docs. Just do this for now, fix it later on.
    /**
     * jsb.reflection is a bridge to let you invoke Java static functions.
     * please refer to this document to know how to use it: http://www.cocos2d-x.org/docs/manual/framework/html5/v3/reflection/en
     * Only available on iOS/Mac/Android platform
     * @class
     * @name jsb.reflection
     */
    export namespace reflection {
        /**
         * @function
         */
        export function callStaticMethod():void;
    }
}/// <reference path="cocos2d-lib.d.ts" />

declare namespace cc.math {
// +--------------------------------------------------------------------------------
// + File: cocos2d/kazmath/gl/*.js
// +--------------------------------------------------------------------------------
    // All files in kazmath/gl directory go here

// +--------------------------------------------------------------------------------
// + File: cocos2d/kazmath/simd_benchmark/*.js
// +--------------------------------------------------------------------------------
    // All files in kazmath/simd_benchmark directory go here

// +--------------------------------------------------------------------------------
// + File: cocos2d/kazmath/aabb.js
// +--------------------------------------------------------------------------------
// +--------------------------------------------------------------------------------
// + File: cocos2d/kazmath/mat3.js
// +--------------------------------------------------------------------------------
// +--------------------------------------------------------------------------------
// + File: cocos2d/kazmath/mat4.js
// +--------------------------------------------------------------------------------
// +--------------------------------------------------------------------------------
// + File: cocos2d/kazmath/mat4SIMD.js
// +--------------------------------------------------------------------------------
// +--------------------------------------------------------------------------------
// + File: cocos2d/kazmath/plane.js
// +--------------------------------------------------------------------------------
// +--------------------------------------------------------------------------------
// + File: cocos2d/kazmath/quaternion.js
// +--------------------------------------------------------------------------------
// +--------------------------------------------------------------------------------
// + File: cocos2d/kazmath/ray2.js
// +--------------------------------------------------------------------------------
// +--------------------------------------------------------------------------------
// + File: cocos2d/kazmath/SIMDPolyfill.js
// +--------------------------------------------------------------------------------
// +--------------------------------------------------------------------------------
// + File: cocos2d/kazmath/utility.js
// +--------------------------------------------------------------------------------

//cc.kmPIOver180 = 0.017453;       please use cc.RAD

//cc.kmPIUnder180 = 57.295779;     please use cc.DEG

    export const EPSILON:number;         //cc.kmEpsilon

    /**
     * Returns the square of s (e.g. s*s)
     * @param {Number} s
     */
    export function square(s:number):number;

    export function almostEqual(lhs:number, rhs:number):void;


// +--------------------------------------------------------------------------------
// + File: cocos2d/kazmath/vec2.js
// +--------------------------------------------------------------------------------
// +--------------------------------------------------------------------------------
// + File: cocos2d/kazmath/vec3.js
// +--------------------------------------------------------------------------------
// +--------------------------------------------------------------------------------
// + File: cocos2d/kazmath/vec3SIMD.js
// +--------------------------------------------------------------------------------
// +--------------------------------------------------------------------------------
// + File: cocos2d/kazmath/vec4.js
// +--------------------------------------------------------------------------------
}
/// <reference path="cocos2d-lib.d.ts" />


declare namespace cc {
    // Interface, consolidate all properties/methods common across cc2d label types here.
    // TODO: Fill this out completely. I don't have time to scour through the code and do this,
    //       so the interface will have to grow on an as-needed basis.
    interface Label extends Node {
        // Properties
        string:string;

        // Methods
        getString():string;
        setString(string:string):void;
    }

    // +--------------------------------------------------------------------------------
    // + File: cocos2d/core/base-nodes/CCLabelAtlas.js
    // +--------------------------------------------------------------------------------
    /**
     * using image file to print text label on the screen, might be a bit slower than cc.Label, similar to cc.LabelBMFont
     * @class
     * @extends cc.AtlasNode
     *
     * @property {String}   string  - Content string of label
     *
     * @param {String} strText
     * @param {String} charMapFile  charMapFile or fntFile
     * @param {Number} [itemWidth=0]
     * @param {Number} [itemHeight=0]
     * @param {Number} [startCharMap=""]
     * @example
     * //creates the cc.LabelAtlas with a string, a char map file(the atlas), the width and height of each element and the starting char of the atlas
     * var myLabel = new cc.LabelAtlas('Text to display', 'CharMapfile.png', 12, 20, ' ')
     *
     * //creates the cc.LabelAtlas with a string, a fnt file
     * var myLabel = new cc.LabelAtlas('Text to display', 'CharMapFile.plist‘);
     */
    export class LabelAtlas extends AtlasNode implements Label {

        //public opacity:number;
        //public color:Color;
        public string:string;

        /**
         * <p>
         *  Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. <br />
         *  Create a label atlas. <br />
         *  It accepts two groups of parameters: <br/>
         * a) string, fntFile <br/>
         * b) label, textureFilename, width, height, startChar <br/>
         * </p>
         * @param {String} strText
         * @param {String} charMapFile  charMapFile or fntFile
         * @param {Number} [itemWidth=0]
         * @param {Number} [itemHeight=0]
         * @param {Number} [startCharMap=""]
         */
        public constructor(strText:string,
                           charMapFile:string,
                           itemWidth?:number,
                           itemHeight?:number,
                           startCharMap?:number);
        //public ctor(strText?:string, charMapFile?:string, itemWidth?:number, itemHeight?:number, startCharMap?:number):void;


        /**
         * <p>
         *  initializes the cc.LabelAtlas with a string, a char map file(the atlas), <br/>
         *  the width and height of each element and the starting char of the atlas <br/>
         *  It accepts two groups of parameters: <br/>
         * a) string, fntFile <br/>
         * b) label, textureFilename, width, height, startChar <br/>
         * </p>
         * @param {String} strText
         * @param {String|cc.Texture2D} charMapFile  charMapFile or fntFile or texture file
         * @param {Number} [itemWidth=0]
         * @param {Number} [itemHeight=0]
         * @param {Number} [startCharMap=""]
         * @return {Boolean} returns true on success
         */
        public initWithString(strText:string,
                              charMapFile:string|Texture2D,
                              itemWidth?:number,
                              itemHeight?:number,
                              startCharMap?:number):void;

        /**
         * Return  texture is loaded.
         * @returns {boolean}
         */
        public textureLoaded():boolean;

        /**
         * return the text of this label
         * @return {String}
         */
        public getString():string;

        /**
         * set the display string
         * @function
         * @param {String} label
         */
        public setString(label:string):void;
    }

    // +--------------------------------------------------------------------------------
    // + File: cocos2d/core/base-nodes/CCLabelBMFont.js
    // +--------------------------------------------------------------------------------
    /**
     * @constant
     * @type Number
     */
    export const LABEL_AUTOMATIC_WIDTH:number;

    /**
     * <p>cc.LabelBMFont is a subclass of cc.SpriteBatchNode.</p>
     *
     * <p>Features:<br/>
     * <ul><li>- Treats each character like a cc.Sprite. This means that each individual character can be:</li>
     * <li>- rotated</li>
     * <li>- scaled</li>
     * <li>- translated</li>
     * <li>- tinted</li>
     * <li>- change the opacity</li>
     * <li>- It can be used as part of a menu item.</li>
     * <li>- anchorPoint can be used to align the "label"</li>
     * <li>- Supports AngelCode text format</li></ul></p>
     *
     * <p>Limitations:<br/>
     * - All inner characters are using an anchorPoint of (0.5, 0.5) and it is not recommend to change it
     * because it might affect the rendering</p>
     *
     * <p>cc.LabelBMFont implements the protocol cc.LabelProtocol, like cc.Label and cc.LabelAtlas.<br/>
     * cc.LabelBMFont has the flexibility of cc.Label, the speed of cc.LabelAtlas and all the features of cc.Sprite.<br/>
     * If in doubt, use cc.LabelBMFont instead of cc.LabelAtlas / cc.Label.</p>
     *
     * <p>Supported editors:<br/>
     * http://glyphdesigner.71squared.com/ (Commercial, Mac OS X)<br/>
     * http://www.n4te.com/hiero/hiero.jnlp (Free, Java)<br/>
     * http://slick.cokeandcode.com/demos/hiero.jnlp (Free, Java)<br/>
     * http://www.angelcode.com/products/bmfont/ (Free, Windows only)</p>
     * @class
     * @extends cc.SpriteBatchNode
     *
     * @property {String}   string          - Content string of label
     * @property {Number}   textAlign       - Horizontal Alignment of label, cc.TEXT_ALIGNMENT_LEFT|cc.TEXT_ALIGNMENT_CENTER|cc.TEXT_ALIGNMENT_RIGHT
     * @property {Number}   boundingWidth   - Width of the bounding box of label, the real content width is limited by boundingWidth
     *
     * @param {String} str
     * @param {String} fntFile
     * @param {Number} [width=-1]
     * @param {Number} [alignment=cc.TEXT_ALIGNMENT_LEFT]
     * @param {cc.Point} [imageOffset=cc.p(0,0)]
     *
     * @example
     * // Example 01
     * var label1 = new cc.LabelBMFont("Test case", "test.fnt");
     *
     * // Example 02
     * var label2 = new cc.LabelBMFont("test case", "test.fnt", 200, cc.TEXT_ALIGNMENT_LEFT);
     *
     * // Example 03
     * var label3 = new cc.LabelBMFont("This is a \n test case", "test.fnt", 200, cc.TEXT_ALIGNMENT_LEFT, cc.p(0,0));
     */
    export class LabelBMFont extends SpriteBatchNode implements Label {
        public string:string;
        public boundingWidth:number;
        public textAlign:number;

        /**
         * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. <br />
         * creates a bitmap font atlas with an initial string and the FNT file.
         * @param {String} str
         * @param {String} fntFile
         * @param {Number} [width=-1]
         * @param {Number} [alignment=cc.TEXT_ALIGNMENT_LEFT]
         * @param {cc.Point} [imageOffset=cc.p(0,0)]
         */
        //public ctor(fileImage?:string|Texture2D, capacity?:number);
        public constructor(str:string, fntFile:string, width?:number, alignment?:number, imageOffset?:Point);
        //public ctor(str?:string, fntFile?:string, width?:number, alignment?:number, imageOffset?:Point):void;

        /**
         * init a bitmap font atlas with an initial string and the FNT file
         * @param {String} str
         * @param {String} fntFile
         * @param {Number} [width=-1]
         * @param {Number} [alignment=cc.TEXT_ALIGNMENT_LEFT]
         * @param {cc.Point} [imageOffset=cc.p(0,0)]
         * @return {Boolean}
         */
        public initWithString(str:string, fntFile:string, width?:number, alignment?:number, imageOffset?:Point):void;

        /**
         * return  texture is loaded
         * @returns {boolean}
         */
        public textureLoaded():boolean;

        /**
         * updates the font chars based on the string to render
         */
        public createFontChars():void;

        /**
         * Update String. <br />
         * Only update this label display string.
         * @param {Boolean} fromUpdate
         */
        public updateString(fromUpdate:boolean):void;

        /**
         * Gets the text of this label
         * @return {String}
         */
        public getString():string;

        /**
         * Set the text
         * @param {String} newString
         * @param {Boolean|null} needUpdateLabel
         */
        public setString(newString:string, needUpdateLabel?:boolean):void;

        /**
         * Update Label. <br />
         * Update this Label display string and more...
         */
        public updateLabel():void;

        /**
         * Set text alignment.
         * @param {Number} alignment
         */
        public setAlignment(alignment:number):void;

        /**
         * Set the bounding width. <br />
         * max with display width. The exceeding string will be wrapping.
         * @param {Number} width
         */
        public setBoundingWidth(width:number):void;

        /**
         * Set the param to change English word warp according to whether the space. <br />
         * default is false.
         * @param {Boolean}  breakWithoutSpace
         */
        public setLineBreakWithoutSpace(breakWithoutSpace:boolean):void;

        /**
         * set fnt file path. <br />
         * Change the fnt file path.
         * @param {String} fntFile
         */
        public setFntFile(fntFile:string):void;

        /**
         * Return the fnt file path.
         * @return {String}
         */
        public getFntFile():string;

    }

    export namespace fnt {
        /**
         * Parse Fnt string.
         * @param fntStr
         * @param url
         * @returns {{}}
         */
        // TODO: I'm not exactly sure what this returns, it might be a FontDefinition. Maybe I should just mark the return property as "any" and be done with this ...?
        export function parseFnt(fntStr:string, url:string):FontDefinition;

        /**
         * load the fnt
         * @param realUrl
         * @param url
         * @param res
         * @param cb
         */
        // TODO: I have zero clue what actual types are for these arguments
        export function load(realUrl:string, url:string, res:string, cb:()=>void):void;
    }
}


/// <reference path="cocos2d-lib.d.ts" />


declare type ccMenuItemCallback = (mi:cc.Node)=>void;

declare namespace cc {

    ////////////////////////////////////////////////////////////////////////////////
    // File: cocos2d/menus/CCMenu.js
    ////////////////////////////////////////////////////////////////////////////////
    /**
     * @constant
     * @type Number
     */
    export const MENU_STATE_WAITING:number;

    /**
     * @constant
     * @type Number
     */
    export const MENU_STATE_TRACKING_TOUCH:number;

    /**
     * @constant
     * @type Number
     */
    export const MENU_HANDLER_PRIORITY:number;

    /**
     * @constant
     * @type Number
     */
    export const DEFAULT_PADDING:number;

    /**
     * Features and Limitation:
     *  - You can add MenuItem objects in runtime using addChild:
     *  - But the only accepted children are MenuItem objects
     * @class
     * @extends cc.Layer
     * @param {...cc.MenuItem|null} menuItems}
     * @example
     * var layer = new cc.Menu(menuitem1, menuitem2, menuitem3);
     */
    export class Menu extends Layer {
        /**
         * Constructor of cc.Menu override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
         * @param {...cc.MenuItem|null} menuItems
         */
        public constructor(...menuItems:MenuItem[]);

        /**
         * initializes a cc.Menu with it's items
         * @param {Array} menuItems
         * @return {Boolean}
         */
        public initWithItems(...menuItems:MenuItem[]):boolean;
        public initWithArray(menuItems:MenuItem[]):boolean;

        /**
         * return whether or not the menu will receive events
         * @return {Boolean}
         */
        public isEnabled():boolean;

        /**
         * set whether or not the menu will receive events
         * @param {Boolean} enabled
         */
        public setEnabled(enabled:boolean):void;

        /**
         * add a child for  cc.Menu
         * @param {cc.Node} child
         * @param {Number|Null} [zOrder=] zOrder for the child
         * @param {Number|Null} [tag=] tag for the child
         */
        public addChild(child:MenuItem, zOrder?:number, tag?:number):void;

        /**
         * align items vertically with default padding
         */
        public alignItemsVertically():void;

        /**
         * align items vertically with specified padding
         * @param {Number} padding
         */
        public alignItemsVerticallyWithPadding(padding:number):void;

        /**
         * align items horizontally with default padding
         */
        public alignItemsHorizontally():void;

        /**
         * align items horizontally with specified padding
         * @param {Number} padding
         */
        public alignItemsHorizontallyWithPadding(padding:number):void;

        /**
         * align items in columns
         * @example
         * // Example
         * menu.alignItemsInColumns(3,2,3)// this will create 3 columns, with 3 items for first column, 2 items for second and 3 for third
         *
         * menu.alignItemsInColumns(3,3)//this creates 2 columns, each have 3 items
         */
        public alignItemsInColumns(...args:Number[]):void;

        /**
         * align menu items in rows
         * @param {Number} args Arguments
         * @example
         * // Example
         * menu.alignItemsInRows(5,3)//this will align items to 2 rows, first row with 5 items, second row with 3
         *
         * menu.alignItemsInRows(4,4,4,4)//this creates 4 rows each have 4 items
         */
        public alignItemsInRows(...args:Number[]):void;
    }

    ////////////////////////////////////////////////////////////////////////////////
    // File: cocos2d/menus/CCMenuItem.js
    ////////////////////////////////////////////////////////////////////////////////

    /**
     * Subclass cc.MenuItem (or any subclass) to create your custom cc.MenuItem objects.
     * @class
     * @extends cc.Node
     * @param {function|String} callback
     * @param  {cc.Node} target
     */
    export class MenuItem extends Node {
        public enabled:boolean;

        /**
         * Constructor of cc.MenuItem
         * @param {function|String} callback
         * @param {cc.Node} target
         */
        public constructor(callback:string|ccMenuItemCallback, target:Node);
        public ctor(callback?:string|ccMenuItemCallback, target?:Node);

        /**
         * return whether MenuItem is selected
         * @return {Boolean}
         */
        public isSelected():boolean;

        /**
         * return whether MenuItem is Enabled
         * @return {Boolean}
         */
        public isEnabled():boolean;

        /**
         * set enable value of MenuItem
         * @param {Boolean} enable
         */
        public setEnabled(enable:boolean):void;

        /**
         * initializes a cc.MenuItem with callback
         * @param {function|String} callback
         * @param {cc.Node} target
         * @return {Boolean}
         */
        public initWithCallback(callback:ccMenuItemCallback, target:Node):boolean;

        /**
         * return rect value of cc.MenuItem
         * @return {cc.Rect}
         */
        public rect():Rect;

        /**
         * set the cc.MenuItem selected same as setIsSelected(true)
         */
        public selected():void;

        /**
         * set the cc.MenuItem unselected same as setIsSelected(false)
         */
        public unselected():void;

        /**
         * set the callback to the menu item
         * @param {function|String} callback
         * @param {cc.Node} target
         */
        public setCallback(callback:ccMenuItemCallback, target:Node):void;

        /**
         * call the selector with target
         */
        public activate():void;
    }

    /**
     *  Any cc.Node that supports the cc.LabelProtocol protocol can be added.
     * Supported nodes:
     * - cc.BitmapFontAtlas
     * - cc.LabelAtlas
     * - cc.LabelTTF
     * @class
     * @extends cc.MenuItem
     * @param {cc.Node} label
     * @param {function|String} selector
     * @param {cc.Node} target
     * @example
     * var menuitemLabel = new cc.MenuItemLabel(label,selector,target);
     *
     * @property {String}   string          - Content string of label item
     * @property {cc.Node}  label           - Label of label item
     * @property {cc.Color} disabledColor   - Color of label when it's disabled
     */
    export class MenuItemLabel extends MenuItem {
        public string:string;
        public disabledColor:Color;
        public label:Node;

        /**
         * Constructor of cc.MenuItemLabel
         * @param {cc.Node} label
         * @param {function|String} callback
         * @param {cc.Node} target
         */
        public constructor(label:Node, callback?:string|ccMenuItemCallback, target?:Node);

        /**
         * initializes a cc.MenuItemLabel with a label
         * @param {cc.Node} label
         * @param {function|String} callback
         * @param {cc.Node} target
         * @return {Boolean}
         */
        public initWithLabel(label:Node, callback:string|ccMenuItemCallback, target:Node):boolean;

        /**
         * return the disable color for this cc.MenuItemLabel
         * @return {cc.Color}
         */
        public getDisabledColor():Color;

        /**
         * set the disable color for this cc.MenuItemLabel
         * @param {cc.Color} color
         */
        public setDisabledColor(color:Color):void;

        /**
         * return label of cc.MenuItemLabel
         * @return {cc.Node}
         */
        public getLabel():Node;

        /**
         * set a label for cc.MenuItemLabel
         * @param {cc.Node} label
         */
        public setLabel(label:Node):void;

        /**
         * set the string for  cc.MenuItemLabel
         * @param {String} label
         */
        public setString(label:string):void;

        /**
         * return the string of cc.MenuItemLabel
         * @returns {*|string|_p.string|ret.string|q.string|String}
         */
        public getString():string;
    }


    /**
     * Helper class that creates a MenuItemLabel class with a LabelAtlas
     * @class
     * @extends cc.MenuItemLabel
     * @param {String} value
     * @param {String} charMapFile
     * @param {Number} itemWidth
     * @param {Number} itemHeight
     * @param {String} startCharMap a single character
     * @param {function|String|Null} callback
     * @param {cc.Node|Null} target
     * @example
     * var menuItem = new cc.MenuItemAtlasFont(param1,param2...);
     */
    export class MenuItemAtlasFont extends MenuItemLabel {

        /**
         * the contructor of cc.MenuItemAtlasFont
         * @param {String} value
         * @param {String} charMapFile
         * @param {Number} itemWidth
         * @param {Number} itemHeight
         * @param {String} startCharMap a single character
         * @param {function|String|Null} callback
         * @param {cc.Node|Null} target
         */
        public constructor(value:string,
                           charMapFile:string,
                           itemWidth:number,
                           itemHeight:number,
                           startCharMap:string,
                           callback?:string|ccMenuItemCallback,
                           target?:Node);

        /**
         * initializes a cc.MenuItemAtlasFont with string
         * @param {String} value
         * @param {String} charMapFile
         * @param {Number} itemWidth
         * @param {Number} itemHeight
         * @param {String} startCharMap a single character
         * @param {function|String|Null} callback
         * @param {cc.Node|Null} target
         * @return {Boolean}
         */
        public initWithString(value:string,
                              charMapFile:string,
                              itemWidth:number,
                              itemHeight:number,
                              startCharMap:string,
                              callback?:string|ccMenuItemCallback,
                              target?:Node):boolean;
    }

    /**
     * Helper class that creates a CCMenuItemLabel class with a Label
     * @class
     * @extends cc.MenuItemLabel
     * @param {String} value text for the menu item
     * @param {function|String} callback
     * @param {cc.Node} target
     * @example
     * var menuItem = new cc.MenuItemFont(value, callback, target);
     *
     * @property {Number}   fontSize    - Font size of font item
     * @property {String}   fontName    - Font name of font item
     */
    export class MenuItemFont extends MenuItemLabel {
        public fontName:string;
        public fontSize:number;

        /**
         * Constructor of cc.MenuItemFont
         * @param {String} value text for the menu item
         * @param {function|String} callback
         * @param {cc.Node} target
         */
        public constructor(value:string, callback?:string|ccMenuItemCallback, target?:Node);

        /**
         * initializes cc.MenuItemFont with  string
         * @param {String} value text for the menu item
         * @param {function|String} callback
         * @param {cc.Node} target
         * @return {Boolean}
         */
        public initWithString(value:string, callback?:string|ccMenuItemCallback, target?:Node):boolean;

        /**
         * set the font size for cc.MenuItemFont
         * @param {Number} size
         */
        public setFontSize(size:number):void;

        /**
         *return the font size of cc.MenuItemFont
         * @return {Number}
         */
        public getFontSize():number;

        /**
         * set the font name for cc.MenuItemFont
         * @param {String} name
         */
        public setFontName(name:string):void;

        /**
         * return the font name for cc.MenuItemFont
         * @return {String}
         */
        public getFontName():string;
    }

    /**
     * CCMenuItemSprite accepts CCNode<CCRGBAProtocol> objects as items.
     * The images has 3 different states:
     *   - unselected image
     *   - selected image
     *   - disabled image
     * @class
     * @extends cc.MenuItem
     * @param {Image|Null} normalSprite normal state image
     * @param {Image|Null} selectedSprite selected state image
     * @param {Image|cc.Node|Null} three disabled state image OR target node
     * @param {String|function|cc.Node|Null} four callback function name in string or actual function, OR target Node
     * @param {String|function|Null} five callback function name in string or actual function
     *
     * @example
     * var item = new cc.MenuItemSprite(normalImage)//create a menu item from a sprite with no functionality
     * var item = new cc.MenuItemSprite(normalImage, selectedImage)//create a menu Item, nothing will happen when clicked
     * var item = new cc.MenuItemSprite(normalImage, SelectedImage, disabledImage)//same above, but with disabled state image
     * var item = new cc.MenuItemSprite(normalImage, SelectedImage, 'callback', targetNode)//create a menu item, when clicked runs targetNode.callback()
     * var item = new cc.MenuItemSprite(normalImage, SelectedImage, disabledImage, targetNode.callback, targetNode)
     * //same as above, but with disabled image, and passing in callback function
     *
     * @property {cc.Sprite}    normalImage     - Sprite in normal state
     * @property {cc.Sprite}    selectedImage     - Sprite in selected state
     * @property {cc.Sprite}    disabledImage     - Sprite in disabled state
     */
    export class MenuItemSprite extends MenuItem {
        public normalImage:Sprite;
        public selectedImage:Sprite;
        public disabledImage:Sprite;

        /**
         * Constructor of cc.MenuItemSprite
         * @param {Image|Null} normalSprite normal state image
         * @param {Image|Null} selectedSprite selected state image
         * @param {Image|cc.Node|Null} three disabled state image OR target node
         * @param {String|function|cc.Node|Null} four callback function name in string or actual function, OR target Node
         * @param {String|function|Null} five callback function name in string or actual function
         */
        public constructor(normalSprite:Sprite,
                           selectedSprite:Sprite,
                           three?:Node|ccMenuItemCallback,
                           four?:string|ccMenuItemCallback|Node,
                           five?:Node);

        /**
         * initializes cc.MenuItemSprite with a cc.Sprite
         * @param {cc.Node} normalSprite
         * @param {cc.Node} selectedSprite
         * @param {cc.Node} disabledSprite
         * @param {function|String} callback
         * @param {cc.Node} target
         * @return {Boolean}
         */
        public initWithNormalSprite(normalSprite:Sprite,
                                    selectedSprite:Sprite,
                                    disabledSprite:Sprite,
                                    callback:string|ccMenuItemCallback,
                                    target:Node):boolean;

        /**
         * return the normal status image(cc.Sprite)
         * @return {cc.Sprite}
         */
        public getNormalImage():Sprite;

        /**
         * set the normal status image(cc.Sprite)
         * @param {cc.Sprite} normalImage
         */
        public setNormalImage(normalImage:Sprite):void;

        /**
         * return the selected status image(cc.Sprite) of cc.MenuItemSprite
         * @return {cc.Sprite}
         */
        public getSelectedImage():Sprite;

        /**
         * set the selected status image(cc.Sprite)
         * @param {cc.Sprite} selectedImage
         */
        public setSelectedImage(selectedImage:Sprite):void;

        /**
         * return the disabled status of cc.MenuItemSprite
         * @return {cc.Sprite}
         */
        public getDisabledImage():Sprite;

        /**
         * set the disabled status image(cc.Sprite)
         * @param {cc.Sprite} disabledImage
         */
        public setDisabledImage(disabledImage:Sprite):void;
    }

    /**
     * cc.MenuItemImage accepts images as items.
     * The images has 3 different states:
     * - unselected image
     * - selected image
     * - disabled image
     * 
     * For best results try that all images are of the same size
     * @class
     * @extends cc.MenuItemSprite
     * @param {string|null} normalImage
     * @param {string|null} selectedImage
     * @param {string|null} disabledImage
     * @param {function|string|null} callback
     * @param {cc.Node|null} target
     * @example
     * var menuItem = new cc.MenuItemImage(normalImage, selectedImage, three, four, five);
     */
    export class MenuItemImage extends MenuItemSprite {
        /**
         * Constructor of cc.MenuItemImage
         * @param {string|null} normalImage
         * @param {string|null} selectedImage
         * @param {string|null} disabledImage
         * @param {function|string|null} callback
         * @param {cc.Node|null} target
         */
        public constructor(normalImage?:string,
                           selectedImage?:string,
                           disabledImage?:string,
                           callback?:string|ccMenuItemCallback,
                           target?:Node);

        /**
         * initializes a cc.MenuItemImage
         * @param {string|null} normalImage
         * @param {string|null} selectedImage
         * @param {string|null} disabledImage
         * @param {function|string|null} callback
         * @param {cc.Node|null} target
         * @returns {boolean}
         */
        public initWithNormalImage(normalImage?:string,
                                   selectedImage?:string,
                                   disabledImage?:string,
                                   callback?:string|ccMenuItemCallback,
                                   target?:Node):boolean;

        /**
         * sets the sprite frame for the normal image
         * @param {cc.SpriteFrame} frame
         */
        public setNormalSpriteFrame(frame:SpriteFrame):void;

        /**
         * sets the sprite frame for the selected image
         * @param {cc.SpriteFrame} frame
         */
        public setSelectedSpriteFrame(frame:SpriteFrame):void;

        /**
         * sets the sprite frame for the disabled image
         * @param {cc.SpriteFrame} frame
         */
        public setDisabledSpriteFrame(frame:SpriteFrame):void;

    }

    /**
     * A simple container class that "toggles" it's inner items
     * The inner items can be any MenuItem
     * @class
     * @extends cc.MenuItem
     *
     * @property {Array}    subItems        - Sub items
     * @property {Number}   selectedIndex   - Index of selected sub item
     *
     *@example
     * // Example
     * //create a toggle item with 2 menu items (which you can then toggle between them later)
     * var toggler = new cc.MenuItemToggle( new cc.MenuItemFont("On"), new cc.MenuItemFont("Off"), this.callback, this)
     * //Note: the first param is the target, the second is the callback function, afterwards, you can pass in any number of menuitems
     *
     * //if you pass only 1 variable, then it must be a cc.MenuItem
     * var notYetToggler = new cc.MenuItemToggle(cc.MenuItemFont("On"));//it is useless right now, until you add more stuff to it
     * notYetToggler.addSubItem(new cc.MenuItemFont("Off"));
     * //this is useful for constructing a toggler without a callback function (you wish to control the behavior from somewhere else)
     */
    export class MenuItemToggle extends MenuItem {
        public selectedIndex:number;
        public subItems:MenuItem[];

        /**
         * Constructor of cc.MenuItemToggle
         */
        //public constructor(...args:MenuItem[]);
        public constructor();
        public ctor(...args:MenuItem[]);
        public ctor();

        /**
         * initializes a cc.MenuItemToggle with items
         * @param {cc.MenuItem} args[0...last-2] the rest in the array are cc.MenuItems
         * @param {function|String} args[last-1] the second item in the args array is the callback
         * @param {cc.Node} args[last] the first item in the args array is a target
         * @return {Boolean}
         */
        public initWithItems(...args:MenuItem[]):boolean;

        /**
         * return the index of selected
         * @return {Number}
         */
        public getSelectedIndex():number;

        /**
         * set the seleceted index for cc.MenuItemToggle
         * @param {Number} selectedIndex
         */
        public setSelectedIndex(selectedIndex:number):void;

        /**
         * similar to get children,return the sumItem array.
         * @return {Array}
         */
        public getSubItems():MenuItem[];

        /**
         * set the subitem for cc.MenuItemToggle
         * @param {cc.MenuItem} subItems
         */
        public setSubItems(...subItems:MenuItem[]):void;

        /**
         * add the subitem for cc.MenuItemToggle
         * @param {cc.MenuItem} item
         */
        public addSubItem(item:MenuItem):void;

        /**
         * returns the selected item   (deprecated in -x, please use getSelectedItem instead.)
         * @return {cc.MenuItem}
         */
        public selectedItem():MenuItem;

        /**
         * returns the selected item.
         * @return {cc.MenuItem}
         */
        public getSelectedItem():MenuItem;
    }
}
/// <reference path="cocos2d-lib.d.ts" />

declare namespace cc {

  ////////////////////////////////////////////////////////////////////////////////
  // File: cocos2d/render-texture/CCRenderTexture.js
  ////////////////////////////////////////////////////////////////////////////////
    
  /**
   * enum for jpg
   * @const {number} IMAGE_FORMAT_JPEG
   */
  export const IMAGE_FORMAT_JPEG: number

  /**
   * enum for png
   * @const {number} IMAGE_FORMAT_PNG
   */
  export const IMAGE_FORMAT_PNG: number

  /**
   * enum for raw
   * @const {number} IMAGE_FORMAT_RAWDATA
   */
  export const IMAGE_FORMAT_RAWDATA: number

  /**
   * @param {number} x
   * @return {number}
   * Constructor
   */
  export function NextPOT(x: number): number
  
  /**
   * cc.RenderTexture is a generic rendering target. To render things into it,<br/>
   * simply construct a render target, call begin on it, call visit on any cocos<br/>
   * scenes or objects to render them, and call end. For convenience, render texture<br/>
   * adds a sprite as it's display child with the results, so you can simply add<br/>
   * the render texture to your scene and treat it like any other CocosNode.<br/>
   * There are also functions for saving the render texture to disk in PNG or JPG format.
   * @class
   * @extends cc.Node
   *
  * @property {cc.Sprite}    sprite          - The sprite.
  * @property {cc.Sprite}    clearFlags      - Code for "auto" update.
  * @property {number}       clearDepthVal   - Clear depth value.
  * @property {boolean}      autoDraw        - Indicate auto draw mode activate or not.
  * @property {number}       clearStencilVal - Clear stencil value.
  * @property {cc.Color}     clearColorVal   - Clear color value, valid only when "autoDraw" is true.
  */
  export class RenderTexture extends Node {
    /**
     * The sprite
     * @member {cc.Sprite} sprite
     */
    public sprite: Sprite

    /**
     * Valid flags: GL_COLOR_BUFFER_BIT, GL_DEPTH_BUFFER_BIT, GL_STENCIL_BUFFER_BIT. They can be OR'ed. Valid when "autoDraw is YES.
     * @member {number} clearFlags
     */
    public clearFlags: number
    
    /**
     * Value for clearDepth. Valid only when autoDraw is true.
     * @member {number} clearDepthVal
     */
    public clearDepthVal: number
    
    /**
     * When enabled, it will render its children into the texture automatically. Disabled by default for compatiblity reasons. <br/>
     * Will be enabled in the future.
     * @member {boolean} autoDraw
     */
    public autoDraw: boolean
    
    /**
     * Value for clear Stencil. Valid only when autoDraw is true
     * @member {number} clearStencilVal
     */
    public clearStencilVal: number
    
    /**
     * Clear color value. Valid only when "autoDraw" is true.
     * @member {cc.Color} clearColorVal
     */
    public clearColorVal: Color
    
    /**
     * creates a RenderTexture object with width and height in Points and a pixel format, only RGB and RGBA formats are valid
     * Constructor of cc.RenderTexture for Canvas
     * @param {number} width
     * @param {number} height
     * @param {cc.IMAGE_FORMAT_JPEG|cc.IMAGE_FORMAT_PNG|cc.IMAGE_FORMAT_RAWDATA} [format=cc.Texture2D.PIXEL_FORMAT_RGBA8888]
     * @param {number} [depthStencilFormat=0]
     * @example
     * // Example
     * var rt = new cc.RenderTexture(width, height, format, depthStencilFormat)
     * @function
     */
    public constructor(width: number, height: number, format?: number, depthStencilFormat?: number)
    
    /**
     * Clear RenderTexture.
     * @function
     */
    public cleanup(): void
    
    /**
     * Used for grab part of screen to a texture.
     * @param {cc.Point} rtBegin
     * @param {cc.Rect} fullRect
     * @param {cc.Rect} fullViewport
     */
    public setVirtualViewport(rtBegin: Point, fullRect: Rect, fullViewport: Rect): void

    /**
     * Initializes the instance of cc.RenderTexture
     * @function
     * @param {number} width
     * @param {number} height
     * @param {cc.IMAGE_FORMAT_JPEG|cc.IMAGE_FORMAT_PNG|cc.IMAGE_FORMAT_RAWDATA} [format]
     * @param {number} [depthStencilFormat]
     * @return {boolean}
     */
    public initWithWidthAndHeight(width: number, height: number, format: number, depthStencilFormat: number): boolean

    /**
     * starts grabbing
     * @function
     */
    public begin(): void
    
    /**
     * starts rendering to the texture while clearing the texture first.<br/>
     * This is more efficient then calling -clear first and then -begin
     * @param {number} r red 0-255
     * @param {number} g green 0-255
     * @param {number} b blue 0-255
     * @param {number} a alpha 0-255 0 is transparent
     * @param {number} [depthValue=]
     * @param {number} [stencilValue=]
     */
    public beginWithClear(r: number, g: number, b: number, a: number, depthValue?: number, stencilValue?: number): void

    /**
     * ends grabbing
     * @function
     */
    public end(): void

    /**
     * clears the texture with a color
     * @param {number} r red 0-1
     * @param {number} g green 0-1
     * @param {number} b blue 0-1
     * @param {number} a alpha 0-1
     */
    public clear(r: number, g: number, b: number, a: number): void

    /**
     * clears the texture with rect.
     * @function
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     */
    public clearRect(x: number, y: number, width: number, height: number): void

    /**
     * clears the texture with a specified depth value
     * @function
     * @param {number} depthValue
     */
    public clearDepth(depthValue: number): void

    /**
     * clears the texture with a specified stencil value
     * @function
     * @param {number} stencilValue
     */
    public clearStencil(stencilValue: number): void

    /**
     * saves the texture into a file using JPEG format. The file will be saved in the Documents folder.
     * Returns YES if the operation is successful.
     * (doesn't support in HTML5)
     * @param {number} filePath
     * @param {number} format
     */
    public saveToFile(filePath: string, format: number): void

    /**
     * creates a new CCImage from with the texture's data. Caller is responsible for releasing it by calling delete.
     * @return {Image}
     */
    public newCCImage(flipImage: boolean): Image

    /**
     * Listen "come to background" message, and save render texture. It only has effect on Android.
     * @param {cc.Class} obj
     */
    public listenToBackground(obj: Class): void

    /**
     * Listen "come to foreground" message and restore the frame buffer object. It only has effect on Android.
     * @param {cc.Class} obj
     */
    public listenToForeground(obj: Class): void
  }
}/// <reference path="cocos2d-lib.d.ts" />


declare namespace cc {
    // +--------------------------------------------------------------------------------
    // + File: cocos2d/core/base-nodes/CCDrawNode.js
    // +--------------------------------------------------------------------------------
    /**
     * Code copied & pasted from SpacePatrol game https://github.com/slembcke/SpacePatrol
     *
     * Renamed and added some changes for cocos2d
     *
     */
    export function v2fzero():Point;

    export function v2f(x:number, y:number):Point;

    export function v2fadd(v0:number, v1:number):Point;

    export function v2fsub(v0:number, v1:number):Point;

    export function v2fmult(v:number, s:number):Point;

    export function v2fperp(p0:number):Point;

    export function v2fneg(p0:number):Point;

    export function v2fdot(p0:number, p1:number):Point;

    export function v2fforangle(a:number):Point;

    export function v2fnormalize(p:Point):Point;

    //export function __v2f(v:Point):Point;
    //
    //export function __t(v:Point):Point;

    /**
     * CCDrawNode                                                
     * Node that draws dots, segments and polygons.                        
     * Faster than the "drawing primitives" since they it draws everything in one single batch.
     * @class
     * @name cc.DrawNode
     * @extends cc.Node
     */
    export class DrawNode extends Node {
        public static TYPE_DOT:number;
        public static TYPE_SEGMENT:number;
        public static TYPE_POLY:number;

        /**
         * Gets the blend func
         * @returns {Object}
         */
        public getBlendFunc():BlendFunc;

        /**
         * Set the blend func
         * @param blendFunc
         * @param dst
         */
        public setBlendFunc(blendFunc:BlendFunc|number, dst?:number):void;

        /**
         * line width setter
         * @param {Number} width
         */
        public setLineWidth(width:number):void;

        /**
         * line width getter
         * @returns {Number}
         */
        public getLineWidth():number;

        /**
         * draw color setter
         * @param {cc.Color} color
         */
        public setDrawColor(color:Color):void;

        /**
         * draw color getter
         * @returns {cc.Color}
         */
        public getDrawColor():Color;

        /**
         * draws a rectangle given the origin and destination point measured in points.
         * @param {cc.Point} origin
         * @param {cc.Point} destination
         * @param {cc.Color} fillColor
         * @param {Number} lineWidth
         * @param {cc.Color} lineColor
         */
        public drawRect(origin:Point, destination:Point, fillColor?:Color, lineWidth?:number, lineColor?:Color):void;

        /**
         * draws a circle given the center, radius and number of segments.
         * @override
         * @param {cc.Point} center center of circle
         * @param {Number} radius
         * @param {Number} angle angle in radians
         * @param {Number} segments
         * @param {Boolean} drawLineToCenter
         * @param {Number} lineWidth
         * @param {cc.Color} color
         */
        public drawCircle(center:Point, radius:number, angle:number, segments:number,
                          drawLineToCenter?:boolean, lineWidth?:number, color?:Color):void;

        /**
         * draws a quad bezier path
         * @override
         * @param {cc.Point} origin
         * @param {cc.Point} control
         * @param {cc.Point} destination
         * @param {Number} segments
         * @param {Number} lineWidth
         * @param {cc.Color} color
         */
        public drawQuadBezier(origin:Point, control:Point, destination:Point, segments:number,
                              lineWidth?:number, color?:Color):void;

        /**
         * draws a cubic bezier path
         * @override
         * @param {cc.Point} origin
         * @param {cc.Point} control1
         * @param {cc.Point} control2
         * @param {cc.Point} destination
         * @param {Number} segments
         * @param {Number} lineWidth
         * @param {cc.Color} color
         */
        public drawCubicBezier(origin:Point, control1:Point, control2:Point, destination:Point,
                               segments:number, lineWidth?:number, color?:Color):void;

        /**
         * draw a CatmullRom curve
         * @override
         * @param {Array} points
         * @param {Number} segments
         * @param {Number} lineWidth
         * @param {cc.Color} color
         */
        public drawCatmullRom(points:Point[], segments:number, lineWidth?:number, color?:Color):void;

        /**
         * draw a cardinal spline path
         * @override
         * @param {Array} config
         * @param {Number} tension
         * @param {Number} segments
         * @param {Number} lineWidth
         * @param {cc.Color} color
         */
        public drawCardinalSpline(config:Point[], tension:number, segments:number,
                                  lineWidth?:number, color?:Color):void;

        /**
         * draw a dot at a position, with a given radius and color
         * @param {cc.Point} pos
         * @param {Number} radius
         * @param {cc.Color} color
         */
        public drawDot(pos:Point, radius:number, color?:Color):void;

        /**
         * draws an array of points.
         * @override
         * @param {Array} points point of array
         * @param {Number} radius
         * @param {cc.Color} color
         */
        public drawDots(points:Point[], radius:number, color?:Color):void;

        /**
         * draw a segment with a radius and color
         * @param {cc.Point} from
         * @param {cc.Point} to
         * @param {Number} lineWidth
         * @param {cc.Color} color
         */
        public drawSegment(from:Point, to:Point, lineWidth?:number, color?:Color):void;

        /**
         * draw a polygon with a fill color and line color, copying the vertex list
         * @param {Array} verts
         * @param {cc.Color} fillColor
         * @param {Number} lineWidth
         * @param {cc.Color} color
         */
        public drawPoly(verts:Point[], fillColor?:Color, lineWidth?:number, color?:Color):void;

        /**
         * Clear the geometry in the node's buffer.
         */
        public clear():void;
    }
}
/// <reference path="core/actions.d.ts" />
/// <reference path="core/audio.d.ts" />
/// <reference path="core/base-nodes.d.ts" />
/// <reference path="core/boot.d.ts" />
/// <reference path="core/cocoa.d.ts" />
/// <reference path="core/core.d.ts" />
/// <reference path="core/event-manager.d.ts" />
/// <reference path="core/labelttf.d.ts" />
/// <reference path="core/layers.d.ts" />
/// <reference path="core/platform.d.ts" />
/// <reference path="core/scenes.d.ts" />
/// <reference path="core/sprites.d.ts" />
/// <reference path="core/support.d.ts" />
/// <reference path="core/textures.d.ts" />

/// <reference path="extensions/ccpool/pool.d.ts" />
/// <reference path="extensions/cocosstudio/load.d.ts" />
/// <reference path="extensions/gui/scrollview.d.ts" />

/// <reference path="tilemap/layer.d.ts" />
/// <reference path="tilemap/object-group.d.ts" />
/// <reference path="tilemap/tiled-map.d.ts" />
/// <reference path="tilemap/xml-parser.d.ts" />

/// <reference path="clipping-nodes.d.ts" />
/// <reference path="jsb.d.ts" />
/// <reference path="kazmath.d.ts" />
/// <reference path="labels.d.ts" />
/// <reference path="menus.d.ts" />
/// <reference path="render-texture.d.ts" />
/// <reference path="shape-nodes.d.ts" />
