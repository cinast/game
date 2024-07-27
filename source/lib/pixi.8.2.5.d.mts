declare const AbstractBitmapFont_base: any;
export class AbstractBitmapFont extends AbstractBitmapFont_base {
    [x: string]: any;
    constructor(...args: any[]);
    /** The map of characters by character code. */
    chars: any;
    /**
     * The line-height of the font face in pixels.
     * @type {number}
     */
    lineHeight: number;
    /**
     * The name of the font face
     * @type {string}
     */
    fontFamily: string;
    /** The metrics of the font face. */
    fontMetrics: {
        fontSize: number;
        ascent: number;
        descent: number;
    };
    /**
     * The offset of the font face from the baseline.
     * @type {number}
     */
    baseLineOffset: number;
    /** The range and type of the distance field for this font. */
    distanceField: {
        type: string;
        range: number;
    };
    /** The map of base page textures (i.e., sheets of glyphs). */
    pages: any[];
    /** should the fill for this font be applied as a tint to the text. */
    applyFillAsTint: boolean;
    /** The size of the font face in pixels. */
    baseMeasurementFontSize: number;
    baseRenderedFontSize: number;
    /**
     * The name of the font face.
     * @deprecated since 8.0.0 Use `fontFamily` instead.
     */
    get font(): string;
    /**
     * The map of base page textures (i.e., sheets of glyphs).
     * @deprecated since 8.0.0 Use `pages` instead.
     */
    get pageTextures(): any[];
    /**
     * The size of the font face in pixels.
     * @deprecated since 8.0.0 Use `fontMetrics.fontSize` instead.
     */
    get size(): number;
    /**
     * The kind of distance field for this font or "none".
     * @deprecated since 8.0.0 Use `distanceField.type` instead.
     */
    get distanceFieldRange(): number;
    /**
     * The range of the distance field in pixels.
     * @deprecated since 8.0.0 Use `distanceField.range` instead.
     */
    get distanceFieldType(): string;
    destroy(destroyTextures?: boolean): void;
}
export let AbstractRenderer: {
    new (config: any): {
        [x: string]: any;
        runners: any;
        renderPipes: any;
        _initOptions: {};
        _systemsHash: any;
        type: any;
        name: any;
        config: any;
        /**
         * Initialize the renderer.
         * @param options - The options to use to create the renderer.
         */
        init(options?: {}): Promise<void>;
        _roundPixels: number;
        render(args: any, deprecated: any): void;
        _lastObjectRendered: any;
        /**
         * Resizes the WebGL view to the specified width and height.
         * @param desiredScreenWidth - The desired width of the screen.
         * @param desiredScreenHeight - The desired height of the screen.
         * @param resolution - The resolution / device pixel ratio of the renderer.
         */
        resize(desiredScreenWidth: any, desiredScreenHeight: any, resolution: any): void;
        clear(options?: {}): void;
        /** The resolution / device pixel ratio of the renderer. */
        resolution: any;
        /**
         * Same as view.width, actual number of pixels in the canvas by horizontal.
         * @member {number}
         * @readonly
         * @default 800
         */
        readonly width: any;
        /**
         * Same as view.height, actual number of pixels in the canvas by vertical.
         * @default 600
         */
        readonly height: any;
        /**
         * The canvas element that everything is drawn to.
         * @type {environment.ICanvas}
         */
        readonly canvas: environment.ICanvas;
        /**
         * the last object rendered by the renderer. Useful for other plugins like interaction managers
         * @readonly
         */
        readonly lastObjectRendered: any;
        /**
         * Flag if we are rendering to the screen vs renderTexture
         * @readonly
         * @default true
         */
        readonly renderingToScreen: any;
        /**
         * Measurements of the screen. (0, 0, screenWidth, screenHeight).
         *
         * Its safe to use as filterArea or hitArea for the whole stage.
         */
        readonly screen: any;
        /**
         * Create a bunch of runners based of a collection of ids
         * @param runnerIds - the runner ids to add
         */
        _addRunners(...runnerIds: any[]): void;
        _addSystems(systems: any): void;
        /**
         * Add a new system to the renderer.
         * @param ClassRef - Class reference
         * @param name - Property name for system, if not specified
         *        will use a static `name` property on the class itself. This
         *        name will be assigned as s property on the Renderer so make
         *        sure it doesn't collide with properties on Renderer.
         * @returns Return instance of renderer
         */
        _addSystem(ClassRef: any, name: any): any;
        _addPipes(pipes: any, pipeAdaptors: any): void;
        destroy(options?: boolean): void;
        /**
         * Generate a texture from a container.
         * @param options - options or container target to use when generating the texture
         * @returns a texture
         */
        generateTexture(options: any): any;
        /**
         * Whether the renderer will round coordinates to whole pixels when rendering.
         * Can be overridden on a per scene item basis.
         */
        readonly roundPixels: boolean;
        /**
         * Overridable function by `pixi.js/unsafe-eval` to silence
         * throwing an error if platform doesn't support unsafe-evals.
         * @private
         * @ignore
         */
        _unsafeEvalCheck(): void;
    };
    [x: string]: any;
    /** The default options for the renderer. */
    defaultOptions: {
        /**
         * Default resolution / device pixel ratio of the renderer.
         * @default 1
         */
        resolution: number;
        /**
         * Should the `failIfMajorPerformanceCaveat` flag be enabled as a context option used in the `isWebGLSupported`
         * function. If set to true, a WebGL renderer can fail to be created if the browser thinks there could be
         * performance issues when using WebGL.
         *
         * In PixiJS v6 this has changed from true to false by default, to allow WebGL to work in as many
         * scenarios as possible. However, some users may have a poor experience, for example, if a user has a gpu or
         * driver version blacklisted by the
         * browser.
         *
         * If your application requires high performance rendering, you may wish to set this to false.
         * We recommend one of two options if you decide to set this flag to false:
         *
         * 1: Use the Canvas renderer as a fallback in case high performance WebGL is
         *    not supported.
         *
         * 2: Call `isWebGLSupported` (which if found in the utils package) in your code before attempting to create a
         *    PixiJS renderer, and show an error message to the user if the function returns false, explaining that their
         *    device & browser combination does not support high performance WebGL.
         *    This is a much better strategy than trying to create a PixiJS renderer and finding it then fails.
         * @default false
         */
        failIfMajorPerformanceCaveat: boolean;
        /**
         * Should round pixels be forced when rendering?
         * @default false
         */
        roundPixels: boolean;
    };
};
export class AbstractText extends Container {
    constructor(options: any, styleClass: any);
    batched: boolean;
    _resolution: any;
    _autoResolution: boolean;
    _didTextUpdate: boolean;
    _roundPixels: number;
    _bounds: Bounds;
    _boundsDirty: boolean;
    _styleClass: any;
    /** Set the copy for the text object. To split a line you can use '\n'. */
    set text(value: any);
    get text(): any;
    /**
     * Set the style of the text.
     *
     * Set up an event listener to listen for changes on the style object and mark the text as dirty.
     *
     * If setting the `style` can also be partial {@link AnyTextStyleOptions}.
     * @type {
     * text.TextStyle |
     * Partial<text.TextStyle> |
     * text.TextStyleOptions |
     * text.HTMLTextStyle |
     * Partial<text.HTMLTextStyle> |
     * text.HTMLTextStyleOptions
     * }
     */
    set style(style: any);
    get style(): any;
    /**
     * The resolution / device pixel ratio of the canvas.
     * @default 1
     */
    set resolution(value: any);
    get resolution(): any;
    allowChildren: boolean;
    _anchor: ObservablePoint;
    set anchor(value: ObservablePoint);
    /**
     * The anchor sets the origin point of the text.
     * The default is `(0,0)`, this means the text's origin is the top left.
     *
     * Setting the anchor to `(0.5,0.5)` means the text's origin is centered.
     *
     * Setting the anchor to `(1,1)` would mean the text's origin point will be the bottom right corner.
     *
     * If you pass only single parameter, it will set both x and y to the same value as shown in the example below.
     * @example
     * import { Text } from 'pixi.js';
     *
     * const text = new Text('hello world');
     * text.anchor.set(0.5); // This will set the origin to center. (0.5) is same as (0.5, 0.5).
     */
    get anchor(): ObservablePoint;
    set roundPixels(value: boolean);
    /**
     *  Whether or not to round the x/y position of the text.
     * @type {boolean}
     */
    get roundPixels(): boolean;
    _text: any;
    _style: any;
    /**
     * The local bounds of the Text.
     * @type {rendering.Bounds}
     */
    get bounds(): rendering.Bounds;
    /**
     * Adds the bounds of this text to the bounds object.
     * @param bounds - The output bounds object.
     */
    addBounds(bounds: any): void;
    /**
     * Checks if the text contains the given point.
     * @param point - The point to check
     */
    containsPoint(point: any): boolean;
    onViewUpdate(): void;
    _getKey(): string;
    owner: any;
}
export class AccessibilitySystem {
    /**
     * @param {WebGLRenderer|WebGPURenderer} renderer - A reference to the current renderer
     */
    constructor(renderer: WebGLRenderer | WebGPURenderer, _mobileInfo?: any);
    _mobileInfo: any;
    /** Setting this to true will visually show the divs. */
    debug: boolean;
    /** Internal variable, see isActive getter. */
    _isActive: boolean;
    /** Internal variable, see isMobileAccessibility getter. */
    _isMobileAccessibility: boolean;
    /** A simple pool for storing divs. */
    _pool: any[];
    /** This is a tick used to check if an object is no longer being rendered. */
    _renderId: number;
    /** The array of currently active accessible items. */
    _children: any[];
    /** Count to throttle div updates on android devices. */
    _androidUpdateCount: number;
    /**  The frequency to update the div elements. */
    _androidUpdateFrequency: number;
    _hookDiv: HTMLButtonElement;
    _div: HTMLDivElement;
    _renderer: WebGLRenderer | WebGPURenderer;
    /**
     * Is called when a key is pressed
     * @private
     * @param {KeyboardEvent} e - The keydown event.
     */
    private _onKeyDown;
    /**
     * Is called when the mouse moves across the renderer element
     * @private
     * @param {MouseEvent} e - The mouse event.
     */
    private _onMouseMove;
    /**
     * Value of `true` if accessibility is currently active and accessibility layers are showing.
     * @member {boolean}
     * @readonly
     */
    readonly get isActive(): boolean;
    /**
     * Value of `true` if accessibility is enabled for touch devices.
     * @member {boolean}
     * @readonly
     */
    readonly get isMobileAccessibility(): boolean;
    get hookDiv(): HTMLButtonElement;
    /**
     * Creates the touch hooks.
     * @private
     */
    private _createTouchHook;
    /**
     * Destroys the touch hooks.
     * @private
     */
    private _destroyTouchHook;
    /**
     * Activating will cause the Accessibility layer to be shown.
     * This is called when a user presses the tab key.
     * @private
     */
    private _activate;
    /**
     * Deactivating will cause the Accessibility layer to be hidden.
     * This is called when a user moves the mouse.
     * @private
     */
    private _deactivate;
    /**
     * This recursive function will run through the scene graph and add any new accessible objects to the DOM layer.
     * @private
     * @param {Container} container - The Container to check.
     */
    private _updateAccessibleObjects;
    /**
     * Runner init called, view is available at this point.
     * @ignore
     */
    init(options: any): void;
    /**
     * Runner postrender was called, ensure that all divs are mapped correctly to their Containers.
     * Only fires while active.
     * @ignore
     */
    postrender(): void;
    /**
     * private function that will visually add the information to the
     * accessibility div
     * @param {HTMLElement} div -
     */
    _updateDebugHTML(div: HTMLElement): void;
    /**
     * Adjust the hit area based on the bounds of a display object
     * @param {Rectangle} hitArea - Bounds of the child
     */
    _capHitArea(hitArea: Rectangle): void;
    /**
     * Adds a Container to the accessibility manager
     * @private
     * @param {Container} container - The child to make accessible.
     */
    private _addChild;
    /**
     * Dispatch events with the EventSystem.
     * @param e
     * @param type
     * @private
     */
    private _dispatchEvent;
    /**
     * Maps the div button press to pixi's EventSystem (click)
     * @private
     * @param {MouseEvent} e - The click event.
     */
    private _onClick;
    /**
     * Maps the div focus events to pixi's EventSystem (mouseover)
     * @private
     * @param {FocusEvent} e - The focus event.
     */
    private _onFocus;
    /**
     * Maps the div focus events to pixi's EventSystem (mouseout)
     * @private
     * @param {FocusEvent} e - The focusout event.
     */
    private _onFocusOut;
    /** Destroys the accessibility manager */
    destroy(): void;
}
export namespace AccessibilitySystem {
    namespace extension {
        let type: any[];
        let name: string;
    }
}
export let AlphaFilter: {
    new (options: any): {
        [x: string]: any;
        /**
         * Coefficient for alpha multiplication
         * @default 1
         */
        alpha: any;
        /** If enabled is true the filter is applied, if false it will not. */
        enabled: boolean;
        /**
         * The gpu state the filter requires to render.
         * @internal
         * @ignore
         */
        _state: {
            data: number;
            /**
             * The blend mode to be applied when this state is set. Apply a value of `normal` to reset the blend mode.
             * Setting this mode to anything other than NO_BLEND will automatically switch blending on.
             * @default 'normal'
             */
            blendMode: any;
            /**
             * The polygon offset. Setting this property to anything other than 0 will automatically enable polygon offset fill.
             * @default 0
             */
            polygonOffset: any;
            /**
             * Activates blending of the computed fragment color values.
             * @default true
             */
            blend: boolean;
            /**
             * Enables or disables writing to the depth buffer.
             * @default true
             */
            depthMask: boolean;
            /**
             * Activates adding an offset to depth values of polygon's fragments
             * @default false
             */
            offsets: boolean;
            /** The culling settings for this state none - No culling back - Back face culling front - Front face culling */
            cullMode: "none" | "front" | "back";
            /**
             * Activates culling of polygons.
             * @default false
             */
            culling: boolean;
            /**
             * Specifies whether or not front or back-facing polygons can be culled.
             * @default false
             */
            clockwiseFrontFace: boolean;
            /**
             * Activates depth comparisons and updates to the depth buffer.
             * @default false
             */
            depthTest: boolean;
            _blendMode: any;
            _blendModeId: any;
            _polygonOffset: any;
            toString(): string;
        };
        /**
         * Get the blend mode of the filter.
         * @default "normal"
         */
        blendMode: any;
        padding: any;
        antialias: any;
        resolution: any;
        blendRequired: any;
        /**
         * Applies the filter
         * @param filterManager - The renderer to retrieve the filter from
         * @param input - The input render target.
         * @param output - The target to output to.
         * @param clearMode - Should the output be cleared before rendering to it
         */
        apply(filterManager: any, input: any, output: any, clearMode: any): void;
        /**
         * A record of the uniform groups and resources used by the shader.
         * This is used by WebGL renderer to sync uniform data.
         * @internal
         * @ignore
         */
        _uniformBindMap: any;
        _ownedBindGroups: any[];
        gpuProgram: any;
        glProgram: any;
        compatibleRenderers: any;
        groups: any;
        resources: {};
        /**
         * Sometimes a resource group will be provided later (for example global uniforms)
         * In such cases, this method can be used to let the shader know about the group.
         * @param name - the name of the resource group
         * @param groupIndex - the index of the group (should match the webGPU shader group location)
         * @param bindIndex - the index of the bind point (should match the webGPU shader bind point)
         */
        addResource(name: any, groupIndex: any, bindIndex: any): void;
        _buildResourceAccessor(groups: any, nameHash: any): {};
        /**
         * Use to destroy the shader when its not longer needed.
         * It will destroy the resources and remove listeners.
         * @param destroyPrograms - if the programs should be destroyed as well.
         * Make sure its not being used by other shaders!
         */
        destroy(destroyPrograms?: boolean): void;
    };
    /** Default filter options */
    defaultOptions: {
        /** Amount of alpha from 0 to 1, where 0 is transparent */
        alpha: number;
    };
    /**
     * A short hand function to create a filter based of a vertex and fragment shader src.
     * @param options
     * @returns A shiny new PixiJS filter!
     */
    from(options: any): {
        [x: string]: any;
        /** If enabled is true the filter is applied, if false it will not. */
        enabled: boolean;
        /**
         * The gpu state the filter requires to render.
         * @internal
         * @ignore
         */
        _state: {
            data: number;
            /**
             * The blend mode to be applied when this state is set. Apply a value of `normal` to reset the blend mode.
             * Setting this mode to anything other than NO_BLEND will automatically switch blending on.
             * @default 'normal'
             */
            blendMode: any;
            /**
             * The polygon offset. Setting this property to anything other than 0 will automatically enable polygon offset fill.
             * @default 0
             */
            polygonOffset: any;
            /**
             * Activates blending of the computed fragment color values.
             * @default true
             */
            blend: boolean;
            /**
             * Enables or disables writing to the depth buffer.
             * @default true
             */
            depthMask: boolean;
            /**
             * Activates adding an offset to depth values of polygon's fragments
             * @default false
             */
            offsets: boolean;
            /** The culling settings for this state none - No culling back - Back face culling front - Front face culling */
            cullMode: "none" | "front" | "back";
            /**
             * Activates culling of polygons.
             * @default false
             */
            culling: boolean;
            /**
             * Specifies whether or not front or back-facing polygons can be culled.
             * @default false
             */
            clockwiseFrontFace: boolean;
            /**
             * Activates depth comparisons and updates to the depth buffer.
             * @default false
             */
            depthTest: boolean;
            _blendMode: any;
            _blendModeId: any;
            _polygonOffset: any;
            toString(): string;
        };
        /**
         * Get the blend mode of the filter.
         * @default "normal"
         */
        blendMode: any;
        padding: any;
        antialias: any;
        resolution: any;
        blendRequired: any;
        /**
         * Applies the filter
         * @param filterManager - The renderer to retrieve the filter from
         * @param input - The input render target.
         * @param output - The target to output to.
         * @param clearMode - Should the output be cleared before rendering to it
         */
        apply(filterManager: any, input: any, output: any, clearMode: any): void;
        /**
         * A record of the uniform groups and resources used by the shader.
         * This is used by WebGL renderer to sync uniform data.
         * @internal
         * @ignore
         */
        _uniformBindMap: any;
        _ownedBindGroups: any[];
        gpuProgram: any;
        glProgram: any;
        compatibleRenderers: any;
        groups: any;
        resources: {};
        /**
         * Sometimes a resource group will be provided later (for example global uniforms)
         * In such cases, this method can be used to let the shader know about the group.
         * @param name - the name of the resource group
         * @param groupIndex - the index of the group (should match the webGPU shader group location)
         * @param bindIndex - the index of the bind point (should match the webGPU shader bind point)
         */
        addResource(name: any, groupIndex: any, bindIndex: any): void;
        _buildResourceAccessor(groups: any, nameHash: any): {};
        /**
         * Use to destroy the shader when its not longer needed.
         * It will destroy the resources and remove listeners.
         * @param destroyPrograms - if the programs should be destroyed as well.
         * Make sure its not being used by other shaders!
         */
        destroy(destroyPrograms?: boolean): void;
    };
};
export class AlphaMask {
    static test(mask: any): mask is Sprite;
    constructor(options: any);
    priority: number;
    pipe: string;
    init(mask: any): void;
    mask: any;
    renderMaskToTexture: boolean;
    reset(): void;
    addBounds(bounds: any, skipUpdateTransform: any): void;
    addLocalBounds(bounds: any, localRoot: any): void;
    containsPoint(point: any, hitTestFn: any): any;
    destroy(): void;
}
export namespace AlphaMask {
    let extension_1: any;
    export { extension_1 as extension };
}
export class AlphaMaskPipe {
    constructor(renderer: any);
    _activeMaskStage: any[];
    _renderer: any;
    push(mask: any, maskedContainer: any, instructionSet: any): void;
    pop(mask: any, _maskedContainer: any, instructionSet: any): void;
    execute(instruction: any): void;
    destroy(): void;
}
export namespace AlphaMaskPipe {
    export namespace extension_2 {
        let type_1: any[];
        export { type_1 as type };
        let name_1: string;
        export { name_1 as name };
    }
    export { extension_2 as extension };
}
export class AnimatedSprite extends Sprite {
    /**
     * A short hand way of creating an AnimatedSprite from an array of frame ids.
     * @param frames - The array of frames ids the AnimatedSprite will use as its texture frames.
     * @returns - The new animated sprite with the specified frames.
     */
    static fromFrames(frames: any): AnimatedSprite;
    /**
     * A short hand way of creating an AnimatedSprite from an array of image ids.
     * @param images - The array of image urls the AnimatedSprite will use as its texture frames.
     * @returns The new animate sprite with the specified images as frames.
     */
    static fromImages(images: any): AnimatedSprite;
    /**
     * @param textures - An array of {@link Texture} or frame
     *  objects that make up the animation.
     * @param {boolean} [autoUpdate=true] - Whether to use Ticker.shared to auto update animation time.
     */
    constructor(textures: any, autoUpdate?: boolean);
    _textures: any;
    _durations: any[];
    _autoUpdate: boolean;
    _isConnectedToTicker: boolean;
    animationSpeed: number;
    loop: boolean;
    updateAnchor: boolean;
    onComplete: any;
    onFrameChange: any;
    onLoop: any;
    _currentTime: number;
    _playing: boolean;
    _previousFrame: any;
    set textures(value: any);
    /** The array of textures used for this AnimatedSprite. */
    get textures(): any;
    /** Stops the AnimatedSprite. */
    stop(): void;
    /** Plays the AnimatedSprite. */
    play(): void;
    /**
     * Stops the AnimatedSprite and goes to a specific frame.
     * @param frameNumber - Frame index to stop at.
     */
    gotoAndStop(frameNumber: any): void;
    set currentFrame(value: number);
    /** The AnimatedSprite's current frame index. */
    get currentFrame(): number;
    /**
     * Goes to a specific frame and begins playing the AnimatedSprite.
     * @param frameNumber - Frame index to start at.
     */
    gotoAndPlay(frameNumber: any): void;
    /**
     * Updates the object transform for rendering.
     * @param ticker - the ticker to use to update the object.
     */
    update(ticker: any): void;
    /** Updates the displayed texture to match the current frame index. */
    _updateTexture(): void;
    /** Stops the AnimatedSprite and destroys it. */
    destroy(): void;
    /**
     * The total number of frames in the AnimatedSprite. This is the same as number of textures
     * assigned to the AnimatedSprite.
     * @readonly
     * @default 0
     */
    readonly get totalFrames(): any;
    /**
     * Indicates if the AnimatedSprite is currently playing.
     * @readonly
     */
    readonly get playing(): boolean;
    set autoUpdate(value: boolean);
    /** Whether to use Ticker.shared to auto update animation time. */
    get autoUpdate(): boolean;
}
export let Application: {
    new (...args: any[]): {
        /** The root display container that's rendered. */
        stage: Container;
        /**
         * @param options - The optional application and renderer parameters.
         */
        init(options: any): Promise<void>;
        renderer: WebGPURenderer;
        /** Render the current stage. */
        render(): void;
        /**
         * Reference to the renderer's canvas element.
         * @readonly
         * @member {HTMLCanvasElement}
         */
        readonly canvas: environment.ICanvas;
        /**
         * Reference to the renderer's canvas element.
         * @member {HTMLCanvasElement}
         * @deprecated since 8.0.0
         */
        readonly view: environment.ICanvas;
        /**
         * Reference to the renderer's screen rectangle. Its safe to use as `filterArea` or `hitArea` for the whole screen.
         * @readonly
         */
        readonly screen: any;
        /**
         * Destroys the application and all of its resources.
         * @param {object|boolean}[rendererDestroyOptions=false] - The options for destroying the renderer.
         * @param {boolean}[rendererDestroyOptions.removeView=false] - Removes the Canvas element from the DOM.
         * @param {object|boolean} [options=false] - The options for destroying the stage.
         * @param {boolean} [options.children=false] - If set to true, all the children will have their destroy method
         * called as well. `options` will be passed on to those calls.
         * @param {boolean} [options.texture=false] - Only used for children with textures e.g. Sprites.
         * If options.children is set to true,
         * it should destroy the texture of the child sprite.
         * @param {boolean} [options.textureSource=false] - Only used for children with textures e.g. Sprites.
         *  If options.children is set to true,
         * it should destroy the texture source of the child sprite.
         * @param {boolean} [options.context=false] - Only used for children with graphicsContexts e.g. Graphics.
         * If options.children is set to true,
         * it should destroy the context of the child graphics.
         */
        destroy(rendererDestroyOptions?: object | boolean, options?: object | boolean): void;
    };
    /**
     * Collection of installed plugins.
     * @alias _plugins
     */
    _plugins: any[];
};
export class ApplicationInitHook {
    static init(): void;
    static destroy(): void;
}
export namespace ApplicationInitHook {
    let extension_3: any;
    export { extension_3 as extension };
}
export const Assets: AssetsClass;
export class AssetsClass {
    _detections: any[];
    _initialized: boolean;
    resolver: Resolver;
    loader: Loader;
    cache: CacheClass;
    _backgroundLoader: BackgroundLoader;
    /**
     * Best practice is to call this function before any loading commences
     * Initiating is the best time to add any customization to the way things are loaded.
     *
     * you do not need to call this for the Assets class to work, only if you want to set any initial properties
     * @param options - options to initialize the Assets manager with
     */
    init(options?: {}): Promise<void>;
    /**
     * Allows you to specify how to resolve any assets load requests.
     * There are a few ways to add things here as shown below:
     * @example
     * import { Assets } from 'pixi.js';
     *
     * // Simple
     * Assets.add({alias: 'bunnyBooBoo', src: 'bunny.png'});
     * const bunny = await Assets.load('bunnyBooBoo');
     *
     * // Multiple keys:
     * Assets.add({alias: ['burger', 'chicken'], src: 'bunny.png'});
     *
     * const bunny = await Assets.load('burger');
     * const bunny2 = await Assets.load('chicken');
     *
     * // passing options to to the object
     * Assets.add({
     *     alias: 'bunnyBooBooSmooth',
     *     src: 'bunny{png,webp}',
     *     data: { scaleMode: SCALE_MODES.NEAREST }, // Base texture options
     * });
     *
     * // Multiple assets
     *
     * // The following all do the same thing:
     *
     * Assets.add({alias: 'bunnyBooBoo', src: 'bunny{png,webp}'});
     *
     * Assets.add({
     *     alias: 'bunnyBooBoo',
     *     src: [
     *         'bunny.png',
     *         'bunny.webp',
     *    ],
     * });
     *
     * const bunny = await Assets.load('bunnyBooBoo'); // Will try to load WebP if available
     * @param assets - the unresolved assets to add to the resolver
     */
    add(assets: any): void;
    load(urls: any, onProgress: any): Promise<any>;
    /**
     * This adds a bundle of assets in one go so that you can load them as a group.
     * For example you could add a bundle for each screen in you pixi app
     * @example
     * import { Assets } from 'pixi.js';
     *
     * Assets.addBundle('animals', [
     *  { alias: 'bunny', src: 'bunny.png' },
     *  { alias: 'chicken', src: 'chicken.png' },
     *  { alias: 'thumper', src: 'thumper.png' },
     * ]);
     * // or
     * Assets.addBundle('animals', {
     *     bunny: 'bunny.png',
     *     chicken: 'chicken.png',
     *     thumper: 'thumper.png',
     * });
     *
     * const assets = await Assets.loadBundle('animals');
     * @param bundleId - the id of the bundle to add
     * @param assets - a record of the asset or assets that will be chosen from when loading via the specified key
     */
    addBundle(bundleId: any, assets: any): void;
    /**
     * Bundles are a way to load multiple assets at once.
     * If a manifest has been provided to the init function then you can load a bundle, or bundles.
     * you can also add bundles via `addBundle`
     * @example
     * import { Assets } from 'pixi.js';
     *
     * // Manifest Example
     * const manifest = {
     *     bundles: [
     *         {
     *             name: 'load-screen',
     *             assets: [
     *                 {
     *                     alias: 'background',
     *                     src: 'sunset.png',
     *                 },
     *                 {
     *                     alias: 'bar',
     *                     src: 'load-bar.{png,webp}',
     *                 },
     *             ],
     *         },
     *         {
     *             name: 'game-screen',
     *             assets: [
     *                 {
     *                     alias: 'character',
     *                     src: 'robot.png',
     *                 },
     *                 {
     *                     alias: 'enemy',
     *                     src: 'bad-guy.png',
     *                 },
     *             ],
     *         },
     *     ]
     * };
     *
     * await Assets.init({ manifest });
     *
     * // Load a bundle...
     * loadScreenAssets = await Assets.loadBundle('load-screen');
     * // Load another bundle...
     * gameScreenAssets = await Assets.loadBundle('game-screen');
     * @param bundleIds - the bundle id or ids to load
     * @param onProgress - Optional function that is called when progress on asset loading is made.
     * The function is passed a single parameter, `progress`, which represents the percentage (0.0 - 1.0)
     * of the assets loaded. Do not use this function to detect when assets are complete and available,
     * instead use the Promise returned by this function.
     * @returns all the bundles assets or a hash of assets for each bundle specified
     */
    loadBundle(bundleIds: any, onProgress: any): Promise<any>;
    /**
     * Initiate a background load of some assets. It will passively begin to load these assets in the background.
     * So when you actually come to loading them you will get a promise that resolves to the loaded assets immediately
     *
     * An example of this might be that you would background load game assets after your initial load.
     * then when you got to actually load your game screen assets when a player goes to the game - the loading
     * would already have stared or may even be complete, saving you having to show an interim load bar.
     * @example
     * import { Assets } from 'pixi.js';
     *
     * Assets.backgroundLoad('bunny.png');
     *
     * // later on in your app...
     * await Assets.loadBundle('bunny.png'); // Will resolve quicker as loading may have completed!
     * @param urls - the url / urls you want to background load
     */
    backgroundLoad(urls: any): Promise<void>;
    /**
     * Initiate a background of a bundle, works exactly like backgroundLoad but for bundles.
     * this can only be used if the loader has been initiated with a manifest
     * @example
     * import { Assets } from 'pixi.js';
     *
     * await Assets.init({
     *     manifest: {
     *         bundles: [
     *             {
     *                 name: 'load-screen',
     *                 assets: [...],
     *             },
     *             ...
     *         ],
     *     },
     * });
     *
     * Assets.backgroundLoadBundle('load-screen');
     *
     * // Later on in your app...
     * await Assets.loadBundle('load-screen'); // Will resolve quicker as loading may have completed!
     * @param bundleIds - the bundleId / bundleIds you want to background load
     */
    backgroundLoadBundle(bundleIds: any): Promise<void>;
    /**
     * Only intended for development purposes.
     * This will wipe the resolver and caches.
     * You will need to reinitialize the Asset
     */
    reset(): void;
    get(keys: any): any;
    /**
     * helper function to map resolved assets back to loaded assets
     * @param resolveResults - the resolve results from the resolver
     * @param onProgress - the progress callback
     */
    _mapLoadToResolve(resolveResults: any, onProgress: any): Promise<{}>;
    /**
     * Unload an asset or assets. As the Assets class is responsible for creating the assets via the `load` function
     * this will make sure to destroy any assets and release them from memory.
     * Once unloaded, you will need to load the asset again.
     *
     * Use this to help manage assets if you find that you have a large app and you want to free up memory.
     *
     * - it's up to you as the developer to make sure that textures are not actively being used when you unload them,
     * Pixi won't break but you will end up with missing assets. Not a good look for the user!
     * @example
     * import { Assets } from 'pixi.js';
     *
     * // Load a URL:
     * const myImageTexture = await Assets.load('http://some.url.com/image.png'); // => returns a texture
     *
     * await Assets.unload('http://some.url.com/image.png')
     *
     * // myImageTexture will be destroyed now.
     *
     * // Unload multiple assets:
     * const textures = await Assets.unload(['thumper', 'chicko']);
     * @param urls - the urls to unload
     */
    unload(urls: any): Promise<void>;
    /**
     * Bundles are a way to manage multiple assets at once.
     * this will unload all files in a bundle.
     *
     * once a bundle has been unloaded, you need to load it again to have access to the assets.
     * @example
     * import { Assets } from 'pixi.js';
     *
     * Assets.addBundle({
     *     'thumper': 'http://some.url.com/thumper.png',
     * })
     *
     * const assets = await Assets.loadBundle('thumper');
     *
     * // Now to unload...
     *
     * await Assets.unloadBundle('thumper');
     *
     * // All assets in the assets object will now have been destroyed and purged from the cache
     * @param bundleIds - the bundle id or ids to unload
     */
    unloadBundle(bundleIds: any): Promise<void>;
    _unloadFromResolved(resolveResult: any): Promise<void>;
    /**
     * Detects the supported formats for the browser, and returns an array of supported formats, respecting
     * the users preferred formats order.
     * @param options - the options to use when detecting formats
     * @param options.preferredFormats - the preferred formats to use
     * @param options.skipDetections - if we should skip the detections altogether
     * @param options.detections - the detections to use
     * @returns - the detected formats
     */
    _detectFormats(options: any): Promise<any>;
    /** All the detection parsers currently added to the Assets class. */
    get detections(): any[];
    /**
     * General setter for preferences. This is a helper function to set preferences on all parsers.
     * @param preferences - the preferences to set
     */
    setPreferences(preferences: any): void;
}
export namespace BLEND_TO_NPM {
    let normal: string;
    let add: string;
    let screen: string;
}
export var BUFFER_TYPE: any;
export class BackgroundLoader {
    /**
     * @param loader
     * @param verbose - should the loader log to the console
     */
    constructor(loader: any, verbose?: boolean);
    _loader: any;
    _assetList: any[];
    _isLoading: boolean;
    _maxConcurrent: number;
    verbose: boolean;
    /**
     * Adds an array of assets to load.
     * @param assetUrls - assets to load
     */
    add(assetUrls: any): void;
    /**
     * Loads the next set of assets. Will try to load as many assets as it can at the same time.
     *
     * The max assets it will try to load at one time will be 4.
     */
    _next(): Promise<void>;
    set active(value: any);
    /**
     * Activate/Deactivate the loading. If set to true then it will immediately continue to load the next asset.
     * @returns whether the class is active
     */
    get active(): any;
    _isActive: any;
}
export let BackgroundSystem: {
    new (): {
        clearBeforeRender: boolean;
        _backgroundColor: {
            _value: any;
            _components: Float32Array;
            _int: number;
            /**
             * The current color source.
             *
             * When setting:
             * - Setting to an instance of `Color` will copy its color source and components.
             * - Otherwise, `Color` will try to normalize the color source and set the components.
             *   If the color source is invalid, an `Error` will be thrown and the `Color` will left unchanged.
             *
             * Note: The `null` in the setter's parameter type is added to match the TypeScript rule: return type of getter
             * must be assignable to its setter's parameter type. Setting `value` to `null` will throw an `Error`.
             *
             * When getting:
             * - A return value of `null` means the previous value was overridden (e.g., {@link Color.multiply multiply},
             *   {@link Color.premultiply premultiply} or {@link Color.round round}).
             * - Otherwise, the color source used when setting is returned.
             */
            value: any;
            /** Get red component (0 - 1) */
            readonly red: number;
            /** Get green component (0 - 1) */
            readonly green: number;
            /** Get blue component (0 - 1) */
            readonly blue: number;
            /** Get alpha component (0 - 1) */
            readonly alpha: number;
            /**
             * Set the value, suitable for chaining
             * @param value
             * @see Color.value
             */
            setValue(value: any): any;
            /**
             * Copy a color source internally.
             * @param value - Color source
             */
            _cloneSource(value: any): any;
            /**
             * Equality check for color sources.
             * @param value1 - First color source
             * @param value2 - Second color source
             * @returns `true` if the color sources are equal, `false` otherwise.
             */
            _isSourceEqual(value1: any, value2: any): any;
            /**
             * Convert to a RGBA color object.
             * @example
             * import { Color } from 'pixi.js';
             * new Color('white').toRgb(); // returns { r: 1, g: 1, b: 1, a: 1 }
             */
            toRgba(): {
                r: any;
                g: any;
                b: any;
                a: any;
            };
            /**
             * Convert to a RGB color object.
             * @example
             * import { Color } from 'pixi.js';
             * new Color('white').toRgb(); // returns { r: 1, g: 1, b: 1 }
             */
            toRgb(): {
                r: any;
                g: any;
                b: any;
            };
            /** Convert to a CSS-style rgba string: `rgba(255,255,255,1.0)`. */
            toRgbaString(): string;
            toUint8RgbArray(out: any): any;
            _arrayRgb: any[];
            toArray(out: any): any;
            _arrayRgba: any[];
            toRgbArray(out: any): any;
            /**
             * Convert to a hexadecimal number.
             * @example
             * import { Color } from 'pixi.js';
             * new Color('white').toNumber(); // returns 16777215
             */
            toNumber(): number;
            /**
             * Convert to a BGR number
             * @example
             * import { Color } from 'pixi.js';
             * new Color(0xffcc99).toBgrNumber(); // returns 0x99ccff
             */
            toBgrNumber(): any;
            /**
             * Convert to a hexadecimal number in little endian format (e.g., BBGGRR).
             * @example
             * import { Color } from 'pixi.js';
             * new Color(0xffcc99).toLittleEndianNumber(); // returns 0x99ccff
             * @returns {number} - The color as a number in little endian format.
             */
            toLittleEndianNumber(): number;
            /**
             * Multiply with another color. This action is destructive, and will
             * override the previous `value` property to be `null`.
             * @param {ColorSource} value - The color to multiply by.
             */
            multiply(value: ColorSource): any;
            /**
             * Converts color to a premultiplied alpha format. This action is destructive, and will
             * override the previous `value` property to be `null`.
             * @param alpha - The alpha to multiply by.
             * @param {boolean} [applyToRGB=true] - Whether to premultiply RGB channels.
             * @returns {Color} - Itself.
             */
            premultiply(alpha: any, applyToRGB?: boolean): {
                new (value?: ColorSource): any;
                /**
                 * Check if the value is a color-like object
                 * @param value - Value to check
                 * @returns True if the value is a color-like object
                 * @static
                 * @example
                 * import { Color } from 'pixi.js';
                 * Color.isColorLike('white'); // returns true
                 * Color.isColorLike(0xffffff); // returns true
                 * Color.isColorLike([1, 1, 1]); // returns true
                 */
                isColorLike(value: any): boolean;
                /**
                 * Default Color object for static uses
                 * @example
                 * import { Color } from 'pixi.js';
                 * Color.shared.setValue(0xffffff).toHex(); // '#ffffff'
                 */
                shared: any;
                /**
                 * Temporary Color object for static uses internally.
                 * As to not conflict with Color.shared.
                 * @ignore
                 */
                _temp: any;
                /** Pattern for hex strings */
                HEX_PATTERN: RegExp;
            };
            /**
             * Premultiplies alpha with current color.
             * @param {number} alpha - The alpha to multiply by.
             * @param {boolean} [applyToRGB=true] - Whether to premultiply RGB channels.
             * @returns {number} tint multiplied by alpha
             */
            toPremultiplied(alpha: number, applyToRGB?: boolean): number;
            /**
             * Convert to a hexadecimal string.
             * @example
             * import { Color } from 'pixi.js';
             * new Color('white').toHex(); // returns "#ffffff"
             */
            toHex(): string;
            /**
             * Convert to a hexadecimal string with alpha.
             * @example
             * import { Color } from 'pixi.js';
             * new Color('white').toHexa(); // returns "#ffffffff"
             */
            toHexa(): string;
            /**
             * Set alpha, suitable for chaining.
             * @param alpha
             */
            setAlpha(alpha: any): any;
            /**
             * Normalize the input value into rgba
             * @param value - Input value
             */
            _normalize(value: any): void;
            /** Refresh the internal color rgb number */
            _refreshInt(): void;
            /**
             * Clamps values to a range. Will override original values
             * @param value - Value(s) to clamp
             * @param min - Minimum value
             * @param max - Maximum value
             */
            _clamp(value: any, min?: number, max?: number): any;
        };
        /** The background color to fill if not transparent */
        color: {
            _value: any;
            _components: Float32Array;
            _int: number;
            /**
             * The current color source.
             *
             * When setting:
             * - Setting to an instance of `Color` will copy its color source and components.
             * - Otherwise, `Color` will try to normalize the color source and set the components.
             *   If the color source is invalid, an `Error` will be thrown and the `Color` will left unchanged.
             *
             * Note: The `null` in the setter's parameter type is added to match the TypeScript rule: return type of getter
             * must be assignable to its setter's parameter type. Setting `value` to `null` will throw an `Error`.
             *
             * When getting:
             * - A return value of `null` means the previous value was overridden (e.g., {@link Color.multiply multiply},
             *   {@link Color.premultiply premultiply} or {@link Color.round round}).
             * - Otherwise, the color source used when setting is returned.
             */
            value: any;
            /** Get red component (0 - 1) */
            readonly red: number;
            /** Get green component (0 - 1) */
            readonly green: number;
            /** Get blue component (0 - 1) */
            readonly blue: number;
            /** Get alpha component (0 - 1) */
            readonly alpha: number;
            /**
             * Set the value, suitable for chaining
             * @param value
             * @see Color.value
             */
            setValue(value: any): any;
            /**
             * Copy a color source internally.
             * @param value - Color source
             */
            _cloneSource(value: any): any;
            /**
             * Equality check for color sources.
             * @param value1 - First color source
             * @param value2 - Second color source
             * @returns `true` if the color sources are equal, `false` otherwise.
             */
            _isSourceEqual(value1: any, value2: any): any;
            /**
             * Convert to a RGBA color object.
             * @example
             * import { Color } from 'pixi.js';
             * new Color('white').toRgb(); // returns { r: 1, g: 1, b: 1, a: 1 }
             */
            toRgba(): {
                r: any;
                g: any;
                b: any;
                a: any;
            };
            /**
             * Convert to a RGB color object.
             * @example
             * import { Color } from 'pixi.js';
             * new Color('white').toRgb(); // returns { r: 1, g: 1, b: 1 }
             */
            toRgb(): {
                r: any;
                g: any;
                b: any;
            };
            /** Convert to a CSS-style rgba string: `rgba(255,255,255,1.0)`. */
            toRgbaString(): string;
            toUint8RgbArray(out: any): any;
            _arrayRgb: any[];
            toArray(out: any): any;
            _arrayRgba: any[];
            toRgbArray(out: any): any;
            /**
             * Convert to a hexadecimal number.
             * @example
             * import { Color } from 'pixi.js';
             * new Color('white').toNumber(); // returns 16777215
             */
            toNumber(): number;
            /**
             * Convert to a BGR number
             * @example
             * import { Color } from 'pixi.js';
             * new Color(0xffcc99).toBgrNumber(); // returns 0x99ccff
             */
            toBgrNumber(): any;
            /**
             * Convert to a hexadecimal number in little endian format (e.g., BBGGRR).
             * @example
             * import { Color } from 'pixi.js';
             * new Color(0xffcc99).toLittleEndianNumber(); // returns 0x99ccff
             * @returns {number} - The color as a number in little endian format.
             */
            toLittleEndianNumber(): number;
            /**
             * Multiply with another color. This action is destructive, and will
             * override the previous `value` property to be `null`.
             * @param {ColorSource} value - The color to multiply by.
             */
            multiply(value: ColorSource): any;
            /**
             * Converts color to a premultiplied alpha format. This action is destructive, and will
             * override the previous `value` property to be `null`.
             * @param alpha - The alpha to multiply by.
             * @param {boolean} [applyToRGB=true] - Whether to premultiply RGB channels.
             * @returns {Color} - Itself.
             */
            premultiply(alpha: any, applyToRGB?: boolean): {
                new (value?: ColorSource): any;
                /**
                 * Check if the value is a color-like object
                 * @param value - Value to check
                 * @returns True if the value is a color-like object
                 * @static
                 * @example
                 * import { Color } from 'pixi.js';
                 * Color.isColorLike('white'); // returns true
                 * Color.isColorLike(0xffffff); // returns true
                 * Color.isColorLike([1, 1, 1]); // returns true
                 */
                isColorLike(value: any): boolean;
                /**
                 * Default Color object for static uses
                 * @example
                 * import { Color } from 'pixi.js';
                 * Color.shared.setValue(0xffffff).toHex(); // '#ffffff'
                 */
                shared: any;
                /**
                 * Temporary Color object for static uses internally.
                 * As to not conflict with Color.shared.
                 * @ignore
                 */
                _temp: any;
                /** Pattern for hex strings */
                HEX_PATTERN: RegExp;
            };
            /**
             * Premultiplies alpha with current color.
             * @param {number} alpha - The alpha to multiply by.
             * @param {boolean} [applyToRGB=true] - Whether to premultiply RGB channels.
             * @returns {number} tint multiplied by alpha
             */
            toPremultiplied(alpha: number, applyToRGB?: boolean): number;
            /**
             * Convert to a hexadecimal string.
             * @example
             * import { Color } from 'pixi.js';
             * new Color('white').toHex(); // returns "#ffffff"
             */
            toHex(): string;
            /**
             * Convert to a hexadecimal string with alpha.
             * @example
             * import { Color } from 'pixi.js';
             * new Color('white').toHexa(); // returns "#ffffffff"
             */
            toHexa(): string;
            /**
             * Set alpha, suitable for chaining.
             * @param alpha
             */
            setAlpha(alpha: any): any;
            /**
             * Normalize the input value into rgba
             * @param value - Input value
             */
            _normalize(value: any): void;
            /** Refresh the internal color rgb number */
            _refreshInt(): void;
            /**
             * Clamps values to a range. Will override original values
             * @param value - Value(s) to clamp
             * @param min - Minimum value
             * @param max - Maximum value
             */
            _clamp(value: any, min?: number, max?: number): any;
        };
        /** The background color alpha. Setting this to 0 will make the canvas transparent. */
        alpha: number;
        /**
         * initiates the background system
         * @param options - the options for the background colors
         */
        init(options: any): void;
        /** The background color as an [R, G, B, A] array. */
        readonly colorRgba: any;
        /**
         * destroys the background system
         * @internal
         * @ignore
         */
        destroy(): void;
    };
    /** @ignore */
    extension: {
        type: any[];
        name: string;
        priority: number;
    };
    /** default options used by the system */
    defaultOptions: {
        /**
         * {@link WebGLOptions.backgroundAlpha}
         * @default 1
         */
        backgroundAlpha: number;
        /**
         * {@link WebGLOptions.backgroundColor}
         * @default 0x000000
         */
        backgroundColor: number;
        /**
         * {@link WebGLOptions.clearBeforeRender}
         * @default true
         */
        clearBeforeRender: boolean;
    };
};
export class Batch {
    renderPipeId: string;
    action: string;
    start: number;
    size: number;
    textures: BatchTextureArray;
    blendMode: string;
    canBundle: boolean;
    destroy(): void;
    gpuBindGroup: any;
    bindGroup: any;
    batcher: any;
}
export class BatchGeometry extends Geometry {
    constructor();
}
export class BatchTextureArray {
    /** Respective locations for textures. */
    ids: any;
    textures: any[];
    count: number;
    /** Clear the textures and their locations. */
    clear(): void;
}
export class BatchableGraphics {
    batcher: any;
    batch: any;
    applyTransform: boolean;
    roundPixels: number;
    get blendMode(): any;
    packIndex(indexBuffer: any, index: any, indicesOffset: any): void;
    packAttributes(float32View: any, uint32View: any, index: any, textureId: any): void;
    get vertSize(): any;
    copyTo(gpuBuffer: any): void;
    reset(): void;
}
export class BatchableMesh {
    batcher: any;
    batch: any;
    roundPixels: number;
    _uvUpdateId: number;
    _textureMatrixUpdateId: number;
    get blendMode(): any;
    reset(): void;
    mesh: any;
    texture: any;
    packIndex(indexBuffer: any, index: any, indicesOffset: any): void;
    packAttributes(float32View: any, uint32View: any, index: any, textureId: any): void;
    _transformedUvs: Float32Array;
    get vertexSize(): number;
    get indexSize(): any;
}
export class BatchableSprite {
    vertexSize: number;
    indexSize: number;
    location: number;
    batcher: any;
    batch: any;
    roundPixels: number;
    get blendMode(): any;
    packAttributes(float32View: any, uint32View: any, index: any, textureId: any): void;
    packIndex(indexBuffer: any, index: any, indicesOffset: any): void;
    reset(): void;
    renderable: any;
    texture: any;
    bounds: any;
}
export let Batcher: {
    new (options?: {}): {
        /** unique id for this batcher */
        uid: number;
        dirty: boolean;
        batchIndex: number;
        batches: any[];
        _vertexSize: number;
        _elements: any[];
        attributeBuffer: ViewableBuffer;
        indexBuffer: Uint16Array;
        _maxTextures: any;
        begin(): void;
        elementSize: number;
        elementStart: number;
        indexSize: number;
        attributeSize: number;
        _batchIndexStart: any;
        _batchIndexSize: any;
        add(batchableObject: any): void;
        checkAndUpdateTexture(batchableObject: any, texture: any): boolean;
        updateElement(batchableObject: any): void;
        /**
         * breaks the batcher. This happens when a batch gets too big,
         * or we need to switch to a different type of rendering (a filter for example)
         * @param instructionSet
         */
        break(instructionSet: any): void;
        _finishBatch(batch: any, indexStart: any, indexSize: any, textureBatch: any, blendMode: any, instructionSet: any, action: any): void;
        finish(instructionSet: any): void;
        /**
         * Resizes the attribute buffer to the given size (1 = 1 float32)
         * @param size - the size in vertices to ensure (not bytes!)
         */
        ensureAttributeBuffer(size: any): void;
        /**
         * Resizes the index buffer to the given size (1 = 1 float32)
         * @param size - the size in vertices to ensure (not bytes!)
         */
        ensureIndexBuffer(size: any): void;
        _resizeAttributeBuffer(size: any): void;
        _resizeIndexBuffer(size: any): void;
        destroy(): void;
    };
    defaultOptions: {
        vertexSize: number;
        indexSize: number;
    };
};
export class BatcherPipe {
    constructor(renderer: any, adaptor: any);
    state: {
        data: number;
        /**
         * The blend mode to be applied when this state is set. Apply a value of `normal` to reset the blend mode.
         * Setting this mode to anything other than NO_BLEND will automatically switch blending on.
         * @default 'normal'
         */
        blendMode: any;
        /**
         * The polygon offset. Setting this property to anything other than 0 will automatically enable polygon offset fill.
         * @default 0
         */
        polygonOffset: any;
        /**
         * Activates blending of the computed fragment color values.
         * @default true
         */
        blend: boolean;
        /**
         * Enables or disables writing to the depth buffer.
         * @default true
         */
        depthMask: boolean;
        /**
         * Activates adding an offset to depth values of polygon's fragments
         * @default false
         */
        offsets: boolean;
        /** The culling settings for this state none - No culling back - Back face culling front - Front face culling */
        cullMode: "none" | "front" | "back";
        /**
         * Activates culling of polygons.
         * @default false
         */
        culling: boolean;
        /**
         * Specifies whether or not front or back-facing polygons can be culled.
         * @default false
         */
        clockwiseFrontFace: boolean;
        /**
         * Activates depth comparisons and updates to the depth buffer.
         * @default false
         */
        depthTest: boolean;
        _blendMode: any;
        _blendModeId: any;
        _polygonOffset: any;
        toString(): string;
    };
    _batches: any;
    _geometries: any;
    renderer: any;
    _adaptor: any;
    buildStart(instructionSet: any): void;
    _activeBatch: any;
    _activeGeometry: any;
    addToBatch(batchableObject: any): void;
    break(instructionSet: any): void;
    buildEnd(instructionSet: any): void;
    upload(instructionSet: any): void;
    execute(batch: any): void;
    destroy(): void;
}
export namespace BatcherPipe {
    export namespace extension_4 {
        let type_2: any[];
        export { type_2 as type };
        let name_2: string;
        export { name_2 as name };
    }
    export { extension_4 as extension };
}
export const BigPool: PoolGroupClass;
export class BindGroup {
    /**
     * Create a new instance eof the Bind Group.
     * @param resources - The resources that are bound together for use by a shader.
     */
    constructor(resources: any);
    /** The resources that are bound together for use by a shader. */
    resources: any;
    _dirty: boolean;
    /**
     * Updates the key if its flagged as dirty. This is used internally to
     * match this bind group to a WebGPU BindGroup.
     * @internal
     * @ignore
     */
    _updateKey(): void;
    _key: string;
    /**
     * Set a resource at a given index. this function will
     * ensure that listeners will be removed from the current resource
     * and added to the new resource.
     * @param resource - The resource to set.
     * @param index - The index to set the resource at.
     */
    setResource(resource: any, index: any): void;
    /**
     * Returns the resource at the current specified index.
     * @param index - The index of the resource to get.
     * @returns - The resource at the specified index.
     */
    getResource(index: any): any;
    /**
     * Used internally to 'touch' each resource, to ensure that the GC
     * knows that all resources in this bind group are still being used.
     * @param tick - The current tick.
     * @internal
     * @ignore
     */
    _touch(tick: any): void;
    /** Destroys this bind group and removes all listeners. */
    destroy(): void;
    onResourceChange(resource: any): void;
}
export class BindGroupSystem {
    constructor(renderer: any);
    _hash: any;
    _renderer: any;
    contextChange(gpu: any): void;
    _gpu: any;
    getBindGroup(bindGroup: any, program: any, groupIndex: any): any;
    _createBindGroup(group: any, program: any, groupIndex: any): any;
    destroy(): void;
}
export namespace BindGroupSystem {
    export namespace extension_5 {
        let type_3: any[];
        export { type_3 as type };
        let name_3: string;
        export { name_3 as name };
    }
    export { extension_5 as extension };
}
export class BitmapFont extends AbstractBitmapFont {
    /**
     * Generates a bitmap-font for the given style and character set
     * @param options - Setup options for font generation.
     * @returns Font generated by style options.
     * @example
     * import { BitmapFont, BitmapText } from 'pixi.js';
     *
     * BitmapFont.install('TitleFont', {
     *     fontFamily: 'Arial',
     *     fontSize: 12,
     *     strokeThickness: 2,
     *     fill: 'purple',
     * });
     *
     * const title = new BitmapText({ text: 'This is the title', fontFamily: 'TitleFont' });
     */
    static install(options: any): void;
    /**
     * Uninstalls a bitmap font from the cache.
     * @param {string} name - The name of the bitmap font to uninstall.
     */
    static uninstall(name: string): void;
    constructor(options: any, url: any);
    baseRenderedFontSize: any;
    baseMeasurementFontSize: any;
    fontMetrics: {
        ascent: number;
        descent: number;
        fontSize: any;
    };
    baseLineOffset: any;
    lineHeight: any;
    fontFamily: any;
    distanceField: any;
    url: any;
    /** Destroys the BitmapFont object. */
    destroy(): void;
}
export const BitmapFontManager: BitmapFontManagerClass;
export class BitmapText extends AbstractText {
    constructor(...args: any[]);
    renderPipeId: string;
    _updateBounds(): void;
}
export class BitmapTextPipe {
    constructor(renderer: any);
    _gpuBitmapText: {};
    _renderer: any;
    validateRenderable(bitmapText: any): any;
    addRenderable(bitmapText: any, instructionSet: any): void;
    destroyRenderable(bitmapText: any): void;
    _destroyRenderableByUid(renderableUid: any): void;
    updateRenderable(bitmapText: any): void;
    _updateContext(bitmapText: any, proxyGraphics: any): void;
    _getGpuBitmapText(bitmapText: any): any;
    initGpuText(bitmapText: any): any;
    _updateDistanceField(bitmapText: any): void;
    destroy(): void;
}
export namespace BitmapTextPipe {
    export namespace extension_6 {
        let type_4: any[];
        export { type_4 as type };
        let name_4: string;
        export { name_4 as name };
    }
    export { extension_6 as extension };
}
declare const BlendModeFilter_base: {
    new (options: any): {
        [x: string]: any;
        /** If enabled is true the filter is applied, if false it will not. */
        enabled: boolean;
        /**
         * The gpu state the filter requires to render.
         * @internal
         * @ignore
         */
        _state: {
            data: number;
            /**
             * The blend mode to be applied when this state is set. Apply a value of `normal` to reset the blend mode.
             * Setting this mode to anything other than NO_BLEND will automatically switch blending on.
             * @default 'normal'
             */
            blendMode: any;
            /**
             * The polygon offset. Setting this property to anything other than 0 will automatically enable polygon offset fill.
             * @default 0
             */
            polygonOffset: any;
            /**
             * Activates blending of the computed fragment color values.
             * @default true
             */
            blend: boolean;
            /**
             * Enables or disables writing to the depth buffer.
             * @default true
             */
            depthMask: boolean;
            /**
             * Activates adding an offset to depth values of polygon's fragments
             * @default false
             */
            offsets: boolean;
            /** The culling settings for this state none - No culling back - Back face culling front - Front face culling */
            cullMode: "none" | "front" | "back";
            /**
             * Activates culling of polygons.
             * @default false
             */
            culling: boolean;
            /**
             * Specifies whether or not front or back-facing polygons can be culled.
             * @default false
             */
            clockwiseFrontFace: boolean;
            /**
             * Activates depth comparisons and updates to the depth buffer.
             * @default false
             */
            depthTest: boolean;
            _blendMode: any;
            _blendModeId: any;
            _polygonOffset: any;
            toString(): string;
        };
        /**
         * Get the blend mode of the filter.
         * @default "normal"
         */
        blendMode: any;
        padding: any;
        antialias: any;
        resolution: any;
        blendRequired: any;
        /**
         * Applies the filter
         * @param filterManager - The renderer to retrieve the filter from
         * @param input - The input render target.
         * @param output - The target to output to.
         * @param clearMode - Should the output be cleared before rendering to it
         */
        apply(filterManager: any, input: any, output: any, clearMode: any): void;
        /**
         * A record of the uniform groups and resources used by the shader.
         * This is used by WebGL renderer to sync uniform data.
         * @internal
         * @ignore
         */
        _uniformBindMap: any;
        _ownedBindGroups: any[];
        gpuProgram: any;
        glProgram: any;
        compatibleRenderers: any;
        groups: any;
        resources: {};
        /**
         * Sometimes a resource group will be provided later (for example global uniforms)
         * In such cases, this method can be used to let the shader know about the group.
         * @param name - the name of the resource group
         * @param groupIndex - the index of the group (should match the webGPU shader group location)
         * @param bindIndex - the index of the bind point (should match the webGPU shader bind point)
         */
        addResource(name: any, groupIndex: any, bindIndex: any): void;
        _buildResourceAccessor(groups: any, nameHash: any): {};
        /**
         * Use to destroy the shader when its not longer needed.
         * It will destroy the resources and remove listeners.
         * @param destroyPrograms - if the programs should be destroyed as well.
         * Make sure its not being used by other shaders!
         */
        destroy(destroyPrograms?: boolean): void;
    };
    /**
     * A short hand function to create a filter based of a vertex and fragment shader src.
     * @param options
     * @returns A shiny new PixiJS filter!
     */
    from(options: any): {
        [x: string]: any;
        /** If enabled is true the filter is applied, if false it will not. */
        enabled: boolean;
        /**
         * The gpu state the filter requires to render.
         * @internal
         * @ignore
         */
        _state: {
            data: number;
            /**
             * The blend mode to be applied when this state is set. Apply a value of `normal` to reset the blend mode.
             * Setting this mode to anything other than NO_BLEND will automatically switch blending on.
             * @default 'normal'
             */
            blendMode: any;
            /**
             * The polygon offset. Setting this property to anything other than 0 will automatically enable polygon offset fill.
             * @default 0
             */
            polygonOffset: any;
            /**
             * Activates blending of the computed fragment color values.
             * @default true
             */
            blend: boolean;
            /**
             * Enables or disables writing to the depth buffer.
             * @default true
             */
            depthMask: boolean;
            /**
             * Activates adding an offset to depth values of polygon's fragments
             * @default false
             */
            offsets: boolean;
            /** The culling settings for this state none - No culling back - Back face culling front - Front face culling */
            cullMode: "none" | "front" | "back";
            /**
             * Activates culling of polygons.
             * @default false
             */
            culling: boolean;
            /**
             * Specifies whether or not front or back-facing polygons can be culled.
             * @default false
             */
            clockwiseFrontFace: boolean;
            /**
             * Activates depth comparisons and updates to the depth buffer.
             * @default false
             */
            depthTest: boolean;
            _blendMode: any;
            _blendModeId: any;
            _polygonOffset: any;
            toString(): string;
        };
        /**
         * Get the blend mode of the filter.
         * @default "normal"
         */
        blendMode: any;
        padding: any;
        antialias: any;
        resolution: any;
        blendRequired: any;
        /**
         * Applies the filter
         * @param filterManager - The renderer to retrieve the filter from
         * @param input - The input render target.
         * @param output - The target to output to.
         * @param clearMode - Should the output be cleared before rendering to it
         */
        apply(filterManager: any, input: any, output: any, clearMode: any): void;
        /**
         * A record of the uniform groups and resources used by the shader.
         * This is used by WebGL renderer to sync uniform data.
         * @internal
         * @ignore
         */
        _uniformBindMap: any;
        _ownedBindGroups: any[];
        gpuProgram: any;
        glProgram: any;
        compatibleRenderers: any;
        groups: any;
        resources: {};
        /**
         * Sometimes a resource group will be provided later (for example global uniforms)
         * In such cases, this method can be used to let the shader know about the group.
         * @param name - the name of the resource group
         * @param groupIndex - the index of the group (should match the webGPU shader group location)
         * @param bindIndex - the index of the bind point (should match the webGPU shader bind point)
         */
        addResource(name: any, groupIndex: any, bindIndex: any): void;
        _buildResourceAccessor(groups: any, nameHash: any): {};
        /**
         * Use to destroy the shader when its not longer needed.
         * It will destroy the resources and remove listeners.
         * @param destroyPrograms - if the programs should be destroyed as well.
         * Make sure its not being used by other shaders!
         */
        destroy(destroyPrograms?: boolean): void;
    };
    /**
     * The default filter settings
     * @static
     */
    defaultOptions: {
        blendMode: string;
        resolution: number;
        padding: number;
        antialias: string;
        blendRequired: boolean;
    };
};
export class BlendModeFilter extends BlendModeFilter_base {
    constructor(options: any);
}
export class BlendModePipe {
    constructor(renderer: any);
    _isAdvanced: boolean;
    _filterHash: any;
    _renderer: any;
    /**
     * This ensures that a blendMode switch is added to the instruction set if the blend mode has changed.
     * @param renderable - The renderable we are adding to the instruction set
     * @param blendMode - The blend mode of the renderable
     * @param instructionSet - The instruction set we are adding to
     */
    setBlendMode(renderable: any, blendMode: any, instructionSet: any): void;
    _activeBlendMode: any;
    _beginAdvancedBlendMode(instructionSet: any): void;
    _renderableList: any[];
    _endAdvancedBlendMode(instructionSet: any): void;
    /**
     * called when the instruction build process is starting this will reset internally to the default blend mode
     * @internal
     * @ignore
     */
    buildStart(): void;
    /**
     * called when the instruction build process is finished, ensuring that if there is an advanced blend mode
     * active, we add the final render instructions added to the instruction set
     * @param instructionSet - The instruction set we are adding to
     * @internal
     * @ignore
     */
    buildEnd(instructionSet: any): void;
    /**
     * @internal
     * @ignore
     */
    destroy(): void;
}
export namespace BlendModePipe {
    export namespace extension_7 {
        let type_5: any[];
        export { type_5 as type };
        let name_5: string;
        export { name_5 as name };
    }
    export { extension_7 as extension };
}
declare const BlurFilter_base: {
    new (options: any): {
        [x: string]: any;
        /** If enabled is true the filter is applied, if false it will not. */
        enabled: boolean;
        /**
         * The gpu state the filter requires to render.
         * @internal
         * @ignore
         */
        _state: {
            data: number;
            /**
             * The blend mode to be applied when this state is set. Apply a value of `normal` to reset the blend mode.
             * Setting this mode to anything other than NO_BLEND will automatically switch blending on.
             * @default 'normal'
             */
            blendMode: any;
            /**
             * The polygon offset. Setting this property to anything other than 0 will automatically enable polygon offset fill.
             * @default 0
             */
            polygonOffset: any;
            /**
             * Activates blending of the computed fragment color values.
             * @default true
             */
            blend: boolean;
            /**
             * Enables or disables writing to the depth buffer.
             * @default true
             */
            depthMask: boolean;
            /**
             * Activates adding an offset to depth values of polygon's fragments
             * @default false
             */
            offsets: boolean;
            /** The culling settings for this state none - No culling back - Back face culling front - Front face culling */
            cullMode: "none" | "front" | "back";
            /**
             * Activates culling of polygons.
             * @default false
             */
            culling: boolean;
            /**
             * Specifies whether or not front or back-facing polygons can be culled.
             * @default false
             */
            clockwiseFrontFace: boolean;
            /**
             * Activates depth comparisons and updates to the depth buffer.
             * @default false
             */
            depthTest: boolean;
            _blendMode: any;
            _blendModeId: any;
            _polygonOffset: any;
            toString(): string;
        };
        /**
         * Get the blend mode of the filter.
         * @default "normal"
         */
        blendMode: any;
        padding: any;
        antialias: any;
        resolution: any;
        blendRequired: any;
        /**
         * Applies the filter
         * @param filterManager - The renderer to retrieve the filter from
         * @param input - The input render target.
         * @param output - The target to output to.
         * @param clearMode - Should the output be cleared before rendering to it
         */
        apply(filterManager: any, input: any, output: any, clearMode: any): void;
        /**
         * A record of the uniform groups and resources used by the shader.
         * This is used by WebGL renderer to sync uniform data.
         * @internal
         * @ignore
         */
        _uniformBindMap: any;
        _ownedBindGroups: any[];
        gpuProgram: any;
        glProgram: any;
        compatibleRenderers: any;
        groups: any;
        resources: {};
        /**
         * Sometimes a resource group will be provided later (for example global uniforms)
         * In such cases, this method can be used to let the shader know about the group.
         * @param name - the name of the resource group
         * @param groupIndex - the index of the group (should match the webGPU shader group location)
         * @param bindIndex - the index of the bind point (should match the webGPU shader bind point)
         */
        addResource(name: any, groupIndex: any, bindIndex: any): void;
        _buildResourceAccessor(groups: any, nameHash: any): {};
        /**
         * Use to destroy the shader when its not longer needed.
         * It will destroy the resources and remove listeners.
         * @param destroyPrograms - if the programs should be destroyed as well.
         * Make sure its not being used by other shaders!
         */
        destroy(destroyPrograms?: boolean): void;
    };
    /**
     * A short hand function to create a filter based of a vertex and fragment shader src.
     * @param options
     * @returns A shiny new PixiJS filter!
     */
    from(options: any): {
        [x: string]: any;
        /** If enabled is true the filter is applied, if false it will not. */
        enabled: boolean;
        /**
         * The gpu state the filter requires to render.
         * @internal
         * @ignore
         */
        _state: {
            data: number;
            /**
             * The blend mode to be applied when this state is set. Apply a value of `normal` to reset the blend mode.
             * Setting this mode to anything other than NO_BLEND will automatically switch blending on.
             * @default 'normal'
             */
            blendMode: any;
            /**
             * The polygon offset. Setting this property to anything other than 0 will automatically enable polygon offset fill.
             * @default 0
             */
            polygonOffset: any;
            /**
             * Activates blending of the computed fragment color values.
             * @default true
             */
            blend: boolean;
            /**
             * Enables or disables writing to the depth buffer.
             * @default true
             */
            depthMask: boolean;
            /**
             * Activates adding an offset to depth values of polygon's fragments
             * @default false
             */
            offsets: boolean;
            /** The culling settings for this state none - No culling back - Back face culling front - Front face culling */
            cullMode: "none" | "front" | "back";
            /**
             * Activates culling of polygons.
             * @default false
             */
            culling: boolean;
            /**
             * Specifies whether or not front or back-facing polygons can be culled.
             * @default false
             */
            clockwiseFrontFace: boolean;
            /**
             * Activates depth comparisons and updates to the depth buffer.
             * @default false
             */
            depthTest: boolean;
            _blendMode: any;
            _blendModeId: any;
            _polygonOffset: any;
            toString(): string;
        };
        /**
         * Get the blend mode of the filter.
         * @default "normal"
         */
        blendMode: any;
        padding: any;
        antialias: any;
        resolution: any;
        blendRequired: any;
        /**
         * Applies the filter
         * @param filterManager - The renderer to retrieve the filter from
         * @param input - The input render target.
         * @param output - The target to output to.
         * @param clearMode - Should the output be cleared before rendering to it
         */
        apply(filterManager: any, input: any, output: any, clearMode: any): void;
        /**
         * A record of the uniform groups and resources used by the shader.
         * This is used by WebGL renderer to sync uniform data.
         * @internal
         * @ignore
         */
        _uniformBindMap: any;
        _ownedBindGroups: any[];
        gpuProgram: any;
        glProgram: any;
        compatibleRenderers: any;
        groups: any;
        resources: {};
        /**
         * Sometimes a resource group will be provided later (for example global uniforms)
         * In such cases, this method can be used to let the shader know about the group.
         * @param name - the name of the resource group
         * @param groupIndex - the index of the group (should match the webGPU shader group location)
         * @param bindIndex - the index of the bind point (should match the webGPU shader bind point)
         */
        addResource(name: any, groupIndex: any, bindIndex: any): void;
        _buildResourceAccessor(groups: any, nameHash: any): {};
        /**
         * Use to destroy the shader when its not longer needed.
         * It will destroy the resources and remove listeners.
         * @param destroyPrograms - if the programs should be destroyed as well.
         * Make sure its not being used by other shaders!
         */
        destroy(destroyPrograms?: boolean): void;
    };
    /**
     * The default filter settings
     * @static
     */
    defaultOptions: {
        blendMode: string;
        resolution: number;
        padding: number;
        antialias: string;
        blendRequired: boolean;
    };
};
export class BlurFilter extends BlurFilter_base {
    constructor(...args: any[]);
    _repeatEdgePixels: boolean;
    blurXFilter: {
        [x: string]: any;
        horizontal: any;
        _quality: number;
        /**
         * Sets the quality of the blur by modifying the number of passes. More passes means higher
         * quality blurring but the lower the performance.
         * @default 4
         */
        quality: number;
        /**
         * Sets the strength of both the blur.
         * @default 16
         */
        blur: any;
        _uniforms: any;
        /**
         * Applies the filter.
         * @param filterManager - The manager.
         * @param input - The input target.
         * @param output - The output target.
         * @param clearMode - How to clear
         */
        apply(filterManager: any, input: any, output: any, clearMode: any): void;
        padding: any;
        strength: any;
        passes: number;
        /** If enabled is true the filter is applied, if false it will not. */
        enabled: boolean;
        /**
         * The gpu state the filter requires to render.
         * @internal
         * @ignore
         */
        _state: {
            data: number;
            /**
             * The blend mode to be applied when this state is set. Apply a value of `normal` to reset the blend mode.
             * Setting this mode to anything other than NO_BLEND will automatically switch blending on.
             * @default 'normal'
             */
            blendMode: any;
            /**
             * The polygon offset. Setting this property to anything other than 0 will automatically enable polygon offset fill.
             * @default 0
             */
            polygonOffset: any;
            /**
             * Activates blending of the computed fragment color values.
             * @default true
             */
            blend: boolean;
            /**
             * Enables or disables writing to the depth buffer.
             * @default true
             */
            depthMask: boolean;
            /**
             * Activates adding an offset to depth values of polygon's fragments
             * @default false
             */
            offsets: boolean;
            /** The culling settings for this state none - No culling back - Back face culling front - Front face culling */
            cullMode: "none" | "front" | "back";
            /**
             * Activates culling of polygons.
             * @default false
             */
            culling: boolean;
            /**
             * Specifies whether or not front or back-facing polygons can be culled.
             * @default false
             */
            clockwiseFrontFace: boolean;
            /**
             * Activates depth comparisons and updates to the depth buffer.
             * @default false
             */
            depthTest: boolean;
            _blendMode: any;
            _blendModeId: any;
            _polygonOffset: any;
            toString(): string;
        };
        /**
         * Get the blend mode of the filter.
         * @default "normal"
         */
        blendMode: any;
        antialias: any;
        resolution: any;
        blendRequired: any;
        /**
         * A record of the uniform groups and resources used by the shader.
         * This is used by WebGL renderer to sync uniform data.
         * @internal
         * @ignore
         */
        _uniformBindMap: any;
        _ownedBindGroups: any[];
        gpuProgram: any;
        glProgram: any;
        compatibleRenderers: any;
        groups: any;
        resources: {};
        /**
         * Sometimes a resource group will be provided later (for example global uniforms)
         * In such cases, this method can be used to let the shader know about the group.
         * @param name - the name of the resource group
         * @param groupIndex - the index of the group (should match the webGPU shader group location)
         * @param bindIndex - the index of the bind point (should match the webGPU shader bind point)
         */
        addResource(name: any, groupIndex: any, bindIndex: any): void;
        _buildResourceAccessor(groups: any, nameHash: any): {};
        /**
         * Use to destroy the shader when its not longer needed.
         * It will destroy the resources and remove listeners.
         * @param destroyPrograms - if the programs should be destroyed as well.
         * Make sure its not being used by other shaders!
         */
        destroy(destroyPrograms?: boolean): void;
    };
    blurYFilter: {
        [x: string]: any;
        horizontal: any;
        _quality: number;
        /**
         * Sets the quality of the blur by modifying the number of passes. More passes means higher
         * quality blurring but the lower the performance.
         * @default 4
         */
        quality: number;
        /**
         * Sets the strength of both the blur.
         * @default 16
         */
        blur: any;
        _uniforms: any;
        /**
         * Applies the filter.
         * @param filterManager - The manager.
         * @param input - The input target.
         * @param output - The output target.
         * @param clearMode - How to clear
         */
        apply(filterManager: any, input: any, output: any, clearMode: any): void;
        padding: any;
        strength: any;
        passes: number;
        /** If enabled is true the filter is applied, if false it will not. */
        enabled: boolean;
        /**
         * The gpu state the filter requires to render.
         * @internal
         * @ignore
         */
        _state: {
            data: number;
            /**
             * The blend mode to be applied when this state is set. Apply a value of `normal` to reset the blend mode.
             * Setting this mode to anything other than NO_BLEND will automatically switch blending on.
             * @default 'normal'
             */
            blendMode: any;
            /**
             * The polygon offset. Setting this property to anything other than 0 will automatically enable polygon offset fill.
             * @default 0
             */
            polygonOffset: any;
            /**
             * Activates blending of the computed fragment color values.
             * @default true
             */
            blend: boolean;
            /**
             * Enables or disables writing to the depth buffer.
             * @default true
             */
            depthMask: boolean;
            /**
             * Activates adding an offset to depth values of polygon's fragments
             * @default false
             */
            offsets: boolean;
            /** The culling settings for this state none - No culling back - Back face culling front - Front face culling */
            cullMode: "none" | "front" | "back";
            /**
             * Activates culling of polygons.
             * @default false
             */
            culling: boolean;
            /**
             * Specifies whether or not front or back-facing polygons can be culled.
             * @default false
             */
            clockwiseFrontFace: boolean;
            /**
             * Activates depth comparisons and updates to the depth buffer.
             * @default false
             */
            depthTest: boolean;
            _blendMode: any;
            _blendModeId: any;
            _polygonOffset: any;
            toString(): string;
        };
        /**
         * Get the blend mode of the filter.
         * @default "normal"
         */
        blendMode: any;
        antialias: any;
        resolution: any;
        blendRequired: any;
        /**
         * A record of the uniform groups and resources used by the shader.
         * This is used by WebGL renderer to sync uniform data.
         * @internal
         * @ignore
         */
        _uniformBindMap: any;
        _ownedBindGroups: any[];
        gpuProgram: any;
        glProgram: any;
        compatibleRenderers: any;
        groups: any;
        resources: {};
        /**
         * Sometimes a resource group will be provided later (for example global uniforms)
         * In such cases, this method can be used to let the shader know about the group.
         * @param name - the name of the resource group
         * @param groupIndex - the index of the group (should match the webGPU shader group location)
         * @param bindIndex - the index of the bind point (should match the webGPU shader bind point)
         */
        addResource(name: any, groupIndex: any, bindIndex: any): void;
        _buildResourceAccessor(groups: any, nameHash: any): {};
        /**
         * Use to destroy the shader when its not longer needed.
         * It will destroy the resources and remove listeners.
         * @param destroyPrograms - if the programs should be destroyed as well.
         * Make sure its not being used by other shaders!
         */
        destroy(destroyPrograms?: boolean): void;
    };
    set quality(value: number);
    /**
     * Sets the number of passes for blur. More passes means higher quality bluring.
     * @default 1
     */
    get quality(): number;
    set blur(value: any);
    /**
     * Sets the strength of both the blurX and blurY properties simultaneously
     * @default 2
     */
    get blur(): any;
    set repeatEdgePixels(value: boolean);
    /**
     * If set to true the edge of the target will be clamped
     * @default false
     */
    get repeatEdgePixels(): boolean;
    updatePadding(): void;
    set blurX(value: any);
    /**
     * Sets the strength of the blurX property
     * @default 2
     */
    get blurX(): any;
    set blurY(value: any);
    /**
     * Sets the strength of the blurY property
     * @default 2
     */
    get blurY(): any;
}
export namespace BlurFilter {
    namespace defaultOptions {
        let strength: number;
        let quality: number;
        let kernelSize: number;
    }
}
export let BlurFilterPass: {
    new (options: any): {
        [x: string]: any;
        horizontal: any;
        _quality: number;
        /**
         * Sets the quality of the blur by modifying the number of passes. More passes means higher
         * quality blurring but the lower the performance.
         * @default 4
         */
        quality: number;
        /**
         * Sets the strength of both the blur.
         * @default 16
         */
        blur: any;
        _uniforms: any;
        /**
         * Applies the filter.
         * @param filterManager - The manager.
         * @param input - The input target.
         * @param output - The output target.
         * @param clearMode - How to clear
         */
        apply(filterManager: any, input: any, output: any, clearMode: any): void;
        padding: any;
        strength: any;
        passes: number;
        /** If enabled is true the filter is applied, if false it will not. */
        enabled: boolean;
        /**
         * The gpu state the filter requires to render.
         * @internal
         * @ignore
         */
        _state: {
            data: number;
            /**
             * The blend mode to be applied when this state is set. Apply a value of `normal` to reset the blend mode.
             * Setting this mode to anything other than NO_BLEND will automatically switch blending on.
             * @default 'normal'
             */
            blendMode: any;
            /**
             * The polygon offset. Setting this property to anything other than 0 will automatically enable polygon offset fill.
             * @default 0
             */
            polygonOffset: any;
            /**
             * Activates blending of the computed fragment color values.
             * @default true
             */
            blend: boolean;
            /**
             * Enables or disables writing to the depth buffer.
             * @default true
             */
            depthMask: boolean;
            /**
             * Activates adding an offset to depth values of polygon's fragments
             * @default false
             */
            offsets: boolean;
            /** The culling settings for this state none - No culling back - Back face culling front - Front face culling */
            cullMode: "none" | "front" | "back";
            /**
             * Activates culling of polygons.
             * @default false
             */
            culling: boolean;
            /**
             * Specifies whether or not front or back-facing polygons can be culled.
             * @default false
             */
            clockwiseFrontFace: boolean;
            /**
             * Activates depth comparisons and updates to the depth buffer.
             * @default false
             */
            depthTest: boolean;
            _blendMode: any;
            _blendModeId: any;
            _polygonOffset: any;
            toString(): string;
        };
        /**
         * Get the blend mode of the filter.
         * @default "normal"
         */
        blendMode: any;
        antialias: any;
        resolution: any;
        blendRequired: any;
        /**
         * A record of the uniform groups and resources used by the shader.
         * This is used by WebGL renderer to sync uniform data.
         * @internal
         * @ignore
         */
        _uniformBindMap: any;
        _ownedBindGroups: any[];
        gpuProgram: any;
        glProgram: any;
        compatibleRenderers: any;
        groups: any;
        resources: {};
        /**
         * Sometimes a resource group will be provided later (for example global uniforms)
         * In such cases, this method can be used to let the shader know about the group.
         * @param name - the name of the resource group
         * @param groupIndex - the index of the group (should match the webGPU shader group location)
         * @param bindIndex - the index of the bind point (should match the webGPU shader bind point)
         */
        addResource(name: any, groupIndex: any, bindIndex: any): void;
        _buildResourceAccessor(groups: any, nameHash: any): {};
        /**
         * Use to destroy the shader when its not longer needed.
         * It will destroy the resources and remove listeners.
         * @param destroyPrograms - if the programs should be destroyed as well.
         * Make sure its not being used by other shaders!
         */
        destroy(destroyPrograms?: boolean): void;
    };
    /** Default blur filter pass options */
    defaultOptions: {
        /** The strength of the blur filter. */
        strength: number;
        /** The quality of the blur filter. */
        quality: number;
        /** The kernelSize of the blur filter.Options: 5, 7, 9, 11, 13, 15. */
        kernelSize: number;
    };
    /**
     * A short hand function to create a filter based of a vertex and fragment shader src.
     * @param options
     * @returns A shiny new PixiJS filter!
     */
    from(options: any): {
        [x: string]: any;
        /** If enabled is true the filter is applied, if false it will not. */
        enabled: boolean;
        /**
         * The gpu state the filter requires to render.
         * @internal
         * @ignore
         */
        _state: {
            data: number;
            /**
             * The blend mode to be applied when this state is set. Apply a value of `normal` to reset the blend mode.
             * Setting this mode to anything other than NO_BLEND will automatically switch blending on.
             * @default 'normal'
             */
            blendMode: any;
            /**
             * The polygon offset. Setting this property to anything other than 0 will automatically enable polygon offset fill.
             * @default 0
             */
            polygonOffset: any;
            /**
             * Activates blending of the computed fragment color values.
             * @default true
             */
            blend: boolean;
            /**
             * Enables or disables writing to the depth buffer.
             * @default true
             */
            depthMask: boolean;
            /**
             * Activates adding an offset to depth values of polygon's fragments
             * @default false
             */
            offsets: boolean;
            /** The culling settings for this state none - No culling back - Back face culling front - Front face culling */
            cullMode: "none" | "front" | "back";
            /**
             * Activates culling of polygons.
             * @default false
             */
            culling: boolean;
            /**
             * Specifies whether or not front or back-facing polygons can be culled.
             * @default false
             */
            clockwiseFrontFace: boolean;
            /**
             * Activates depth comparisons and updates to the depth buffer.
             * @default false
             */
            depthTest: boolean;
            _blendMode: any;
            _blendModeId: any;
            _polygonOffset: any;
            toString(): string;
        };
        /**
         * Get the blend mode of the filter.
         * @default "normal"
         */
        blendMode: any;
        padding: any;
        antialias: any;
        resolution: any;
        blendRequired: any;
        /**
         * Applies the filter
         * @param filterManager - The renderer to retrieve the filter from
         * @param input - The input render target.
         * @param output - The target to output to.
         * @param clearMode - Should the output be cleared before rendering to it
         */
        apply(filterManager: any, input: any, output: any, clearMode: any): void;
        /**
         * A record of the uniform groups and resources used by the shader.
         * This is used by WebGL renderer to sync uniform data.
         * @internal
         * @ignore
         */
        _uniformBindMap: any;
        _ownedBindGroups: any[];
        gpuProgram: any;
        glProgram: any;
        compatibleRenderers: any;
        groups: any;
        resources: {};
        /**
         * Sometimes a resource group will be provided later (for example global uniforms)
         * In such cases, this method can be used to let the shader know about the group.
         * @param name - the name of the resource group
         * @param groupIndex - the index of the group (should match the webGPU shader group location)
         * @param bindIndex - the index of the bind point (should match the webGPU shader bind point)
         */
        addResource(name: any, groupIndex: any, bindIndex: any): void;
        _buildResourceAccessor(groups: any, nameHash: any): {};
        /**
         * Use to destroy the shader when its not longer needed.
         * It will destroy the resources and remove listeners.
         * @param destroyPrograms - if the programs should be destroyed as well.
         * Make sure its not being used by other shaders!
         */
        destroy(destroyPrograms?: boolean): void;
    };
};
export class Bounds {
    constructor(minX?: number, minY?: number, maxX?: number, maxY?: number);
    /** @default Infinity */
    minX: number;
    /** @default Infinity */
    minY: number;
    /** @default -Infinity */
    maxX: number;
    /** @default -Infinity */
    maxY: number;
    matrix: Matrix;
    /**
     * Checks if bounds are empty.
     * @returns - True if empty.
     */
    isEmpty(): boolean;
    /** The bounding rectangle of the bounds. */
    get rectangle(): Rectangle;
    _rectangle: Rectangle;
    /** Clears the bounds and resets. */
    clear(): this;
    /**
     * Sets the bounds.
     * @param x0 - left X of frame
     * @param y0 - top Y of frame
     * @param x1 - right X of frame
     * @param y1 - bottom Y of frame
     */
    set(x0: any, y0: any, x1: any, y1: any): void;
    /**
     * Adds sprite frame
     * @param x0 - left X of frame
     * @param y0 - top Y of frame
     * @param x1 - right X of frame
     * @param y1 - bottom Y of frame
     * @param matrix
     */
    addFrame(x0: any, y0: any, x1: any, y1: any, matrix: any): void;
    /**
     * Adds a rectangle to the bounds.
     * @param rect - The rectangle to be added.
     * @param matrix - The matrix to apply to the bounds.
     */
    addRect(rect: any, matrix: any): void;
    /**
     * Adds other {@link Bounds}.
     * @param bounds - The Bounds to be added
     * @param matrix
     */
    addBounds(bounds: any, matrix: any): void;
    /**
     * Adds other Bounds, masked with Bounds.
     * @param mask - The Bounds to be added.
     */
    addBoundsMask(mask: any): void;
    /**
     * Adds other Bounds, multiplied with matrix.
     * @param matrix - The matrix to apply to the bounds.
     */
    applyMatrix(matrix: any): void;
    /**
     * Resizes the bounds object to include the given rectangle.
     * @param rect - The rectangle to be included.
     */
    fit(rect: any): this;
    /**
     * Resizes the bounds object to include the given bounds.
     * @param left - The left value of the bounds.
     * @param right - The right value of the bounds.
     * @param top - The top value of the bounds.
     * @param bottom - The bottom value of the bounds.
     */
    fitBounds(left: any, right: any, top: any, bottom: any): this;
    /**
     * Pads bounds object, making it grow in all directions.
     * If paddingY is omitted, both paddingX and paddingY will be set to paddingX.
     * @param paddingX - The horizontal padding amount.
     * @param paddingY - The vertical padding amount.
     */
    pad(paddingX: any, paddingY?: any): this;
    /** Ceils the bounds. */
    ceil(): this;
    /** Clones the bounds. */
    clone(): Bounds;
    /**
     * Scales the bounds by the given values
     * @param x - The X value to scale by.
     * @param y - The Y value to scale by.
     */
    scale(x: any, y?: any): this;
    set x(value: number);
    /** the x value of the bounds. */
    get x(): number;
    set y(value: number);
    /** the y value of the bounds. */
    get y(): number;
    set width(value: number);
    /** the width value of the bounds. */
    get width(): number;
    set height(value: number);
    /** the height value of the bounds. */
    get height(): number;
    /** the left value of the bounds. */
    get left(): number;
    /** the right value of the bounds. */
    get right(): number;
    /** the top value of the bounds. */
    get top(): number;
    /** the bottom value of the bounds. */
    get bottom(): number;
    /** Is the bounds positive. */
    get isPositive(): boolean;
    get isValid(): boolean;
    /**
     * Adds screen vertices from array
     * @param vertexData - calculated vertices
     * @param beginOffset - begin offset
     * @param endOffset - end offset, excluded
     * @param matrix
     */
    addVertexData(vertexData: any, beginOffset: any, endOffset: any, matrix: any): void;
    /**
     * Checks if the point is contained within the bounds.
     * @param x - x coordinate
     * @param y - y coordinate
     */
    containsPoint(x: any, y: any): boolean;
    toString(): string;
}
export namespace BrowserAdapter {
    function createCanvas(width: any, height: any): HTMLCanvasElement;
    function getCanvasRenderingContext2D(): {
        new (): CanvasRenderingContext2D;
        prototype: CanvasRenderingContext2D;
    };
    function getWebGLRenderingContext(): {
        new (): WebGLRenderingContext;
        prototype: WebGLRenderingContext;
        readonly DEPTH_BUFFER_BIT: 256;
        readonly STENCIL_BUFFER_BIT: 1024;
        readonly COLOR_BUFFER_BIT: 16384;
        readonly POINTS: 0;
        readonly LINES: 1;
        readonly LINE_LOOP: 2;
        readonly LINE_STRIP: 3;
        readonly TRIANGLES: 4;
        readonly TRIANGLE_STRIP: 5;
        readonly TRIANGLE_FAN: 6;
        readonly ZERO: 0;
        readonly ONE: 1;
        readonly SRC_COLOR: 768;
        readonly ONE_MINUS_SRC_COLOR: 769;
        readonly SRC_ALPHA: 770;
        readonly ONE_MINUS_SRC_ALPHA: 771;
        readonly DST_ALPHA: 772;
        readonly ONE_MINUS_DST_ALPHA: 773;
        readonly DST_COLOR: 774;
        readonly ONE_MINUS_DST_COLOR: 775;
        readonly SRC_ALPHA_SATURATE: 776;
        readonly FUNC_ADD: 32774;
        readonly BLEND_EQUATION: 32777;
        readonly BLEND_EQUATION_RGB: 32777;
        readonly BLEND_EQUATION_ALPHA: 34877;
        readonly FUNC_SUBTRACT: 32778;
        readonly FUNC_REVERSE_SUBTRACT: 32779;
        readonly BLEND_DST_RGB: 32968;
        readonly BLEND_SRC_RGB: 32969;
        readonly BLEND_DST_ALPHA: 32970;
        readonly BLEND_SRC_ALPHA: 32971;
        readonly CONSTANT_COLOR: 32769;
        readonly ONE_MINUS_CONSTANT_COLOR: 32770;
        readonly CONSTANT_ALPHA: 32771;
        readonly ONE_MINUS_CONSTANT_ALPHA: 32772;
        readonly BLEND_COLOR: 32773;
        readonly ARRAY_BUFFER: 34962;
        readonly ELEMENT_ARRAY_BUFFER: 34963;
        readonly ARRAY_BUFFER_BINDING: 34964;
        readonly ELEMENT_ARRAY_BUFFER_BINDING: 34965;
        readonly STREAM_DRAW: 35040;
        readonly STATIC_DRAW: 35044;
        readonly DYNAMIC_DRAW: 35048;
        readonly BUFFER_SIZE: 34660;
        readonly BUFFER_USAGE: 34661;
        readonly CURRENT_VERTEX_ATTRIB: 34342;
        readonly FRONT: 1028;
        readonly BACK: 1029;
        readonly FRONT_AND_BACK: 1032;
        readonly CULL_FACE: 2884;
        readonly BLEND: 3042;
        readonly DITHER: 3024;
        readonly STENCIL_TEST: 2960;
        readonly DEPTH_TEST: 2929;
        readonly SCISSOR_TEST: 3089;
        readonly POLYGON_OFFSET_FILL: 32823;
        readonly SAMPLE_ALPHA_TO_COVERAGE: 32926;
        readonly SAMPLE_COVERAGE: 32928;
        readonly NO_ERROR: 0;
        readonly INVALID_ENUM: 1280;
        readonly INVALID_VALUE: 1281;
        readonly INVALID_OPERATION: 1282;
        readonly OUT_OF_MEMORY: 1285;
        readonly CW: 2304;
        readonly CCW: 2305;
        readonly LINE_WIDTH: 2849;
        readonly ALIASED_POINT_SIZE_RANGE: 33901;
        readonly ALIASED_LINE_WIDTH_RANGE: 33902;
        readonly CULL_FACE_MODE: 2885;
        readonly FRONT_FACE: 2886;
        readonly DEPTH_RANGE: 2928;
        readonly DEPTH_WRITEMASK: 2930;
        readonly DEPTH_CLEAR_VALUE: 2931;
        readonly DEPTH_FUNC: 2932;
        readonly STENCIL_CLEAR_VALUE: 2961;
        readonly STENCIL_FUNC: 2962;
        readonly STENCIL_FAIL: 2964;
        readonly STENCIL_PASS_DEPTH_FAIL: 2965;
        readonly STENCIL_PASS_DEPTH_PASS: 2966;
        readonly STENCIL_REF: 2967;
        readonly STENCIL_VALUE_MASK: 2963;
        readonly STENCIL_WRITEMASK: 2968;
        readonly STENCIL_BACK_FUNC: 34816;
        readonly STENCIL_BACK_FAIL: 34817;
        readonly STENCIL_BACK_PASS_DEPTH_FAIL: 34818;
        readonly STENCIL_BACK_PASS_DEPTH_PASS: 34819;
        readonly STENCIL_BACK_REF: 36003;
        readonly STENCIL_BACK_VALUE_MASK: 36004;
        readonly STENCIL_BACK_WRITEMASK: 36005;
        readonly VIEWPORT: 2978;
        readonly SCISSOR_BOX: 3088;
        readonly COLOR_CLEAR_VALUE: 3106;
        readonly COLOR_WRITEMASK: 3107;
        readonly UNPACK_ALIGNMENT: 3317;
        readonly PACK_ALIGNMENT: 3333;
        readonly MAX_TEXTURE_SIZE: 3379;
        readonly MAX_VIEWPORT_DIMS: 3386;
        readonly SUBPIXEL_BITS: 3408;
        readonly RED_BITS: 3410;
        readonly GREEN_BITS: 3411;
        readonly BLUE_BITS: 3412;
        readonly ALPHA_BITS: 3413;
        readonly DEPTH_BITS: 3414;
        readonly STENCIL_BITS: 3415;
        readonly POLYGON_OFFSET_UNITS: 10752;
        readonly POLYGON_OFFSET_FACTOR: 32824;
        readonly TEXTURE_BINDING_2D: 32873;
        readonly SAMPLE_BUFFERS: 32936;
        readonly SAMPLES: 32937;
        readonly SAMPLE_COVERAGE_VALUE: 32938;
        readonly SAMPLE_COVERAGE_INVERT: 32939;
        readonly COMPRESSED_TEXTURE_FORMATS: 34467;
        readonly DONT_CARE: 4352;
        readonly FASTEST: 4353;
        readonly NICEST: 4354;
        readonly GENERATE_MIPMAP_HINT: 33170;
        readonly BYTE: 5120;
        readonly UNSIGNED_BYTE: 5121;
        readonly SHORT: 5122;
        readonly UNSIGNED_SHORT: 5123;
        readonly INT: 5124;
        readonly UNSIGNED_INT: 5125;
        readonly FLOAT: 5126;
        readonly DEPTH_COMPONENT: 6402;
        readonly ALPHA: 6406;
        readonly RGB: 6407;
        readonly RGBA: 6408;
        readonly LUMINANCE: 6409;
        readonly LUMINANCE_ALPHA: 6410;
        readonly UNSIGNED_SHORT_4_4_4_4: 32819;
        readonly UNSIGNED_SHORT_5_5_5_1: 32820;
        readonly UNSIGNED_SHORT_5_6_5: 33635;
        readonly FRAGMENT_SHADER: 35632;
        readonly VERTEX_SHADER: 35633;
        readonly MAX_VERTEX_ATTRIBS: 34921;
        readonly MAX_VERTEX_UNIFORM_VECTORS: 36347;
        readonly MAX_VARYING_VECTORS: 36348;
        readonly MAX_COMBINED_TEXTURE_IMAGE_UNITS: 35661;
        readonly MAX_VERTEX_TEXTURE_IMAGE_UNITS: 35660;
        readonly MAX_TEXTURE_IMAGE_UNITS: 34930;
        readonly MAX_FRAGMENT_UNIFORM_VECTORS: 36349;
        readonly SHADER_TYPE: 35663;
        readonly DELETE_STATUS: 35712;
        readonly LINK_STATUS: 35714;
        readonly VALIDATE_STATUS: 35715;
        readonly ATTACHED_SHADERS: 35717;
        readonly ACTIVE_UNIFORMS: 35718;
        readonly ACTIVE_ATTRIBUTES: 35721;
        readonly SHADING_LANGUAGE_VERSION: 35724;
        readonly CURRENT_PROGRAM: 35725;
        readonly NEVER: 512;
        readonly LESS: 513;
        readonly EQUAL: 514;
        readonly LEQUAL: 515;
        readonly GREATER: 516;
        readonly NOTEQUAL: 517;
        readonly GEQUAL: 518;
        readonly ALWAYS: 519;
        readonly KEEP: 7680;
        readonly REPLACE: 7681;
        readonly INCR: 7682;
        readonly DECR: 7683;
        readonly INVERT: 5386;
        readonly INCR_WRAP: 34055;
        readonly DECR_WRAP: 34056;
        readonly VENDOR: 7936;
        readonly RENDERER: 7937;
        readonly VERSION: 7938;
        readonly NEAREST: 9728;
        readonly LINEAR: 9729;
        readonly NEAREST_MIPMAP_NEAREST: 9984;
        readonly LINEAR_MIPMAP_NEAREST: 9985;
        readonly NEAREST_MIPMAP_LINEAR: 9986;
        readonly LINEAR_MIPMAP_LINEAR: 9987;
        readonly TEXTURE_MAG_FILTER: 10240;
        readonly TEXTURE_MIN_FILTER: 10241;
        readonly TEXTURE_WRAP_S: 10242;
        readonly TEXTURE_WRAP_T: 10243;
        readonly TEXTURE_2D: 3553;
        readonly TEXTURE: 5890;
        readonly TEXTURE_CUBE_MAP: 34067;
        readonly TEXTURE_BINDING_CUBE_MAP: 34068;
        readonly TEXTURE_CUBE_MAP_POSITIVE_X: 34069;
        readonly TEXTURE_CUBE_MAP_NEGATIVE_X: 34070;
        readonly TEXTURE_CUBE_MAP_POSITIVE_Y: 34071;
        readonly TEXTURE_CUBE_MAP_NEGATIVE_Y: 34072;
        readonly TEXTURE_CUBE_MAP_POSITIVE_Z: 34073;
        readonly TEXTURE_CUBE_MAP_NEGATIVE_Z: 34074;
        readonly MAX_CUBE_MAP_TEXTURE_SIZE: 34076;
        readonly TEXTURE0: 33984;
        readonly TEXTURE1: 33985;
        readonly TEXTURE2: 33986;
        readonly TEXTURE3: 33987;
        readonly TEXTURE4: 33988;
        readonly TEXTURE5: 33989;
        readonly TEXTURE6: 33990;
        readonly TEXTURE7: 33991;
        readonly TEXTURE8: 33992;
        readonly TEXTURE9: 33993;
        readonly TEXTURE10: 33994;
        readonly TEXTURE11: 33995;
        readonly TEXTURE12: 33996;
        readonly TEXTURE13: 33997;
        readonly TEXTURE14: 33998;
        readonly TEXTURE15: 33999;
        readonly TEXTURE16: 34000;
        readonly TEXTURE17: 34001;
        readonly TEXTURE18: 34002;
        readonly TEXTURE19: 34003;
        readonly TEXTURE20: 34004;
        readonly TEXTURE21: 34005;
        readonly TEXTURE22: 34006;
        readonly TEXTURE23: 34007;
        readonly TEXTURE24: 34008;
        readonly TEXTURE25: 34009;
        readonly TEXTURE26: 34010;
        readonly TEXTURE27: 34011;
        readonly TEXTURE28: 34012;
        readonly TEXTURE29: 34013;
        readonly TEXTURE30: 34014;
        readonly TEXTURE31: 34015;
        readonly ACTIVE_TEXTURE: 34016;
        readonly REPEAT: 10497;
        readonly CLAMP_TO_EDGE: 33071;
        readonly MIRRORED_REPEAT: 33648;
        readonly FLOAT_VEC2: 35664;
        readonly FLOAT_VEC3: 35665;
        readonly FLOAT_VEC4: 35666;
        readonly INT_VEC2: 35667;
        readonly INT_VEC3: 35668;
        readonly INT_VEC4: 35669;
        readonly BOOL: 35670;
        readonly BOOL_VEC2: 35671;
        readonly BOOL_VEC3: 35672;
        readonly BOOL_VEC4: 35673;
        readonly FLOAT_MAT2: 35674;
        readonly FLOAT_MAT3: 35675;
        readonly FLOAT_MAT4: 35676;
        readonly SAMPLER_2D: 35678;
        readonly SAMPLER_CUBE: 35680;
        readonly VERTEX_ATTRIB_ARRAY_ENABLED: 34338;
        readonly VERTEX_ATTRIB_ARRAY_SIZE: 34339;
        readonly VERTEX_ATTRIB_ARRAY_STRIDE: 34340;
        readonly VERTEX_ATTRIB_ARRAY_TYPE: 34341;
        readonly VERTEX_ATTRIB_ARRAY_NORMALIZED: 34922;
        readonly VERTEX_ATTRIB_ARRAY_POINTER: 34373;
        readonly VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: 34975;
        readonly IMPLEMENTATION_COLOR_READ_TYPE: 35738;
        readonly IMPLEMENTATION_COLOR_READ_FORMAT: 35739;
        readonly COMPILE_STATUS: 35713;
        readonly LOW_FLOAT: 36336;
        readonly MEDIUM_FLOAT: 36337;
        readonly HIGH_FLOAT: 36338;
        readonly LOW_INT: 36339;
        readonly MEDIUM_INT: 36340;
        readonly HIGH_INT: 36341;
        readonly FRAMEBUFFER: 36160;
        readonly RENDERBUFFER: 36161;
        readonly RGBA4: 32854;
        readonly RGB5_A1: 32855;
        readonly RGBA8: 32856;
        readonly RGB565: 36194;
        readonly DEPTH_COMPONENT16: 33189;
        readonly STENCIL_INDEX8: 36168;
        readonly DEPTH_STENCIL: 34041;
        readonly RENDERBUFFER_WIDTH: 36162;
        readonly RENDERBUFFER_HEIGHT: 36163;
        readonly RENDERBUFFER_INTERNAL_FORMAT: 36164;
        readonly RENDERBUFFER_RED_SIZE: 36176;
        readonly RENDERBUFFER_GREEN_SIZE: 36177;
        readonly RENDERBUFFER_BLUE_SIZE: 36178;
        readonly RENDERBUFFER_ALPHA_SIZE: 36179;
        readonly RENDERBUFFER_DEPTH_SIZE: 36180;
        readonly RENDERBUFFER_STENCIL_SIZE: 36181;
        readonly FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: 36048;
        readonly FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: 36049;
        readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: 36050;
        readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: 36051;
        readonly COLOR_ATTACHMENT0: 36064;
        readonly DEPTH_ATTACHMENT: 36096;
        readonly STENCIL_ATTACHMENT: 36128;
        readonly DEPTH_STENCIL_ATTACHMENT: 33306;
        readonly NONE: 0;
        readonly FRAMEBUFFER_COMPLETE: 36053;
        readonly FRAMEBUFFER_INCOMPLETE_ATTACHMENT: 36054;
        readonly FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: 36055;
        readonly FRAMEBUFFER_INCOMPLETE_DIMENSIONS: 36057;
        readonly FRAMEBUFFER_UNSUPPORTED: 36061;
        readonly FRAMEBUFFER_BINDING: 36006;
        readonly RENDERBUFFER_BINDING: 36007;
        readonly MAX_RENDERBUFFER_SIZE: 34024;
        readonly INVALID_FRAMEBUFFER_OPERATION: 1286;
        readonly UNPACK_FLIP_Y_WEBGL: 37440;
        readonly UNPACK_PREMULTIPLY_ALPHA_WEBGL: 37441;
        readonly CONTEXT_LOST_WEBGL: 37442;
        readonly UNPACK_COLORSPACE_CONVERSION_WEBGL: 37443;
        readonly BROWSER_DEFAULT_WEBGL: 37444;
    };
    function getNavigator(): Navigator;
    function getBaseUrl(): string;
    function getFontFaceSet(): FontFaceSet;
    function fetch(url: any, options: any): Promise<Response>;
    function parseXML(xml: any): Document;
}
declare const Buffer_base: any;
export class Buffer extends Buffer_base {
    [x: string]: any;
    /**
     * Creates a new Buffer with the given options
     * @param options - the options for the buffer
     */
    constructor(options: any);
    /**
     * emits when the underlying buffer has changed shape (i.e. resized)
     * letting the renderer know that it needs to discard the old buffer on the GPU and create a new one
     * @event change
     */
    /**
     * emits when the underlying buffer data has been updated. letting the renderer know
     * that it needs to update the buffer on the GPU
     * @event update
     */
    /**
     * emits when the buffer is destroyed. letting the renderer know that it needs to destroy the buffer on the GPU
     * @event destroy
     */
    /** a unique id for this uniform group used through the renderer */
    uid: number;
    /**
     * a resource type, used to identify how to handle it when its in a bind group / shader resource
     * @internal
     * @ignore
     */
    _resourceType: string;
    /**
     * the resource id used internally by the renderer to build bind group keys
     * @internal
     * @ignore
     */
    _resourceId: number;
    /**
     * used internally to know if a uniform group was used in the last render pass
     * @internal
     * @ignore
     */
    _touched: number;
    /**
     * @internal
     * @ignore
     */
    _updateID: number;
    /**
     * should the GPU buffer be shrunk when the data becomes smaller?
     * changing this will cause the buffer to be destroyed and a new one created on the GPU
     * this can be expensive, especially if the buffer is already big enough!
     * setting this to false will prevent the buffer from being shrunk. This will yield better performance
     * if you are constantly setting data that is changing size often.
     * @default true
     */
    shrinkToFit: any;
    /**
     * Has the buffer been destroyed?
     * @readonly
     */
    readonly destroyed: boolean;
    _data: any;
    descriptor: {
        size: any;
        usage: any;
        mappedAtCreation: boolean;
        label: any;
    };
    set data(value: any);
    /** the data in the buffer */
    get data(): any;
    set static(value: boolean);
    /** whether the buffer is static or not */
    get static(): boolean;
    /**
     * Sets the data in the buffer to the given value. This will immediately update the buffer on the GPU.
     * If you only want to update a subset of the buffer, you can pass in the size of the data.
     * @param value - the data to set
     * @param size - the size of the data in bytes
     * @param syncGPU - should the buffer be updated on the GPU immediately?
     */
    setDataWithSize(value: any, size: any, syncGPU: any): void;
    _updateSize: any;
    /**
     * updates the buffer on the GPU to reflect the data in the buffer.
     * By default it will update the entire buffer. If you only want to update a subset of the buffer,
     * you can pass in the size of the buffer to update.
     * @param sizeInBytes - the new size of the buffer in bytes
     */
    update(sizeInBytes: any): void;
    /** Destroys the buffer */
    destroy(): void;
}
declare const BufferImageSource_base: {
    new (options?: {}): {
        [x: string]: any;
        options: {};
        /** unique id for this Texture source */
        uid: number;
        /**
         * The resource type used by this TextureSource. This is used by the bind groups to determine
         * how to handle this resource.
         * @ignore
         * @internal
         */
        _resourceType: string;
        /**
         * i unique resource id, used by the bind group systems.
         * This can change if the texture is resized or its resource changes
         */
        _resourceId: number;
        /**
         * this is how the backends know how to upload this texture to the GPU
         * It changes depending on the resource type. Classes that extend TextureSource
         * should override this property.
         * @ignore
         * @internal
         */
        uploadMethodId: string;
        _resolution: any;
        /** the pixel width of this texture source. This is the REAL pure number, not accounting resolution */
        pixelWidth: any;
        /** the pixel height of this texture source. This is the REAL pure number, not accounting resolution */
        pixelHeight: any;
        /**
         * the width of this texture source, accounting for resolution
         * eg pixelWidth 200, resolution 2, then width will be 100
         */
        width: number;
        /**
         * the height of this texture source, accounting for resolution
         * eg pixelHeight 200, resolution 2, then height will be 100
         */
        height: number;
        /**
         * The number of samples of a multisample texture. This is always 1 for non-multisample textures.
         * To enable multisample for a texture, set antialias to true
         * @internal
         * @ignore
         */
        sampleCount: any;
        /** The number of mip levels to generate for this texture. this is  overridden if autoGenerateMipmaps is true */
        mipLevelCount: any;
        /**
         * Should we auto generate mipmaps for this texture? This will automatically generate mipmaps
         * for this texture when uploading to the GPU. Mipmapped textures take up more memory, but
         * can look better when scaled down.
         *
         * For performance reasons, it is recommended to NOT use this with RenderTextures, as they are often updated every frame.
         * If you do, make sure to call `updateMipmaps` after you update the texture.
         */
        autoGenerateMipmaps: any;
        /** the format that the texture data has */
        format: any;
        /** how many dimensions does this texture have? currently v8 only supports 2d */
        dimension: any;
        /**
         * Only really affects RenderTextures.
         * Should we use antialiasing for this texture. It will look better, but may impact performance as a
         * Blit operation will be required to resolve the texture.
         */
        antialias: any;
        /**
         * Used by automatic texture Garbage Collection, stores last GC tick when it was bound
         * @protected
         */
        _touched: number;
        /**
         * Used by the batcher to build texture batches. faster to have the variable here!
         * @protected
         */
        _batchTick: number;
        /**
         * A temporary batch location for the texture batching. Here for performance reasons only!
         * @protected
         */
        _textureBindLocation: number;
        label: any;
        resource: any;
        autoGarbageCollect: any;
        alphaMode: any;
        /** the style of the texture */
        style: any;
        destroyed: boolean;
        /** returns itself */
        readonly source: any;
        _style: any;
        /** setting this will set wrapModeU,wrapModeV and wrapModeW all at once! */
        addressMode: any;
        /** setting this will set wrapModeU,wrapModeV and wrapModeW all at once! */
        repeatMode: any;
        /** Specifies the sampling behavior when the sample footprint is smaller than or equal to one texel. */
        magFilter: any;
        /** Specifies the sampling behavior when the sample footprint is larger than one texel. */
        minFilter: any;
        /** Specifies behavior for sampling between mipmap levels. */
        mipmapFilter: any;
        /** Specifies the minimum and maximum levels of detail, respectively, used internally when sampling a texture. */
        lodMinClamp: any;
        /** Specifies the minimum and maximum levels of detail, respectively, used internally when sampling a texture. */
        lodMaxClamp: any;
        _onStyleChange(): void;
        /** call this if you have modified the texture outside of the constructor */
        update(): void;
        /** Destroys this texture source */
        destroy(): void;
        /**
         * This will unload the Texture source from the GPU. This will free up the GPU memory
         * As soon as it is required fore rendering, it will be re-uploaded.
         */
        unload(): void;
        /** the width of the resource. This is the REAL pure number, not accounting resolution   */
        readonly resourceWidth: any;
        /** the height of the resource. This is the REAL pure number, not accounting resolution */
        readonly resourceHeight: any;
        /**
         * the resolution of the texture. Changing this number, will not change the number of pixels in the actual texture
         * but will the size of the texture when rendered.
         *
         * changing the resolution of this texture to 2 for example will make it appear twice as small when rendered (as pixel
         * density will have increased)
         */
        resolution: any;
        /**
         * Resize the texture, this is handy if you want to use the texture as a render texture
         * @param width - the new width of the texture
         * @param height - the new height of the texture
         * @param resolution - the new resolution of the texture
         * @returns - if the texture was resized
         */
        resize(width: any, height: any, resolution: any): boolean;
        /**
         * Lets the renderer know that this texture has been updated and its mipmaps should be re-generated.
         * This is only important for RenderTexture instances, as standard Texture instances will have their
         * mipmaps generated on upload. You should call this method after you make any change to the texture
         *
         * The reason for this is is can be quite expensive to update mipmaps for a texture. So by default,
         * We want you, the developer to specify when this action should happen.
         *
         * Generally you don't want to have mipmaps generated on Render targets that are changed every frame,
         */
        updateMipmaps(): void;
        wrapMode: any;
        scaleMode: any;
        /**
         * Refresh check for isPowerOfTwo texture based on size
         * @private
         */
        _refreshPOT(): void;
        isPowerOfTwo: boolean;
    };
    [x: string]: any;
    test(_resource: any): void;
    /** The default options used when creating a new TextureSource. override these to add your own defaults */
    defaultOptions: {
        resolution: number;
        format: string;
        alphaMode: string;
        dimensions: string;
        mipLevelCount: number;
        autoGenerateMipmaps: boolean;
        sampleCount: number;
        antialias: boolean;
        autoGarbageCollect: boolean;
    };
};
export class BufferImageSource extends BufferImageSource_base {
    static test(resource: any): resource is Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array;
    constructor(options: any);
}
export namespace BufferImageSource {
    let extension_8: any;
    export { extension_8 as extension };
}
declare const BufferResource_base: any;
export class BufferResource extends BufferResource_base {
    [x: string]: any;
    /**
     * Create a new Buffer Resource.
     * @param options - The options for the buffer resource
     * @param options.buffer - The underlying buffer that this resource is using
     * @param options.offset - The offset of the buffer this resource is using.
     * If not provided, then it will use the offset of the buffer.
     * @param options.size - The size of the buffer this resource is using.
     * If not provided, then it will use the size of the buffer.
     */
    constructor({ buffer, offset, size }: {
        buffer: any;
        offset: any;
        size: any;
    });
    /**
     * emits when the underlying buffer has changed shape (i.e. resized)
     * letting the renderer know that it needs to discard the old buffer on the GPU and create a new one
     * @event change
     */
    /** a unique id for this uniform group used through the renderer */
    uid: number;
    /**
     * a resource type, used to identify how to handle it when its in a bind group / shader resource
     * @internal
     * @ignore
     */
    _resourceType: string;
    /**
     * used internally to know if a uniform group was used in the last render pass
     * @internal
     * @ignore
     */
    _touched: number;
    /**
     * the resource id used internally by the renderer to build bind group keys
     * @internal
     * @ignore
     */
    _resourceId: number;
    /**
     * A cheeky hint to the GL renderer to let it know this is a BufferResource
     * @internal
     * @ignore
     */
    _bufferResource: boolean;
    /**
     * Has the Buffer resource been destroyed?
     * @readonly
     */
    readonly destroyed: boolean;
    buffer: any;
    offset: number;
    size: any;
    onBufferChange(): void;
    /**
     * Destroys this resource. Make sure the underlying buffer is not used anywhere else
     * if you want to destroy it as well, or code will explode
     * @param destroyBuffer - Should the underlying buffer be destroyed as well?
     */
    destroy(destroyBuffer?: boolean): void;
}
export var BufferUsage: any;
export var CLEAR: any;
export const Cache: CacheClass;
export const CanvasPool: CanvasPoolClass;
export class CanvasPoolClass {
    constructor(canvasOptions: any);
    _canvasPool: any;
    canvasOptions: any;
    enableFullScreen: boolean;
    /**
     * Creates texture with params that were specified in pool constructor.
     * @param pixelWidth - Width of texture in pixels.
     * @param pixelHeight - Height of texture in pixels.
     */
    _createCanvasAndContext(pixelWidth: any, pixelHeight: any): {
        canvas: any;
        context: any;
    };
    /**
     * Gets a Power-of-Two render texture or fullScreen texture
     * @param minWidth - The minimum width of the render texture.
     * @param minHeight - The minimum height of the render texture.
     * @param resolution - The resolution of the render texture.
     * @returns The new render texture.
     */
    getOptimalCanvasAndContext(minWidth: any, minHeight: any, resolution?: number): any;
    /**
     * Place a render texture back into the pool.
     * @param canvasAndContext
     */
    returnCanvasAndContext(canvasAndContext: any): void;
    clear(): void;
}
declare const CanvasSource_base: {
    new (options?: {}): {
        [x: string]: any;
        options: {};
        /** unique id for this Texture source */
        uid: number;
        /**
         * The resource type used by this TextureSource. This is used by the bind groups to determine
         * how to handle this resource.
         * @ignore
         * @internal
         */
        _resourceType: string;
        /**
         * i unique resource id, used by the bind group systems.
         * This can change if the texture is resized or its resource changes
         */
        _resourceId: number;
        /**
         * this is how the backends know how to upload this texture to the GPU
         * It changes depending on the resource type. Classes that extend TextureSource
         * should override this property.
         * @ignore
         * @internal
         */
        uploadMethodId: string;
        _resolution: any;
        /** the pixel width of this texture source. This is the REAL pure number, not accounting resolution */
        pixelWidth: any;
        /** the pixel height of this texture source. This is the REAL pure number, not accounting resolution */
        pixelHeight: any;
        /**
         * the width of this texture source, accounting for resolution
         * eg pixelWidth 200, resolution 2, then width will be 100
         */
        width: number;
        /**
         * the height of this texture source, accounting for resolution
         * eg pixelHeight 200, resolution 2, then height will be 100
         */
        height: number;
        /**
         * The number of samples of a multisample texture. This is always 1 for non-multisample textures.
         * To enable multisample for a texture, set antialias to true
         * @internal
         * @ignore
         */
        sampleCount: any;
        /** The number of mip levels to generate for this texture. this is  overridden if autoGenerateMipmaps is true */
        mipLevelCount: any;
        /**
         * Should we auto generate mipmaps for this texture? This will automatically generate mipmaps
         * for this texture when uploading to the GPU. Mipmapped textures take up more memory, but
         * can look better when scaled down.
         *
         * For performance reasons, it is recommended to NOT use this with RenderTextures, as they are often updated every frame.
         * If you do, make sure to call `updateMipmaps` after you update the texture.
         */
        autoGenerateMipmaps: any;
        /** the format that the texture data has */
        format: any;
        /** how many dimensions does this texture have? currently v8 only supports 2d */
        dimension: any;
        /**
         * Only really affects RenderTextures.
         * Should we use antialiasing for this texture. It will look better, but may impact performance as a
         * Blit operation will be required to resolve the texture.
         */
        antialias: any;
        /**
         * Used by automatic texture Garbage Collection, stores last GC tick when it was bound
         * @protected
         */
        _touched: number;
        /**
         * Used by the batcher to build texture batches. faster to have the variable here!
         * @protected
         */
        _batchTick: number;
        /**
         * A temporary batch location for the texture batching. Here for performance reasons only!
         * @protected
         */
        _textureBindLocation: number;
        label: any;
        resource: any;
        autoGarbageCollect: any;
        alphaMode: any;
        /** the style of the texture */
        style: any;
        destroyed: boolean;
        /** returns itself */
        readonly source: any;
        _style: any;
        /** setting this will set wrapModeU,wrapModeV and wrapModeW all at once! */
        addressMode: any;
        /** setting this will set wrapModeU,wrapModeV and wrapModeW all at once! */
        repeatMode: any;
        /** Specifies the sampling behavior when the sample footprint is smaller than or equal to one texel. */
        magFilter: any;
        /** Specifies the sampling behavior when the sample footprint is larger than one texel. */
        minFilter: any;
        /** Specifies behavior for sampling between mipmap levels. */
        mipmapFilter: any;
        /** Specifies the minimum and maximum levels of detail, respectively, used internally when sampling a texture. */
        lodMinClamp: any;
        /** Specifies the minimum and maximum levels of detail, respectively, used internally when sampling a texture. */
        lodMaxClamp: any;
        _onStyleChange(): void;
        /** call this if you have modified the texture outside of the constructor */
        update(): void;
        /** Destroys this texture source */
        destroy(): void;
        /**
         * This will unload the Texture source from the GPU. This will free up the GPU memory
         * As soon as it is required fore rendering, it will be re-uploaded.
         */
        unload(): void;
        /** the width of the resource. This is the REAL pure number, not accounting resolution   */
        readonly resourceWidth: any;
        /** the height of the resource. This is the REAL pure number, not accounting resolution */
        readonly resourceHeight: any;
        /**
         * the resolution of the texture. Changing this number, will not change the number of pixels in the actual texture
         * but will the size of the texture when rendered.
         *
         * changing the resolution of this texture to 2 for example will make it appear twice as small when rendered (as pixel
         * density will have increased)
         */
        resolution: any;
        /**
         * Resize the texture, this is handy if you want to use the texture as a render texture
         * @param width - the new width of the texture
         * @param height - the new height of the texture
         * @param resolution - the new resolution of the texture
         * @returns - if the texture was resized
         */
        resize(width: any, height: any, resolution: any): boolean;
        /**
         * Lets the renderer know that this texture has been updated and its mipmaps should be re-generated.
         * This is only important for RenderTexture instances, as standard Texture instances will have their
         * mipmaps generated on upload. You should call this method after you make any change to the texture
         *
         * The reason for this is is can be quite expensive to update mipmaps for a texture. So by default,
         * We want you, the developer to specify when this action should happen.
         *
         * Generally you don't want to have mipmaps generated on Render targets that are changed every frame,
         */
        updateMipmaps(): void;
        wrapMode: any;
        scaleMode: any;
        /**
         * Refresh check for isPowerOfTwo texture based on size
         * @private
         */
        _refreshPOT(): void;
        isPowerOfTwo: boolean;
    };
    [x: string]: any;
    test(_resource: any): void;
    /** The default options used when creating a new TextureSource. override these to add your own defaults */
    defaultOptions: {
        resolution: number;
        format: string;
        alphaMode: string;
        dimensions: string;
        mipLevelCount: number;
        autoGenerateMipmaps: boolean;
        sampleCount: number;
        antialias: boolean;
        autoGarbageCollect: boolean;
    };
};
export class CanvasSource extends CanvasSource_base {
    static test(resource: any): boolean;
    constructor(options: any);
    autoDensity: any;
    transparent: boolean;
    resizeCanvas(): void;
    resize(width?: number, height?: number, resolution?: any): boolean;
}
export namespace CanvasSource {
    let extension_9: any;
    export { extension_9 as extension };
}
export let CanvasTextMetrics: {
    new (text: any, style: any, width: any, height: any, lines: any, lineWidths: any, lineHeight: any, maxLineWidth: any, fontProperties: FontMetrics): {
        text: any;
        style: any;
        width: any;
        height: any;
        lines: any;
        lineWidths: any;
        lineHeight: any;
        maxLineWidth: any;
        fontProperties: FontMetrics;
    };
    /**
     * Checking that we can use modern canvas 2D API.
     *
     * Note: This is an unstable API, Chrome < 94 use `textLetterSpacing`, later versions use `letterSpacing`.
     * @see TextMetrics.experimentalLetterSpacing
     * @see https://developer.mozilla.org/en-US/docs/Web/API/ICanvasRenderingContext2D/letterSpacing
     * @see https://developer.chrome.com/origintrials/#/view_trial/3585991203293757441
     */
    readonly experimentalLetterSpacingSupported: any;
    /**
     * Measures the supplied string of text and returns a Rectangle.
     * @param text - The text to measure.
     * @param style - The text style to use for measuring
     * @param canvas - optional specification of the canvas to use for measuring.
     * @param wordWrap
     * @returns Measured width and height of the text.
     */
    measureText(text: string, style: any, canvas?: any, wordWrap?: any): any;
    _measureText(text: any, letterSpacing: any, context: any): any;
    /**
     * Applies newlines to a string to have it optimally fit into the horizontal
     * bounds set by the Text object's wordWrapWidth property.
     * @param text - String to apply word wrapping to
     * @param style - the style to use when wrapping
     * @param canvas - optional specification of the canvas to use for measuring.
     * @returns New string with new lines applied where required
     */
    _wordWrap(text: any, style: any, canvas?: any): string;
    /**
     * Convenience function for logging each line added during the wordWrap method.
     * @param line    - The line of text to add
     * @param newLine - Add new line character to end
     * @returns A formatted line
     */
    _addLine(line: any, newLine?: boolean): any;
    /**
     * Gets & sets the widths of calculated characters in a cache object
     * @param key            - The key
     * @param letterSpacing  - The letter spacing
     * @param cache          - The cache
     * @param context        - The canvas context
     * @returns The from cache.
     */
    _getFromCache(key: any, letterSpacing: any, cache: any, context: any): any;
    /**
     * Determines whether we should collapse breaking spaces.
     * @param whiteSpace - The TextStyle property whiteSpace
     * @returns Should collapse
     */
    _collapseSpaces(whiteSpace: any): boolean;
    /**
     * Determines whether we should collapse newLine chars.
     * @param whiteSpace - The white space
     * @returns should collapse
     */
    _collapseNewlines(whiteSpace: any): boolean;
    /**
     * Trims breaking whitespaces from string.
     * @param text - The text
     * @returns Trimmed string
     */
    _trimRight(text: any): any;
    /**
     * Determines if char is a newline.
     * @param char - The character
     * @returns True if newline, False otherwise.
     */
    _isNewline(char: any): boolean;
    /**
     * Determines if char is a breaking whitespace.
     *
     * It allows one to determine whether char should be a breaking whitespace
     * For example certain characters in CJK langs or numbers.
     * It must return a boolean.
     * @param char - The character
     * @param [_nextChar] - The next character
     * @returns True if whitespace, False otherwise.
     */
    isBreakingSpace(char: any, _nextChar?: any): boolean;
    /**
     * Splits a string into words, breaking-spaces and newLine characters
     * @param text - The text
     * @returns A tokenized array
     */
    _tokenize(text: any): any[];
    /**
     * Overridable helper method used internally by TextMetrics, exposed to allow customizing the class's behavior.
     *
     * It allows one to customise which words should break
     * Examples are if the token is CJK or numbers.
     * It must return a boolean.
     * @param _token - The token
     * @param breakWords - The style attr break words
     * @returns Whether to break word or not
     */
    canBreakWords(_token: any, breakWords: any): any;
    /**
     * Overridable helper method used internally by TextMetrics, exposed to allow customizing the class's behavior.
     *
     * It allows one to determine whether a pair of characters
     * should be broken by newlines
     * For example certain characters in CJK langs or numbers.
     * It must return a boolean.
     * @param _char - The character
     * @param _nextChar - The next character
     * @param _token - The token/word the characters are from
     * @param _index - The index in the token of the char
     * @param _breakWords - The style attr break words
     * @returns whether to break word or not
     */
    canBreakChars(_char: any, _nextChar: any, _token: any, _index: any, _breakWords: any): boolean;
    /**
     * Overridable helper method used internally by TextMetrics, exposed to allow customizing the class's behavior.
     *
     * It is called when a token (usually a word) has to be split into separate pieces
     * in order to determine the point to break a word.
     * It must return an array of characters.
     * @param token - The token to split
     * @returns The characters of the token
     * @see CanvasTextMetrics.graphemeSegmenter
     */
    wordWrapSplit(token: any): any[];
    /**
     * Calculates the ascent, descent and fontSize of a given font-style
     * @param font - String representing the style of the font
     * @returns Font properties object
     */
    measureFont(font: any): any;
    /**
     * Clear font metrics in metrics cache.
     * @param {string} [font] - font name. If font name not set then clear cache for all fonts.
     */
    clearMetrics(font?: string): void;
    /**
     * Cached canvas element for measuring text
     * TODO: this should be private, but isn't because of backward compat, will fix later.
     * @ignore
     */
    readonly _canvas: any;
    /**
     * TODO: this should be private, but isn't because of backward compat, will fix later.
     * @ignore
     */
    readonly _context: any;
    /**
     * String used for calculate font metrics.
     * These characters are all tall to help calculate the height required for text.
     */
    METRICS_STRING: string;
    /** Baseline symbol for calculate font metrics. */
    BASELINE_SYMBOL: string;
    /** Baseline multiplier for calculate font metrics. */
    BASELINE_MULTIPLIER: number;
    /** Height multiplier for setting height of canvas to calculate font metrics. */
    HEIGHT_MULTIPLIER: number;
    /**
     * A Unicode "character", or "grapheme cluster", can be composed of multiple Unicode code points,
     * such as letters with diacritical marks (e.g. `'\u0065\u0301'`, letter e with acute)
     * or emojis with modifiers (e.g. `'\uD83E\uDDD1\u200D\uD83D\uDCBB'`, technologist).
     * The new `Intl.Segmenter` API in ES2022 can split the string into grapheme clusters correctly. If it is not available,
     * PixiJS will fallback to use the iterator of String, which can only spilt the string into code points.
     * If you want to get full functionality in environments that don't support `Intl.Segmenter` (such as Firefox),
     * you can use other libraries such as [grapheme-splitter]{@link https://www.npmjs.com/package/grapheme-splitter}
     * or [graphemer]{@link https://www.npmjs.com/package/graphemer} to create a polyfill. Since these libraries can be
     * relatively large in size to handle various Unicode grapheme clusters properly, PixiJS won't use them directly.
     */
    graphemeSegmenter: (s: any) => any[];
    /**
     * New rendering behavior for letter-spacing which uses Chrome's new native API. This will
     * lead to more accurate letter-spacing results because it does not try to manually draw
     * each character. However, this Chrome API is experimental and may not serve all cases yet.
     * @see TextMetrics.experimentalLetterSpacingSupported
     */
    experimentalLetterSpacing: boolean;
    /** Cache of {@see TextMetrics.FontMetrics} objects. */
    _fonts: {};
    /** Cache of new line chars. */
    _newlines: number[];
    /** Cache of breaking spaces. */
    _breakingSpaces: number[];
    _measurementCache: {};
};
export class CanvasTextPipe {
    constructor(renderer: any);
    _gpuText: any;
    _renderer: any;
    resolutionChange(): void;
    validateRenderable(text: any): boolean;
    addRenderable(text: any, _instructionSet: any): void;
    updateRenderable(text: any): void;
    destroyRenderable(text: any): void;
    _destroyRenderableById(textUid: any): void;
    _updateText(text: any): void;
    _updateGpuText(text: any): void;
    _getGpuText(text: any): any;
    initGpuText(text: any): {
        texture: any;
        currentKey: string;
        batchableSprite: any;
    };
    destroy(): void;
}
export namespace CanvasTextPipe {
    export namespace extension_10 {
        let type_6: any[];
        export { type_6 as type };
        let name_6: string;
        export { name_6 as name };
    }
    export { extension_10 as extension };
}
export class CanvasTextSystem {
    constructor(_renderer: any);
    _activeTextures: {};
    _renderer: any;
    getTextureSize(text: any, resolution: any, style: any): {
        width: number;
        height: number;
    };
    getTexture(options: any, resolution: any, style: any, _textKey: any): any;
    createTextureAndCanvas(options: any): {
        texture: any;
        canvasAndContext: any;
    };
    getManagedTexture(text: any): any;
    _increaseReferenceCount(textKey: any): void;
    decreaseReferenceCount(textKey: any): void;
    getReferenceCount(textKey: any): any;
    /**
     * Renders text to its canvas, and updates its texture.
     *
     * By default this is used internally to ensure the texture is correct before rendering,
     * but it can be used called externally, for example from this class to 'pre-generate' the texture from a piece of text,
     * and then shared across multiple Sprites.
     * @param text
     * @param style
     * @param resolution
     * @param canvasAndContext
     */
    renderTextToCanvas(text: any, style: any, resolution: any, canvasAndContext: any): void;
    /**
     * Render the text with letter-spacing.
     * @param text - The text to draw
     * @param style
     * @param canvasAndContext
     * @param x - Horizontal position to draw the text
     * @param y - Vertical position to draw the text
     * @param isStroke - Is this drawing for the outside stroke of the
     *  text? If not, it's for the inside fill
     */
    _drawLetterSpacing(text: any, style: any, canvasAndContext: any, x: any, y: any, isStroke?: boolean): void;
    destroy(): void;
}
export namespace CanvasTextSystem {
    export namespace extension_11 {
        let type_7: any[];
        export { type_7 as type };
        let name_7: string;
        export { name_7 as name };
    }
    export { extension_11 as extension };
}
export class Circle {
    /**
     * @param x - The X coordinate of the center of this circle
     * @param y - The Y coordinate of the center of this circle
     * @param radius - The radius of the circle
     */
    constructor(x?: number, y?: number, radius?: number);
    /**
     * The type of the object, mainly used to avoid `instanceof` checks
     * @default 'circle'
     */
    type: string;
    x: number;
    y: number;
    radius: number;
    /**
     * Creates a clone of this Circle instance
     * @returns A copy of the Circle
     */
    clone(): Circle;
    /**
     * Checks whether the x and y coordinates given are contained within this circle
     * @param x - The X coordinate of the point to test
     * @param y - The Y coordinate of the point to test
     * @returns Whether the x/y coordinates are within this Circle
     */
    contains(x: any, y: any): boolean;
    /**
     * Checks whether the x and y coordinates given are contained within this circle including the stroke.
     * @param x - The X coordinate of the point to test
     * @param y - The Y coordinate of the point to test
     * @param width - The width of the line to check
     * @returns Whether the x/y coordinates are within this Circle
     */
    strokeContains(x: any, y: any, width: any): boolean;
    /**
     * Returns the framing rectangle of the circle as a Rectangle object
     * @param out
     * @returns The framing rectangle
     */
    getBounds(out: any): any;
    /**
     * Copies another circle to this one.
     * @param circle - The circle to copy from.
     * @returns Returns itself.
     */
    copyFrom(circle: any): this;
    /**
     * Copies this circle to another one.
     * @param circle - The circle to copy to.
     * @returns Returns given parameter.
     */
    copyTo(circle: any): any;
    toString(): string;
}
export let Color: {
    new (value?: ColorSource): {
        _value: any;
        _components: Float32Array;
        _int: number;
        /**
         * The current color source.
         *
         * When setting:
         * - Setting to an instance of `Color` will copy its color source and components.
         * - Otherwise, `Color` will try to normalize the color source and set the components.
         *   If the color source is invalid, an `Error` will be thrown and the `Color` will left unchanged.
         *
         * Note: The `null` in the setter's parameter type is added to match the TypeScript rule: return type of getter
         * must be assignable to its setter's parameter type. Setting `value` to `null` will throw an `Error`.
         *
         * When getting:
         * - A return value of `null` means the previous value was overridden (e.g., {@link Color.multiply multiply},
         *   {@link Color.premultiply premultiply} or {@link Color.round round}).
         * - Otherwise, the color source used when setting is returned.
         */
        value: any;
        /** Get red component (0 - 1) */
        readonly red: number;
        /** Get green component (0 - 1) */
        readonly green: number;
        /** Get blue component (0 - 1) */
        readonly blue: number;
        /** Get alpha component (0 - 1) */
        readonly alpha: number;
        /**
         * Set the value, suitable for chaining
         * @param value
         * @see Color.value
         */
        setValue(value: any): any;
        /**
         * Copy a color source internally.
         * @param value - Color source
         */
        _cloneSource(value: any): any;
        /**
         * Equality check for color sources.
         * @param value1 - First color source
         * @param value2 - Second color source
         * @returns `true` if the color sources are equal, `false` otherwise.
         */
        _isSourceEqual(value1: any, value2: any): any;
        /**
         * Convert to a RGBA color object.
         * @example
         * import { Color } from 'pixi.js';
         * new Color('white').toRgb(); // returns { r: 1, g: 1, b: 1, a: 1 }
         */
        toRgba(): {
            r: any;
            g: any;
            b: any;
            a: any;
        };
        /**
         * Convert to a RGB color object.
         * @example
         * import { Color } from 'pixi.js';
         * new Color('white').toRgb(); // returns { r: 1, g: 1, b: 1 }
         */
        toRgb(): {
            r: any;
            g: any;
            b: any;
        };
        /** Convert to a CSS-style rgba string: `rgba(255,255,255,1.0)`. */
        toRgbaString(): string;
        toUint8RgbArray(out: any): any;
        _arrayRgb: any[];
        toArray(out: any): any;
        _arrayRgba: any[];
        toRgbArray(out: any): any;
        /**
         * Convert to a hexadecimal number.
         * @example
         * import { Color } from 'pixi.js';
         * new Color('white').toNumber(); // returns 16777215
         */
        toNumber(): number;
        /**
         * Convert to a BGR number
         * @example
         * import { Color } from 'pixi.js';
         * new Color(0xffcc99).toBgrNumber(); // returns 0x99ccff
         */
        toBgrNumber(): any;
        /**
         * Convert to a hexadecimal number in little endian format (e.g., BBGGRR).
         * @example
         * import { Color } from 'pixi.js';
         * new Color(0xffcc99).toLittleEndianNumber(); // returns 0x99ccff
         * @returns {number} - The color as a number in little endian format.
         */
        toLittleEndianNumber(): number;
        /**
         * Multiply with another color. This action is destructive, and will
         * override the previous `value` property to be `null`.
         * @param {ColorSource} value - The color to multiply by.
         */
        multiply(value: ColorSource): any;
        /**
         * Converts color to a premultiplied alpha format. This action is destructive, and will
         * override the previous `value` property to be `null`.
         * @param alpha - The alpha to multiply by.
         * @param {boolean} [applyToRGB=true] - Whether to premultiply RGB channels.
         * @returns {Color} - Itself.
         */
        premultiply(alpha: any, applyToRGB?: boolean): any;
        /**
         * Premultiplies alpha with current color.
         * @param {number} alpha - The alpha to multiply by.
         * @param {boolean} [applyToRGB=true] - Whether to premultiply RGB channels.
         * @returns {number} tint multiplied by alpha
         */
        toPremultiplied(alpha: number, applyToRGB?: boolean): number;
        /**
         * Convert to a hexadecimal string.
         * @example
         * import { Color } from 'pixi.js';
         * new Color('white').toHex(); // returns "#ffffff"
         */
        toHex(): string;
        /**
         * Convert to a hexadecimal string with alpha.
         * @example
         * import { Color } from 'pixi.js';
         * new Color('white').toHexa(); // returns "#ffffffff"
         */
        toHexa(): string;
        /**
         * Set alpha, suitable for chaining.
         * @param alpha
         */
        setAlpha(alpha: any): any;
        /**
         * Normalize the input value into rgba
         * @param value - Input value
         */
        _normalize(value: any): void;
        /** Refresh the internal color rgb number */
        _refreshInt(): void;
        /**
         * Clamps values to a range. Will override original values
         * @param value - Value(s) to clamp
         * @param min - Minimum value
         * @param max - Maximum value
         */
        _clamp(value: any, min?: number, max?: number): any;
    };
    /**
     * Check if the value is a color-like object
     * @param value - Value to check
     * @returns True if the value is a color-like object
     * @static
     * @example
     * import { Color } from 'pixi.js';
     * Color.isColorLike('white'); // returns true
     * Color.isColorLike(0xffffff); // returns true
     * Color.isColorLike([1, 1, 1]); // returns true
     */
    isColorLike(value: any): boolean;
    /**
     * Default Color object for static uses
     * @example
     * import { Color } from 'pixi.js';
     * Color.shared.setValue(0xffffff).toHex(); // '#ffffff'
     */
    shared: {
        _value: any;
        _components: Float32Array;
        _int: number;
        /**
         * The current color source.
         *
         * When setting:
         * - Setting to an instance of `Color` will copy its color source and components.
         * - Otherwise, `Color` will try to normalize the color source and set the components.
         *   If the color source is invalid, an `Error` will be thrown and the `Color` will left unchanged.
         *
         * Note: The `null` in the setter's parameter type is added to match the TypeScript rule: return type of getter
         * must be assignable to its setter's parameter type. Setting `value` to `null` will throw an `Error`.
         *
         * When getting:
         * - A return value of `null` means the previous value was overridden (e.g., {@link Color.multiply multiply},
         *   {@link Color.premultiply premultiply} or {@link Color.round round}).
         * - Otherwise, the color source used when setting is returned.
         */
        value: any;
        /** Get red component (0 - 1) */
        readonly red: number;
        /** Get green component (0 - 1) */
        readonly green: number;
        /** Get blue component (0 - 1) */
        readonly blue: number;
        /** Get alpha component (0 - 1) */
        readonly alpha: number;
        /**
         * Set the value, suitable for chaining
         * @param value
         * @see Color.value
         */
        setValue(value: any): any;
        /**
         * Copy a color source internally.
         * @param value - Color source
         */
        _cloneSource(value: any): any;
        /**
         * Equality check for color sources.
         * @param value1 - First color source
         * @param value2 - Second color source
         * @returns `true` if the color sources are equal, `false` otherwise.
         */
        _isSourceEqual(value1: any, value2: any): any;
        /**
         * Convert to a RGBA color object.
         * @example
         * import { Color } from 'pixi.js';
         * new Color('white').toRgb(); // returns { r: 1, g: 1, b: 1, a: 1 }
         */
        toRgba(): {
            r: any;
            g: any;
            b: any;
            a: any;
        };
        /**
         * Convert to a RGB color object.
         * @example
         * import { Color } from 'pixi.js';
         * new Color('white').toRgb(); // returns { r: 1, g: 1, b: 1 }
         */
        toRgb(): {
            r: any;
            g: any;
            b: any;
        };
        /** Convert to a CSS-style rgba string: `rgba(255,255,255,1.0)`. */
        toRgbaString(): string;
        toUint8RgbArray(out: any): any;
        _arrayRgb: any[];
        toArray(out: any): any;
        _arrayRgba: any[];
        toRgbArray(out: any): any;
        /**
         * Convert to a hexadecimal number.
         * @example
         * import { Color } from 'pixi.js';
         * new Color('white').toNumber(); // returns 16777215
         */
        toNumber(): number;
        /**
         * Convert to a BGR number
         * @example
         * import { Color } from 'pixi.js';
         * new Color(0xffcc99).toBgrNumber(); // returns 0x99ccff
         */
        toBgrNumber(): any;
        /**
         * Convert to a hexadecimal number in little endian format (e.g., BBGGRR).
         * @example
         * import { Color } from 'pixi.js';
         * new Color(0xffcc99).toLittleEndianNumber(); // returns 0x99ccff
         * @returns {number} - The color as a number in little endian format.
         */
        toLittleEndianNumber(): number;
        /**
         * Multiply with another color. This action is destructive, and will
         * override the previous `value` property to be `null`.
         * @param {ColorSource} value - The color to multiply by.
         */
        multiply(value: ColorSource): any;
        /**
         * Converts color to a premultiplied alpha format. This action is destructive, and will
         * override the previous `value` property to be `null`.
         * @param alpha - The alpha to multiply by.
         * @param {boolean} [applyToRGB=true] - Whether to premultiply RGB channels.
         * @returns {Color} - Itself.
         */
        premultiply(alpha: any, applyToRGB?: boolean): any;
        /**
         * Premultiplies alpha with current color.
         * @param {number} alpha - The alpha to multiply by.
         * @param {boolean} [applyToRGB=true] - Whether to premultiply RGB channels.
         * @returns {number} tint multiplied by alpha
         */
        toPremultiplied(alpha: number, applyToRGB?: boolean): number;
        /**
         * Convert to a hexadecimal string.
         * @example
         * import { Color } from 'pixi.js';
         * new Color('white').toHex(); // returns "#ffffff"
         */
        toHex(): string;
        /**
         * Convert to a hexadecimal string with alpha.
         * @example
         * import { Color } from 'pixi.js';
         * new Color('white').toHexa(); // returns "#ffffffff"
         */
        toHexa(): string;
        /**
         * Set alpha, suitable for chaining.
         * @param alpha
         */
        setAlpha(alpha: any): any;
        /**
         * Normalize the input value into rgba
         * @param value - Input value
         */
        _normalize(value: any): void;
        /** Refresh the internal color rgb number */
        _refreshInt(): void;
        /**
         * Clamps values to a range. Will override original values
         * @param value - Value(s) to clamp
         * @param min - Minimum value
         * @param max - Maximum value
         */
        _clamp(value: any, min?: number, max?: number): any;
    };
    /**
     * Temporary Color object for static uses internally.
     * As to not conflict with Color.shared.
     * @ignore
     */
    _temp: {
        _value: any;
        _components: Float32Array;
        _int: number;
        /**
         * The current color source.
         *
         * When setting:
         * - Setting to an instance of `Color` will copy its color source and components.
         * - Otherwise, `Color` will try to normalize the color source and set the components.
         *   If the color source is invalid, an `Error` will be thrown and the `Color` will left unchanged.
         *
         * Note: The `null` in the setter's parameter type is added to match the TypeScript rule: return type of getter
         * must be assignable to its setter's parameter type. Setting `value` to `null` will throw an `Error`.
         *
         * When getting:
         * - A return value of `null` means the previous value was overridden (e.g., {@link Color.multiply multiply},
         *   {@link Color.premultiply premultiply} or {@link Color.round round}).
         * - Otherwise, the color source used when setting is returned.
         */
        value: any;
        /** Get red component (0 - 1) */
        readonly red: number;
        /** Get green component (0 - 1) */
        readonly green: number;
        /** Get blue component (0 - 1) */
        readonly blue: number;
        /** Get alpha component (0 - 1) */
        readonly alpha: number;
        /**
         * Set the value, suitable for chaining
         * @param value
         * @see Color.value
         */
        setValue(value: any): any;
        /**
         * Copy a color source internally.
         * @param value - Color source
         */
        _cloneSource(value: any): any;
        /**
         * Equality check for color sources.
         * @param value1 - First color source
         * @param value2 - Second color source
         * @returns `true` if the color sources are equal, `false` otherwise.
         */
        _isSourceEqual(value1: any, value2: any): any;
        /**
         * Convert to a RGBA color object.
         * @example
         * import { Color } from 'pixi.js';
         * new Color('white').toRgb(); // returns { r: 1, g: 1, b: 1, a: 1 }
         */
        toRgba(): {
            r: any;
            g: any;
            b: any;
            a: any;
        };
        /**
         * Convert to a RGB color object.
         * @example
         * import { Color } from 'pixi.js';
         * new Color('white').toRgb(); // returns { r: 1, g: 1, b: 1 }
         */
        toRgb(): {
            r: any;
            g: any;
            b: any;
        };
        /** Convert to a CSS-style rgba string: `rgba(255,255,255,1.0)`. */
        toRgbaString(): string;
        toUint8RgbArray(out: any): any;
        _arrayRgb: any[];
        toArray(out: any): any;
        _arrayRgba: any[];
        toRgbArray(out: any): any;
        /**
         * Convert to a hexadecimal number.
         * @example
         * import { Color } from 'pixi.js';
         * new Color('white').toNumber(); // returns 16777215
         */
        toNumber(): number;
        /**
         * Convert to a BGR number
         * @example
         * import { Color } from 'pixi.js';
         * new Color(0xffcc99).toBgrNumber(); // returns 0x99ccff
         */
        toBgrNumber(): any;
        /**
         * Convert to a hexadecimal number in little endian format (e.g., BBGGRR).
         * @example
         * import { Color } from 'pixi.js';
         * new Color(0xffcc99).toLittleEndianNumber(); // returns 0x99ccff
         * @returns {number} - The color as a number in little endian format.
         */
        toLittleEndianNumber(): number;
        /**
         * Multiply with another color. This action is destructive, and will
         * override the previous `value` property to be `null`.
         * @param {ColorSource} value - The color to multiply by.
         */
        multiply(value: ColorSource): any;
        /**
         * Converts color to a premultiplied alpha format. This action is destructive, and will
         * override the previous `value` property to be `null`.
         * @param alpha - The alpha to multiply by.
         * @param {boolean} [applyToRGB=true] - Whether to premultiply RGB channels.
         * @returns {Color} - Itself.
         */
        premultiply(alpha: any, applyToRGB?: boolean): any;
        /**
         * Premultiplies alpha with current color.
         * @param {number} alpha - The alpha to multiply by.
         * @param {boolean} [applyToRGB=true] - Whether to premultiply RGB channels.
         * @returns {number} tint multiplied by alpha
         */
        toPremultiplied(alpha: number, applyToRGB?: boolean): number;
        /**
         * Convert to a hexadecimal string.
         * @example
         * import { Color } from 'pixi.js';
         * new Color('white').toHex(); // returns "#ffffff"
         */
        toHex(): string;
        /**
         * Convert to a hexadecimal string with alpha.
         * @example
         * import { Color } from 'pixi.js';
         * new Color('white').toHexa(); // returns "#ffffffff"
         */
        toHexa(): string;
        /**
         * Set alpha, suitable for chaining.
         * @param alpha
         */
        setAlpha(alpha: any): any;
        /**
         * Normalize the input value into rgba
         * @param value - Input value
         */
        _normalize(value: any): void;
        /** Refresh the internal color rgb number */
        _refreshInt(): void;
        /**
         * Clamps values to a range. Will override original values
         * @param value - Value(s) to clamp
         * @param min - Minimum value
         * @param max - Maximum value
         */
        _clamp(value: any, min?: number, max?: number): any;
    };
    /** Pattern for hex strings */
    HEX_PATTERN: RegExp;
};
export class ColorMask {
    static test(mask: any): mask is number;
    constructor(options: any);
    priority: number;
    pipe: string;
    init(mask: any): void;
    mask: any;
    destroy(): void;
}
export namespace ColorMask {
    let extension_12: any;
    export { extension_12 as extension };
}
export class ColorMaskPipe {
    constructor(renderer: any);
    _colorStack: any[];
    _colorStackIndex: number;
    _currentColor: number;
    _renderer: any;
    buildStart(): void;
    push(mask: any, _container: any, instructionSet: any): void;
    pop(_mask: any, _container: any, instructionSet: any): void;
    execute(instruction: any): void;
    destroy(): void;
}
export namespace ColorMaskPipe {
    export namespace extension_13 {
        let type_8: any[];
        export { type_8 as type };
        let name_8: string;
        export { name_8 as name };
    }
    export { extension_13 as extension };
}
declare const ColorMatrixFilter_base: {
    new (options: any): {
        [x: string]: any;
        /** If enabled is true the filter is applied, if false it will not. */
        enabled: boolean;
        /**
         * The gpu state the filter requires to render.
         * @internal
         * @ignore
         */
        _state: {
            data: number;
            /**
             * The blend mode to be applied when this state is set. Apply a value of `normal` to reset the blend mode.
             * Setting this mode to anything other than NO_BLEND will automatically switch blending on.
             * @default 'normal'
             */
            blendMode: any;
            /**
             * The polygon offset. Setting this property to anything other than 0 will automatically enable polygon offset fill.
             * @default 0
             */
            polygonOffset: any;
            /**
             * Activates blending of the computed fragment color values.
             * @default true
             */
            blend: boolean;
            /**
             * Enables or disables writing to the depth buffer.
             * @default true
             */
            depthMask: boolean;
            /**
             * Activates adding an offset to depth values of polygon's fragments
             * @default false
             */
            offsets: boolean;
            /** The culling settings for this state none - No culling back - Back face culling front - Front face culling */
            cullMode: "none" | "front" | "back";
            /**
             * Activates culling of polygons.
             * @default false
             */
            culling: boolean;
            /**
             * Specifies whether or not front or back-facing polygons can be culled.
             * @default false
             */
            clockwiseFrontFace: boolean;
            /**
             * Activates depth comparisons and updates to the depth buffer.
             * @default false
             */
            depthTest: boolean;
            _blendMode: any;
            _blendModeId: any;
            _polygonOffset: any;
            toString(): string;
        };
        /**
         * Get the blend mode of the filter.
         * @default "normal"
         */
        blendMode: any;
        padding: any;
        antialias: any;
        resolution: any;
        blendRequired: any;
        /**
         * Applies the filter
         * @param filterManager - The renderer to retrieve the filter from
         * @param input - The input render target.
         * @param output - The target to output to.
         * @param clearMode - Should the output be cleared before rendering to it
         */
        apply(filterManager: any, input: any, output: any, clearMode: any): void;
        /**
         * A record of the uniform groups and resources used by the shader.
         * This is used by WebGL renderer to sync uniform data.
         * @internal
         * @ignore
         */
        _uniformBindMap: any;
        _ownedBindGroups: any[];
        gpuProgram: any;
        glProgram: any;
        compatibleRenderers: any;
        groups: any;
        resources: {};
        /**
         * Sometimes a resource group will be provided later (for example global uniforms)
         * In such cases, this method can be used to let the shader know about the group.
         * @param name - the name of the resource group
         * @param groupIndex - the index of the group (should match the webGPU shader group location)
         * @param bindIndex - the index of the bind point (should match the webGPU shader bind point)
         */
        addResource(name: any, groupIndex: any, bindIndex: any): void;
        _buildResourceAccessor(groups: any, nameHash: any): {};
        /**
         * Use to destroy the shader when its not longer needed.
         * It will destroy the resources and remove listeners.
         * @param destroyPrograms - if the programs should be destroyed as well.
         * Make sure its not being used by other shaders!
         */
        destroy(destroyPrograms?: boolean): void;
    };
    /**
     * A short hand function to create a filter based of a vertex and fragment shader src.
     * @param options
     * @returns A shiny new PixiJS filter!
     */
    from(options: any): {
        [x: string]: any;
        /** If enabled is true the filter is applied, if false it will not. */
        enabled: boolean;
        /**
         * The gpu state the filter requires to render.
         * @internal
         * @ignore
         */
        _state: {
            data: number;
            /**
             * The blend mode to be applied when this state is set. Apply a value of `normal` to reset the blend mode.
             * Setting this mode to anything other than NO_BLEND will automatically switch blending on.
             * @default 'normal'
             */
            blendMode: any;
            /**
             * The polygon offset. Setting this property to anything other than 0 will automatically enable polygon offset fill.
             * @default 0
             */
            polygonOffset: any;
            /**
             * Activates blending of the computed fragment color values.
             * @default true
             */
            blend: boolean;
            /**
             * Enables or disables writing to the depth buffer.
             * @default true
             */
            depthMask: boolean;
            /**
             * Activates adding an offset to depth values of polygon's fragments
             * @default false
             */
            offsets: boolean;
            /** The culling settings for this state none - No culling back - Back face culling front - Front face culling */
            cullMode: "none" | "front" | "back";
            /**
             * Activates culling of polygons.
             * @default false
             */
            culling: boolean;
            /**
             * Specifies whether or not front or back-facing polygons can be culled.
             * @default false
             */
            clockwiseFrontFace: boolean;
            /**
             * Activates depth comparisons and updates to the depth buffer.
             * @default false
             */
            depthTest: boolean;
            _blendMode: any;
            _blendModeId: any;
            _polygonOffset: any;
            toString(): string;
        };
        /**
         * Get the blend mode of the filter.
         * @default "normal"
         */
        blendMode: any;
        padding: any;
        antialias: any;
        resolution: any;
        blendRequired: any;
        /**
         * Applies the filter
         * @param filterManager - The renderer to retrieve the filter from
         * @param input - The input render target.
         * @param output - The target to output to.
         * @param clearMode - Should the output be cleared before rendering to it
         */
        apply(filterManager: any, input: any, output: any, clearMode: any): void;
        /**
         * A record of the uniform groups and resources used by the shader.
         * This is used by WebGL renderer to sync uniform data.
         * @internal
         * @ignore
         */
        _uniformBindMap: any;
        _ownedBindGroups: any[];
        gpuProgram: any;
        glProgram: any;
        compatibleRenderers: any;
        groups: any;
        resources: {};
        /**
         * Sometimes a resource group will be provided later (for example global uniforms)
         * In such cases, this method can be used to let the shader know about the group.
         * @param name - the name of the resource group
         * @param groupIndex - the index of the group (should match the webGPU shader group location)
         * @param bindIndex - the index of the bind point (should match the webGPU shader bind point)
         */
        addResource(name: any, groupIndex: any, bindIndex: any): void;
        _buildResourceAccessor(groups: any, nameHash: any): {};
        /**
         * Use to destroy the shader when its not longer needed.
         * It will destroy the resources and remove listeners.
         * @param destroyPrograms - if the programs should be destroyed as well.
         * Make sure its not being used by other shaders!
         */
        destroy(destroyPrograms?: boolean): void;
    };
    /**
     * The default filter settings
     * @static
     */
    defaultOptions: {
        blendMode: string;
        resolution: number;
        padding: number;
        antialias: string;
        blendRequired: boolean;
    };
};
export class ColorMatrixFilter extends ColorMatrixFilter_base {
    constructor(options?: {});
    set alpha(value: any);
    /**
     * The opacity value to use when mixing the original and resultant colors.
     *
     * When the value is 0, the original color is used without modification.
     * When the value is 1, the result color is used.
     * When in the range (0, 1) the color is interpolated between the original and result by this amount.
     * @default 1
     */
    get alpha(): any;
    /**
     * Transforms current matrix and set the new one
     * @param {number[]} matrix - 5x4 matrix
     * @param multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */
    _loadMatrix(matrix: number[], multiply?: boolean): void;
    /**
     * Multiplies two mat5's
     * @private
     * @param out - 5x4 matrix the receiving matrix
     * @param a - 5x4 matrix the first operand
     * @param b - 5x4 matrix the second operand
     * @returns {number[]} 5x4 matrix
     */
    private _multiply;
    /**
     * Create a Float32 Array and normalize the offset component to 0-1
     * @param {number[]} matrix - 5x4 matrix
     * @returns {number[]} 5x4 matrix with all values between 0-1
     */
    _colorMatrix(matrix: number[]): number[];
    /**
     * Adjusts brightness
     * @param b - value of the brightness (0-1, where 0 is black)
     * @param multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */
    brightness(b: any, multiply: any): void;
    /**
     * Sets each channel on the diagonal of the color matrix.
     * This can be used to achieve a tinting effect on Containers similar to the tint field of some
     * display objects like Sprite, Text, Graphics, and Mesh.
     * @param color - Color of the tint. This is a hex value.
     * @param multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */
    tint(color: any, multiply: any): void;
    /**
     * Set the matrices in grey scales
     * @param scale - value of the grey (0-1, where 0 is black)
     * @param multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */
    greyscale(scale: any, multiply: any): void;
    /**
     * for our american friends!
     * @param scale
     * @param multiply
     */
    grayscale(scale: any, multiply: any): void;
    /**
     * Set the black and white matrice.
     * @param multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */
    blackAndWhite(multiply: any): void;
    /**
     * Set the hue property of the color
     * @param rotation - in degrees
     * @param multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */
    hue(rotation: any, multiply: any): void;
    /**
     * Set the contrast matrix, increase the separation between dark and bright
     * Increase contrast : shadows darker and highlights brighter
     * Decrease contrast : bring the shadows up and the highlights down
     * @param amount - value of the contrast (0-1)
     * @param multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */
    contrast(amount: any, multiply: any): void;
    /**
     * Set the saturation matrix, increase the separation between colors
     * Increase saturation : increase contrast, brightness, and sharpness
     * @param amount - The saturation amount (0-1)
     * @param multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */
    saturate(amount: number, multiply: any): void;
    /** Desaturate image (remove color) Call the saturate function */
    desaturate(): void;
    /**
     * Negative image (inverse of classic rgb matrix)
     * @param multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */
    negative(multiply: any): void;
    /**
     * Sepia image
     * @param multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */
    sepia(multiply: any): void;
    /**
     * Color motion picture process invented in 1916 (thanks Dominic Szablewski)
     * @param multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */
    technicolor(multiply: any): void;
    /**
     * Polaroid filter
     * @param multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */
    polaroid(multiply: any): void;
    /**
     * Filter who transforms : Red -> Blue and Blue -> Red
     * @param multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */
    toBGR(multiply: any): void;
    /**
     * Color reversal film introduced by Eastman Kodak in 1935. (thanks Dominic Szablewski)
     * @param multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */
    kodachrome(multiply: any): void;
    /**
     * Brown delicious browni filter (thanks Dominic Szablewski)
     * @param multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */
    browni(multiply: any): void;
    /**
     * Vintage filter (thanks Dominic Szablewski)
     * @param multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */
    vintage(multiply: any): void;
    /**
     * We don't know exactly what it does, kind of gradient map, but funny to play with!
     * @param desaturation - Tone values.
     * @param toned - Tone values.
     * @param lightColor - Tone values, example: `0xFFE580`
     * @param darkColor - Tone values, example: `0xFFE580`
     * @param multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */
    colorTone(desaturation: any, toned: any, lightColor: any, darkColor: any, multiply: any): void;
    /**
     * Night effect
     * @param intensity - The intensity of the night effect.
     * @param multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */
    night(intensity: any, multiply: any): void;
    /**
     * Predator effect
     *
     * Erase the current matrix by setting a new independent one
     * @param amount - how much the predator feels his future victim
     * @param multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */
    predator(amount: any, multiply: any): void;
    /**
     * LSD effect
     *
     * Multiply the current matrix
     * @param multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */
    lsd(multiply: any): void;
    /** Erase the current matrix by setting the default one. */
    reset(): void;
    set matrix(value: any);
    /**
     * The matrix of the color matrix filter
     * @member {number[]}
     * @default [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]
     */
    get matrix(): any;
}
declare const CompressedSource_base: {
    new (options?: {}): {
        [x: string]: any;
        options: {};
        /** unique id for this Texture source */
        uid: number;
        /**
         * The resource type used by this TextureSource. This is used by the bind groups to determine
         * how to handle this resource.
         * @ignore
         * @internal
         */
        _resourceType: string;
        /**
         * i unique resource id, used by the bind group systems.
         * This can change if the texture is resized or its resource changes
         */
        _resourceId: number;
        /**
         * this is how the backends know how to upload this texture to the GPU
         * It changes depending on the resource type. Classes that extend TextureSource
         * should override this property.
         * @ignore
         * @internal
         */
        uploadMethodId: string;
        _resolution: any;
        /** the pixel width of this texture source. This is the REAL pure number, not accounting resolution */
        pixelWidth: any;
        /** the pixel height of this texture source. This is the REAL pure number, not accounting resolution */
        pixelHeight: any;
        /**
         * the width of this texture source, accounting for resolution
         * eg pixelWidth 200, resolution 2, then width will be 100
         */
        width: number;
        /**
         * the height of this texture source, accounting for resolution
         * eg pixelHeight 200, resolution 2, then height will be 100
         */
        height: number;
        /**
         * The number of samples of a multisample texture. This is always 1 for non-multisample textures.
         * To enable multisample for a texture, set antialias to true
         * @internal
         * @ignore
         */
        sampleCount: any;
        /** The number of mip levels to generate for this texture. this is  overridden if autoGenerateMipmaps is true */
        mipLevelCount: any;
        /**
         * Should we auto generate mipmaps for this texture? This will automatically generate mipmaps
         * for this texture when uploading to the GPU. Mipmapped textures take up more memory, but
         * can look better when scaled down.
         *
         * For performance reasons, it is recommended to NOT use this with RenderTextures, as they are often updated every frame.
         * If you do, make sure to call `updateMipmaps` after you update the texture.
         */
        autoGenerateMipmaps: any;
        /** the format that the texture data has */
        format: any;
        /** how many dimensions does this texture have? currently v8 only supports 2d */
        dimension: any;
        /**
         * Only really affects RenderTextures.
         * Should we use antialiasing for this texture. It will look better, but may impact performance as a
         * Blit operation will be required to resolve the texture.
         */
        antialias: any;
        /**
         * Used by automatic texture Garbage Collection, stores last GC tick when it was bound
         * @protected
         */
        _touched: number;
        /**
         * Used by the batcher to build texture batches. faster to have the variable here!
         * @protected
         */
        _batchTick: number;
        /**
         * A temporary batch location for the texture batching. Here for performance reasons only!
         * @protected
         */
        _textureBindLocation: number;
        label: any;
        resource: any;
        autoGarbageCollect: any;
        alphaMode: any;
        /** the style of the texture */
        style: any;
        destroyed: boolean;
        /** returns itself */
        readonly source: any;
        _style: any;
        /** setting this will set wrapModeU,wrapModeV and wrapModeW all at once! */
        addressMode: any;
        /** setting this will set wrapModeU,wrapModeV and wrapModeW all at once! */
        repeatMode: any;
        /** Specifies the sampling behavior when the sample footprint is smaller than or equal to one texel. */
        magFilter: any;
        /** Specifies the sampling behavior when the sample footprint is larger than one texel. */
        minFilter: any;
        /** Specifies behavior for sampling between mipmap levels. */
        mipmapFilter: any;
        /** Specifies the minimum and maximum levels of detail, respectively, used internally when sampling a texture. */
        lodMinClamp: any;
        /** Specifies the minimum and maximum levels of detail, respectively, used internally when sampling a texture. */
        lodMaxClamp: any;
        _onStyleChange(): void;
        /** call this if you have modified the texture outside of the constructor */
        update(): void;
        /** Destroys this texture source */
        destroy(): void;
        /**
         * This will unload the Texture source from the GPU. This will free up the GPU memory
         * As soon as it is required fore rendering, it will be re-uploaded.
         */
        unload(): void;
        /** the width of the resource. This is the REAL pure number, not accounting resolution   */
        readonly resourceWidth: any;
        /** the height of the resource. This is the REAL pure number, not accounting resolution */
        readonly resourceHeight: any;
        /**
         * the resolution of the texture. Changing this number, will not change the number of pixels in the actual texture
         * but will the size of the texture when rendered.
         *
         * changing the resolution of this texture to 2 for example will make it appear twice as small when rendered (as pixel
         * density will have increased)
         */
        resolution: any;
        /**
         * Resize the texture, this is handy if you want to use the texture as a render texture
         * @param width - the new width of the texture
         * @param height - the new height of the texture
         * @param resolution - the new resolution of the texture
         * @returns - if the texture was resized
         */
        resize(width: any, height: any, resolution: any): boolean;
        /**
         * Lets the renderer know that this texture has been updated and its mipmaps should be re-generated.
         * This is only important for RenderTexture instances, as standard Texture instances will have their
         * mipmaps generated on upload. You should call this method after you make any change to the texture
         *
         * The reason for this is is can be quite expensive to update mipmaps for a texture. So by default,
         * We want you, the developer to specify when this action should happen.
         *
         * Generally you don't want to have mipmaps generated on Render targets that are changed every frame,
         */
        updateMipmaps(): void;
        wrapMode: any;
        scaleMode: any;
        /**
         * Refresh check for isPowerOfTwo texture based on size
         * @private
         */
        _refreshPOT(): void;
        isPowerOfTwo: boolean;
    };
    [x: string]: any;
    test(_resource: any): void;
    /** The default options used when creating a new TextureSource. override these to add your own defaults */
    defaultOptions: {
        resolution: number;
        format: string;
        alphaMode: string;
        dimensions: string;
        mipLevelCount: number;
        autoGenerateMipmaps: boolean;
        sampleCount: number;
        antialias: boolean;
        autoGarbageCollect: boolean;
    };
};
export class CompressedSource extends CompressedSource_base {
    constructor(options: any);
}
declare const Container_base: any;
export class Container extends Container_base {
    [x: string]: any;
    /**
     * Mixes all enumerable properties and methods from a source object to Container.
     * @param source - The source of properties and methods to mix in.
     */
    static mixin(source: any): void;
    constructor(options?: {});
    /** unique id for this container */
    uid: number;
    /** @private */
    private _updateFlags;
    /** @private */
    private renderGroup;
    /** @private */
    private parentRenderGroup;
    /** @private */
    private parentRenderGroupIndex;
    /** @private */
    private didChange;
    /** @private */
    private didViewUpdate;
    /** @private */
    private relativeRenderGroupDepth;
    /**
     * The array of children of this container.
     * @readonly
     */
    readonly children: any[];
    /** The display object container that contains this display object. */
    parent: any;
    /** @private */
    private includeInBuild;
    /** @private */
    private measurable;
    /** @private */
    private isSimple;
    /**
     * @internal
     * @ignore
     */
    updateTick: number;
    /**
     * Current transform of the object based on local factors: position, scale, other stuff.
     * @readonly
     */
    readonly localTransform: Matrix;
    /**
     * The relative group transform is a transform relative to the render group it belongs too. It will include all parent
     * transforms and up to the render group (think of it as kind of like a stage - but the stage can be nested).
     * If this container is is self a render group matrix will be relative to its parent render group
     * @readonly
     */
    readonly relativeGroupTransform: Matrix;
    /**
     * The group transform is a transform relative to the render group it belongs too.
     * If this container is render group then this will be an identity matrix. other wise it
     * will be the same as the relativeGroupTransform.
     * Use this value when actually rendering things to the screen
     * @readonly
     */
    readonly groupTransform: Matrix;
    /** If the object has been destroyed via destroy(). If true, it should not be used. */
    destroyed: boolean;
    /**
     * The coordinate of the object relative to the local coordinates of the parent.
     * @internal
     * @ignore
     */
    _position: ObservablePoint;
    /**
     * The scale factor of the object.
     * @internal
     * @ignore
     */
    _scale: ObservablePoint;
    /**
     * The pivot point of the container that it rotates around.
     * @internal
     * @ignore
     */
    _pivot: ObservablePoint;
    /**
     * The skew amount, on the x and y axis.
     * @internal
     * @ignore
     */
    _skew: ObservablePoint;
    /**
     * The X-coordinate value of the normalized local X axis,
     * the first column of the local transformation matrix without a scale.
     * @internal
     * @ignore
     */
    _cx: number;
    /**
     * The Y-coordinate value of the normalized local X axis,
     * the first column of the local transformation matrix without a scale.
     * @internal
     * @ignore
     */
    _sx: number;
    /**
     * The X-coordinate value of the normalized local Y axis,
     * the second column of the local transformation matrix without a scale.
     * @internal
     * @ignore
     */
    _cy: number;
    /**
     * The Y-coordinate value of the normalized local Y axis,
     * the second column of the local transformation matrix without a scale.
     * @internal
     * @ignore
     */
    _sy: number;
    /**
     * The rotation amount.
     * @internal
     * @ignore
     */
    _rotation: number;
    localColor: number;
    localAlpha: number;
    groupAlpha: number;
    groupColor: number;
    groupColorAlpha: number;
    /**
     * @internal
     * @ignore
     */
    localBlendMode: string;
    /**
     * @internal
     * @ignore
     */
    groupBlendMode: string;
    /**
     * This property holds three bits: culled, visible, renderable
     * the third bit represents culling (0 = culled, 1 = not culled) 0b100
     * the second bit represents visibility (0 = not visible, 1 = visible) 0b010
     * the first bit represents renderable (0 = not renderable, 1 = renderable) 0b001
     * @internal
     * @ignore
     */
    localDisplayStatus: number;
    /**
     * @internal
     * @ignore
     */
    globalDisplayStatus: number;
    /**
     * A value that increments each time the container is modified
     * the first 12 bits represent the container changes (eg transform, alpha, visible etc)
     * the second 12 bits represent:
     *      - for view changes (eg texture swap, geometry change etc)
     *      - containers changes (eg children added, removed etc)
     *
     *  view          container
     * [000000000000][00000000000]
     * @ignore
     */
    _didChangeId: number;
    /**
     * property that tracks if the container transform has changed
     * @ignore
     */
    _didLocalTransformChangeId: number;
    effects: any[];
    /**
     * Adds one or more children to the container.
     *
     * Multiple items can be added like so: `myContainer.addChild(thingOne, thingTwo, thingThree)`
     * @param {...Container} children - The Container(s) to add to the container
     * @returns {Container} - The first child that was added.
     */
    addChild(...children: Container[]): Container;
    sortDirty: boolean;
    /**
     * Removes one or more children from the container.
     * @param {...Container} children - The Container(s) to remove
     * @returns {Container} The first child that was removed.
     */
    removeChild(...children: Container[]): Container;
    /** @ignore */
    _onUpdate(point: any): void;
    set isRenderGroup(value: boolean);
    /**
     * Returns true if this container is a render group.
     * This means that it will be rendered as a separate pass, with its own set of instructions
     */
    get isRenderGroup(): boolean;
    /**
     * Calling this enables a render group for this container.
     * This means it will be rendered as a separate set of instructions.
     * The transform of the container will also be handled on the GPU rather than the CPU.
     */
    enableRenderGroup(): void;
    /** This will disable the render group for this container. */
    disableRenderGroup(): void;
    /** @ignore */
    _updateIsSimple(): void;
    /**
     * Current transform of the object based on world (parent) factors.
     * @readonly
     */
    readonly get worldTransform(): Matrix;
    _worldTransform: Matrix;
    set x(value: number);
    /**
     * The position of the container on the x axis relative to the local coordinates of the parent.
     * An alias to position.x
     */
    get x(): number;
    set y(value: number);
    /**
     * The position of the container on the y axis relative to the local coordinates of the parent.
     * An alias to position.y
     */
    get y(): number;
    set position(value: ObservablePoint);
    /**
     * The coordinate of the object relative to the local coordinates of the parent.
     * @since 4.0.0
     */
    get position(): ObservablePoint;
    set rotation(value: number);
    /**
     * The rotation of the object in radians.
     * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
     */
    get rotation(): number;
    set angle(value: number);
    /**
     * The angle of the object in degrees.
     * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
     */
    get angle(): number;
    set pivot(value: ObservablePoint);
    /**
     * The center of rotation, scaling, and skewing for this display object in its local space. The `position`
     * is the projection of `pivot` in the parent's local space.
     *
     * By default, the pivot is the origin (0, 0).
     * @since 4.0.0
     */
    get pivot(): ObservablePoint;
    set skew(value: ObservablePoint);
    /**
     * The skew factor for the object in radians.
     * @since 4.0.0
     */
    get skew(): ObservablePoint;
    set scale(value: ObservablePoint);
    /**
     * The scale factors of this object along the local coordinate axes.
     *
     * The default scale is (1, 1).
     * @since 4.0.0
     */
    get scale(): ObservablePoint;
    set width(value: number);
    /**
     * The width of the Container, setting this will actually modify the scale to achieve the value set.
     * @memberof scene.Container#
     */
    get width(): number;
    set height(value: number);
    /**
     * The height of the Container, setting this will actually modify the scale to achieve the value set.
     * @memberof scene.Container#
     */
    get height(): number;
    /**
     * Retrieves the size of the container as a [Size]{@link Size} object.
     * This is faster than get the width and height separately.
     * @param out - Optional object to store the size in.
     * @returns - The size of the container.
     * @memberof scene.Container#
     */
    getSize(out: any): any;
    /**
     * Sets the size of the container to the specified width and height.
     * This is faster than setting the width and height separately.
     * @param value - This can be either a number or a [Size]{@link Size} object.
     * @param height - The height to set. Defaults to the value of `width` if not provided.
     * @memberof scene.Container#
     */
    setSize(value: any, height: any): void;
    /** Called when the skew or the rotation changes. */
    _updateSkew(): void;
    /**
     * Updates the transform properties of the container (accepts partial values).
     * @param {object} opts - The options for updating the transform.
     * @param {number} opts.x - The x position of the container.
     * @param {number} opts.y - The y position of the container.
     * @param {number} opts.scaleX - The scale factor on the x-axis.
     * @param {number} opts.scaleY - The scale factor on the y-axis.
     * @param {number} opts.rotation - The rotation of the container, in radians.
     * @param {number} opts.skewX - The skew factor on the x-axis.
     * @param {number} opts.skewY - The skew factor on the y-axis.
     * @param {number} opts.pivotX - The x coordinate of the pivot point.
     * @param {number} opts.pivotY - The y coordinate of the pivot point.
     */
    updateTransform(opts: {
        x: number;
        y: number;
        scaleX: number;
        scaleY: number;
        rotation: number;
        skewX: number;
        skewY: number;
        pivotX: number;
        pivotY: number;
    }): this;
    /**
     * Updates the local transform using the given matrix.
     * @param matrix - The matrix to use for updating the transform.
     */
    setFromMatrix(matrix: any): void;
    /** Updates the local transform. */
    updateLocalTransform(): void;
    set alpha(value: number);
    /** The opacity of the object. */
    get alpha(): number;
    set tint(value: number);
    /**
     * The tint applied to the sprite. This is a hex value.
     *
     * A value of 0xFFFFFF will remove any tint effect.
     * @default 0xFFFFFF
     */
    get tint(): number;
    set blendMode(value: string);
    /**
     * The blend mode to be applied to the sprite. Apply a value of `'normal'` to reset the blend mode.
     * @default 'normal'
     */
    get blendMode(): string;
    set visible(value: boolean);
    /** The visibility of the object. If false the object will not be drawn, and the transform will not be updated. */
    get visible(): boolean;
    /** @ignore */
    set culled(value: boolean);
    /** @ignore */
    get culled(): boolean;
    set renderable(value: boolean);
    /** Can this object be rendered, if false the object will not be drawn but the transform will still be updated. */
    get renderable(): boolean;
    /** Whether or not the object should be rendered. */
    get isRenderable(): boolean;
    /**
     * Removes all internal references and listeners as well as removes children from the display list.
     * Do not use a Container after calling `destroy`.
     * @param options - Options parameter. A boolean will act as if all options
     *  have been set to that value
     * @param {boolean} [options.children=false] - if set to true, all the children will have their destroy
     *  method called as well. 'options' will be passed on to those calls.
     * @param {boolean} [options.texture=false] - Only used for children with textures e.g. Sprites. If options.children
     * is set to true it should destroy the texture of the child sprite
     * @param {boolean} [options.textureSource=false] - Only used for children with textures e.g. Sprites.
     * If options.children is set to true it should destroy the texture source of the child sprite
     * @param {boolean} [options.context=false] - Only used for children with graphicsContexts e.g. Graphics.
     * If options.children is set to true it should destroy the context of the child graphics
     */
    destroy(options?: boolean): void;
    _maskEffect: any;
    _filterEffect: any;
}
export let Culler: {
    new (): {
        /**
         * Culls the children of a specific container based on the given view. This will also cull items that are not
         * being explicitly managed by the culler.
         * @param container - The container to cull.
         * @param view - The view rectangle.
         * @param skipUpdateTransform - Whether to skip updating the transform.
         */
        cull(container: any, view: any, skipUpdateTransform?: boolean): void;
        _cullRecursive(container: any, view: any, skipUpdateTransform?: boolean): void;
    };
    /** A shared instance of the Culler class. */
    shared: {
        /**
         * Culls the children of a specific container based on the given view. This will also cull items that are not
         * being explicitly managed by the culler.
         * @param container - The container to cull.
         * @param view - The view rectangle.
         * @param skipUpdateTransform - Whether to skip updating the transform.
         */
        cull(container: any, view: any, skipUpdateTransform?: boolean): void;
        _cullRecursive(container: any, view: any, skipUpdateTransform?: boolean): void;
    };
};
export class CullerPlugin {
    static init(): void;
    static destroy(): void;
}
export namespace CullerPlugin {
    export let _renderRef: any;
    export let render: any;
    export namespace extension_14 {
        export let priority: number;
        let type_9: any;
        export { type_9 as type };
        let name_9: string;
        export { name_9 as name };
    }
    export { extension_14 as extension };
}
export class CustomRenderPipe {
    constructor(renderer: any);
    _renderer: any;
    addRenderable(container: any, instructionSet: any): void;
    execute(container: any): void;
    destroy(): void;
}
export namespace CustomRenderPipe {
    export namespace extension_15 {
        let type_10: any[];
        export { type_10 as type };
        let name_10: string;
        export { name_10 as name };
    }
    export { extension_15 as extension };
}
export var D3D10_RESOURCE_DIMENSION: any;
export var D3DFMT: any;
export const DATA_URI: RegExp;
export namespace DDS {
    export let MAGIC_VALUE: number;
    export let MAGIC_SIZE: number;
    export let HEADER_SIZE: number;
    export let HEADER_DX10_SIZE: number;
    export namespace PIXEL_FORMAT_FLAGS {
        let ALPHAPIXELS: number;
        let ALPHA: number;
        let FOURCC: number;
        let RGB: number;
        let RGBA: number;
        let YUV: number;
        let LUMINANCE: number;
        let LUMINANCEA: number;
    }
    export let RESOURCE_MISC_TEXTURECUBE: number;
    export { DDS_HEADER_FIELDS as HEADER_FIELDS };
    export { DDS_DX10_FIELDS as HEADER_DX10_FIELDS };
    export { DXGI_FORMAT };
    export { D3D10_RESOURCE_DIMENSION };
    export { D3DFMT };
}
export const DEG_TO_RAD: number;
export var DEPRECATED_SCALE_MODES: any;
export var DEPRECATED_WRAP_MODES: any;
export namespace DOMAdapter {
    /**
     * Returns the current adapter.
     * @returns {environment.Adapter} The current adapter.
     */
    function get(): environment.Adapter;
    /**
     * Sets the current adapter.
     * @param adapter - The new adapter.
     */
    function set(adapter: any): void;
}
export namespace DRAW_MODES {
    let POINTS: string;
    let LINES: string;
    let LINE_STRIP: string;
    let TRIANGLES: string;
    let TRIANGLE_STRIP: string;
}
export var DXGI_FORMAT: any;
export const DXGI_TO_TEXTURE_FORMAT: {
    70: string;
    71: string;
    72: string;
    73: string;
    74: string;
    75: string;
    76: string;
    77: string;
    78: string;
    79: string;
    80: string;
    81: string;
    82: string;
    83: string;
    84: string;
    94: string;
    95: string;
    96: string;
    97: string;
    98: string;
    99: string;
    28: string;
    29: string;
    87: string;
    91: string;
    41: string;
    49: string;
    56: string;
    61: string;
    24: string;
    11: string;
    13: string;
    10: string;
    54: string;
    34: string;
    16: string;
    2: string;
};
declare const DisplacementFilter_base: {
    new (options: any): {
        [x: string]: any;
        /** If enabled is true the filter is applied, if false it will not. */
        enabled: boolean;
        /**
         * The gpu state the filter requires to render.
         * @internal
         * @ignore
         */
        _state: {
            data: number;
            /**
             * The blend mode to be applied when this state is set. Apply a value of `normal` to reset the blend mode.
             * Setting this mode to anything other than NO_BLEND will automatically switch blending on.
             * @default 'normal'
             */
            blendMode: any;
            /**
             * The polygon offset. Setting this property to anything other than 0 will automatically enable polygon offset fill.
             * @default 0
             */
            polygonOffset: any;
            /**
             * Activates blending of the computed fragment color values.
             * @default true
             */
            blend: boolean;
            /**
             * Enables or disables writing to the depth buffer.
             * @default true
             */
            depthMask: boolean;
            /**
             * Activates adding an offset to depth values of polygon's fragments
             * @default false
             */
            offsets: boolean;
            /** The culling settings for this state none - No culling back - Back face culling front - Front face culling */
            cullMode: "none" | "front" | "back";
            /**
             * Activates culling of polygons.
             * @default false
             */
            culling: boolean;
            /**
             * Specifies whether or not front or back-facing polygons can be culled.
             * @default false
             */
            clockwiseFrontFace: boolean;
            /**
             * Activates depth comparisons and updates to the depth buffer.
             * @default false
             */
            depthTest: boolean;
            _blendMode: any;
            _blendModeId: any;
            _polygonOffset: any;
            toString(): string;
        };
        /**
         * Get the blend mode of the filter.
         * @default "normal"
         */
        blendMode: any;
        padding: any;
        antialias: any;
        resolution: any;
        blendRequired: any;
        /**
         * Applies the filter
         * @param filterManager - The renderer to retrieve the filter from
         * @param input - The input render target.
         * @param output - The target to output to.
         * @param clearMode - Should the output be cleared before rendering to it
         */
        apply(filterManager: any, input: any, output: any, clearMode: any): void;
        /**
         * A record of the uniform groups and resources used by the shader.
         * This is used by WebGL renderer to sync uniform data.
         * @internal
         * @ignore
         */
        _uniformBindMap: any;
        _ownedBindGroups: any[];
        gpuProgram: any;
        glProgram: any;
        compatibleRenderers: any;
        groups: any;
        resources: {};
        /**
         * Sometimes a resource group will be provided later (for example global uniforms)
         * In such cases, this method can be used to let the shader know about the group.
         * @param name - the name of the resource group
         * @param groupIndex - the index of the group (should match the webGPU shader group location)
         * @param bindIndex - the index of the bind point (should match the webGPU shader bind point)
         */
        addResource(name: any, groupIndex: any, bindIndex: any): void;
        _buildResourceAccessor(groups: any, nameHash: any): {};
        /**
         * Use to destroy the shader when its not longer needed.
         * It will destroy the resources and remove listeners.
         * @param destroyPrograms - if the programs should be destroyed as well.
         * Make sure its not being used by other shaders!
         */
        destroy(destroyPrograms?: boolean): void;
    };
    /**
     * A short hand function to create a filter based of a vertex and fragment shader src.
     * @param options
     * @returns A shiny new PixiJS filter!
     */
    from(options: any): {
        [x: string]: any;
        /** If enabled is true the filter is applied, if false it will not. */
        enabled: boolean;
        /**
         * The gpu state the filter requires to render.
         * @internal
         * @ignore
         */
        _state: {
            data: number;
            /**
             * The blend mode to be applied when this state is set. Apply a value of `normal` to reset the blend mode.
             * Setting this mode to anything other than NO_BLEND will automatically switch blending on.
             * @default 'normal'
             */
            blendMode: any;
            /**
             * The polygon offset. Setting this property to anything other than 0 will automatically enable polygon offset fill.
             * @default 0
             */
            polygonOffset: any;
            /**
             * Activates blending of the computed fragment color values.
             * @default true
             */
            blend: boolean;
            /**
             * Enables or disables writing to the depth buffer.
             * @default true
             */
            depthMask: boolean;
            /**
             * Activates adding an offset to depth values of polygon's fragments
             * @default false
             */
            offsets: boolean;
            /** The culling settings for this state none - No culling back - Back face culling front - Front face culling */
            cullMode: "none" | "front" | "back";
            /**
             * Activates culling of polygons.
             * @default false
             */
            culling: boolean;
            /**
             * Specifies whether or not front or back-facing polygons can be culled.
             * @default false
             */
            clockwiseFrontFace: boolean;
            /**
             * Activates depth comparisons and updates to the depth buffer.
             * @default false
             */
            depthTest: boolean;
            _blendMode: any;
            _blendModeId: any;
            _polygonOffset: any;
            toString(): string;
        };
        /**
         * Get the blend mode of the filter.
         * @default "normal"
         */
        blendMode: any;
        padding: any;
        antialias: any;
        resolution: any;
        blendRequired: any;
        /**
         * Applies the filter
         * @param filterManager - The renderer to retrieve the filter from
         * @param input - The input render target.
         * @param output - The target to output to.
         * @param clearMode - Should the output be cleared before rendering to it
         */
        apply(filterManager: any, input: any, output: any, clearMode: any): void;
        /**
         * A record of the uniform groups and resources used by the shader.
         * This is used by WebGL renderer to sync uniform data.
         * @internal
         * @ignore
         */
        _uniformBindMap: any;
        _ownedBindGroups: any[];
        gpuProgram: any;
        glProgram: any;
        compatibleRenderers: any;
        groups: any;
        resources: {};
        /**
         * Sometimes a resource group will be provided later (for example global uniforms)
         * In such cases, this method can be used to let the shader know about the group.
         * @param name - the name of the resource group
         * @param groupIndex - the index of the group (should match the webGPU shader group location)
         * @param bindIndex - the index of the bind point (should match the webGPU shader bind point)
         */
        addResource(name: any, groupIndex: any, bindIndex: any): void;
        _buildResourceAccessor(groups: any, nameHash: any): {};
        /**
         * Use to destroy the shader when its not longer needed.
         * It will destroy the resources and remove listeners.
         * @param destroyPrograms - if the programs should be destroyed as well.
         * Make sure its not being used by other shaders!
         */
        destroy(destroyPrograms?: boolean): void;
    };
    /**
     * The default filter settings
     * @static
     */
    defaultOptions: {
        blendMode: string;
        resolution: number;
        padding: number;
        antialias: string;
        blendRequired: boolean;
    };
};
export class DisplacementFilter extends DisplacementFilter_base {
    constructor(...args: any[]);
    _sprite: any;
    /** scaleX, scaleY for displacements */
    get scale(): any;
}
export let DynamicBitmapFont: {
    new (options: any): {
        [x: string]: any;
        /**
         * this is a resolution modifier for the font size..
         * texture resolution will also be used to scale texture according to its font size also
         */
        resolution: any;
        /** The pages of the font. */
        pages: any[];
        _padding: any;
        _measureCache: any;
        _currentChars: any[];
        _currentX: number;
        _currentY: number;
        _currentPageIndex: number;
        _skipKerning: any;
        _textureSize: any;
        _mipmap: any;
        applyFillAsTint: any;
        baseRenderedFontSize: any;
        _style: any;
        fontMetrics: any;
        lineHeight: any;
        ensureCharacters(chars: any): void;
        /**
         * @deprecated since 8.0.0
         * The map of base page textures (i.e., sheets of glyphs).
         */
        readonly pageTextures: any[];
        _applyKerning(newChars: any, context: any): void;
        _nextPage(): {
            canvasAndContext: any;
            texture: Texture;
        };
        _setupContext(context: any, style: any, resolution: any): void;
        _drawGlyph(context: any, metrics: any, x: any, y: any, fontScale: any, style: any): void;
        destroy(): void;
        /** The map of characters by character code. */
        chars: any;
        /**
         * The name of the font face
         * @type {string}
         */
        fontFamily: string;
        /**
         * The offset of the font face from the baseline.
         * @type {number}
         */
        baseLineOffset: number;
        /** The range and type of the distance field for this font. */
        distanceField: {
            type: string;
            range: number;
        };
        /** The size of the font face in pixels. */
        baseMeasurementFontSize: number;
        /**
         * The name of the font face.
         * @deprecated since 8.0.0 Use `fontFamily` instead.
         */
        readonly font: string;
        /**
         * The size of the font face in pixels.
         * @deprecated since 8.0.0 Use `fontMetrics.fontSize` instead.
         */
        readonly size: number;
        /**
         * The kind of distance field for this font or "none".
         * @deprecated since 8.0.0 Use `distanceField.type` instead.
         */
        readonly distanceFieldRange: number;
        /**
         * The range of the distance field in pixels.
         * @deprecated since 8.0.0 Use `distanceField.range` instead.
         */
        readonly distanceFieldType: string;
    };
    defaultOptions: {
        textureSize: number;
        style: {
            [x: string]: any;
            /**
             * Alignment for multiline text, does not affect single line text.
             * @member {'left'|'center'|'right'|'justify'}
             */
            align: any;
            _align: any;
            /** Indicates if lines can be wrapped within words, it needs wordWrap to be set to true. */
            breakWords: any;
            _breakWords: any;
            /** Set a drop shadow for the text. */
            dropShadow: any;
            _dropShadow: any;
            /** The font family, can be a single font name, or a list of names where the first is the preferred font. */
            fontFamily: any;
            _fontFamily: any;
            /** The font size (as a number it converts to px, but as a string, equivalents are '26px','20pt','160%' or '1.6em') */
            fontSize: any;
            _fontSize: any;
            /**
             * The font style.
             * @member {'normal'|'italic'|'oblique'}
             */
            fontStyle: any;
            _fontStyle: any;
            /**
             * The font variant.
             * @member {'normal'|'small-caps'}
             */
            fontVariant: any;
            _fontVariant: any;
            /**
             * The font weight.
             * @member {'normal'|'bold'|'bolder'|'lighter'|'100'|'200'|'300'|'400'|'500'|'600'|'700'|'800'|'900'}
             */
            fontWeight: any;
            _fontWeight: any;
            /** The space between lines. */
            leading: any;
            _leading: any;
            /** The amount of spacing between letters, default is 0. */
            letterSpacing: any;
            _letterSpacing: any;
            /** The line height, a number that represents the vertical space that a letter uses. */
            lineHeight: any;
            _lineHeight: any;
            /**
             * Occasionally some fonts are cropped. Adding some padding will prevent this from happening
             * by adding padding to all sides of the text.
             */
            padding: any;
            _padding: any;
            /** Trim transparent borders. This is an expensive operation so only use this if you have to! */
            trim: any;
            _trim: any;
            /**
             * The baseline of the text that is rendered.
             * @member {'alphabetic'|'top'|'hanging'|'middle'|'ideographic'|'bottom'}
             */
            textBaseline: any;
            _textBaseline: any;
            /**
             * How newlines and spaces should be handled.
             * Default is 'pre' (preserve, preserve).
             *
             *  value       | New lines     |   Spaces
             *  ---         | ---           |   ---
             * 'normal'     | Collapse      |   Collapse
             * 'pre'        | Preserve      |   Preserve
             * 'pre-line'   | Preserve      |   Collapse
             * @member {'normal'|'pre'|'pre-line'}
             */
            whiteSpace: any;
            _whiteSpace: any;
            /** Indicates if word wrap should be used. */
            wordWrap: any;
            _wordWrap: any;
            /** The width at which text will wrap, it needs wordWrap to be set to true. */
            wordWrapWidth: any;
            _wordWrapWidth: any;
            /** A fillstyle that will be used on the text e.g., 'red', '#00FF00'. */
            fill: any;
            _originalFill: any;
            _fill: any;
            /** A fillstyle that will be used on the text stroke, e.g., 'blue', '#FCFF00'. */
            stroke: any;
            _originalStroke: any;
            _stroke: any;
            _generateKey(): string;
            _styleKey: string;
            update(): void;
            /** Resets all properties to the default values */
            reset(): void;
            readonly styleKey: string;
            /**
             * Creates a new TextStyle object with the same values as this one.
             * @returns New cloned TextStyle object
             */
            clone(): any;
            /**
             * Destroys this text style.
             * @param options - Options parameter. A boolean will act as if all options
             *  have been set to that value
             * @param {boolean} [options.texture=false] - Should it destroy the texture of the this style
             * @param {boolean} [options.textureSource=false] - Should it destroy the textureSource of the this style
             */
            destroy(options?: boolean): void;
            _createProxy(value: any, cb: any): any;
            _isFillStyle(value: any): boolean;
        };
        mipmap: boolean;
    };
};
export class Ellipse {
    /**
     * @param x - The X coordinate of the center of this ellipse
     * @param y - The Y coordinate of the center of this ellipse
     * @param halfWidth - The half width of this ellipse
     * @param halfHeight - The half height of this ellipse
     */
    constructor(x?: number, y?: number, halfWidth?: number, halfHeight?: number);
    /**
     * The type of the object, mainly used to avoid `instanceof` checks
     * @default 'ellipse'
     */
    type: string;
    x: number;
    y: number;
    halfWidth: number;
    halfHeight: number;
    /**
     * Creates a clone of this Ellipse instance
     * @returns {Ellipse} A copy of the ellipse
     */
    clone(): Ellipse;
    /**
     * Checks whether the x and y coordinates given are contained within this ellipse
     * @param x - The X coordinate of the point to test
     * @param y - The Y coordinate of the point to test
     * @returns Whether the x/y coords are within this ellipse
     */
    contains(x: any, y: any): boolean;
    /**
     * Checks whether the x and y coordinates given are contained within this ellipse including stroke
     * @param x - The X coordinate of the point to test
     * @param y - The Y coordinate of the point to test
     * @param width
     * @returns Whether the x/y coords are within this ellipse
     */
    strokeContains(x: any, y: any, width: any): boolean;
    /**
     * Returns the framing rectangle of the ellipse as a Rectangle object
     * @param out
     * @returns The framing rectangle
     */
    getBounds(out: any): any;
    /**
     * Copies another ellipse to this one.
     * @param ellipse - The ellipse to copy from.
     * @returns Returns itself.
     */
    copyFrom(ellipse: any): this;
    /**
     * Copies this ellipse to another one.
     * @param ellipse - The ellipse to copy to.
     * @returns Returns given parameter.
     */
    copyTo(ellipse: any): any;
    toString(): string;
}
export class EventBoundary {
    /**
     * @param rootTarget - The holder of the event boundary.
     */
    constructor(rootTarget: any);
    /**
     * Emits events after they were dispatched into the scene graph.
     *
     * This can be used for global events listening, regardless of the scene graph being used. It should
     * not be used by interactive libraries for normal use.
     *
     * Special events that do not bubble all the way to the root target are not emitted from here,
     * e.g. pointerenter, pointerleave, click.
     */
    dispatch: any;
    /**
     * This flag would emit `pointermove`, `touchmove`, and `mousemove` events on all Containers.
     *
     * The `moveOnAll` semantics mirror those of earlier versions of PixiJS. This was disabled in favor of
     * the Pointer Event API's approach.
     */
    moveOnAll: boolean;
    /** Enables the global move events. `globalpointermove`, `globaltouchmove`, and `globalmousemove` */
    enableGlobalMoveEvents: boolean;
    /**
     * State object for mapping methods.
     * @see EventBoundary#trackingData
     */
    mappingState: {
        trackingData: {};
    };
    /**
     * The event pool maps event constructors to an free pool of instances of those specific events.
     * @see EventBoundary#allocateEvent
     * @see EventBoundary#freeEvent
     */
    eventPool: Map<any, any>;
    /** Every interactive element gathered from the scene. Only used in `pointermove` */
    _allInteractiveElements: any[];
    /** Every element that passed the hit test. Only used in `pointermove` */
    _hitElements: any[];
    /** Whether or not to collect all the interactive elements from the scene. Enabled in `pointermove` */
    _isPointerMoveEvent: boolean;
    rootTarget: any;
    /**
     * Checks whether the container or any of its children cannot pass the hit test at all.
     *
     * {@link EventBoundary}'s implementation uses the {@link Container.hitArea hitArea}
     * and {@link Container._maskEffect} for pruning.
     * @param container - The container to prune.
     * @param location - The location to test for overlap.
     */
    hitPruneFn(container: any, location: any): boolean;
    /**
     * Checks whether the container passes hit testing for the given location.
     * @param container - The container to test.
     * @param location - The location to test for overlap.
     * @returns - Whether `container` passes hit testing for `location`.
     */
    hitTestFn(container: any, location: any): any;
    /**
     * Maps the upstream `pointerdown` events to a downstream `pointerdown` event.
     *
     * `touchstart`, `rightdown`, `mousedown` events are also dispatched for specific pointer types.
     * @param from - The upstream `pointerdown` event.
     */
    mapPointerDown(from: any): void;
    /**
     * Maps the upstream `pointermove` to downstream `pointerout`, `pointerover`, and `pointermove` events, in that order.
     *
     * The tracking data for the specific pointer has an updated `overTarget`. `mouseout`, `mouseover`,
     * `mousemove`, and `touchmove` events are fired as well for specific pointer types.
     * @param from - The upstream `pointermove` event.
     */
    mapPointerMove(from: any): void;
    /**
     * Maps the upstream `pointerout` to downstream `pointerout`, `pointerleave` events, in that order.
     *
     * The tracking data for the specific pointer is cleared of a `overTarget`.
     * @param from - The upstream `pointerout` event.
     */
    mapPointerOut(from: any): void;
    /**
     * Maps the upstream `pointerover` to downstream `pointerover` and `pointerenter` events, in that order.
     *
     * The tracking data for the specific pointer gets a new `overTarget`.
     * @param from - The upstream `pointerover` event.
     */
    mapPointerOver(from: any): void;
    /**
     * Maps the upstream `pointerup` event to downstream `pointerup`, `pointerupoutside`,
     * and `click`/`rightclick`/`pointertap` events, in that order.
     *
     * The `pointerupoutside` event bubbles from the original `pointerdown` target to the most specific
     * ancestor of the `pointerdown` and `pointerup` targets, which is also the `click` event's target. `touchend`,
     * `rightup`, `mouseup`, `touchendoutside`, `rightupoutside`, `mouseupoutside`, and `tap` are fired as well for
     * specific pointer types.
     * @param from - The upstream `pointerup` event.
     */
    mapPointerUp(from: any): void;
    /**
     * Maps the upstream `pointerupoutside` event to a downstream `pointerupoutside` event, bubbling from the original
     * `pointerdown` target to `rootTarget`.
     *
     * (The most specific ancestor of the `pointerdown` event and the `pointerup` event must the
     * `{@link EventBoundary}'s root because the `pointerup` event occurred outside of the boundary.)
     *
     * `touchendoutside`, `mouseupoutside`, and `rightupoutside` events are fired as well for specific pointer
     * types. The tracking data for the specific pointer is cleared of a `pressTarget`.
     * @param from - The upstream `pointerupoutside` event.
     */
    mapPointerUpOutside(from: any): void;
    /**
     * Maps the upstream `wheel` event to a downstream `wheel` event.
     * @param from - The upstream `wheel` event.
     */
    mapWheel(from: any): void;
    mappingTable: {};
    /**
     * Adds an event mapping for the event `type` handled by `fn`.
     *
     * Event mappings can be used to implement additional or custom events. They take an event
     * coming from the upstream scene (or directly from the {@link EventSystem}) and dispatch new downstream events
     * generally trickling down and bubbling up to {@link EventBoundary.rootTarget this.rootTarget}.
     *
     * To modify the semantics of existing events, the built-in mapping methods of EventBoundary should be overridden
     * instead.
     * @param type - The type of upstream event to map.
     * @param fn - The mapping method. The context of this function must be bound manually, if desired.
     */
    addEventMapping(type: any, fn: any): void;
    /**
     * Dispatches the given event
     * @param e - The event to dispatch.
     * @param type - The type of event to dispatch. Defaults to `e.type`.
     */
    dispatchEvent(e: any, type: any): void;
    /**
     * Maps the given upstream event through the event boundary and propagates it downstream.
     * @param e - The event to map.
     */
    mapEvent(e: any): void;
    /**
     * Finds the Container that is the target of a event at the given coordinates.
     *
     * The passed (x,y) coordinates are in the world space above this event boundary.
     * @param x - The x coordinate of the event.
     * @param y - The y coordinate of the event.
     */
    hitTest(x: any, y: any): any;
    /**
     * Propagate the passed event from from {@link EventBoundary.rootTarget this.rootTarget} to its
     * target {@code e.target}.
     * @param e - The event to propagate.
     * @param type - The type of event to propagate. Defaults to `e.type`.
     */
    propagate(e: any, type: any): void;
    /**
     * Emits the event {@code e} to all interactive containers. The event is propagated in the bubbling phase always.
     *
     * This is used in the `globalpointermove` event.
     * @param e - The emitted event.
     * @param type - The listeners to notify.
     * @param targets - The targets to notify.
     */
    all(e: any, type: any, targets?: any[]): void;
    /**
     * Finds the propagation path from {@link EventBoundary.rootTarget rootTarget} to the passed
     * {@code target}. The last element in the path is {@code target}.
     * @param target - The target to find the propagation path to.
     */
    propagationPath(target: any): any[];
    hitTestMoveRecursive(currentTarget: any, eventMode: any, location: any, testFn: any, pruneFn: any, ignore?: boolean): any[];
    /**
     * Recursive implementation for {@link EventBoundary.hitTest hitTest}.
     * @param currentTarget - The Container that is to be hit tested.
     * @param eventMode - The event mode for the `currentTarget` or one of its parents.
     * @param location - The location that is being tested for overlap.
     * @param testFn - Callback that determines whether the target passes hit testing. This callback
     *  can assume that `pruneFn` failed to prune the container.
     * @param pruneFn - Callback that determiness whether the target and all of its children
     *  cannot pass the hit test. It is used as a preliminary optimization to prune entire subtrees
     *  of the scene graph.
     * @returns An array holding the hit testing target and all its ancestors in order. The first element
     *  is the target itself and the last is {@link EventBoundary.rootTarget rootTarget}. This is the opposite
     *  order w.r.t. the propagation path. If no hit testing target is found, null is returned.
     */
    hitTestRecursive(currentTarget: any, eventMode: any, location: any, testFn: any, pruneFn: any): any;
    _isInteractive(int: any): boolean;
    _interactivePrune(container: any): boolean;
    /**
     * Notify all the listeners to the event's `currentTarget`.
     *
     * If the `currentTarget` contains the property `on<type>`, then it is called here,
     * simulating the behavior from version 6.x and prior.
     * @param e - The event passed to the target.
     * @param type - The type of event to notify. Defaults to `e.type`.
     */
    notifyTarget(e: any, type: any): void;
    cursor: any;
    /**
     * Finds the most specific event-target in the given propagation path that is still mounted in the scene graph.
     *
     * This is used to find the correct `pointerup` and `pointerout` target in the case that the original `pointerdown`
     * or `pointerover` target was unmounted from the scene graph.
     * @param propagationPath - The propagation path was valid in the past.
     * @returns - The most specific event-target still mounted at the same location in the scene graph.
     */
    findMountedTarget(propagationPath: any): any;
    /**
     * Creates an event whose {@code originalEvent} is {@code from}, with an optional `type` and `target` override.
     *
     * The event is allocated using {@link EventBoundary#allocateEvent this.allocateEvent}.
     * @param from - The {@code originalEvent} for the returned event.
     * @param [type=from.type] - The type of the returned event.
     * @param target - The target of the returned event.
     */
    createPointerEvent(from: any, type?: any, target: any): any;
    /**
     * Creates a wheel event whose {@code originalEvent} is {@code from}.
     *
     * The event is allocated using {@link EventBoundary#allocateEvent this.allocateEvent}.
     * @param from - The upstream wheel event.
     */
    createWheelEvent(from: any): any;
    /**
     * Clones the event {@code from}, with an optional {@code type} override.
     *
     * The event is allocated using {@link EventBoundary#allocateEvent this.allocateEvent}.
     * @param from - The event to clone.
     * @param [type=from.type] - The type of the returned event.
     */
    clonePointerEvent(from: any, type?: any): any;
    /**
     * Copies wheel {@link FederatedWheelEvent} data from {@code from} into {@code to}.
     *
     * The following properties are copied:
     * + deltaMode
     * + deltaX
     * + deltaY
     * + deltaZ
     * @param from - The event to copy data from.
     * @param to - The event to copy data into.
     */
    copyWheelData(from: any, to: any): void;
    /**
     * Copies pointer {@link FederatedPointerEvent} data from {@code from} into {@code to}.
     *
     * The following properties are copied:
     * + pointerId
     * + width
     * + height
     * + isPrimary
     * + pointerType
     * + pressure
     * + tangentialPressure
     * + tiltX
     * + tiltY
     * @param from - The event to copy data from.
     * @param to - The event to copy data into.
     */
    copyPointerData(from: any, to: any): void;
    /**
     * Copies mouse {@link FederatedMouseEvent} data from {@code from} to {@code to}.
     *
     * The following properties are copied:
     * + altKey
     * + button
     * + buttons
     * + clientX
     * + clientY
     * + metaKey
     * + movementX
     * + movementY
     * + pageX
     * + pageY
     * + x
     * + y
     * + screen
     * + shiftKey
     * + global
     * @param from - The event to copy data from.
     * @param to - The event to copy data into.
     */
    copyMouseData(from: any, to: any): void;
    /**
     * Copies base {@link FederatedEvent} data from {@code from} into {@code to}.
     *
     * The following properties are copied:
     * + isTrusted
     * + srcElement
     * + timeStamp
     * + type
     * @param from - The event to copy data from.
     * @param to - The event to copy data into.
     */
    copyData(from: any, to: any): void;
    /**
     * @param id - The pointer ID.
     * @returns The tracking data stored for the given pointer. If no data exists, a blank
     *  state will be created.
     */
    trackingData(id: any): any;
    /**
     * Allocate a specific type of event from {@link EventBoundary#eventPool this.eventPool}.
     *
     * This allocation is constructor-agnostic, as long as it only takes one argument - this event
     * boundary.
     * @param constructor - The event's constructor.
     */
    allocateEvent(constructor: any): any;
    /**
     * Frees the event and puts it back into the event pool.
     *
     * It is illegal to reuse the event until it is allocated again, using `this.allocateEvent`.
     *
     * It is also advised that events not allocated from {@link EventBoundary#allocateEvent this.allocateEvent}
     * not be freed. This is because of the possibility that the same event is freed twice, which can cause
     * it to be allocated twice & result in overwriting.
     * @param event - The event to be freed.
     * @throws Error if the event is managed by another event boundary.
     */
    freeEvent(event: any): void;
    /**
     * Similar to {@link EventEmitter.emit}, except it stops if the `propagationImmediatelyStopped` flag
     * is set on the event.
     * @param e - The event to call each listener with.
     * @param type - The event key.
     */
    _notifyListeners(e: any, type: any): void;
}
export var EventEmitter: any;
export let EventSystem: {
    new (renderer: Renderer): {
        /** Does the device support touch events https://www.w3.org/TR/touch-events/ */
        supportsTouchEvents: boolean;
        /** Does the device support pointer events https://www.w3.org/Submission/pointer-events/ */
        supportsPointerEvents: boolean;
        /**
         * The DOM element to which the root event listeners are bound. This is automatically set to
         * the renderer's {@link Renderer#view view}.
         */
        domElement: any;
        /** The resolution used to convert between the DOM client space into world space. */
        resolution: number;
        renderer: Renderer;
        rootBoundary: EventBoundary;
        autoPreventDefault: boolean;
        _eventsAdded: boolean;
        _rootPointerEvent: FederatedPointerEvent;
        _rootWheelEvent: FederatedWheelEvent;
        cursorStyles: {
            default: string;
            pointer: string;
        };
        features: any;
        /**
         * Event handler for pointer down events on {@link EventSystem#domElement this.domElement}.
         * @param nativeEvent - The native mouse/pointer/touch event.
         */
        _onPointerDown(nativeEvent: any): void;
        /**
         * Event handler for pointer move events on on {@link EventSystem#domElement this.domElement}.
         * @param nativeEvent - The native mouse/pointer/touch events.
         */
        _onPointerMove(nativeEvent: any): void;
        /**
         * Event handler for pointer up events on {@link EventSystem#domElement this.domElement}.
         * @param nativeEvent - The native mouse/pointer/touch event.
         */
        _onPointerUp(nativeEvent: any): void;
        /**
         * Event handler for pointer over & out events on {@link EventSystem#domElement this.domElement}.
         * @param nativeEvent - The native mouse/pointer/touch event.
         */
        _onPointerOverOut(nativeEvent: any): void;
        /**
         * Passive handler for `wheel` events on {@link EventSystem.domElement this.domElement}.
         * @param nativeEvent - The native wheel event.
         */
        onWheel(nativeEvent: any): void;
        /**
         * Runner init called, view is available at this point.
         * @ignore
         */
        init(options: any): void;
        /**
         * Handle changing resolution.
         * @ignore
         */
        resolutionChange(resolution: any): void;
        /** Destroys all event listeners and detaches the renderer. */
        destroy(): void;
        _currentCursor: any;
        /**
         * Sets the current cursor mode, handling any callbacks or CSS style changes.
         * @param mode - cursor mode, a key from the cursorStyles dictionary
         */
        setCursor(mode: any): void;
        /**
         * The global pointer event.
         * Useful for getting the pointer position without listening to events.
         * @since 7.2.0
         */
        readonly pointer: FederatedPointerEvent;
        /**
         * Sets the {@link EventSystem#domElement domElement} and binds event listeners.
         *
         * To deregister the current DOM element without setting a new one, pass {@code null}.
         * @param element - The new DOM element.
         */
        setTargetElement(element: any): void;
        /** Register event listeners on {@link Renderer#domElement this.domElement}. */
        _addEvents(): void;
        /** Unregister event listeners on {@link EventSystem#domElement this.domElement}. */
        _removeEvents(): void;
        /**
         * Maps x and y coords from a DOM object and maps them correctly to the PixiJS view. The
         * resulting value is stored in the point. This takes into account the fact that the DOM
         * element could be scaled and positioned anywhere on the screen.
         * @param  {PointData} point - the point that the result will be stored in
         * @param  {number} x - the x coord of the position to map
         * @param  {number} y - the y coord of the position to map
         */
        mapPositionToPoint(point: PointData, x: number, y: number): void;
        /**
         * Ensures that the original event object contains all data that a regular pointer event would have
         * @param event - The original event data from a touch or mouse event
         * @returns An array containing a single normalized pointer event, in the case of a pointer
         *  or mouse event, or a multiple normalized pointer events if there are multiple changed touches
         */
        _normalizeToPointerData(event: any): any[];
        /**
         * Normalizes the native {@link https://w3c.github.io/uievents/#interface-wheelevent WheelEvent}.
         *
         * The returned {@link FederatedWheelEvent} is a shared instance. It will not persist across
         * multiple native wheel events.
         * @param nativeEvent - The native wheel event that occurred on the canvas.
         * @returns A federated wheel event.
         */
        normalizeWheelEvent(nativeEvent: any): FederatedWheelEvent;
        /**
         * Normalizes the `nativeEvent` into a federateed {@link FederatedPointerEvent}.
         * @param event
         * @param nativeEvent
         */
        _bootstrapEvent(event: any, nativeEvent: any): any;
        /**
         * Transfers base & mouse event data from the {@code nativeEvent} to the federated event.
         * @param event
         * @param nativeEvent
         */
        _transferMouseData(event: any, nativeEvent: any): void;
    };
    /**
     * The default interaction mode for all display objects.
     * @see Container.eventMode
     * @type {EventMode}
     * @readonly
     * @since 7.2.0
     */
    readonly defaultEventMode: EventMode;
    /** @ignore */
    extension: {
        name: string;
        type: any[];
        priority: number;
    };
    /**
     * The event features that are enabled by the EventSystem
     * (included in the **pixi.js** and **pixi.js-legacy** bundle), otherwise it will be ignored.
     * @since 7.2.0
     */
    defaultEventFeatures: {
        /** Enables pointer events associated with pointer movement. */
        move: boolean;
        /** Enables global pointer move events. */
        globalMove: boolean;
        /** Enables pointer events associated with clicking. */
        click: boolean;
        /** Enables wheel events. */
        wheel: boolean;
    };
};
export const EventsTicker: EventsTickerClass;
export var ExtensionType: any;
export let ExtractSystem: {
    new (renderer: any): {
        _renderer: any;
        _normalizeOptions(options: any, defaults?: {}): any;
        /**
         * Will return a HTML Image of the target
         * @param options - The options for creating the image, or the target to extract
         * @returns - HTML Image of the target
         */
        image(options: any): Promise<HTMLImageElement>;
        /**
         * Will return a base64 encoded string of this target. It works by calling
         * `Extract.canvas` and then running toDataURL on that.
         * @param options - The options for creating the image, or the target to extract
         */
        base64(options: any): Promise<any>;
        /**
         * Creates a Canvas element, renders this target to it and then returns it.
         * @param options - The options for creating the canvas, or the target to extract
         * @returns - A Canvas element with the texture rendered on.
         */
        canvas(options: any): any;
        /**
         * Will return a one-dimensional array containing the pixel data of the entire texture in RGBA
         * order, with integer values between 0 and 255 (included).
         * @param options - The options for extracting the image, or the target to extract
         * @returns - One-dimensional array containing the pixel data of the entire texture
         */
        pixels(options: any): any;
        /**
         * Will return a texture of the target
         * @param options - The options for creating the texture, or the target to extract
         * @returns - A texture of the target
         */
        texture(options: any): any;
        /**
         * Will extract a HTMLImage of the target and download it
         * @param options - The options for downloading and extracting the image, or the target to extract
         */
        download(options: any): void;
        /**
         * Logs the target to the console as an image. This is a useful way to debug what's happening in the renderer.
         * @param options - The options for logging the image, or the target to log
         */
        log(options: any): void;
        destroy(): void;
    };
    /** @ignore */
    extension: {
        type: any[];
        name: string;
    };
    /** Default options for creating an image. */
    defaultImageOptions: {
        /** The format of the image. */
        format: string;
        /** The quality of the image. */
        quality: number;
    };
};
export const FOURCC_TO_TEXTURE_FORMAT: {
    [x: number]: string;
    36: string;
    110: string;
    111: string;
    112: string;
    113: string;
    114: string;
    115: string;
    116: string;
};
export namespace FederatedContainer {
    let onclick: any;
    let onmousedown: any;
    let onmouseenter: any;
    let onmouseleave: any;
    let onmousemove: any;
    let onglobalmousemove: any;
    let onmouseout: any;
    let onmouseover: any;
    let onmouseup: any;
    let onmouseupoutside: any;
    let onpointercancel: any;
    let onpointerdown: any;
    let onpointerenter: any;
    let onpointerleave: any;
    let onpointermove: any;
    let onglobalpointermove: any;
    let onpointerout: any;
    let onpointerover: any;
    let onpointertap: any;
    let onpointerup: any;
    let onpointerupoutside: any;
    let onrightclick: any;
    let onrightdown: any;
    let onrightup: any;
    let onrightupoutside: any;
    let ontap: any;
    let ontouchcancel: any;
    let ontouchend: any;
    let ontouchendoutside: any;
    let ontouchmove: any;
    let onglobaltouchmove: any;
    let ontouchstart: any;
    let onwheel: any;
    let interactive: boolean;
    let _internalEventMode: any;
    let eventMode: any;
    /**
     * Determines if the container is interactive or not
     * @returns {boolean} Whether the container is interactive or not
     * @memberof scene.Container#
     * @since 7.2.0
     * @example
     * import { Sprite } from 'pixi.js';
     *
     * const sprite = new Sprite(texture);
     * sprite.eventMode = 'static';
     * sprite.isInteractive(); // true
     *
     * sprite.eventMode = 'dynamic';
     * sprite.isInteractive(); // true
     *
     * sprite.eventMode = 'none';
     * sprite.isInteractive(); // false
     *
     * sprite.eventMode = 'passive';
     * sprite.isInteractive(); // false
     *
     * sprite.eventMode = 'auto';
     * sprite.isInteractive(); // false
     */
    function isInteractive(): boolean;
    let interactiveChildren: boolean;
    let hitArea: any;
    /**
     * Unlike `on` or `addListener` which are methods from EventEmitter, `addEventListener`
     * seeks to be compatible with the DOM's `addEventListener` with support for options.
     * @memberof scene.Container
     * @param type - The type of event to listen to.
     * @param listener - The listener callback or object.
     * @param options - Listener options, used for capture phase.
     * @example
     * // Tell the user whether they did a single, double, triple, or nth click.
     * button.addEventListener('click', {
     *     handleEvent(e): {
     *         let prefix;
     *
     *         switch (e.detail) {
     *             case 1: prefix = 'single'; break;
     *             case 2: prefix = 'double'; break;
     *             case 3: prefix = 'triple'; break;
     *             default: prefix = e.detail + 'th'; break;
     *         }
     *
     *         console.log('That was a ' + prefix + 'click');
     *     }
     * });
     *
     * // But skip the first click!
     * button.parent.addEventListener('click', function blockClickOnce(e) {
     *     e.stopImmediatePropagation();
     *     button.parent.removeEventListener('click', blockClickOnce, true);
     * }, {
     *     capture: true,
     * });
     */
    function addEventListener(type: any, listener: any, options: any): void;
    /**
     * Unlike `off` or `removeListener` which are methods from EventEmitter, `removeEventListener`
     * seeks to be compatible with the DOM's `removeEventListener` with support for options.
     * @memberof scene.Container
     * @param type - The type of event the listener is bound to.
     * @param listener - The listener callback or object.
     * @param options - The original listener options. This is required to deregister a capture phase listener.
     */
    function removeEventListener(type: any, listener: any, options: any): void;
    /**
     * Dispatch the event on this {@link Container} using the event's {@link EventBoundary}.
     *
     * The target of the event is set to `this` and the `defaultPrevented` flag is cleared before dispatch.
     * @memberof scene.Container
     * @param e - The event to dispatch.
     * @returns Whether the {@link FederatedEvent.preventDefault preventDefault}() method was not invoked.
     * @example
     * // Reuse a click event!
     * button.dispatchEvent(clickEvent);
     */
    function dispatchEvent(e: any): boolean;
}
export class FederatedEvent {
    /**
     * @param manager - The event boundary which manages this event. Propagation can only occur
     *  within the boundary's jurisdiction.
     */
    constructor(manager: any);
    /** Flags whether this event bubbles. This will take effect only if it is set before propagation. */
    bubbles: boolean;
    /** @deprecated since 7.0.0 */
    cancelBubble: boolean;
    /**
     * Flags whether this event can be canceled using {@link FederatedEvent.preventDefault}. This is always
     * false (for now).
     */
    cancelable: boolean;
    /**
     * Flag added for compatibility with DOM {@code Event}. It is not used in the Federated Events
     * API.
     * @see https://dom.spec.whatwg.org/#dom-event-composed
     */
    composed: boolean;
    /** Flags whether the default response of the user agent was prevent through this event. */
    defaultPrevented: boolean;
    /**
     * The propagation phase.
     * @default {@link FederatedEvent.NONE}
     */
    eventPhase: any;
    /** Flags whether propagation was stopped. */
    propagationStopped: boolean;
    /** Flags whether propagation was immediately stopped. */
    propagationImmediatelyStopped: boolean;
    /** The coordinates of the event relative to the nearest DOM layer. This is a non-standard property. */
    layer: Point;
    /** The coordinates of the event relative to the DOM document. This is a non-standard property. */
    page: Point;
    NONE: number;
    CAPTURING_PHASE: number;
    AT_TARGET: number;
    BUBBLING_PHASE: number;
    manager: any;
    /** @readonly */
    readonly get layerX(): number;
    /** @readonly */
    readonly get layerY(): number;
    /** @readonly */
    readonly get pageX(): number;
    /** @readonly */
    readonly get pageY(): number;
    /**
     * Fallback for the deprecated @code{InteractionEvent.data}.
     * @deprecated since 7.0.0
     */
    get data(): this;
    /** The propagation path for this event. Alias for {@link EventBoundary.propagationPath}. */
    composedPath(): any;
    path: any;
    /**
     * Unimplemented method included for implementing the DOM interface {@code Event}. It will throw an {@code Error}.
     * @deprecated
     * @param _type
     * @param _bubbles
     * @param _cancelable
     */
    initEvent(_type: any, _bubbles: any, _cancelable: any): void;
    /**
     * Unimplemented method included for implementing the DOM interface {@code UIEvent}. It will throw an {@code Error}.
     * @deprecated
     * @param _typeArg
     * @param _bubblesArg
     * @param _cancelableArg
     * @param _viewArg
     * @param _detailArg
     */
    initUIEvent(_typeArg: any, _bubblesArg: any, _cancelableArg: any, _viewArg: any, _detailArg: any): void;
    /** Prevent default behavior of PixiJS and the user agent. */
    preventDefault(): void;
    /**
     * Stop this event from propagating to any addition listeners, including on the
     * {@link FederatedEventTarget.currentTarget currentTarget} and also the following
     * event targets on the propagation path.
     */
    stopImmediatePropagation(): void;
    /**
     * Stop this event from propagating to the next {@link FederatedEventTarget}. The rest of the listeners
     * on the {@link FederatedEventTarget.currentTarget currentTarget} will still be notified.
     */
    stopPropagation(): void;
}
export class FederatedMouseEvent extends FederatedEvent {
    constructor(...args: any[]);
    /** The coordinates of the mouse event relative to the canvas. */
    client: Point;
    /** The movement in this pointer relative to the last `mousemove` event. */
    movement: Point;
    /** The offset of the pointer coordinates w.r.t. target Container in world space. This is not supported at the moment. */
    offset: Point;
    /** The pointer coordinates in world space. */
    global: Point;
    /**
     * The pointer coordinates in the renderer's {@link Renderer.screen screen}. This has slightly
     * different semantics than native PointerEvent screenX/screenY.
     */
    screen: Point;
    /** @readonly */
    readonly get clientX(): number;
    /** @readonly */
    readonly get clientY(): number;
    /**
     * Alias for {@link FederatedMouseEvent.clientX this.clientX}.
     * @readonly
     */
    readonly get x(): number;
    /**
     * Alias for {@link FederatedMouseEvent.clientY this.clientY}.
     * @readonly
     */
    readonly get y(): number;
    /** @readonly */
    readonly get movementX(): number;
    /** @readonly */
    readonly get movementY(): number;
    /** @readonly */
    readonly get offsetX(): number;
    /** @readonly */
    readonly get offsetY(): number;
    /** @readonly */
    readonly get globalX(): number;
    /** @readonly */
    readonly get globalY(): number;
    /**
     * The pointer coordinates in the renderer's screen. Alias for {@code screen.x}.
     * @readonly
     */
    readonly get screenX(): number;
    /**
     * The pointer coordinates in the renderer's screen. Alias for {@code screen.y}.
     * @readonly
     */
    readonly get screenY(): number;
    /**
     * This will return the local coordinates of the specified container for this InteractionData
     * @param {Container} container - The Container that you would like the local
     *  coords off
     * @param {PointData} point - A Point object in which to store the value, optional (otherwise
     *  will create a new point)
     * @param {PointData} globalPos - A Point object containing your custom global coords, optional
     *  (otherwise will use the current global coords)
     * @returns - A point containing the coordinates of the InteractionData position relative
     *  to the Container
     */
    getLocalPosition(container: Container, point: PointData, globalPos: PointData): Point;
    /**
     * Whether the modifier key was pressed when this event natively occurred.
     * @param key - The modifier key.
     */
    getModifierState(key: any): any;
    /**
     * Not supported.
     * @param _typeArg
     * @param _canBubbleArg
     * @param _cancelableArg
     * @param _viewArg
     * @param _detailArg
     * @param _screenXArg
     * @param _screenYArg
     * @param _clientXArg
     * @param _clientYArg
     * @param _ctrlKeyArg
     * @param _altKeyArg
     * @param _shiftKeyArg
     * @param _metaKeyArg
     * @param _buttonArg
     * @param _relatedTargetArg
     * @deprecated since 7.0.0
     */
    initMouseEvent(_typeArg: any, _canBubbleArg: any, _cancelableArg: any, _viewArg: any, _detailArg: any, _screenXArg: any, _screenYArg: any, _clientXArg: any, _clientYArg: any, _ctrlKeyArg: any, _altKeyArg: any, _shiftKeyArg: any, _metaKeyArg: any, _buttonArg: any, _relatedTargetArg: any): void;
}
export class FederatedPointerEvent extends FederatedMouseEvent {
    /**
     * The width of the pointer's contact along the x-axis, measured in CSS pixels.
     * radiusX of TouchEvents will be represented by this value.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/width
     */
    width: number;
    /**
     * The height of the pointer's contact along the y-axis, measured in CSS pixels.
     * radiusY of TouchEvents will be represented by this value.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/height
     */
    height: number;
    /**
     * Indicates whether or not the pointer device that created the event is the primary pointer.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/isPrimary
     */
    isPrimary: boolean;
    getCoalescedEvents(): this[];
    getPredictedEvents(): void;
}
export class FederatedWheelEvent extends FederatedMouseEvent {
    /** Units specified in pixels. */
    DOM_DELTA_PIXEL: number;
    /** Units specified in lines. */
    DOM_DELTA_LINE: number;
    /** Units specified in pages. */
    DOM_DELTA_PAGE: number;
}
export namespace FederatedWheelEvent {
    let DOM_DELTA_PIXEL: number;
    let DOM_DELTA_LINE: number;
    let DOM_DELTA_PAGE: number;
}
export let FillGradient: {
    new (x0: any, y0: any, x1: any, y1: any): {
        /** unique id for this fill gradient */
        uid: number;
        type: string;
        gradientStops: any[];
        _styleKey: any;
        x0: any;
        y0: any;
        x1: any;
        y1: any;
        addColorStop(offset: any, color: any): any;
        buildLinearGradient(): void;
        texture: Texture;
        transform: Matrix;
        readonly styleKey: any;
    };
    defaultTextureSize: number;
};
export class FillPattern {
    constructor(texture: any, repetition: any);
    /** unique id for this fill pattern */
    uid: number;
    transform: Matrix;
    _styleKey: string;
    texture: any;
    setTransform(transform: any): void;
    get styleKey(): string;
}
export let Filter: {
    new (options: any): {
        [x: string]: any;
        /** If enabled is true the filter is applied, if false it will not. */
        enabled: boolean;
        /**
         * The gpu state the filter requires to render.
         * @internal
         * @ignore
         */
        _state: {
            data: number;
            /**
             * The blend mode to be applied when this state is set. Apply a value of `normal` to reset the blend mode.
             * Setting this mode to anything other than NO_BLEND will automatically switch blending on.
             * @default 'normal'
             */
            blendMode: any;
            /**
             * The polygon offset. Setting this property to anything other than 0 will automatically enable polygon offset fill.
             * @default 0
             */
            polygonOffset: any;
            /**
             * Activates blending of the computed fragment color values.
             * @default true
             */
            blend: boolean;
            /**
             * Enables or disables writing to the depth buffer.
             * @default true
             */
            depthMask: boolean;
            /**
             * Activates adding an offset to depth values of polygon's fragments
             * @default false
             */
            offsets: boolean;
            /** The culling settings for this state none - No culling back - Back face culling front - Front face culling */
            cullMode: "none" | "front" | "back";
            /**
             * Activates culling of polygons.
             * @default false
             */
            culling: boolean;
            /**
             * Specifies whether or not front or back-facing polygons can be culled.
             * @default false
             */
            clockwiseFrontFace: boolean;
            /**
             * Activates depth comparisons and updates to the depth buffer.
             * @default false
             */
            depthTest: boolean;
            _blendMode: any;
            _blendModeId: any;
            _polygonOffset: any;
            toString(): string;
        };
        /**
         * Get the blend mode of the filter.
         * @default "normal"
         */
        blendMode: any;
        padding: any;
        antialias: any;
        resolution: any;
        blendRequired: any;
        /**
         * Applies the filter
         * @param filterManager - The renderer to retrieve the filter from
         * @param input - The input render target.
         * @param output - The target to output to.
         * @param clearMode - Should the output be cleared before rendering to it
         */
        apply(filterManager: any, input: any, output: any, clearMode: any): void;
        /**
         * A record of the uniform groups and resources used by the shader.
         * This is used by WebGL renderer to sync uniform data.
         * @internal
         * @ignore
         */
        _uniformBindMap: any;
        _ownedBindGroups: any[];
        gpuProgram: any;
        glProgram: any;
        compatibleRenderers: any;
        groups: any;
        resources: {};
        /**
         * Sometimes a resource group will be provided later (for example global uniforms)
         * In such cases, this method can be used to let the shader know about the group.
         * @param name - the name of the resource group
         * @param groupIndex - the index of the group (should match the webGPU shader group location)
         * @param bindIndex - the index of the bind point (should match the webGPU shader bind point)
         */
        addResource(name: any, groupIndex: any, bindIndex: any): void;
        _buildResourceAccessor(groups: any, nameHash: any): {};
        /**
         * Use to destroy the shader when its not longer needed.
         * It will destroy the resources and remove listeners.
         * @param destroyPrograms - if the programs should be destroyed as well.
         * Make sure its not being used by other shaders!
         */
        destroy(destroyPrograms?: boolean): void;
    };
    /**
     * A short hand function to create a filter based of a vertex and fragment shader src.
     * @param options
     * @returns A shiny new PixiJS filter!
     */
    from(options: any): {
        [x: string]: any;
        /** If enabled is true the filter is applied, if false it will not. */
        enabled: boolean;
        /**
         * The gpu state the filter requires to render.
         * @internal
         * @ignore
         */
        _state: {
            data: number;
            /**
             * The blend mode to be applied when this state is set. Apply a value of `normal` to reset the blend mode.
             * Setting this mode to anything other than NO_BLEND will automatically switch blending on.
             * @default 'normal'
             */
            blendMode: any;
            /**
             * The polygon offset. Setting this property to anything other than 0 will automatically enable polygon offset fill.
             * @default 0
             */
            polygonOffset: any;
            /**
             * Activates blending of the computed fragment color values.
             * @default true
             */
            blend: boolean;
            /**
             * Enables or disables writing to the depth buffer.
             * @default true
             */
            depthMask: boolean;
            /**
             * Activates adding an offset to depth values of polygon's fragments
             * @default false
             */
            offsets: boolean;
            /** The culling settings for this state none - No culling back - Back face culling front - Front face culling */
            cullMode: "none" | "front" | "back";
            /**
             * Activates culling of polygons.
             * @default false
             */
            culling: boolean;
            /**
             * Specifies whether or not front or back-facing polygons can be culled.
             * @default false
             */
            clockwiseFrontFace: boolean;
            /**
             * Activates depth comparisons and updates to the depth buffer.
             * @default false
             */
            depthTest: boolean;
            _blendMode: any;
            _blendModeId: any;
            _polygonOffset: any;
            toString(): string;
        };
        /**
         * Get the blend mode of the filter.
         * @default "normal"
         */
        blendMode: any;
        padding: any;
        antialias: any;
        resolution: any;
        blendRequired: any;
        /**
         * Applies the filter
         * @param filterManager - The renderer to retrieve the filter from
         * @param input - The input render target.
         * @param output - The target to output to.
         * @param clearMode - Should the output be cleared before rendering to it
         */
        apply(filterManager: any, input: any, output: any, clearMode: any): void;
        /**
         * A record of the uniform groups and resources used by the shader.
         * This is used by WebGL renderer to sync uniform data.
         * @internal
         * @ignore
         */
        _uniformBindMap: any;
        _ownedBindGroups: any[];
        gpuProgram: any;
        glProgram: any;
        compatibleRenderers: any;
        groups: any;
        resources: {};
        /**
         * Sometimes a resource group will be provided later (for example global uniforms)
         * In such cases, this method can be used to let the shader know about the group.
         * @param name - the name of the resource group
         * @param groupIndex - the index of the group (should match the webGPU shader group location)
         * @param bindIndex - the index of the bind point (should match the webGPU shader bind point)
         */
        addResource(name: any, groupIndex: any, bindIndex: any): void;
        _buildResourceAccessor(groups: any, nameHash: any): {};
        /**
         * Use to destroy the shader when its not longer needed.
         * It will destroy the resources and remove listeners.
         * @param destroyPrograms - if the programs should be destroyed as well.
         * Make sure its not being used by other shaders!
         */
        destroy(destroyPrograms?: boolean): void;
    };
    /**
     * The default filter settings
     * @static
     */
    defaultOptions: {
        blendMode: string;
        resolution: number;
        padding: number;
        antialias: string;
        blendRequired: boolean;
    };
};
export class FilterEffect {
    /** the pipe that knows how to handle this effect */
    pipe: string;
    /** the priority of this effect */
    priority: number;
    destroy(): void;
    filters: any;
    filterArea: any;
}
export class FilterPipe {
    constructor(renderer: any);
    _renderer: any;
    push(filterEffect: any, container: any, instructionSet: any): void;
    pop(_filterEffect: any, _container: any, instructionSet: any): void;
    execute(instruction: any): void;
    destroy(): void;
}
export namespace FilterPipe {
    export namespace extension_16 {
        let type_11: any[];
        export { type_11 as type };
        let name_11: string;
        export { name_11 as name };
    }
    export { extension_16 as extension };
}
export class FilterSystem {
    constructor(renderer: any);
    _filterStackIndex: number;
    _filterStack: any[];
    _filterGlobalUniforms: {
        /** used internally to know if a uniform group was used in the last render pass */
        _touched: number;
        /** a unique id for this uniform group used through the renderer */
        uid: number;
        /** a resource type, used to identify how to handle it when its in a bind group / shader resource */
        _resourceType: string;
        /** the resource id used internally by the renderer to build bind group keys */
        _resourceId: number;
        /** used ito identify if this is a uniform group */
        isUniformGroup: boolean;
        /**
         * used to flag if this Uniform groups data is different from what it has stored in its buffer / on the GPU
         * @internal
         * @ignore
         */
        _dirtyId: number;
        destroyed: boolean;
        uniformStructures: any;
        uniforms: {};
        ubo: any;
        isStatic: any;
        _signature: any;
        /** Call this if you want the uniform groups data to be uploaded to the GPU only useful if `isStatic` is true. */
        update(): void;
    };
    _globalFilterBindGroup: BindGroup;
    renderer: any;
    /**
     * The back texture of the currently active filter. Requires the filter to have `blendRequired` set to true.
     * @readonly
     */
    readonly get activeBackTexture(): any;
    push(instruction: any): void;
    pop(): void;
    _activeFilterData: any;
    getBackTexture(lastRenderSurface: any, bounds: any, previousBounds: any): any;
    applyFilter(filter: any, input: any, output: any, clear: any): void;
    _getFilterData(): {
        skip: boolean;
        inputTexture: any;
        bounds: Bounds;
        container: any;
        filterEffect: any;
        blendRequired: boolean;
        previousRenderSurface: any;
    };
    /**
     * Multiply _input normalized coordinates_ to this matrix to get _sprite texture normalized coordinates_.
     *
     * Use `outputMatrix * vTextureCoord` in the shader.
     * @param outputMatrix - The matrix to output to.
     * @param {Sprite} sprite - The sprite to map to.
     * @returns The mapped matrix.
     */
    calculateSpriteMatrix(outputMatrix: any, sprite: Sprite): any;
}
export namespace FilterSystem {
    export namespace extension_17 {
        let type_12: any[];
        export { type_12 as type };
        let name_12: string;
        export { name_12 as name };
    }
    export { extension_17 as extension };
}
export const FontStylePromiseCache: Map<any, any>;
export const GAUSSIAN_VALUES: {
    5: number[];
    7: number[];
    9: number[];
    11: number[];
    13: number[];
    15: number[];
};
export var GL_FORMATS: any;
export var GL_INTERNAL_FORMAT: any;
export var GL_TARGETS: any;
export var GL_TYPES: any;
export var GL_WRAP_MODES: any;
export class GenerateTextureSystem {
    constructor(renderer: any);
    _renderer: any;
    /**
     * A Useful function that returns a texture of the display object that can then be used to create sprites
     * This can be quite useful if your container is complicated and needs to be reused multiple times.
     * @param {GenerateTextureOptions | Container} options - Generate texture options.
     * @param {Container} [options.container] - If not given, the renderer's resolution is used.
     * @param {Rectangle} options.region - The region of the container, that shall be rendered,
     * @param {number} [options.resolution] - The resolution of the texture being generated.
     *        if no region is specified, defaults to the local bounds of the container.
     * @param {GenerateTextureSourceOptions} [options.textureSourceOptions] - Texture options for GPU.
     * @returns a shiny new texture of the container passed in
     */
    generateTexture(options: GenerateTextureOptions | Container): Texture;
    destroy(): void;
}
export namespace GenerateTextureSystem {
    export namespace extension_18 {
        let type_13: any[];
        export { type_13 as type };
        let name_13: string;
        export { name_13 as name };
    }
    export { extension_18 as extension };
}
declare const Geometry_base: any;
export class Geometry extends Geometry_base {
    [x: string]: any;
    /**
     * Create a new instance of a geometry
     * @param options - The options for the geometry.
     */
    constructor(options: any);
    /** The unique id of the geometry. */
    uid: number;
    /**
     * the layout key will be generated by WebGPU all geometries that have the same structure
     * will have the same layout key. This is used to cache the pipeline layout
     * @internal
     * @ignore
     */
    _layoutKey: number;
    /** the instance count of the geometry to draw */
    instanceCount: any;
    _bounds: Bounds;
    _boundsDirty: boolean;
    attributes: any;
    buffers: any[];
    indexBuffer: any;
    topology: any;
    onBufferUpdate(): void;
    /**
     * Returns the requested attribute.
     * @param id - The name of the attribute required
     * @returns - The attribute requested.
     */
    getAttribute(id: any): any;
    /**
     * Returns the index buffer
     * @returns - The index buffer.
     */
    getIndex(): any;
    /**
     * Returns the requested buffer.
     * @param id - The name of the buffer required.
     * @returns - The buffer requested.
     */
    getBuffer(id: any): any;
    /**
     * Used to figure out how many vertices there are in this geometry
     * @returns the number of vertices in the geometry
     */
    getSize(): number;
    /** Returns the bounds of the geometry. */
    get bounds(): any;
    /**
     * destroys the geometry.
     * @param destroyBuffers - destroy the buffers associated with this geometry
     */
    destroy(destroyBuffers?: boolean): void;
}
export let GlBackBufferSystem: {
    new (renderer: any): {
        /** if true, the back buffer is used */
        useBackBuffer: boolean;
        _useBackBufferThisRender: boolean;
        _renderer: any;
        init(options?: {}): void;
        _antialias: any;
        _state: {
            data: number;
            /**
             * The blend mode to be applied when this state is set. Apply a value of `normal` to reset the blend mode.
             * Setting this mode to anything other than NO_BLEND will automatically switch blending on.
             * @default 'normal'
             */
            blendMode: any;
            /**
             * The polygon offset. Setting this property to anything other than 0 will automatically enable polygon offset fill.
             * @default 0
             */
            polygonOffset: any;
            /**
             * Activates blending of the computed fragment color values.
             * @default true
             */
            blend: boolean;
            /**
             * Enables or disables writing to the depth buffer.
             * @default true
             */
            depthMask: boolean;
            /**
             * Activates adding an offset to depth values of polygon's fragments
             * @default false
             */
            offsets: boolean;
            /** The culling settings for this state none - No culling back - Back face culling front - Front face culling */
            cullMode: "none" | "front" | "back";
            /**
             * Activates culling of polygons.
             * @default false
             */
            culling: boolean;
            /**
             * Specifies whether or not front or back-facing polygons can be culled.
             * @default false
             */
            clockwiseFrontFace: boolean;
            /**
             * Activates depth comparisons and updates to the depth buffer.
             * @default false
             */
            depthTest: boolean;
            _blendMode: any;
            _blendModeId: any;
            _polygonOffset: any;
            toString(): string;
        };
        _bigTriangleShader: Shader;
        /**
         * This is called before the RenderTargetSystem is started. This is where
         * we replace the target with the back buffer if required.
         * @param options - The options for this render.
         */
        renderStart(options: any): void;
        _targetTexture: any;
        renderEnd(): void;
        _presentBackBuffer(): void;
        _getBackBufferTexture(targetSourceTexture: any): any;
        _backBufferTexture: any;
        /** destroys the back buffer */
        destroy(): void;
    };
    /** @ignore */
    extension: {
        type: any[];
        name: string;
        priority: number;
    };
    /** default options for the back buffer system */
    defaultOptions: {
        /** if true will use the back buffer where required */
        useBackBuffer: boolean;
    };
};
export class GlBatchAdaptor {
    _didUpload: boolean;
    _tempState: {
        data: number;
        /**
         * The blend mode to be applied when this state is set. Apply a value of `normal` to reset the blend mode.
         * Setting this mode to anything other than NO_BLEND will automatically switch blending on.
         * @default 'normal'
         */
        blendMode: any;
        /**
         * The polygon offset. Setting this property to anything other than 0 will automatically enable polygon offset fill.
         * @default 0
         */
        polygonOffset: any;
        /**
         * Activates blending of the computed fragment color values.
         * @default true
         */
        blend: boolean;
        /**
         * Enables or disables writing to the depth buffer.
         * @default true
         */
        depthMask: boolean;
        /**
         * Activates adding an offset to depth values of polygon's fragments
         * @default false
         */
        offsets: boolean;
        /** The culling settings for this state none - No culling back - Back face culling front - Front face culling */
        cullMode: "none" | "front" | "back";
        /**
         * Activates culling of polygons.
         * @default false
         */
        culling: boolean;
        /**
         * Specifies whether or not front or back-facing polygons can be culled.
         * @default false
         */
        clockwiseFrontFace: boolean;
        /**
         * Activates depth comparisons and updates to the depth buffer.
         * @default false
         */
        depthTest: boolean;
        _blendMode: any;
        _blendModeId: any;
        _polygonOffset: any;
        toString(): string;
    };
    init(batcherPipe: any): void;
    _shader: Shader;
    contextChange(): void;
    start(batchPipe: any, geometry: any): void;
    execute(batchPipe: any, batch: any): void;
    destroy(): void;
}
export namespace GlBatchAdaptor {
    export namespace extension_19 {
        let type_14: any[];
        export { type_14 as type };
        let name_14: string;
        export { name_14 as name };
    }
    export { extension_19 as extension };
}
export class GlBuffer {
    constructor(buffer: any, type: any);
    buffer: any;
    updateID: number;
    byteLength: number;
    type: any;
}
export class GlBufferSystem {
    /**
     * @param {Renderer} renderer - The renderer this System works for.
     */
    constructor(renderer: Renderer);
    _gpuBuffers: any;
    /** Cache keeping track of the base bound buffer bases */
    _boundBufferBases: any;
    _renderer: Renderer;
    /**
     * @ignore
     */
    destroy(): void;
    _gl: any;
    /** Sets up the renderer context and necessary buffers. */
    contextChange(): void;
    getGlBuffer(buffer: any): any;
    /**
     * This binds specified buffer. On first run, it will create the webGL buffers for the context too
     * @param buffer - the buffer to bind to the renderer
     */
    bind(buffer: any): void;
    /**
     * Binds an uniform buffer to at the given index.
     *
     * A cache is used so a buffer will not be bound again if already bound.
     * @param buffer - the buffer to bind
     * @param index - the base index to bind it to.
     */
    bindBufferBase(buffer: any, index: any): void;
    /**
     * Binds a buffer whilst also binding its range.
     * This will make the buffer start from the offset supplied rather than 0 when it is read.
     * @param buffer - the buffer to bind
     * @param index - the base index to bind at, defaults to 0
     * @param offset - the offset to bind at (this is blocks of 256). 0 = 0, 1 = 256, 2 = 512 etc
     */
    bindBufferRange(buffer: any, index: any, offset: any): void;
    /**
     * Will ensure the data in the buffer is uploaded to the GPU.
     * @param {Buffer} buffer - the buffer to update
     */
    updateBuffer(buffer: Buffer): any;
    /** dispose all WebGL resources of all managed buffers */
    destroyAll(): void;
    /**
     * Disposes buffer
     * @param {Buffer} buffer - buffer with data
     * @param {boolean} [contextLost=false] - If context was lost, we suppress deleteVertexArray
     */
    onBufferDestroy(buffer: Buffer, contextLost?: boolean): void;
    /**
     * creates and attaches a GLBuffer object tied to the current context.
     * @param buffer
     * @protected
     */
    protected createGLBuffer(buffer: any): GlBuffer;
}
export namespace GlBufferSystem {
    export namespace extension_20 {
        let type_15: any[];
        export { type_15 as type };
        let name_15: string;
        export { name_15 as name };
    }
    export { extension_20 as extension };
}
export class GlColorMaskSystem {
    constructor(renderer: any);
    _colorMaskCache: number;
    _renderer: any;
    setMask(colorMask: any): void;
}
export namespace GlColorMaskSystem {
    export namespace extension_21 {
        let type_16: any[];
        export { type_16 as type };
        let name_16: string;
        export { name_16 as name };
    }
    export { extension_21 as extension };
}
export let GlContextSystem: {
    new (renderer: any): {
        /**
         * Features supported by current renderer.
         * @type {object}
         * @readonly
         */
        readonly supports: object;
        _renderer: any;
        extensions: any;
        /**
         * Handles a lost webgl context
         * @param {WebGLContextEvent} event - The context lost event.
         */
        handleContextLost(event: WebGLContextEvent): void;
        /** Handles a restored webgl context. */
        handleContextRestored(): void;
        /**
         * `true` if the context is lost
         * @readonly
         */
        readonly isLost: any;
        /**
         * Handles the context change event.
         * @param {WebGLRenderingContext} gl - New WebGL context.
         */
        contextChange(gl: WebGLRenderingContext): void;
        gl: any;
        init(options: any): void;
        /**
         * Initializes the context.
         * @protected
         * @param {WebGLRenderingContext} gl - WebGL context
         */
        initFromContext(gl: WebGLRenderingContext): void;
        webGLVersion: number;
        /**
         * Initialize from context options
         * @protected
         * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext
         * @param preferWebGLVersion
         * @param {object} options - context attributes
         */
        createContext(preferWebGLVersion: any, options: object): void;
        /** Auto-populate the {@link GlContextSystem.extensions extensions}. */
        getExtensions(): void;
        _contextLossForced: boolean;
        destroy(): void;
        /**
         * this function can be called to force a webGL context loss
         * this will release all resources on the GPU.
         * Useful if you need to put Pixi to sleep, and save some GPU memory
         *
         * As soon as render is called - all resources will be created again.
         */
        forceContextLoss(): void;
        /**
         * Validate context.
         * @param {WebGLRenderingContext} gl - Render context.
         */
        validateContext(gl: WebGLRenderingContext): void;
    };
    /** @ignore */
    extension: {
        type: any[];
        name: string;
    };
    /** The default options for the system. */
    defaultOptions: {
        /**
         * {@link WebGLOptions.context}
         * @default null
         */
        context: any;
        /**
         * {@link WebGLOptions.premultipliedAlpha}
         * @default true
         */
        premultipliedAlpha: boolean;
        /**
         * {@link WebGLOptions.preserveDrawingBuffer}
         * @default false
         */
        preserveDrawingBuffer: boolean;
        /**
         * {@link WebGLOptions.powerPreference}
         * @default default
         */
        powerPreference: any;
        /**
         * {@link WebGLOptions.webGLVersion}
         * @default 2
         */
        preferWebGLVersion: number;
    };
};
export class GlEncoderSystem {
    constructor(renderer: any);
    commandFinished: Promise<void>;
    _renderer: any;
    setGeometry(geometry: any, shader: any): void;
    finishRenderPass(): void;
    draw(options: any): void;
    destroy(): void;
}
export namespace GlEncoderSystem {
    export namespace extension_22 {
        let type_17: any[];
        export { type_17 as type };
        let name_17: string;
        export { name_17 as name };
    }
    export { extension_22 as extension };
}
export class GlGeometrySystem {
    /** @param renderer - The renderer this System works for. */
    constructor(renderer: any);
    _geometryVaoHash: any;
    _renderer: any;
    _activeGeometry: any;
    _activeVao: any;
    hasVao: boolean;
    hasInstance: boolean;
    /** Sets up the renderer context and necessary buffers. */
    contextChange(): void;
    gl: any;
    /**
     * Binds geometry so that is can be drawn. Creating a Vao if required
     * @param geometry - Instance of geometry to bind.
     * @param program - Instance of program to use vao for.
     */
    bind(geometry: any, program: any): void;
    /** Reset and unbind any active VAO and geometry. */
    reset(): void;
    /** Update buffers of the currently bound geometry. */
    updateBuffers(): void;
    /**
     * Check compatibility between a geometry and a program
     * @param geometry - Geometry instance.
     * @param program - Program instance.
     */
    checkCompatibility(geometry: any, program: any): void;
    /**
     * Takes a geometry and program and generates a unique signature for them.
     * @param geometry - To get signature from.
     * @param program - To test geometry against.
     * @returns - Unique signature of the geometry and program
     */
    getSignature(geometry: any, program: any): string;
    getVao(geometry: any, program: any): any;
    /**
     * Creates or gets Vao with the same structure as the geometry and stores it on the geometry.
     * If vao is created, it is bound automatically. We use a shader to infer what and how to set up the
     * attribute locations.
     * @param geometry - Instance of geometry to to generate Vao for.
     * @param program
     * @param _incRefCount - Increment refCount of all geometry buffers.
     */
    initGeometryVao(geometry: any, program: any, _incRefCount?: boolean): any;
    /**
     * Disposes geometry.
     * @param geometry - Geometry with buffers. Only VAO will be disposed
     * @param [contextLost=false] - If context was lost, we suppress deleteVertexArray
     */
    onGeometryDestroy(geometry: any, contextLost?: any): void;
    /**
     * Dispose all WebGL resources of all managed geometries.
     * @param [contextLost=false] - If context was lost, we suppress `gl.delete` calls
     */
    destroyAll(contextLost?: boolean): void;
    /**
     * Activate vertex array object.
     * @param geometry - Geometry instance.
     * @param program - Shader program instance.
     */
    activateVao(geometry: any, program: any): void;
    /**
     * Draws the currently bound geometry.
     * @param topology - The type primitive to render.
     * @param size - The number of elements to be rendered. If not specified, all vertices after the
     *  starting vertex will be drawn.
     * @param start - The starting vertex in the geometry to start drawing from. If not specified,
     *  drawing will start from the first vertex.
     * @param instanceCount - The number of instances of the set of elements to execute. If not specified,
     *  all instances will be drawn.
     */
    draw(topology: any, size: any, start: any, instanceCount: any): this;
    /** Unbind/reset everything. */
    unbind(): void;
    destroy(): void;
}
export namespace GlGeometrySystem {
    export namespace extension_23 {
        let type_18: any[];
        export { type_18 as type };
        let name_18: string;
        export { name_18 as name };
    }
    export { extension_23 as extension };
}
export class GlGraphicsAdaptor {
    init(): void;
    shader: Shader;
    execute(graphicsPipe: any, renderable: any): void;
    destroy(): void;
}
export namespace GlGraphicsAdaptor {
    export namespace extension_24 {
        let type_19: any[];
        export { type_19 as type };
        let name_19: string;
        export { name_19 as name };
    }
    export { extension_24 as extension };
}
export class GlMeshAdaptor {
    init(): void;
    _shader: Shader;
    execute(meshPipe: any, mesh: any): void;
    destroy(): void;
}
export namespace GlMeshAdaptor {
    export namespace extension_25 {
        let type_20: any[];
        export { type_20 as type };
        let name_20: string;
        export { name_20 as name };
    }
    export { extension_25 as extension };
}
export let GlProgram: {
    new (options: any): {
        fragment: any;
        vertex: any;
        _key: any;
        /** destroys the program */
        destroy(): void;
        _attributeData: any;
        _uniformData: any;
        _uniformBlockData: any;
        transformFeedbackVaryings: any;
    };
    /**
     * Helper function that creates a program for a given source.
     * It will check the program cache if the program has already been created.
     * If it has that one will be returned, if not a new one will be created and cached.
     * @param options - The options for the program.
     * @returns A program using the same source
     */
    from(options: any): any;
    /** The default options used by the program. */
    defaultOptions: {
        preferredVertexPrecision: string;
        preferredFragmentPrecision: string;
    };
};
export class GlProgramData {
    /**
     * Makes a new Pixi program.
     * @param program - webgl program
     * @param uniformData - uniforms
     */
    constructor(program: any, uniformData: any);
    program: any;
    uniformData: any;
    uniformGroups: {};
    uniformDirtyGroups: {};
    uniformBlockBindings: {};
    /** Destroys this program. */
    destroy(): void;
}
export class GlRenderTarget {
    width: number;
    height: number;
    msaa: boolean;
    msaaRenderBuffer: any[];
}
export class GlRenderTargetAdaptor {
    _clearColorCache: number[];
    _viewPortCache: Rectangle;
    init(renderer: any, renderTargetSystem: any): void;
    _renderer: any;
    _renderTargetSystem: any;
    contextChange(): void;
    copyToTexture(sourceRenderSurfaceTexture: any, destinationTexture: any, originSrc: any, size: any, originDest: any): any;
    startRenderPass(renderTarget: any, clear: boolean, clearColor: any, viewport: any): void;
    finishRenderPass(renderTarget: any): void;
    initGpuRenderTarget(renderTarget: any): GlRenderTarget;
    destroyGpuRenderTarget(gpuRenderTarget: any): void;
    clear(_renderTarget: any, clear: any, clearColor: any): void;
    resizeGpuRenderTarget(renderTarget: any): void;
    _initColor(renderTarget: any, glRenderTarget: any): void;
    _resizeColor(renderTarget: any, glRenderTarget: any): void;
    _initStencil(glRenderTarget: any): void;
    _resizeStencil(glRenderTarget: any): void;
}
export class GlRenderTargetSystem extends RenderTargetSystem {
    adaptor: GlRenderTargetAdaptor;
}
export namespace GlRenderTargetSystem {
    export namespace extension_26 {
        let type_21: any[];
        export { type_21 as type };
        let name_21: string;
        export { name_21 as name };
    }
    export { extension_26 as extension };
}
export class GlShaderSystem {
    constructor(renderer: any);
    /**
     * @internal
     * @private
     */
    private _activeProgram;
    _programDataHash: any;
    _nextIndex: number;
    _boundUniformsIdsToIndexHash: any;
    _boundIndexToUniformsHash: any;
    _shaderSyncFunctions: any;
    _renderer: any;
    contextChange(gl: any): void;
    _gl: any;
    _maxBindings: any;
    /**
     * Changes the current shader to the one given in parameter.
     * @param shader - the new shader
     * @param skipSync - false if the shader should automatically sync its uniforms.
     * @returns the glProgram that belongs to the shader.
     */
    bind(shader: any, skipSync: any): void;
    /**
     * Updates the uniform group.
     * @param uniformGroup - the uniform group to update
     */
    updateUniformGroup(uniformGroup: any): void;
    /**
     * Binds a uniform block to the shader.
     * @param uniformGroup - the uniform group to bind
     * @param name - the name of the uniform block
     * @param index - the index of the uniform block
     */
    bindUniformBlock(uniformGroup: any, name: any, index?: number): void;
    _setProgram(program: any): void;
    /**
     * @param program - the program to get the data for
     * @internal
     * @private
     */
    private _getProgramData;
    _createProgramData(program: any): any;
    destroy(): void;
    /**
     * Creates a function that can be executed that will sync the shader as efficiently as possible.
     * Overridden by the unsafe eval package if you don't want eval used in your project.
     * @param shader - the shader to generate the sync function for
     * @param shaderSystem - the shader system to use
     * @returns - the generated sync function
     * @ignore
     */
    _generateShaderSync(shader: any, shaderSystem: any): Function;
}
export namespace GlShaderSystem {
    export namespace extension_27 {
        let type_22: any[];
        export { type_22 as type };
        let name_22: string;
        export { name_22 as name };
    }
    export { extension_27 as extension };
}
export let GlStateSystem: {
    new (): {
        gl: any;
        stateId: number;
        polygonOffset: number;
        blendMode: string;
        _blendEq: boolean;
        map: ((value: any) => void)[];
        checks: any[];
        defaultState: {
            data: number;
            /**
             * The blend mode to be applied when this state is set. Apply a value of `normal` to reset the blend mode.
             * Setting this mode to anything other than NO_BLEND will automatically switch blending on.
             * @default 'normal'
             */
            blendMode: any;
            /**
             * The polygon offset. Setting this property to anything other than 0 will automatically enable polygon offset fill.
             * @default 0
             */
            polygonOffset: any;
            /**
             * Activates blending of the computed fragment color values.
             * @default true
             */
            blend: boolean;
            /**
             * Enables or disables writing to the depth buffer.
             * @default true
             */
            depthMask: boolean;
            /**
             * Activates adding an offset to depth values of polygon's fragments
             * @default false
             */
            offsets: boolean;
            /** The culling settings for this state none - No culling back - Back face culling front - Front face culling */
            cullMode: "none" | "front" | "back";
            /**
             * Activates culling of polygons.
             * @default false
             */
            culling: boolean;
            /**
             * Specifies whether or not front or back-facing polygons can be culled.
             * @default false
             */
            clockwiseFrontFace: boolean;
            /**
             * Activates depth comparisons and updates to the depth buffer.
             * @default false
             */
            depthTest: boolean;
            _blendMode: any;
            _blendModeId: any;
            _polygonOffset: any;
            toString(): string;
        };
        contextChange(gl: any): void;
        blendModesMap: {
            normal: any[];
            add: any[];
            multiply: any[];
            screen: any[];
            none: number[];
            "normal-npm": any[];
            "add-npm": any[];
            "screen-npm": any[];
            erase: any[];
        };
        /**
         * Sets the current state
         * @param {*} state - The state to set.
         */
        set(state: any): void;
        /**
         * Sets the state, when previous state is unknown.
         * @param {*} state - The state to set
         */
        forceState(state: any): void;
        /**
         * Sets whether to enable or disable blending.
         * @param value - Turn on or off WebGl blending.
         */
        setBlend(value: any): void;
        /**
         * Sets whether to enable or disable polygon offset fill.
         * @param value - Turn on or off webgl polygon offset testing.
         */
        setOffset(value: any): void;
        /**
         * Sets whether to enable or disable depth test.
         * @param value - Turn on or off webgl depth testing.
         */
        setDepthTest(value: any): void;
        /**
         * Sets whether to enable or disable depth mask.
         * @param value - Turn on or off webgl depth mask.
         */
        setDepthMask(value: any): void;
        /**
         * Sets whether to enable or disable cull face.
         * @param {boolean} value - Turn on or off webgl cull face.
         */
        setCullFace(value: boolean): void;
        /**
         * Sets the gl front face.
         * @param {boolean} value - true is clockwise and false is counter-clockwise
         */
        setFrontFace(value: boolean): void;
        /**
         * Sets the blend mode.
         * @param {number} value - The blend mode to set to.
         */
        setBlendMode(value: number): void;
        /**
         * Sets the polygon offset.
         * @param {number} value - the polygon offset
         * @param {number} scale - the polygon offset scale
         */
        setPolygonOffset(value: number, scale: number): void;
        /** Resets all the logic and disables the VAOs. */
        reset(): void;
        /**
         * Checks to see which updates should be checked based on which settings have been activated.
         *
         * For example, if blend is enabled then we should check the blend modes each time the state is changed
         * or if polygon fill is activated then we need to check if the polygon offset changes.
         * The idea is that we only check what we have too.
         * @param func - the checking function to add or remove
         * @param value - should the check function be added or removed.
         */
        _updateCheck(func: any, value: any): void;
        /**
         * @ignore
         */
        destroy(): void;
    };
    /**
     * A private little wrapper function that we call to check the blend mode.
     * @param system - the System to perform the state check on
     * @param state - the state that the blendMode will pulled from
     */
    _checkBlendMode(system: any, state: any): void;
    /**
     * A private little wrapper function that we call to check the polygon offset.
     * @param system - the System to perform the state check on
     * @param state - the state that the blendMode will pulled from
     */
    _checkPolygonOffset(system: any, state: any): void;
    /** @ignore */
    extension: {
        type: any[];
        name: string;
    };
};
export class GlStencilSystem {
    constructor(renderer: any);
    _stencilCache: {
        enabled: boolean;
        stencilReference: number;
        stencilMode: any;
    };
    _renderTargetStencilState: any;
    contextChange(gl: any): void;
    _gl: any;
    _comparisonFuncMapping: {
        always: any;
        never: any;
        equal: any;
        "not-equal": any;
        less: any;
        "less-equal": any;
        greater: any;
        "greater-equal": any;
    };
    _stencilOpsMapping: {
        keep: any;
        zero: any;
        replace: any;
        invert: any;
        "increment-clamp": any;
        "decrement-clamp": any;
        "increment-wrap": any;
        "decrement-wrap": any;
    };
    onRenderTargetChange(renderTarget: any): void;
    _activeRenderTarget: any;
    setStencilMode(stencilMode: any, stencilReference: any): void;
}
export namespace GlStencilSystem {
    export namespace extension_28 {
        let type_23: any[];
        export { type_23 as type };
        let name_23: string;
        export { name_23 as name };
    }
    export { extension_28 as extension };
}
export class GlTexture {
    constructor(texture: any);
    target: any;
    texture: any;
    width: number;
    height: number;
    type: any;
    internalFormat: any;
    format: any;
    samplerType: number;
}
export class GlTextureSystem {
    constructor(renderer: any);
    managedTextures: any[];
    _glTextures: any;
    _glSamplers: any;
    _boundTextures: any[];
    _activeTextureLocation: number;
    _boundSamplers: any;
    _uploads: {
        image: {
            id: string;
            upload(source: any, glTexture: any, gl: any, webGLVersion: any): void;
        };
        buffer: {
            id: string;
            upload(source: any, glTexture: any, gl: any): void;
        };
        video: {
            id: string;
            upload(source: any, glTexture: any, gl: any, webGLVersion: any): void;
        };
        compressed: {
            id: string;
            upload(source: any, glTexture: any, gl: any): void;
        };
    };
    _useSeparateSamplers: boolean;
    _renderer: any;
    contextChange(gl: any): void;
    _gl: any;
    _mapFormatToInternalFormat: any;
    _mapFormatToType: {
        r8unorm: any;
        r8snorm: any;
        r8uint: any;
        r8sint: any;
        r16uint: any;
        r16sint: any;
        r16float: any;
        rg8unorm: any;
        rg8snorm: any;
        rg8uint: any;
        rg8sint: any;
        r32uint: any;
        r32sint: any;
        r32float: any;
        rg16uint: any;
        rg16sint: any;
        rg16float: any;
        rgba8unorm: any;
        "rgba8unorm-srgb": any;
        rgba8snorm: any;
        rgba8uint: any;
        rgba8sint: any;
        bgra8unorm: any;
        "bgra8unorm-srgb": any;
        rgb9e5ufloat: any;
        rgb10a2unorm: any;
        rg11b10ufloat: any;
        rg32uint: any;
        rg32sint: any;
        rg32float: any;
        rgba16uint: any;
        rgba16sint: any;
        rgba16float: any;
        rgba32uint: any;
        rgba32sint: any;
        rgba32float: any;
        stencil8: any;
        depth16unorm: any;
        depth24plus: any;
        "depth24plus-stencil8": any;
        depth32float: any;
        "depth32float-stencil8": any;
    };
    _mapFormatToFormat: {
        r8unorm: any;
        r8snorm: any;
        r8uint: any;
        r8sint: any;
        r16uint: any;
        r16sint: any;
        r16float: any;
        rg8unorm: any;
        rg8snorm: any;
        rg8uint: any;
        rg8sint: any;
        r32uint: any;
        r32sint: any;
        r32float: any;
        rg16uint: any;
        rg16sint: any;
        rg16float: any;
        rgba8unorm: any;
        "rgba8unorm-srgb": any;
        rgba8snorm: any;
        rgba8uint: any;
        rgba8sint: any;
        bgra8unorm: any;
        "bgra8unorm-srgb": any;
        rgb9e5ufloat: any;
        rgb10a2unorm: any;
        rg11b10ufloat: any;
        rg32uint: any;
        rg32sint: any;
        rg32float: any;
        rgba16uint: any;
        rgba16sint: any;
        rgba16float: any;
        rgba32uint: any;
        rgba32sint: any;
        rgba32float: any;
        stencil8: any;
        depth16unorm: any;
        depth24plus: any;
        "depth24plus-stencil8": any;
        depth32float: any;
        "depth32float-stencil8": any;
    };
    initSource(source: any): void;
    bind(texture: any, location?: number): void;
    bindSource(source: any, location?: number): void;
    _bindSampler(style: any, location?: number): void;
    unbind(texture: any): void;
    _activateLocation(location: any): void;
    _initSource(source: any): GlTexture;
    onStyleChange(source: any): void;
    updateStyle(source: any, firstCreation: any): void;
    onSourceUnload(source: any): void;
    onSourceUpdate(source: any): void;
    onUpdateMipmaps(source: any, bind?: boolean): void;
    onSourceDestroy(source: any): void;
    _initSampler(style: any): any;
    _getGlSampler(sampler: any): any;
    getGlSource(source: any): any;
    generateCanvas(texture: any): any;
    getPixels(texture: any): {
        pixels: Uint8ClampedArray;
        width: number;
        height: number;
    };
    destroy(): void;
}
export namespace GlTextureSystem {
    export namespace extension_29 {
        let type_24: any[];
        export { type_24 as type };
        let name_24: string;
        export { name_24 as name };
    }
    export { extension_29 as extension };
}
export class GlUboSystem extends UboSystem {
    constructor();
}
export namespace GlUboSystem {
    export namespace extension_30 {
        let type_25: any[];
        export { type_25 as type };
        let name_25: string;
        export { name_25 as name };
    }
    export { extension_30 as extension };
}
export class GlUniformGroupSystem {
    /** @param renderer - The renderer this System works for. */
    constructor(renderer: any);
    /** Cache to holds the generated functions. Stored against UniformObjects unique signature. */
    _cache: {};
    _uniformGroupSyncHash: {};
    _renderer: any;
    gl: any;
    contextChange(gl: any): void;
    /**
     * Uploads the uniforms values to the currently bound shader.
     * @param group - the uniforms values that be applied to the current shader
     * @param program
     * @param syncData
     * @param syncData.textureCount
     */
    updateUniformGroup(group: any, program: any, syncData: any): void;
    /**
     * Overridable by the pixi.js/unsafe-eval package to use static syncUniforms instead.
     * @param group
     * @param program
     */
    _getUniformSyncFunction(group: any, program: any): any;
    _createUniformSyncFunction(group: any, program: any): any;
    _generateUniformsSync(group: any, uniformData: any): Function;
    /**
     * Takes a uniform group and data and generates a unique signature for them.
     * @param group - The uniform group to get signature of
     * @param group.uniforms
     * @param uniformData - Uniform information generated by the shader
     * @param preFix
     * @returns Unique signature of the uniform group
     */
    _getSignature(group: any, uniformData: any, preFix: any): string;
    /** Destroys this System and removes all its textures. */
    destroy(): void;
}
export namespace GlUniformGroupSystem {
    export namespace extension_31 {
        let type_26: any[];
        export { type_26 as type };
        let name_26: string;
        export { name_26 as name };
    }
    export { extension_31 as extension };
}
export class GlobalUniformSystem {
    constructor(renderer: any);
    _stackIndex: number;
    _globalUniformDataStack: any[];
    _uniformsPool: any[];
    _activeUniforms: any[];
    _bindGroupPool: any[];
    _activeBindGroups: any[];
    _renderer: any;
    reset(): void;
    start(options: any): void;
    bind({ size, projectionMatrix, worldTransformMatrix, worldColor, offset }: {
        size: any;
        projectionMatrix: any;
        worldTransformMatrix: any;
        worldColor: any;
        offset: any;
    }): void;
    _currentGlobalUniformData: any;
    push(options: any): void;
    pop(): void;
    get bindGroup(): any;
    get uniformGroup(): any;
    _createUniforms(): {
        /** used internally to know if a uniform group was used in the last render pass */
        _touched: number;
        /** a unique id for this uniform group used through the renderer */
        uid: number;
        /** a resource type, used to identify how to handle it when its in a bind group / shader resource */
        _resourceType: string;
        /** the resource id used internally by the renderer to build bind group keys */
        _resourceId: number;
        /** used ito identify if this is a uniform group */
        isUniformGroup: boolean;
        /**
         * used to flag if this Uniform groups data is different from what it has stored in its buffer / on the GPU
         * @internal
         * @ignore
         */
        _dirtyId: number;
        destroyed: boolean;
        uniformStructures: any;
        uniforms: {};
        ubo: any;
        isStatic: any;
        _signature: any;
        /** Call this if you want the uniform groups data to be uploaded to the GPU only useful if `isStatic` is true. */
        update(): void;
    };
    destroy(): void;
}
export namespace GlobalUniformSystem {
    export namespace extension_32 {
        let type_27: any[];
        export { type_27 as type };
        let name_27: string;
        export { name_27 as name };
    }
    export { extension_32 as extension };
}
export class GpuBatchAdaptor {
    init(): void;
    _shader: Shader;
    start(batchPipe: any, geometry: any): void;
    _geometry: any;
    execute(batchPipe: any, batch: any): void;
    destroy(): void;
}
export namespace GpuBatchAdaptor {
    export namespace extension_33 {
        let type_28: any[];
        export { type_28 as type };
        let name_28: string;
        export { name_28 as name };
    }
    export { extension_33 as extension };
}
export const GpuBlendModesToPixi: typeof GpuBlendModesToPixi;
export class GpuBufferSystem {
    _gpuBuffers: any;
    _managedBuffers: any[];
    contextChange(gpu: any): void;
    _gpu: any;
    getGPUBuffer(buffer: any): any;
    updateBuffer(buffer: any): any;
    /** dispose all WebGL resources of all managed buffers */
    destroyAll(): void;
    createGPUBuffer(buffer: any): any;
    onBufferChange(buffer: any): void;
    /**
     * Disposes buffer
     * @param buffer - buffer with data
     */
    onBufferDestroy(buffer: any): void;
    destroy(): void;
    _destroyBuffer(buffer: any): void;
}
export namespace GpuBufferSystem {
    export namespace extension_34 {
        let type_29: any[];
        export { type_29 as type };
        let name_29: string;
        export { name_29 as name };
    }
    export { extension_34 as extension };
}
export class GpuColorMaskSystem {
    constructor(renderer: any);
    _colorMaskCache: number;
    _renderer: any;
    setMask(colorMask: any): void;
    destroy(): void;
}
export namespace GpuColorMaskSystem {
    export namespace extension_35 {
        let type_30: any[];
        export { type_30 as type };
        let name_30: string;
        export { name_30 as name };
    }
    export { extension_35 as extension };
}
export class GpuDeviceSystem {
    /**
     * @param {WebGPURenderer} renderer - The renderer this System works for.
     */
    constructor(renderer: WebGPURenderer);
    _renderer: WebGPURenderer;
    init(options: any): Promise<any>;
    _initPromise: any;
    gpu: any;
    /**
     * Handle the context change event
     * @param gpu
     */
    contextChange(gpu: any): void;
    /**
     * Helper class to create a WebGL Context
     * @param {object} options - An options object that gets passed in to the canvas element containing the
     *    context attributes
     * @see https://developer.mozilla.org/en/docs/Web/API/HTMLCanvasElement/getContext
     * @returns {WebGLRenderingContext} the WebGL context
     */
    _createDeviceAndAdaptor(options: object): WebGLRenderingContext;
    destroy(): void;
}
export namespace GpuDeviceSystem {
    export namespace extension_36 {
        let type_31: any[];
        export { type_31 as type };
        let name_31: string;
        export { name_31 as name };
    }
    export { extension_36 as extension };
    export namespace defaultOptions_1 {
        let powerPreference: any;
        let forceFallbackAdapter: boolean;
    }
    export { defaultOptions_1 as defaultOptions };
}
export class GpuEncoderSystem {
    constructor(renderer: any);
    _boundBindGroup: any;
    _boundVertexBuffer: any;
    _renderer: any;
    renderStart(): void;
    commandFinished: Promise<any>;
    _resolveCommandFinished: (value: any) => void;
    commandEncoder: any;
    beginRenderPass(gpuRenderTarget: any): void;
    renderPassEncoder: any;
    endRenderPass(): void;
    setViewport(viewport: any): void;
    setPipelineFromGeometryProgramAndState(geometry: any, program: any, state: any, topology: any): void;
    setPipeline(pipeline: any): void;
    _boundPipeline: any;
    _setVertexBuffer(index: any, buffer: any): void;
    _setIndexBuffer(buffer: any): void;
    _boundIndexBuffer: any;
    resetBindGroup(index: any): void;
    setBindGroup(index: any, bindGroup: any, program: any): void;
    setGeometry(geometry: any): void;
    _setShaderBindGroups(shader: any, skipSync: any): void;
    _syncBindGroup(bindGroup: any): void;
    draw(options: any): void;
    finishRenderPass(): void;
    postrender(): void;
    restoreRenderPass(): void;
    _clearCache(): void;
    destroy(): void;
    _gpu: any;
    contextChange(gpu: any): void;
}
export namespace GpuEncoderSystem {
    export namespace extension_37 {
        let type_32: any[];
        export { type_32 as type };
        let name_32: string;
        export { name_32 as name };
        let priority_1: number;
        export { priority_1 as priority };
    }
    export { extension_37 as extension };
}
export class GpuGraphicsAdaptor {
    init(): void;
    shader: Shader;
    execute(graphicsPipe: any, renderable: any): void;
    destroy(): void;
}
export namespace GpuGraphicsAdaptor {
    export namespace extension_38 {
        let type_33: any[];
        export { type_33 as type };
        let name_33: string;
        export { name_33 as name };
    }
    export { extension_38 as extension };
}
export class GpuGraphicsContext {
    batcher: {
        /** unique id for this batcher */
        uid: number;
        dirty: boolean;
        batchIndex: number;
        batches: any[];
        _vertexSize: number;
        _elements: any[];
        attributeBuffer: ViewableBuffer;
        indexBuffer: Uint16Array;
        _maxTextures: any;
        begin(): void;
        elementSize: number;
        elementStart: number;
        indexSize: number;
        attributeSize: number;
        _batchIndexStart: any;
        _batchIndexSize: any;
        add(batchableObject: any): void;
        checkAndUpdateTexture(batchableObject: any, texture: any): boolean;
        updateElement(batchableObject: any): void;
        /**
         * breaks the batcher. This happens when a batch gets too big,
         * or we need to switch to a different type of rendering (a filter for example)
         * @param instructionSet
         */
        break(instructionSet: any): void;
        _finishBatch(batch: any, indexStart: any, indexSize: any, textureBatch: any, blendMode: any, instructionSet: any, action: any): void;
        finish(instructionSet: any): void;
        /**
         * Resizes the attribute buffer to the given size (1 = 1 float32)
         * @param size - the size in vertices to ensure (not bytes!)
         */
        ensureAttributeBuffer(size: any): void;
        /**
         * Resizes the index buffer to the given size (1 = 1 float32)
         * @param size - the size in vertices to ensure (not bytes!)
         */
        ensureIndexBuffer(size: any): void;
        _resizeAttributeBuffer(size: any): void;
        _resizeIndexBuffer(size: any): void;
        destroy(): void;
    };
    batches: any[];
    geometryData: {
        vertices: any[];
        uvs: any[];
        indices: any[];
    };
}
export class GpuMeshAdapter {
    init(): void;
    _shader: Shader;
    execute(meshPipe: any, mesh: any): void;
    destroy(): void;
}
export namespace GpuMeshAdapter {
    export namespace extension_39 {
        let type_34: any[];
        export { type_34 as type };
        let name_34: string;
        export { name_34 as name };
    }
    export { extension_39 as extension };
}
export class GpuMipmapGenerator {
    constructor(device: any);
    device: any;
    sampler: any;
    pipelines: {};
    _getMipmapPipeline(format: any): any;
    mipmapShaderModule: any;
    /**
     * Generates mipmaps for the given GPUTexture from the data in level 0.
     * @param {module:External.GPUTexture} texture - Texture to generate mipmaps for.
     * @returns {module:External.GPUTexture} - The originally passed texture
     */
    generateMipmap(texture: any): any;
}
export class GpuProgram {
    /**
     * Helper function that creates a program for a given source.
     * It will check the program cache if the program has already been created.
     * If it has that one will be returned, if not a new one will be created and cached.
     * @param options - The options for the program.
     * @returns A program using the same source
     */
    static from(options: any): any;
    /**
     * Create a new GpuProgram
     * @param options - The options for the gpu program
     */
    constructor(options: any);
    /**
     * @internal
     * @ignore
     */
    _layoutKey: number;
    name: any;
    fragment: any;
    vertex: any;
    structsAndGroups: {
        groups: any;
        structs: any;
    };
    layout: any;
    gpuLayout: any;
    autoAssignGlobalUniforms: boolean;
    autoAssignLocalUniforms: boolean;
    _generateProgramKey(): void;
    get attributeData(): {};
    _attributeData: {};
    /** destroys the program */
    destroy(): void;
}
export function GpuReadBuffer(buffer: any, renderer: any): void;
export class GpuRenderTarget {
    contexts: any[];
    msaaTextures: any[];
    msaaSamples: number;
}
export class GpuRenderTargetAdaptor {
    init(renderer: any, renderTargetSystem: any): void;
    _renderer: any;
    _renderTargetSystem: any;
    copyToTexture(sourceRenderSurfaceTexture: any, destinationTexture: any, originSrc: any, size: any, originDest: any): any;
    startRenderPass(renderTarget: any, clear: boolean, clearColor: any, viewport: any): void;
    finishRenderPass(): void;
    /**
     * returns the gpu texture for the first color texture in the render target
     * mainly used by the filter manager to get copy the texture for blending
     * @param renderTarget
     * @returns a gpu texture
     */
    _getGpuColorTexture(renderTarget: any): any;
    getDescriptor(renderTarget: any, clear: any, clearValue: any): {
        colorAttachments: any;
        depthStencilAttachment: {
            view: any;
            stencilStoreOp: string;
            stencilLoadOp: string;
            depthClearValue: number;
            depthLoadOp: string;
            depthStoreOp: string;
        };
    };
    clear(renderTarget: any, clear: boolean, clearColor: any, viewport: any): void;
    initGpuRenderTarget(renderTarget: any): GpuRenderTarget;
    destroyGpuRenderTarget(gpuRenderTarget: any): void;
    ensureDepthStencilTexture(renderTarget: any): void;
    resizeGpuRenderTarget(renderTarget: any): void;
}
export class GpuRenderTargetSystem extends RenderTargetSystem {
    adaptor: GpuRenderTargetAdaptor;
}
export namespace GpuRenderTargetSystem {
    export namespace extension_40 {
        let type_35: any[];
        export { type_35 as type };
        let name_35: string;
        export { name_35 as name };
    }
    export { extension_40 as extension };
}
export class GpuShaderSystem {
    _gpuProgramData: any;
    contextChange(gpu: any): void;
    _gpu: any;
    getProgramData(program: any): any;
    _createGPUProgramData(program: any): any;
    destroy(): void;
}
export namespace GpuShaderSystem {
    export namespace extension_41 {
        let type_36: any[];
        export { type_36 as type };
        let name_36: string;
        export { name_36 as name };
    }
    export { extension_41 as extension };
}
export class GpuStateSystem {
    defaultState: {
        data: number;
        /**
         * The blend mode to be applied when this state is set. Apply a value of `normal` to reset the blend mode.
         * Setting this mode to anything other than NO_BLEND will automatically switch blending on.
         * @default 'normal'
         */
        blendMode: any;
        /**
         * The polygon offset. Setting this property to anything other than 0 will automatically enable polygon offset fill.
         * @default 0
         */
        polygonOffset: any;
        /**
         * Activates blending of the computed fragment color values.
         * @default true
         */
        blend: boolean;
        /**
         * Enables or disables writing to the depth buffer.
         * @default true
         */
        depthMask: boolean;
        /**
         * Activates adding an offset to depth values of polygon's fragments
         * @default false
         */
        offsets: boolean;
        /** The culling settings for this state none - No culling back - Back face culling front - Front face culling */
        cullMode: "none" | "front" | "back";
        /**
         * Activates culling of polygons.
         * @default false
         */
        culling: boolean;
        /**
         * Specifies whether or not front or back-facing polygons can be culled.
         * @default false
         */
        clockwiseFrontFace: boolean;
        /**
         * Activates depth comparisons and updates to the depth buffer.
         * @default false
         */
        depthTest: boolean;
        _blendMode: any;
        _blendModeId: any;
        _polygonOffset: any;
        toString(): string;
    };
    contextChange(gpu: any): void;
    gpu: any;
    /**
     * Gets the blend mode data for the current state
     * @param state - The state to get the blend mode from
     */
    getColorTargets(state: any): {
        format: string;
        writeMask: number;
        blend: any;
    }[];
    destroy(): void;
}
export namespace GpuStateSystem {
    export namespace extension_42 {
        let type_37: any[];
        export { type_37 as type };
        let name_37: string;
        export { name_37 as name };
    }
    export { extension_42 as extension };
}
export const GpuStencilModesToPixi: any[];
export class GpuStencilSystem {
    constructor(renderer: any);
    _renderTargetStencilState: any;
    _renderer: any;
    onRenderTargetChange(renderTarget: any): void;
    _activeRenderTarget: any;
    setStencilMode(stencilMode: any, stencilReference: any): void;
    destroy(): void;
}
export namespace GpuStencilSystem {
    export namespace extension_43 {
        let type_38: any[];
        export { type_38 as type };
        let name_38: string;
        export { name_38 as name };
    }
    export { extension_43 as extension };
}
export class GpuTextureSystem {
    constructor(renderer: any);
    managedTextures: any[];
    _gpuSources: any;
    _gpuSamplers: any;
    _bindGroupHash: any;
    _textureViewHash: any;
    _uploads: {
        image: {
            type: string;
            upload(source: any, gpuTexture: any, gpu: any): void;
        };
        buffer: {
            type: string;
            upload(source: any, gpuTexture: any, gpu: any): void;
        };
        video: {
            type: string;
            upload(source: any, gpuTexture: any, gpu: any): void;
        };
        compressed: {
            type: string;
            upload(source: any, gpuTexture: any, gpu: any): void;
        };
    };
    _renderer: any;
    contextChange(gpu: any): void;
    _gpu: any;
    initSource(source: any): any;
    onSourceUpdate(source: any): void;
    onSourceUnload(source: any): void;
    onUpdateMipmaps(source: any): void;
    _mipmapGenerator: GpuMipmapGenerator;
    onSourceDestroy(source: any): void;
    onSourceResize(source: any): void;
    _initSampler(sampler: any): any;
    getGpuSampler(sampler: any): any;
    getGpuSource(source: any): any;
    getTextureBindGroup(texture: any): any;
    _createTextureBindGroup(texture: any): any;
    getTextureView(texture: any): any;
    _createTextureView(texture: any): any;
    generateCanvas(texture: any): any;
    getPixels(texture: any): {
        pixels: Uint8ClampedArray;
        width: any;
        height: any;
    };
    destroy(): void;
}
export namespace GpuTextureSystem {
    export namespace extension_44 {
        let type_39: any[];
        export { type_39 as type };
        let name_39: string;
        export { name_39 as name };
    }
    export { extension_44 as extension };
}
export class GpuUboSystem extends UboSystem {
    constructor();
}
export namespace GpuUboSystem {
    export namespace extension_45 {
        let type_40: any[];
        export { type_40 as type };
        let name_40: string;
        export { name_40 as name };
    }
    export { extension_45 as extension };
}
export class GpuUniformBatchPipe {
    constructor(renderer: any);
    _bindGroupHash: any;
    _buffers: Buffer[];
    _bindGroups: any[];
    _bufferResources: any[];
    _renderer: any;
    _batchBuffer: UboBatch;
    renderEnd(): void;
    _resetBindGroups(): void;
    getUniformBindGroup(group: any, duplicate: any): any;
    getUboResource(group: any): any;
    getArrayBindGroup(data: any): any;
    getArrayBufferResource(data: any): any;
    _getBufferResource(index: any): any;
    _getBindGroup(index: any): any;
    _uploadBindGroups(): void;
    destroy(): void;
}
export namespace GpuUniformBatchPipe {
    export namespace extension_46 {
        let type_41: any[];
        export { type_41 as type };
        let name_41: string;
        export { name_41 as name };
    }
    export { extension_46 as extension };
}
export class Graphics extends Container {
    /**
     * @param options - Options for the Graphics.
     */
    constructor(options: any);
    canBundle: boolean;
    renderPipeId: string;
    _roundPixels: number;
    _context: any;
    _ownedContext: {
        [x: string]: any;
        /** unique id for this graphics context */
        uid: number;
        dirty: boolean;
        batchMode: string;
        instructions: any[];
        _activePath: GraphicsPath;
        _transform: Matrix;
        _fillStyle: any;
        _strokeStyle: any;
        _stateStack: any[];
        _tick: number;
        _bounds: Bounds;
        _boundsDirty: boolean;
        /**
         * Creates a new GraphicsContext object that is a clone of this instance, copying all properties,
         * including the current drawing state, transformations, styles, and instructions.
         * @returns A new GraphicsContext instance with the same properties and state as this one.
         */
        clone(): any;
        /**
         * The current fill style of the graphics context. This can be a color, gradient, pattern, or a more complex style defined by a FillStyle object.
         */
        fillStyle: any;
        /**
         * The current stroke style of the graphics context. Similar to fill styles, stroke styles can encompass colors, gradients, patterns, or more detailed configurations via a StrokeStyle object.
         */
        strokeStyle: any;
        /**
         * Sets the current fill style of the graphics context. The fill style can be a color, gradient,
         * pattern, or a more complex style defined by a FillStyle object.
         * @param style - The fill style to apply. This can be a simple color, a gradient or pattern object,
         *                or a FillStyle or ConvertedFillStyle object.
         * @returns The instance of the current GraphicsContext for method chaining.
         */
        setFillStyle(style: any): any;
        /**
         * Sets the current stroke style of the graphics context. Similar to fill styles, stroke styles can
         * encompass colors, gradients, patterns, or more detailed configurations via a StrokeStyle object.
         * @param style - The stroke style to apply. Can be defined as a color, a gradient or pattern,
         *                or a StrokeStyle or ConvertedStrokeStyle object.
         * @returns The instance of the current GraphicsContext for method chaining.
         */
        setStrokeStyle(style: any): any;
        texture(texture: any, tint: any, dx: any, dy: any, dw: any, dh: any): any;
        /**
         * Resets the current path. Any previous path and its commands are discarded and a new path is
         * started. This is typically called before beginning a new shape or series of drawing commands.
         * @returns The instance of the current GraphicsContext for method chaining.
         */
        beginPath(): any;
        fill(style: any, alpha: any): any;
        _initNextPathLocation(): void;
        /**
         * Strokes the current path with the current stroke style. This method can take an optional
         * FillInput parameter to define the stroke's appearance, including its color, width, and other properties.
         * @param style - (Optional) The stroke style to apply. Can be defined as a simple color or a more complex style object. If omitted, uses the current stroke style.
         * @returns The instance of the current GraphicsContext for method chaining.
         */
        stroke(style: any): any;
        /**
         * Applies a cutout to the last drawn shape. This is used to create holes or complex shapes by
         * subtracting a path from the previously drawn path. If a hole is not completely in a shape, it will
         * fail to cut correctly!
         * @returns The instance of the current GraphicsContext for method chaining.
         */
        cut(): any;
        /**
         * Adds an arc to the current path, which is centered at (x, y) with the specified radius,
         * starting and ending angles, and direction.
         * @param x - The x-coordinate of the arc's center.
         * @param y - The y-coordinate of the arc's center.
         * @param radius - The arc's radius.
         * @param startAngle - The starting angle, in radians.
         * @param endAngle - The ending angle, in radians.
         * @param counterclockwise - (Optional) Specifies whether the arc is drawn counterclockwise (true) or clockwise (false). Defaults to false.
         * @returns The instance of the current GraphicsContext for method chaining.
         */
        arc(x: any, y: any, radius: any, startAngle: any, endAngle: any, counterclockwise: any): any;
        /**
         * Adds an arc to the current path with the given control points and radius, connected to the previous point
         * by a straight line if necessary.
         * @param x1 - The x-coordinate of the first control point.
         * @param y1 - The y-coordinate of the first control point.
         * @param x2 - The x-coordinate of the second control point.
         * @param y2 - The y-coordinate of the second control point.
         * @param radius - The arc's radius.
         * @returns The instance of the current GraphicsContext for method chaining.
         */
        arcTo(x1: any, y1: any, x2: any, y2: any, radius: any): any;
        /**
         * Adds an SVG-style arc to the path, allowing for elliptical arcs based on the SVG spec.
         * @param rx - The x-radius of the ellipse.
         * @param ry - The y-radius of the ellipse.
         * @param xAxisRotation - The rotation of the ellipse's x-axis relative
         * to the x-axis of the coordinate system, in degrees.
         * @param largeArcFlag - Determines if the arc should be greater than or less than 180 degrees.
         * @param sweepFlag - Determines if the arc should be swept in a positive angle direction.
         * @param x - The x-coordinate of the arc's end point.
         * @param y - The y-coordinate of the arc's end point.
         * @returns The instance of the current object for chaining.
         */
        arcToSvg(rx: any, ry: any, xAxisRotation: any, largeArcFlag: any, sweepFlag: any, x: any, y: any): any;
        /**
         * Adds a cubic Bezier curve to the path.
         * It requires three points: the first two are control points and the third one is the end point.
         * The starting point is the last point in the current path.
         * @param cp1x - The x-coordinate of the first control point.
         * @param cp1y - The y-coordinate of the first control point.
         * @param cp2x - The x-coordinate of the second control point.
         * @param cp2y - The y-coordinate of the second control point.
         * @param x - The x-coordinate of the end point.
         * @param y - The y-coordinate of the end point.
         * @param smoothness - Optional parameter to adjust the smoothness of the curve.
         * @returns The instance of the current object for chaining.
         */
        bezierCurveTo(cp1x: any, cp1y: any, cp2x: any, cp2y: any, x: any, y: any, smoothness: any): any;
        /**
         * Closes the current path by drawing a straight line back to the start.
         * If the shape is already closed or there are no points in the path, this method does nothing.
         * @returns The instance of the current object for chaining.
         */
        closePath(): any;
        /**
         * Draws an ellipse at the specified location and with the given x and y radii.
         * An optional transformation can be applied, allowing for rotation, scaling, and translation.
         * @param x - The x-coordinate of the center of the ellipse.
         * @param y - The y-coordinate of the center of the ellipse.
         * @param radiusX - The horizontal radius of the ellipse.
         * @param radiusY - The vertical radius of the ellipse.
         * @returns The instance of the current object for chaining.
         */
        ellipse(x: any, y: any, radiusX: any, radiusY: any): any;
        /**
         * Draws a circle shape. This method adds a new circle path to the current drawing.
         * @param x - The x-coordinate of the center of the circle.
         * @param y - The y-coordinate of the center of the circle.
         * @param radius - The radius of the circle.
         * @returns The instance of the current object for chaining.
         */
        circle(x: any, y: any, radius: any): any;
        /**
         * Adds another `GraphicsPath` to this path, optionally applying a transformation.
         * @param path - The `GraphicsPath` to add.
         * @returns The instance of the current object for chaining.
         */
        path(path: any): any;
        /**
         * Connects the current point to a new point with a straight line. This method updates the current path.
         * @param x - The x-coordinate of the new point to connect to.
         * @param y - The y-coordinate of the new point to connect to.
         * @returns The instance of the current object for chaining.
         */
        lineTo(x: any, y: any): any;
        /**
         * Sets the starting point for a new sub-path. Any subsequent drawing commands are considered part of this path.
         * @param x - The x-coordinate for the starting point.
         * @param y - The y-coordinate for the starting point.
         * @returns The instance of the current object for chaining.
         */
        moveTo(x: any, y: any): any;
        /**
         * Adds a quadratic curve to the path. It requires two points: the control point and the end point.
         * The starting point is the last point in the current path.
         * @param cpx - The x-coordinate of the control point.
         * @param cpy - The y-coordinate of the control point.
         * @param x - The x-coordinate of the end point.
         * @param y - The y-coordinate of the end point.
         * @param smoothness - Optional parameter to adjust the smoothness of the curve.
         * @returns The instance of the current object for chaining.
         */
        quadraticCurveTo(cpx: any, cpy: any, x: any, y: any, smoothness: any): any;
        /**
         * Draws a rectangle shape. This method adds a new rectangle path to the current drawing.
         * @param x - The x-coordinate of the top-left corner of the rectangle.
         * @param y - The y-coordinate of the top-left corner of the rectangle.
         * @param w - The width of the rectangle.
         * @param h - The height of the rectangle.
         * @returns The instance of the current object for chaining.
         */
        rect(x: any, y: any, w: any, h: any): any;
        /**
         * Draws a rectangle with rounded corners.
         * The corner radius can be specified to determine how rounded the corners should be.
         * An optional transformation can be applied, which allows for rotation, scaling, and translation of the rectangle.
         * @param x - The x-coordinate of the top-left corner of the rectangle.
         * @param y - The y-coordinate of the top-left corner of the rectangle.
         * @param w - The width of the rectangle.
         * @param h - The height of the rectangle.
         * @param radius - The radius of the rectangle's corners. If not specified, corners will be sharp.
         * @returns The instance of the current object for chaining.
         */
        roundRect(x: any, y: any, w: any, h: any, radius: any): any;
        /**
         * Draws a polygon shape by specifying a sequence of points. This method allows for the creation of complex polygons,
         * which can be both open and closed. An optional transformation can be applied, enabling the polygon to be scaled,
         * rotated, or translated as needed.
         * @param points - An array of numbers, or an array of PointData objects eg [{x,y}, {x,y}, {x,y}]
         * representing the x and y coordinates, of the polygon's vertices, in sequence.
         * @param close - A boolean indicating whether to close the polygon path. True by default.
         */
        poly(points: any, close: any): any;
        /**
         * Draws a regular polygon with a specified number of sides. All sides and angles are equal.
         * @param x - The x-coordinate of the center of the polygon.
         * @param y - The y-coordinate of the center of the polygon.
         * @param radius - The radius of the circumscribed circle of the polygon.
         * @param sides - The number of sides of the polygon. Must be 3 or more.
         * @param rotation - The rotation angle of the polygon, in radians. Zero by default.
         * @param transform - An optional `Matrix` object to apply a transformation to the polygon.
         * @returns The instance of the current object for chaining.
         */
        regularPoly(x: any, y: any, radius: any, sides: any, rotation: number, transform: any): any;
        /**
         * Draws a polygon with rounded corners.
         * Similar to `regularPoly` but with the ability to round the corners of the polygon.
         * @param x - The x-coordinate of the center of the polygon.
         * @param y - The y-coordinate of the center of the polygon.
         * @param radius - The radius of the circumscribed circle of the polygon.
         * @param sides - The number of sides of the polygon. Must be 3 or more.
         * @param corner - The radius of the rounding of the corners.
         * @param rotation - The rotation angle of the polygon, in radians. Zero by default.
         * @returns The instance of the current object for chaining.
         */
        roundPoly(x: any, y: any, radius: any, sides: any, corner: any, rotation: any): any;
        /**
         * Draws a shape with rounded corners. This function supports custom radius for each corner of the shape.
         * Optionally, corners can be rounded using a quadratic curve instead of an arc, providing a different aesthetic.
         * @param points - An array of `RoundedPoint` representing the corners of the shape to draw.
         * A minimum of 3 points is required.
         * @param radius - The default radius for the corners.
         * This radius is applied to all corners unless overridden in `points`.
         * @param useQuadratic - If set to true, rounded corners are drawn using a quadraticCurve
         *  method instead of an arc method. Defaults to false.
         * @param smoothness - Specifies the smoothness of the curve when `useQuadratic` is true.
         * Higher values make the curve smoother.
         * @returns The instance of the current object for chaining.
         */
        roundShape(points: any, radius: any, useQuadratic: any, smoothness: any): any;
        /**
         * Draw Rectangle with fillet corners. This is much like rounded rectangle
         * however it support negative numbers as well for the corner radius.
         * @param x - Upper left corner of rect
         * @param y - Upper right corner of rect
         * @param width - Width of rect
         * @param height - Height of rect
         * @param fillet - accept negative or positive values
         */
        filletRect(x: any, y: any, width: any, height: any, fillet: any): any;
        /**
         * Draw Rectangle with chamfer corners. These are angled corners.
         * @param x - Upper left corner of rect
         * @param y - Upper right corner of rect
         * @param width - Width of rect
         * @param height - Height of rect
         * @param chamfer - non-zero real number, size of corner cutout
         * @param transform
         */
        chamferRect(x: any, y: any, width: any, height: any, chamfer: any, transform: any): any;
        /**
         * Draws a star shape centered at a specified location. This method allows for the creation
         *  of stars with a variable number of points, outer radius, optional inner radius, and rotation.
         * The star is drawn as a closed polygon with alternating outer and inner vertices to create the star's points.
         * An optional transformation can be applied to scale, rotate, or translate the star as needed.
         * @param x - The x-coordinate of the center of the star.
         * @param y - The y-coordinate of the center of the star.
         * @param points - The number of points of the star.
         * @param radius - The outer radius of the star (distance from the center to the outer points).
         * @param innerRadius - Optional. The inner radius of the star
         * (distance from the center to the inner points between the outer points).
         * If not provided, defaults to half of the `radius`.
         * @param rotation - Optional. The rotation of the star in radians, where 0 is aligned with the y-axis.
         * Defaults to 0, meaning one point is directly upward.
         * @returns The instance of the current object for chaining further drawing commands.
         */
        star(x: any, y: any, points: any, radius: any, innerRadius?: number, rotation?: number): any;
        /**
         * Parses and renders an SVG string into the graphics context. This allows for complex shapes and paths
         * defined in SVG format to be drawn within the graphics context.
         * @param svg - The SVG string to be parsed and rendered.
         */
        svg(svg: any): any;
        /**
         * Restores the most recently saved graphics state by popping the top of the graphics state stack.
         * This includes transformations, fill styles, and stroke styles.
         */
        restore(): any;
        /** Saves the current graphics state, including transformations, fill styles, and stroke styles, onto a stack. */
        save(): any;
        /**
         * Returns the current transformation matrix of the graphics context.
         * @returns The current transformation matrix.
         */
        getTransform(): Matrix;
        /**
         * Resets the current transformation matrix to the identity matrix, effectively removing any transformations (rotation, scaling, translation) previously applied.
         * @returns The instance of the current GraphicsContext for method chaining.
         */
        resetTransform(): any;
        /**
         * Applies a rotation transformation to the graphics context around the current origin.
         * @param angle - The angle of rotation in radians.
         * @returns The instance of the current GraphicsContext for method chaining.
         */
        rotate(angle: any): any;
        /**
         * Applies a scaling transformation to the graphics context, scaling drawings by x horizontally and by y vertically.
         * @param x - The scale factor in the horizontal direction.
         * @param y - (Optional) The scale factor in the vertical direction. If not specified, the x value is used for both directions.
         * @returns The instance of the current GraphicsContext for method chaining.
         */
        scale(x: any, y?: any): any;
        setTransform(a: any, b: any, c: any, d: any, dx: any, dy: any): any;
        transform(a: any, b: any, c: any, d: any, dx: any, dy: any): any;
        /**
         * Applies a translation transformation to the graphics context, moving the origin by the specified amounts.
         * @param x - The amount to translate in the horizontal direction.
         * @param y - (Optional) The amount to translate in the vertical direction. If not specified, the x value is used for both directions.
         * @returns The instance of the current GraphicsContext for method chaining.
         */
        translate(x: any, y?: any): any;
        /**
         * Clears all drawing commands from the graphics context, effectively resetting it. This includes clearing the path,
         * and optionally resetting transformations to the identity matrix.
         * @returns The instance of the current GraphicsContext for method chaining.
         */
        clear(): any;
        onUpdate(): void;
        /** The bounds of the graphic shape. */
        readonly bounds: Bounds;
        /**
         * Check to see if a point is contained within this geometry.
         * @param point - Point to check if it's contained.
         * @returns {boolean} `true` if the point is contained within geometry.
         */
        containsPoint(point: any): boolean;
        /**
         * Destroys the GraphicsData object.
         * @param options - Options parameter. A boolean will act as if all options
         *  have been set to that value
         * @param {boolean} [options.texture=false] - Should it destroy the current texture of the fill/stroke style?
         * @param {boolean} [options.textureSource=false] - Should it destroy the texture source of the fill/stroke style?
         */
        destroy(options?: boolean): void;
        customShader: any;
    };
    allowChildren: boolean;
    set roundPixels(value: boolean);
    /**
     *  Whether or not to round the x/y position of the graphic.
     * @type {boolean}
     */
    get roundPixels(): boolean;
    set context(context: any);
    get context(): any;
    /**
     * The local bounds of the graphic.
     * @type {rendering.Bounds}
     */
    get bounds(): rendering.Bounds;
    /**
     * Adds the bounds of this object to the bounds object.
     * @param bounds - The output bounds object.
     */
    addBounds(bounds: any): void;
    /**
     * Checks if the object contains the given point.
     * @param point - The point to check
     */
    containsPoint(point: any): any;
    onViewUpdate(): void;
    _didGraphicsUpdate: boolean;
    /**
     * Destroys this graphics renderable and optionally its context.
     * @param options - Options parameter. A boolean will act as if all options
     *
     * If the context was created by this graphics and `destroy(false)` or `destroy()` is called
     * then the context will still be destroyed.
     *
     * If you want to explicitly not destroy this context that this graphics created,
     * then you should pass destroy({ context: false })
     *
     * If the context was passed in as an argument to the constructor then it will not be destroyed
     * @param {boolean} [options.texture=false] - Should destroy the texture of the graphics context
     * @param {boolean} [options.textureSource=false] - Should destroy the texture source of the graphics context
     * @param {boolean} [options.context=false] - Should destroy the context
     */
    destroy(options: any): void;
    _callContextMethod(method: any, args: any): this;
    /**
     * Sets the current fill style of the graphics context. The fill style can be a color, gradient,
     * pattern, or a more complex style defined by a FillStyle object.
     * @param {FillInput} args - The fill style to apply. This can be a simple color, a gradient or
     * pattern object, or a FillStyle or ConvertedFillStyle object.
     * @returns The instance of the current GraphicsContext for method chaining.
     */
    setFillStyle(...args: FillInput): this;
    /**
     * Sets the current stroke style of the graphics context. Similar to fill styles, stroke styles can
     * encompass colors, gradients, patterns, or more detailed configurations via a StrokeStyle object.
     * @param {StrokeInput} args - The stroke style to apply. Can be defined as a color, a gradient or pattern,
     * or a StrokeStyle or ConvertedStrokeStyle object.
     * @returns The instance of the current GraphicsContext for method chaining.
     */
    setStrokeStyle(...args: StrokeInput): this;
    fill(...args: any[]): this;
    /**
     * Strokes the current path with the current stroke style. This method can take an optional
     * FillStyle parameter to define the stroke's appearance, including its color, width, and other properties.
     * @param {FillStyle} args - (Optional) The stroke style to apply. Can be defined as a simple color or a more
     * complex style object. If omitted, uses the current stroke style.
     * @returns The instance of the current GraphicsContext for method chaining.
     */
    stroke(...args: FillStyle): this;
    texture(...args: any[]): this;
    /**
     * Resets the current path. Any previous path and its commands are discarded and a new path is
     * started. This is typically called before beginning a new shape or series of drawing commands.
     * @returns The instance of the current GraphicsContext for method chaining.
     */
    beginPath(): this;
    /**
     * Applies a cutout to the last drawn shape. This is used to create holes or complex shapes by
     * subtracting a path from the previously drawn path. If a hole is not completely in a shape, it will
     * fail to cut correctly!
     */
    cut(): this;
    arc(...args: any[]): this;
    arcTo(...args: any[]): this;
    arcToSvg(...args: any[]): this;
    bezierCurveTo(...args: any[]): this;
    /**
     * Closes the current path by drawing a straight line back to the start.
     * If the shape is already closed or there are no points in the path, this method does nothing.
     * @returns The instance of the current object for chaining.
     */
    closePath(): this;
    ellipse(...args: any[]): this;
    circle(...args: any[]): this;
    path(...args: any[]): this;
    lineTo(...args: any[]): this;
    moveTo(...args: any[]): this;
    quadraticCurveTo(...args: any[]): this;
    rect(...args: any[]): this;
    roundRect(...args: any[]): this;
    poly(...args: any[]): this;
    regularPoly(...args: any[]): this;
    roundPoly(...args: any[]): this;
    roundShape(...args: any[]): this;
    filletRect(...args: any[]): this;
    chamferRect(...args: any[]): this;
    star(...args: any[]): this;
    svg(...args: any[]): this;
    restore(...args: any[]): this;
    /** Saves the current graphics state, including transformations, fill styles, and stroke styles, onto a stack. */
    save(): this;
    /**
     * Returns the current transformation matrix of the graphics context.
     * @returns The current transformation matrix.
     */
    getTransform(): any;
    /**
     * Resets the current transformation matrix to the identity matrix, effectively removing
     * any transformations (rotation, scaling, translation) previously applied.
     * @returns The instance of the current GraphicsContext for method chaining.
     */
    resetTransform(): this;
    rotateTransform(...args: any[]): this;
    scaleTransform(...args: any[]): this;
    setTransform(...args: any[]): this;
    transform(...args: any[]): this;
    translateTransform(...args: any[]): this;
    /**
     * Clears all drawing commands from the graphics context, effectively resetting it. This includes clearing the path,
     * and optionally resetting transformations to the identity matrix.
     * @returns The instance of the current GraphicsContext for method chaining.
     */
    clear(): this;
    set fillStyle(value: ConvertedFillStyle);
    /**
     * The fill style to use.
     * @type {ConvertedFillStyle}
     */
    get fillStyle(): ConvertedFillStyle;
    set strokeStyle(value: ConvertedStrokeStyle);
    /**
     * The stroke style to use.
     * @type {ConvertedStrokeStyle}
     */
    get strokeStyle(): ConvertedStrokeStyle;
    /**
     * Creates a new Graphics object.
     * Note that only the context of the object is cloned, not its transform (position,scale,etc)
     * @param deep - Whether to create a deep clone of the graphics object. If false, the context
     * will be shared between the two objects (default false). If true, the context will be
     * cloned (recommended if you need to modify the context in any way).
     * @returns - A clone of the graphics object
     */
    clone(deep?: boolean): Graphics;
    /**
     * @param width
     * @param color
     * @param alpha
     * @deprecated since 8.0.0 Use {@link Graphics#setStrokeStyle} instead
     */
    lineStyle(width: any, color: any, alpha: any): this;
    /**
     * @param color
     * @param alpha
     * @deprecated since 8.0.0 Use {@link Graphics#fill} instead
     */
    beginFill(color: any, alpha: any): this;
    /**
     * @deprecated since 8.0.0 Use {@link Graphics#fill} instead
     */
    endFill(): this;
    /**
     * @param {...any} args
     * @deprecated since 8.0.0 Use {@link Graphics#circle} instead
     */
    drawCircle(...args: any[]): this;
    /**
     * @param {...any} args
     * @deprecated since 8.0.0 Use {@link Graphics#ellipse} instead
     */
    drawEllipse(...args: any[]): this;
    /**
     * @param {...any} args
     * @deprecated since 8.0.0 Use {@link Graphics#poly} instead
     */
    drawPolygon(...args: any[]): this;
    /**
     * @param {...any} args
     * @deprecated since 8.0.0 Use {@link Graphics#rect} instead
     */
    drawRect(...args: any[]): this;
    /**
     * @param {...any} args
     * @deprecated since 8.0.0 Use {@link Graphics#roundRect} instead
     */
    drawRoundedRect(...args: any[]): this;
    /**
     * @param {...any} args
     * @deprecated since 8.0.0 Use {@link Graphics#star} instead
     */
    drawStar(...args: any[]): this;
}
export let GraphicsContext: {
    new (...args: any[]): {
        [x: string]: any;
        /** unique id for this graphics context */
        uid: number;
        dirty: boolean;
        batchMode: string;
        instructions: any[];
        _activePath: GraphicsPath;
        _transform: Matrix;
        _fillStyle: any;
        _strokeStyle: any;
        _stateStack: any[];
        _tick: number;
        _bounds: Bounds;
        _boundsDirty: boolean;
        /**
         * Creates a new GraphicsContext object that is a clone of this instance, copying all properties,
         * including the current drawing state, transformations, styles, and instructions.
         * @returns A new GraphicsContext instance with the same properties and state as this one.
         */
        clone(): any;
        /**
         * The current fill style of the graphics context. This can be a color, gradient, pattern, or a more complex style defined by a FillStyle object.
         */
        fillStyle: any;
        /**
         * The current stroke style of the graphics context. Similar to fill styles, stroke styles can encompass colors, gradients, patterns, or more detailed configurations via a StrokeStyle object.
         */
        strokeStyle: any;
        /**
         * Sets the current fill style of the graphics context. The fill style can be a color, gradient,
         * pattern, or a more complex style defined by a FillStyle object.
         * @param style - The fill style to apply. This can be a simple color, a gradient or pattern object,
         *                or a FillStyle or ConvertedFillStyle object.
         * @returns The instance of the current GraphicsContext for method chaining.
         */
        setFillStyle(style: any): any;
        /**
         * Sets the current stroke style of the graphics context. Similar to fill styles, stroke styles can
         * encompass colors, gradients, patterns, or more detailed configurations via a StrokeStyle object.
         * @param style - The stroke style to apply. Can be defined as a color, a gradient or pattern,
         *                or a StrokeStyle or ConvertedStrokeStyle object.
         * @returns The instance of the current GraphicsContext for method chaining.
         */
        setStrokeStyle(style: any): any;
        texture(texture: any, tint: any, dx: any, dy: any, dw: any, dh: any): any;
        /**
         * Resets the current path. Any previous path and its commands are discarded and a new path is
         * started. This is typically called before beginning a new shape or series of drawing commands.
         * @returns The instance of the current GraphicsContext for method chaining.
         */
        beginPath(): any;
        fill(style: any, alpha: any): any;
        _initNextPathLocation(): void;
        /**
         * Strokes the current path with the current stroke style. This method can take an optional
         * FillInput parameter to define the stroke's appearance, including its color, width, and other properties.
         * @param style - (Optional) The stroke style to apply. Can be defined as a simple color or a more complex style object. If omitted, uses the current stroke style.
         * @returns The instance of the current GraphicsContext for method chaining.
         */
        stroke(style: any): any;
        /**
         * Applies a cutout to the last drawn shape. This is used to create holes or complex shapes by
         * subtracting a path from the previously drawn path. If a hole is not completely in a shape, it will
         * fail to cut correctly!
         * @returns The instance of the current GraphicsContext for method chaining.
         */
        cut(): any;
        /**
         * Adds an arc to the current path, which is centered at (x, y) with the specified radius,
         * starting and ending angles, and direction.
         * @param x - The x-coordinate of the arc's center.
         * @param y - The y-coordinate of the arc's center.
         * @param radius - The arc's radius.
         * @param startAngle - The starting angle, in radians.
         * @param endAngle - The ending angle, in radians.
         * @param counterclockwise - (Optional) Specifies whether the arc is drawn counterclockwise (true) or clockwise (false). Defaults to false.
         * @returns The instance of the current GraphicsContext for method chaining.
         */
        arc(x: any, y: any, radius: any, startAngle: any, endAngle: any, counterclockwise: any): any;
        /**
         * Adds an arc to the current path with the given control points and radius, connected to the previous point
         * by a straight line if necessary.
         * @param x1 - The x-coordinate of the first control point.
         * @param y1 - The y-coordinate of the first control point.
         * @param x2 - The x-coordinate of the second control point.
         * @param y2 - The y-coordinate of the second control point.
         * @param radius - The arc's radius.
         * @returns The instance of the current GraphicsContext for method chaining.
         */
        arcTo(x1: any, y1: any, x2: any, y2: any, radius: any): any;
        /**
         * Adds an SVG-style arc to the path, allowing for elliptical arcs based on the SVG spec.
         * @param rx - The x-radius of the ellipse.
         * @param ry - The y-radius of the ellipse.
         * @param xAxisRotation - The rotation of the ellipse's x-axis relative
         * to the x-axis of the coordinate system, in degrees.
         * @param largeArcFlag - Determines if the arc should be greater than or less than 180 degrees.
         * @param sweepFlag - Determines if the arc should be swept in a positive angle direction.
         * @param x - The x-coordinate of the arc's end point.
         * @param y - The y-coordinate of the arc's end point.
         * @returns The instance of the current object for chaining.
         */
        arcToSvg(rx: any, ry: any, xAxisRotation: any, largeArcFlag: any, sweepFlag: any, x: any, y: any): any;
        /**
         * Adds a cubic Bezier curve to the path.
         * It requires three points: the first two are control points and the third one is the end point.
         * The starting point is the last point in the current path.
         * @param cp1x - The x-coordinate of the first control point.
         * @param cp1y - The y-coordinate of the first control point.
         * @param cp2x - The x-coordinate of the second control point.
         * @param cp2y - The y-coordinate of the second control point.
         * @param x - The x-coordinate of the end point.
         * @param y - The y-coordinate of the end point.
         * @param smoothness - Optional parameter to adjust the smoothness of the curve.
         * @returns The instance of the current object for chaining.
         */
        bezierCurveTo(cp1x: any, cp1y: any, cp2x: any, cp2y: any, x: any, y: any, smoothness: any): any;
        /**
         * Closes the current path by drawing a straight line back to the start.
         * If the shape is already closed or there are no points in the path, this method does nothing.
         * @returns The instance of the current object for chaining.
         */
        closePath(): any;
        /**
         * Draws an ellipse at the specified location and with the given x and y radii.
         * An optional transformation can be applied, allowing for rotation, scaling, and translation.
         * @param x - The x-coordinate of the center of the ellipse.
         * @param y - The y-coordinate of the center of the ellipse.
         * @param radiusX - The horizontal radius of the ellipse.
         * @param radiusY - The vertical radius of the ellipse.
         * @returns The instance of the current object for chaining.
         */
        ellipse(x: any, y: any, radiusX: any, radiusY: any): any;
        /**
         * Draws a circle shape. This method adds a new circle path to the current drawing.
         * @param x - The x-coordinate of the center of the circle.
         * @param y - The y-coordinate of the center of the circle.
         * @param radius - The radius of the circle.
         * @returns The instance of the current object for chaining.
         */
        circle(x: any, y: any, radius: any): any;
        /**
         * Adds another `GraphicsPath` to this path, optionally applying a transformation.
         * @param path - The `GraphicsPath` to add.
         * @returns The instance of the current object for chaining.
         */
        path(path: any): any;
        /**
         * Connects the current point to a new point with a straight line. This method updates the current path.
         * @param x - The x-coordinate of the new point to connect to.
         * @param y - The y-coordinate of the new point to connect to.
         * @returns The instance of the current object for chaining.
         */
        lineTo(x: any, y: any): any;
        /**
         * Sets the starting point for a new sub-path. Any subsequent drawing commands are considered part of this path.
         * @param x - The x-coordinate for the starting point.
         * @param y - The y-coordinate for the starting point.
         * @returns The instance of the current object for chaining.
         */
        moveTo(x: any, y: any): any;
        /**
         * Adds a quadratic curve to the path. It requires two points: the control point and the end point.
         * The starting point is the last point in the current path.
         * @param cpx - The x-coordinate of the control point.
         * @param cpy - The y-coordinate of the control point.
         * @param x - The x-coordinate of the end point.
         * @param y - The y-coordinate of the end point.
         * @param smoothness - Optional parameter to adjust the smoothness of the curve.
         * @returns The instance of the current object for chaining.
         */
        quadraticCurveTo(cpx: any, cpy: any, x: any, y: any, smoothness: any): any;
        /**
         * Draws a rectangle shape. This method adds a new rectangle path to the current drawing.
         * @param x - The x-coordinate of the top-left corner of the rectangle.
         * @param y - The y-coordinate of the top-left corner of the rectangle.
         * @param w - The width of the rectangle.
         * @param h - The height of the rectangle.
         * @returns The instance of the current object for chaining.
         */
        rect(x: any, y: any, w: any, h: any): any;
        /**
         * Draws a rectangle with rounded corners.
         * The corner radius can be specified to determine how rounded the corners should be.
         * An optional transformation can be applied, which allows for rotation, scaling, and translation of the rectangle.
         * @param x - The x-coordinate of the top-left corner of the rectangle.
         * @param y - The y-coordinate of the top-left corner of the rectangle.
         * @param w - The width of the rectangle.
         * @param h - The height of the rectangle.
         * @param radius - The radius of the rectangle's corners. If not specified, corners will be sharp.
         * @returns The instance of the current object for chaining.
         */
        roundRect(x: any, y: any, w: any, h: any, radius: any): any;
        /**
         * Draws a polygon shape by specifying a sequence of points. This method allows for the creation of complex polygons,
         * which can be both open and closed. An optional transformation can be applied, enabling the polygon to be scaled,
         * rotated, or translated as needed.
         * @param points - An array of numbers, or an array of PointData objects eg [{x,y}, {x,y}, {x,y}]
         * representing the x and y coordinates, of the polygon's vertices, in sequence.
         * @param close - A boolean indicating whether to close the polygon path. True by default.
         */
        poly(points: any, close: any): any;
        /**
         * Draws a regular polygon with a specified number of sides. All sides and angles are equal.
         * @param x - The x-coordinate of the center of the polygon.
         * @param y - The y-coordinate of the center of the polygon.
         * @param radius - The radius of the circumscribed circle of the polygon.
         * @param sides - The number of sides of the polygon. Must be 3 or more.
         * @param rotation - The rotation angle of the polygon, in radians. Zero by default.
         * @param transform - An optional `Matrix` object to apply a transformation to the polygon.
         * @returns The instance of the current object for chaining.
         */
        regularPoly(x: any, y: any, radius: any, sides: any, rotation: number, transform: any): any;
        /**
         * Draws a polygon with rounded corners.
         * Similar to `regularPoly` but with the ability to round the corners of the polygon.
         * @param x - The x-coordinate of the center of the polygon.
         * @param y - The y-coordinate of the center of the polygon.
         * @param radius - The radius of the circumscribed circle of the polygon.
         * @param sides - The number of sides of the polygon. Must be 3 or more.
         * @param corner - The radius of the rounding of the corners.
         * @param rotation - The rotation angle of the polygon, in radians. Zero by default.
         * @returns The instance of the current object for chaining.
         */
        roundPoly(x: any, y: any, radius: any, sides: any, corner: any, rotation: any): any;
        /**
         * Draws a shape with rounded corners. This function supports custom radius for each corner of the shape.
         * Optionally, corners can be rounded using a quadratic curve instead of an arc, providing a different aesthetic.
         * @param points - An array of `RoundedPoint` representing the corners of the shape to draw.
         * A minimum of 3 points is required.
         * @param radius - The default radius for the corners.
         * This radius is applied to all corners unless overridden in `points`.
         * @param useQuadratic - If set to true, rounded corners are drawn using a quadraticCurve
         *  method instead of an arc method. Defaults to false.
         * @param smoothness - Specifies the smoothness of the curve when `useQuadratic` is true.
         * Higher values make the curve smoother.
         * @returns The instance of the current object for chaining.
         */
        roundShape(points: any, radius: any, useQuadratic: any, smoothness: any): any;
        /**
         * Draw Rectangle with fillet corners. This is much like rounded rectangle
         * however it support negative numbers as well for the corner radius.
         * @param x - Upper left corner of rect
         * @param y - Upper right corner of rect
         * @param width - Width of rect
         * @param height - Height of rect
         * @param fillet - accept negative or positive values
         */
        filletRect(x: any, y: any, width: any, height: any, fillet: any): any;
        /**
         * Draw Rectangle with chamfer corners. These are angled corners.
         * @param x - Upper left corner of rect
         * @param y - Upper right corner of rect
         * @param width - Width of rect
         * @param height - Height of rect
         * @param chamfer - non-zero real number, size of corner cutout
         * @param transform
         */
        chamferRect(x: any, y: any, width: any, height: any, chamfer: any, transform: any): any;
        /**
         * Draws a star shape centered at a specified location. This method allows for the creation
         *  of stars with a variable number of points, outer radius, optional inner radius, and rotation.
         * The star is drawn as a closed polygon with alternating outer and inner vertices to create the star's points.
         * An optional transformation can be applied to scale, rotate, or translate the star as needed.
         * @param x - The x-coordinate of the center of the star.
         * @param y - The y-coordinate of the center of the star.
         * @param points - The number of points of the star.
         * @param radius - The outer radius of the star (distance from the center to the outer points).
         * @param innerRadius - Optional. The inner radius of the star
         * (distance from the center to the inner points between the outer points).
         * If not provided, defaults to half of the `radius`.
         * @param rotation - Optional. The rotation of the star in radians, where 0 is aligned with the y-axis.
         * Defaults to 0, meaning one point is directly upward.
         * @returns The instance of the current object for chaining further drawing commands.
         */
        star(x: any, y: any, points: any, radius: any, innerRadius?: number, rotation?: number): any;
        /**
         * Parses and renders an SVG string into the graphics context. This allows for complex shapes and paths
         * defined in SVG format to be drawn within the graphics context.
         * @param svg - The SVG string to be parsed and rendered.
         */
        svg(svg: any): any;
        /**
         * Restores the most recently saved graphics state by popping the top of the graphics state stack.
         * This includes transformations, fill styles, and stroke styles.
         */
        restore(): any;
        /** Saves the current graphics state, including transformations, fill styles, and stroke styles, onto a stack. */
        save(): any;
        /**
         * Returns the current transformation matrix of the graphics context.
         * @returns The current transformation matrix.
         */
        getTransform(): Matrix;
        /**
         * Resets the current transformation matrix to the identity matrix, effectively removing any transformations (rotation, scaling, translation) previously applied.
         * @returns The instance of the current GraphicsContext for method chaining.
         */
        resetTransform(): any;
        /**
         * Applies a rotation transformation to the graphics context around the current origin.
         * @param angle - The angle of rotation in radians.
         * @returns The instance of the current GraphicsContext for method chaining.
         */
        rotate(angle: any): any;
        /**
         * Applies a scaling transformation to the graphics context, scaling drawings by x horizontally and by y vertically.
         * @param x - The scale factor in the horizontal direction.
         * @param y - (Optional) The scale factor in the vertical direction. If not specified, the x value is used for both directions.
         * @returns The instance of the current GraphicsContext for method chaining.
         */
        scale(x: any, y?: any): any;
        setTransform(a: any, b: any, c: any, d: any, dx: any, dy: any): any;
        transform(a: any, b: any, c: any, d: any, dx: any, dy: any): any;
        /**
         * Applies a translation transformation to the graphics context, moving the origin by the specified amounts.
         * @param x - The amount to translate in the horizontal direction.
         * @param y - (Optional) The amount to translate in the vertical direction. If not specified, the x value is used for both directions.
         * @returns The instance of the current GraphicsContext for method chaining.
         */
        translate(x: any, y?: any): any;
        /**
         * Clears all drawing commands from the graphics context, effectively resetting it. This includes clearing the path,
         * and optionally resetting transformations to the identity matrix.
         * @returns The instance of the current GraphicsContext for method chaining.
         */
        clear(): any;
        onUpdate(): void;
        /** The bounds of the graphic shape. */
        readonly bounds: Bounds;
        /**
         * Check to see if a point is contained within this geometry.
         * @param point - Point to check if it's contained.
         * @returns {boolean} `true` if the point is contained within geometry.
         */
        containsPoint(point: any): boolean;
        /**
         * Destroys the GraphicsData object.
         * @param options - Options parameter. A boolean will act as if all options
         *  have been set to that value
         * @param {boolean} [options.texture=false] - Should it destroy the current texture of the fill/stroke style?
         * @param {boolean} [options.textureSource=false] - Should it destroy the texture source of the fill/stroke style?
         */
        destroy(options?: boolean): void;
        customShader: any;
    };
    [x: string]: any;
    /** The default fill style to use when none is provided. */
    defaultFillStyle: {
        /** The color to use for the fill. */
        color: number;
        /** The alpha value to use for the fill. */
        alpha: number;
        /** The texture to use for the fill. */
        texture: Texture;
        /** The matrix to apply. */
        matrix: any;
        /** The fill pattern to use. */
        fill: any;
    };
    /** The default stroke style to use when none is provided. */
    defaultStrokeStyle: {
        /** The width of the stroke. */
        width: number;
        /** The color to use for the stroke. */
        color: number;
        /** The alpha value to use for the stroke. */
        alpha: number;
        /** The alignment of the stroke. */
        alignment: number;
        /** The miter limit to use. */
        miterLimit: number;
        /** The line cap style to use. */
        cap: string;
        /** The line join style to use. */
        join: string;
        /** The texture to use for the fill. */
        texture: Texture;
        /** The matrix to apply. */
        matrix: any;
        /** The fill pattern to use. */
        fill: any;
    };
};
export class GraphicsContextRenderData {
    geometry: BatchGeometry;
    instructions: InstructionSet;
    init(): void;
}
export let GraphicsContextSystem: {
    new (): {
        _gpuContextHash: {};
        _graphicsDataContextHash: any;
        /**
         * Runner init called, update the default options
         * @ignore
         */
        init(options: any): void;
        getContextRenderData(context: any): any;
        updateGpuContext(context: any): any;
        getGpuContext(context: any): any;
        _initContextRenderData(context: any): any;
        _initContext(context: any): any;
        onGraphicsContextDestroy(context: any): void;
        _cleanGraphicsContextData(context: any): void;
        destroy(): void;
    };
    /** @ignore */
    extension: {
        type: any[];
        name: string;
    };
    /** The default options for the GraphicsContextSystem. */
    defaultOptions: {
        /**
         * A value from 0 to 1 that controls the smoothness of bezier curves (the higher the smoother)
         * @default 0.5
         */
        bezierSmoothness: number;
    };
};
export class GraphicsPath {
    /**
     * Creates a `GraphicsPath` instance optionally from an SVG path string or an array of `PathInstruction`.
     * @param instructions - An SVG path string or an array of `PathInstruction` objects.
     */
    constructor(instructions: any);
    instructions: any;
    /** unique id for this graphics path */
    uid: number;
    _dirty: boolean;
    /**
     * Provides access to the internal shape path, ensuring it is up-to-date with the current instructions.
     * @returns The `ShapePath` instance associated with this `GraphicsPath`.
     */
    get shapePath(): ShapePath;
    _shapePath: ShapePath;
    /**
     * Adds another `GraphicsPath` to this path, optionally applying a transformation.
     * @param path - The `GraphicsPath` to add.
     * @param transform - An optional transformation to apply to the added path.
     * @returns The instance of the current object for chaining.
     */
    addPath(path: any, transform: any): this;
    arc(...args: any[]): this;
    arcTo(...args: any[]): this;
    arcToSvg(...args: any[]): this;
    bezierCurveTo(...args: any[]): this;
    /**
     * Adds a cubic Bezier curve to the path.
     * It requires two points: the second control point and the end point. The first control point is assumed to be
     * The starting point is the last point in the current path.
     * @param cp2x - The x-coordinate of the second control point.
     * @param cp2y - The y-coordinate of the second control point.
     * @param x - The x-coordinate of the end point.
     * @param y - The y-coordinate of the end point.
     * @param smoothness - Optional parameter to adjust the smoothness of the curve.
     * @returns The instance of the current object for chaining.
     */
    bezierCurveToShort(cp2x: any, cp2y: any, x: any, y: any, smoothness: any): this;
    /**
     * Closes the current path by drawing a straight line back to the start.
     * If the shape is already closed or there are no points in the path, this method does nothing.
     * @returns The instance of the current object for chaining.
     */
    closePath(): this;
    ellipse(...args: any[]): this;
    lineTo(...args: any[]): this;
    moveTo(...args: any[]): this;
    quadraticCurveTo(...args: any[]): this;
    /**
     * Adds a quadratic curve to the path. It uses the previous point as the control point.
     * @param x - The x-coordinate of the end point.
     * @param y - The y-coordinate of the end point.
     * @param smoothness - Optional parameter to adjust the smoothness of the curve.
     * @returns The instance of the current object for chaining.
     */
    quadraticCurveToShort(x: any, y: any, smoothness: any): this;
    /**
     * Draws a rectangle shape. This method adds a new rectangle path to the current drawing.
     * @param x - The x-coordinate of the top-left corner of the rectangle.
     * @param y - The y-coordinate of the top-left corner of the rectangle.
     * @param w - The width of the rectangle.
     * @param h - The height of the rectangle.
     * @param transform - An optional `Matrix` object to apply a transformation to the rectangle.
     * @returns The instance of the current object for chaining.
     */
    rect(x: any, y: any, w: any, h: any, transform: any): this;
    /**
     * Draws a circle shape. This method adds a new circle path to the current drawing.
     * @param x - The x-coordinate of the center of the circle.
     * @param y - The y-coordinate of the center of the circle.
     * @param radius - The radius of the circle.
     * @param transform - An optional `Matrix` object to apply a transformation to the circle.
     * @returns The instance of the current object for chaining.
     */
    circle(x: any, y: any, radius: any, transform: any): this;
    roundRect(...args: any[]): this;
    poly(...args: any[]): this;
    regularPoly(...args: any[]): this;
    roundPoly(...args: any[]): this;
    roundShape(...args: any[]): this;
    filletRect(...args: any[]): this;
    chamferRect(...args: any[]): this;
    /**
     * Draws a star shape centered at a specified location. This method allows for the creation
     *  of stars with a variable number of points, outer radius, optional inner radius, and rotation.
     * The star is drawn as a closed polygon with alternating outer and inner vertices to create the star's points.
     * An optional transformation can be applied to scale, rotate, or translate the star as needed.
     * @param x - The x-coordinate of the center of the star.
     * @param y - The y-coordinate of the center of the star.
     * @param points - The number of points of the star.
     * @param radius - The outer radius of the star (distance from the center to the outer points).
     * @param innerRadius - Optional. The inner radius of the star
     * (distance from the center to the inner points between the outer points).
     * If not provided, defaults to half of the `radius`.
     * @param rotation - Optional. The rotation of the star in radians, where 0 is aligned with the y-axis.
     * Defaults to 0, meaning one point is directly upward.
     * @param transform - An optional `Matrix` object to apply a transformation to the star.
     * This can include rotations, scaling, and translations.
     * @returns The instance of the current object for chaining further drawing commands.
     */
    star(x: any, y: any, points: any, radius: any, innerRadius: any, rotation: any, transform: any): this;
    /**
     * Creates a copy of the current `GraphicsPath` instance. This method supports both shallow and deep cloning.
     * A shallow clone copies the reference of the instructions array, while a deep clone creates a new array and
     * copies each instruction individually, ensuring that modifications to the instructions of the cloned `GraphicsPath`
     * do not affect the original `GraphicsPath` and vice versa.
     * @param deep - A boolean flag indicating whether the clone should be deep.
     * @returns A new `GraphicsPath` instance that is a clone of the current instance.
     */
    clone(deep?: boolean): GraphicsPath;
    clear(): this;
    /**
     * Applies a transformation matrix to all drawing instructions within the `GraphicsPath`.
     * This method enables the modification of the path's geometry according to the provided
     * transformation matrix, which can include translations, rotations, scaling, and skewing.
     *
     * Each drawing instruction in the path is updated to reflect the transformation,
     * ensuring the visual representation of the path is consistent with the applied matrix.
     *
     * Note: The transformation is applied directly to the coordinates and control points of the drawing instructions,
     * not to the path as a whole. This means the transformation's effects are baked into the individual instructions,
     * allowing for fine-grained control over the path's appearance.
     * @param matrix - A `Matrix` object representing the transformation to apply.
     * @returns The instance of the current object for chaining further operations.
     */
    transform(matrix: any): this;
    get bounds(): Bounds;
    /**
     * Retrieves the last point from the current drawing instructions in the `GraphicsPath`.
     * This method is useful for operations that depend on the path's current endpoint,
     * such as connecting subsequent shapes or paths. It supports various drawing instructions,
     * ensuring the last point's position is accurately determined regardless of the path's complexity.
     *
     * If the last instruction is a `closePath`, the method iterates backward through the instructions
     *  until it finds an actionable instruction that defines a point (e.g., `moveTo`, `lineTo`,
     * `quadraticCurveTo`, etc.). For compound paths added via `addPath`, it recursively retrieves
     * the last point from the nested path.
     * @param out - A `Point` object where the last point's coordinates will be stored.
     * This object is modified directly to contain the result.
     * @returns The `Point` object containing the last point's coordinates.
     */
    getLastPoint(out: any): any;
}
export class GraphicsPipe {
    constructor(renderer: any, adaptor: any);
    state: {
        data: number;
        /**
         * The blend mode to be applied when this state is set. Apply a value of `normal` to reset the blend mode.
         * Setting this mode to anything other than NO_BLEND will automatically switch blending on.
         * @default 'normal'
         */
        blendMode: any;
        /**
         * The polygon offset. Setting this property to anything other than 0 will automatically enable polygon offset fill.
         * @default 0
         */
        polygonOffset: any;
        /**
         * Activates blending of the computed fragment color values.
         * @default true
         */
        blend: boolean;
        /**
         * Enables or disables writing to the depth buffer.
         * @default true
         */
        depthMask: boolean;
        /**
         * Activates adding an offset to depth values of polygon's fragments
         * @default false
         */
        offsets: boolean;
        /** The culling settings for this state none - No culling back - Back face culling front - Front face culling */
        cullMode: "none" | "front" | "back";
        /**
         * Activates culling of polygons.
         * @default false
         */
        culling: boolean;
        /**
         * Specifies whether or not front or back-facing polygons can be culled.
         * @default false
         */
        clockwiseFrontFace: boolean;
        /**
         * Activates depth comparisons and updates to the depth buffer.
         * @default false
         */
        depthTest: boolean;
        _blendMode: any;
        _blendModeId: any;
        _polygonOffset: any;
        toString(): string;
    };
    _graphicsBatchesHash: any;
    renderer: any;
    _adaptor: any;
    validateRenderable(graphics: any): boolean;
    addRenderable(graphics: any, instructionSet: any): void;
    updateRenderable(graphics: any): void;
    destroyRenderable(graphics: any): void;
    execute(graphics: any): void;
    _rebuild(graphics: any): void;
    _addToBatcher(graphics: any): void;
    _getBatchesForRenderable(graphics: any): any;
    _initBatchesForRenderable(graphics: any): any;
    _removeBatchForRenderable(graphicsUid: any): void;
    destroy(): void;
}
export namespace GraphicsPipe {
    export namespace extension_47 {
        let type_42: any[];
        export { type_42 as type };
        let name_42: string;
        export { name_42 as name };
    }
    export { extension_47 as extension };
}
export class HTMLText extends AbstractText {
    constructor(...args: any[]);
    renderPipeId: string;
    _updateBounds(): void;
}
export class HTMLTextPipe {
    constructor(renderer: any);
    _gpuText: any;
    _renderer: any;
    resolutionChange(): void;
    validateRenderable(htmlText: any): boolean;
    addRenderable(htmlText: any, _instructionSet: any): void;
    updateRenderable(htmlText: any): void;
    destroyRenderable(htmlText: any): void;
    _destroyRenderableById(htmlTextUid: any): void;
    _updateText(htmlText: any): void;
    _updateGpuText(htmlText: any): Promise<void>;
    _getGpuText(htmlText: any): any;
    initGpuText(htmlText: any): {
        texture: Texture;
        currentKey: string;
        batchableSprite: any;
        textureNeedsUploading: boolean;
        generatingTexture: boolean;
    };
    destroy(): void;
}
export namespace HTMLTextPipe {
    export namespace extension_48 {
        let type_43: any[];
        export { type_43 as type };
        let name_43: string;
        export { name_43 as name };
    }
    export { extension_48 as extension };
}
export class HTMLTextRenderData {
    svgRoot: SVGSVGElement;
    foreignObject: SVGForeignObjectElement;
    domElement: HTMLElement;
    styleElement: HTMLElement;
    image: HTMLImageElement;
}
declare const HTMLTextStyle_base: {
    new (style?: {}): {
        [x: string]: any;
        /**
         * Alignment for multiline text, does not affect single line text.
         * @member {'left'|'center'|'right'|'justify'}
         */
        align: any;
        _align: any;
        /** Indicates if lines can be wrapped within words, it needs wordWrap to be set to true. */
        breakWords: any;
        _breakWords: any;
        /** Set a drop shadow for the text. */
        dropShadow: any;
        _dropShadow: any;
        /** The font family, can be a single font name, or a list of names where the first is the preferred font. */
        fontFamily: any;
        _fontFamily: any;
        /** The font size (as a number it converts to px, but as a string, equivalents are '26px','20pt','160%' or '1.6em') */
        fontSize: any;
        _fontSize: any;
        /**
         * The font style.
         * @member {'normal'|'italic'|'oblique'}
         */
        fontStyle: any;
        _fontStyle: any;
        /**
         * The font variant.
         * @member {'normal'|'small-caps'}
         */
        fontVariant: any;
        _fontVariant: any;
        /**
         * The font weight.
         * @member {'normal'|'bold'|'bolder'|'lighter'|'100'|'200'|'300'|'400'|'500'|'600'|'700'|'800'|'900'}
         */
        fontWeight: any;
        _fontWeight: any;
        /** The space between lines. */
        leading: any;
        _leading: any;
        /** The amount of spacing between letters, default is 0. */
        letterSpacing: any;
        _letterSpacing: any;
        /** The line height, a number that represents the vertical space that a letter uses. */
        lineHeight: any;
        _lineHeight: any;
        /**
         * Occasionally some fonts are cropped. Adding some padding will prevent this from happening
         * by adding padding to all sides of the text.
         */
        padding: any;
        _padding: any;
        /** Trim transparent borders. This is an expensive operation so only use this if you have to! */
        trim: any;
        _trim: any;
        /**
         * The baseline of the text that is rendered.
         * @member {'alphabetic'|'top'|'hanging'|'middle'|'ideographic'|'bottom'}
         */
        textBaseline: any;
        _textBaseline: any;
        /**
         * How newlines and spaces should be handled.
         * Default is 'pre' (preserve, preserve).
         *
         *  value       | New lines     |   Spaces
         *  ---         | ---           |   ---
         * 'normal'     | Collapse      |   Collapse
         * 'pre'        | Preserve      |   Preserve
         * 'pre-line'   | Preserve      |   Collapse
         * @member {'normal'|'pre'|'pre-line'}
         */
        whiteSpace: any;
        _whiteSpace: any;
        /** Indicates if word wrap should be used. */
        wordWrap: any;
        _wordWrap: any;
        /** The width at which text will wrap, it needs wordWrap to be set to true. */
        wordWrapWidth: any;
        _wordWrapWidth: any;
        /** A fillstyle that will be used on the text e.g., 'red', '#00FF00'. */
        fill: any;
        _originalFill: any;
        _fill: any;
        /** A fillstyle that will be used on the text stroke, e.g., 'blue', '#FCFF00'. */
        stroke: any;
        _originalStroke: any;
        _stroke: any;
        _generateKey(): string;
        _styleKey: string;
        update(): void;
        /** Resets all properties to the default values */
        reset(): void;
        readonly styleKey: string;
        /**
         * Creates a new TextStyle object with the same values as this one.
         * @returns New cloned TextStyle object
         */
        clone(): any;
        /**
         * Destroys this text style.
         * @param options - Options parameter. A boolean will act as if all options
         *  have been set to that value
         * @param {boolean} [options.texture=false] - Should it destroy the texture of the this style
         * @param {boolean} [options.textureSource=false] - Should it destroy the textureSource of the this style
         */
        destroy(options?: boolean): void;
        _createProxy(value: any, cb: any): any;
        _isFillStyle(value: any): boolean;
    };
    [x: string]: any;
    /** The default drop shadow settings */
    defaultDropShadow: {
        /** Set alpha for the drop shadow */
        alpha: number;
        /** Set a angle of the drop shadow */
        angle: number;
        /** Set a shadow blur radius */
        blur: number;
        /** A fill style to be used on the  e.g., 'red', '#00FF00' */
        color: string;
        /** Set a distance of the drop shadow */
        distance: number;
    };
    /** The default text style settings */
    defaultTextStyle: {
        /**
         * See {@link TextStyle.align}
         * @type {'left'|'center'|'right'|'justify'}
         */
        align: "left" | "center" | "right" | "justify";
        /** See {@link TextStyle.breakWords} */
        breakWords: boolean;
        /** See {@link TextStyle.dropShadow} */
        dropShadow: any;
        /**
         * See {@link TextStyle.fill}
         * @type {string|string[]|number|number[]|CanvasGradient|CanvasPattern}
         */
        fill: string | string[] | number | number[] | CanvasGradient | CanvasPattern;
        /**
         * See {@link TextStyle.fontFamily}
         * @type {string|string[]}
         */
        fontFamily: string | string[];
        /**
         * See {@link TextStyle.fontSize}
         * @type {number|string}
         */
        fontSize: number | string;
        /**
         * See {@link TextStyle.fontStyle}
         * @type {'normal'|'italic'|'oblique'}
         */
        fontStyle: "normal" | "italic" | "oblique";
        /**
         * See {@link TextStyle.fontVariant}
         * @type {'normal'|'small-caps'}
         */
        fontVariant: "normal" | "small-caps";
        /**
         * See {@link TextStyle.fontWeight}
         * @type {'normal'|'bold'|'bolder'|'lighter'|'100'|'200'|'300'|'400'|'500'|'600'|'700'|'800'|'900'}
         */
        fontWeight: "normal" | "bold" | "bolder" | "lighter" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
        /** See {@link TextStyle.leading} */
        leading: number;
        /** See {@link TextStyle.letterSpacing} */
        letterSpacing: number;
        /** See {@link TextStyle.lineHeight} */
        lineHeight: number;
        /** See {@link TextStyle.padding} */
        padding: number;
        /**
         * See {@link TextStyle.stroke}
         * @type {string|number}
         */
        stroke: string | number;
        /**
         * See {@link TextStyle.textBaseline}
         * @type {'alphabetic'|'top'|'hanging'|'middle'|'ideographic'|'bottom'}
         */
        textBaseline: "alphabetic" | "top" | "hanging" | "middle" | "ideographic" | "bottom";
        /** See {@link TextStyle.trim} */
        trim: boolean;
        /**
         * See {@link TextStyle.whiteSpace}
         * @type {'normal'|'pre'|'pre-line'}
         */
        whiteSpace: "normal" | "pre" | "pre-line";
        /** See {@link TextStyle.wordWrap} */
        wordWrap: boolean;
        /** See {@link TextStyle.wordWrapWidth} */
        wordWrapWidth: number;
    };
};
export class HTMLTextStyle extends HTMLTextStyle_base {
    _cssOverrides: any[];
    /** List of style overrides that will be applied to the HTML text. */
    set cssOverrides(value: any[]);
    get cssOverrides(): any[];
    tagStyles: any;
    _cssStyle: string;
    /**
     * Creates a new HTMLTextStyle object with the same values as this one.
     * @returns New cloned HTMLTextStyle object
     */
    clone(): HTMLTextStyle;
    get cssStyle(): string;
    /**
     * Add a style override, this can be any CSS property
     * it will override any built-in style. This is the
     * property and the value as a string (e.g., `color: red`).
     * This will override any other internal style.
     * @param {string} value - CSS style(s) to add.
     * @example
     * style.addOverride('background-color: red');
     */
    addOverride(...value: string): void;
    /**
     * Remove any overrides that match the value.
     * @param {string} value - CSS style to remove.
     * @example
     * style.removeOverride('background-color: red');
     */
    removeOverride(...value: string): void;
}
export class HTMLTextSystem {
    constructor(renderer: any);
    _activeTextures: {};
    _renderer: any;
    _createCanvas: boolean;
    getTexture(options: any): Promise<any>;
    getManagedTexture(text: any, resolution: any, style: any, textKey: any): any;
    _buildTexturePromise(text: any, resolution: any, style: any): Promise<any>;
    _increaseReferenceCount(textKey: any): void;
    decreaseReferenceCount(textKey: any): void;
    _cleanUp(activeTexture: any): void;
    getReferenceCount(textKey: any): any;
    destroy(): void;
}
export namespace HTMLTextSystem {
    export namespace extension_49 {
        let type_44: any[];
        export { type_44 as type };
        let name_44: string;
        export { name_44 as name };
    }
    export { extension_49 as extension };
    export namespace defaultFontOptions {
        let fontFamily: string;
        let fontStyle: string;
        let fontWeight: string;
    }
}
export class HelloSystem {
    constructor(renderer: any);
    _renderer: any;
    /**
     * It all starts here! This initiates every system, passing in the options for any system by name.
     * @param options - the config for the renderer and all its systems
     */
    init(options: any): void;
}
export namespace HelloSystem {
    export namespace extension_50 {
        let type_45: any[];
        export { type_45 as type };
        let name_45: string;
        export { name_45 as name };
        let priority_2: number;
        export { priority_2 as priority };
    }
    export { extension_50 as extension };
    export namespace defaultOptions_2 {
        let hello: boolean;
    }
    export { defaultOptions_2 as defaultOptions };
}
export class IGLUniformData {
}
declare const ImageSource_base: {
    new (options?: {}): {
        [x: string]: any;
        options: {};
        /** unique id for this Texture source */
        uid: number;
        /**
         * The resource type used by this TextureSource. This is used by the bind groups to determine
         * how to handle this resource.
         * @ignore
         * @internal
         */
        _resourceType: string;
        /**
         * i unique resource id, used by the bind group systems.
         * This can change if the texture is resized or its resource changes
         */
        _resourceId: number;
        /**
         * this is how the backends know how to upload this texture to the GPU
         * It changes depending on the resource type. Classes that extend TextureSource
         * should override this property.
         * @ignore
         * @internal
         */
        uploadMethodId: string;
        _resolution: any;
        /** the pixel width of this texture source. This is the REAL pure number, not accounting resolution */
        pixelWidth: any;
        /** the pixel height of this texture source. This is the REAL pure number, not accounting resolution */
        pixelHeight: any;
        /**
         * the width of this texture source, accounting for resolution
         * eg pixelWidth 200, resolution 2, then width will be 100
         */
        width: number;
        /**
         * the height of this texture source, accounting for resolution
         * eg pixelHeight 200, resolution 2, then height will be 100
         */
        height: number;
        /**
         * The number of samples of a multisample texture. This is always 1 for non-multisample textures.
         * To enable multisample for a texture, set antialias to true
         * @internal
         * @ignore
         */
        sampleCount: any;
        /** The number of mip levels to generate for this texture. this is  overridden if autoGenerateMipmaps is true */
        mipLevelCount: any;
        /**
         * Should we auto generate mipmaps for this texture? This will automatically generate mipmaps
         * for this texture when uploading to the GPU. Mipmapped textures take up more memory, but
         * can look better when scaled down.
         *
         * For performance reasons, it is recommended to NOT use this with RenderTextures, as they are often updated every frame.
         * If you do, make sure to call `updateMipmaps` after you update the texture.
         */
        autoGenerateMipmaps: any;
        /** the format that the texture data has */
        format: any;
        /** how many dimensions does this texture have? currently v8 only supports 2d */
        dimension: any;
        /**
         * Only really affects RenderTextures.
         * Should we use antialiasing for this texture. It will look better, but may impact performance as a
         * Blit operation will be required to resolve the texture.
         */
        antialias: any;
        /**
         * Used by automatic texture Garbage Collection, stores last GC tick when it was bound
         * @protected
         */
        _touched: number;
        /**
         * Used by the batcher to build texture batches. faster to have the variable here!
         * @protected
         */
        _batchTick: number;
        /**
         * A temporary batch location for the texture batching. Here for performance reasons only!
         * @protected
         */
        _textureBindLocation: number;
        label: any;
        resource: any;
        autoGarbageCollect: any;
        alphaMode: any;
        /** the style of the texture */
        style: any;
        destroyed: boolean;
        /** returns itself */
        readonly source: any;
        _style: any;
        /** setting this will set wrapModeU,wrapModeV and wrapModeW all at once! */
        addressMode: any;
        /** setting this will set wrapModeU,wrapModeV and wrapModeW all at once! */
        repeatMode: any;
        /** Specifies the sampling behavior when the sample footprint is smaller than or equal to one texel. */
        magFilter: any;
        /** Specifies the sampling behavior when the sample footprint is larger than one texel. */
        minFilter: any;
        /** Specifies behavior for sampling between mipmap levels. */
        mipmapFilter: any;
        /** Specifies the minimum and maximum levels of detail, respectively, used internally when sampling a texture. */
        lodMinClamp: any;
        /** Specifies the minimum and maximum levels of detail, respectively, used internally when sampling a texture. */
        lodMaxClamp: any;
        _onStyleChange(): void;
        /** call this if you have modified the texture outside of the constructor */
        update(): void;
        /** Destroys this texture source */
        destroy(): void;
        /**
         * This will unload the Texture source from the GPU. This will free up the GPU memory
         * As soon as it is required fore rendering, it will be re-uploaded.
         */
        unload(): void;
        /** the width of the resource. This is the REAL pure number, not accounting resolution   */
        readonly resourceWidth: any;
        /** the height of the resource. This is the REAL pure number, not accounting resolution */
        readonly resourceHeight: any;
        /**
         * the resolution of the texture. Changing this number, will not change the number of pixels in the actual texture
         * but will the size of the texture when rendered.
         *
         * changing the resolution of this texture to 2 for example will make it appear twice as small when rendered (as pixel
         * density will have increased)
         */
        resolution: any;
        /**
         * Resize the texture, this is handy if you want to use the texture as a render texture
         * @param width - the new width of the texture
         * @param height - the new height of the texture
         * @param resolution - the new resolution of the texture
         * @returns - if the texture was resized
         */
        resize(width: any, height: any, resolution: any): boolean;
        /**
         * Lets the renderer know that this texture has been updated and its mipmaps should be re-generated.
         * This is only important for RenderTexture instances, as standard Texture instances will have their
         * mipmaps generated on upload. You should call this method after you make any change to the texture
         *
         * The reason for this is is can be quite expensive to update mipmaps for a texture. So by default,
         * We want you, the developer to specify when this action should happen.
         *
         * Generally you don't want to have mipmaps generated on Render targets that are changed every frame,
         */
        updateMipmaps(): void;
        wrapMode: any;
        scaleMode: any;
        /**
         * Refresh check for isPowerOfTwo texture based on size
         * @private
         */
        _refreshPOT(): void;
        isPowerOfTwo: boolean;
    };
    [x: string]: any;
    test(_resource: any): void;
    /** The default options used when creating a new TextureSource. override these to add your own defaults */
    defaultOptions: {
        resolution: number;
        format: string;
        alphaMode: string;
        dimensions: string;
        mipLevelCount: number;
        autoGenerateMipmaps: boolean;
        sampleCount: number;
        antialias: boolean;
        autoGarbageCollect: boolean;
    };
};
export class ImageSource extends ImageSource_base {
    static test(resource: any): boolean;
    constructor(options: any);
    autoGarbageCollect: boolean;
}
export namespace ImageSource {
    let extension_51: any;
    export { extension_51 as extension };
}
export class InstructionSet {
    /** a unique id for this instruction set used through the renderer */
    uid: number;
    /** the array of instructions */
    instructions: any[];
    /** the actual size of the array (any instructions passed this should be ignored) */
    instructionSize: number;
    /** reset the instruction set so it can be reused set size back to 0 */
    reset(): void;
    /**
     * Add an instruction to the set
     * @param instruction - add an instruction to the set
     */
    add(instruction: any): void;
    /**
     * Log the instructions to the console (for debugging)
     * @internal
     * @ignore
     */
    log(): void;
}
export namespace KTX {
    export { FILE_HEADER_SIZE };
    export { FILE_IDENTIFIER };
    export { FORMATS_TO_COMPONENTS };
    export { INTERNAL_FORMAT_TO_BYTES_PER_PIXEL };
    export { INTERNAL_FORMAT_TO_TEXTURE_FORMATS };
    export { FIELDS };
    export { TYPES_TO_BYTES_PER_COMPONENT };
    export { TYPES_TO_BYTES_PER_PIXEL };
    export { ENDIANNESS };
}
export class Loader {
    _parsers: any[];
    _parsersValidated: boolean;
    /**
     * All loader parsers registered
     * @type {assets.LoaderParser[]}
     */
    parsers: assets.LoaderParser[];
    /** Cache loading promises that ae currently active */
    promiseCache: {};
    /** function used for testing */
    reset(): void;
    /**
     * Used internally to generate a promise for the asset to be loaded.
     * @param url - The URL to be loaded
     * @param data - any custom additional information relevant to the asset being loaded
     * @returns - a promise that will resolve to an Asset for example a Texture of a JSON object
     */
    _getLoadPromiseAndParser(url: any, data: any): {
        promise: any;
        parser: any;
    };
    load(assetsToLoadIn: any, onProgress: any): Promise<any>;
    /**
     * Unloads one or more assets. Any unloaded assets will be destroyed, freeing up memory for your app.
     * The parser that created the asset, will be the one that unloads it.
     * @example
     * // Single asset:
     * const asset = await Loader.load('cool.png');
     *
     * await Loader.unload('cool.png');
     *
     * console.log(asset.destroyed); // true
     * @param assetsToUnloadIn - urls that you want to unload, or a single one!
     */
    unload(assetsToUnloadIn: any): Promise<void>;
    /** validates our parsers, right now it only checks for name conflicts but we can add more here as required! */
    _validateParsers(): void;
    _parserHash: any;
}
export var LoaderParserPriority: any;
export var MSAA_QUALITY: any;
export const MaskEffectManager: MaskEffectManagerClass;
export class MaskEffectManagerClass {
    /**
     * @private
     */
    private _effectClasses;
    _tests: any[];
    _initialized: boolean;
    init(): void;
    add(test: any): void;
    getMaskEffect(item: any): any;
    returnMaskEffect(effect: any): void;
}
declare const MaskFilter_base: {
    new (options: any): {
        [x: string]: any;
        /** If enabled is true the filter is applied, if false it will not. */
        enabled: boolean;
        /**
         * The gpu state the filter requires to render.
         * @internal
         * @ignore
         */
        _state: {
            data: number;
            /**
             * The blend mode to be applied when this state is set. Apply a value of `normal` to reset the blend mode.
             * Setting this mode to anything other than NO_BLEND will automatically switch blending on.
             * @default 'normal'
             */
            blendMode: any;
            /**
             * The polygon offset. Setting this property to anything other than 0 will automatically enable polygon offset fill.
             * @default 0
             */
            polygonOffset: any;
            /**
             * Activates blending of the computed fragment color values.
             * @default true
             */
            blend: boolean;
            /**
             * Enables or disables writing to the depth buffer.
             * @default true
             */
            depthMask: boolean;
            /**
             * Activates adding an offset to depth values of polygon's fragments
             * @default false
             */
            offsets: boolean;
            /** The culling settings for this state none - No culling back - Back face culling front - Front face culling */
            cullMode: "none" | "front" | "back";
            /**
             * Activates culling of polygons.
             * @default false
             */
            culling: boolean;
            /**
             * Specifies whether or not front or back-facing polygons can be culled.
             * @default false
             */
            clockwiseFrontFace: boolean;
            /**
             * Activates depth comparisons and updates to the depth buffer.
             * @default false
             */
            depthTest: boolean;
            _blendMode: any;
            _blendModeId: any;
            _polygonOffset: any;
            toString(): string;
        };
        /**
         * Get the blend mode of the filter.
         * @default "normal"
         */
        blendMode: any;
        padding: any;
        antialias: any;
        resolution: any;
        blendRequired: any;
        /**
         * Applies the filter
         * @param filterManager - The renderer to retrieve the filter from
         * @param input - The input render target.
         * @param output - The target to output to.
         * @param clearMode - Should the output be cleared before rendering to it
         */
        apply(filterManager: any, input: any, output: any, clearMode: any): void;
        /**
         * A record of the uniform groups and resources used by the shader.
         * This is used by WebGL renderer to sync uniform data.
         * @internal
         * @ignore
         */
        _uniformBindMap: any;
        _ownedBindGroups: any[];
        gpuProgram: any;
        glProgram: any;
        compatibleRenderers: any;
        groups: any;
        resources: {};
        /**
         * Sometimes a resource group will be provided later (for example global uniforms)
         * In such cases, this method can be used to let the shader know about the group.
         * @param name - the name of the resource group
         * @param groupIndex - the index of the group (should match the webGPU shader group location)
         * @param bindIndex - the index of the bind point (should match the webGPU shader bind point)
         */
        addResource(name: any, groupIndex: any, bindIndex: any): void;
        _buildResourceAccessor(groups: any, nameHash: any): {};
        /**
         * Use to destroy the shader when its not longer needed.
         * It will destroy the resources and remove listeners.
         * @param destroyPrograms - if the programs should be destroyed as well.
         * Make sure its not being used by other shaders!
         */
        destroy(destroyPrograms?: boolean): void;
    };
    /**
     * A short hand function to create a filter based of a vertex and fragment shader src.
     * @param options
     * @returns A shiny new PixiJS filter!
     */
    from(options: any): {
        [x: string]: any;
        /** If enabled is true the filter is applied, if false it will not. */
        enabled: boolean;
        /**
         * The gpu state the filter requires to render.
         * @internal
         * @ignore
         */
        _state: {
            data: number;
            /**
             * The blend mode to be applied when this state is set. Apply a value of `normal` to reset the blend mode.
             * Setting this mode to anything other than NO_BLEND will automatically switch blending on.
             * @default 'normal'
             */
            blendMode: any;
            /**
             * The polygon offset. Setting this property to anything other than 0 will automatically enable polygon offset fill.
             * @default 0
             */
            polygonOffset: any;
            /**
             * Activates blending of the computed fragment color values.
             * @default true
             */
            blend: boolean;
            /**
             * Enables or disables writing to the depth buffer.
             * @default true
             */
            depthMask: boolean;
            /**
             * Activates adding an offset to depth values of polygon's fragments
             * @default false
             */
            offsets: boolean;
            /** The culling settings for this state none - No culling back - Back face culling front - Front face culling */
            cullMode: "none" | "front" | "back";
            /**
             * Activates culling of polygons.
             * @default false
             */
            culling: boolean;
            /**
             * Specifies whether or not front or back-facing polygons can be culled.
             * @default false
             */
            clockwiseFrontFace: boolean;
            /**
             * Activates depth comparisons and updates to the depth buffer.
             * @default false
             */
            depthTest: boolean;
            _blendMode: any;
            _blendModeId: any;
            _polygonOffset: any;
            toString(): string;
        };
        /**
         * Get the blend mode of the filter.
         * @default "normal"
         */
        blendMode: any;
        padding: any;
        antialias: any;
        resolution: any;
        blendRequired: any;
        /**
         * Applies the filter
         * @param filterManager - The renderer to retrieve the filter from
         * @param input - The input render target.
         * @param output - The target to output to.
         * @param clearMode - Should the output be cleared before rendering to it
         */
        apply(filterManager: any, input: any, output: any, clearMode: any): void;
        /**
         * A record of the uniform groups and resources used by the shader.
         * This is used by WebGL renderer to sync uniform data.
         * @internal
         * @ignore
         */
        _uniformBindMap: any;
        _ownedBindGroups: any[];
        gpuProgram: any;
        glProgram: any;
        compatibleRenderers: any;
        groups: any;
        resources: {};
        /**
         * Sometimes a resource group will be provided later (for example global uniforms)
         * In such cases, this method can be used to let the shader know about the group.
         * @param name - the name of the resource group
         * @param groupIndex - the index of the group (should match the webGPU shader group location)
         * @param bindIndex - the index of the bind point (should match the webGPU shader bind point)
         */
        addResource(name: any, groupIndex: any, bindIndex: any): void;
        _buildResourceAccessor(groups: any, nameHash: any): {};
        /**
         * Use to destroy the shader when its not longer needed.
         * It will destroy the resources and remove listeners.
         * @param destroyPrograms - if the programs should be destroyed as well.
         * Make sure its not being used by other shaders!
         */
        destroy(destroyPrograms?: boolean): void;
    };
    /**
     * The default filter settings
     * @static
     */
    defaultOptions: {
        blendMode: string;
        resolution: number;
        padding: number;
        antialias: string;
        blendRequired: boolean;
    };
};
export class MaskFilter extends MaskFilter_base {
    constructor(options: any);
    sprite: any;
    _textureMatrix: TextureMatrix;
    apply(filterManager: any, input: any, output: any, clearMode: any): void;
}
export class Matrix {
    /**
     * A default (identity) matrix.
     *
     * This is a shared object, if you want to modify it consider creating a new `Matrix`
     * @readonly
     */
    static readonly get IDENTITY(): Matrix;
    /**
     * A static Matrix that can be used to avoid creating new objects.
     * Will always ensure the matrix is reset to identity when requested.
     * Use this object for fast but temporary calculations, as it may be mutated later on.
     * This is a different object to the `IDENTITY` object and so can be modified without changing `IDENTITY`.
     * @readonly
     */
    static readonly get shared(): Matrix;
    /**
     * @param a - x scale
     * @param b - y skew
     * @param c - x skew
     * @param d - y scale
     * @param tx - x translation
     * @param ty - y translation
     */
    constructor(a?: number, b?: number, c?: number, d?: number, tx?: number, ty?: number);
    /** An array of the current matrix. Only populated when `toArray` is called */
    array: Float32Array;
    a: number;
    b: number;
    c: number;
    d: number;
    tx: number;
    ty: number;
    /**
     * Creates a Matrix object based on the given array. The Element to Matrix mapping order is as follows:
     *
     * a = array[0]
     * b = array[1]
     * c = array[3]
     * d = array[4]
     * tx = array[2]
     * ty = array[5]
     * @param array - The array that the matrix will be populated from.
     */
    fromArray(array: any): void;
    /**
     * Sets the matrix properties.
     * @param a - Matrix component
     * @param b - Matrix component
     * @param c - Matrix component
     * @param d - Matrix component
     * @param tx - Matrix component
     * @param ty - Matrix component
     * @returns This matrix. Good for chaining method calls.
     */
    set(a: any, b: any, c: any, d: any, tx: any, ty: any): this;
    /**
     * Creates an array from the current Matrix object.
     * @param transpose - Whether we need to transpose the matrix or not
     * @param [out=new Float32Array(9)] - If provided the array will be assigned to out
     * @returns The newly created array which contains the matrix
     */
    toArray(transpose: any, out?: any): any;
    /**
     * Get a new position with the current transformation applied.
     * Can be used to go from a child's coordinate space to the world coordinate space. (e.g. rendering)
     * @param pos - The origin
     * @param {Point} [newPos] - The point that the new position is assigned to (allowed to be same as input)
     * @returns {Point} The new point, transformed through this matrix
     */
    apply(pos: any, newPos?: Point): Point;
    /**
     * Get a new position with the inverse of the current transformation applied.
     * Can be used to go from the world coordinate space to a child's coordinate space. (e.g. input)
     * @param pos - The origin
     * @param {Point} [newPos] - The point that the new position is assigned to (allowed to be same as input)
     * @returns {Point} The new point, inverse-transformed through this matrix
     */
    applyInverse(pos: any, newPos?: Point): Point;
    /**
     * Translates the matrix on the x and y.
     * @param x - How much to translate x by
     * @param y - How much to translate y by
     * @returns This matrix. Good for chaining method calls.
     */
    translate(x: any, y: any): this;
    /**
     * Applies a scale transformation to the matrix.
     * @param x - The amount to scale horizontally
     * @param y - The amount to scale vertically
     * @returns This matrix. Good for chaining method calls.
     */
    scale(x: any, y: any): this;
    /**
     * Applies a rotation transformation to the matrix.
     * @param angle - The angle in radians.
     * @returns This matrix. Good for chaining method calls.
     */
    rotate(angle: any): this;
    /**
     * Appends the given Matrix to this Matrix.
     * @param matrix - The matrix to append.
     * @returns This matrix. Good for chaining method calls.
     */
    append(matrix: any): this;
    /**
     * Appends two matrix's and sets the result to this matrix. AB = A * B
     * @param a - The matrix to append.
     * @param b - The matrix to append.
     * @returns This matrix. Good for chaining method calls.
     */
    appendFrom(a: any, b: any): this;
    /**
     * Sets the matrix based on all the available properties
     * @param x - Position on the x axis
     * @param y - Position on the y axis
     * @param pivotX - Pivot on the x axis
     * @param pivotY - Pivot on the y axis
     * @param scaleX - Scale on the x axis
     * @param scaleY - Scale on the y axis
     * @param rotation - Rotation in radians
     * @param skewX - Skew on the x axis
     * @param skewY - Skew on the y axis
     * @returns This matrix. Good for chaining method calls.
     */
    setTransform(x: any, y: any, pivotX: any, pivotY: any, scaleX: any, scaleY: any, rotation: any, skewX: any, skewY: any): this;
    /**
     * Prepends the given Matrix to this Matrix.
     * @param matrix - The matrix to prepend
     * @returns This matrix. Good for chaining method calls.
     */
    prepend(matrix: any): this;
    /**
     * Decomposes the matrix (x, y, scaleX, scaleY, and rotation) and sets the properties on to a transform.
     * @param transform - The transform to apply the properties to.
     * @returns The transform with the newly applied properties
     */
    decompose(transform: any): any;
    /**
     * Inverts this matrix
     * @returns This matrix. Good for chaining method calls.
     */
    invert(): this;
    /** Checks if this matrix is an identity matrix */
    isIdentity(): boolean;
    /**
     * Resets this Matrix to an identity (default) matrix.
     * @returns This matrix. Good for chaining method calls.
     */
    identity(): this;
    /**
     * Creates a new Matrix object with the same values as this one.
     * @returns A copy of this matrix. Good for chaining method calls.
     */
    clone(): Matrix;
    /**
     * Changes the values of the given matrix to be the same as the ones in this matrix
     * @param matrix - The matrix to copy to.
     * @returns The matrix given in parameter with its values updated.
     */
    copyTo(matrix: any): any;
    /**
     * Changes the values of the matrix to be the same as the ones in given matrix
     * @param matrix - The matrix to copy from.
     * @returns this
     */
    copyFrom(matrix: any): this;
    /**
     * check to see if two matrices are the same
     * @param matrix - The matrix to compare to.
     */
    equals(matrix: any): boolean;
    toString(): string;
}
export class Mesh extends Container {
    constructor(...args: any[]);
    renderPipeId: string;
    canBundle: boolean;
    /** @ignore */
    _shader: any;
    _roundPixels: number;
    allowChildren: boolean;
    /**
     * Represents the vertex and fragment shaders that processes the geometry and runs on the GPU.
     * Can be shared between multiple Mesh objects.
     */
    set shader(value: any);
    get shader(): any;
    /** The texture that the Mesh uses. Null for non-MeshMaterial shaders */
    set texture(value: any);
    get texture(): any;
    state: any;
    _geometry: any;
    set roundPixels(value: boolean);
    /**
     *  Whether or not to round the x/y position of the mesh.
     * @type {boolean}
     */
    get roundPixels(): boolean;
    /** Alias for {@link scene.Mesh#shader}. */
    get material(): any;
    /**
     * Includes vertex positions, face indices, colors, UVs, and
     * custom attributes within buffers, reducing the cost of passing all
     * this data to the GPU. Can be shared between multiple Mesh objects.
     */
    set geometry(value: any);
    get geometry(): any;
    _texture: any;
    get batched(): boolean;
    /**
     * The local bounds of the mesh.
     * @type {rendering.Bounds}
     */
    get bounds(): rendering.Bounds;
    /**
     * Adds the bounds of this object to the bounds object.
     * @param bounds - The output bounds object.
     */
    addBounds(bounds: any): void;
    /**
     * Checks if the object contains the given point.
     * @param point - The point to check
     */
    containsPoint(point: any): boolean;
    /** @ignore */
    onViewUpdate(): void;
    /**
     * Destroys this sprite renderable and optionally its texture.
     * @param options - Options parameter. A boolean will act as if all options
     *  have been set to that value
     * @param {boolean} [options.texture=false] - Should it destroy the current texture of the renderable as well
     * @param {boolean} [options.textureSource=false] - Should it destroy the textureSource of the renderable as well
     */
    destroy(options: any): void;
}
export let MeshGeometry: {
    new (...args: any[]): {
        [x: string]: any;
        batchMode: string;
        /** The positions of the mesh. */
        positions: any;
        /** The UVs of the mesh. */
        uvs: any;
        /** The indices of the mesh. */
        indices: any;
        /** The unique id of the geometry. */
        uid: number;
        /**
         * the layout key will be generated by WebGPU all geometries that have the same structure
         * will have the same layout key. This is used to cache the pipeline layout
         * @internal
         * @ignore
         */
        _layoutKey: number;
        /** the instance count of the geometry to draw */
        instanceCount: any;
        _bounds: Bounds;
        _boundsDirty: boolean;
        attributes: any;
        buffers: any[];
        indexBuffer: any;
        topology: any;
        onBufferUpdate(): void;
        /**
         * Returns the requested attribute.
         * @param id - The name of the attribute required
         * @returns - The attribute requested.
         */
        getAttribute(id: any): any;
        /**
         * Returns the index buffer
         * @returns - The index buffer.
         */
        getIndex(): any;
        /**
         * Returns the requested buffer.
         * @param id - The name of the buffer required.
         * @returns - The buffer requested.
         */
        getBuffer(id: any): any;
        /**
         * Used to figure out how many vertices there are in this geometry
         * @returns the number of vertices in the geometry
         */
        getSize(): number;
        /** Returns the bounds of the geometry. */
        readonly bounds: any;
        /**
         * destroys the geometry.
         * @param destroyBuffers - destroy the buffers associated with this geometry
         */
        destroy(destroyBuffers?: boolean): void;
    };
    defaultOptions: {
        topology: string;
        shrinkBuffersToFit: boolean;
    };
};
export class MeshPipe {
    constructor(renderer: any, adaptor: any);
    localUniforms: {
        /** used internally to know if a uniform group was used in the last render pass */
        _touched: number;
        /** a unique id for this uniform group used through the renderer */
        uid: number;
        /** a resource type, used to identify how to handle it when its in a bind group / shader resource */
        _resourceType: string;
        /** the resource id used internally by the renderer to build bind group keys */
        _resourceId: number;
        /** used ito identify if this is a uniform group */
        isUniformGroup: boolean;
        /**
         * used to flag if this Uniform groups data is different from what it has stored in its buffer / on the GPU
         * @internal
         * @ignore
         */
        _dirtyId: number;
        destroyed: boolean;
        uniformStructures: any;
        uniforms: {};
        ubo: any;
        isStatic: any;
        _signature: any;
        /** Call this if you want the uniform groups data to be uploaded to the GPU only useful if `isStatic` is true. */
        update(): void;
    };
    localUniformsBindGroup: BindGroup;
    _meshDataHash: any;
    _gpuBatchableMeshHash: any;
    renderer: any;
    _adaptor: any;
    validateRenderable(mesh: any): boolean;
    addRenderable(mesh: any, instructionSet: any): void;
    updateRenderable(mesh: any): void;
    destroyRenderable(mesh: any): void;
    execute({ mesh }: {
        mesh: any;
    }): void;
    _getMeshData(mesh: any): any;
    _initMeshData(mesh: any): any;
    _getBatchableMesh(mesh: any): any;
    _initBatchableMesh(mesh: any): any;
    destroy(): void;
}
export namespace MeshPipe {
    export namespace extension_52 {
        let type_46: any[];
        export { type_46 as type };
        let name_46: string;
        export { name_46 as name };
    }
    export { extension_52 as extension };
}
export class MeshPlane extends Mesh {
    /**
     * @param options - Options to be applied to MeshPlane
     */
    constructor(options: any);
    autoResize: boolean;
    /**
     * Method used for overrides, to do something in case texture frame was changed.
     * Meshes based on plane can override it and change more details based on texture.
     */
    textureUpdated(): void;
}
export let MeshRope: {
    new (options: any): {
        [x: string]: any;
        autoUpdate: boolean;
        onRender: () => void;
        _render(): void;
        renderPipeId: string;
        canBundle: boolean;
        /** @ignore */
        _shader: any;
        _roundPixels: number;
        allowChildren: boolean;
        /**
         * Represents the vertex and fragment shaders that processes the geometry and runs on the GPU.
         * Can be shared between multiple Mesh objects.
         */
        shader: any;
        /** The texture that the Mesh uses. Null for non-MeshMaterial shaders */
        texture: any;
        state: any;
        _geometry: any;
        /**
         *  Whether or not to round the x/y position of the mesh.
         * @type {boolean}
         */
        roundPixels: boolean;
        /** Alias for {@link scene.Mesh#shader}. */
        readonly material: any;
        /**
         * Includes vertex positions, face indices, colors, UVs, and
         * custom attributes within buffers, reducing the cost of passing all
         * this data to the GPU. Can be shared between multiple Mesh objects.
         */
        geometry: any;
        _texture: any;
        readonly batched: boolean;
        /**
         * The local bounds of the mesh.
         * @type {rendering.Bounds}
         */
        readonly bounds: rendering.Bounds;
        /**
         * Adds the bounds of this object to the bounds object.
         * @param bounds - The output bounds object.
         */
        addBounds(bounds: any): void;
        /**
         * Checks if the object contains the given point.
         * @param point - The point to check
         */
        containsPoint(point: any): boolean;
        /** @ignore */
        onViewUpdate(): void;
        /** @private */
        didViewUpdate: boolean;
        /**
         * Destroys this sprite renderable and optionally its texture.
         * @param options - Options parameter. A boolean will act as if all options
         *  have been set to that value
         * @param {boolean} [options.texture=false] - Should it destroy the current texture of the renderable as well
         * @param {boolean} [options.textureSource=false] - Should it destroy the textureSource of the renderable as well
         */
        destroy(options: any): void;
        /** unique id for this container */
        uid: number;
        /** @private */
        _updateFlags: number;
        /** @private */
        renderGroup: any;
        /** @private */
        parentRenderGroup: any;
        /** @private */
        parentRenderGroupIndex: number;
        /** @private */
        didChange: boolean;
        /** @private */
        relativeRenderGroupDepth: number;
        /**
         * The array of children of this container.
         * @readonly
         */
        readonly children: any[];
        /** The display object container that contains this display object. */
        parent: any;
        /** @private */
        includeInBuild: boolean;
        /** @private */
        measurable: boolean;
        /** @private */
        isSimple: boolean;
        /**
         * @internal
         * @ignore
         */
        updateTick: number;
        /**
         * Current transform of the object based on local factors: position, scale, other stuff.
         * @readonly
         */
        readonly localTransform: Matrix;
        /**
         * The relative group transform is a transform relative to the render group it belongs too. It will include all parent
         * transforms and up to the render group (think of it as kind of like a stage - but the stage can be nested).
         * If this container is is self a render group matrix will be relative to its parent render group
         * @readonly
         */
        readonly relativeGroupTransform: Matrix;
        /**
         * The group transform is a transform relative to the render group it belongs too.
         * If this container is render group then this will be an identity matrix. other wise it
         * will be the same as the relativeGroupTransform.
         * Use this value when actually rendering things to the screen
         * @readonly
         */
        readonly groupTransform: Matrix;
        /** If the object has been destroyed via destroy(). If true, it should not be used. */
        destroyed: boolean;
        /**
         * The coordinate of the object relative to the local coordinates of the parent.
         * @internal
         * @ignore
         */
        _position: ObservablePoint;
        /**
         * The scale factor of the object.
         * @internal
         * @ignore
         */
        _scale: ObservablePoint;
        /**
         * The pivot point of the container that it rotates around.
         * @internal
         * @ignore
         */
        _pivot: ObservablePoint;
        /**
         * The skew amount, on the x and y axis.
         * @internal
         * @ignore
         */
        _skew: ObservablePoint;
        /**
         * The X-coordinate value of the normalized local X axis,
         * the first column of the local transformation matrix without a scale.
         * @internal
         * @ignore
         */
        _cx: number;
        /**
         * The Y-coordinate value of the normalized local X axis,
         * the first column of the local transformation matrix without a scale.
         * @internal
         * @ignore
         */
        _sx: number;
        /**
         * The X-coordinate value of the normalized local Y axis,
         * the second column of the local transformation matrix without a scale.
         * @internal
         * @ignore
         */
        _cy: number;
        /**
         * The Y-coordinate value of the normalized local Y axis,
         * the second column of the local transformation matrix without a scale.
         * @internal
         * @ignore
         */
        _sy: number;
        /**
         * The rotation amount.
         * @internal
         * @ignore
         */
        _rotation: number;
        localColor: number;
        localAlpha: number;
        groupAlpha: number;
        groupColor: number;
        groupColorAlpha: number;
        /**
         * @internal
         * @ignore
         */
        localBlendMode: string;
        /**
         * @internal
         * @ignore
         */
        groupBlendMode: string;
        /**
         * This property holds three bits: culled, visible, renderable
         * the third bit represents culling (0 = culled, 1 = not culled) 0b100
         * the second bit represents visibility (0 = not visible, 1 = visible) 0b010
         * the first bit represents renderable (0 = not renderable, 1 = renderable) 0b001
         * @internal
         * @ignore
         */
        localDisplayStatus: number;
        /**
         * @internal
         * @ignore
         */
        globalDisplayStatus: number;
        /**
         * A value that increments each time the container is modified
         * the first 12 bits represent the container changes (eg transform, alpha, visible etc)
         * the second 12 bits represent:
         *      - for view changes (eg texture swap, geometry change etc)
         *      - containers changes (eg children added, removed etc)
         *
         *  view          container
         * [000000000000][00000000000]
         * @ignore
         */
        _didChangeId: number;
        /**
         * property that tracks if the container transform has changed
         * @ignore
         */
        _didLocalTransformChangeId: number;
        effects: any[];
        /**
         * Adds one or more children to the container.
         *
         * Multiple items can be added like so: `myContainer.addChild(thingOne, thingTwo, thingThree)`
         * @param {...Container} children - The Container(s) to add to the container
         * @returns {Container} - The first child that was added.
         */
        addChild(...children: Container[]): Container;
        sortDirty: boolean;
        /**
         * Removes one or more children from the container.
         * @param {...Container} children - The Container(s) to remove
         * @returns {Container} The first child that was removed.
         */
        removeChild(...children: Container[]): Container;
        /** @ignore */
        _onUpdate(point: any): void;
        isRenderGroup: boolean;
        /**
         * Calling this enables a render group for this container.
         * This means it will be rendered as a separate set of instructions.
         * The transform of the container will also be handled on the GPU rather than the CPU.
         */
        enableRenderGroup(): void;
        /** This will disable the render group for this container. */
        disableRenderGroup(): void;
        /** @ignore */
        _updateIsSimple(): void;
        /**
         * Current transform of the object based on world (parent) factors.
         * @readonly
         */
        readonly worldTransform: Matrix;
        _worldTransform: Matrix;
        /**
         * The position of the container on the x axis relative to the local coordinates of the parent.
         * An alias to position.x
         */
        x: number;
        /**
         * The position of the container on the y axis relative to the local coordinates of the parent.
         * An alias to position.y
         */
        y: number;
        /**
         * The coordinate of the object relative to the local coordinates of the parent.
         * @since 4.0.0
         */
        position: ObservablePoint;
        /**
         * The rotation of the object in radians.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         */
        rotation: number;
        /**
         * The angle of the object in degrees.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         */
        angle: number;
        /**
         * The center of rotation, scaling, and skewing for this display object in its local space. The `position`
         * is the projection of `pivot` in the parent's local space.
         *
         * By default, the pivot is the origin (0, 0).
         * @since 4.0.0
         */
        pivot: ObservablePoint;
        /**
         * The skew factor for the object in radians.
         * @since 4.0.0
         */
        skew: ObservablePoint;
        /**
         * The scale factors of this object along the local coordinate axes.
         *
         * The default scale is (1, 1).
         * @since 4.0.0
         */
        scale: ObservablePoint;
        /**
         * The width of the Container, setting this will actually modify the scale to achieve the value set.
         * @memberof scene.Container#
         */
        width: number;
        /**
         * The height of the Container, setting this will actually modify the scale to achieve the value set.
         * @memberof scene.Container#
         */
        height: number;
        /**
         * Retrieves the size of the container as a [Size]{@link Size} object.
         * This is faster than get the width and height separately.
         * @param out - Optional object to store the size in.
         * @returns - The size of the container.
         * @memberof scene.Container#
         */
        getSize(out: any): any;
        /**
         * Sets the size of the container to the specified width and height.
         * This is faster than setting the width and height separately.
         * @param value - This can be either a number or a [Size]{@link Size} object.
         * @param height - The height to set. Defaults to the value of `width` if not provided.
         * @memberof scene.Container#
         */
        setSize(value: any, height: any): void;
        /** Called when the skew or the rotation changes. */
        _updateSkew(): void;
        /**
         * Updates the transform properties of the container (accepts partial values).
         * @param {object} opts - The options for updating the transform.
         * @param {number} opts.x - The x position of the container.
         * @param {number} opts.y - The y position of the container.
         * @param {number} opts.scaleX - The scale factor on the x-axis.
         * @param {number} opts.scaleY - The scale factor on the y-axis.
         * @param {number} opts.rotation - The rotation of the container, in radians.
         * @param {number} opts.skewX - The skew factor on the x-axis.
         * @param {number} opts.skewY - The skew factor on the y-axis.
         * @param {number} opts.pivotX - The x coordinate of the pivot point.
         * @param {number} opts.pivotY - The y coordinate of the pivot point.
         */
        updateTransform(opts: {
            x: number;
            y: number;
            scaleX: number;
            scaleY: number;
            rotation: number;
            skewX: number;
            skewY: number;
            pivotX: number;
            pivotY: number;
        }): any;
        /**
         * Updates the local transform using the given matrix.
         * @param matrix - The matrix to use for updating the transform.
         */
        setFromMatrix(matrix: any): void;
        /** Updates the local transform. */
        updateLocalTransform(): void;
        alpha: number;
        tint: number;
        blendMode: string;
        /** The visibility of the object. If false the object will not be drawn, and the transform will not be updated. */
        visible: boolean;
        /** @ignore */
        culled: boolean;
        /** Can this object be rendered, if false the object will not be drawn but the transform will still be updated. */
        renderable: boolean;
        /** Whether or not the object should be rendered. */
        readonly isRenderable: boolean;
        _maskEffect: any;
        _filterEffect: any;
    };
    defaultOptions: {
        textureScale: number;
    };
    /**
     * Mixes all enumerable properties and methods from a source object to Container.
     * @param source - The source of properties and methods to mix in.
     */
    mixin(source: any): void;
};
export class MeshSimple extends Mesh {
    /**
     * @param options - Options to be used for construction
     */
    constructor(options: any);
    autoUpdate: boolean;
    onRender: () => void;
    set vertices(value: Float32Array);
    /**
     * Collection of vertices data.
     * @type {Float32Array}
     */
    get vertices(): Float32Array;
    _render(): void;
}
export function NOOP(): void;
export let NineSliceGeometry: {
    new (options?: {}): {
        [x: string]: any;
        /**
         * Updates the NineSliceGeometry with the options.
         * @param options - The options of the NineSliceGeometry.
         */
        update(options: any): void;
        width: any;
        height: any;
        _originalWidth: any;
        _originalHeight: any;
        _leftWidth: any;
        _rightWidth: any;
        _topHeight: any;
        _bottomHeight: any;
        /** Updates the positions of the vertices. */
        updatePositions(): void;
        /** Updates the UVs of the vertices. */
        updateUvs(): void;
        /**
         * Refreshes plane coordinates
         * @param options - Options to be applied to plane geometry
         */
        build(options: any): void;
        verticesX: any;
        verticesY: any;
        batchMode: string;
        /** The positions of the mesh. */
        positions: any;
        /** The UVs of the mesh. */
        uvs: any;
        /** The indices of the mesh. */
        indices: any;
        /** The unique id of the geometry. */
        uid: number;
        /**
         * the layout key will be generated by WebGPU all geometries that have the same structure
         * will have the same layout key. This is used to cache the pipeline layout
         * @internal
         * @ignore
         */
        _layoutKey: number;
        /** the instance count of the geometry to draw */
        instanceCount: any;
        _bounds: Bounds;
        _boundsDirty: boolean;
        attributes: any;
        buffers: any[];
        indexBuffer: any;
        topology: any;
        onBufferUpdate(): void;
        /**
         * Returns the requested attribute.
         * @param id - The name of the attribute required
         * @returns - The attribute requested.
         */
        getAttribute(id: any): any;
        /**
         * Returns the index buffer
         * @returns - The index buffer.
         */
        getIndex(): any;
        /**
         * Returns the requested buffer.
         * @param id - The name of the buffer required.
         * @returns - The buffer requested.
         */
        getBuffer(id: any): any;
        /**
         * Used to figure out how many vertices there are in this geometry
         * @returns the number of vertices in the geometry
         */
        getSize(): number;
        /** Returns the bounds of the geometry. */
        readonly bounds: any;
        /**
         * destroys the geometry.
         * @param destroyBuffers - destroy the buffers associated with this geometry
         */
        destroy(destroyBuffers?: boolean): void;
    };
    /** The default options for the NineSliceGeometry. */
    defaultOptions: {
        /** The width of the NineSlicePlane, setting this will actually modify the vertices and UV's of this plane. */
        width: number;
        /** The height of the NineSlicePlane, setting this will actually modify the vertices and UV's of this plane. */
        height: number;
        /** The width of the left column. */
        leftWidth: number;
        /** The height of the top row. */
        topHeight: number;
        /** The width of the right column. */
        rightWidth: number;
        /** The height of the bottom row. */
        bottomHeight: number;
        /** The original width of the texture */
        originalWidth: number;
        /** The original height of the texture */
        originalHeight: number;
    };
};
declare const NineSlicePlane_base: {
    new (options: scene.NineSliceSpriteOptions | Texture): {
        [x: string]: any;
        _roundPixels: number;
        renderPipeId: string;
        batched: boolean;
        _didSpriteUpdate: boolean;
        bounds: {
            minX: number;
            minY: number;
            maxX: number;
            maxY: number;
        };
        _leftWidth: any;
        _topHeight: any;
        _rightWidth: any;
        _bottomHeight: any;
        _width: any;
        _height: any;
        allowChildren: boolean;
        /** The texture that the NineSliceSprite is using. */
        texture: any;
        /**
         *  Whether or not to round the x/y position of the sprite.
         * @type {boolean}
         */
        roundPixels: boolean;
        /** The width of the NineSliceSprite, setting this will actually modify the vertices and UV's of this plane. */
        width: any;
        /** The height of the NineSliceSprite, setting this will actually modify the vertices and UV's of this plane. */
        height: any;
        /** The width of the left column (a) of the NineSliceSprite. */
        leftWidth: any;
        /** The width of the right column (b) of the NineSliceSprite. */
        topHeight: any;
        /** The width of the right column (b) of the NineSliceSprite. */
        rightWidth: any;
        /** The width of the right column (b) of the NineSliceSprite. */
        bottomHeight: any;
        _texture: any;
        /** The original width of the texture */
        readonly originalWidth: any;
        /** The original height of the texture */
        readonly originalHeight: any;
        onViewUpdate(): void;
        /** @private */
        didViewUpdate: boolean;
        /**
         * Adds the bounds of this object to the bounds object.
         * @param bounds - The output bounds object.
         */
        addBounds(bounds: any): void;
        /**
         * Checks if the object contains the given point.
         * @param point - The point to check
         */
        containsPoint(point: any): boolean;
        /**
         * Destroys this sprite renderable and optionally its texture.
         * @param options - Options parameter. A boolean will act as if all options
         *  have been set to that value
         * @param {boolean} [options.texture=false] - Should it destroy the current texture of the renderable as well
         * @param {boolean} [options.textureSource=false] - Should it destroy the textureSource of the renderable as well
         */
        destroy(options: any): void;
        /** unique id for this container */
        uid: number;
        /** @private */
        _updateFlags: number;
        /** @private */
        renderGroup: any;
        /** @private */
        parentRenderGroup: any;
        /** @private */
        parentRenderGroupIndex: number;
        /** @private */
        didChange: boolean;
        /** @private */
        relativeRenderGroupDepth: number;
        /**
         * The array of children of this container.
         * @readonly
         */
        readonly children: any[];
        /** The display object container that contains this display object. */
        parent: any;
        /** @private */
        includeInBuild: boolean;
        /** @private */
        measurable: boolean;
        /** @private */
        isSimple: boolean;
        /**
         * @internal
         * @ignore
         */
        updateTick: number;
        /**
         * Current transform of the object based on local factors: position, scale, other stuff.
         * @readonly
         */
        readonly localTransform: Matrix;
        /**
         * The relative group transform is a transform relative to the render group it belongs too. It will include all parent
         * transforms and up to the render group (think of it as kind of like a stage - but the stage can be nested).
         * If this container is is self a render group matrix will be relative to its parent render group
         * @readonly
         */
        readonly relativeGroupTransform: Matrix;
        /**
         * The group transform is a transform relative to the render group it belongs too.
         * If this container is render group then this will be an identity matrix. other wise it
         * will be the same as the relativeGroupTransform.
         * Use this value when actually rendering things to the screen
         * @readonly
         */
        readonly groupTransform: Matrix;
        /** If the object has been destroyed via destroy(). If true, it should not be used. */
        destroyed: boolean;
        /**
         * The coordinate of the object relative to the local coordinates of the parent.
         * @internal
         * @ignore
         */
        _position: ObservablePoint;
        /**
         * The scale factor of the object.
         * @internal
         * @ignore
         */
        _scale: ObservablePoint;
        /**
         * The pivot point of the container that it rotates around.
         * @internal
         * @ignore
         */
        _pivot: ObservablePoint;
        /**
         * The skew amount, on the x and y axis.
         * @internal
         * @ignore
         */
        _skew: ObservablePoint;
        /**
         * The X-coordinate value of the normalized local X axis,
         * the first column of the local transformation matrix without a scale.
         * @internal
         * @ignore
         */
        _cx: number;
        /**
         * The Y-coordinate value of the normalized local X axis,
         * the first column of the local transformation matrix without a scale.
         * @internal
         * @ignore
         */
        _sx: number;
        /**
         * The X-coordinate value of the normalized local Y axis,
         * the second column of the local transformation matrix without a scale.
         * @internal
         * @ignore
         */
        _cy: number;
        /**
         * The Y-coordinate value of the normalized local Y axis,
         * the second column of the local transformation matrix without a scale.
         * @internal
         * @ignore
         */
        _sy: number;
        /**
         * The rotation amount.
         * @internal
         * @ignore
         */
        _rotation: number;
        localColor: number;
        localAlpha: number;
        groupAlpha: number;
        groupColor: number;
        groupColorAlpha: number;
        /**
         * @internal
         * @ignore
         */
        localBlendMode: string;
        /**
         * @internal
         * @ignore
         */
        groupBlendMode: string;
        /**
         * This property holds three bits: culled, visible, renderable
         * the third bit represents culling (0 = culled, 1 = not culled) 0b100
         * the second bit represents visibility (0 = not visible, 1 = visible) 0b010
         * the first bit represents renderable (0 = not renderable, 1 = renderable) 0b001
         * @internal
         * @ignore
         */
        localDisplayStatus: number;
        /**
         * @internal
         * @ignore
         */
        globalDisplayStatus: number;
        /**
         * A value that increments each time the container is modified
         * the first 12 bits represent the container changes (eg transform, alpha, visible etc)
         * the second 12 bits represent:
         *      - for view changes (eg texture swap, geometry change etc)
         *      - containers changes (eg children added, removed etc)
         *
         *  view          container
         * [000000000000][00000000000]
         * @ignore
         */
        _didChangeId: number;
        /**
         * property that tracks if the container transform has changed
         * @ignore
         */
        _didLocalTransformChangeId: number;
        effects: any[];
        /**
         * Adds one or more children to the container.
         *
         * Multiple items can be added like so: `myContainer.addChild(thingOne, thingTwo, thingThree)`
         * @param {...Container} children - The Container(s) to add to the container
         * @returns {Container} - The first child that was added.
         */
        addChild(...children: Container[]): Container;
        sortDirty: boolean;
        /**
         * Removes one or more children from the container.
         * @param {...Container} children - The Container(s) to remove
         * @returns {Container} The first child that was removed.
         */
        removeChild(...children: Container[]): Container;
        /** @ignore */
        _onUpdate(point: any): void;
        isRenderGroup: boolean;
        /**
         * Calling this enables a render group for this container.
         * This means it will be rendered as a separate set of instructions.
         * The transform of the container will also be handled on the GPU rather than the CPU.
         */
        enableRenderGroup(): void;
        /** This will disable the render group for this container. */
        disableRenderGroup(): void;
        /** @ignore */
        _updateIsSimple(): void;
        /**
         * Current transform of the object based on world (parent) factors.
         * @readonly
         */
        readonly worldTransform: Matrix;
        _worldTransform: Matrix;
        /**
         * The position of the container on the x axis relative to the local coordinates of the parent.
         * An alias to position.x
         */
        x: number;
        /**
         * The position of the container on the y axis relative to the local coordinates of the parent.
         * An alias to position.y
         */
        y: number;
        /**
         * The coordinate of the object relative to the local coordinates of the parent.
         * @since 4.0.0
         */
        position: ObservablePoint;
        /**
         * The rotation of the object in radians.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         */
        rotation: number;
        /**
         * The angle of the object in degrees.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         */
        angle: number;
        /**
         * The center of rotation, scaling, and skewing for this display object in its local space. The `position`
         * is the projection of `pivot` in the parent's local space.
         *
         * By default, the pivot is the origin (0, 0).
         * @since 4.0.0
         */
        pivot: ObservablePoint;
        /**
         * The skew factor for the object in radians.
         * @since 4.0.0
         */
        skew: ObservablePoint;
        /**
         * The scale factors of this object along the local coordinate axes.
         *
         * The default scale is (1, 1).
         * @since 4.0.0
         */
        scale: ObservablePoint;
        /**
         * Retrieves the size of the container as a [Size]{@link Size} object.
         * This is faster than get the width and height separately.
         * @param out - Optional object to store the size in.
         * @returns - The size of the container.
         * @memberof scene.Container#
         */
        getSize(out: any): any;
        /**
         * Sets the size of the container to the specified width and height.
         * This is faster than setting the width and height separately.
         * @param value - This can be either a number or a [Size]{@link Size} object.
         * @param height - The height to set. Defaults to the value of `width` if not provided.
         * @memberof scene.Container#
         */
        setSize(value: any, height: any): void;
        /** Called when the skew or the rotation changes. */
        _updateSkew(): void;
        /**
         * Updates the transform properties of the container (accepts partial values).
         * @param {object} opts - The options for updating the transform.
         * @param {number} opts.x - The x position of the container.
         * @param {number} opts.y - The y position of the container.
         * @param {number} opts.scaleX - The scale factor on the x-axis.
         * @param {number} opts.scaleY - The scale factor on the y-axis.
         * @param {number} opts.rotation - The rotation of the container, in radians.
         * @param {number} opts.skewX - The skew factor on the x-axis.
         * @param {number} opts.skewY - The skew factor on the y-axis.
         * @param {number} opts.pivotX - The x coordinate of the pivot point.
         * @param {number} opts.pivotY - The y coordinate of the pivot point.
         */
        updateTransform(opts: {
            x: number;
            y: number;
            scaleX: number;
            scaleY: number;
            rotation: number;
            skewX: number;
            skewY: number;
            pivotX: number;
            pivotY: number;
        }): any;
        /**
         * Updates the local transform using the given matrix.
         * @param matrix - The matrix to use for updating the transform.
         */
        setFromMatrix(matrix: any): void;
        /** Updates the local transform. */
        updateLocalTransform(): void;
        alpha: number;
        tint: number;
        blendMode: string;
        /** The visibility of the object. If false the object will not be drawn, and the transform will not be updated. */
        visible: boolean;
        /** @ignore */
        culled: boolean;
        /** Can this object be rendered, if false the object will not be drawn but the transform will still be updated. */
        renderable: boolean;
        /** Whether or not the object should be rendered. */
        readonly isRenderable: boolean;
        _maskEffect: any;
        _filterEffect: any;
    };
    /** The default options, used to override the initial values of any options passed in the constructor. */
    defaultOptions: {
        /** @default Texture.EMPTY */
        texture: Texture;
    };
    /**
     * Mixes all enumerable properties and methods from a source object to Container.
     * @param source - The source of properties and methods to mix in.
     */
    mixin(source: any): void;
};
export class NineSlicePlane extends NineSlicePlane_base {
    constructor(...args: any[]);
}
export let NineSliceSprite: {
    new (options: scene.NineSliceSpriteOptions | Texture): {
        [x: string]: any;
        _roundPixels: number;
        renderPipeId: string;
        batched: boolean;
        _didSpriteUpdate: boolean;
        bounds: {
            minX: number;
            minY: number;
            maxX: number;
            maxY: number;
        };
        _leftWidth: any;
        _topHeight: any;
        _rightWidth: any;
        _bottomHeight: any;
        _width: any;
        _height: any;
        allowChildren: boolean;
        /** The texture that the NineSliceSprite is using. */
        texture: any;
        /**
         *  Whether or not to round the x/y position of the sprite.
         * @type {boolean}
         */
        roundPixels: boolean;
        /** The width of the NineSliceSprite, setting this will actually modify the vertices and UV's of this plane. */
        width: any;
        /** The height of the NineSliceSprite, setting this will actually modify the vertices and UV's of this plane. */
        height: any;
        /** The width of the left column (a) of the NineSliceSprite. */
        leftWidth: any;
        /** The width of the right column (b) of the NineSliceSprite. */
        topHeight: any;
        /** The width of the right column (b) of the NineSliceSprite. */
        rightWidth: any;
        /** The width of the right column (b) of the NineSliceSprite. */
        bottomHeight: any;
        _texture: any;
        /** The original width of the texture */
        readonly originalWidth: any;
        /** The original height of the texture */
        readonly originalHeight: any;
        onViewUpdate(): void;
        /** @private */
        didViewUpdate: boolean;
        /**
         * Adds the bounds of this object to the bounds object.
         * @param bounds - The output bounds object.
         */
        addBounds(bounds: any): void;
        /**
         * Checks if the object contains the given point.
         * @param point - The point to check
         */
        containsPoint(point: any): boolean;
        /**
         * Destroys this sprite renderable and optionally its texture.
         * @param options - Options parameter. A boolean will act as if all options
         *  have been set to that value
         * @param {boolean} [options.texture=false] - Should it destroy the current texture of the renderable as well
         * @param {boolean} [options.textureSource=false] - Should it destroy the textureSource of the renderable as well
         */
        destroy(options: any): void;
        /** unique id for this container */
        uid: number;
        /** @private */
        _updateFlags: number;
        /** @private */
        renderGroup: any;
        /** @private */
        parentRenderGroup: any;
        /** @private */
        parentRenderGroupIndex: number;
        /** @private */
        didChange: boolean;
        /** @private */
        relativeRenderGroupDepth: number;
        /**
         * The array of children of this container.
         * @readonly
         */
        readonly children: any[];
        /** The display object container that contains this display object. */
        parent: any;
        /** @private */
        includeInBuild: boolean;
        /** @private */
        measurable: boolean;
        /** @private */
        isSimple: boolean;
        /**
         * @internal
         * @ignore
         */
        updateTick: number;
        /**
         * Current transform of the object based on local factors: position, scale, other stuff.
         * @readonly
         */
        readonly localTransform: Matrix;
        /**
         * The relative group transform is a transform relative to the render group it belongs too. It will include all parent
         * transforms and up to the render group (think of it as kind of like a stage - but the stage can be nested).
         * If this container is is self a render group matrix will be relative to its parent render group
         * @readonly
         */
        readonly relativeGroupTransform: Matrix;
        /**
         * The group transform is a transform relative to the render group it belongs too.
         * If this container is render group then this will be an identity matrix. other wise it
         * will be the same as the relativeGroupTransform.
         * Use this value when actually rendering things to the screen
         * @readonly
         */
        readonly groupTransform: Matrix;
        /** If the object has been destroyed via destroy(). If true, it should not be used. */
        destroyed: boolean;
        /**
         * The coordinate of the object relative to the local coordinates of the parent.
         * @internal
         * @ignore
         */
        _position: ObservablePoint;
        /**
         * The scale factor of the object.
         * @internal
         * @ignore
         */
        _scale: ObservablePoint;
        /**
         * The pivot point of the container that it rotates around.
         * @internal
         * @ignore
         */
        _pivot: ObservablePoint;
        /**
         * The skew amount, on the x and y axis.
         * @internal
         * @ignore
         */
        _skew: ObservablePoint;
        /**
         * The X-coordinate value of the normalized local X axis,
         * the first column of the local transformation matrix without a scale.
         * @internal
         * @ignore
         */
        _cx: number;
        /**
         * The Y-coordinate value of the normalized local X axis,
         * the first column of the local transformation matrix without a scale.
         * @internal
         * @ignore
         */
        _sx: number;
        /**
         * The X-coordinate value of the normalized local Y axis,
         * the second column of the local transformation matrix without a scale.
         * @internal
         * @ignore
         */
        _cy: number;
        /**
         * The Y-coordinate value of the normalized local Y axis,
         * the second column of the local transformation matrix without a scale.
         * @internal
         * @ignore
         */
        _sy: number;
        /**
         * The rotation amount.
         * @internal
         * @ignore
         */
        _rotation: number;
        localColor: number;
        localAlpha: number;
        groupAlpha: number;
        groupColor: number;
        groupColorAlpha: number;
        /**
         * @internal
         * @ignore
         */
        localBlendMode: string;
        /**
         * @internal
         * @ignore
         */
        groupBlendMode: string;
        /**
         * This property holds three bits: culled, visible, renderable
         * the third bit represents culling (0 = culled, 1 = not culled) 0b100
         * the second bit represents visibility (0 = not visible, 1 = visible) 0b010
         * the first bit represents renderable (0 = not renderable, 1 = renderable) 0b001
         * @internal
         * @ignore
         */
        localDisplayStatus: number;
        /**
         * @internal
         * @ignore
         */
        globalDisplayStatus: number;
        /**
         * A value that increments each time the container is modified
         * the first 12 bits represent the container changes (eg transform, alpha, visible etc)
         * the second 12 bits represent:
         *      - for view changes (eg texture swap, geometry change etc)
         *      - containers changes (eg children added, removed etc)
         *
         *  view          container
         * [000000000000][00000000000]
         * @ignore
         */
        _didChangeId: number;
        /**
         * property that tracks if the container transform has changed
         * @ignore
         */
        _didLocalTransformChangeId: number;
        effects: any[];
        /**
         * Adds one or more children to the container.
         *
         * Multiple items can be added like so: `myContainer.addChild(thingOne, thingTwo, thingThree)`
         * @param {...Container} children - The Container(s) to add to the container
         * @returns {Container} - The first child that was added.
         */
        addChild(...children: Container[]): Container;
        sortDirty: boolean;
        /**
         * Removes one or more children from the container.
         * @param {...Container} children - The Container(s) to remove
         * @returns {Container} The first child that was removed.
         */
        removeChild(...children: Container[]): Container;
        /** @ignore */
        _onUpdate(point: any): void;
        isRenderGroup: boolean;
        /**
         * Calling this enables a render group for this container.
         * This means it will be rendered as a separate set of instructions.
         * The transform of the container will also be handled on the GPU rather than the CPU.
         */
        enableRenderGroup(): void;
        /** This will disable the render group for this container. */
        disableRenderGroup(): void;
        /** @ignore */
        _updateIsSimple(): void;
        /**
         * Current transform of the object based on world (parent) factors.
         * @readonly
         */
        readonly worldTransform: Matrix;
        _worldTransform: Matrix;
        /**
         * The position of the container on the x axis relative to the local coordinates of the parent.
         * An alias to position.x
         */
        x: number;
        /**
         * The position of the container on the y axis relative to the local coordinates of the parent.
         * An alias to position.y
         */
        y: number;
        /**
         * The coordinate of the object relative to the local coordinates of the parent.
         * @since 4.0.0
         */
        position: ObservablePoint;
        /**
         * The rotation of the object in radians.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         */
        rotation: number;
        /**
         * The angle of the object in degrees.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         */
        angle: number;
        /**
         * The center of rotation, scaling, and skewing for this display object in its local space. The `position`
         * is the projection of `pivot` in the parent's local space.
         *
         * By default, the pivot is the origin (0, 0).
         * @since 4.0.0
         */
        pivot: ObservablePoint;
        /**
         * The skew factor for the object in radians.
         * @since 4.0.0
         */
        skew: ObservablePoint;
        /**
         * The scale factors of this object along the local coordinate axes.
         *
         * The default scale is (1, 1).
         * @since 4.0.0
         */
        scale: ObservablePoint;
        /**
         * Retrieves the size of the container as a [Size]{@link Size} object.
         * This is faster than get the width and height separately.
         * @param out - Optional object to store the size in.
         * @returns - The size of the container.
         * @memberof scene.Container#
         */
        getSize(out: any): any;
        /**
         * Sets the size of the container to the specified width and height.
         * This is faster than setting the width and height separately.
         * @param value - This can be either a number or a [Size]{@link Size} object.
         * @param height - The height to set. Defaults to the value of `width` if not provided.
         * @memberof scene.Container#
         */
        setSize(value: any, height: any): void;
        /** Called when the skew or the rotation changes. */
        _updateSkew(): void;
        /**
         * Updates the transform properties of the container (accepts partial values).
         * @param {object} opts - The options for updating the transform.
         * @param {number} opts.x - The x position of the container.
         * @param {number} opts.y - The y position of the container.
         * @param {number} opts.scaleX - The scale factor on the x-axis.
         * @param {number} opts.scaleY - The scale factor on the y-axis.
         * @param {number} opts.rotation - The rotation of the container, in radians.
         * @param {number} opts.skewX - The skew factor on the x-axis.
         * @param {number} opts.skewY - The skew factor on the y-axis.
         * @param {number} opts.pivotX - The x coordinate of the pivot point.
         * @param {number} opts.pivotY - The y coordinate of the pivot point.
         */
        updateTransform(opts: {
            x: number;
            y: number;
            scaleX: number;
            scaleY: number;
            rotation: number;
            skewX: number;
            skewY: number;
            pivotX: number;
            pivotY: number;
        }): any;
        /**
         * Updates the local transform using the given matrix.
         * @param matrix - The matrix to use for updating the transform.
         */
        setFromMatrix(matrix: any): void;
        /** Updates the local transform. */
        updateLocalTransform(): void;
        alpha: number;
        tint: number;
        blendMode: string;
        /** The visibility of the object. If false the object will not be drawn, and the transform will not be updated. */
        visible: boolean;
        /** @ignore */
        culled: boolean;
        /** Can this object be rendered, if false the object will not be drawn but the transform will still be updated. */
        renderable: boolean;
        /** Whether or not the object should be rendered. */
        readonly isRenderable: boolean;
        _maskEffect: any;
        _filterEffect: any;
    };
    /** The default options, used to override the initial values of any options passed in the constructor. */
    defaultOptions: {
        /** @default Texture.EMPTY */
        texture: Texture;
    };
    /**
     * Mixes all enumerable properties and methods from a source object to Container.
     * @param source - The source of properties and methods to mix in.
     */
    mixin(source: any): void;
};
export class NineSliceSpritePipe {
    constructor(renderer: any);
    _gpuSpriteHash: any;
    _renderer: any;
    addRenderable(sprite: any, _instructionSet: any): void;
    updateRenderable(sprite: any): void;
    validateRenderable(sprite: any): boolean;
    destroyRenderable(sprite: any): void;
    _updateBatchableSprite(sprite: any, batchableSprite: any): void;
    _getGpuSprite(sprite: any): any;
    _initGPUSprite(sprite: any): BatchableMesh;
    destroy(): void;
}
export namespace NineSliceSpritePipe {
    export namespace extension_53 {
        let type_47: any[];
        export { type_47 as type };
        let name_47: string;
        export { name_47 as name };
    }
    export { extension_53 as extension };
}
export let NoiseFilter: {
    new (options?: {}): {
        [x: string]: any;
        /**
         * The amount of noise to apply, this value should be in the range (0, 1].
         * @default 0.5
         */
        noise: any;
        /** A seed value to apply to the random noise generation. `Math.random()` is a good value to use. */
        seed: any;
        /** If enabled is true the filter is applied, if false it will not. */
        enabled: boolean;
        /**
         * The gpu state the filter requires to render.
         * @internal
         * @ignore
         */
        _state: {
            data: number;
            /**
             * The blend mode to be applied when this state is set. Apply a value of `normal` to reset the blend mode.
             * Setting this mode to anything other than NO_BLEND will automatically switch blending on.
             * @default 'normal'
             */
            blendMode: any;
            /**
             * The polygon offset. Setting this property to anything other than 0 will automatically enable polygon offset fill.
             * @default 0
             */
            polygonOffset: any;
            /**
             * Activates blending of the computed fragment color values.
             * @default true
             */
            blend: boolean;
            /**
             * Enables or disables writing to the depth buffer.
             * @default true
             */
            depthMask: boolean;
            /**
             * Activates adding an offset to depth values of polygon's fragments
             * @default false
             */
            offsets: boolean;
            /** The culling settings for this state none - No culling back - Back face culling front - Front face culling */
            cullMode: "none" | "front" | "back";
            /**
             * Activates culling of polygons.
             * @default false
             */
            culling: boolean;
            /**
             * Specifies whether or not front or back-facing polygons can be culled.
             * @default false
             */
            clockwiseFrontFace: boolean;
            /**
             * Activates depth comparisons and updates to the depth buffer.
             * @default false
             */
            depthTest: boolean;
            _blendMode: any;
            _blendModeId: any;
            _polygonOffset: any;
            toString(): string;
        };
        /**
         * Get the blend mode of the filter.
         * @default "normal"
         */
        blendMode: any;
        padding: any;
        antialias: any;
        resolution: any;
        blendRequired: any;
        /**
         * Applies the filter
         * @param filterManager - The renderer to retrieve the filter from
         * @param input - The input render target.
         * @param output - The target to output to.
         * @param clearMode - Should the output be cleared before rendering to it
         */
        apply(filterManager: any, input: any, output: any, clearMode: any): void;
        /**
         * A record of the uniform groups and resources used by the shader.
         * This is used by WebGL renderer to sync uniform data.
         * @internal
         * @ignore
         */
        _uniformBindMap: any;
        _ownedBindGroups: any[];
        gpuProgram: any;
        glProgram: any;
        compatibleRenderers: any;
        groups: any;
        resources: {};
        /**
         * Sometimes a resource group will be provided later (for example global uniforms)
         * In such cases, this method can be used to let the shader know about the group.
         * @param name - the name of the resource group
         * @param groupIndex - the index of the group (should match the webGPU shader group location)
         * @param bindIndex - the index of the bind point (should match the webGPU shader bind point)
         */
        addResource(name: any, groupIndex: any, bindIndex: any): void;
        _buildResourceAccessor(groups: any, nameHash: any): {};
        /**
         * Use to destroy the shader when its not longer needed.
         * It will destroy the resources and remove listeners.
         * @param destroyPrograms - if the programs should be destroyed as well.
         * Make sure its not being used by other shaders!
         */
        destroy(destroyPrograms?: boolean): void;
    };
    defaultOptions: {
        noise: number;
    };
    /**
     * A short hand function to create a filter based of a vertex and fragment shader src.
     * @param options
     * @returns A shiny new PixiJS filter!
     */
    from(options: any): {
        [x: string]: any;
        /** If enabled is true the filter is applied, if false it will not. */
        enabled: boolean;
        /**
         * The gpu state the filter requires to render.
         * @internal
         * @ignore
         */
        _state: {
            data: number;
            /**
             * The blend mode to be applied when this state is set. Apply a value of `normal` to reset the blend mode.
             * Setting this mode to anything other than NO_BLEND will automatically switch blending on.
             * @default 'normal'
             */
            blendMode: any;
            /**
             * The polygon offset. Setting this property to anything other than 0 will automatically enable polygon offset fill.
             * @default 0
             */
            polygonOffset: any;
            /**
             * Activates blending of the computed fragment color values.
             * @default true
             */
            blend: boolean;
            /**
             * Enables or disables writing to the depth buffer.
             * @default true
             */
            depthMask: boolean;
            /**
             * Activates adding an offset to depth values of polygon's fragments
             * @default false
             */
            offsets: boolean;
            /** The culling settings for this state none - No culling back - Back face culling front - Front face culling */
            cullMode: "none" | "front" | "back";
            /**
             * Activates culling of polygons.
             * @default false
             */
            culling: boolean;
            /**
             * Specifies whether or not front or back-facing polygons can be culled.
             * @default false
             */
            clockwiseFrontFace: boolean;
            /**
             * Activates depth comparisons and updates to the depth buffer.
             * @default false
             */
            depthTest: boolean;
            _blendMode: any;
            _blendModeId: any;
            _polygonOffset: any;
            toString(): string;
        };
        /**
         * Get the blend mode of the filter.
         * @default "normal"
         */
        blendMode: any;
        padding: any;
        antialias: any;
        resolution: any;
        blendRequired: any;
        /**
         * Applies the filter
         * @param filterManager - The renderer to retrieve the filter from
         * @param input - The input render target.
         * @param output - The target to output to.
         * @param clearMode - Should the output be cleared before rendering to it
         */
        apply(filterManager: any, input: any, output: any, clearMode: any): void;
        /**
         * A record of the uniform groups and resources used by the shader.
         * This is used by WebGL renderer to sync uniform data.
         * @internal
         * @ignore
         */
        _uniformBindMap: any;
        _ownedBindGroups: any[];
        gpuProgram: any;
        glProgram: any;
        compatibleRenderers: any;
        groups: any;
        resources: {};
        /**
         * Sometimes a resource group will be provided later (for example global uniforms)
         * In such cases, this method can be used to let the shader know about the group.
         * @param name - the name of the resource group
         * @param groupIndex - the index of the group (should match the webGPU shader group location)
         * @param bindIndex - the index of the bind point (should match the webGPU shader bind point)
         */
        addResource(name: any, groupIndex: any, bindIndex: any): void;
        _buildResourceAccessor(groups: any, nameHash: any): {};
        /**
         * Use to destroy the shader when its not longer needed.
         * It will destroy the resources and remove listeners.
         * @param destroyPrograms - if the programs should be destroyed as well.
         * Make sure its not being used by other shaders!
         */
        destroy(destroyPrograms?: boolean): void;
    };
};
export class ObservablePoint {
    /**
     * Creates a new `ObservablePoint`
     * @param observer - Observer to pass to listen for change events.
     * @param {number} [x=0] - position of the point on the x axis
     * @param {number} [y=0] - position of the point on the y axis
     */
    constructor(observer: any, x?: number, y?: number);
    _x: number;
    _y: number;
    _observer: any;
    /**
     * Creates a clone of this point.
     * @param observer - Optional observer to pass to the new observable point.
     * @returns a copy of this observable point
     */
    clone(observer: any): ObservablePoint;
    /**
     * Sets the point to a new `x` and `y` position.
     * If `y` is omitted, both `x` and `y` will be set to `x`.
     * @param {number} [x=0] - position of the point on the x axis
     * @param {number} [y=x] - position of the point on the y axis
     * @returns The observable point instance itself
     */
    set(x?: number, y?: number): this;
    /**
     * Copies x and y from the given point (`p`)
     * @param p - The point to copy from. Can be any of type that is or extends `PointData`
     * @returns The observable point instance itself
     */
    copyFrom(p: any): this;
    /**
     * Copies this point's x and y into that of the given point (`p`)
     * @param p - The point to copy to. Can be any of type that is or extends `PointData`
     * @returns The point (`p`) with values updated
     */
    copyTo(p: any): any;
    /**
     * Accepts another point (`p`) and returns `true` if the given point is equal to this point
     * @param p - The point to check
     * @returns Returns `true` if both `x` and `y` are equal
     */
    equals(p: any): boolean;
    toString(): string;
    set x(value: number);
    /** Position of the observable point on the x axis. */
    get x(): number;
    set y(value: number);
    /** Position of the observable point on the y axis. */
    get y(): number;
}
export const PI_2: number;
export class PipelineSystem {
    constructor(renderer: any);
    _moduleCache: any;
    _bufferLayoutsCache: any;
    _pipeCache: any;
    _pipeStateCaches: any;
    _colorMask: number;
    _multisampleCount: number;
    _renderer: any;
    contextChange(gpu: any): void;
    _gpu: any;
    setMultisampleCount(multisampleCount: any): void;
    setRenderTarget(renderTarget: any): void;
    _depthStencilAttachment: number;
    setColorMask(colorMask: any): void;
    setStencilMode(stencilMode: any): void;
    _stencilMode: any;
    _stencilState: any;
    setPipeline(geometry: any, program: any, state: any, passEncoder: any): void;
    getPipeline(geometry: any, program: any, state: any, topology: any): any;
    _createPipeline(geometry: any, program: any, state: any, topology: any): any;
    _getModule(code: any): any;
    _createModule(code: any): any;
    _generateBufferKey(geometry: any): any;
    _createVertexBufferLayouts(geometry: any): any;
    _updatePipeHash(): void;
    destroy(): void;
}
export namespace PipelineSystem {
    export namespace extension_54 {
        let type_48: any[];
        export { type_48 as type };
        let name_48: string;
        export { name_48 as name };
    }
    export { extension_54 as extension };
}
export let PlaneGeometry: {
    new (...args: any[]): {
        [x: string]: any;
        /**
         * Refreshes plane coordinates
         * @param options - Options to be applied to plane geometry
         */
        build(options: any): void;
        verticesX: any;
        verticesY: any;
        width: any;
        height: any;
        batchMode: string;
        /** The positions of the mesh. */
        positions: any;
        /** The UVs of the mesh. */
        uvs: any;
        /** The indices of the mesh. */
        indices: any;
        /** The unique id of the geometry. */
        uid: number;
        /**
         * the layout key will be generated by WebGPU all geometries that have the same structure
         * will have the same layout key. This is used to cache the pipeline layout
         * @internal
         * @ignore
         */
        _layoutKey: number;
        /** the instance count of the geometry to draw */
        instanceCount: any;
        _bounds: Bounds;
        _boundsDirty: boolean;
        attributes: any;
        buffers: any[];
        indexBuffer: any;
        topology: any;
        onBufferUpdate(): void;
        /**
         * Returns the requested attribute.
         * @param id - The name of the attribute required
         * @returns - The attribute requested.
         */
        getAttribute(id: any): any;
        /**
         * Returns the index buffer
         * @returns - The index buffer.
         */
        getIndex(): any;
        /**
         * Returns the requested buffer.
         * @param id - The name of the buffer required.
         * @returns - The buffer requested.
         */
        getBuffer(id: any): any;
        /**
         * Used to figure out how many vertices there are in this geometry
         * @returns the number of vertices in the geometry
         */
        getSize(): number;
        /** Returns the bounds of the geometry. */
        readonly bounds: any;
        /**
         * destroys the geometry.
         * @param destroyBuffers - destroy the buffers associated with this geometry
         */
        destroy(destroyBuffers?: boolean): void;
    };
    defaultOptions: {
        width: number;
        height: number;
        verticesX: number;
        verticesY: number;
    };
};
export class Point {
    /**
     * A static Point object with `x` and `y` values of `0`. Can be used to avoid creating new objects multiple times.
     * @readonly
     */
    static readonly get shared(): Point;
    /**
     * Creates a new `Point`
     * @param {number} [x=0] - position of the point on the x axis
     * @param {number} [y=0] - position of the point on the y axis
     */
    constructor(x?: number, y?: number);
    /** Position of the point on the x axis */
    x: number;
    /** Position of the point on the y axis */
    y: number;
    /**
     * Creates a clone of this point
     * @returns A clone of this point
     */
    clone(): Point;
    /**
     * Copies `x` and `y` from the given point into this point
     * @param p - The point to copy from
     * @returns The point instance itself
     */
    copyFrom(p: any): this;
    /**
     * Copies this point's x and y into the given point (`p`).
     * @param p - The point to copy to. Can be any of type that is or extends `PointData`
     * @returns The point (`p`) with values updated
     */
    copyTo(p: any): any;
    /**
     * Accepts another point (`p`) and returns `true` if the given point is equal to this point
     * @param p - The point to check
     * @returns Returns `true` if both `x` and `y` are equal
     */
    equals(p: any): boolean;
    /**
     * Sets the point to a new `x` and `y` position.
     * If `y` is omitted, both `x` and `y` will be set to `x`.
     * @param {number} [x=0] - position of the point on the `x` axis
     * @param {number} [y=x] - position of the point on the `y` axis
     * @returns The point instance itself
     */
    set(x?: number, y?: number): this;
    toString(): string;
}
export class Polygon {
    /**
     * @param points - This can be an array of Points
     *  that form the polygon, a flat array of numbers that will be interpreted as [x,y, x,y, ...], or
     *  the arguments passed can be all the points of the polygon e.g.
     *  `new Polygon(new Point(), new Point(), ...)`, or the arguments passed can be flat
     *  x,y values e.g. `new Polygon(x,y, x,y, x,y, ...)` where `x` and `y` are Numbers.
     */
    constructor(...points: any[]);
    /**
     * The type of the object, mainly used to avoid `instanceof` checks
     * @default 'polygon'
     */
    type: string;
    points: any[];
    closePath: boolean;
    /**
     * Creates a clone of this polygon.
     * @returns - A copy of the polygon.
     */
    clone(): Polygon;
    /**
     * Checks whether the x and y coordinates passed to this function are contained within this polygon.
     * @param x - The X coordinate of the point to test.
     * @param y - The Y coordinate of the point to test.
     * @returns - Whether the x/y coordinates are within this polygon.
     */
    contains(x: any, y: any): boolean;
    /**
     * Checks whether the x and y coordinates given are contained within this polygon including the stroke.
     * @param x - The X coordinate of the point to test
     * @param y - The Y coordinate of the point to test
     * @param strokeWidth - The width of the line to check
     * @returns Whether the x/y coordinates are within this polygon
     */
    strokeContains(x: any, y: any, strokeWidth: any): boolean;
    /**
     * Returns the framing rectangle of the polygon as a Rectangle object
     * @param out - optional rectangle to store the result
     * @returns The framing rectangle
     */
    getBounds(out: any): any;
    /**
     * Copies another polygon to this one.
     * @param polygon - The polygon to copy from.
     * @returns Returns itself.
     */
    copyFrom(polygon: any): this;
    /**
     * Copies this polygon to another one.
     * @param polygon - The polygon to copy to.
     * @returns Returns given parameter.
     */
    copyTo(polygon: any): any;
    toString(): string;
    /**
     * Get the last X coordinate of the polygon
     * @readonly
     */
    readonly get lastX(): any;
    /**
     * Get the last Y coordinate of the polygon
     * @readonly
     */
    readonly get lastY(): any;
    /**
     * Get the first X coordinate of the polygon
     * @readonly
     */
    readonly get x(): any;
    /**
     * Get the first Y coordinate of the polygon
     * @readonly
     */
    readonly get y(): any;
}
export class Pool {
    /**
     * Constructs a new Pool.
     * @param ClassType - The constructor of the items in the pool.
     * @param {number} [initialSize] - The initial size of the pool.
     */
    constructor(ClassType: any, initialSize?: number);
    _pool: any[];
    _count: number;
    _index: number;
    _classType: any;
    /**
     * Prepopulates the pool with a given number of items.
     * @param total - The number of items to add to the pool.
     */
    prepopulate(total: any): void;
    /**
     * Gets an item from the pool. Calls the item's `init` method if it exists.
     * If there are no items left in the pool, a new one will be created.
     * @param {unknown} [data] - Optional data to pass to the item's constructor.
     * @returns {T} The item from the pool.
     */
    get(data?: unknown): T;
    /**
     * Returns an item to the pool. Calls the item's `reset` method if it exists.
     * @param {T} item - The item to return to the pool.
     */
    return(item: T): void;
    /**
     * Gets the number of items in the pool.
     * @readonly
     * @member {number}
     */
    readonly get totalSize(): number;
    /**
     * Gets the number of items in the pool that are free to use without needing to create more.
     * @readonly
     * @member {number}
     */
    readonly get totalFree(): number;
    /**
     * Gets the number of items in the pool that are currently in use.
     * @readonly
     * @member {number}
     */
    readonly get totalUsed(): number;
}
export class PoolGroupClass {
    /**
     * A map to store the pools by their class type.
     * @private
     */
    private _poolsByClass;
    /**
     * Prepopulates a specific pool with a given number of items.
     * @template T The type of items in the pool. Must extend PoolItem.
     * @param {PoolItemConstructor<T>} Class - The constructor of the items in the pool.
     * @param {number} total - The number of items to add to the pool.
     */
    prepopulate<T>(Class: PoolItemConstructor<T>, total: number): void;
    /**
     * Gets an item from a specific pool.
     * @template T The type of items in the pool. Must extend PoolItem.
     * @param {PoolItemConstructor<T>} Class - The constructor of the items in the pool.
     * @param {unknown} [data] - Optional data to pass to the item's constructor.
     * @returns {T} The item from the pool.
     */
    get<T>(Class: PoolItemConstructor<T>, data?: unknown): T;
    /**
     * Returns an item to its respective pool.
     * @param {PoolItem} item - The item to return to the pool.
     */
    return(item: PoolItem): void;
    /**
     * Gets a specific pool based on the class type.
     * @template T The type of items in the pool. Must extend PoolItem.
     * @param {PoolItemConstructor<T>} ClassType - The constructor of the items in the pool.
     * @returns {Pool<T>} The pool of the given class type.
     */
    getPool<T>(ClassType: PoolItemConstructor<T>): Pool<T>;
    /** gets the usage stats of each pool in the system */
    stats(): {};
}
export let PrepareBase: {
    new (renderer: Renderer): {
        /** called per frame by the ticker, defer processing to next tick */
        _tick: () => void;
        timeout: NodeJS.Timeout;
        /** process the queue up to max item limit per frame */
        _processQueue: () => void;
        renderer: Renderer;
        queue: any[];
        resolves: any[];
        /**
         * Return a copy of the queue
         * @returns {PrepareQueueItem[]} The queue
         */
        getQueue(): PrepareQueueItem[];
        /**
         * Add a textures or graphics resource to the queue
         * @param {PrepareSourceItem | PrepareSourceItem[]} resource
         */
        add(resource: PrepareSourceItem | PrepareSourceItem[]): any;
        /**
         * Recursively add a container and its children to the queue
         * @param {Container} container - The container to add to the queue
         */
        _addContainer(container: Container): void;
        /**
         * Upload all the textures and graphics to the GPU (optionally add more resources to the queue first)
         * @param {PrepareSourceItem | PrepareSourceItem[] | undefined} resource
         */
        upload(resource: PrepareSourceItem | PrepareSourceItem[] | undefined): Promise<any>;
        /** eliminate duplicates before processing */
        dedupeQueue(): void;
        /** Call all the resolve callbacks */
        _resolve(): void;
    };
    /** The number of uploads to process per frame */
    uploadsPerFrame: number;
};
declare const PrepareQueue_base: {
    new (renderer: Renderer): {
        /** called per frame by the ticker, defer processing to next tick */
        _tick: () => void;
        timeout: NodeJS.Timeout;
        /** process the queue up to max item limit per frame */
        _processQueue: () => void;
        renderer: Renderer;
        queue: any[];
        resolves: any[];
        /**
         * Return a copy of the queue
         * @returns {PrepareQueueItem[]} The queue
         */
        getQueue(): PrepareQueueItem[];
        /**
         * Add a textures or graphics resource to the queue
         * @param {PrepareSourceItem | PrepareSourceItem[]} resource
         */
        add(resource: PrepareSourceItem | PrepareSourceItem[]): any;
        /**
         * Recursively add a container and its children to the queue
         * @param {Container} container - The container to add to the queue
         */
        _addContainer(container: Container): void;
        /**
         * Upload all the textures and graphics to the GPU (optionally add more resources to the queue first)
         * @param {PrepareSourceItem | PrepareSourceItem[] | undefined} resource
         */
        upload(resource: PrepareSourceItem | PrepareSourceItem[] | undefined): Promise<any>;
        /** eliminate duplicates before processing */
        dedupeQueue(): void;
        /** Call all the resolve callbacks */
        _resolve(): void;
    };
    /** The number of uploads to process per frame */
    uploadsPerFrame: number;
};
export class PrepareQueue extends PrepareQueue_base {
    /**
     * Resolve the given resource type and return an item for the queue
     * @param source
     * @param queue
     */
    resolveQueueItem(source: any, queue: any): any;
    /**
     * Resolve the given container and return an item for the queue
     * @param container
     * @param queue
     */
    resolveContainerQueueItem(container: any, queue: any): void;
    /**
     * Resolve the given graphics context and return an item for the queue
     * @param graphicsContext
     */
    resolveGraphicsContextQueueItem(graphicsContext: any): any;
}
export class PrepareSystem extends PrepareUpload {
    /** Destroys the plugin, don't use after this. */
    destroy(): void;
}
export namespace PrepareSystem {
    export namespace extension_55 {
        let type_49: any[];
        export { type_49 as type };
        let name_49: string;
        export { name_49 as name };
    }
    export { extension_55 as extension };
}
export class PrepareUpload extends PrepareQueue {
    /**
     * Upload the given queue item
     * @param item
     */
    uploadQueueItem(item: any): void;
    uploadTextureSource(textureSource: any): void;
    uploadText(_text: any): void;
    uploadBitmapText(_text: any): void;
    uploadHTMLText(_text: any): void;
    /**
     * Resolve the given graphics context and return an item for the queue
     * @param graphicsContext
     */
    uploadGraphicsContext(graphicsContext: any): any;
}
declare const QuadGeometry_base: {
    new (...args: any[]): {
        [x: string]: any;
        batchMode: string;
        /** The positions of the mesh. */
        positions: any;
        /** The UVs of the mesh. */
        uvs: any;
        /** The indices of the mesh. */
        indices: any;
        /** The unique id of the geometry. */
        uid: number;
        /**
         * the layout key will be generated by WebGPU all geometries that have the same structure
         * will have the same layout key. This is used to cache the pipeline layout
         * @internal
         * @ignore
         */
        _layoutKey: number;
        /** the instance count of the geometry to draw */
        instanceCount: any;
        _bounds: Bounds;
        _boundsDirty: boolean;
        attributes: any;
        buffers: any[];
        indexBuffer: any;
        topology: any;
        onBufferUpdate(): void;
        /**
         * Returns the requested attribute.
         * @param id - The name of the attribute required
         * @returns - The attribute requested.
         */
        getAttribute(id: any): any;
        /**
         * Returns the index buffer
         * @returns - The index buffer.
         */
        getIndex(): any;
        /**
         * Returns the requested buffer.
         * @param id - The name of the buffer required.
         * @returns - The buffer requested.
         */
        getBuffer(id: any): any;
        /**
         * Used to figure out how many vertices there are in this geometry
         * @returns the number of vertices in the geometry
         */
        getSize(): number;
        /** Returns the bounds of the geometry. */
        readonly bounds: any;
        /**
         * destroys the geometry.
         * @param destroyBuffers - destroy the buffers associated with this geometry
         */
        destroy(destroyBuffers?: boolean): void;
    };
    defaultOptions: {
        topology: string;
        shrinkBuffersToFit: boolean;
    };
};
export class QuadGeometry extends QuadGeometry_base {
    constructor();
}
export const RAD_TO_DEG: number;
export class Rectangle {
    /** A constant empty rectangle. This is a new object every time the property is accessed */
    static get EMPTY(): Rectangle;
    /**
     * @param x - The X coordinate of the upper-left corner of the rectangle
     * @param y - The Y coordinate of the upper-left corner of the rectangle
     * @param width - The overall width of the rectangle
     * @param height - The overall height of the rectangle
     */
    constructor(x?: number, y?: number, width?: number, height?: number);
    /**
     * The type of the object, mainly used to avoid `instanceof` checks
     * @default 'rectangle'
     */
    type: string;
    x: number;
    y: number;
    width: number;
    height: number;
    /** Returns the left edge of the rectangle. */
    get left(): number;
    /** Returns the right edge of the rectangle. */
    get right(): number;
    /** Returns the top edge of the rectangle. */
    get top(): number;
    /** Returns the bottom edge of the rectangle. */
    get bottom(): number;
    /** Determines whether the Rectangle is empty. */
    isEmpty(): boolean;
    /**
     * Creates a clone of this Rectangle
     * @returns a copy of the rectangle
     */
    clone(): Rectangle;
    /**
     * Converts a Bounds object to a Rectangle object.
     * @param bounds - The bounds to copy and convert to a rectangle.
     * @returns Returns itself.
     */
    copyFromBounds(bounds: any): this;
    /**
     * Copies another rectangle to this one.
     * @param rectangle - The rectangle to copy from.
     * @returns Returns itself.
     */
    copyFrom(rectangle: any): this;
    /**
     * Copies this rectangle to another one.
     * @param rectangle - The rectangle to copy to.
     * @returns Returns given parameter.
     */
    copyTo(rectangle: any): any;
    /**
     * Checks whether the x and y coordinates given are contained within this Rectangle
     * @param x - The X coordinate of the point to test
     * @param y - The Y coordinate of the point to test
     * @returns Whether the x/y coordinates are within this Rectangle
     */
    contains(x: any, y: any): boolean;
    /**
     * Checks whether the x and y coordinates given are contained within this rectangle including the stroke.
     * @param x - The X coordinate of the point to test
     * @param y - The Y coordinate of the point to test
     * @param strokeWidth - The width of the line to check
     * @returns Whether the x/y coordinates are within this rectangle
     */
    strokeContains(x: any, y: any, strokeWidth: any): boolean;
    /**
     * Determines whether the `other` Rectangle transformed by `transform` intersects with `this` Rectangle object.
     * Returns true only if the area of the intersection is >0, this means that Rectangles
     * sharing a side are not overlapping. Another side effect is that an arealess rectangle
     * (width or height equal to zero) can't intersect any other rectangle.
     * @param {Rectangle} other - The Rectangle to intersect with `this`.
     * @param {Matrix} transform - The transformation matrix of `other`.
     * @returns {boolean} A value of `true` if the transformed `other` Rectangle intersects with `this`; otherwise `false`.
     */
    intersects(other: Rectangle, transform: Matrix): boolean;
    /**
     * Pads the rectangle making it grow in all directions.
     * If paddingY is omitted, both paddingX and paddingY will be set to paddingX.
     * @param paddingX - The horizontal padding amount.
     * @param paddingY - The vertical padding amount.
     * @returns Returns itself.
     */
    pad(paddingX?: number, paddingY?: number): this;
    /**
     * Fits this rectangle around the passed one.
     * @param rectangle - The rectangle to fit.
     * @returns Returns itself.
     */
    fit(rectangle: any): this;
    /**
     * Enlarges rectangle that way its corners lie on grid
     * @param resolution - resolution
     * @param eps - precision
     * @returns Returns itself.
     */
    ceil(resolution?: number, eps?: number): this;
    /**
     * Enlarges this rectangle to include the passed rectangle.
     * @param rectangle - The rectangle to include.
     * @returns Returns itself.
     */
    enlarge(rectangle: any): this;
    /**
     * Returns the framing rectangle of the rectangle as a Rectangle object
     * @param out - optional rectangle to store the result
     * @returns The framing rectangle
     */
    getBounds(out: any): any;
    toString(): string;
}
export class RenderContainer extends Container {
    /**
     * @param options - The options for the container.
     */
    constructor(options: any);
    batched: boolean;
    /**
     * The local bounds of the sprite.
     * @type {rendering.Bounds}
     */
    bounds: rendering.Bounds;
    canBundle: boolean;
    renderPipeId: string;
    /**
     * An overridable function that can be used to render the object using the current renderer.
     * @param _renderer - The current renderer
     */
    render(_renderer: any): void;
    containsPoint: any;
    addBounds: any;
}
export class RenderGroup {
    renderPipeId: string;
    root: any;
    canBundle: boolean;
    renderGroupParent: any;
    renderGroupChildren: any[];
    worldTransform: Matrix;
    worldColorAlpha: number;
    worldColor: number;
    worldAlpha: number;
    childrenToUpdate: any;
    updateTick: number;
    childrenRenderablesToUpdate: {
        list: any[];
        index: number;
    };
    structureDidChange: boolean;
    instructionSet: InstructionSet;
    _onRenderContainers: any[];
    init(root: any): void;
    reset(): void;
    get localTransform(): any;
    addRenderGroupChild(renderGroupChild: any): void;
    _removeRenderGroupChild(renderGroupChild: any): void;
    addChild(child: any): void;
    removeChild(child: any): void;
    removeChildren(children: any): void;
    onChildUpdate(child: any): void;
    updateRenderable(container: any): void;
    onChildViewUpdate(child: any): void;
    get isRenderable(): boolean;
    /**
     * adding a container to the onRender list will make sure the user function
     * passed in to the user defined 'onRender` callBack
     * @param container - the container to add to the onRender list
     */
    addOnRender(container: any): void;
    removeOnRender(container: any): void;
    runOnRender(): void;
    destroy(): void;
    getChildren(out?: any[]): any[];
    _getChildren(container: any, out?: any[]): any[];
}
export class RenderGroupPipe {
    constructor(renderer: any);
    _renderer: any;
    addRenderGroup(renderGroup: any, instructionSet: any): void;
    execute(renderGroup: any): void;
    destroy(): void;
}
export namespace RenderGroupPipe {
    export namespace extension_56 {
        let type_50: any[];
        export { type_50 as type };
        let name_50: string;
        export { name_50 as name };
    }
    export { extension_56 as extension };
}
export class RenderGroupSystem {
    constructor(renderer: any);
    _renderer: any;
    render({ container, transform }: {
        container: any;
        transform: any;
    }): void;
    destroy(): void;
}
export namespace RenderGroupSystem {
    export namespace extension_57 {
        let type_51: any[];
        export { type_51 as type };
        let name_51: string;
        export { name_51 as name };
    }
    export { extension_57 as extension };
}
export let RenderTarget: {
    new (descriptor?: {}): {
        /** unique id for this render target */
        uid: number;
        /**
         * An array of textures that can be written to by the GPU - mostly this has one texture in Pixi, but you could
         * write to multiple if required! (eg deferred lighting)
         */
        colorTextures: any[];
        dirtyId: number;
        isRoot: any;
        _size: Float32Array;
        /** if true, then when the render target is destroyed, it will destroy all the textures that were created for it. */
        _managedColorTextures: boolean;
        stencil: any;
        depth: any;
        depthStencilTexture: any;
        readonly size: Float32Array;
        readonly width: any;
        readonly height: any;
        readonly pixelWidth: any;
        readonly pixelHeight: any;
        readonly resolution: any;
        readonly colorTexture: any;
        onSourceResize(source: any): void;
        /**
         * This will ensure a depthStencil texture is created for this render target.
         * Most likely called by the mask system to make sure we have stencil buffer added.
         * @internal
         * @ignore
         */
        ensureDepthStencilTexture(): void;
        resize(width: any, height: any, resolution?: any, skipColorTexture?: boolean): void;
        destroy(): void;
    };
    /** The default options for a render target */
    defaultOptions: {
        /** the width of the RenderTarget */
        width: number;
        /** the height of the RenderTarget */
        height: number;
        /** the resolution of the RenderTarget */
        resolution: number;
        /** an array of textures, or a number indicating how many color textures there should be */
        colorTextures: number;
        /** should this render target have a stencil buffer? */
        stencil: boolean;
        /** should this render target have a depth buffer? */
        depth: boolean;
        /** should this render target be antialiased? */
        antialias: boolean;
        /** is this a root element, true if this is gl context owners render target */
        isRoot: boolean;
    };
};
export class RenderTargetSystem {
    constructor(renderer: any);
    /** This is the root viewport for the render pass*/
    rootViewPort: Rectangle;
    /** the current viewport that the gpu is using */
    viewport: Rectangle;
    /**
     * a runner that lets systems know if the active render target has changed.
     * Eg the Stencil System needs to know so it can manage the stencil buffer
     */
    onRenderTargetChange: SystemRunner;
    /** the projection matrix that is used by the shaders based on the active render target and the viewport */
    projectionMatrix: Matrix;
    /** the default clear color for render targets */
    defaultClearColor: number[];
    /**
     * a hash that stores the render target for a given render surface. When you pass in a texture source,
     * a render target is created for it. This map stores and makes it easy to retrieve the render target
     */
    _renderSurfaceToRenderTargetHash: Map<any, any>;
    /** A hash that stores a gpu render target for a given render target. */
    _gpuRenderTargetHash: any;
    /**
     * A stack that stores the render target and frame that is currently being rendered to.
     * When push is called, the current render target is stored in this stack.
     * When pop is called, the previous render target is restored.
     */
    _renderTargetStack: any[];
    _renderer: any;
    /** called when dev wants to finish a render pass */
    finishRenderPass(): void;
    /**
     * called when the renderer starts to render a scene.
     * @param options
     * @param options.target - the render target to render to
     * @param options.clear - the clear mode to use. Can be true or a CLEAR number 'COLOR | DEPTH | STENCIL' 0b111
     * @param options.clearColor - the color to clear to
     * @param options.frame - the frame to render to
     */
    renderStart({ target, clear, clearColor, frame }: {
        target: any;
        clear: any;
        clearColor: any;
        frame: any;
    }): void;
    rootRenderTarget: any;
    renderingToScreen: boolean;
    /**
     * Binding a render surface! This is the main function of the render target system.
     * It will take the RenderSurface (which can be a texture, canvas, or render target) and bind it to the renderer.
     * Once bound all draw calls will be rendered to the render surface.
     *
     * If a frame is not provide and the render surface is a texture, the frame of the texture will be used.
     * @param renderSurface - the render surface to bind
     * @param clear - the clear mode to use. Can be true or a CLEAR number 'COLOR | DEPTH | STENCIL' 0b111
     * @param clearColor - the color to clear to
     * @param frame - the frame to render to
     * @returns the render target that was bound
     */
    bind(renderSurface: any, clear: boolean, clearColor: any, frame: any): any;
    renderTarget: any;
    renderSurface: any;
    clear(target: any, clear: any, clearColor: any): void;
    contextChange(): void;
    /**
     * Push a render surface to the renderer. This will bind the render surface to the renderer,
     * @param renderSurface - the render surface to push
     * @param clear - the clear mode to use. Can be true or a CLEAR number 'COLOR | DEPTH | STENCIL' 0b111
     * @param clearColor - the color to clear to
     * @param frame - the frame to use when rendering to the render surface
     */
    push(renderSurface: any, clear: any, clearColor: any, frame: any): any;
    /** Pops the current render target from the renderer and restores the previous render target. */
    pop(): void;
    /**
     * Gets the render target from the provide render surface. Eg if its a texture,
     * it will return the render target for the texture.
     * If its a render target, it will return the same render target.
     * @param renderSurface - the render surface to get the render target for
     * @returns the render target for the render surface
     */
    getRenderTarget(renderSurface: any): any;
    /**
     * Copies a render surface to another texture
     * @param sourceRenderSurfaceTexture - the render surface to copy from
     * @param destinationTexture - the texture to copy to
     * @param originSrc - the origin of the copy
     * @param originSrc.x - the x origin of the copy
     * @param originSrc.y - the y origin of the copy
     * @param size - the size of the copy
     * @param size.width - the width of the copy
     * @param size.height - the height of the copy
     * @param originDest - the destination origin (top left to paste from!)
     * @param originDest.x - the x origin of the paste
     * @param originDest.y - the y origin of the paste
     */
    copyToTexture(sourceRenderSurfaceTexture: any, destinationTexture: any, originSrc: any, size: any, originDest: any): any;
    /**
     * ensures that we have a depth stencil buffer available to render to
     * This is used by the mask system to make sure we have a stencil buffer.
     */
    ensureDepthStencil(): void;
    /** nukes the render target system */
    destroy(): void;
    _initRenderTarget(renderSurface: any): {
        /** unique id for this render target */
        uid: number;
        /**
         * An array of textures that can be written to by the GPU - mostly this has one texture in Pixi, but you could
         * write to multiple if required! (eg deferred lighting)
         */
        colorTextures: any[];
        dirtyId: number;
        isRoot: any;
        _size: Float32Array;
        /** if true, then when the render target is destroyed, it will destroy all the textures that were created for it. */
        _managedColorTextures: boolean;
        stencil: any;
        depth: any;
        depthStencilTexture: any;
        readonly size: Float32Array;
        readonly width: any;
        readonly height: any;
        readonly pixelWidth: any;
        readonly pixelHeight: any;
        readonly resolution: any;
        readonly colorTexture: any;
        onSourceResize(source: any): void;
        /**
         * This will ensure a depthStencil texture is created for this render target.
         * Most likely called by the mask system to make sure we have stencil buffer added.
         * @internal
         * @ignore
         */
        ensureDepthStencilTexture(): void;
        resize(width: any, height: any, resolution?: any, skipColorTexture?: boolean): void;
        destroy(): void;
    };
    getGpuRenderTarget(renderTarget: any): any;
}
export class RenderTexture extends Texture {
    static create(options: any): Texture;
    /**
     * Resizes the render texture.
     * @param width - The new width of the render texture.
     * @param height - The new height of the render texture.
     * @param resolution - The new resolution of the render texture.
     * @returns This texture.
     */
    resize(width: any, height: any, resolution: any): this;
}
export class RendererInitHook {
    constructor(renderer: any);
    _renderer: any;
    init(): void;
    destroy(): void;
}
export namespace RendererInitHook {
    export namespace extension_58 {
        let type_52: any[];
        export { type_52 as type };
        let name_52: string;
        export { name_52 as name };
        let priority_3: number;
        export { priority_3 as priority };
    }
    export { extension_58 as extension };
}
export var RendererType: any;
export class ResizePlugin {
    /**
     * Initialize the plugin with scope of application instance
     * @static
     * @private
     * @param {object} [options] - See application options
     */
    private static init;
    /**
     * Clean up the ticker, scoped to application
     * @static
     * @private
     */
    private static destroy;
}
export namespace ResizePlugin {
    export function queueResize(): void;
    export let _resizeId: number;
    export function _cancelResize(): void;
    export function resize(): void;
    export let _resizeTo: any;
    export let resizeTo: any;
    let extension_59: any;
    export { extension_59 as extension };
}
export class Resolver {
    _defaultBundleIdentifierOptions: {
        connector: string;
        createBundleAssetId: (bundleId: any, assetId: any) => string;
        extractAssetIdFromBundle: (bundleId: any, assetBundleId: any) => any;
    };
    /** The character that is used to connect the bundleId and the assetId when generating a bundle asset id key */
    _bundleIdConnector: string;
    /**
     * A function that generates a bundle asset id key from a bundleId and an assetId
     * @param bundleId - the bundleId
     * @param assetId  - the assetId
     * @returns the bundle asset id key
     */
    _createBundleAssetId: (bundleId: any, assetId: any) => string;
    /**
     * A function that generates an assetId from a bundle asset id key. This is the reverse of generateBundleAssetId
     * @param bundleId - the bundleId
     * @param assetBundleId - the bundle asset id key
     * @returns the assetId
     */
    _extractAssetIdFromBundle: (bundleId: any, assetBundleId: any) => any;
    _assetMap: {};
    _preferredOrder: any[];
    _parsers: any[];
    _resolverHash: {};
    _bundles: {};
    /**
     * Override how the resolver deals with generating bundle ids.
     * must be called before any bundles are added
     * @param bundleIdentifier - the bundle identifier options
     */
    setBundleIdentifier(bundleIdentifier: any): void;
    /**
     * Let the resolver know which assets you prefer to use when resolving assets.
     * Multiple prefer user defined rules can be added.
     * @example
     * resolver.prefer({
     *     // first look for something with the correct format, and then then correct resolution
     *     priority: ['format', 'resolution'],
     *     params:{
     *         format:'webp', // prefer webp images
     *         resolution: 2, // prefer a resolution of 2
     *     }
     * })
     * resolver.add('foo', ['bar@2x.webp', 'bar@2x.png', 'bar.webp', 'bar.png']);
     * resolver.resolveUrl('foo') // => 'bar@2x.webp'
     * @param preferOrders - the prefer options
     */
    prefer(...preferOrders: any[]): void;
    /**
     * Set the base path to prepend to all urls when resolving
     * @example
     * resolver.basePath = 'https://home.com/';
     * resolver.add('foo', 'bar.ong');
     * resolver.resolveUrl('foo', 'bar.png'); // => 'https://home.com/bar.png'
     * @param basePath - the base path to use
     */
    set basePath(basePath: any);
    get basePath(): any;
    _basePath: any;
    /**
     * Set the root path for root-relative URLs. By default the `basePath`'s root is used. If no `basePath` is set, then the
     * default value for browsers is `window.location.origin`
     * @example
     * // Application hosted on https://home.com/some-path/index.html
     * resolver.basePath = 'https://home.com/some-path/';
     * resolver.rootPath = 'https://home.com/';
     * resolver.add('foo', '/bar.png');
     * resolver.resolveUrl('foo', '/bar.png'); // => 'https://home.com/bar.png'
     * @param rootPath - the root path to use
     */
    set rootPath(rootPath: any);
    get rootPath(): any;
    _rootPath: any;
    /**
     * All the active URL parsers that help the parser to extract information and create
     * an asset object-based on parsing the URL itself.
     *
     * Can be added using the extensions API
     * @example
     * resolver.add('foo', [
     *     {
     *         resolution: 2,
     *         format: 'png',
     *         src: 'image@2x.png',
     *     },
     *     {
     *         resolution:1,
     *         format:'png',
     *         src: 'image.png',
     *     },
     * ]);
     *
     * // With a url parser the information such as resolution and file format could extracted from the url itself:
     * extensions.add({
     *     extension: ExtensionType.ResolveParser,
     *     test: loadTextures.test, // test if url ends in an image
     *     parse: (value: string) =>
     *     ({
     *         resolution: parseFloat(Resolver.RETINA_PREFIX.exec(value)?.[1] ?? '1'),
     *         format: value.split('.').pop(),
     *         src: value,
     *     }),
     * });
     *
     * // Now resolution and format can be extracted from the url
     * resolver.add('foo', [
     *     'image@2x.png',
     *     'image.png',
     * ]);
     */
    get parsers(): any[];
    /** Used for testing, this resets the resolver to its initial state */
    reset(): void;
    _manifest: any;
    _defaultSearchParams: string;
    /**
     * Sets the default URL search parameters for the URL resolver. The urls can be specified as a string or an object.
     * @param searchParams - the default url parameters to append when resolving urls
     */
    setDefaultSearchParams(searchParams: any): void;
    /**
     * Returns the aliases for a given asset
     * @param asset - the asset to get the aliases for
     */
    getAlias(asset: any): any;
    /**
     * Add a manifest to the asset resolver. This is a nice way to add all the asset information in one go.
     * generally a manifest would be built using a tool.
     * @param manifest - the manifest to add to the resolver
     */
    addManifest(manifest: any): void;
    /**
     * This adds a bundle of assets in one go so that you can resolve them as a group.
     * For example you could add a bundle for each screen in you pixi app
     * @example
     * resolver.addBundle('animals', [
     *  { alias: 'bunny', src: 'bunny.png' },
     *  { alias: 'chicken', src: 'chicken.png' },
     *  { alias: 'thumper', src: 'thumper.png' },
     * ]);
     * // or
     * resolver.addBundle('animals', {
     *     bunny: 'bunny.png',
     *     chicken: 'chicken.png',
     *     thumper: 'thumper.png',
     * });
     *
     * const resolvedAssets = await resolver.resolveBundle('animals');
     * @param bundleId - The id of the bundle to add
     * @param assets - A record of the asset or assets that will be chosen from when loading via the specified key
     */
    addBundle(bundleId: any, assets: any): void;
    /**
     * Tells the resolver what keys are associated with witch asset.
     * The most important thing the resolver does
     * @example
     * // Single key, single asset:
     * resolver.add({alias: 'foo', src: 'bar.png');
     * resolver.resolveUrl('foo') // => 'bar.png'
     *
     * // Multiple keys, single asset:
     * resolver.add({alias: ['foo', 'boo'], src: 'bar.png'});
     * resolver.resolveUrl('foo') // => 'bar.png'
     * resolver.resolveUrl('boo') // => 'bar.png'
     *
     * // Multiple keys, multiple assets:
     * resolver.add({alias: ['foo', 'boo'], src: ['bar.png', 'bar.webp']});
     * resolver.resolveUrl('foo') // => 'bar.png'
     *
     * // Add custom data attached to the resolver
     * Resolver.add({
     *     alias: 'bunnyBooBooSmooth',
     *     src: 'bunny{png,webp}',
     *     data: { scaleMode:SCALE_MODES.NEAREST }, // Base texture options
     * });
     *
     * resolver.resolve('bunnyBooBooSmooth') // => { src: 'bunny.png', data: { scaleMode: SCALE_MODES.NEAREST } }
     * @param aliases - the UnresolvedAsset or array of UnresolvedAssets to add to the resolver
     */
    add(aliases: any): void;
    /**
     * If the resolver has had a manifest set via setManifest, this will return the assets urls for
     * a given bundleId or bundleIds.
     * @example
     * // Manifest Example
     * const manifest = {
     *     bundles: [
     *         {
     *             name: 'load-screen',
     *             assets: [
     *                 {
     *                     alias: 'background',
     *                     src: 'sunset.png',
     *                 },
     *                 {
     *                     alias: 'bar',
     *                     src: 'load-bar.{png,webp}',
     *                 },
     *             ],
     *         },
     *         {
     *             name: 'game-screen',
     *             assets: [
     *                 {
     *                     alias: 'character',
     *                     src: 'robot.png',
     *                 },
     *                 {
     *                     alias: 'enemy',
     *                     src: 'bad-guy.png',
     *                 },
     *             ],
     *         },
     *     ]
     * };
     *
     * resolver.setManifest(manifest);
     * const resolved = resolver.resolveBundle('load-screen');
     * @param bundleIds - The bundle ids to resolve
     * @returns All the bundles assets or a hash of assets for each bundle specified
     */
    resolveBundle(bundleIds: any): any;
    /**
     * Does exactly what resolve does, but returns just the URL rather than the whole asset object
     * @param key - The key or keys to resolve
     * @returns - The URLs associated with the key(s)
     */
    resolveUrl(key: any): any;
    resolve(keys: any): any;
    /**
     * Checks if an asset with a given key exists in the resolver
     * @param key - The key of the asset
     */
    hasKey(key: any): boolean;
    /**
     * Checks if a bundle with the given key exists in the resolver
     * @param key - The key of the bundle
     */
    hasBundle(key: any): boolean;
    /**
     * Internal function for figuring out what prefer criteria an asset should use.
     * @param assets
     */
    _getPreferredOrder(assets: any): any;
    /**
     * Appends the default url parameters to the url
     * @param url - The url to append the default parameters to
     * @returns - The url with the default parameters appended
     */
    _appendDefaultSearchParams(url: any): any;
    _buildResolvedAsset(formattedAsset: any, data: any): any;
}
export namespace Resolver {
    let RETINA_PREFIX: RegExp;
}
export let RopeGeometry: {
    new (options: any): {
        [x: string]: any;
        points: any;
        _width: any;
        textureScale: any;
        /**
         * The width (i.e., thickness) of the rope.
         * @readonly
         */
        readonly width: any;
        /** Refreshes Rope indices and uvs */
        _build(): void;
        /** refreshes vertices of Rope mesh */
        updateVertices(): void;
        /** Refreshes Rope indices and uvs */
        update(): void;
        batchMode: string;
        /** The positions of the mesh. */
        positions: any;
        /** The UVs of the mesh. */
        uvs: any;
        /** The indices of the mesh. */
        indices: any;
        /** The unique id of the geometry. */
        uid: number;
        /**
         * the layout key will be generated by WebGPU all geometries that have the same structure
         * will have the same layout key. This is used to cache the pipeline layout
         * @internal
         * @ignore
         */
        _layoutKey: number;
        /** the instance count of the geometry to draw */
        instanceCount: any;
        _bounds: Bounds;
        _boundsDirty: boolean;
        attributes: any;
        buffers: any[];
        indexBuffer: any;
        topology: any;
        onBufferUpdate(): void;
        /**
         * Returns the requested attribute.
         * @param id - The name of the attribute required
         * @returns - The attribute requested.
         */
        getAttribute(id: any): any;
        /**
         * Returns the index buffer
         * @returns - The index buffer.
         */
        getIndex(): any;
        /**
         * Returns the requested buffer.
         * @param id - The name of the buffer required.
         * @returns - The buffer requested.
         */
        getBuffer(id: any): any;
        /**
         * Used to figure out how many vertices there are in this geometry
         * @returns the number of vertices in the geometry
         */
        getSize(): number;
        /** Returns the bounds of the geometry. */
        readonly bounds: any;
        /**
         * destroys the geometry.
         * @param destroyBuffers - destroy the buffers associated with this geometry
         */
        destroy(destroyBuffers?: boolean): void;
    };
    /** Default options for RopeGeometry constructor. */
    defaultOptions: {
        /** The width (i.e., thickness) of the rope. */
        width: number;
        /** An array of points that determine the rope. */
        points: any[];
        /** Rope texture scale, if zero then the rope texture is stretched. */
        textureScale: number;
    };
};
export class RoundedRectangle {
    /**
     * @param x - The X coordinate of the upper-left corner of the rounded rectangle
     * @param y - The Y coordinate of the upper-left corner of the rounded rectangle
     * @param width - The overall width of this rounded rectangle
     * @param height - The overall height of this rounded rectangle
     * @param radius - Controls the radius of the rounded corners
     */
    constructor(x?: number, y?: number, width?: number, height?: number, radius?: number);
    /**
     * The type of the object, mainly used to avoid `instanceof` checks
     * @default 'roundedRectangle'
     */
    type: string;
    x: number;
    y: number;
    width: number;
    height: number;
    radius: number;
    /**
     * Returns the framing rectangle of the rounded rectangle as a Rectangle object
     * @param out - optional rectangle to store the result
     * @returns The framing rectangle
     */
    getBounds(out: any): any;
    /**
     * Creates a clone of this Rounded Rectangle.
     * @returns - A copy of the rounded rectangle.
     */
    clone(): RoundedRectangle;
    /**
     * Copies another rectangle to this one.
     * @param rectangle - The rectangle to copy from.
     * @returns Returns itself.
     */
    copyFrom(rectangle: any): this;
    /**
     * Copies this rectangle to another one.
     * @param rectangle - The rectangle to copy to.
     * @returns Returns given parameter.
     */
    copyTo(rectangle: any): any;
    /**
     * Checks whether the x and y coordinates given are contained within this Rounded Rectangle
     * @param x - The X coordinate of the point to test.
     * @param y - The Y coordinate of the point to test.
     * @returns - Whether the x/y coordinates are within this Rounded Rectangle.
     */
    contains(x: any, y: any): boolean;
    /**
     * Checks whether the x and y coordinates given are contained within this rectangle including the stroke.
     * @param pX - The X coordinate of the point to test
     * @param pY - The Y coordinate of the point to test
     * @param strokeWidth - The width of the line to check
     * @returns Whether the x/y coordinates are within this rectangle
     */
    strokeContains(pX: any, pY: any, strokeWidth: any): boolean;
    toString(): string;
}
export const SCALE_MODES: any;
export var STENCIL_MODES: any;
export function SVGParser(svg: any, graphicsContext: any): any;
export function SVGToGraphicsPath(svgPath: any, path: any): any;
export class ScissorMask {
    constructor(mask: any);
    priority: number;
    pipe: string;
    mask: any;
    addBounds(bounds: any, skipUpdateTransform: any): void;
    addLocalBounds(bounds: any, localRoot: any): void;
    containsPoint(point: any, hitTestFn: any): any;
    reset(): void;
    destroy(): void;
}
export class SdfShader extends Shader {
    constructor();
}
declare const Shader_base: any;
export class Shader extends Shader_base {
    [x: string]: any;
    static from(options: any): Shader;
    constructor(options: any);
    /**
     * A record of the uniform groups and resources used by the shader.
     * This is used by WebGL renderer to sync uniform data.
     * @internal
     * @ignore
     */
    _uniformBindMap: any;
    _ownedBindGroups: any[];
    gpuProgram: any;
    glProgram: any;
    compatibleRenderers: any;
    groups: any;
    resources: {};
    /**
     * Sometimes a resource group will be provided later (for example global uniforms)
     * In such cases, this method can be used to let the shader know about the group.
     * @param name - the name of the resource group
     * @param groupIndex - the index of the group (should match the webGPU shader group location)
     * @param bindIndex - the index of the bind point (should match the webGPU shader bind point)
     */
    addResource(name: any, groupIndex: any, bindIndex: any): void;
    _buildResourceAccessor(groups: any, nameHash: any): {};
    /**
     * Use to destroy the shader when its not longer needed.
     * It will destroy the resources and remove listeners.
     * @param destroyPrograms - if the programs should be destroyed as well.
     * Make sure its not being used by other shaders!
     */
    destroy(destroyPrograms?: boolean): void;
}
export var ShaderStage: any;
export class ShapePath {
    constructor(graphicsPath2D: any);
    /** The list of shape primitives that make up the path. */
    shapePrimitives: any[];
    _currentPoly: any;
    _bounds: Bounds;
    _graphicsPath2D: any;
    /**
     * Sets the starting point for a new sub-path. Any subsequent drawing commands are considered part of this path.
     * @param x - The x-coordinate for the starting point.
     * @param y - The y-coordinate for the starting point.
     * @returns The instance of the current object for chaining.
     */
    moveTo(x: any, y: any): this;
    /**
     * Connects the current point to a new point with a straight line. This method updates the current path.
     * @param x - The x-coordinate of the new point to connect to.
     * @param y - The y-coordinate of the new point to connect to.
     * @returns The instance of the current object for chaining.
     */
    lineTo(x: any, y: any): this;
    /**
     * Adds an arc to the path. The arc is centered at (x, y)
     *  position with radius `radius` starting at `startAngle` and ending at `endAngle`.
     * @param x - The x-coordinate of the arc's center.
     * @param y - The y-coordinate of the arc's center.
     * @param radius - The radius of the arc.
     * @param startAngle - The starting angle of the arc, in radians.
     * @param endAngle - The ending angle of the arc, in radians.
     * @param counterclockwise - Specifies whether the arc should be drawn in the anticlockwise direction. False by default.
     * @returns The instance of the current object for chaining.
     */
    arc(x: any, y: any, radius: any, startAngle: any, endAngle: any, counterclockwise: any): this;
    /**
     * Adds an arc to the path with the arc tangent to the line joining two specified points.
     * The arc radius is specified by `radius`.
     * @param x1 - The x-coordinate of the first point.
     * @param y1 - The y-coordinate of the first point.
     * @param x2 - The x-coordinate of the second point.
     * @param y2 - The y-coordinate of the second point.
     * @param radius - The radius of the arc.
     * @returns The instance of the current object for chaining.
     */
    arcTo(x1: any, y1: any, x2: any, y2: any, radius: any): this;
    /**
     * Adds an SVG-style arc to the path, allowing for elliptical arcs based on the SVG spec.
     * @param rx - The x-radius of the ellipse.
     * @param ry - The y-radius of the ellipse.
     * @param xAxisRotation - The rotation of the ellipse's x-axis relative
     * to the x-axis of the coordinate system, in degrees.
     * @param largeArcFlag - Determines if the arc should be greater than or less than 180 degrees.
     * @param sweepFlag - Determines if the arc should be swept in a positive angle direction.
     * @param x - The x-coordinate of the arc's end point.
     * @param y - The y-coordinate of the arc's end point.
     * @returns The instance of the current object for chaining.
     */
    arcToSvg(rx: any, ry: any, xAxisRotation: any, largeArcFlag: any, sweepFlag: any, x: any, y: any): this;
    /**
     * Adds a cubic Bezier curve to the path.
     * It requires three points: the first two are control points and the third one is the end point.
     * The starting point is the last point in the current path.
     * @param cp1x - The x-coordinate of the first control point.
     * @param cp1y - The y-coordinate of the first control point.
     * @param cp2x - The x-coordinate of the second control point.
     * @param cp2y - The y-coordinate of the second control point.
     * @param x - The x-coordinate of the end point.
     * @param y - The y-coordinate of the end point.
     * @param smoothness - Optional parameter to adjust the smoothness of the curve.
     * @returns The instance of the current object for chaining.
     */
    bezierCurveTo(cp1x: any, cp1y: any, cp2x: any, cp2y: any, x: any, y: any, smoothness: any): this;
    /**
     * Adds a quadratic curve to the path. It requires two points: the control point and the end point.
     * The starting point is the last point in the current path.
     * @param cp1x - The x-coordinate of the control point.
     * @param cp1y - The y-coordinate of the control point.
     * @param x - The x-coordinate of the end point.
     * @param y - The y-coordinate of the end point.
     * @param smoothing - Optional parameter to adjust the smoothness of the curve.
     * @returns The instance of the current object for chaining.
     */
    quadraticCurveTo(cp1x: any, cp1y: any, x: any, y: any, smoothing: any): this;
    /**
     * Closes the current path by drawing a straight line back to the start.
     * If the shape is already closed or there are no points in the path, this method does nothing.
     * @returns The instance of the current object for chaining.
     */
    closePath(): this;
    /**
     * Adds another path to the current path. This method allows for the combination of multiple paths into one.
     * @param path - The `GraphicsPath` object representing the path to add.
     * @param transform - An optional `Matrix` object to apply a transformation to the path before adding it.
     * @returns The instance of the current object for chaining.
     */
    addPath(path: any, transform: any): this;
    /**
     * Finalizes the drawing of the current path. Optionally, it can close the path.
     * @param closePath - A boolean indicating whether to close the path after finishing. False by default.
     */
    finish(closePath?: boolean): void;
    /**
     * Draws a rectangle shape. This method adds a new rectangle path to the current drawing.
     * @param x - The x-coordinate of the top-left corner of the rectangle.
     * @param y - The y-coordinate of the top-left corner of the rectangle.
     * @param w - The width of the rectangle.
     * @param h - The height of the rectangle.
     * @param transform - An optional `Matrix` object to apply a transformation to the rectangle.
     * @returns The instance of the current object for chaining.
     */
    rect(x: any, y: any, w: any, h: any, transform: any): this;
    /**
     * Draws a circle shape. This method adds a new circle path to the current drawing.
     * @param x - The x-coordinate of the center of the circle.
     * @param y - The y-coordinate of the center of the circle.
     * @param radius - The radius of the circle.
     * @param transform - An optional `Matrix` object to apply a transformation to the circle.
     * @returns The instance of the current object for chaining.
     */
    circle(x: any, y: any, radius: any, transform: any): this;
    /**
     * Draws a polygon shape. This method allows for the creation of complex polygons by specifying a sequence of points.
     * @param points - An array of numbers, or or an array of PointData objects eg [{x,y}, {x,y}, {x,y}]
     * representing the x and y coordinates of the polygon's vertices, in sequence.
     * @param close - A boolean indicating whether to close the polygon path. True by default.
     * @param transform - An optional `Matrix` object to apply a transformation to the polygon.
     * @returns The instance of the current object for chaining.
     */
    poly(points: any, close: any, transform: any): this;
    /**
     * Draws a regular polygon with a specified number of sides. All sides and angles are equal.
     * @param x - The x-coordinate of the center of the polygon.
     * @param y - The y-coordinate of the center of the polygon.
     * @param radius - The radius of the circumscribed circle of the polygon.
     * @param sides - The number of sides of the polygon. Must be 3 or more.
     * @param rotation - The rotation angle of the polygon, in radians. Zero by default.
     * @param transform - An optional `Matrix` object to apply a transformation to the polygon.
     * @returns The instance of the current object for chaining.
     */
    regularPoly(x: any, y: any, radius: any, sides: any, rotation: number, transform: any): this;
    /**
     * Draws a polygon with rounded corners.
     * Similar to `regularPoly` but with the ability to round the corners of the polygon.
     * @param x - The x-coordinate of the center of the polygon.
     * @param y - The y-coordinate of the center of the polygon.
     * @param radius - The radius of the circumscribed circle of the polygon.
     * @param sides - The number of sides of the polygon. Must be 3 or more.
     * @param corner - The radius of the rounding of the corners.
     * @param rotation - The rotation angle of the polygon, in radians. Zero by default.
     * @param smoothness - Optional parameter to adjust the smoothness of the rounding.
     * @returns The instance of the current object for chaining.
     */
    roundPoly(x: any, y: any, radius: any, sides: any, corner: any, rotation: number, smoothness: any): this;
    /**
     * Draws a shape with rounded corners. This function supports custom radius for each corner of the shape.
     * Optionally, corners can be rounded using a quadratic curve instead of an arc, providing a different aesthetic.
     * @param points - An array of `RoundedPoint` representing the corners of the shape to draw.
     * A minimum of 3 points is required.
     * @param radius - The default radius for the corners.
     * This radius is applied to all corners unless overridden in `points`.
     * @param useQuadratic - If set to true, rounded corners are drawn using a quadraticCurve
     *  method instead of an arc method. Defaults to false.
     * @param smoothness - Specifies the smoothness of the curve when `useQuadratic` is true.
     * Higher values make the curve smoother.
     * @returns The instance of the current object for chaining.
     */
    roundShape(points: any, radius: any, useQuadratic: boolean, smoothness: any): this;
    /**
     * Draw Rectangle with fillet corners. This is much like rounded rectangle
     * however it support negative numbers as well for the corner radius.
     * @param x - Upper left corner of rect
     * @param y - Upper right corner of rect
     * @param width - Width of rect
     * @param height - Height of rect
     * @param fillet - accept negative or positive values
     */
    filletRect(x: any, y: any, width: any, height: any, fillet: any): this;
    /**
     * Draw Rectangle with chamfer corners. These are angled corners.
     * @param x - Upper left corner of rect
     * @param y - Upper right corner of rect
     * @param width - Width of rect
     * @param height - Height of rect
     * @param chamfer - non-zero real number, size of corner cutout
     * @param transform
     */
    chamferRect(x: any, y: any, width: any, height: any, chamfer: any, transform: any): this;
    /**
     * Draws an ellipse at the specified location and with the given x and y radii.
     * An optional transformation can be applied, allowing for rotation, scaling, and translation.
     * @param x - The x-coordinate of the center of the ellipse.
     * @param y - The y-coordinate of the center of the ellipse.
     * @param radiusX - The horizontal radius of the ellipse.
     * @param radiusY - The vertical radius of the ellipse.
     * @param transform - An optional `Matrix` object to apply a transformation to the ellipse. This can include rotations.
     * @returns The instance of the current object for chaining.
     */
    ellipse(x: any, y: any, radiusX: any, radiusY: any, transform: any): this;
    /**
     * Draws a rectangle with rounded corners.
     * The corner radius can be specified to determine how rounded the corners should be.
     * An optional transformation can be applied, which allows for rotation, scaling, and translation of the rectangle.
     * @param x - The x-coordinate of the top-left corner of the rectangle.
     * @param y - The y-coordinate of the top-left corner of the rectangle.
     * @param w - The width of the rectangle.
     * @param h - The height of the rectangle.
     * @param radius - The radius of the rectangle's corners. If not specified, corners will be sharp.
     * @param transform - An optional `Matrix` object to apply a transformation to the rectangle.
     * @returns The instance of the current object for chaining.
     */
    roundRect(x: any, y: any, w: any, h: any, radius: any, transform: any): this;
    /**
     * Draws a given shape on the canvas.
     * This is a generic method that can draw any type of shape specified by the `ShapePrimitive` parameter.
     * An optional transformation matrix can be applied to the shape, allowing for complex transformations.
     * @param shape - The shape to draw, defined as a `ShapePrimitive` object.
     * @param matrix - An optional `Matrix` for transforming the shape. This can include rotations,
     * scaling, and translations.
     * @returns The instance of the current object for chaining.
     */
    drawShape(shape: any, matrix: any): this;
    /**
     * Starts a new polygon path from the specified starting point.
     * This method initializes a new polygon or ends the current one if it exists.
     * @param x - The x-coordinate of the starting point of the new polygon.
     * @param y - The y-coordinate of the starting point of the new polygon.
     * @returns The instance of the current object for chaining.
     */
    startPoly(x: any, y: any): this;
    /**
     * Ends the current polygon path. If `closePath` is set to true,
     * the path is closed by connecting the last point to the first one.
     * This method finalizes the current polygon and prepares it for drawing or adding to the shape primitives.
     * @param closePath - A boolean indicating whether to close the polygon by connecting the last point
     *  back to the starting point. False by default.
     * @returns The instance of the current object for chaining.
     */
    endPoly(closePath?: boolean): this;
    _ensurePoly(start?: boolean): void;
    /** Builds the path. */
    buildPath(): void;
    /** Gets the bounds of the path. */
    get bounds(): Bounds;
}
export const SharedRenderPipes: (typeof BatcherPipe | typeof AlphaMaskPipe | typeof ColorMaskPipe | typeof StencilMaskPipe | typeof CustomRenderPipe | typeof RenderGroupPipe | typeof SpritePipe | typeof BlendModePipe)[];
export const SharedSystems: (typeof RendererInitHook | typeof RenderGroupSystem | {
    new (): {
        clearBeforeRender: boolean;
        _backgroundColor: {
            _value: any;
            _components: Float32Array;
            _int: number;
            /**
             * The current color source.
             *
             * When setting:
             * - Setting to an instance of `Color` will copy its color source and components.
             * - Otherwise, `Color` will try to normalize the color source and set the components.
             *   If the color source is invalid, an `Error` will be thrown and the `Color` will left unchanged.
             *
             * Note: The `null` in the setter's parameter type is added to match the TypeScript rule: return type of getter
             * must be assignable to its setter's parameter type. Setting `value` to `null` will throw an `Error`.
             *
             * When getting:
             * - A return value of `null` means the previous value was overridden (e.g., {@link Color.multiply multiply},
             *   {@link Color.premultiply premultiply} or {@link Color.round round}).
             * - Otherwise, the color source used when setting is returned.
             */
            value: any;
            /** Get red component (0 - 1) */
            readonly red: number;
            /** Get green component (0 - 1) */
            readonly green: number;
            /** Get blue component (0 - 1) */
            readonly blue: number;
            /** Get alpha component (0 - 1) */
            readonly alpha: number;
            /**
             * Set the value, suitable for chaining
             * @param value
             * @see Color.value
             */
            setValue(value: any): any;
            /**
             * Copy a color source internally.
             * @param value - Color source
             */
            _cloneSource(value: any): any;
            /**
             * Equality check for color sources.
             * @param value1 - First color source
             * @param value2 - Second color source
             * @returns `true` if the color sources are equal, `false` otherwise.
             */
            _isSourceEqual(value1: any, value2: any): any;
            /**
             * Convert to a RGBA color object.
             * @example
             * import { Color } from 'pixi.js';
             * new Color('white').toRgb(); // returns { r: 1, g: 1, b: 1, a: 1 }
             */
            toRgba(): {
                r: any;
                g: any;
                b: any;
                a: any;
            };
            /**
             * Convert to a RGB color object.
             * @example
             * import { Color } from 'pixi.js';
             * new Color('white').toRgb(); // returns { r: 1, g: 1, b: 1 }
             */
            toRgb(): {
                r: any;
                g: any;
                b: any;
            };
            /** Convert to a CSS-style rgba string: `rgba(255,255,255,1.0)`. */
            toRgbaString(): string;
            toUint8RgbArray(out: any): any;
            _arrayRgb: any[];
            toArray(out: any): any;
            _arrayRgba: any[];
            toRgbArray(out: any): any;
            /**
             * Convert to a hexadecimal number.
             * @example
             * import { Color } from 'pixi.js';
             * new Color('white').toNumber(); // returns 16777215
             */
            toNumber(): number;
            /**
             * Convert to a BGR number
             * @example
             * import { Color } from 'pixi.js';
             * new Color(0xffcc99).toBgrNumber(); // returns 0x99ccff
             */
            toBgrNumber(): any;
            /**
             * Convert to a hexadecimal number in little endian format (e.g., BBGGRR).
             * @example
             * import { Color } from 'pixi.js';
             * new Color(0xffcc99).toLittleEndianNumber(); // returns 0x99ccff
             * @returns {number} - The color as a number in little endian format.
             */
            toLittleEndianNumber(): number;
            /**
             * Multiply with another color. This action is destructive, and will
             * override the previous `value` property to be `null`.
             * @param {ColorSource} value - The color to multiply by.
             */
            multiply(value: ColorSource): any;
            /**
             * Converts color to a premultiplied alpha format. This action is destructive, and will
             * override the previous `value` property to be `null`.
             * @param alpha - The alpha to multiply by.
             * @param {boolean} [applyToRGB=true] - Whether to premultiply RGB channels.
             * @returns {Color} - Itself.
             */
            premultiply(alpha: any, applyToRGB?: boolean): {
                new (value?: ColorSource): any;
                /**
                 * Check if the value is a color-like object
                 * @param value - Value to check
                 * @returns True if the value is a color-like object
                 * @static
                 * @example
                 * import { Color } from 'pixi.js';
                 * Color.isColorLike('white'); // returns true
                 * Color.isColorLike(0xffffff); // returns true
                 * Color.isColorLike([1, 1, 1]); // returns true
                 */
                isColorLike(value: any): boolean;
                /**
                 * Default Color object for static uses
                 * @example
                 * import { Color } from 'pixi.js';
                 * Color.shared.setValue(0xffffff).toHex(); // '#ffffff'
                 */
                shared: any;
                /**
                 * Temporary Color object for static uses internally.
                 * As to not conflict with Color.shared.
                 * @ignore
                 */
                _temp: any;
                /** Pattern for hex strings */
                HEX_PATTERN: RegExp;
            };
            /**
             * Premultiplies alpha with current color.
             * @param {number} alpha - The alpha to multiply by.
             * @param {boolean} [applyToRGB=true] - Whether to premultiply RGB channels.
             * @returns {number} tint multiplied by alpha
             */
            toPremultiplied(alpha: number, applyToRGB?: boolean): number;
            /**
             * Convert to a hexadecimal string.
             * @example
             * import { Color } from 'pixi.js';
             * new Color('white').toHex(); // returns "#ffffff"
             */
            toHex(): string;
            /**
             * Convert to a hexadecimal string with alpha.
             * @example
             * import { Color } from 'pixi.js';
             * new Color('white').toHexa(); // returns "#ffffffff"
             */
            toHexa(): string;
            /**
             * Set alpha, suitable for chaining.
             * @param alpha
             */
            setAlpha(alpha: any): any;
            /**
             * Normalize the input value into rgba
             * @param value - Input value
             */
            _normalize(value: any): void;
            /** Refresh the internal color rgb number */
            _refreshInt(): void;
            /**
             * Clamps values to a range. Will override original values
             * @param value - Value(s) to clamp
             * @param min - Minimum value
             * @param max - Maximum value
             */
            _clamp(value: any, min?: number, max?: number): any;
        };
        /** The background color to fill if not transparent */
        color: {
            _value: any;
            _components: Float32Array;
            _int: number;
            /**
             * The current color source.
             *
             * When setting:
             * - Setting to an instance of `Color` will copy its color source and components.
             * - Otherwise, `Color` will try to normalize the color source and set the components.
             *   If the color source is invalid, an `Error` will be thrown and the `Color` will left unchanged.
             *
             * Note: The `null` in the setter's parameter type is added to match the TypeScript rule: return type of getter
             * must be assignable to its setter's parameter type. Setting `value` to `null` will throw an `Error`.
             *
             * When getting:
             * - A return value of `null` means the previous value was overridden (e.g., {@link Color.multiply multiply},
             *   {@link Color.premultiply premultiply} or {@link Color.round round}).
             * - Otherwise, the color source used when setting is returned.
             */
            value: any;
            /** Get red component (0 - 1) */
            readonly red: number;
            /** Get green component (0 - 1) */
            readonly green: number;
            /** Get blue component (0 - 1) */
            readonly blue: number;
            /** Get alpha component (0 - 1) */
            readonly alpha: number;
            /**
             * Set the value, suitable for chaining
             * @param value
             * @see Color.value
             */
            setValue(value: any): any;
            /**
             * Copy a color source internally.
             * @param value - Color source
             */
            _cloneSource(value: any): any;
            /**
             * Equality check for color sources.
             * @param value1 - First color source
             * @param value2 - Second color source
             * @returns `true` if the color sources are equal, `false` otherwise.
             */
            _isSourceEqual(value1: any, value2: any): any;
            /**
             * Convert to a RGBA color object.
             * @example
             * import { Color } from 'pixi.js';
             * new Color('white').toRgb(); // returns { r: 1, g: 1, b: 1, a: 1 }
             */
            toRgba(): {
                r: any;
                g: any;
                b: any;
                a: any;
            };
            /**
             * Convert to a RGB color object.
             * @example
             * import { Color } from 'pixi.js';
             * new Color('white').toRgb(); // returns { r: 1, g: 1, b: 1 }
             */
            toRgb(): {
                r: any;
                g: any;
                b: any;
            };
            /** Convert to a CSS-style rgba string: `rgba(255,255,255,1.0)`. */
            toRgbaString(): string;
            toUint8RgbArray(out: any): any;
            _arrayRgb: any[];
            toArray(out: any): any;
            _arrayRgba: any[];
            toRgbArray(out: any): any;
            /**
             * Convert to a hexadecimal number.
             * @example
             * import { Color } from 'pixi.js';
             * new Color('white').toNumber(); // returns 16777215
             */
            toNumber(): number;
            /**
             * Convert to a BGR number
             * @example
             * import { Color } from 'pixi.js';
             * new Color(0xffcc99).toBgrNumber(); // returns 0x99ccff
             */
            toBgrNumber(): any;
            /**
             * Convert to a hexadecimal number in little endian format (e.g., BBGGRR).
             * @example
             * import { Color } from 'pixi.js';
             * new Color(0xffcc99).toLittleEndianNumber(); // returns 0x99ccff
             * @returns {number} - The color as a number in little endian format.
             */
            toLittleEndianNumber(): number;
            /**
             * Multiply with another color. This action is destructive, and will
             * override the previous `value` property to be `null`.
             * @param {ColorSource} value - The color to multiply by.
             */
            multiply(value: ColorSource): any;
            /**
             * Converts color to a premultiplied alpha format. This action is destructive, and will
             * override the previous `value` property to be `null`.
             * @param alpha - The alpha to multiply by.
             * @param {boolean} [applyToRGB=true] - Whether to premultiply RGB channels.
             * @returns {Color} - Itself.
             */
            premultiply(alpha: any, applyToRGB?: boolean): {
                new (value?: ColorSource): any;
                /**
                 * Check if the value is a color-like object
                 * @param value - Value to check
                 * @returns True if the value is a color-like object
                 * @static
                 * @example
                 * import { Color } from 'pixi.js';
                 * Color.isColorLike('white'); // returns true
                 * Color.isColorLike(0xffffff); // returns true
                 * Color.isColorLike([1, 1, 1]); // returns true
                 */
                isColorLike(value: any): boolean;
                /**
                 * Default Color object for static uses
                 * @example
                 * import { Color } from 'pixi.js';
                 * Color.shared.setValue(0xffffff).toHex(); // '#ffffff'
                 */
                shared: any;
                /**
                 * Temporary Color object for static uses internally.
                 * As to not conflict with Color.shared.
                 * @ignore
                 */
                _temp: any;
                /** Pattern for hex strings */
                HEX_PATTERN: RegExp;
            };
            /**
             * Premultiplies alpha with current color.
             * @param {number} alpha - The alpha to multiply by.
             * @param {boolean} [applyToRGB=true] - Whether to premultiply RGB channels.
             * @returns {number} tint multiplied by alpha
             */
            toPremultiplied(alpha: number, applyToRGB?: boolean): number;
            /**
             * Convert to a hexadecimal string.
             * @example
             * import { Color } from 'pixi.js';
             * new Color('white').toHex(); // returns "#ffffff"
             */
            toHex(): string;
            /**
             * Convert to a hexadecimal string with alpha.
             * @example
             * import { Color } from 'pixi.js';
             * new Color('white').toHexa(); // returns "#ffffffff"
             */
            toHexa(): string;
            /**
             * Set alpha, suitable for chaining.
             * @param alpha
             */
            setAlpha(alpha: any): any;
            /**
             * Normalize the input value into rgba
             * @param value - Input value
             */
            _normalize(value: any): void;
            /** Refresh the internal color rgb number */
            _refreshInt(): void;
            /**
             * Clamps values to a range. Will override original values
             * @param value - Value(s) to clamp
             * @param min - Minimum value
             * @param max - Maximum value
             */
            _clamp(value: any, min?: number, max?: number): any;
        };
        /** The background color alpha. Setting this to 0 will make the canvas transparent. */
        alpha: number;
        /**
         * initiates the background system
         * @param options - the options for the background colors
         */
        init(options: any): void;
        /** The background color as an [R, G, B, A] array. */
        readonly colorRgba: any;
        /**
         * destroys the background system
         * @internal
         * @ignore
         */
        destroy(): void;
    };
    /** @ignore */
    extension: {
        type: any[];
        name: string;
        priority: number;
    };
    /** default options used by the system */
    defaultOptions: {
        /**
         * {@link WebGLOptions.backgroundAlpha}
         * @default 1
         */
        backgroundAlpha: number;
        /**
         * {@link WebGLOptions.backgroundColor}
         * @default 0x000000
         */
        backgroundColor: number;
        /**
         * {@link WebGLOptions.clearBeforeRender}
         * @default true
         */
        clearBeforeRender: boolean;
    };
} | {
    new (renderer: any): {
        _renderer: any;
        _normalizeOptions(options: any, defaults?: {}): any;
        /**
         * Will return a HTML Image of the target
         * @param options - The options for creating the image, or the target to extract
         * @returns - HTML Image of the target
         */
        image(options: any): Promise<HTMLImageElement>;
        /**
         * Will return a base64 encoded string of this target. It works by calling
         * `Extract.canvas` and then running toDataURL on that.
         * @param options - The options for creating the image, or the target to extract
         */
        base64(options: any): Promise<any>;
        /**
         * Creates a Canvas element, renders this target to it and then returns it.
         * @param options - The options for creating the canvas, or the target to extract
         * @returns - A Canvas element with the texture rendered on.
         */
        canvas(options: any): any;
        /**
         * Will return a one-dimensional array containing the pixel data of the entire texture in RGBA
         * order, with integer values between 0 and 255 (included).
         * @param options - The options for extracting the image, or the target to extract
         * @returns - One-dimensional array containing the pixel data of the entire texture
         */
        pixels(options: any): any;
        /**
         * Will return a texture of the target
         * @param options - The options for creating the texture, or the target to extract
         * @returns - A texture of the target
         */
        texture(options: any): any;
        /**
         * Will extract a HTMLImage of the target and download it
         * @param options - The options for downloading and extracting the image, or the target to extract
         */
        download(options: any): void;
        /**
         * Logs the target to the console as an image. This is a useful way to debug what's happening in the renderer.
         * @param options - The options for logging the image, or the target to log
         */
        log(options: any): void;
        destroy(): void;
    };
    /** @ignore */
    extension: {
        type: any[];
        name: string;
    };
    /** Default options for creating an image. */
    defaultImageOptions: {
        /** The format of the image. */
        format: string;
        /** The quality of the image. */
        quality: number;
    };
} | typeof GenerateTextureSystem | typeof GlobalUniformSystem | typeof HelloSystem | {
    new (renderer: any): {
        _renderer: any;
        count: number;
        checkCount: number;
        init(options: any): void;
        checkCountMax: any;
        maxIdle: any;
        active: any;
        /**
         * Checks to see when the last time a texture was used.
         * If the texture has not been used for a specified amount of time, it will be removed from the GPU.
         */
        postrender(): void;
        /**
         * Checks to see when the last time a texture was used.
         * If the texture has not been used for a specified amount of time, it will be removed from the GPU.
         */
        run(): void;
        destroy(): void;
    };
    /** @ignore */
    extension: {
        type: any[];
        name: string;
    };
    /** default options for the TextureGCSystem */
    defaultOptions: {
        /**
         * If set to true, this will enable the garbage collector on the GPU.
         * @default true
         */
        textureGCActive: boolean;
        /**
         * The maximum idle frames before a texture is destroyed by garbage collection.
         * @default 60 * 60
         */
        textureGCAMaxIdle: number;
        /**
         * Frames between two garbage collections.
         * @default 600
         */
        textureGCCheckCountMax: number;
    };
} | {
    new (): {
        /** The resolution / device pixel ratio of the renderer. */
        resolution: any;
        /**
         * initiates the view system
         * @param options - the options for the view
         */
        init(options: any): void;
        screen: Rectangle;
        canvas: any;
        antialias: boolean;
        texture: any;
        renderTarget: {
            /** unique id for this render target */
            uid: number;
            /**
             * An array of textures that can be written to by the GPU - mostly this has one texture in Pixi, but you could
             * write to multiple if required! (eg deferred lighting)
             */
            colorTextures: any[];
            dirtyId: number;
            isRoot: any;
            _size: Float32Array;
            /** if true, then when the render target is destroyed, it will destroy all the textures that were created for it. */
            _managedColorTextures: boolean;
            stencil: any;
            depth: any;
            depthStencilTexture: any;
            readonly size: Float32Array;
            readonly width: any;
            readonly height: any;
            readonly pixelWidth: any;
            readonly pixelHeight: any;
            readonly resolution: any;
            readonly colorTexture: any;
            onSourceResize(source: any): void;
            /**
             * This will ensure a depthStencil texture is created for this render target.
             * Most likely called by the mask system to make sure we have stencil buffer added.
             * @internal
             * @ignore
             */
            ensureDepthStencilTexture(): void;
            resize(width: any, height: any, resolution?: any, skipColorTexture?: boolean): void;
            destroy(): void;
        };
        multiView: boolean;
        /**
         * Resizes the screen and canvas to the specified dimensions.
         * @param desiredScreenWidth - The new width of the screen.
         * @param desiredScreenHeight - The new height of the screen.
         * @param resolution
         */
        resize(desiredScreenWidth: any, desiredScreenHeight: any, resolution: any): void;
        /**
         * Destroys this System and optionally removes the canvas from the dom.
         * @param {options | false} options - The options for destroying the view, or "false".
         * @param options.removeView - Whether to remove the view element from the DOM. Defaults to `false`.
         */
        destroy(options?: any | false): void;
    };
    /** @ignore */
    extension: {
        type: any[];
        name: string;
        priority: number;
    };
    /** The default options for the view system. */
    defaultOptions: {
        /**
         * {@link WebGLOptions.width}
         * @default 800
         */
        width: number;
        /**
         * {@link WebGLOptions.height}
         * @default 600
         */
        height: number;
        /**
         * {@link WebGLOptions.autoDensity}
         * @default false
         */
        autoDensity: boolean;
        /**
         * {@link WebGLOptions.antialias}
         * @default false
         */
        antialias: boolean;
    };
})[];
export class Sprite extends Container {
    /**
     * Helper function that creates a new sprite based on the source you provide.
     * The source can be - frame id, image, video, canvas element, video element, texture
     * @param source - Source to create texture from
     * @param [skipCache] - Whether to skip the cache or not
     * @returns The newly created sprite
     */
    static from(source: any, skipCache?: boolean): Sprite;
    /**
     * @param options - The options for creating the sprite.
     */
    constructor(options?: Texture);
    renderPipeId: string;
    batched: boolean;
    _didSpriteUpdate: boolean;
    _bounds: {
        minX: number;
        maxX: number;
        minY: number;
        maxY: number;
    };
    _sourceBounds: {
        minX: number;
        maxX: number;
        minY: number;
        maxY: number;
    };
    _boundsDirty: boolean;
    _sourceBoundsDirty: boolean;
    _roundPixels: number;
    _anchor: ObservablePoint;
    set anchor(value: ObservablePoint);
    /**
     * The anchor sets the origin point of the sprite. The default value is taken from the {@link Texture}
     * and passed to the constructor.
     *
     * The default is `(0,0)`, this means the sprite's origin is the top left.
     *
     * Setting the anchor to `(0.5,0.5)` means the sprite's origin is centered.
     *
     * Setting the anchor to `(1,1)` would mean the sprite's origin point will be the bottom right corner.
     *
     * If you pass only single parameter, it will set both x and y to the same value as shown in the example below.
     * @example
     * import { Sprite } from 'pixi.js';
     *
     * const sprite = new Sprite({texture: Texture.WHITE});
     * sprite.anchor.set(0.5); // This will set the origin to center. (0.5) is same as (0.5, 0.5).
     */
    get anchor(): ObservablePoint;
    set texture(value: any);
    /** The texture that the sprite is using. */
    get texture(): any;
    allowChildren: boolean;
    set roundPixels(value: boolean);
    /**
     *  Whether or not to round the x/y position of the sprite.
     * @type {boolean}
     */
    get roundPixels(): boolean;
    _texture: any;
    /**
     * The local bounds of the sprite.
     * @type {rendering.Bounds}
     */
    get bounds(): rendering.Bounds;
    /**
     * The bounds of the sprite, taking the texture's trim into account.
     * @type {rendering.Bounds}
     */
    get sourceBounds(): rendering.Bounds;
    /**
     * Checks if the object contains the given point.
     * @param point - The point to check
     */
    containsPoint(point: any): boolean;
    /**
     * Adds the bounds of this object to the bounds object.
     * @param bounds - The output bounds object.
     */
    addBounds(bounds: any): void;
    onViewUpdate(): void;
    _updateBounds(): void;
    _updateSourceBounds(): void;
    _width: number;
    _height: number;
}
export class SpritePipe {
    constructor(renderer: any);
    _gpuSpriteHash: any;
    _renderer: any;
    addRenderable(sprite: any, _instructionSet: any): void;
    updateRenderable(sprite: any): void;
    validateRenderable(sprite: any): boolean;
    destroyRenderable(sprite: any): void;
    _updateBatchableSprite(sprite: any, batchableSprite: any): void;
    _getGpuSprite(sprite: any): any;
    _initGPUSprite(sprite: any): any;
    destroy(): void;
}
export namespace SpritePipe {
    export namespace extension_60 {
        let type_53: any[];
        export { type_53 as type };
        let name_53: string;
        export { name_53 as name };
    }
    export { extension_60 as extension };
}
export let Spritesheet: {
    new (texture: any, data: object): {
        /** For multi-packed spritesheets, this contains a reference to all the other spritesheets it depends on. */
        linkedSheets: any[];
        _texture: Texture;
        textureSource: any;
        textures: {};
        animations: {};
        data: any;
        resolution: any;
        _frames: any;
        _frameKeys: string[];
        _batchIndex: number;
        _callback: (value: any) => void;
        /**
         * Parser spritesheet from loaded data. This is done asynchronously
         * to prevent creating too many Texture within a single process.
         */
        parse(): Promise<any>;
        /**
         * Process a batch of frames
         * @param initialFrameIndex - The index of frame to start.
         */
        _processFrames(initialFrameIndex: any): void;
        /** Parse animations config. */
        _processAnimations(): void;
        /** The parse has completed. */
        _parseComplete(): void;
        /** Begin the next batch of textures. */
        _nextBatch(): void;
        /**
         * Destroy Spritesheet and don't use after this.
         * @param {boolean} [destroyBase=false] - Whether to destroy the base texture as well
         */
        destroy(destroyBase?: boolean): void;
    };
    /** The maximum number of Textures to build per process. */
    BATCH_SIZE: number;
};
export let State: {
    new (): {
        data: number;
        /**
         * The blend mode to be applied when this state is set. Apply a value of `normal` to reset the blend mode.
         * Setting this mode to anything other than NO_BLEND will automatically switch blending on.
         * @default 'normal'
         */
        blendMode: any;
        /**
         * The polygon offset. Setting this property to anything other than 0 will automatically enable polygon offset fill.
         * @default 0
         */
        polygonOffset: any;
        /**
         * Activates blending of the computed fragment color values.
         * @default true
         */
        blend: boolean;
        /**
         * Enables or disables writing to the depth buffer.
         * @default true
         */
        depthMask: boolean;
        /**
         * Activates adding an offset to depth values of polygon's fragments
         * @default false
         */
        offsets: boolean;
        /** The culling settings for this state none - No culling back - Back face culling front - Front face culling */
        cullMode: "none" | "front" | "back";
        /**
         * Activates culling of polygons.
         * @default false
         */
        culling: boolean;
        /**
         * Specifies whether or not front or back-facing polygons can be culled.
         * @default false
         */
        clockwiseFrontFace: boolean;
        /**
         * Activates depth comparisons and updates to the depth buffer.
         * @default false
         */
        depthTest: boolean;
        _blendMode: any;
        _blendModeId: any;
        _polygonOffset: any;
        toString(): string;
    };
    /**
     * A quickly getting an instance of a State that is configured for 2d rendering.
     * @returns a new State with values set for 2d rendering
     */
    for2d(): {
        data: number;
        /**
         * The blend mode to be applied when this state is set. Apply a value of `normal` to reset the blend mode.
         * Setting this mode to anything other than NO_BLEND will automatically switch blending on.
         * @default 'normal'
         */
        blendMode: any;
        /**
         * The polygon offset. Setting this property to anything other than 0 will automatically enable polygon offset fill.
         * @default 0
         */
        polygonOffset: any;
        /**
         * Activates blending of the computed fragment color values.
         * @default true
         */
        blend: boolean;
        /**
         * Enables or disables writing to the depth buffer.
         * @default true
         */
        depthMask: boolean;
        /**
         * Activates adding an offset to depth values of polygon's fragments
         * @default false
         */
        offsets: boolean;
        /** The culling settings for this state none - No culling back - Back face culling front - Front face culling */
        cullMode: "none" | "front" | "back";
        /**
         * Activates culling of polygons.
         * @default false
         */
        culling: boolean;
        /**
         * Specifies whether or not front or back-facing polygons can be culled.
         * @default false
         */
        clockwiseFrontFace: boolean;
        /**
         * Activates depth comparisons and updates to the depth buffer.
         * @default false
         */
        depthTest: boolean;
        _blendMode: any;
        _blendModeId: any;
        _polygonOffset: any;
        toString(): string;
    };
    default2d: {
        data: number;
        /**
         * The blend mode to be applied when this state is set. Apply a value of `normal` to reset the blend mode.
         * Setting this mode to anything other than NO_BLEND will automatically switch blending on.
         * @default 'normal'
         */
        blendMode: any;
        /**
         * The polygon offset. Setting this property to anything other than 0 will automatically enable polygon offset fill.
         * @default 0
         */
        polygonOffset: any;
        /**
         * Activates blending of the computed fragment color values.
         * @default true
         */
        blend: boolean;
        /**
         * Enables or disables writing to the depth buffer.
         * @default true
         */
        depthMask: boolean;
        /**
         * Activates adding an offset to depth values of polygon's fragments
         * @default false
         */
        offsets: boolean;
        /** The culling settings for this state none - No culling back - Back face culling front - Front face culling */
        cullMode: "none" | "front" | "back";
        /**
         * Activates culling of polygons.
         * @default false
         */
        culling: boolean;
        /**
         * Specifies whether or not front or back-facing polygons can be culled.
         * @default false
         */
        clockwiseFrontFace: boolean;
        /**
         * Activates depth comparisons and updates to the depth buffer.
         * @default false
         */
        depthTest: boolean;
        _blendMode: any;
        _blendModeId: any;
        _polygonOffset: any;
        toString(): string;
    };
};
export class StencilMask {
    static test(mask: any): mask is Container;
    constructor(options: any);
    priority: number;
    pipe: string;
    init(mask: any): void;
    mask: any;
    reset(): void;
    addBounds(bounds: any, skipUpdateTransform: any): void;
    addLocalBounds(bounds: any, localRoot: any): void;
    containsPoint(point: any, hitTestFn: any): any;
    destroy(): void;
}
export namespace StencilMask {
    let extension_61: any;
    export { extension_61 as extension };
}
export class StencilMaskPipe {
    constructor(renderer: any);
    _maskStackHash: {};
    _maskHash: WeakMap<object, any>;
    _renderer: any;
    push(mask: any, _container: any, instructionSet: any): void;
    pop(mask: any, _container: any, instructionSet: any): void;
    execute(instruction: any): void;
    destroy(): void;
}
export namespace StencilMaskPipe {
    export namespace extension_62 {
        let type_54: any[];
        export { type_54 as type };
        let name_54: string;
        export { name_54 as name };
    }
    export { extension_62 as extension };
}
export class SystemRunner {
    /**
     * @param name - The function name that will be executed on the listeners added to this Runner.
     */
    constructor(name: any);
    items: any[];
    _name: any;
    /**
     * Dispatch/Broadcast Runner to all listeners added to the queue.
     * @param {...any} params - (optional) parameters to pass to each listener
     */
    emit(a0: any, a1: any, a2: any, a3: any, a4: any, a5: any, a6: any, a7: any): this;
    /**
     * Add a listener to the Runner
     *
     * Runners do not need to have scope or functions passed to them.
     * All that is required is to pass the listening object and ensure that it has contains a function that has the same name
     * as the name provided to the Runner when it was created.
     *
     * Eg A listener passed to this Runner will require a 'complete' function.
     *
     * ```
     * import { Runner } from 'pixi.js';
     *
     * const complete = new Runner('complete');
     * ```
     *
     * The scope used will be the object itself.
     * @param {any} item - The object that will be listening.
     */
    add(item: any): this;
    /**
     * Remove a single listener from the dispatch queue.
     * @param {any} item - The listener that you would like to remove.
     */
    remove(item: any): this;
    /**
     * Check to see if the listener is already in the Runner
     * @param {any} item - The listener that you would like to check.
     */
    contains(item: any): boolean;
    /** Remove all listeners from the Runner */
    removeAll(): this;
    /** Remove all references, don't use after this. */
    destroy(): void;
    /**
     * `true` if there are no this Runner contains no listeners
     * @readonly
     */
    readonly get empty(): boolean;
    /**
     * The name of the runner.
     * @readonly
     */
    readonly get name(): any;
}
export const TEXTURE_FORMAT_BLOCK_SIZE: {
    "bc1-rgba-unorm": number;
    "bc1-rgba-unorm-srgb": number;
    "bc2-rgba-unorm": number;
    "bc2-rgba-unorm-srgb": number;
    "bc3-rgba-unorm": number;
    "bc3-rgba-unorm-srgb": number;
    "bc4-r-unorm": number;
    "bc4-r-snorm": number;
    "bc5-rg-unorm": number;
    "bc5-rg-snorm": number;
    "bc6h-rgb-ufloat": number;
    "bc6h-rgb-float": number;
    "bc7-rgba-unorm": number;
    "bc7-rgba-unorm-srgb": number;
};
export class Text extends AbstractText {
    constructor(...args: any[]);
    renderPipeId: string;
    _updateBounds(): void;
}
export let TextStyle: {
    new (style?: {}): {
        [x: string]: any;
        /**
         * Alignment for multiline text, does not affect single line text.
         * @member {'left'|'center'|'right'|'justify'}
         */
        align: any;
        _align: any;
        /** Indicates if lines can be wrapped within words, it needs wordWrap to be set to true. */
        breakWords: any;
        _breakWords: any;
        /** Set a drop shadow for the text. */
        dropShadow: any;
        _dropShadow: any;
        /** The font family, can be a single font name, or a list of names where the first is the preferred font. */
        fontFamily: any;
        _fontFamily: any;
        /** The font size (as a number it converts to px, but as a string, equivalents are '26px','20pt','160%' or '1.6em') */
        fontSize: any;
        _fontSize: any;
        /**
         * The font style.
         * @member {'normal'|'italic'|'oblique'}
         */
        fontStyle: any;
        _fontStyle: any;
        /**
         * The font variant.
         * @member {'normal'|'small-caps'}
         */
        fontVariant: any;
        _fontVariant: any;
        /**
         * The font weight.
         * @member {'normal'|'bold'|'bolder'|'lighter'|'100'|'200'|'300'|'400'|'500'|'600'|'700'|'800'|'900'}
         */
        fontWeight: any;
        _fontWeight: any;
        /** The space between lines. */
        leading: any;
        _leading: any;
        /** The amount of spacing between letters, default is 0. */
        letterSpacing: any;
        _letterSpacing: any;
        /** The line height, a number that represents the vertical space that a letter uses. */
        lineHeight: any;
        _lineHeight: any;
        /**
         * Occasionally some fonts are cropped. Adding some padding will prevent this from happening
         * by adding padding to all sides of the text.
         */
        padding: any;
        _padding: any;
        /** Trim transparent borders. This is an expensive operation so only use this if you have to! */
        trim: any;
        _trim: any;
        /**
         * The baseline of the text that is rendered.
         * @member {'alphabetic'|'top'|'hanging'|'middle'|'ideographic'|'bottom'}
         */
        textBaseline: any;
        _textBaseline: any;
        /**
         * How newlines and spaces should be handled.
         * Default is 'pre' (preserve, preserve).
         *
         *  value       | New lines     |   Spaces
         *  ---         | ---           |   ---
         * 'normal'     | Collapse      |   Collapse
         * 'pre'        | Preserve      |   Preserve
         * 'pre-line'   | Preserve      |   Collapse
         * @member {'normal'|'pre'|'pre-line'}
         */
        whiteSpace: any;
        _whiteSpace: any;
        /** Indicates if word wrap should be used. */
        wordWrap: any;
        _wordWrap: any;
        /** The width at which text will wrap, it needs wordWrap to be set to true. */
        wordWrapWidth: any;
        _wordWrapWidth: any;
        /** A fillstyle that will be used on the text e.g., 'red', '#00FF00'. */
        fill: any;
        _originalFill: any;
        _fill: any;
        /** A fillstyle that will be used on the text stroke, e.g., 'blue', '#FCFF00'. */
        stroke: any;
        _originalStroke: any;
        _stroke: any;
        _generateKey(): string;
        _styleKey: string;
        update(): void;
        /** Resets all properties to the default values */
        reset(): void;
        readonly styleKey: string;
        /**
         * Creates a new TextStyle object with the same values as this one.
         * @returns New cloned TextStyle object
         */
        clone(): any;
        /**
         * Destroys this text style.
         * @param options - Options parameter. A boolean will act as if all options
         *  have been set to that value
         * @param {boolean} [options.texture=false] - Should it destroy the texture of the this style
         * @param {boolean} [options.textureSource=false] - Should it destroy the textureSource of the this style
         */
        destroy(options?: boolean): void;
        _createProxy(value: any, cb: any): any;
        _isFillStyle(value: any): boolean;
    };
    [x: string]: any;
    /** The default drop shadow settings */
    defaultDropShadow: {
        /** Set alpha for the drop shadow */
        alpha: number;
        /** Set a angle of the drop shadow */
        angle: number;
        /** Set a shadow blur radius */
        blur: number;
        /** A fill style to be used on the  e.g., 'red', '#00FF00' */
        color: string;
        /** Set a distance of the drop shadow */
        distance: number;
    };
    /** The default text style settings */
    defaultTextStyle: {
        /**
         * See {@link TextStyle.align}
         * @type {'left'|'center'|'right'|'justify'}
         */
        align: "left" | "center" | "right" | "justify";
        /** See {@link TextStyle.breakWords} */
        breakWords: boolean;
        /** See {@link TextStyle.dropShadow} */
        dropShadow: any;
        /**
         * See {@link TextStyle.fill}
         * @type {string|string[]|number|number[]|CanvasGradient|CanvasPattern}
         */
        fill: string | string[] | number | number[] | CanvasGradient | CanvasPattern;
        /**
         * See {@link TextStyle.fontFamily}
         * @type {string|string[]}
         */
        fontFamily: string | string[];
        /**
         * See {@link TextStyle.fontSize}
         * @type {number|string}
         */
        fontSize: number | string;
        /**
         * See {@link TextStyle.fontStyle}
         * @type {'normal'|'italic'|'oblique'}
         */
        fontStyle: "normal" | "italic" | "oblique";
        /**
         * See {@link TextStyle.fontVariant}
         * @type {'normal'|'small-caps'}
         */
        fontVariant: "normal" | "small-caps";
        /**
         * See {@link TextStyle.fontWeight}
         * @type {'normal'|'bold'|'bolder'|'lighter'|'100'|'200'|'300'|'400'|'500'|'600'|'700'|'800'|'900'}
         */
        fontWeight: "normal" | "bold" | "bolder" | "lighter" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
        /** See {@link TextStyle.leading} */
        leading: number;
        /** See {@link TextStyle.letterSpacing} */
        letterSpacing: number;
        /** See {@link TextStyle.lineHeight} */
        lineHeight: number;
        /** See {@link TextStyle.padding} */
        padding: number;
        /**
         * See {@link TextStyle.stroke}
         * @type {string|number}
         */
        stroke: string | number;
        /**
         * See {@link TextStyle.textBaseline}
         * @type {'alphabetic'|'top'|'hanging'|'middle'|'ideographic'|'bottom'}
         */
        textBaseline: "alphabetic" | "top" | "hanging" | "middle" | "ideographic" | "bottom";
        /** See {@link TextStyle.trim} */
        trim: boolean;
        /**
         * See {@link TextStyle.whiteSpace}
         * @type {'normal'|'pre'|'pre-line'}
         */
        whiteSpace: "normal" | "pre" | "pre-line";
        /** See {@link TextStyle.wordWrap} */
        wordWrap: boolean;
        /** See {@link TextStyle.wordWrapWidth} */
        wordWrapWidth: number;
    };
};
declare const Texture_base: any;
export class Texture extends Texture_base {
    [x: string]: any;
    /**
     * @param {TextureOptions} param0 - Options for the texture
     */
    constructor({ source, label, frame, orig, trim, defaultAnchor, defaultBorders, rotate, dynamic }?: TextureOptions);
    /** unique id for this texture */
    uid: number;
    /** A uvs object based on the given frame and the texture source */
    uvs: {
        x0: number;
        y0: number;
        x1: number;
        y1: number;
        x2: number;
        y2: number;
        x3: number;
        y3: number;
    };
    /**
     * This is the area of the BaseTexture image to actually copy to the Canvas / WebGL when rendering,
     * irrespective of the actual frame size or placement (which can be influenced by trimmed texture atlases)
     */
    frame: Rectangle;
    /**
     * Does this Texture have any frame data assigned to it?
     *
     * This mode is enabled automatically if no frame was passed inside constructor.
     *
     * In this mode texture is subscribed to baseTexture events, and fires `update` on any change.
     *
     * Beware, after loading or resize of baseTexture event can fired two times!
     * If you want more control, subscribe on baseTexture itself.
     * @example
     * texture.on('update', () => {});
     */
    noFrame: boolean;
    /**
     * Set to true if you plan on modifying the uvs of this texture.
     * When this is the case, sprites and other objects using the texture will
     * make sure to listen for changes to the uvs and update their vertices accordingly.
     */
    dynamic: any;
    /** is it a texture? yes! used for type checking */
    isTexture: boolean;
    label: TextureOptions;
    set source(value: any);
    /** the underlying source of the texture (equivalent of baseTexture in v7) */
    get source(): any;
    orig: any;
    trim: TextureOptions;
    rotate: any;
    defaultAnchor: TextureOptions;
    defaultBorders: TextureOptions;
    destroyed: boolean;
    _source: any;
    /** returns a TextureMatrix instance for this texture. By default, that object is not created because its heavy. */
    get textureMatrix(): TextureMatrix;
    _textureMatrix: TextureMatrix;
    /** The width of the Texture in pixels. */
    get width(): any;
    /** The height of the Texture in pixels. */
    get height(): any;
    /** Call this function when you have modified the frame of this texture. */
    updateUvs(): void;
    /**
     * Destroys this texture
     * @param destroySource - Destroy the source when the texture is destroyed.
     */
    destroy(destroySource?: boolean): void;
    /** call this if you have modified the `texture outside` of the constructor */
    update(): void;
    /** @deprecated since 8.0.0 */
    get baseTexture(): any;
}
export namespace Texture {
    export let EMPTY: Texture;
    export let WHITE: Texture;
    export { textureFrom as from };
}
export let TextureGCSystem: {
    new (renderer: any): {
        _renderer: any;
        count: number;
        checkCount: number;
        init(options: any): void;
        checkCountMax: any;
        maxIdle: any;
        active: any;
        /**
         * Checks to see when the last time a texture was used.
         * If the texture has not been used for a specified amount of time, it will be removed from the GPU.
         */
        postrender(): void;
        /**
         * Checks to see when the last time a texture was used.
         * If the texture has not been used for a specified amount of time, it will be removed from the GPU.
         */
        run(): void;
        destroy(): void;
    };
    /** @ignore */
    extension: {
        type: any[];
        name: string;
    };
    /** default options for the TextureGCSystem */
    defaultOptions: {
        /**
         * If set to true, this will enable the garbage collector on the GPU.
         * @default true
         */
        textureGCActive: boolean;
        /**
         * The maximum idle frames before a texture is destroyed by garbage collection.
         * @default 60 * 60
         */
        textureGCAMaxIdle: number;
        /**
         * Frames between two garbage collections.
         * @default 600
         */
        textureGCCheckCountMax: number;
    };
};
export class TextureMatrix {
    /**
     * @param texture - observed texture
     * @param clampMargin - Changes frame clamping, 0.5 by default. Use -0.5 for extra border.
     */
    constructor(texture: any, clampMargin: any);
    mapCoord: Matrix;
    uClampFrame: Float32Array;
    uClampOffset: Float32Array;
    _textureID: number;
    _updateID: number;
    clampOffset: number;
    clampMargin: any;
    isSimple: boolean;
    set texture(value: any);
    /** Texture property. */
    get texture(): any;
    _texture: any;
    /**
     * Multiplies uvs array to transform
     * @param uvs - mesh uvs
     * @param [out=uvs] - output
     * @returns - output
     */
    multiplyUvs(uvs: any, out?: any): any;
    /**
     * Updates matrices if texture was changed
     * @returns - whether or not it was updated
     */
    update(): boolean;
}
export const TexturePool: TexturePoolClass;
export class TexturePoolClass {
    /**
     * @param textureOptions - options that will be passed to BaseRenderTexture constructor
     * @param {SCALE_MODE} [textureOptions.scaleMode] - See {@link SCALE_MODE} for possible values.
     */
    constructor(textureOptions: any);
    _poolKeyHash: any;
    _texturePool: {};
    textureOptions: any;
    enableFullScreen: boolean;
    /**
     * Creates texture with params that were specified in pool constructor.
     * @param pixelWidth - Width of texture in pixels.
     * @param pixelHeight - Height of texture in pixels.
     * @param antialias
     */
    createTexture(pixelWidth: any, pixelHeight: any, antialias: any): Texture;
    /**
     * Gets a Power-of-Two render texture or fullScreen texture
     * @param frameWidth - The minimum width of the render texture.
     * @param frameHeight - The minimum height of the render texture.
     * @param resolution - The resolution of the render texture.
     * @param antialias
     * @returns The new render texture.
     */
    getOptimalTexture(frameWidth: any, frameHeight: any, resolution: number, antialias: any): any;
    /**
     * Gets extra texture of the same size as input renderTexture
     * @param texture - The texture to check what size it is.
     * @param antialias - Whether to use antialias.
     * @returns A texture that is a power of two
     */
    getSameSizeTexture(texture: any, antialias?: boolean): any;
    /**
     * Place a render texture back into the pool.
     * @param renderTexture - The renderTexture to free
     */
    returnTexture(renderTexture: any): void;
    /**
     * Clears the pool.
     * @param destroyTextures - Destroy all stored textures.
     */
    clear(destroyTextures: any): void;
}
export let TextureSource: {
    new (options?: {}): {
        [x: string]: any;
        options: {};
        /** unique id for this Texture source */
        uid: number;
        /**
         * The resource type used by this TextureSource. This is used by the bind groups to determine
         * how to handle this resource.
         * @ignore
         * @internal
         */
        _resourceType: string;
        /**
         * i unique resource id, used by the bind group systems.
         * This can change if the texture is resized or its resource changes
         */
        _resourceId: number;
        /**
         * this is how the backends know how to upload this texture to the GPU
         * It changes depending on the resource type. Classes that extend TextureSource
         * should override this property.
         * @ignore
         * @internal
         */
        uploadMethodId: string;
        _resolution: any;
        /** the pixel width of this texture source. This is the REAL pure number, not accounting resolution */
        pixelWidth: any;
        /** the pixel height of this texture source. This is the REAL pure number, not accounting resolution */
        pixelHeight: any;
        /**
         * the width of this texture source, accounting for resolution
         * eg pixelWidth 200, resolution 2, then width will be 100
         */
        width: number;
        /**
         * the height of this texture source, accounting for resolution
         * eg pixelHeight 200, resolution 2, then height will be 100
         */
        height: number;
        /**
         * The number of samples of a multisample texture. This is always 1 for non-multisample textures.
         * To enable multisample for a texture, set antialias to true
         * @internal
         * @ignore
         */
        sampleCount: any;
        /** The number of mip levels to generate for this texture. this is  overridden if autoGenerateMipmaps is true */
        mipLevelCount: any;
        /**
         * Should we auto generate mipmaps for this texture? This will automatically generate mipmaps
         * for this texture when uploading to the GPU. Mipmapped textures take up more memory, but
         * can look better when scaled down.
         *
         * For performance reasons, it is recommended to NOT use this with RenderTextures, as they are often updated every frame.
         * If you do, make sure to call `updateMipmaps` after you update the texture.
         */
        autoGenerateMipmaps: any;
        /** the format that the texture data has */
        format: any;
        /** how many dimensions does this texture have? currently v8 only supports 2d */
        dimension: any;
        /**
         * Only really affects RenderTextures.
         * Should we use antialiasing for this texture. It will look better, but may impact performance as a
         * Blit operation will be required to resolve the texture.
         */
        antialias: any;
        /**
         * Used by automatic texture Garbage Collection, stores last GC tick when it was bound
         * @protected
         */
        _touched: number;
        /**
         * Used by the batcher to build texture batches. faster to have the variable here!
         * @protected
         */
        _batchTick: number;
        /**
         * A temporary batch location for the texture batching. Here for performance reasons only!
         * @protected
         */
        _textureBindLocation: number;
        label: any;
        resource: any;
        autoGarbageCollect: any;
        alphaMode: any;
        /** the style of the texture */
        style: any;
        destroyed: boolean;
        /** returns itself */
        readonly source: any;
        _style: any;
        /** setting this will set wrapModeU,wrapModeV and wrapModeW all at once! */
        addressMode: any;
        /** setting this will set wrapModeU,wrapModeV and wrapModeW all at once! */
        repeatMode: any;
        /** Specifies the sampling behavior when the sample footprint is smaller than or equal to one texel. */
        magFilter: any;
        /** Specifies the sampling behavior when the sample footprint is larger than one texel. */
        minFilter: any;
        /** Specifies behavior for sampling between mipmap levels. */
        mipmapFilter: any;
        /** Specifies the minimum and maximum levels of detail, respectively, used internally when sampling a texture. */
        lodMinClamp: any;
        /** Specifies the minimum and maximum levels of detail, respectively, used internally when sampling a texture. */
        lodMaxClamp: any;
        _onStyleChange(): void;
        /** call this if you have modified the texture outside of the constructor */
        update(): void;
        /** Destroys this texture source */
        destroy(): void;
        /**
         * This will unload the Texture source from the GPU. This will free up the GPU memory
         * As soon as it is required fore rendering, it will be re-uploaded.
         */
        unload(): void;
        /** the width of the resource. This is the REAL pure number, not accounting resolution   */
        readonly resourceWidth: any;
        /** the height of the resource. This is the REAL pure number, not accounting resolution */
        readonly resourceHeight: any;
        /**
         * the resolution of the texture. Changing this number, will not change the number of pixels in the actual texture
         * but will the size of the texture when rendered.
         *
         * changing the resolution of this texture to 2 for example will make it appear twice as small when rendered (as pixel
         * density will have increased)
         */
        resolution: any;
        /**
         * Resize the texture, this is handy if you want to use the texture as a render texture
         * @param width - the new width of the texture
         * @param height - the new height of the texture
         * @param resolution - the new resolution of the texture
         * @returns - if the texture was resized
         */
        resize(width: any, height: any, resolution: any): boolean;
        /**
         * Lets the renderer know that this texture has been updated and its mipmaps should be re-generated.
         * This is only important for RenderTexture instances, as standard Texture instances will have their
         * mipmaps generated on upload. You should call this method after you make any change to the texture
         *
         * The reason for this is is can be quite expensive to update mipmaps for a texture. So by default,
         * We want you, the developer to specify when this action should happen.
         *
         * Generally you don't want to have mipmaps generated on Render targets that are changed every frame,
         */
        updateMipmaps(): void;
        wrapMode: any;
        scaleMode: any;
        /**
         * Refresh check for isPowerOfTwo texture based on size
         * @private
         */
        _refreshPOT(): void;
        isPowerOfTwo: boolean;
    };
    [x: string]: any;
    test(_resource: any): void;
    /** The default options used when creating a new TextureSource. override these to add your own defaults */
    defaultOptions: {
        resolution: number;
        format: string;
        alphaMode: string;
        dimensions: string;
        mipLevelCount: number;
        autoGenerateMipmaps: boolean;
        sampleCount: number;
        antialias: boolean;
        autoGarbageCollect: boolean;
    };
};
export let TextureStyle: {
    new (options?: {}): {
        [x: string]: any;
        _resourceType: string;
        _touched: number;
        /**
         * Specifies the maximum anisotropy value clamp used by the sampler.
         * Note: Most implementations support {@link GPUSamplerDescriptor#maxAnisotropy} values in range
         * between 1 and 16, inclusive. The used value of {@link GPUSamplerDescriptor#maxAnisotropy} will
         * be clamped to the maximum value that the platform supports.
         * @internal
         * @ignore
         */
        _maxAnisotropy: number;
        /**
         * Has the style been destroyed?
         * @readonly
         */
        readonly destroyed: boolean;
        addressMode: any;
        addressModeU: any;
        addressModeV: any;
        addressModeW: any;
        scaleMode: any;
        magFilter: any;
        minFilter: any;
        mipmapFilter: any;
        lodMinClamp: any;
        lodMaxClamp: any;
        compare: any;
        /** Specifies the maximum anisotropy value clamp used by the sampler. */
        maxAnisotropy: number;
        wrapMode: any;
        readonly _resourceId: any;
        update(): void;
        _sharedResourceId: any;
        _generateResourceId(): any;
        /** Destroys the style */
        destroy(): void;
    };
    [x: string]: any;
    /** default options for the style */
    defaultOptions: {
        addressMode: string;
        scaleMode: string;
    };
};
export class TextureUvs {
    x0: number;
    y0: number;
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    x3: number;
    y3: number;
    uvsFloat32: Float32Array;
    /**
     * Sets the texture Uvs based on the given frame information.
     * @protected
     * @param frame - The frame of the texture
     * @param baseFrame - The base frame of the texture
     * @param rotate - Rotation of frame, see {@link groupD8}
     */
    protected set(frame: any, baseFrame: any, rotate: any): void;
    toString(): string;
}
export let Ticker: {
    new (): {
        /**
         * Whether or not this ticker should invoke the method
         * {@link ticker.Ticker#start|start} automatically when a listener is added.
         */
        autoStart: boolean;
        /**
         * Scalar time value from last frame to this frame.
         * This value is capped by setting {@link ticker.Ticker#minFPS|minFPS}
         * and is scaled with {@link ticker.Ticker#speed|speed}.
         * **Note:** The cap may be exceeded by scaling.
         */
        deltaTime: number;
        /**
         * The last time {@link ticker.Ticker#update|update} was invoked.
         * This value is also reset internally outside of invoking
         * update, but only when a new animation frame is requested.
         * If the platform supports DOMHighResTimeStamp,
         * this value will have a precision of 1 碌s.
         */
        lastTime: number;
        /**
         * Factor of current {@link ticker.Ticker#deltaTime|deltaTime}.
         * @example
         * // Scales ticker.deltaTime to what would be
         * // the equivalent of approximately 120 FPS
         * ticker.speed = 2;
         */
        speed: number;
        /**
         * Whether or not this ticker has been started.
         * `true` if {@link ticker.Ticker#start|start} has been called.
         * `false` if {@link ticker.Ticker#stop|Stop} has been called.
         * While `false`, this value may change to `true` in the
         * event of {@link ticker.Ticker#autoStart|autoStart} being `true`
         * and a listener is added.
         */
        started: boolean;
        /** Internal current frame request ID */
        _requestId: number;
        /**
         * Internal value managed by minFPS property setter and getter.
         * This is the maximum allowed milliseconds between updates.
         */
        _maxElapsedMS: number;
        /**
         * Internal value managed by minFPS property setter and getter.
         * This is the minimum allowed milliseconds between updates.
         */
        _minElapsedMS: number;
        /** If enabled, deleting is disabled.*/
        _protected: boolean;
        /** The last time keyframe was executed. Maintains a relatively fixed interval with the previous value. */
        _lastFrame: number;
        _head: any;
        deltaMS: number;
        elapsedMS: number;
        _tick: (time: any) => void;
        /**
         * Conditionally requests a new animation frame.
         * If a frame has not already been requested, and if the internal
         * emitter has listeners, a new frame is requested.
         * @private
         */
        _requestIfNeeded(): void;
        /**
         * Conditionally cancels a pending animation frame.
         * @private
         */
        _cancelIfNeeded(): void;
        /**
         * Conditionally requests a new animation frame.
         * If the ticker has been started it checks if a frame has not already
         * been requested, and if the internal emitter has listeners. If these
         * conditions are met, a new frame is requested. If the ticker has not
         * been started, but autoStart is `true`, then the ticker starts now,
         * and continues with the previous conditions to request a new frame.
         * @private
         */
        _startIfPossible(): void;
        /**
         * Register a handler for tick events. Calls continuously unless
         * it is removed or the ticker is stopped.
         * @param fn - The listener function to be added for updates
         * @param context - The listener context
         * @param {number} [priority=UPDATE_PRIORITY.NORMAL] - The priority for emitting
         * @returns This instance of a ticker
         */
        add(fn: any, context: any, priority?: number): any;
        /**
         * Add a handler for the tick event which is only execute once.
         * @param fn - The listener function to be added for one update
         * @param context - The listener context
         * @param {number} [priority=UPDATE_PRIORITY.NORMAL] - The priority for emitting
         * @returns This instance of a ticker
         */
        addOnce(fn: any, context: any, priority?: number): any;
        /**
         * Internally adds the event handler so that it can be sorted by priority.
         * Priority allows certain handler (user, AnimatedSprite, Interaction) to be run
         * before the rendering.
         * @private
         * @param listener - Current listener being added.
         * @returns This instance of a ticker
         */
        _addListener(listener: any): any;
        /**
         * Removes any handlers matching the function and context parameters.
         * If no handlers are left after removing, then it cancels the animation frame.
         * @param fn - The listener function to be removed
         * @param context - The listener context to be removed
         * @returns This instance of a ticker
         */
        remove(fn: any, context: any): any;
        /**
         * The number of listeners on this ticker, calculated by walking through linked list
         * @readonly
         * @member {number}
         */
        readonly count: number;
        /** Starts the ticker. If the ticker has listeners a new animation frame is requested at this point. */
        start(): void;
        /** Stops the ticker. If the ticker has requested an animation frame it is canceled at this point. */
        stop(): void;
        /** Destroy the ticker and don't use after this. Calling this method removes all references to internal events. */
        destroy(): void;
        /**
         * Triggers an update. An update entails setting the
         * current {@link ticker.Ticker#elapsedMS|elapsedMS},
         * the current {@link ticker.Ticker#deltaTime|deltaTime},
         * invoking all listeners with current deltaTime,
         * and then finally setting {@link ticker.Ticker#lastTime|lastTime}
         * with the value of currentTime that was provided.
         * This method will be called automatically by animation
         * frame callbacks if the ticker instance has been started
         * and listeners are added.
         * @param {number} [currentTime=performance.now()] - the current time of execution
         */
        update(currentTime?: number): void;
        /**
         * The frames per second at which this ticker is running.
         * The default is approximately 60 in most modern browsers.
         * **Note:** This does not factor in the value of
         * {@link ticker.Ticker#speed|speed}, which is specific
         * to scaling {@link ticker.Ticker#deltaTime|deltaTime}.
         * @member {number}
         * @readonly
         */
        readonly FPS: number;
        /**
         * Manages the maximum amount of milliseconds allowed to
         * elapse between invoking {@link ticker.Ticker#update|update}.
         * This value is used to cap {@link ticker.Ticker#deltaTime|deltaTime},
         * but does not effect the measured value of {@link ticker.Ticker#FPS|FPS}.
         * When setting this property it is clamped to a value between
         * `0` and `Ticker.targetFPMS * 1000`.
         * @member {number}
         * @default 10
         */
        minFPS: number;
        /**
         * Manages the minimum amount of milliseconds required to
         * elapse between invoking {@link ticker.Ticker#update|update}.
         * This will effect the measured value of {@link ticker.Ticker#FPS|FPS}.
         * If it is set to `0`, then there is no limit; PixiJS will render as many frames as it can.
         * Otherwise it will be at least `minFPS`
         * @member {number}
         * @default 0
         */
        maxFPS: number;
    };
    /**
     * The shared ticker instance used by {@link AnimatedSprite} and by
     * {@link VideoResource} to update animation frames / video textures.
     *
     * It may also be used by {@link Application} if created with the `sharedTicker` option property set to true.
     *
     * The property {@link ticker.Ticker#autoStart|autoStart} is set to `true` for this instance.
     * Please follow the examples for usage, including how to opt-out of auto-starting the shared ticker.
     * @example
     * import { Ticker } from 'pixi.js';
     *
     * const ticker = Ticker.shared;
     * // Set this to prevent starting this ticker when listeners are added.
     * // By default this is true only for the Ticker.shared instance.
     * ticker.autoStart = false;
     *
     * // FYI, call this to ensure the ticker is stopped. It should be stopped
     * // if you have not attempted to render anything yet.
     * ticker.stop();
     *
     * // Call this when you are ready for a running shared ticker.
     * ticker.start();
     * @example
     * import { autoDetectRenderer, Container } from 'pixi.js';
     *
     * // You may use the shared ticker to render...
     * const renderer = autoDetectRenderer();
     * const stage = new Container();
     * document.body.appendChild(renderer.view);
     * ticker.add((time) => renderer.render(stage));
     *
     * // Or you can just update it manually.
     * ticker.autoStart = false;
     * ticker.stop();
     * const animate = (time) => {
     *     ticker.update(time);
     *     renderer.render(stage);
     *     requestAnimationFrame(animate);
     * };
     * animate(performance.now());
     * @member {ticker.Ticker}
     * @readonly
     * @static
     */
    readonly shared: any;
    /**
     * The system ticker instance used by {@link BasePrepare} for core timing
     * functionality that shouldn't usually need to be paused, unlike the `shared`
     * ticker which drives visual animations and rendering which may want to be paused.
     *
     * The property {@link ticker.Ticker#autoStart|autoStart} is set to `true` for this instance.
     * @member {ticker.Ticker}
     * @readonly
     * @static
     */
    readonly system: any;
    /**
     * Target frames per millisecond.
     * @static
     */
    targetFPMS: number;
};
export class TickerListener {
    /**
     * Constructor
     * @private
     * @param fn - The listener function to be added for one update
     * @param context - The listener context
     * @param priority - The priority for emitting
     * @param once - If the handler should fire once
     */
    private constructor();
    /** The next item in chain. */
    next: any;
    /** The previous item in chain. */
    previous: any;
    /** `true` if this listener has been destroyed already. */
    _destroyed: boolean;
    _fn: any;
    _context: any;
    priority: number;
    _once: boolean;
    /**
     * Simple compare function to figure out if a function and context match.
     * @param fn - The listener function to be added for one update
     * @param context - The listener context
     * @returns `true` if the listener match the arguments
     */
    match(fn: any, context?: any): boolean;
    /**
     * Emit by calling the current function.
     * @param ticker - The ticker emitting.
     * @returns Next ticker
     */
    emit(ticker: any): any;
    /**
     * Connect to the list.
     * @param previous - Input node, previous listener
     */
    connect(previous: any): void;
    /**
     * Destroy and don't use after this.
     * @param hard - `true` to remove the `next` reference, this
     *        is considered a hard destroy. Soft destroy maintains the next reference.
     * @returns The listener to redirect while emitting or removing.
     */
    destroy(hard?: boolean): any;
}
export class TickerPlugin {
    /**
     * Initialize the plugin with scope of application instance
     * @static
     * @private
     * @param {object} [options] - See application options
     */
    private static init;
    /**
     * Clean up the ticker, scoped to application.
     * @static
     * @private
     */
    private static destroy;
}
export namespace TickerPlugin {
    export function stop(): void;
    export function start(): void;
    export let _ticker: any;
    export let ticker: any;
    let extension_63: any;
    export { extension_63 as extension };
}
export let TilingSprite: {
    new (...args: any[]): {
        [x: string]: any;
        renderPipeId: string;
        canBundle: boolean;
        batched: boolean;
        _roundPixels: number;
        _bounds: {
            minX: number;
            maxX: number;
            minY: number;
            maxY: number;
        };
        _boundsDirty: boolean;
        allowChildren: boolean;
        _anchor: ObservablePoint;
        _applyAnchorToTexture: any;
        texture: any;
        _width: any;
        _height: any;
        _tileTransform: Transform;
        /**
         * The anchor sets the origin point of the sprite. The default value is taken from the {@link Texture}
         * and passed to the constructor.
         *
         * The default is `(0,0)`, this means the sprite's origin is the top left.
         *
         * Setting the anchor to `(0.5,0.5)` means the sprite's origin is centered.
         *
         * Setting the anchor to `(1,1)` would mean the sprite's origin point will be the bottom right corner.
         *
         * If you pass only single parameter, it will set both x and y to the same value as shown in the example below.
         * @example
         * import { TilingSprite } from 'pixi.js';
         *
         * const sprite = new TilingSprite({texture: Texture.WHITE});
         * sprite.anchor.set(0.5); // This will set the origin to center. (0.5) is same as (0.5, 0.5).
         */
        anchor: ObservablePoint;
        /** The offset of the image that is being tiled. */
        tilePosition: ObservablePoint;
        /** The scaling of the image that is being tiled. */
        tileScale: ObservablePoint;
        tileRotation: number;
        /**
         *  Whether or not to round the x/y position of the sprite.
         * @type {boolean}
         */
        roundPixels: boolean;
        /**
         * Changes frame clamping in corresponding textureMatrix
         * Change to -0.5 to add a pixel to the edge, recommended for transparent trimmed textures in atlas
         * @default 0.5
         * @member {number}
         */
        clampMargin: any;
        /** The transform of the image that is being tiled. */
        readonly tileTransform: Transform;
        /**
         * The local bounds of the sprite.
         * @type {rendering.Bounds}
         */
        readonly bounds: rendering.Bounds;
        _texture: any;
        /** The width of the tiling area. */
        width: any;
        height: any;
        _updateBounds(): void;
        /**
         * Adds the bounds of this object to the bounds object.
         * @param bounds - The output bounds object.
         */
        addBounds(bounds: any): void;
        /**
         * Checks if the object contains the given point.
         * @param point - The point to check
         */
        containsPoint(point: any): boolean;
        onViewUpdate(): void;
        _didTilingSpriteUpdate: boolean;
        /** @private */
        didViewUpdate: boolean;
        /**
         * Destroys this sprite renderable and optionally its texture.
         * @param options - Options parameter. A boolean will act as if all options
         *  have been set to that value
         * @param {boolean} [options.texture=false] - Should it destroy the current texture of the renderable as well
         * @param {boolean} [options.textureSource=false] - Should it destroy the textureSource of the renderable as well
         */
        destroy(options?: boolean): void;
        /** unique id for this container */
        uid: number;
        /** @private */
        _updateFlags: number;
        /** @private */
        renderGroup: any;
        /** @private */
        parentRenderGroup: any;
        /** @private */
        parentRenderGroupIndex: number;
        /** @private */
        didChange: boolean;
        /** @private */
        relativeRenderGroupDepth: number;
        /**
         * The array of children of this container.
         * @readonly
         */
        readonly children: any[];
        /** The display object container that contains this display object. */
        parent: any;
        /** @private */
        includeInBuild: boolean;
        /** @private */
        measurable: boolean;
        /** @private */
        isSimple: boolean;
        /**
         * @internal
         * @ignore
         */
        updateTick: number;
        /**
         * Current transform of the object based on local factors: position, scale, other stuff.
         * @readonly
         */
        readonly localTransform: Matrix;
        /**
         * The relative group transform is a transform relative to the render group it belongs too. It will include all parent
         * transforms and up to the render group (think of it as kind of like a stage - but the stage can be nested).
         * If this container is is self a render group matrix will be relative to its parent render group
         * @readonly
         */
        readonly relativeGroupTransform: Matrix;
        /**
         * The group transform is a transform relative to the render group it belongs too.
         * If this container is render group then this will be an identity matrix. other wise it
         * will be the same as the relativeGroupTransform.
         * Use this value when actually rendering things to the screen
         * @readonly
         */
        readonly groupTransform: Matrix;
        /** If the object has been destroyed via destroy(). If true, it should not be used. */
        destroyed: boolean;
        /**
         * The coordinate of the object relative to the local coordinates of the parent.
         * @internal
         * @ignore
         */
        _position: ObservablePoint;
        /**
         * The scale factor of the object.
         * @internal
         * @ignore
         */
        _scale: ObservablePoint;
        /**
         * The pivot point of the container that it rotates around.
         * @internal
         * @ignore
         */
        _pivot: ObservablePoint;
        /**
         * The skew amount, on the x and y axis.
         * @internal
         * @ignore
         */
        _skew: ObservablePoint;
        /**
         * The X-coordinate value of the normalized local X axis,
         * the first column of the local transformation matrix without a scale.
         * @internal
         * @ignore
         */
        _cx: number;
        /**
         * The Y-coordinate value of the normalized local X axis,
         * the first column of the local transformation matrix without a scale.
         * @internal
         * @ignore
         */
        _sx: number;
        /**
         * The X-coordinate value of the normalized local Y axis,
         * the second column of the local transformation matrix without a scale.
         * @internal
         * @ignore
         */
        _cy: number;
        /**
         * The Y-coordinate value of the normalized local Y axis,
         * the second column of the local transformation matrix without a scale.
         * @internal
         * @ignore
         */
        _sy: number;
        /**
         * The rotation amount.
         * @internal
         * @ignore
         */
        _rotation: number;
        localColor: number;
        localAlpha: number;
        groupAlpha: number;
        groupColor: number;
        groupColorAlpha: number;
        /**
         * @internal
         * @ignore
         */
        localBlendMode: string;
        /**
         * @internal
         * @ignore
         */
        groupBlendMode: string;
        /**
         * This property holds three bits: culled, visible, renderable
         * the third bit represents culling (0 = culled, 1 = not culled) 0b100
         * the second bit represents visibility (0 = not visible, 1 = visible) 0b010
         * the first bit represents renderable (0 = not renderable, 1 = renderable) 0b001
         * @internal
         * @ignore
         */
        localDisplayStatus: number;
        /**
         * @internal
         * @ignore
         */
        globalDisplayStatus: number;
        /**
         * A value that increments each time the container is modified
         * the first 12 bits represent the container changes (eg transform, alpha, visible etc)
         * the second 12 bits represent:
         *      - for view changes (eg texture swap, geometry change etc)
         *      - containers changes (eg children added, removed etc)
         *
         *  view          container
         * [000000000000][00000000000]
         * @ignore
         */
        _didChangeId: number;
        /**
         * property that tracks if the container transform has changed
         * @ignore
         */
        _didLocalTransformChangeId: number;
        effects: any[];
        /**
         * Adds one or more children to the container.
         *
         * Multiple items can be added like so: `myContainer.addChild(thingOne, thingTwo, thingThree)`
         * @param {...Container} children - The Container(s) to add to the container
         * @returns {Container} - The first child that was added.
         */
        addChild(...children: Container[]): Container;
        sortDirty: boolean;
        /**
         * Removes one or more children from the container.
         * @param {...Container} children - The Container(s) to remove
         * @returns {Container} The first child that was removed.
         */
        removeChild(...children: Container[]): Container;
        /** @ignore */
        _onUpdate(point: any): void;
        isRenderGroup: boolean;
        /**
         * Calling this enables a render group for this container.
         * This means it will be rendered as a separate set of instructions.
         * The transform of the container will also be handled on the GPU rather than the CPU.
         */
        enableRenderGroup(): void;
        /** This will disable the render group for this container. */
        disableRenderGroup(): void;
        /** @ignore */
        _updateIsSimple(): void;
        /**
         * Current transform of the object based on world (parent) factors.
         * @readonly
         */
        readonly worldTransform: Matrix;
        _worldTransform: Matrix;
        /**
         * The position of the container on the x axis relative to the local coordinates of the parent.
         * An alias to position.x
         */
        x: number;
        /**
         * The position of the container on the y axis relative to the local coordinates of the parent.
         * An alias to position.y
         */
        y: number;
        /**
         * The coordinate of the object relative to the local coordinates of the parent.
         * @since 4.0.0
         */
        position: ObservablePoint;
        /**
         * The rotation of the object in radians.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         */
        rotation: number;
        /**
         * The angle of the object in degrees.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         */
        angle: number;
        /**
         * The center of rotation, scaling, and skewing for this display object in its local space. The `position`
         * is the projection of `pivot` in the parent's local space.
         *
         * By default, the pivot is the origin (0, 0).
         * @since 4.0.0
         */
        pivot: ObservablePoint;
        /**
         * The skew factor for the object in radians.
         * @since 4.0.0
         */
        skew: ObservablePoint;
        /**
         * The scale factors of this object along the local coordinate axes.
         *
         * The default scale is (1, 1).
         * @since 4.0.0
         */
        scale: ObservablePoint;
        /**
         * Retrieves the size of the container as a [Size]{@link Size} object.
         * This is faster than get the width and height separately.
         * @param out - Optional object to store the size in.
         * @returns - The size of the container.
         * @memberof scene.Container#
         */
        getSize(out: any): any;
        /**
         * Sets the size of the container to the specified width and height.
         * This is faster than setting the width and height separately.
         * @param value - This can be either a number or a [Size]{@link Size} object.
         * @param height - The height to set. Defaults to the value of `width` if not provided.
         * @memberof scene.Container#
         */
        setSize(value: any, height: any): void;
        /** Called when the skew or the rotation changes. */
        _updateSkew(): void;
        /**
         * Updates the transform properties of the container (accepts partial values).
         * @param {object} opts - The options for updating the transform.
         * @param {number} opts.x - The x position of the container.
         * @param {number} opts.y - The y position of the container.
         * @param {number} opts.scaleX - The scale factor on the x-axis.
         * @param {number} opts.scaleY - The scale factor on the y-axis.
         * @param {number} opts.rotation - The rotation of the container, in radians.
         * @param {number} opts.skewX - The skew factor on the x-axis.
         * @param {number} opts.skewY - The skew factor on the y-axis.
         * @param {number} opts.pivotX - The x coordinate of the pivot point.
         * @param {number} opts.pivotY - The y coordinate of the pivot point.
         */
        updateTransform(opts: {
            x: number;
            y: number;
            scaleX: number;
            scaleY: number;
            rotation: number;
            skewX: number;
            skewY: number;
            pivotX: number;
            pivotY: number;
        }): any;
        /**
         * Updates the local transform using the given matrix.
         * @param matrix - The matrix to use for updating the transform.
         */
        setFromMatrix(matrix: any): void;
        /** Updates the local transform. */
        updateLocalTransform(): void;
        alpha: number;
        tint: number;
        blendMode: string;
        /** The visibility of the object. If false the object will not be drawn, and the transform will not be updated. */
        visible: boolean;
        /** @ignore */
        culled: boolean;
        /** Can this object be rendered, if false the object will not be drawn but the transform will still be updated. */
        renderable: boolean;
        /** Whether or not the object should be rendered. */
        readonly isRenderable: boolean;
        _maskEffect: any;
        _filterEffect: any;
    };
    /**
     * Creates a new tiling sprite.
     * @param source - The source to create the texture from.
     * @param options - The options for creating the tiling sprite.
     * @returns A new tiling sprite.
     */
    from(source: any, options?: {}): {
        [x: string]: any;
        renderPipeId: string;
        canBundle: boolean;
        batched: boolean;
        _roundPixels: number;
        _bounds: {
            minX: number;
            maxX: number;
            minY: number;
            maxY: number;
        };
        _boundsDirty: boolean;
        allowChildren: boolean;
        _anchor: ObservablePoint;
        _applyAnchorToTexture: any;
        texture: any;
        _width: any;
        _height: any;
        _tileTransform: Transform;
        /**
         * The anchor sets the origin point of the sprite. The default value is taken from the {@link Texture}
         * and passed to the constructor.
         *
         * The default is `(0,0)`, this means the sprite's origin is the top left.
         *
         * Setting the anchor to `(0.5,0.5)` means the sprite's origin is centered.
         *
         * Setting the anchor to `(1,1)` would mean the sprite's origin point will be the bottom right corner.
         *
         * If you pass only single parameter, it will set both x and y to the same value as shown in the example below.
         * @example
         * import { TilingSprite } from 'pixi.js';
         *
         * const sprite = new TilingSprite({texture: Texture.WHITE});
         * sprite.anchor.set(0.5); // This will set the origin to center. (0.5) is same as (0.5, 0.5).
         */
        anchor: ObservablePoint;
        /** The offset of the image that is being tiled. */
        tilePosition: ObservablePoint;
        /** The scaling of the image that is being tiled. */
        tileScale: ObservablePoint;
        tileRotation: number;
        /**
         *  Whether or not to round the x/y position of the sprite.
         * @type {boolean}
         */
        roundPixels: boolean;
        /**
         * Changes frame clamping in corresponding textureMatrix
         * Change to -0.5 to add a pixel to the edge, recommended for transparent trimmed textures in atlas
         * @default 0.5
         * @member {number}
         */
        clampMargin: any;
        /** The transform of the image that is being tiled. */
        readonly tileTransform: Transform;
        /**
         * The local bounds of the sprite.
         * @type {rendering.Bounds}
         */
        readonly bounds: rendering.Bounds;
        _texture: any;
        /** The width of the tiling area. */
        width: any;
        height: any;
        _updateBounds(): void;
        /**
         * Adds the bounds of this object to the bounds object.
         * @param bounds - The output bounds object.
         */
        addBounds(bounds: any): void;
        /**
         * Checks if the object contains the given point.
         * @param point - The point to check
         */
        containsPoint(point: any): boolean;
        onViewUpdate(): void;
        _didTilingSpriteUpdate: boolean;
        /** @private */
        didViewUpdate: boolean;
        /**
         * Destroys this sprite renderable and optionally its texture.
         * @param options - Options parameter. A boolean will act as if all options
         *  have been set to that value
         * @param {boolean} [options.texture=false] - Should it destroy the current texture of the renderable as well
         * @param {boolean} [options.textureSource=false] - Should it destroy the textureSource of the renderable as well
         */
        destroy(options?: boolean): void;
        /** unique id for this container */
        uid: number;
        /** @private */
        _updateFlags: number;
        /** @private */
        renderGroup: any;
        /** @private */
        parentRenderGroup: any;
        /** @private */
        parentRenderGroupIndex: number;
        /** @private */
        didChange: boolean;
        /** @private */
        relativeRenderGroupDepth: number;
        /**
         * The array of children of this container.
         * @readonly
         */
        readonly children: any[];
        /** The display object container that contains this display object. */
        parent: any;
        /** @private */
        includeInBuild: boolean;
        /** @private */
        measurable: boolean;
        /** @private */
        isSimple: boolean;
        /**
         * @internal
         * @ignore
         */
        updateTick: number;
        /**
         * Current transform of the object based on local factors: position, scale, other stuff.
         * @readonly
         */
        readonly localTransform: Matrix;
        /**
         * The relative group transform is a transform relative to the render group it belongs too. It will include all parent
         * transforms and up to the render group (think of it as kind of like a stage - but the stage can be nested).
         * If this container is is self a render group matrix will be relative to its parent render group
         * @readonly
         */
        readonly relativeGroupTransform: Matrix;
        /**
         * The group transform is a transform relative to the render group it belongs too.
         * If this container is render group then this will be an identity matrix. other wise it
         * will be the same as the relativeGroupTransform.
         * Use this value when actually rendering things to the screen
         * @readonly
         */
        readonly groupTransform: Matrix;
        /** If the object has been destroyed via destroy(). If true, it should not be used. */
        destroyed: boolean;
        /**
         * The coordinate of the object relative to the local coordinates of the parent.
         * @internal
         * @ignore
         */
        _position: ObservablePoint;
        /**
         * The scale factor of the object.
         * @internal
         * @ignore
         */
        _scale: ObservablePoint;
        /**
         * The pivot point of the container that it rotates around.
         * @internal
         * @ignore
         */
        _pivot: ObservablePoint;
        /**
         * The skew amount, on the x and y axis.
         * @internal
         * @ignore
         */
        _skew: ObservablePoint;
        /**
         * The X-coordinate value of the normalized local X axis,
         * the first column of the local transformation matrix without a scale.
         * @internal
         * @ignore
         */
        _cx: number;
        /**
         * The Y-coordinate value of the normalized local X axis,
         * the first column of the local transformation matrix without a scale.
         * @internal
         * @ignore
         */
        _sx: number;
        /**
         * The X-coordinate value of the normalized local Y axis,
         * the second column of the local transformation matrix without a scale.
         * @internal
         * @ignore
         */
        _cy: number;
        /**
         * The Y-coordinate value of the normalized local Y axis,
         * the second column of the local transformation matrix without a scale.
         * @internal
         * @ignore
         */
        _sy: number;
        /**
         * The rotation amount.
         * @internal
         * @ignore
         */
        _rotation: number;
        localColor: number;
        localAlpha: number;
        groupAlpha: number;
        groupColor: number;
        groupColorAlpha: number;
        /**
         * @internal
         * @ignore
         */
        localBlendMode: string;
        /**
         * @internal
         * @ignore
         */
        groupBlendMode: string;
        /**
         * This property holds three bits: culled, visible, renderable
         * the third bit represents culling (0 = culled, 1 = not culled) 0b100
         * the second bit represents visibility (0 = not visible, 1 = visible) 0b010
         * the first bit represents renderable (0 = not renderable, 1 = renderable) 0b001
         * @internal
         * @ignore
         */
        localDisplayStatus: number;
        /**
         * @internal
         * @ignore
         */
        globalDisplayStatus: number;
        /**
         * A value that increments each time the container is modified
         * the first 12 bits represent the container changes (eg transform, alpha, visible etc)
         * the second 12 bits represent:
         *      - for view changes (eg texture swap, geometry change etc)
         *      - containers changes (eg children added, removed etc)
         *
         *  view          container
         * [000000000000][00000000000]
         * @ignore
         */
        _didChangeId: number;
        /**
         * property that tracks if the container transform has changed
         * @ignore
         */
        _didLocalTransformChangeId: number;
        effects: any[];
        /**
         * Adds one or more children to the container.
         *
         * Multiple items can be added like so: `myContainer.addChild(thingOne, thingTwo, thingThree)`
         * @param {...Container} children - The Container(s) to add to the container
         * @returns {Container} - The first child that was added.
         */
        addChild(...children: Container[]): Container;
        sortDirty: boolean;
        /**
         * Removes one or more children from the container.
         * @param {...Container} children - The Container(s) to remove
         * @returns {Container} The first child that was removed.
         */
        removeChild(...children: Container[]): Container;
        /** @ignore */
        _onUpdate(point: any): void;
        isRenderGroup: boolean;
        /**
         * Calling this enables a render group for this container.
         * This means it will be rendered as a separate set of instructions.
         * The transform of the container will also be handled on the GPU rather than the CPU.
         */
        enableRenderGroup(): void;
        /** This will disable the render group for this container. */
        disableRenderGroup(): void;
        /** @ignore */
        _updateIsSimple(): void;
        /**
         * Current transform of the object based on world (parent) factors.
         * @readonly
         */
        readonly worldTransform: Matrix;
        _worldTransform: Matrix;
        /**
         * The position of the container on the x axis relative to the local coordinates of the parent.
         * An alias to position.x
         */
        x: number;
        /**
         * The position of the container on the y axis relative to the local coordinates of the parent.
         * An alias to position.y
         */
        y: number;
        /**
         * The coordinate of the object relative to the local coordinates of the parent.
         * @since 4.0.0
         */
        position: ObservablePoint;
        /**
         * The rotation of the object in radians.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         */
        rotation: number;
        /**
         * The angle of the object in degrees.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         */
        angle: number;
        /**
         * The center of rotation, scaling, and skewing for this display object in its local space. The `position`
         * is the projection of `pivot` in the parent's local space.
         *
         * By default, the pivot is the origin (0, 0).
         * @since 4.0.0
         */
        pivot: ObservablePoint;
        /**
         * The skew factor for the object in radians.
         * @since 4.0.0
         */
        skew: ObservablePoint;
        /**
         * The scale factors of this object along the local coordinate axes.
         *
         * The default scale is (1, 1).
         * @since 4.0.0
         */
        scale: ObservablePoint;
        /**
         * Retrieves the size of the container as a [Size]{@link Size} object.
         * This is faster than get the width and height separately.
         * @param out - Optional object to store the size in.
         * @returns - The size of the container.
         * @memberof scene.Container#
         */
        getSize(out: any): any;
        /**
         * Sets the size of the container to the specified width and height.
         * This is faster than setting the width and height separately.
         * @param value - This can be either a number or a [Size]{@link Size} object.
         * @param height - The height to set. Defaults to the value of `width` if not provided.
         * @memberof scene.Container#
         */
        setSize(value: any, height: any): void;
        /** Called when the skew or the rotation changes. */
        _updateSkew(): void;
        /**
         * Updates the transform properties of the container (accepts partial values).
         * @param {object} opts - The options for updating the transform.
         * @param {number} opts.x - The x position of the container.
         * @param {number} opts.y - The y position of the container.
         * @param {number} opts.scaleX - The scale factor on the x-axis.
         * @param {number} opts.scaleY - The scale factor on the y-axis.
         * @param {number} opts.rotation - The rotation of the container, in radians.
         * @param {number} opts.skewX - The skew factor on the x-axis.
         * @param {number} opts.skewY - The skew factor on the y-axis.
         * @param {number} opts.pivotX - The x coordinate of the pivot point.
         * @param {number} opts.pivotY - The y coordinate of the pivot point.
         */
        updateTransform(opts: {
            x: number;
            y: number;
            scaleX: number;
            scaleY: number;
            rotation: number;
            skewX: number;
            skewY: number;
            pivotX: number;
            pivotY: number;
        }): any;
        /**
         * Updates the local transform using the given matrix.
         * @param matrix - The matrix to use for updating the transform.
         */
        setFromMatrix(matrix: any): void;
        /** Updates the local transform. */
        updateLocalTransform(): void;
        alpha: number;
        tint: number;
        blendMode: string;
        /** The visibility of the object. If false the object will not be drawn, and the transform will not be updated. */
        visible: boolean;
        /** @ignore */
        culled: boolean;
        /** Can this object be rendered, if false the object will not be drawn but the transform will still be updated. */
        renderable: boolean;
        /** Whether or not the object should be rendered. */
        readonly isRenderable: boolean;
        _maskEffect: any;
        _filterEffect: any;
    };
    /** default options for the TilingSprite */
    defaultOptions: {
        /** The texture to use for the sprite. */
        texture: Texture;
        /** The anchor point of the sprite */
        anchor: {
            x: number;
            y: number;
        };
        /** The offset of the image that is being tiled. */
        tilePosition: {
            x: number;
            y: number;
        };
        /** Scaling of the image that is being tiled. */
        tileScale: {
            x: number;
            y: number;
        };
        /** The rotation of the image that is being tiled. */
        tileRotation: number;
        /** TODO */
        applyAnchorToTexture: boolean;
    };
    /**
     * Mixes all enumerable properties and methods from a source object to Container.
     * @param source - The source of properties and methods to mix in.
     */
    mixin(source: any): void;
};
export class TilingSpritePipe {
    constructor(renderer: any);
    _state: {
        data: number;
        /**
         * The blend mode to be applied when this state is set. Apply a value of `normal` to reset the blend mode.
         * Setting this mode to anything other than NO_BLEND will automatically switch blending on.
         * @default 'normal'
         */
        blendMode: any;
        /**
         * The polygon offset. Setting this property to anything other than 0 will automatically enable polygon offset fill.
         * @default 0
         */
        polygonOffset: any;
        /**
         * Activates blending of the computed fragment color values.
         * @default true
         */
        blend: boolean;
        /**
         * Enables or disables writing to the depth buffer.
         * @default true
         */
        depthMask: boolean;
        /**
         * Activates adding an offset to depth values of polygon's fragments
         * @default false
         */
        offsets: boolean;
        /** The culling settings for this state none - No culling back - Back face culling front - Front face culling */
        cullMode: "none" | "front" | "back";
        /**
         * Activates culling of polygons.
         * @default false
         */
        culling: boolean;
        /**
         * Specifies whether or not front or back-facing polygons can be culled.
         * @default false
         */
        clockwiseFrontFace: boolean;
        /**
         * Activates depth comparisons and updates to the depth buffer.
         * @default false
         */
        depthTest: boolean;
        _blendMode: any;
        _blendModeId: any;
        _polygonOffset: any;
        toString(): string;
    };
    _tilingSpriteDataHash: any;
    _renderer: any;
    validateRenderable(renderable: any): boolean;
    addRenderable(tilingSprite: any, instructionSet: any): void;
    execute(tilingSprite: any): void;
    updateRenderable(tilingSprite: any): void;
    destroyRenderable(tilingSprite: any): void;
    _getTilingSpriteData(renderable: any): any;
    _initTilingSpriteData(tilingSprite: any): any;
    _updateBatchableMesh(tilingSprite: any): void;
    destroy(): void;
    _updateCanBatch(tilingSprite: any): any;
}
export namespace TilingSpritePipe {
    export namespace extension_64 {
        let type_55: any[];
        export { type_55 as type };
        let name_55: string;
        export { name_55 as name };
    }
    export { extension_64 as extension };
}
export class TilingSpriteShader extends Shader {
    constructor();
    updateUniforms(width: any, height: any, matrix: any, anchorX: any, anchorY: any, texture: any): void;
}
export class Transform {
    /**
     * @param options - Options for the transform.
     * @param options.matrix - The matrix to use.
     * @param options.observer - The observer to use.
     */
    constructor({ matrix, observer }?: {
        matrix: any;
        observer: any;
    });
    dirty: boolean;
    _matrix: any;
    observer: any;
    position: ObservablePoint;
    scale: ObservablePoint;
    pivot: ObservablePoint;
    skew: ObservablePoint;
    _rotation: number;
    _cx: number;
    _sx: number;
    _cy: number;
    _sy: number;
    /**
     * This matrix is computed by combining this Transforms position, scale, rotation, skew, and pivot
     * properties into a single matrix.
     * @readonly
     */
    readonly get matrix(): any;
    /**
     * Called when a value changes.
     * @param point
     * @internal
     * @private
     */
    private _onUpdate;
    /** Called when the skew or the rotation changes. */
    updateSkew(): void;
    toString(): string;
    /**
     * Decomposes a matrix and sets the transforms properties based on it.
     * @param matrix - The matrix to decompose
     */
    setFromMatrix(matrix: any): void;
    set rotation(value: number);
    /** The rotation of the object in radians. */
    get rotation(): number;
}
export class Triangle {
    /**
     * @param x - The X coord of the first point.
     * @param y - The Y coord of the first point.
     * @param x2 - The X coord of the second point.
     * @param y2 - The Y coord of the second point.
     * @param x3 - The X coord of the third point.
     * @param y3 - The Y coord of the third point.
     */
    constructor(x?: number, y?: number, x2?: number, y2?: number, x3?: number, y3?: number);
    /**
     * The type of the object, mainly used to avoid `instanceof` checks
     * @default 'triangle'
     */
    type: string;
    x: number;
    y: number;
    x2: number;
    y2: number;
    x3: number;
    y3: number;
    /**
     * Checks whether the x and y coordinates given are contained within this triangle
     * @param x - The X coordinate of the point to test
     * @param y - The Y coordinate of the point to test
     * @returns Whether the x/y coordinates are within this Triangle
     */
    contains(x: any, y: any): boolean;
    /**
     * Checks whether the x and y coordinates given are contained within this triangle including the stroke.
     * @param pointX - The X coordinate of the point to test
     * @param pointY - The Y coordinate of the point to test
     * @param strokeWidth - The width of the line to check
     * @returns Whether the x/y coordinates are within this triangle
     */
    strokeContains(pointX: any, pointY: any, strokeWidth: any): boolean;
    /**
     * Creates a clone of this Triangle
     * @returns a copy of the triangle
     */
    clone(): Triangle;
    /**
     * Copies another triangle to this one.
     * @param triangle - The triangle to copy from.
     * @returns Returns itself.
     */
    copyFrom(triangle: any): this;
    /**
     * Copies this triangle to another one.
     * @param triangle - The triangle to copy to.
     * @returns Returns given parameter.
     */
    copyTo(triangle: any): any;
    /**
     * Returns the framing rectangle of the triangle as a Rectangle object
     * @param out - optional rectangle to store the result
     * @returns The framing rectangle
     */
    getBounds(out: any): any;
}
export const UNIFORM_TO_ARRAY_SETTERS: {
    f32: string;
    "vec2<f32>": string;
    "vec3<f32>": string;
    "vec4<f32>": string;
    "mat2x2<f32>": string;
    "mat3x3<f32>": string;
    "mat4x4<f32>": string;
    i32: string;
    "vec2<i32>": string;
    "vec3<i32>": string;
    "vec4<i32>": string;
    u32: string;
    "vec2<u32>": string;
    "vec3<u32>": string;
    "vec4<u32>": string;
    bool: string;
    "vec2<bool>": string;
    "vec3<bool>": string;
    "vec4<bool>": string;
};
export const UNIFORM_TO_SINGLE_SETTERS: {
    f32: string;
    "vec2<f32>": string;
    "vec3<f32>": string;
    "vec4<f32>": string;
    i32: string;
    "vec2<i32>": string;
    "vec3<i32>": string;
    "vec4<i32>": string;
    u32: string;
    "vec2<u32>": string;
    "vec3<u32>": string;
    "vec4<u32>": string;
    bool: string;
    "vec2<bool>": string;
    "vec3<bool>": string;
    "vec4<bool>": string;
    "mat2x2<f32>": string;
    "mat3x3<f32>": string;
    "mat4x4<f32>": string;
};
export const UNIFORM_TYPES_MAP: {};
export const UNIFORM_TYPES_VALUES: string[];
export const UPDATE_BLEND: 2;
export const UPDATE_COLOR: 1;
export var UPDATE_PRIORITY: any;
export const UPDATE_TRANSFORM: 8;
export const UPDATE_VISIBLE: 4;
export class UboBatch {
    constructor({ minUniformOffsetAlignment }: {
        minUniformOffsetAlignment: any;
    });
    _minUniformOffsetAlignment: any;
    byteIndex: number;
    data: Float32Array;
    clear(): void;
    addEmptyGroup(size: any): number;
    addGroup(array: any): number;
    destroy(): void;
    _buffer: any;
}
export class UboSystem {
    constructor(adaptor: any);
    /** Cache of uniform buffer layouts and sync functions, so we don't have to re-create them */
    _syncFunctionHash: any;
    _adaptor: any;
    /**
     * Overridable function by `pixi.js/unsafe-eval` to silence
     * throwing an error if platform doesn't support unsafe-evals.
     * @private
     */
    private _systemCheck;
    ensureUniformGroup(uniformGroup: any): void;
    getUniformGroupData(uniformGroup: any): any;
    _initUniformGroup(uniformGroup: any): any;
    _generateUboSync(uboElements: any): any;
    syncUniformGroup(uniformGroup: any, data: any, offset: any): boolean;
    updateUniformGroup(uniformGroup: any): boolean;
    destroy(): void;
}
export let UniformGroup: {
    new (uniformStructures: any, options: any): {
        /** used internally to know if a uniform group was used in the last render pass */
        _touched: number;
        /** a unique id for this uniform group used through the renderer */
        uid: number;
        /** a resource type, used to identify how to handle it when its in a bind group / shader resource */
        _resourceType: string;
        /** the resource id used internally by the renderer to build bind group keys */
        _resourceId: number;
        /** used ito identify if this is a uniform group */
        isUniformGroup: boolean;
        /**
         * used to flag if this Uniform groups data is different from what it has stored in its buffer / on the GPU
         * @internal
         * @ignore
         */
        _dirtyId: number;
        destroyed: boolean;
        uniformStructures: any;
        uniforms: {};
        ubo: any;
        isStatic: any;
        _signature: any;
        /** Call this if you want the uniform groups data to be uploaded to the GPU only useful if `isStatic` is true. */
        update(): void;
    };
    /** The default options used by the uniform group. */
    defaultOptions: {
        /** if true the UniformGroup is handled as an Uniform buffer object. */
        ubo: boolean;
        /** if true, then you are responsible for when the data is uploaded to the GPU by calling `update()` */
        isStatic: boolean;
    };
};
export const VERSION: "8.2.5";
export let VideoSource: {
    new (options: any): {
        [x: string]: any;
        /** Whether or not the video is ready to play. */
        isReady: boolean;
        /** The upload method for this texture. */
        uploadMethodId: string;
        _autoUpdate: boolean;
        _isConnectedToTicker: boolean;
        _updateFPS: any;
        _msToNextUpdate: number;
        autoPlay: boolean;
        alphaMode: any;
        /** Callback to update the video frame and potentially request the next frame update. */
        _videoFrameRequestCallback(): void;
        _videoFrameRequestCallbackHandle: any;
        _load: Promise<any>;
        _resolve: (value: any) => void;
        _reject: (reason?: any) => void;
        _onCanPlay(): void;
        _onCanPlayThrough(): void;
        /**
         * Handle video error events.
         * @param event - The error event
         */
        _onError(event: any): void;
        /** Runs the update loop when the video is ready to play. */
        _onPlayStart(): void;
        /** Stops the update loop when a pause event is triggered. */
        _onPlayStop(): void;
        /** Handles behavior when the video completes seeking to the current playback position. */
        _onSeeked(): void;
        /** Update the video frame if the source is not destroyed and meets certain conditions. */
        updateFrame(): void;
        /**
         * Checks if the resource has valid dimensions.
         * @returns {boolean} True if width and height are set, otherwise false.
         */
        readonly isValid: boolean;
        /**
         * Start preloading the video resource.
         * @returns {Promise<this>} Handle the validate event
         */
        load(): Promise<any>;
        _preloadTimeout: NodeJS.Timeout;
        /**
         * Checks if the underlying source is playing.
         * @returns True if playing.
         */
        _isSourcePlaying(): boolean;
        /**
         * Checks if the underlying source is ready for playing.
         * @returns True if ready.
         */
        _isSourceReady(): boolean;
        /** Fired when the video is loaded and ready to play. */
        _mediaReady(): void;
        /** Cleans up resources and event listeners associated with this texture. */
        destroy(): void;
        /** Should the base texture automatically update itself, set to true by default. */
        autoUpdate: boolean;
        /**
         * How many times a second to update the texture from the video.
         * Leave at 0 to update at every render.
         * A lower fps can help performance, as updating the texture at 60fps on a 30ps video may not be efficient.
         */
        updateFPS: any;
        /**
         * Configures the updating mechanism based on the current state and settings.
         *
         * This method decides between using the browser's native video frame callback or a custom ticker
         * for updating the video frame. It ensures optimal performance and responsiveness
         * based on the video's state, playback status, and the desired frames-per-second setting.
         *
         * - If `_autoUpdate` is enabled and the video source is playing:
         *   - It will prefer the native video frame callback if available and no specific FPS is set.
         *   - Otherwise, it will use a custom ticker for manual updates.
         * - If `_autoUpdate` is disabled or the video isn't playing, any active update mechanisms are halted.
         */
        _configureAutoUpdate(): void;
        options: {};
        /** unique id for this Texture source */
        uid: number;
        /**
         * The resource type used by this TextureSource. This is used by the bind groups to determine
         * how to handle this resource.
         * @ignore
         * @internal
         */
        _resourceType: string;
        /**
         * i unique resource id, used by the bind group systems.
         * This can change if the texture is resized or its resource changes
         */
        _resourceId: number;
        _resolution: any;
        /** the pixel width of this texture source. This is the REAL pure number, not accounting resolution */
        pixelWidth: any;
        /** the pixel height of this texture source. This is the REAL pure number, not accounting resolution */
        pixelHeight: any;
        /**
         * the width of this texture source, accounting for resolution
         * eg pixelWidth 200, resolution 2, then width will be 100
         */
        width: number;
        /**
         * the height of this texture source, accounting for resolution
         * eg pixelHeight 200, resolution 2, then height will be 100
         */
        height: number;
        /**
         * The number of samples of a multisample texture. This is always 1 for non-multisample textures.
         * To enable multisample for a texture, set antialias to true
         * @internal
         * @ignore
         */
        sampleCount: any;
        /** The number of mip levels to generate for this texture. this is  overridden if autoGenerateMipmaps is true */
        mipLevelCount: any;
        /**
         * Should we auto generate mipmaps for this texture? This will automatically generate mipmaps
         * for this texture when uploading to the GPU. Mipmapped textures take up more memory, but
         * can look better when scaled down.
         *
         * For performance reasons, it is recommended to NOT use this with RenderTextures, as they are often updated every frame.
         * If you do, make sure to call `updateMipmaps` after you update the texture.
         */
        autoGenerateMipmaps: any;
        /** the format that the texture data has */
        format: any;
        /** how many dimensions does this texture have? currently v8 only supports 2d */
        dimension: any;
        /**
         * Only really affects RenderTextures.
         * Should we use antialiasing for this texture. It will look better, but may impact performance as a
         * Blit operation will be required to resolve the texture.
         */
        antialias: any;
        /**
         * Used by automatic texture Garbage Collection, stores last GC tick when it was bound
         * @protected
         */
        _touched: number;
        /**
         * Used by the batcher to build texture batches. faster to have the variable here!
         * @protected
         */
        _batchTick: number;
        /**
         * A temporary batch location for the texture batching. Here for performance reasons only!
         * @protected
         */
        _textureBindLocation: number;
        label: any;
        resource: any;
        autoGarbageCollect: any;
        /** the style of the texture */
        style: any;
        destroyed: boolean;
        /** returns itself */
        readonly source: any;
        _style: any;
        /** setting this will set wrapModeU,wrapModeV and wrapModeW all at once! */
        addressMode: any;
        /** setting this will set wrapModeU,wrapModeV and wrapModeW all at once! */
        repeatMode: any;
        /** Specifies the sampling behavior when the sample footprint is smaller than or equal to one texel. */
        magFilter: any;
        /** Specifies the sampling behavior when the sample footprint is larger than one texel. */
        minFilter: any;
        /** Specifies behavior for sampling between mipmap levels. */
        mipmapFilter: any;
        /** Specifies the minimum and maximum levels of detail, respectively, used internally when sampling a texture. */
        lodMinClamp: any;
        /** Specifies the minimum and maximum levels of detail, respectively, used internally when sampling a texture. */
        lodMaxClamp: any;
        _onStyleChange(): void;
        /** call this if you have modified the texture outside of the constructor */
        update(): void;
        /**
         * This will unload the Texture source from the GPU. This will free up the GPU memory
         * As soon as it is required fore rendering, it will be re-uploaded.
         */
        unload(): void;
        /** the width of the resource. This is the REAL pure number, not accounting resolution   */
        readonly resourceWidth: any;
        /** the height of the resource. This is the REAL pure number, not accounting resolution */
        readonly resourceHeight: any;
        /**
         * the resolution of the texture. Changing this number, will not change the number of pixels in the actual texture
         * but will the size of the texture when rendered.
         *
         * changing the resolution of this texture to 2 for example will make it appear twice as small when rendered (as pixel
         * density will have increased)
         */
        resolution: any;
        /**
         * Resize the texture, this is handy if you want to use the texture as a render texture
         * @param width - the new width of the texture
         * @param height - the new height of the texture
         * @param resolution - the new resolution of the texture
         * @returns - if the texture was resized
         */
        resize(width: any, height: any, resolution: any): boolean;
        /**
         * Lets the renderer know that this texture has been updated and its mipmaps should be re-generated.
         * This is only important for RenderTexture instances, as standard Texture instances will have their
         * mipmaps generated on upload. You should call this method after you make any change to the texture
         *
         * The reason for this is is can be quite expensive to update mipmaps for a texture. So by default,
         * We want you, the developer to specify when this action should happen.
         *
         * Generally you don't want to have mipmaps generated on Render targets that are changed every frame,
         */
        updateMipmaps(): void;
        wrapMode: any;
        scaleMode: any;
        /**
         * Refresh check for isPowerOfTwo texture based on size
         * @private
         */
        _refreshPOT(): void;
        isPowerOfTwo: boolean;
    };
    test(resource: any): boolean;
    extension: any;
    /** The default options for video sources. */
    defaultOptions: any;
    /**
     * Map of video MIME types that can't be directly derived from file extensions.
     * @readonly
     */
    readonly MIME_TYPES: {
        ogv: string;
        mov: string;
        m4v: string;
    };
};
export let ViewSystem: {
    new (): {
        /** The resolution / device pixel ratio of the renderer. */
        resolution: any;
        /**
         * initiates the view system
         * @param options - the options for the view
         */
        init(options: any): void;
        screen: Rectangle;
        canvas: any;
        antialias: boolean;
        texture: any;
        renderTarget: {
            /** unique id for this render target */
            uid: number;
            /**
             * An array of textures that can be written to by the GPU - mostly this has one texture in Pixi, but you could
             * write to multiple if required! (eg deferred lighting)
             */
            colorTextures: any[];
            dirtyId: number;
            isRoot: any;
            _size: Float32Array;
            /** if true, then when the render target is destroyed, it will destroy all the textures that were created for it. */
            _managedColorTextures: boolean;
            stencil: any;
            depth: any;
            depthStencilTexture: any;
            readonly size: Float32Array;
            readonly width: any;
            readonly height: any;
            readonly pixelWidth: any;
            readonly pixelHeight: any;
            readonly resolution: any;
            readonly colorTexture: any;
            onSourceResize(source: any): void;
            /**
             * This will ensure a depthStencil texture is created for this render target.
             * Most likely called by the mask system to make sure we have stencil buffer added.
             * @internal
             * @ignore
             */
            ensureDepthStencilTexture(): void;
            resize(width: any, height: any, resolution?: any, skipColorTexture?: boolean): void;
            destroy(): void;
        };
        multiView: boolean;
        /**
         * Resizes the screen and canvas to the specified dimensions.
         * @param desiredScreenWidth - The new width of the screen.
         * @param desiredScreenHeight - The new height of the screen.
         * @param resolution
         */
        resize(desiredScreenWidth: any, desiredScreenHeight: any, resolution: any): void;
        /**
         * Destroys this System and optionally removes the canvas from the dom.
         * @param {options | false} options - The options for destroying the view, or "false".
         * @param options.removeView - Whether to remove the view element from the DOM. Defaults to `false`.
         */
        destroy(options?: any | false): void;
    };
    /** @ignore */
    extension: {
        type: any[];
        name: string;
        priority: number;
    };
    /** The default options for the view system. */
    defaultOptions: {
        /**
         * {@link WebGLOptions.width}
         * @default 800
         */
        width: number;
        /**
         * {@link WebGLOptions.height}
         * @default 600
         */
        height: number;
        /**
         * {@link WebGLOptions.autoDensity}
         * @default false
         */
        autoDensity: boolean;
        /**
         * {@link WebGLOptions.antialias}
         * @default false
         */
        antialias: boolean;
    };
};
export class ViewableBuffer {
    /**
     * Returns the size of the given type in bytes.
     * @param type - One of `int8`, `uint8`, `int16`,
     *   `uint16`, `int32`, `uint32`, and `float32`.
     * @returns - size of the type in bytes
     */
    static sizeOf(type: any): 1 | 2 | 4;
    constructor(sizeOrBuffer: any);
    rawBinaryData: any;
    uint32View: Uint32Array;
    float32View: Float32Array;
    size: any;
    /** View on the raw binary data as a `Int8Array`. */
    get int8View(): Int8Array;
    _int8View: Int8Array;
    /** View on the raw binary data as a `Uint8Array`. */
    get uint8View(): Uint8Array;
    _uint8View: Uint8Array;
    /**  View on the raw binary data as a `Int16Array`. */
    get int16View(): Int16Array;
    _int16View: Int16Array;
    /** View on the raw binary data as a `Int32Array`. */
    get int32View(): Int32Array;
    _int32View: Int32Array;
    /** View on the raw binary data as a `Float64Array`. */
    get float64View(): Float64Array;
    _float64Array: Float64Array;
    /** View on the raw binary data as a `BigUint64Array`. */
    get bigUint64View(): BigUint64Array;
    _bigUint64Array: BigUint64Array;
    /**
     * Returns the view of the given type.
     * @param type - One of `int8`, `uint8`, `int16`,
     *    `uint16`, `int32`, `uint32`, and `float32`.
     * @returns - typed array of given type
     */
    view(type: any): any;
    /** Destroys all buffer references. Do not use after calling this. */
    destroy(): void;
    uint16View: any;
}
export const WGSL_ALIGN_SIZE_DATA: {
    i32: {
        align: number;
        size: number;
    };
    u32: {
        align: number;
        size: number;
    };
    f32: {
        align: number;
        size: number;
    };
    f16: {
        align: number;
        size: number;
    };
    "vec2<i32>": {
        align: number;
        size: number;
    };
    "vec2<u32>": {
        align: number;
        size: number;
    };
    "vec2<f32>": {
        align: number;
        size: number;
    };
    "vec2<f16>": {
        align: number;
        size: number;
    };
    "vec3<i32>": {
        align: number;
        size: number;
    };
    "vec3<u32>": {
        align: number;
        size: number;
    };
    "vec3<f32>": {
        align: number;
        size: number;
    };
    "vec3<f16>": {
        align: number;
        size: number;
    };
    "vec4<i32>": {
        align: number;
        size: number;
    };
    "vec4<u32>": {
        align: number;
        size: number;
    };
    "vec4<f32>": {
        align: number;
        size: number;
    };
    "vec4<f16>": {
        align: number;
        size: number;
    };
    "mat2x2<f32>": {
        align: number;
        size: number;
    };
    "mat2x2<f16>": {
        align: number;
        size: number;
    };
    "mat3x2<f32>": {
        align: number;
        size: number;
    };
    "mat3x2<f16>": {
        align: number;
        size: number;
    };
    "mat4x2<f32>": {
        align: number;
        size: number;
    };
    "mat4x2<f16>": {
        align: number;
        size: number;
    };
    "mat2x3<f32>": {
        align: number;
        size: number;
    };
    "mat2x3<f16>": {
        align: number;
        size: number;
    };
    "mat3x3<f32>": {
        align: number;
        size: number;
    };
    "mat3x3<f16>": {
        align: number;
        size: number;
    };
    "mat4x3<f32>": {
        align: number;
        size: number;
    };
    "mat4x3<f16>": {
        align: number;
        size: number;
    };
    "mat2x4<f32>": {
        align: number;
        size: number;
    };
    "mat2x4<f16>": {
        align: number;
        size: number;
    };
    "mat3x4<f32>": {
        align: number;
        size: number;
    };
    "mat3x4<f16>": {
        align: number;
        size: number;
    };
    "mat4x4<f32>": {
        align: number;
        size: number;
    };
    "mat4x4<f16>": {
        align: number;
        size: number;
    };
};
export const WGSL_TO_STD40_SIZE: {
    f32: number;
    "vec2<f32>": number;
    "vec3<f32>": number;
    "vec4<f32>": number;
    "mat2x2<f32>": number;
    "mat3x3<f32>": number;
    "mat4x4<f32>": number;
};
export const WRAP_MODES: any;
declare const WebGLRenderer_base: {
    new (config: any): {
        [x: string]: any;
        runners: any;
        renderPipes: any;
        _initOptions: {};
        _systemsHash: any;
        type: any;
        name: any;
        config: any;
        /**
         * Initialize the renderer.
         * @param options - The options to use to create the renderer.
         */
        init(options?: {}): Promise<void>;
        _roundPixels: number;
        render(args: any, deprecated: any): void;
        _lastObjectRendered: any;
        /**
         * Resizes the WebGL view to the specified width and height.
         * @param desiredScreenWidth - The desired width of the screen.
         * @param desiredScreenHeight - The desired height of the screen.
         * @param resolution - The resolution / device pixel ratio of the renderer.
         */
        resize(desiredScreenWidth: any, desiredScreenHeight: any, resolution: any): void;
        clear(options?: {}): void;
        /** The resolution / device pixel ratio of the renderer. */
        resolution: any;
        /**
         * Same as view.width, actual number of pixels in the canvas by horizontal.
         * @member {number}
         * @readonly
         * @default 800
         */
        readonly width: any;
        /**
         * Same as view.height, actual number of pixels in the canvas by vertical.
         * @default 600
         */
        readonly height: any;
        /**
         * The canvas element that everything is drawn to.
         * @type {environment.ICanvas}
         */
        readonly canvas: environment.ICanvas;
        /**
         * the last object rendered by the renderer. Useful for other plugins like interaction managers
         * @readonly
         */
        readonly lastObjectRendered: any;
        /**
         * Flag if we are rendering to the screen vs renderTexture
         * @readonly
         * @default true
         */
        readonly renderingToScreen: any;
        /**
         * Measurements of the screen. (0, 0, screenWidth, screenHeight).
         *
         * Its safe to use as filterArea or hitArea for the whole stage.
         */
        readonly screen: any;
        /**
         * Create a bunch of runners based of a collection of ids
         * @param runnerIds - the runner ids to add
         */
        _addRunners(...runnerIds: any[]): void;
        _addSystems(systems: any): void;
        /**
         * Add a new system to the renderer.
         * @param ClassRef - Class reference
         * @param name - Property name for system, if not specified
         *        will use a static `name` property on the class itself. This
         *        name will be assigned as s property on the Renderer so make
         *        sure it doesn't collide with properties on Renderer.
         * @returns Return instance of renderer
         */
        _addSystem(ClassRef: any, name: any): any;
        _addPipes(pipes: any, pipeAdaptors: any): void;
        destroy(options?: boolean): void;
        /**
         * Generate a texture from a container.
         * @param options - options or container target to use when generating the texture
         * @returns a texture
         */
        generateTexture(options: any): any;
        /**
         * Whether the renderer will round coordinates to whole pixels when rendering.
         * Can be overridden on a per scene item basis.
         */
        readonly roundPixels: boolean;
        /**
         * Overridable function by `pixi.js/unsafe-eval` to silence
         * throwing an error if platform doesn't support unsafe-evals.
         * @private
         * @ignore
         */
        _unsafeEvalCheck(): void;
    };
    [x: string]: any;
    /** The default options for the renderer. */
    defaultOptions: {
        /**
         * Default resolution / device pixel ratio of the renderer.
         * @default 1
         */
        resolution: number;
        /**
         * Should the `failIfMajorPerformanceCaveat` flag be enabled as a context option used in the `isWebGLSupported`
         * function. If set to true, a WebGL renderer can fail to be created if the browser thinks there could be
         * performance issues when using WebGL.
         *
         * In PixiJS v6 this has changed from true to false by default, to allow WebGL to work in as many
         * scenarios as possible. However, some users may have a poor experience, for example, if a user has a gpu or
         * driver version blacklisted by the
         * browser.
         *
         * If your application requires high performance rendering, you may wish to set this to false.
         * We recommend one of two options if you decide to set this flag to false:
         *
         * 1: Use the Canvas renderer as a fallback in case high performance WebGL is
         *    not supported.
         *
         * 2: Call `isWebGLSupported` (which if found in the utils package) in your code before attempting to create a
         *    PixiJS renderer, and show an error message to the user if the function returns false, explaining that their
         *    device & browser combination does not support high performance WebGL.
         *    This is a much better strategy than trying to create a PixiJS renderer and finding it then fails.
         * @default false
         */
        failIfMajorPerformanceCaveat: boolean;
        /**
         * Should round pixels be forced when rendering?
         * @default false
         */
        roundPixels: boolean;
    };
};
export class WebGLRenderer extends WebGLRenderer_base {
    constructor();
}
declare const WebGPURenderer_base: {
    new (config: any): {
        [x: string]: any;
        runners: any;
        renderPipes: any;
        _initOptions: {};
        _systemsHash: any;
        type: any;
        name: any;
        config: any;
        /**
         * Initialize the renderer.
         * @param options - The options to use to create the renderer.
         */
        init(options?: {}): Promise<void>;
        _roundPixels: number;
        render(args: any, deprecated: any): void;
        _lastObjectRendered: any;
        /**
         * Resizes the WebGL view to the specified width and height.
         * @param desiredScreenWidth - The desired width of the screen.
         * @param desiredScreenHeight - The desired height of the screen.
         * @param resolution - The resolution / device pixel ratio of the renderer.
         */
        resize(desiredScreenWidth: any, desiredScreenHeight: any, resolution: any): void;
        clear(options?: {}): void;
        /** The resolution / device pixel ratio of the renderer. */
        resolution: any;
        /**
         * Same as view.width, actual number of pixels in the canvas by horizontal.
         * @member {number}
         * @readonly
         * @default 800
         */
        readonly width: any;
        /**
         * Same as view.height, actual number of pixels in the canvas by vertical.
         * @default 600
         */
        readonly height: any;
        /**
         * The canvas element that everything is drawn to.
         * @type {environment.ICanvas}
         */
        readonly canvas: environment.ICanvas;
        /**
         * the last object rendered by the renderer. Useful for other plugins like interaction managers
         * @readonly
         */
        readonly lastObjectRendered: any;
        /**
         * Flag if we are rendering to the screen vs renderTexture
         * @readonly
         * @default true
         */
        readonly renderingToScreen: any;
        /**
         * Measurements of the screen. (0, 0, screenWidth, screenHeight).
         *
         * Its safe to use as filterArea or hitArea for the whole stage.
         */
        readonly screen: any;
        /**
         * Create a bunch of runners based of a collection of ids
         * @param runnerIds - the runner ids to add
         */
        _addRunners(...runnerIds: any[]): void;
        _addSystems(systems: any): void;
        /**
         * Add a new system to the renderer.
         * @param ClassRef - Class reference
         * @param name - Property name for system, if not specified
         *        will use a static `name` property on the class itself. This
         *        name will be assigned as s property on the Renderer so make
         *        sure it doesn't collide with properties on Renderer.
         * @returns Return instance of renderer
         */
        _addSystem(ClassRef: any, name: any): any;
        _addPipes(pipes: any, pipeAdaptors: any): void;
        destroy(options?: boolean): void;
        /**
         * Generate a texture from a container.
         * @param options - options or container target to use when generating the texture
         * @returns a texture
         */
        generateTexture(options: any): any;
        /**
         * Whether the renderer will round coordinates to whole pixels when rendering.
         * Can be overridden on a per scene item basis.
         */
        readonly roundPixels: boolean;
        /**
         * Overridable function by `pixi.js/unsafe-eval` to silence
         * throwing an error if platform doesn't support unsafe-evals.
         * @private
         * @ignore
         */
        _unsafeEvalCheck(): void;
    };
    [x: string]: any;
    /** The default options for the renderer. */
    defaultOptions: {
        /**
         * Default resolution / device pixel ratio of the renderer.
         * @default 1
         */
        resolution: number;
        /**
         * Should the `failIfMajorPerformanceCaveat` flag be enabled as a context option used in the `isWebGLSupported`
         * function. If set to true, a WebGL renderer can fail to be created if the browser thinks there could be
         * performance issues when using WebGL.
         *
         * In PixiJS v6 this has changed from true to false by default, to allow WebGL to work in as many
         * scenarios as possible. However, some users may have a poor experience, for example, if a user has a gpu or
         * driver version blacklisted by the
         * browser.
         *
         * If your application requires high performance rendering, you may wish to set this to false.
         * We recommend one of two options if you decide to set this flag to false:
         *
         * 1: Use the Canvas renderer as a fallback in case high performance WebGL is
         *    not supported.
         *
         * 2: Call `isWebGLSupported` (which if found in the utils package) in your code before attempting to create a
         *    PixiJS renderer, and show an error message to the user if the function returns false, explaining that their
         *    device & browser combination does not support high performance WebGL.
         *    This is a much better strategy than trying to create a PixiJS renderer and finding it then fails.
         * @default false
         */
        failIfMajorPerformanceCaveat: boolean;
        /**
         * Should round pixels be forced when rendering?
         * @default false
         */
        roundPixels: boolean;
    };
};
export class WebGPURenderer extends WebGPURenderer_base {
    constructor();
}
export const WorkerManager: WorkerManagerClass;
export function _getGlobalBounds(target: any, bounds: any, parentTransform: any, skipUpdateTransform: any): void;
export function _getGlobalBoundsRecursive(target: any, bounds: any): void;
export namespace accessibilityTarget {
    let accessible: boolean;
    let accessibleTitle: any;
    let accessibleHint: any;
    let tabIndex: number;
    let _accessibleActive: boolean;
    let _accessibleDiv: any;
    let accessibleType: string;
    let accessiblePointerEvents: PointerEvents;
    let accessibleChildren: boolean;
    let _renderId: number;
}
export function addBits(srcParts: any, parts: any, name: any): void;
export function addMaskBounds(mask: any, bounds: any, skipUpdateTransform: any): void;
export function addMaskLocalBounds(mask: any, bounds: any, localRoot: any): void;
export function addProgramDefines(src: any, isES300: any, isFragment: any): any;
declare var fragment$4: string;
declare var source$5: string;
export function applyMatrix(array: any, stride: any, offset: any, matrix: any): void;
export function applyStyleParams(style: any, gl: any, mipmaps: any, anisotropicExt: any, glFunctionName: any, firstParam: any, forceClamp: any, firstCreation: any): void;
export function assignWithIgnore(target: any, options: any, ignore?: {}): void;
export function autoDetectEnvironment(add: any): Promise<void>;
export function autoDetectRenderer(options: any): Promise<WebGPURenderer>;
export function autoDetectSource(options?: {}): any;
export namespace basisTranscoderUrls {
    let jsUrl: string;
    let wasmUrl: string;
}
export namespace bitmapFontCachePlugin {
    export namespace extension_65 {
        let type_56: any;
        export { type_56 as type };
        let name_56: string;
        export { name_56 as name };
    }
    export { extension_65 as extension };
    export function test(asset: any): asset is BitmapFont;
    export function getCacheableAssets(keys: any, asset: any): {};
}
export namespace bitmapFontTextParser {
    function test(data: any): boolean;
    function parse(txt: any): {
        chars: {};
        pages: any[];
        lineHeight: number;
        fontSize: number;
        fontFamily: string;
        distanceField: any;
        baseLineOffset: number;
    };
}
export namespace bitmapFontXMLParser {
    function test(data: any): boolean;
    function parse(xml: any): {
        chars: {};
        pages: any[];
        lineHeight: number;
        fontSize: number;
        fontFamily: string;
        distanceField: any;
        baseLineOffset: number;
    };
}
export namespace bitmapFontXMLStringParser {
    function test(data: any): boolean;
    function parse(data: any): {
        chars: {};
        pages: any[];
        lineHeight: number;
        fontSize: number;
        fontFamily: string;
        distanceField: any;
        baseLineOffset: number;
    };
}
export var blendTemplateFrag: string;
export var blendTemplateVert: string;
declare var blendTemplate: string;
export const blockDataMap: {
    "bc1-rgba-unorm": {
        blockBytes: number;
        blockWidth: number;
        blockHeight: number;
    };
    "bc2-rgba-unorm": {
        blockBytes: number;
        blockWidth: number;
        blockHeight: number;
    };
    "bc3-rgba-unorm": {
        blockBytes: number;
        blockWidth: number;
        blockHeight: number;
    };
    "bc7-rgba-unorm": {
        blockBytes: number;
        blockWidth: number;
        blockHeight: number;
    };
    "etc1-rgb-unorm": {
        blockBytes: number;
        blockWidth: number;
        blockHeight: number;
    };
    "etc2-rgba8unorm": {
        blockBytes: number;
        blockWidth: number;
        blockHeight: number;
    };
    "astc-4x4-unorm": {
        blockBytes: number;
        blockWidth: number;
        blockHeight: number;
    };
};
declare var source$4: string;
export const boundsPool: Pool;
export namespace browserExt {
    export namespace extension_66 {
        let type_57: any;
        export { type_57 as type };
        let name_57: string;
        export { name_57 as name };
        let priority_4: number;
        export { priority_4 as priority };
    }
    export { extension_66 as extension };
    export function test_1(): boolean;
    export { test_1 as test };
    export function load(): Promise<void>;
}
export function buildAdaptiveBezier(points: any, sX: any, sY: any, cp1x: any, cp1y: any, cp2x: any, cp2y: any, eX: any, eY: any, smoothness: any): any;
export function buildAdaptiveQuadratic(points: any, sX: any, sY: any, cp1x: any, cp1y: any, eX: any, eY: any, smoothness: any): any;
export function buildArc(points: any, x: any, y: any, radius: any, start: any, end: any, clockwise: any, steps: any): void;
export function buildArcTo(points: any, x1: any, y1: any, x2: any, y2: any, radius: any): void;
export function buildArcToSvg(points: any, px: any, py: any, cx: any, cy: any, rx: any, ry: any, xAxisRotation?: number, largeArcFlag?: number, sweepFlag?: number): void;
export namespace buildCircle {
    export namespace extension_67 {
        let type_58: any;
        export { type_58 as type };
        let name_58: string;
        export { name_58 as name };
    }
    export { extension_67 as extension };
    export function build(shape: any, points: any): any;
    export function triangulate(points: any, vertices: any, verticesStride: any, verticesOffset: any, indices: any, indicesOffset: any): void;
}
export function buildContextBatches(context: any, gpuContext: any): void;
export const buildEllipse: any;
export function buildGeometryFromPath(options: any): any;
export function buildInstructions(renderGroup: any, renderPipes: any): void;
export function buildLine(points: any, lineStyle: any, flipAlignment: any, closed: any, vertices: any, _verticesStride: any, _verticesOffset: any, indices: any, _indicesOffset: any): void;
export namespace buildPolygon {
    export namespace extension_68 {
        let type_59: any;
        export { type_59 as type };
        let name_59: string;
        export { name_59 as name };
    }
    export { extension_68 as extension };
    export function build(shape: any, points: any): any;
    export function triangulate(points: any, vertices: any, verticesStride: any, verticesOffset: any, indices: any, indicesOffset: any): void;
}
export namespace buildRectangle {
    export namespace extension_69 {
        let type_60: any;
        export { type_60 as type };
        let name_60: string;
        export { name_60 as name };
    }
    export { extension_69 as extension };
    export function build(shape: any, points: any): any;
    export function triangulate(points: any, vertices: any, verticesStride: any, verticesOffset: any, indices: any, indicesOffset: any): void;
}
export const buildRoundedRectangle: any;
export function buildSimpleUvs(uvs: any, uvsOffset: any, uvsStride: any, size: any): void;
export namespace buildTriangle {
    export namespace extension_70 {
        let type_61: any;
        export { type_61 as type };
        let name_61: string;
        export { name_61 as name };
    }
    export { extension_70 as extension };
    export function build(shape: any, points: any): any;
    export function triangulate(points: any, vertices: any, verticesStride: any, verticesOffset: any, indices: any, indicesOffset: any): void;
}
export function buildUvs(vertices: any, verticesStride: any, verticesOffset: any, uvs: any, uvsOffset: any, uvsStride: any, size: any, matrix?: any): void;
export namespace cacheTextureArray {
    export namespace extension_71 {
        let type_62: any;
        export { type_62 as type };
        let name_62: string;
        export { name_62 as name };
    }
    export { extension_71 as extension };
    export function test_2(asset: any): asset is Texture[];
    export { test_2 as test };
    export function getCacheableAssets(keys: any, asset: any): {};
}
export function calculateProjection(pm: any, x: any, y: any, width: any, height: any, flipY: any): any;
export function checkChildrenDidChange(container: any, previousData: any): any;
export function checkDataUrl(url: any, mimes: any): any;
export function checkExtension(url: any, extension: any): boolean;
export function checkMaxIfStatementsInShader(maxIfs: any, gl: any): any;
export namespace childrenHelperMixin {
    let allowChildren: boolean;
    /**
     * Removes all children from this container that are within the begin and end indexes.
     * @param beginIndex - The beginning position.
     * @param endIndex - The ending position. Default value is size of the container.
     * @returns - List of removed children
     * @memberof scene.Container#
     */
    function removeChildren(beginIndex: number, endIndex: any): any[];
    /**
     * Removes a child from the specified index position.
     * @param index - The index to get the child from
     * @returns The child that was removed.
     * @memberof scene.Container#
     */
    function removeChildAt(index: any): any;
    /**
     * Returns the child at the specified index
     * @param index - The index to get the child at
     * @returns - The child at the given index, if any.
     * @memberof scene.Container#
     */
    function getChildAt(index: any): any;
    /**
     * Changes the position of an existing child in the container container
     * @param child - The child Container instance for which you want to change the index number
     * @param index - The resulting index number for the child container
     * @memberof scene.Container#
     */
    function setChildIndex(child: any, index: any): void;
    /**
     * Returns the index position of a child Container instance
     * @param child - The Container instance to identify
     * @returns - The index position of the child container to identify
     * @memberof scene.Container#
     */
    function getChildIndex(child: any): any;
    /**
     * Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown.
     * If the child is already in this container, it will be moved to the specified index.
     * @param {Container} child - The child to add.
     * @param {number} index - The absolute index where the child will be positioned at the end of the operation.
     * @returns {Container} The child that was added.
     * @memberof scene.Container#
     */
    function addChildAt(child: Container, index: number): Container;
    /**
     * Swaps the position of 2 Containers within this container.
     * @param child - First container to swap
     * @param child2 - Second container to swap
     */
    function swapChildren(child: any, child2: any): void;
    /**
     * Remove the Container from its parent Container. If the Container has no parent, do nothing.
     * @memberof scene.Container#
     */
    function removeFromParent(): void;
    /**
     * Reparent the child to this container, keeping the same worldTransform.
     * @param child - The child to reparent
     * @returns The first child that was reparented.
     * @memberof scene.Container#
     */
    function reparentChild(...child: any[]): any;
    /**
     * Reparent the child to this container at the specified index, keeping the same worldTransform.
     * @param child - The child to reparent
     * @param index - The index to reparent the child to
     * @memberof scene.Container#
     */
    function reparentChildAt(child: any, index: any): any;
}
export const closePointEps: 0.0001;
export function collectAllRenderables(container: any, instructionSet: any, rendererPipes: any): void;
export function collectRenderGroups(renderGroup: any, out?: any[]): any[];
export function color32BitToUniform(abgr: any, out: any, offset: any): void;
export namespace colorBit {
    let name_63: string;
    export { name_63 as name };
    export namespace vertex {
        let header: string;
        let main: string;
    }
}
export namespace colorBitGl {
    let name_64: string;
    export { name_64 as name };
    export namespace vertex_1 {
        let header_1: string;
        export { header_1 as header };
        let main_1: string;
        export { main_1 as main };
    }
    export { vertex_1 as vertex };
}
declare var fragment$3: string;
declare var source$3: string;
export function colorToUniform(rgb: any, alpha: any, out: any, offset: any): void;
export const compareModeToGlCompare: {
    never: number;
    less: number;
    equal: number;
    "less-equal": number;
    greater: number;
    "not-equal": number;
    "greater-equal": number;
    always: number;
};
export function compileHighShader({ template, bits }: {
    template: any;
    bits: any;
}): any;
export function compileHighShaderGl({ template, bits }: {
    template: any;
    bits: any;
}): any;
export function compileHighShaderGlProgram({ bits, name }: {
    bits: any;
    name: any;
}): {
    fragment: any;
    vertex: any;
    _key: any;
    /** destroys the program */
    destroy(): void;
    _attributeData: any;
    _uniformData: any;
    _uniformBlockData: any;
    transformFeedbackVaryings: any;
};
export function compileHighShaderGpuProgram({ bits, name }: {
    bits: any;
    name: any;
}): any;
export function compileHooks(programSrc: any): {};
export function compileInputs(fragments: any, template: any, sort?: boolean): any;
export function compileOutputs(fragments: any, template: any): any;
export function compileShader(gl: any, type: any, src: any): any;
export function convertFormatIfRequired(textureOptions: any): void;
export function convertToList(input: any, transform: any, forceTransform?: boolean): any;
export function copySearchParams(targetUrl: any, sourceUrl: any): any;
export function createIdFromString(value: any, groupId: any): any;
export function createLevelBuffers(basisTexture: any, basisTranscoderFormat: any): Uint8Array[];
export function createLevelBuffersFromKTX(ktxTexture: any): Uint8Array[];
export function createStringVariations(string: any): any[];
export function createTexture(source: any, loader: any, url: any): Texture;
export function createUboElementsSTD40(uniformData: any): {
    uboElements: any;
    size: number;
};
export function createUboElementsWGSL(uniformData: any): {
    uboElements: any;
    size: number;
};
export function createUboSyncFunction(uboElements: any, parserCode: any, arrayGenerationFunction: any, singleSettersMap: any): Function;
export function createUboSyncFunctionSTD40(uboElements: any): Function;
export function createUboSyncFunctionWGSL(uboElements: any): Function;
export function crossOrigin(element: any, url: any, crossorigin: any): void;
export namespace cullingMixin {
    let cullArea: any;
    let cullable: boolean;
    let cullableChildren: boolean;
}
export const curveEps: 0.0001;
declare var vertex$2: string;
export function defaultValue(type: any, size: any): false | any[] | 0 | Int32Array | Uint32Array | Float32Array;
export function definedProps(obj: any): {};
export function deprecation(version: any, message: any, ignoreDepth?: number): void;
export namespace detectAvif {
    export namespace extension_72 {
        let type_63: any;
        export { type_63 as type };
        let priority_5: number;
        export { priority_5 as priority };
    }
    export { extension_72 as extension };
    export function test_3(): Promise<any>;
    export { test_3 as test };
    export function add_1(formats: any): Promise<any[]>;
    export { add_1 as add };
    export function remove(formats: any): Promise<any>;
}
export namespace detectBasis {
    export namespace extension_73 {
        let type_64: any;
        export { type_64 as type };
        let priority_6: number;
        export { priority_6 as priority };
    }
    export { extension_73 as extension };
    export function test_4(): Promise<boolean>;
    export { test_4 as test };
    export function add_2(formats: any): Promise<any[]>;
    export { add_2 as add };
    export function remove_1(formats: any): Promise<any>;
    export { remove_1 as remove };
}
export namespace detectCompressed {
    export namespace extension_74 {
        let type_65: any;
        export { type_65 as type };
        let priority_7: number;
        export { priority_7 as priority };
    }
    export { extension_74 as extension };
    export function test_5(): Promise<boolean>;
    export { test_5 as test };
    export function add_3(formats: any): Promise<any[]>;
    export { add_3 as add };
    export function remove_2(formats: any): Promise<any>;
    export { remove_2 as remove };
}
export namespace detectDefaults {
    export namespace extension_75 {
        let type_66: any;
        export { type_66 as type };
        let priority_8: number;
        export { priority_8 as priority };
    }
    export { extension_75 as extension };
    export function test_6(): Promise<boolean>;
    export { test_6 as test };
    export function add_4(formats: any): Promise<any[]>;
    export { add_4 as add };
    export function remove_3(formats: any): Promise<any>;
    export { remove_3 as remove };
}
export namespace detectMp4 {
    export namespace extension_76 {
        let type_67: any;
        export { type_67 as type };
        let priority_9: number;
        export { priority_9 as priority };
    }
    export { extension_76 as extension };
    export function test_7(): Promise<boolean>;
    export { test_7 as test };
    export function add_5(formats: any): Promise<any[]>;
    export { add_5 as add };
    export function remove_4(formats: any): Promise<any>;
    export { remove_4 as remove };
}
export namespace detectOgv {
    export namespace extension_77 {
        let type_68: any;
        export { type_68 as type };
        let priority_10: number;
        export { priority_10 as priority };
    }
    export { extension_77 as extension };
    export function test_8(): Promise<boolean>;
    export { test_8 as test };
    export function add_6(formats: any): Promise<any[]>;
    export { add_6 as add };
    export function remove_5(formats: any): Promise<any>;
    export { remove_5 as remove };
}
export function detectVideoAlphaMode(): Promise<any>;
export namespace detectWebm {
    export namespace extension_78 {
        let type_69: any;
        export { type_69 as type };
        let priority_11: number;
        export { priority_11 as priority };
    }
    export { extension_78 as extension };
    export function test_9(): Promise<boolean>;
    export { test_9 as test };
    export function add_7(formats: any): Promise<any[]>;
    export { add_7 as add };
    export function remove_6(formats: any): Promise<any>;
    export { remove_6 as remove };
}
export namespace detectWebp {
    export namespace extension_79 {
        let type_70: any;
        export { type_70 as type };
        let priority_12: number;
        export { priority_12 as priority };
    }
    export { extension_79 as extension };
    export function test_10(): Promise<any>;
    export { test_10 as test };
    export function add_8(formats: any): Promise<any[]>;
    export { add_8 as add };
    export function remove_7(formats: any): Promise<any>;
    export { remove_7 as remove };
}
export function determineCrossOrigin(url: any, loc?: Location): "" | "anonymous";
declare var fragment$2: string;
declare var vertex$1: string;
declare var source$2: string;
declare var earcut$1: any;
export namespace effectsMixin {
    let _maskEffect: any;
    let _filterEffect: any;
    let effects: Array<Effect>;
    /**
     * @todo Needs docs.
     * @param effect - The effect to add.
     * @memberof scene.Container#
     * @ignore
     */
    function addEffect(effect: any): void;
    /**
     * @todo Needs docs.
     * @param effect - The effect to remove.
     * @memberof scene.Container#
     * @ignore
     */
    function removeEffect(effect: any): void;
    let mask: any;
    let filters: any;
    let filterArea: any;
}
export function ensureAttributes(geometry: any, extractedData: any): void;
export function ensureIsBuffer(buffer: any, index: any): any;
export function ensureOptions(args: any, name: any): any;
export function ensurePrecision(src: any, options: any, isFragment: any): any;
export function ensureTextStyle(renderMode: any, style: any): {
    [x: string]: any;
    /**
     * Alignment for multiline text, does not affect single line text.
     * @member {'left'|'center'|'right'|'justify'}
     */
    align: any;
    _align: any;
    /** Indicates if lines can be wrapped within words, it needs wordWrap to be set to true. */
    breakWords: any;
    _breakWords: any;
    /** Set a drop shadow for the text. */
    dropShadow: any;
    _dropShadow: any;
    /** The font family, can be a single font name, or a list of names where the first is the preferred font. */
    fontFamily: any;
    _fontFamily: any;
    /** The font size (as a number it converts to px, but as a string, equivalents are '26px','20pt','160%' or '1.6em') */
    fontSize: any;
    _fontSize: any;
    /**
     * The font style.
     * @member {'normal'|'italic'|'oblique'}
     */
    fontStyle: any;
    _fontStyle: any;
    /**
     * The font variant.
     * @member {'normal'|'small-caps'}
     */
    fontVariant: any;
    _fontVariant: any;
    /**
     * The font weight.
     * @member {'normal'|'bold'|'bolder'|'lighter'|'100'|'200'|'300'|'400'|'500'|'600'|'700'|'800'|'900'}
     */
    fontWeight: any;
    _fontWeight: any;
    /** The space between lines. */
    leading: any;
    _leading: any;
    /** The amount of spacing between letters, default is 0. */
    letterSpacing: any;
    _letterSpacing: any;
    /** The line height, a number that represents the vertical space that a letter uses. */
    lineHeight: any;
    _lineHeight: any;
    /**
     * Occasionally some fonts are cropped. Adding some padding will prevent this from happening
     * by adding padding to all sides of the text.
     */
    padding: any;
    _padding: any;
    /** Trim transparent borders. This is an expensive operation so only use this if you have to! */
    trim: any;
    _trim: any;
    /**
     * The baseline of the text that is rendered.
     * @member {'alphabetic'|'top'|'hanging'|'middle'|'ideographic'|'bottom'}
     */
    textBaseline: any;
    _textBaseline: any;
    /**
     * How newlines and spaces should be handled.
     * Default is 'pre' (preserve, preserve).
     *
     *  value       | New lines     |   Spaces
     *  ---         | ---           |   ---
     * 'normal'     | Collapse      |   Collapse
     * 'pre'        | Preserve      |   Preserve
     * 'pre-line'   | Preserve      |   Collapse
     * @member {'normal'|'pre'|'pre-line'}
     */
    whiteSpace: any;
    _whiteSpace: any;
    /** Indicates if word wrap should be used. */
    wordWrap: any;
    _wordWrap: any;
    /** The width at which text will wrap, it needs wordWrap to be set to true. */
    wordWrapWidth: any;
    _wordWrapWidth: any;
    /** A fillstyle that will be used on the text e.g., 'red', '#00FF00'. */
    fill: any;
    _originalFill: any;
    _fill: any;
    /** A fillstyle that will be used on the text stroke, e.g., 'blue', '#FCFF00'. */
    stroke: any;
    _originalStroke: any;
    _stroke: any;
    _generateKey(): string;
    _styleKey: string;
    update(): void;
    /** Resets all properties to the default values */
    reset(): void;
    readonly styleKey: string;
    /**
     * Creates a new TextStyle object with the same values as this one.
     * @returns New cloned TextStyle object
     */
    clone(): any;
    /**
     * Destroys this text style.
     * @param options - Options parameter. A boolean will act as if all options
     *  have been set to that value
     * @param {boolean} [options.texture=false] - Should it destroy the texture of the this style
     * @param {boolean} [options.textureSource=false] - Should it destroy the textureSource of the this style
     */
    destroy(options?: boolean): void;
    _createProxy(value: any, cb: any): any;
    _isFillStyle(value: any): boolean;
};
export function executeInstructions(renderGroup: any, renderer: any): void;
export namespace extensions {
    let _addHandlers: {};
    let _removeHandlers: {};
    let _queue: {};
    /**
     * Remove extensions from PixiJS.
     * @param extensions - Extensions to be removed.
     * @returns {extensions} For chaining.
     */
    function remove(...extensions2: any[]): {
        /** @ignore */
        _addHandlers: {};
        /** @ignore */
        _removeHandlers: {};
        /** @ignore */
        _queue: {};
        remove(...extensions2: any[]): any;
        /**
         * Register new extensions with PixiJS.
         * @param extensions - The spread of extensions to add to PixiJS.
         * @returns {extensions} For chaining.
         */
        add(...extensions2: any[]): any;
        /**
         * Internal method to handle extensions by name.
         * @param type - The extension type.
         * @param onAdd  - Function handler when extensions are added/registered {@link StrictExtensionFormat}.
         * @param onRemove  - Function handler when extensions are removed/unregistered {@link StrictExtensionFormat}.
         * @returns {extensions} For chaining.
         */
        handle(type: any, onAdd: any, onRemove: any): any;
        /**
         * Handle a type, but using a map by `name` property.
         * @param type - Type of extension to handle.
         * @param map - The object map of named extensions.
         * @returns {extensions} For chaining.
         */
        handleByMap(type: any, map: any): any;
        /**
         * Handle a type, but using a list of extensions with a `name` property.
         * @param type - Type of extension to handle.
         * @param map - The array of named extensions.
         * @param defaultPriority - Fallback priority if none is defined.
         * @returns {extensions} For chaining.
         */
        handleByNamedList(type: any, map: any, defaultPriority?: number): any;
        /**
         * Handle a type, but using a list of extensions.
         * @param type - Type of extension to handle.
         * @param list - The list of extensions.
         * @param defaultPriority - The default priority to use if none is specified.
         * @returns {extensions} For chaining.
         */
        handleByList(type: any, list: any, defaultPriority?: number): any;
    };
    /**
     * Register new extensions with PixiJS.
     * @param extensions - The spread of extensions to add to PixiJS.
     * @returns {extensions} For chaining.
     */
    function add(...extensions2: any[]): {
        /** @ignore */
        _addHandlers: {};
        /** @ignore */
        _removeHandlers: {};
        /** @ignore */
        _queue: {};
        /**
         * Remove extensions from PixiJS.
         * @param extensions - Extensions to be removed.
         * @returns {extensions} For chaining.
         */
        remove(...extensions2: any[]): any;
        add(...extensions2: any[]): any;
        /**
         * Internal method to handle extensions by name.
         * @param type - The extension type.
         * @param onAdd  - Function handler when extensions are added/registered {@link StrictExtensionFormat}.
         * @param onRemove  - Function handler when extensions are removed/unregistered {@link StrictExtensionFormat}.
         * @returns {extensions} For chaining.
         */
        handle(type: any, onAdd: any, onRemove: any): any;
        /**
         * Handle a type, but using a map by `name` property.
         * @param type - Type of extension to handle.
         * @param map - The object map of named extensions.
         * @returns {extensions} For chaining.
         */
        handleByMap(type: any, map: any): any;
        /**
         * Handle a type, but using a list of extensions with a `name` property.
         * @param type - Type of extension to handle.
         * @param map - The array of named extensions.
         * @param defaultPriority - Fallback priority if none is defined.
         * @returns {extensions} For chaining.
         */
        handleByNamedList(type: any, map: any, defaultPriority?: number): any;
        /**
         * Handle a type, but using a list of extensions.
         * @param type - Type of extension to handle.
         * @param list - The list of extensions.
         * @param defaultPriority - The default priority to use if none is specified.
         * @returns {extensions} For chaining.
         */
        handleByList(type: any, list: any, defaultPriority?: number): any;
    };
    /**
     * Internal method to handle extensions by name.
     * @param type - The extension type.
     * @param onAdd  - Function handler when extensions are added/registered {@link StrictExtensionFormat}.
     * @param onRemove  - Function handler when extensions are removed/unregistered {@link StrictExtensionFormat}.
     * @returns {extensions} For chaining.
     */
    function handle(type: any, onAdd: any, onRemove: any): {
        /** @ignore */
        _addHandlers: {};
        /** @ignore */
        _removeHandlers: {};
        /** @ignore */
        _queue: {};
        /**
         * Remove extensions from PixiJS.
         * @param extensions - Extensions to be removed.
         * @returns {extensions} For chaining.
         */
        remove(...extensions2: any[]): any;
        /**
         * Register new extensions with PixiJS.
         * @param extensions - The spread of extensions to add to PixiJS.
         * @returns {extensions} For chaining.
         */
        add(...extensions2: any[]): any;
        handle(type: any, onAdd: any, onRemove: any): any;
        /**
         * Handle a type, but using a map by `name` property.
         * @param type - Type of extension to handle.
         * @param map - The object map of named extensions.
         * @returns {extensions} For chaining.
         */
        handleByMap(type: any, map: any): any;
        /**
         * Handle a type, but using a list of extensions with a `name` property.
         * @param type - Type of extension to handle.
         * @param map - The array of named extensions.
         * @param defaultPriority - Fallback priority if none is defined.
         * @returns {extensions} For chaining.
         */
        handleByNamedList(type: any, map: any, defaultPriority?: number): any;
        /**
         * Handle a type, but using a list of extensions.
         * @param type - Type of extension to handle.
         * @param list - The list of extensions.
         * @param defaultPriority - The default priority to use if none is specified.
         * @returns {extensions} For chaining.
         */
        handleByList(type: any, list: any, defaultPriority?: number): any;
    };
    /**
     * Handle a type, but using a map by `name` property.
     * @param type - Type of extension to handle.
     * @param map - The object map of named extensions.
     * @returns {extensions} For chaining.
     */
    function handleByMap(type: any, map: any): {
        /** @ignore */
        _addHandlers: {};
        /** @ignore */
        _removeHandlers: {};
        /** @ignore */
        _queue: {};
        /**
         * Remove extensions from PixiJS.
         * @param extensions - Extensions to be removed.
         * @returns {extensions} For chaining.
         */
        remove(...extensions2: any[]): any;
        /**
         * Register new extensions with PixiJS.
         * @param extensions - The spread of extensions to add to PixiJS.
         * @returns {extensions} For chaining.
         */
        add(...extensions2: any[]): any;
        /**
         * Internal method to handle extensions by name.
         * @param type - The extension type.
         * @param onAdd  - Function handler when extensions are added/registered {@link StrictExtensionFormat}.
         * @param onRemove  - Function handler when extensions are removed/unregistered {@link StrictExtensionFormat}.
         * @returns {extensions} For chaining.
         */
        handle(type: any, onAdd: any, onRemove: any): any;
        handleByMap(type: any, map: any): any;
        /**
         * Handle a type, but using a list of extensions with a `name` property.
         * @param type - Type of extension to handle.
         * @param map - The array of named extensions.
         * @param defaultPriority - Fallback priority if none is defined.
         * @returns {extensions} For chaining.
         */
        handleByNamedList(type: any, map: any, defaultPriority?: number): any;
        /**
         * Handle a type, but using a list of extensions.
         * @param type - Type of extension to handle.
         * @param list - The list of extensions.
         * @param defaultPriority - The default priority to use if none is specified.
         * @returns {extensions} For chaining.
         */
        handleByList(type: any, list: any, defaultPriority?: number): any;
    };
    /**
     * Handle a type, but using a list of extensions with a `name` property.
     * @param type - Type of extension to handle.
     * @param map - The array of named extensions.
     * @param defaultPriority - Fallback priority if none is defined.
     * @returns {extensions} For chaining.
     */
    function handleByNamedList(type: any, map: any, defaultPriority?: number): {
        /** @ignore */
        _addHandlers: {};
        /** @ignore */
        _removeHandlers: {};
        /** @ignore */
        _queue: {};
        /**
         * Remove extensions from PixiJS.
         * @param extensions - Extensions to be removed.
         * @returns {extensions} For chaining.
         */
        remove(...extensions2: any[]): any;
        /**
         * Register new extensions with PixiJS.
         * @param extensions - The spread of extensions to add to PixiJS.
         * @returns {extensions} For chaining.
         */
        add(...extensions2: any[]): any;
        /**
         * Internal method to handle extensions by name.
         * @param type - The extension type.
         * @param onAdd  - Function handler when extensions are added/registered {@link StrictExtensionFormat}.
         * @param onRemove  - Function handler when extensions are removed/unregistered {@link StrictExtensionFormat}.
         * @returns {extensions} For chaining.
         */
        handle(type: any, onAdd: any, onRemove: any): any;
        /**
         * Handle a type, but using a map by `name` property.
         * @param type - Type of extension to handle.
         * @param map - The object map of named extensions.
         * @returns {extensions} For chaining.
         */
        handleByMap(type: any, map: any): any;
        handleByNamedList(type: any, map: any, defaultPriority?: number): any;
        /**
         * Handle a type, but using a list of extensions.
         * @param type - Type of extension to handle.
         * @param list - The list of extensions.
         * @param defaultPriority - The default priority to use if none is specified.
         * @returns {extensions} For chaining.
         */
        handleByList(type: any, list: any, defaultPriority?: number): any;
    };
    /**
     * Handle a type, but using a list of extensions.
     * @param type - Type of extension to handle.
     * @param list - The list of extensions.
     * @param defaultPriority - The default priority to use if none is specified.
     * @returns {extensions} For chaining.
     */
    function handleByList(type: any, list: any, defaultPriority?: number): {
        /** @ignore */
        _addHandlers: {};
        /** @ignore */
        _removeHandlers: {};
        /** @ignore */
        _queue: {};
        /**
         * Remove extensions from PixiJS.
         * @param extensions - Extensions to be removed.
         * @returns {extensions} For chaining.
         */
        remove(...extensions2: any[]): any;
        /**
         * Register new extensions with PixiJS.
         * @param extensions - The spread of extensions to add to PixiJS.
         * @returns {extensions} For chaining.
         */
        add(...extensions2: any[]): any;
        /**
         * Internal method to handle extensions by name.
         * @param type - The extension type.
         * @param onAdd  - Function handler when extensions are added/registered {@link StrictExtensionFormat}.
         * @param onRemove  - Function handler when extensions are removed/unregistered {@link StrictExtensionFormat}.
         * @returns {extensions} For chaining.
         */
        handle(type: any, onAdd: any, onRemove: any): any;
        /**
         * Handle a type, but using a map by `name` property.
         * @param type - Type of extension to handle.
         * @param map - The object map of named extensions.
         * @returns {extensions} For chaining.
         */
        handleByMap(type: any, map: any): any;
        /**
         * Handle a type, but using a list of extensions with a `name` property.
         * @param type - Type of extension to handle.
         * @param map - The array of named extensions.
         * @param defaultPriority - Fallback priority if none is defined.
         * @returns {extensions} For chaining.
         */
        handleByNamedList(type: any, map: any, defaultPriority?: number): any;
        handleByList(type: any, list: any, defaultPriority?: number): any;
    };
}
export function extractAttributesFromGlProgram(program: any, gl: any, sortAttributes?: boolean): {};
export function extractAttributesFromGpuProgram({ source, entryPoint }: {
    source: any;
    entryPoint: any;
}): {};
export function extractFontFamilies(text: any, style: any): any[];
export function extractStructAndGroups(wgsl: any): {
    groups: any;
    structs: any;
};
export function fastCopy(sourceBuffer: any, destinationBuffer: any): void;
export const findHooksRx: RegExp;
export namespace findMixin {
    export let label: any;
    let name_65: any;
    export { name_65 as name };
    /**
     * @method getChildByName
     * @deprecated since 8.0.0
     * @param {string} name - Instance name.
     * @param {boolean}[deep=false] - Whether to search recursively
     * @returns {Container} The child with the specified name.
     * @see scene.Container#getChildByLabel
     * @memberof scene.Container#
     */
    export function getChildByName(name: string, deep?: boolean): Container;
    /**
     * Returns the first child in the container with the specified label.
     *
     * Recursive searches are done in a pre-order traversal.
     * @memberof scene.Container#
     * @param {string|RegExp} label - Instance label.
     * @param {boolean}[deep=false] - Whether to search recursively
     * @returns {Container} The child with the specified label.
     */
    export function getChildByLabel(label: string | RegExp, deep?: boolean): Container;
    /**
     * Returns all children in the container with the specified label.
     * @memberof scene.Container#
     * @param {string|RegExp} label - Instance label.
     * @param {boolean}[deep=false] - Whether to search recursively
     * @param {Container[]} [out=[]] - The array to store matching children in.
     * @returns {Container[]} An array of children with the specified label.
     */
    export function getChildrenByLabel(label: string | RegExp, deep?: boolean, out?: Container[]): Container[];
}
export function fontStringFromTextStyle(style: any): string;
export function formatShader(shader: any): any;
export const fragmentGPUTemplate: "\n    @in vUV : vec2<f32>;\n    @in vColor : vec4<f32>;\n   \n    {{header}}\n\n    @fragment\n    fn main(\n        {{in}}\n      ) -> @location(0) vec4<f32> {\n        \n        {{start}}\n\n        var outColor:vec4<f32>;\n      \n        {{main}}\n        \n        return outColor * vColor;\n      };\n";
export const fragmentGlTemplate: "\n   \n    in vec4 vColor;\n    in vec2 vUV;\n\n    out vec4 finalColor;\n\n    {{header}}\n\n    void main(void) {\n        \n        {{start}}\n\n        vec4 outColor;\n      \n        {{main}}\n        \n        finalColor = outColor * vColor;\n    }\n";
export function generateArraySyncSTD40(uboElement: any, offsetToAdd: any): string;
export function generateArraySyncWGSL(uboElement: any, offsetToAdd: any): string;
export function generateBlurFragSource(kernelSize: any): string;
export function generateBlurGlProgram(horizontal: any, kernelSize: any): any;
export function generateBlurProgram(horizontal: any, kernelSize: any): any;
export function generateBlurVertSource(kernelSize: any, x: any): string;
export function generateGPULayout(maxTextures: any): ({
    texture: {
        sampleType: string;
        viewDimension: string;
        multisampled: boolean;
    };
    binding: number;
    visibility: any;
    sampler?: undefined;
} | {
    sampler: {
        type: string;
    };
    binding: number;
    visibility: any;
    texture?: undefined;
})[];
export function generateGpuLayoutGroups({ groups }: {
    groups: any;
}): any[][];
export function generateLayout(maxTextures: any): {};
export function generateLayoutHash({ groups }: {
    groups: any;
}): {}[];
export function generateProgram(gl: any, program: any): GlProgramData;
export function generateShaderSyncCode(shader: any, shaderSystem: any): Function;
export function generateTextStyleKey(style: any): string;
export function generateTextureBatchBit(maxTextures: any): any;
export function generateTextureBatchBitGl(maxTextures: any): any;
export function generateUID(): number;
export function generateUniformsSync(group: any, uniformData: any): Function;
export function getAdjustedBlendModeBlend(blendMode: any, textureSource: any): any;
export function getAttributeInfoFromFormat(format: any): any;
export function getBatchSamplersUniformGroup(maxTextures: any): any;
export function getBitmapTextLayout(chars: any, style: any, font: any): {
    width: number;
    height: number;
    offsetY: number;
    scale: number;
    lines: {
        width: number;
        charPositions: any[];
        spaceWidth: number;
        spacesIndex: any[];
        chars: any[];
    }[];
};
export function getCanvasBoundingBox(canvas: any, resolution?: number): Rectangle;
export function getCanvasFillStyle(fillStyle: any, context: any): any;
export function getCanvasTexture(canvas: any, options: any): any;
export function getDefaultUniformValue(type: any, size: any): 0 | Float32Array;
export function getFastGlobalBounds(target: any, bounds: any): any;
export function getFontCss(fontFamilies: any, style: any, defaultOptions: any): Promise<string>;
export function getFontFamilyName(url: any): any;
export function getGeometryBounds(geometry: any, attributeId: any, bounds: any): any;
export function getGlTypeFromFormat(format: any): any;
export function getGlobalBounds(target: any, skipUpdateTransform: any, bounds: any): any;
export function getGlobalRenderableBounds(renderables: any, bounds: any): any;
export function getLocalBounds(target: any, bounds: any, relativeMatrix: any): any;
export function getMatrixRelativeToParent(target: any, root: any, matrix: any): any;
export function getMaxFragmentPrecision(): any;
export function getMaxTexturesPerBatch(): any;
export function getOrientationOfPoints(points: any): 1 | -1;
export function getParent(target: any, root: any, matrix: any): void;
export function getPo2TextureFromSource(image: any, width: any, height: any, resolution: any): any;
export function getResolutionOfUrl(url: any, defaultValue?: number): number;
export function getSVGUrl(text: any, style: any, resolution: any, fontCSS: any, htmlTextData: any): string;
export function getSupportedCompressedTextureFormats(): Promise<any>;
export function getSupportedGPUCompressedTextureFormats(): Promise<any>;
export function getSupportedGlCompressedTextureFormats(): any;
export function getSupportedTextureFormats(): Promise<any>;
export function getTemporaryCanvasFromImage(image: any, resolution: any): any;
export function getTestContext(): any;
export function getTextureBatchBindGroup(textures: any, size: any): any;
export function getTextureDefaultMatrix(texture: any, out: any): any;
export function getTextureFormatFromKTXTexture(ktxTexture: any): any;
export function getUboData(program: any, gl: any): {};
export function getUniformData(program: any, gl: any): {};
export function getUrlExtension(url: any): any;
export function glFormatToGPUFormat(glInternalFormat: any): any;
export namespace glUploadBufferImageResource {
    let id: string;
    function upload(source: any, glTexture: any, gl: any): void;
}
export namespace glUploadCompressedTextureResource {
    let id_1: string;
    export { id_1 as id };
    export function upload(source: any, glTexture: any, gl: any): void;
}
export namespace glUploadImageResource {
    let id_2: string;
    export { id_2 as id };
    export function upload(source: any, glTexture: any, gl: any, webGLVersion: any): void;
}
export namespace glUploadVideoResource {
    let id_3: string;
    export { id_3 as id };
    export function upload(source: any, glTexture: any, gl: any, webGLVersion: any): void;
}
export namespace globalUniformsBit {
    let name_66: string;
    export { name_66 as name };
    export namespace vertex_2 {
        let header_2: string;
        export { header_2 as header };
    }
    export { vertex_2 as vertex };
}
export namespace globalUniformsBitGl {
    let name_67: string;
    export { name_67 as name };
    export namespace vertex_3 {
        let header_3: string;
        export { header_3 as header };
    }
    export { vertex_3 as vertex };
}
export namespace globalUniformsUBOBitGl {
    let name_68: string;
    export { name_68 as name };
    export namespace vertex_4 {
        let header_4: string;
        export { header_4 as header };
    }
    export { vertex_4 as vertex };
}
export function gpuFormatToBasisTranscoderFormat(transcoderFormat: any): any;
export function gpuFormatToKTXBasisTranscoderFormat(transcoderFormat: any): any;
export namespace gpuUploadBufferImageResource {
    let type_71: string;
    export { type_71 as type };
    export function upload(source: any, gpuTexture: any, gpu: any): void;
}
export namespace gpuUploadCompressedTextureResource {
    let type_72: string;
    export { type_72 as type };
    export function upload(source: any, gpuTexture: any, gpu: any): void;
}
export namespace gpuUploadImageResource {
    let type_73: string;
    export { type_73 as type };
    export function upload(source: any, gpuTexture: any, gpu: any): void;
}
export namespace gpuUploadVideoResource {
    let type_74: string;
    export { type_74 as type };
    export function upload(source: any, gpuTexture: any, gpu: any): void;
}
export namespace groupD8 {
    export let E: number;
    export let SE: number;
    export let S: number;
    export let SW: number;
    export let W: number;
    export let NW: number;
    export let N: number;
    export let NE: number;
    export let MIRROR_VERTICAL: number;
    export let MAIN_DIAGONAL: number;
    export let MIRROR_HORIZONTAL: number;
    export let REVERSE_DIAGONAL: number;
    export function uX(ind: GD8Symmetry): GD8Symmetry;
    export function uY(ind: GD8Symmetry): GD8Symmetry;
    export function vX(ind: GD8Symmetry): GD8Symmetry;
    export function vY(ind: GD8Symmetry): GD8Symmetry;
    export function inv(rotation: GD8Symmetry): GD8Symmetry;
    export function add_9(rotationSecond: GD8Symmetry, rotationFirst: GD8Symmetry): GD8Symmetry;
    export { add_9 as add };
    export function sub(rotationSecond: GD8Symmetry, rotationFirst: GD8Symmetry): GD8Symmetry;
    export function rotate180(rotation: number): number;
    export function isVertical(rotation: GD8Symmetry): boolean;
    export function byDirection(dx: number, dy: number): GD8Symmetry;
    export function matrixAppendRotationInv(matrix: Matrix, rotation: GD8Symmetry, tx?: number, ty?: number): void;
}
export function hasCachedCanvasTexture(canvas: any): boolean;
declare var hsl: string;
export const hslgl: "\n\tfloat getLuminosity(vec3 c) {\n\t\treturn 0.3 * c.r + 0.59 * c.g + 0.11 * c.b;\n\t}\n\n\tvec3 setLuminosity(vec3 c, float lum) {\n\t\tfloat modLum = lum - getLuminosity(c);\n\t\tvec3 color = c.rgb + vec3(modLum);\n\n\t\t// clip back into legal range\n\t\tmodLum = getLuminosity(color);\n\t\tvec3 modLumVec = vec3(modLum);\n\n\t\tfloat cMin = min(color.r, min(color.g, color.b));\n\t\tfloat cMax = max(color.r, max(color.g, color.b));\n\n\t\tif(cMin < 0.0) {\n\t\t\tcolor = mix(modLumVec, color, modLum / (modLum - cMin));\n\t\t}\n\n\t\tif(cMax > 1.0) {\n\t\t\tcolor = mix(modLumVec, color, (1.0 - modLum) / (cMax - modLum));\n\t\t}\n\n\t\treturn color;\n\t}\n\n\tfloat getSaturation(vec3 c) {\n\t\treturn max(c.r, max(c.g, c.b)) - min(c.r, min(c.g, c.b));\n\t}\n\n\tvec3 setSaturationMinMidMax(vec3 cSorted, float s) {\n\t\tvec3 colorSorted = cSorted;\n\n\t\tif(colorSorted.z > colorSorted.x) {\n\t\t\tcolorSorted.y = (((colorSorted.y - colorSorted.x) * s) / (colorSorted.z - colorSorted.x));\n\t\t\tcolorSorted.z = s;\n\t\t}\n\t\telse {\n\t\t\tcolorSorted.y = 0.0;\n\t\t\tcolorSorted.z = 0.0;\n\t\t}\n\n\t\tcolorSorted.x = 0.0;\n\n\t\treturn colorSorted;\n\t}\n\n\tvec3 setSaturation(vec3 c, float s) {\n\t\tvec3 color = c;\n\n\t\tif(color.r <= color.g && color.r <= color.b) {\n\t\t\tif(color.g <= color.b) {\n\t\t\t\tcolor = setSaturationMinMidMax(color.rgb, s).rgb;\n\t\t\t}\n\t\t\telse {\n\t\t\t\tcolor = setSaturationMinMidMax(color.rbg, s).rbg;\n\t\t\t}\n\t\t}\n\t\telse if(color.g <= color.r && color.g <= color.b) {\n\t\t\tif(color.r <= color.b) {\n\t\t\t\tcolor = setSaturationMinMidMax(color.grb, s).grb;\n\t\t\t}\n\t\t\telse {\n\t\t\t\tcolor = setSaturationMinMidMax(color.gbr, s).gbr;\n\t\t\t}\n\t\t}\n\t\telse {\n\t\t\t// Using bgr for both fixes part of hue\n\t\t\tif(color.r <= color.g) {\n\t\t\t\tcolor = setSaturationMinMidMax(color.brg, s).brg;\n\t\t\t}\n\t\t\telse {\n\t\t\t\tcolor = setSaturationMinMidMax(color.bgr, s).bgr;\n\t\t\t}\n\t\t}\n\n\t\treturn color;\n\t}\n    ";
export const hslgpu: "\n\tfn getLuminosity(c: vec3<f32>) -> f32\n\t{\n\t\treturn 0.3*c.r + 0.59*c.g + 0.11*c.b;\n\t}\n\n\tfn setLuminosity(c: vec3<f32>, lum: f32) -> vec3<f32>\n\t{\n\t\tvar modLum: f32 = lum - getLuminosity(c);\n\t\tvar color: vec3<f32> = c.rgb + modLum;\n\n\t\t// clip back into legal range\n\t\tmodLum = getLuminosity(color);\n\t\tlet modLumVec = vec3<f32>(modLum);\n\n\t\tlet cMin: f32 = min(color.r, min(color.g, color.b));\n\t\tlet cMax: f32 = max(color.r, max(color.g, color.b));\n\n\t\tif(cMin < 0.0)\n\t\t{\n\t\t\tcolor = mix(modLumVec, color, modLum / (modLum - cMin));\n\t\t}\n\n\t\tif(cMax > 1.0)\n\t\t{\n\t\t\tcolor = mix(modLumVec, color, (1 - modLum) / (cMax - modLum));\n\t\t}\n\n\t\treturn color;\n\t}\n\n\tfn getSaturation(c: vec3<f32>) -> f32\n\t{\n\t\treturn max(c.r, max(c.g, c.b)) - min(c.r, min(c.g, c.b));\n\t}\n\n\tfn setSaturationMinMidMax(cSorted: vec3<f32>, s: f32) -> vec3<f32>\n\t{\n\t\tvar colorSorted = cSorted;\n\n\t\tif(colorSorted.z > colorSorted.x)\n\t\t{\n\t\t\tcolorSorted.y = (((colorSorted.y - colorSorted.x) * s) / (colorSorted.z - colorSorted.x));\n\t\t\tcolorSorted.z = s;\n\t\t}\n\t\telse\n\t\t{\n\t\t\tcolorSorted.y = 0;\n\t\t\tcolorSorted.z = 0;\n\t\t}\n\n\t\tcolorSorted.x = 0;\n\n\t\treturn colorSorted;\n\t}\n\n\tfn setSaturation(c: vec3<f32>, s: f32) -> vec3<f32>\n\t{\n\t\tvar color = c;\n\n\t\tif (color.r <= color.g && color.r <= color.b)\n\t\t{\n\t\t\tif (color.g <= color.b)\n\t\t\t{\n\t\t\t\tcolor = vec3<f32>(setSaturationMinMidMax(color.rgb, s)).rgb;\n\t\t\t}\n\t\t\telse\n\t\t\t{\n\t\t\t\tcolor = vec3<f32>(setSaturationMinMidMax(color.rbg, s)).rbg;\n\t\t\t}\n\t\t}\n\t\telse if (color.g <= color.r && color.g <= color.b)\n\t\t{\n\t\t\tif (color.r <= color.b)\n\t\t\t{\n\t\t\t\tcolor = vec3<f32>(setSaturationMinMidMax(color.grb, s)).grb;\n\t\t\t}\n\t\t\telse\n\t\t\t{\n\t\t\t\tcolor = vec3<f32>(setSaturationMinMidMax(color.gbr, s)).gbr;\n\t\t\t}\n\t\t}\n\t\telse\n\t\t{\n\t\t\t// Using bgr for both fixes part of hue\n\t\t\tif (color.r <= color.g)\n\t\t\t{\n\t\t\t\tcolor = vec3<f32>(setSaturationMinMidMax(color.brg, s)).brg;\n\t\t\t}\n\t\t\telse\n\t\t\t{\n\t\t\t\tcolor  = vec3<f32>(setSaturationMinMidMax(color.bgr, s)).bgr;\n\t\t\t}\n\t\t}\n\n\t\treturn color;\n\t}\n\t";
export function injectBits(templateSrc: any, fragmentParts: any): any;
export function insertVersion(src: any, isES300: any): any;
export const isMobile: any;
export function isPow2(v: any): boolean;
export function isRenderingToScreen(renderTarget: any): boolean;
export function isSafari(): boolean;
export function isSingleItem(item: any): boolean;
export function isWebGLSupported(failIfMajorPerformanceCaveat: any): any;
export function isWebGPUSupported(options?: {}): Promise<any>;
export namespace ktxTranscoderUrls {
    let jsUrl_1: string;
    export { jsUrl_1 as jsUrl };
    let wasmUrl_1: string;
    export { wasmUrl_1 as wasmUrl };
}
export namespace loadBasis {
    export namespace extension_80 {
        let type_75: any;
        export { type_75 as type };
        let priority_13: any;
        export { priority_13 as priority };
        let name_69: string;
        export { name_69 as name };
    }
    export { extension_80 as extension };
    let name_70: string;
    export { name_70 as name };
    export function test(url: any): boolean;
    export function load(url: any, _asset: any, loader: any): Promise<Texture>;
    export function unload(texture: any): void;
}
export function loadBasisOnWorker(url: any, supportedTextures: any): Promise<any>;
export namespace loadBitmapFont {
    export namespace extension_81 {
        let type_76: any;
        export { type_76 as type };
        let priority_14: any;
        export { priority_14 as priority };
    }
    export { extension_81 as extension };
    let name_71: string;
    export { name_71 as name };
    export function test(url: any): boolean;
    export function testParse(data: any): Promise<boolean>;
    export function parse(asset: any, data: any, loader: any): Promise<BitmapFont>;
    export function load(url: any, _options: any): Promise<any>;
    export function unload(bitmapFont: any, _resolvedAsset: any, loader: any): Promise<void>;
}
export namespace loadDDS {
    export namespace extension_82 {
        let type_77: any;
        export { type_77 as type };
        let priority_15: any;
        export { priority_15 as priority };
        let name_72: string;
        export { name_72 as name };
    }
    export { extension_82 as extension };
    let name_73: string;
    export { name_73 as name };
    export function test(url: any): boolean;
    export function load(url: any, _asset: any, loader: any): Promise<Texture>;
    export function unload(texture: any): void;
}
export function loadEnvironmentExtensions(skip: any): Promise<void>;
export function loadFontAsBase64(url: any): Promise<any>;
export function loadFontCSS(style: any, url: any): Promise<string>;
export function loadImageBitmap(url: any): Promise<ImageBitmap>;
export namespace loadJson {
    export namespace extension_83 {
        let type_78: any;
        export { type_78 as type };
        let priority_16: any;
        export { priority_16 as priority };
    }
    export { extension_83 as extension };
    let name_74: string;
    export { name_74 as name };
    export function test(url: any): any;
    export function load(url: any): Promise<any>;
}
export namespace loadKTX {
    export namespace extension_84 {
        let type_79: any;
        export { type_79 as type };
        let priority_17: any;
        export { priority_17 as priority };
        let name_75: string;
        export { name_75 as name };
    }
    export { extension_84 as extension };
    let name_76: string;
    export { name_76 as name };
    export function test(url: any): boolean;
    export function load(url: any, _asset: any, loader: any): Promise<Texture>;
    export function unload(texture: any): void;
}
export namespace loadKTX2 {
    export namespace extension_85 {
        let type_80: any;
        export { type_80 as type };
        let priority_18: any;
        export { priority_18 as priority };
        let name_77: string;
        export { name_77 as name };
    }
    export { extension_85 as extension };
    let name_78: string;
    export { name_78 as name };
    export function test(url: any): boolean;
    export function load(url: any, _asset: any, loader: any): Promise<Texture>;
    export function unload(texture: any): Promise<void>;
}
export function loadKTX2onWorker(url: any, supportedTextures: any): Promise<any>;
export function loadSVGImage(image: any, url: any, delay: any): Promise<any>;
export namespace loadSvg {
    export namespace extension_86 {
        let type_81: any;
        export { type_81 as type };
        let priority_19: any;
        export { priority_19 as priority };
        let name_79: string;
        export { name_79 as name };
    }
    export { extension_86 as extension };
    let name_80: string;
    export { name_80 as name };
    export namespace config {
        let crossOrigin: string;
        let parseAsGraphicsContext: boolean;
    }
    export function test(url: any): any;
    export function load(url: any, asset: any, loader: any): Promise<Texture | {
        [x: string]: any;
        /** unique id for this graphics context */
        uid: number;
        dirty: boolean;
        batchMode: string;
        instructions: any[];
        _activePath: GraphicsPath;
        _transform: Matrix;
        _fillStyle: any;
        _strokeStyle: any;
        _stateStack: any[];
        _tick: number;
        _bounds: Bounds;
        _boundsDirty: boolean;
        /**
         * Creates a new GraphicsContext object that is a clone of this instance, copying all properties,
         * including the current drawing state, transformations, styles, and instructions.
         * @returns A new GraphicsContext instance with the same properties and state as this one.
         */
        clone(): any;
        /**
         * The current fill style of the graphics context. This can be a color, gradient, pattern, or a more complex style defined by a FillStyle object.
         */
        fillStyle: any;
        /**
         * The current stroke style of the graphics context. Similar to fill styles, stroke styles can encompass colors, gradients, patterns, or more detailed configurations via a StrokeStyle object.
         */
        strokeStyle: any;
        /**
         * Sets the current fill style of the graphics context. The fill style can be a color, gradient,
         * pattern, or a more complex style defined by a FillStyle object.
         * @param style - The fill style to apply. This can be a simple color, a gradient or pattern object,
         *                or a FillStyle or ConvertedFillStyle object.
         * @returns The instance of the current GraphicsContext for method chaining.
         */
        setFillStyle(style: any): any;
        /**
         * Sets the current stroke style of the graphics context. Similar to fill styles, stroke styles can
         * encompass colors, gradients, patterns, or more detailed configurations via a StrokeStyle object.
         * @param style - The stroke style to apply. Can be defined as a color, a gradient or pattern,
         *                or a StrokeStyle or ConvertedStrokeStyle object.
         * @returns The instance of the current GraphicsContext for method chaining.
         */
        setStrokeStyle(style: any): any;
        texture(texture: any, tint: any, dx: any, dy: any, dw: any, dh: any): any;
        /**
         * Resets the current path. Any previous path and its commands are discarded and a new path is
         * started. This is typically called before beginning a new shape or series of drawing commands.
         * @returns The instance of the current GraphicsContext for method chaining.
         */
        beginPath(): any;
        fill(style: any, alpha: any): any;
        _initNextPathLocation(): void;
        /**
         * Strokes the current path with the current stroke style. This method can take an optional
         * FillInput parameter to define the stroke's appearance, including its color, width, and other properties.
         * @param style - (Optional) The stroke style to apply. Can be defined as a simple color or a more complex style object. If omitted, uses the current stroke style.
         * @returns The instance of the current GraphicsContext for method chaining.
         */
        stroke(style: any): any;
        /**
         * Applies a cutout to the last drawn shape. This is used to create holes or complex shapes by
         * subtracting a path from the previously drawn path. If a hole is not completely in a shape, it will
         * fail to cut correctly!
         * @returns The instance of the current GraphicsContext for method chaining.
         */
        cut(): any;
        /**
         * Adds an arc to the current path, which is centered at (x, y) with the specified radius,
         * starting and ending angles, and direction.
         * @param x - The x-coordinate of the arc's center.
         * @param y - The y-coordinate of the arc's center.
         * @param radius - The arc's radius.
         * @param startAngle - The starting angle, in radians.
         * @param endAngle - The ending angle, in radians.
         * @param counterclockwise - (Optional) Specifies whether the arc is drawn counterclockwise (true) or clockwise (false). Defaults to false.
         * @returns The instance of the current GraphicsContext for method chaining.
         */
        arc(x: any, y: any, radius: any, startAngle: any, endAngle: any, counterclockwise: any): any;
        /**
         * Adds an arc to the current path with the given control points and radius, connected to the previous point
         * by a straight line if necessary.
         * @param x1 - The x-coordinate of the first control point.
         * @param y1 - The y-coordinate of the first control point.
         * @param x2 - The x-coordinate of the second control point.
         * @param y2 - The y-coordinate of the second control point.
         * @param radius - The arc's radius.
         * @returns The instance of the current GraphicsContext for method chaining.
         */
        arcTo(x1: any, y1: any, x2: any, y2: any, radius: any): any;
        /**
         * Adds an SVG-style arc to the path, allowing for elliptical arcs based on the SVG spec.
         * @param rx - The x-radius of the ellipse.
         * @param ry - The y-radius of the ellipse.
         * @param xAxisRotation - The rotation of the ellipse's x-axis relative
         * to the x-axis of the coordinate system, in degrees.
         * @param largeArcFlag - Determines if the arc should be greater than or less than 180 degrees.
         * @param sweepFlag - Determines if the arc should be swept in a positive angle direction.
         * @param x - The x-coordinate of the arc's end point.
         * @param y - The y-coordinate of the arc's end point.
         * @returns The instance of the current object for chaining.
         */
        arcToSvg(rx: any, ry: any, xAxisRotation: any, largeArcFlag: any, sweepFlag: any, x: any, y: any): any;
        /**
         * Adds a cubic Bezier curve to the path.
         * It requires three points: the first two are control points and the third one is the end point.
         * The starting point is the last point in the current path.
         * @param cp1x - The x-coordinate of the first control point.
         * @param cp1y - The y-coordinate of the first control point.
         * @param cp2x - The x-coordinate of the second control point.
         * @param cp2y - The y-coordinate of the second control point.
         * @param x - The x-coordinate of the end point.
         * @param y - The y-coordinate of the end point.
         * @param smoothness - Optional parameter to adjust the smoothness of the curve.
         * @returns The instance of the current object for chaining.
         */
        bezierCurveTo(cp1x: any, cp1y: any, cp2x: any, cp2y: any, x: any, y: any, smoothness: any): any;
        /**
         * Closes the current path by drawing a straight line back to the start.
         * If the shape is already closed or there are no points in the path, this method does nothing.
         * @returns The instance of the current object for chaining.
         */
        closePath(): any;
        /**
         * Draws an ellipse at the specified location and with the given x and y radii.
         * An optional transformation can be applied, allowing for rotation, scaling, and translation.
         * @param x - The x-coordinate of the center of the ellipse.
         * @param y - The y-coordinate of the center of the ellipse.
         * @param radiusX - The horizontal radius of the ellipse.
         * @param radiusY - The vertical radius of the ellipse.
         * @returns The instance of the current object for chaining.
         */
        ellipse(x: any, y: any, radiusX: any, radiusY: any): any;
        /**
         * Draws a circle shape. This method adds a new circle path to the current drawing.
         * @param x - The x-coordinate of the center of the circle.
         * @param y - The y-coordinate of the center of the circle.
         * @param radius - The radius of the circle.
         * @returns The instance of the current object for chaining.
         */
        circle(x: any, y: any, radius: any): any;
        /**
         * Adds another `GraphicsPath` to this path, optionally applying a transformation.
         * @param path - The `GraphicsPath` to add.
         * @returns The instance of the current object for chaining.
         */
        path(path: any): any;
        /**
         * Connects the current point to a new point with a straight line. This method updates the current path.
         * @param x - The x-coordinate of the new point to connect to.
         * @param y - The y-coordinate of the new point to connect to.
         * @returns The instance of the current object for chaining.
         */
        lineTo(x: any, y: any): any;
        /**
         * Sets the starting point for a new sub-path. Any subsequent drawing commands are considered part of this path.
         * @param x - The x-coordinate for the starting point.
         * @param y - The y-coordinate for the starting point.
         * @returns The instance of the current object for chaining.
         */
        moveTo(x: any, y: any): any;
        /**
         * Adds a quadratic curve to the path. It requires two points: the control point and the end point.
         * The starting point is the last point in the current path.
         * @param cpx - The x-coordinate of the control point.
         * @param cpy - The y-coordinate of the control point.
         * @param x - The x-coordinate of the end point.
         * @param y - The y-coordinate of the end point.
         * @param smoothness - Optional parameter to adjust the smoothness of the curve.
         * @returns The instance of the current object for chaining.
         */
        quadraticCurveTo(cpx: any, cpy: any, x: any, y: any, smoothness: any): any;
        /**
         * Draws a rectangle shape. This method adds a new rectangle path to the current drawing.
         * @param x - The x-coordinate of the top-left corner of the rectangle.
         * @param y - The y-coordinate of the top-left corner of the rectangle.
         * @param w - The width of the rectangle.
         * @param h - The height of the rectangle.
         * @returns The instance of the current object for chaining.
         */
        rect(x: any, y: any, w: any, h: any): any;
        /**
         * Draws a rectangle with rounded corners.
         * The corner radius can be specified to determine how rounded the corners should be.
         * An optional transformation can be applied, which allows for rotation, scaling, and translation of the rectangle.
         * @param x - The x-coordinate of the top-left corner of the rectangle.
         * @param y - The y-coordinate of the top-left corner of the rectangle.
         * @param w - The width of the rectangle.
         * @param h - The height of the rectangle.
         * @param radius - The radius of the rectangle's corners. If not specified, corners will be sharp.
         * @returns The instance of the current object for chaining.
         */
        roundRect(x: any, y: any, w: any, h: any, radius: any): any;
        /**
         * Draws a polygon shape by specifying a sequence of points. This method allows for the creation of complex polygons,
         * which can be both open and closed. An optional transformation can be applied, enabling the polygon to be scaled,
         * rotated, or translated as needed.
         * @param points - An array of numbers, or an array of PointData objects eg [{x,y}, {x,y}, {x,y}]
         * representing the x and y coordinates, of the polygon's vertices, in sequence.
         * @param close - A boolean indicating whether to close the polygon path. True by default.
         */
        poly(points: any, close: any): any;
        /**
         * Draws a regular polygon with a specified number of sides. All sides and angles are equal.
         * @param x - The x-coordinate of the center of the polygon.
         * @param y - The y-coordinate of the center of the polygon.
         * @param radius - The radius of the circumscribed circle of the polygon.
         * @param sides - The number of sides of the polygon. Must be 3 or more.
         * @param rotation - The rotation angle of the polygon, in radians. Zero by default.
         * @param transform - An optional `Matrix` object to apply a transformation to the polygon.
         * @returns The instance of the current object for chaining.
         */
        regularPoly(x: any, y: any, radius: any, sides: any, rotation: number, transform: any): any;
        /**
         * Draws a polygon with rounded corners.
         * Similar to `regularPoly` but with the ability to round the corners of the polygon.
         * @param x - The x-coordinate of the center of the polygon.
         * @param y - The y-coordinate of the center of the polygon.
         * @param radius - The radius of the circumscribed circle of the polygon.
         * @param sides - The number of sides of the polygon. Must be 3 or more.
         * @param corner - The radius of the rounding of the corners.
         * @param rotation - The rotation angle of the polygon, in radians. Zero by default.
         * @returns The instance of the current object for chaining.
         */
        roundPoly(x: any, y: any, radius: any, sides: any, corner: any, rotation: any): any;
        /**
         * Draws a shape with rounded corners. This function supports custom radius for each corner of the shape.
         * Optionally, corners can be rounded using a quadratic curve instead of an arc, providing a different aesthetic.
         * @param points - An array of `RoundedPoint` representing the corners of the shape to draw.
         * A minimum of 3 points is required.
         * @param radius - The default radius for the corners.
         * This radius is applied to all corners unless overridden in `points`.
         * @param useQuadratic - If set to true, rounded corners are drawn using a quadraticCurve
         *  method instead of an arc method. Defaults to false.
         * @param smoothness - Specifies the smoothness of the curve when `useQuadratic` is true.
         * Higher values make the curve smoother.
         * @returns The instance of the current object for chaining.
         */
        roundShape(points: any, radius: any, useQuadratic: any, smoothness: any): any;
        /**
         * Draw Rectangle with fillet corners. This is much like rounded rectangle
         * however it support negative numbers as well for the corner radius.
         * @param x - Upper left corner of rect
         * @param y - Upper right corner of rect
         * @param width - Width of rect
         * @param height - Height of rect
         * @param fillet - accept negative or positive values
         */
        filletRect(x: any, y: any, width: any, height: any, fillet: any): any;
        /**
         * Draw Rectangle with chamfer corners. These are angled corners.
         * @param x - Upper left corner of rect
         * @param y - Upper right corner of rect
         * @param width - Width of rect
         * @param height - Height of rect
         * @param chamfer - non-zero real number, size of corner cutout
         * @param transform
         */
        chamferRect(x: any, y: any, width: any, height: any, chamfer: any, transform: any): any;
        /**
         * Draws a star shape centered at a specified location. This method allows for the creation
         *  of stars with a variable number of points, outer radius, optional inner radius, and rotation.
         * The star is drawn as a closed polygon with alternating outer and inner vertices to create the star's points.
         * An optional transformation can be applied to scale, rotate, or translate the star as needed.
         * @param x - The x-coordinate of the center of the star.
         * @param y - The y-coordinate of the center of the star.
         * @param points - The number of points of the star.
         * @param radius - The outer radius of the star (distance from the center to the outer points).
         * @param innerRadius - Optional. The inner radius of the star
         * (distance from the center to the inner points between the outer points).
         * If not provided, defaults to half of the `radius`.
         * @param rotation - Optional. The rotation of the star in radians, where 0 is aligned with the y-axis.
         * Defaults to 0, meaning one point is directly upward.
         * @returns The instance of the current object for chaining further drawing commands.
         */
        star(x: any, y: any, points: any, radius: any, innerRadius?: number, rotation?: number): any;
        /**
         * Parses and renders an SVG string into the graphics context. This allows for complex shapes and paths
         * defined in SVG format to be drawn within the graphics context.
         * @param svg - The SVG string to be parsed and rendered.
         */
        svg(svg: any): any;
        /**
         * Restores the most recently saved graphics state by popping the top of the graphics state stack.
         * This includes transformations, fill styles, and stroke styles.
         */
        restore(): any;
        /** Saves the current graphics state, including transformations, fill styles, and stroke styles, onto a stack. */
        save(): any;
        /**
         * Returns the current transformation matrix of the graphics context.
         * @returns The current transformation matrix.
         */
        getTransform(): Matrix;
        /**
         * Resets the current transformation matrix to the identity matrix, effectively removing any transformations (rotation, scaling, translation) previously applied.
         * @returns The instance of the current GraphicsContext for method chaining.
         */
        resetTransform(): any;
        /**
         * Applies a rotation transformation to the graphics context around the current origin.
         * @param angle - The angle of rotation in radians.
         * @returns The instance of the current GraphicsContext for method chaining.
         */
        rotate(angle: any): any;
        /**
         * Applies a scaling transformation to the graphics context, scaling drawings by x horizontally and by y vertically.
         * @param x - The scale factor in the horizontal direction.
         * @param y - (Optional) The scale factor in the vertical direction. If not specified, the x value is used for both directions.
         * @returns The instance of the current GraphicsContext for method chaining.
         */
        scale(x: any, y?: any): any;
        setTransform(a: any, b: any, c: any, d: any, dx: any, dy: any): any;
        transform(a: any, b: any, c: any, d: any, dx: any, dy: any): any;
        /**
         * Applies a translation transformation to the graphics context, moving the origin by the specified amounts.
         * @param x - The amount to translate in the horizontal direction.
         * @param y - (Optional) The amount to translate in the vertical direction. If not specified, the x value is used for both directions.
         * @returns The instance of the current GraphicsContext for method chaining.
         */
        translate(x: any, y?: any): any;
        /**
         * Clears all drawing commands from the graphics context, effectively resetting it. This includes clearing the path,
         * and optionally resetting transformations to the identity matrix.
         * @returns The instance of the current GraphicsContext for method chaining.
         */
        clear(): any;
        onUpdate(): void;
        /** The bounds of the graphic shape. */
        readonly bounds: Bounds;
        /**
         * Check to see if a point is contained within this geometry.
         * @param point - Point to check if it's contained.
         * @returns {boolean} `true` if the point is contained within geometry.
         */
        containsPoint(point: any): boolean;
        /**
         * Destroys the GraphicsData object.
         * @param options - Options parameter. A boolean will act as if all options
         *  have been set to that value
         * @param {boolean} [options.texture=false] - Should it destroy the current texture of the fill/stroke style?
         * @param {boolean} [options.textureSource=false] - Should it destroy the texture source of the fill/stroke style?
         */
        destroy(options?: boolean): void;
        customShader: any;
    }>;
    export function unload(asset: any): void;
}
export namespace loadTextures {
    let name_81: string;
    export { name_81 as name };
    export namespace extension_87 {
        let type_82: any;
        export { type_82 as type };
        let priority_20: any;
        export { priority_20 as priority };
        let name_82: string;
        export { name_82 as name };
    }
    export { extension_87 as extension };
    export namespace config_1 {
        export let preferWorkers: boolean;
        export let preferCreateImageBitmap: boolean;
        let crossOrigin_1: string;
        export { crossOrigin_1 as crossOrigin };
    }
    export { config_1 as config };
    export function test(url: any): any;
    export function load(url: any, asset: any, loader: any): Promise<Texture>;
    export function unload(texture: any): void;
}
export namespace loadTxt {
    let name_83: string;
    export { name_83 as name };
    export namespace extension_88 {
        let type_83: any;
        export { type_83 as type };
        let priority_21: any;
        export { priority_21 as priority };
        let name_84: string;
        export { name_84 as name };
    }
    export { extension_88 as extension };
    export function test(url: any): any;
    export function load(url: any): Promise<any>;
}
export namespace loadVideoTextures {
    let name_85: string;
    export { name_85 as name };
    export namespace extension_89 {
        let type_84: any;
        export { type_84 as type };
        let name_86: string;
        export { name_86 as name };
    }
    export { extension_89 as extension };
    export function test(url: any): any;
    export function load(url: any, asset: any, loader: any): Promise<any>;
    export function unload(texture: any): void;
}
export namespace loadWebFont {
    export namespace extension_90 {
        let type_85: any;
        export { type_85 as type };
        let priority_22: any;
        export { priority_22 as priority };
    }
    export { extension_90 as extension };
    let name_87: string;
    export { name_87 as name };
    export function test(url: any): any;
    export function load(url: any, options: any): Promise<FontFace | FontFace[]>;
    export function unload(font: any): void;
}
export namespace localUniformBit {
    let name_88: string;
    export { name_88 as name };
    export namespace vertex_5 {
        let header_5: string;
        export { header_5 as header };
        let main_2: string;
        export { main_2 as main };
        export let end: string;
    }
    export { vertex_5 as vertex };
}
export namespace localUniformBitGl {
    let name_89: string;
    export { name_89 as name };
    export namespace vertex_6 {
        let header_6: string;
        export { header_6 as header };
        let main_3: string;
        export { main_3 as main };
        let end_1: string;
        export { end_1 as end };
    }
    export { vertex_6 as vertex };
}
export const localUniformBitGroup2: any;
export namespace localUniformMSDFBit {
    let name_90: string;
    export { name_90 as name };
    export namespace vertex_7 {
        let header_7: string;
        export { header_7 as header };
        let main_4: string;
        export { main_4 as main };
        let end_2: string;
        export { end_2 as end };
    }
    export { vertex_7 as vertex };
    export namespace fragment {
        let header_8: string;
        export { header_8 as header };
        let main_5: string;
        export { main_5 as main };
    }
}
export namespace localUniformMSDFBitGl {
    let name_91: string;
    export { name_91 as name };
    export namespace vertex_8 {
        let header_9: string;
        export { header_9 as header };
        let main_6: string;
        export { main_6 as main };
        let end_3: string;
        export { end_3 as end };
    }
    export { vertex_8 as vertex };
    export namespace fragment_1 {
        let header_10: string;
        export { header_10 as header };
        let main_7: string;
        export { main_7 as main };
    }
    export { fragment_1 as fragment };
}
export function log2(v: any): number;
export function logDebugTexture(texture: any, renderer: any, size?: number): Promise<void>;
export function logProgramError(gl: any, program: any, vertexShader: any, fragmentShader: any): void;
export function logRenderGroupScene(renderGroup: any, depth?: number, data?: {
    index: number;
    color: string;
}): void;
export function logScene(container: any, depth?: number, data?: {
    color: string;
}): void;
export namespace mSDFBit {
    let name_92: string;
    export { name_92 as name };
    export namespace fragment_2 {
        let header_11: string;
        export { header_11 as header };
    }
    export { fragment_2 as fragment };
}
export namespace mSDFBitGl {
    let name_93: string;
    export { name_93 as name };
    export namespace fragment_3 {
        let header_12: string;
        export { header_12 as header };
    }
    export { fragment_3 as fragment };
}
export function mapFormatToGlFormat(gl: any): {
    r8unorm: any;
    r8snorm: any;
    r8uint: any;
    r8sint: any;
    r16uint: any;
    r16sint: any;
    r16float: any;
    rg8unorm: any;
    rg8snorm: any;
    rg8uint: any;
    rg8sint: any;
    r32uint: any;
    r32sint: any;
    r32float: any;
    rg16uint: any;
    rg16sint: any;
    rg16float: any;
    rgba8unorm: any;
    "rgba8unorm-srgb": any;
    rgba8snorm: any;
    rgba8uint: any;
    rgba8sint: any;
    bgra8unorm: any;
    "bgra8unorm-srgb": any;
    rgb9e5ufloat: any;
    rgb10a2unorm: any;
    rg11b10ufloat: any;
    rg32uint: any;
    rg32sint: any;
    rg32float: any;
    rgba16uint: any;
    rgba16sint: any;
    rgba16float: any;
    rgba32uint: any;
    rgba32sint: any;
    rgba32float: any;
    stencil8: any;
    depth16unorm: any;
    depth24plus: any;
    "depth24plus-stencil8": any;
    depth32float: any;
    "depth32float-stencil8": any;
};
export function mapFormatToGlInternalFormat(gl: any, extensions: any): any;
export function mapFormatToGlType(gl: any): {
    r8unorm: any;
    r8snorm: any;
    r8uint: any;
    r8sint: any;
    r16uint: any;
    r16sint: any;
    r16float: any;
    rg8unorm: any;
    rg8snorm: any;
    rg8uint: any;
    rg8sint: any;
    r32uint: any;
    r32sint: any;
    r32float: any;
    rg16uint: any;
    rg16sint: any;
    rg16float: any;
    rgba8unorm: any;
    "rgba8unorm-srgb": any;
    rgba8snorm: any;
    rgba8uint: any;
    rgba8sint: any;
    bgra8unorm: any;
    "bgra8unorm-srgb": any;
    rgb9e5ufloat: any;
    rgb10a2unorm: any;
    rg11b10ufloat: any;
    rg32uint: any;
    rg32sint: any;
    rg32float: any;
    rgba16uint: any;
    rgba16sint: any;
    rgba16float: any;
    rgba32uint: any;
    rgba32sint: any;
    rgba32float: any;
    stencil8: any;
    depth16unorm: any;
    depth24plus: any;
    "depth24plus-stencil8": any;
    depth32float: any;
    "depth32float-stencil8": any;
};
export function mapGlToVertexFormat(gl: any, type: any): any;
export function mapSize(type: any): any;
export function mapType(gl: any, type: any): any;
export function mapWebGLBlendModesToPixi(gl: any): {
    normal: any[];
    add: any[];
    multiply: any[];
    screen: any[];
    none: number[];
    "normal-npm": any[];
    "add-npm": any[];
    "screen-npm": any[];
    erase: any[];
};
declare var fragment: string;
declare var vertex: string;
declare var source: string;
export const matrixPool: Pool;
export function measureHtmlText(text: any, style: any, fontStyleCSS: any, htmlTextRenderData: any): {
    width: any;
    height: any;
};
export namespace measureMixin {
    let _localBoundsCacheId: number;
    let _localBoundsCacheData: any;
    function _setWidth(value: any, localWidth: any): void;
    function _setHeight(value: any, localHeight: any): void;
    /**
     * Retrieves the local bounds of the container as a Bounds object.
     * @returns - The bounding area.
     * @memberof scene.Container#
     */
    function getLocalBounds(): any;
    /**
     * Calculates and returns the (world) bounds of the display object as a [Rectangle]{@link Rectangle}.
     * @param skipUpdate - Setting to `true` will stop the transforms of the scene graph from
     *  being updated. This means the calculation returned MAY be out of date BUT will give you a
     *  nice performance boost.
     * @param bounds - Optional bounds to store the result of the bounds calculation.
     * @returns - The minimum axis-aligned rectangle in world space that fits around this object.
     * @memberof scene.Container#
     */
    function getBounds(skipUpdate: any, bounds: any): any;
}
export function migrateFragmentFromV7toV8(fragmentShader: any): any;
export namespace mipmapScaleModeToGlFilter {
    export namespace linear {
        let linear_1: number;
        export { linear_1 as linear };
        export let nearest: number;
    }
    export namespace nearest_1 {
        let linear_2: number;
        export { linear_2 as linear };
        let nearest_2: number;
        export { nearest_2 as nearest };
    }
    export { nearest_1 as nearest };
}
export function mixColors(localBGRColor: any, parentBGRColor: any): number;
export function mixHexColors(color1: any, color2: any, ratio: any): number;
export function mixStandardAnd32BitColors(localColorRGB: any, localAlpha: any, parentColor: any): number;
export function multiplyHexColors(color1: any, color2: any): any;
export function nextPow2(v: any): any;
declare var fragment$1: string;
declare var source$1: string;
export const nonCompressedFormats: string[];
export function normalizeExtensionPriority(ext: any, defaultPriority: any): any;
export const nssvg: "http://www.w3.org/2000/svg";
export const nsxhtml: "http://www.w3.org/1999/xhtml";
export namespace onRenderMixin {
    let _onRender: any;
    let onRender: any;
}
export function parseDDS(arrayBuffer: any, supportedFormats: any): {
    format: any;
    width: number;
    height: number;
    resource: Uint8Array[];
    alphaMode: string;
};
export function parseFunctionBody(fn: any): any;
export function parseKTX(arrayBuffer: any, supportedFormats: any): {
    format: any;
    width: any;
    height: any;
    resource: any[];
    alphaMode: string;
};
export namespace path {
    /**
     * Converts a path to posix format.
     * @param path - The path to convert to posix
     */
    function toPosix(path2: any): any;
    /**
     * Checks if the path is a URL e.g. http://, https://
     * @param path - The path to check
     */
    function isUrl(path2: any): boolean;
    /**
     * Checks if the path is a data URL
     * @param path - The path to check
     */
    function isDataUrl(path2: any): boolean;
    /**
     * Checks if the path is a blob URL
     * @param path - The path to check
     */
    function isBlobUrl(path2: any): any;
    /**
     * Checks if the path has a protocol e.g. http://, https://, file:///, data:, blob:, C:/
     * This will return true for windows file paths
     * @param path - The path to check
     */
    function hasProtocol(path2: any): boolean;
    /**
     * Returns the protocol of the path e.g. http://, https://, file:///, data:, blob:, C:/
     * @param path - The path to get the protocol from
     */
    function getProtocol(path2: any): string;
    /**
     * Converts URL to an absolute path.
     * When loading from a Web Worker, we must use absolute paths.
     * If the URL is already absolute we return it as is
     * If it's not, we convert it
     * @param url - The URL to test
     * @param customBaseUrl - The base URL to use
     * @param customRootUrl - The root URL to use
     */
    function toAbsolute(url: any, customBaseUrl: any, customRootUrl: any): any;
    /**
     * Normalizes the given path, resolving '..' and '.' segments
     * @param path - The path to normalize
     */
    function normalize(path2: any): any;
    /**
     * Determines if path is an absolute path.
     * Absolute paths can be urls, data urls, or paths on disk
     * @param path - The path to test
     */
    function isAbsolute(path2: any): any;
    /**
     * Joins all given path segments together using the platform-specific separator as a delimiter,
     * then normalizes the resulting path
     * @param segments - The segments of the path to join
     */
    function join(...segments: any[]): any;
    /**
     * Returns the directory name of a path
     * @param path - The path to parse
     */
    function dirname(path2: any): string;
    /**
     * Returns the root of the path e.g. /, C:/, file:///, http://domain.com/
     * @param path - The path to parse
     */
    function rootname(path2: any): string;
    /**
     * Returns the last portion of a path
     * @param path - The path to test
     * @param ext - Optional extension to remove
     */
    function basename(path2: any, ext: any): any;
    /**
     * Returns the extension of the path, from the last occurrence of the . (period) character to end of string in the last
     * portion of the path. If there is no . in the last portion of the path, or if there are no . characters other than
     * the first character of the basename of path, an empty string is returned.
     * @param path - The path to parse
     */
    function extname(path2: any): any;
    /**
     * Parses a path into an object containing the 'root', `dir`, `base`, `ext`, and `name` properties.
     * @param path - The path to parse
     */
    function parse(path2: any): {
        root: string;
        dir: string;
        base: string;
        ext: string;
        name: string;
    };
    let sep: string;
    let delimiter: string;
    let joinExtensions: string[];
}
export function pointInTriangle(px: any, py: any, x1: any, y1: any, x2: any, y2: any, x3: any, y3: any): boolean;
export function preloadVideo(element: any): Promise<any>;
export function removeItems(arr: any, startIdx: any, removeCount: any): void;
export function removeStructAndGroupDuplicates(vertexStructsAndGroups: any, fragmentStructsAndGroups: any): {
    structs: any[];
    groups: any[];
};
export function resetUids(): void;
export function resolveCharacters(chars: any): any[];
export namespace resolveCompressedTextureUrl {
    let extension_91: any;
    export { extension_91 as extension };
    export function test_11(value: any): boolean;
    export { test_11 as test };
    export function parse(value: any): {
        resolution: number;
        format: any;
        src: any;
    };
}
export namespace resolveJsonUrl {
    export namespace extension_92 {
        let type_86: any;
        export { type_86 as type };
        let priority_23: number;
        export { priority_23 as priority };
        let name_94: string;
        export { name_94 as name };
    }
    export { extension_92 as extension };
    export function test_12(value: any): any;
    export { test_12 as test };
    import parse_1 = resolveTextureUrl.parse;
    export { parse_1 as parse };
}
export namespace resolveTextureUrl {
    export namespace extension_93 {
        let type_87: any;
        export { type_87 as type };
        let name_95: string;
        export { name_95 as name };
    }
    export { extension_93 as extension };
    import test_13 = loadTextures.test;
    export { test_13 as test };
    export function parse_2(value: any): {
        resolution: number;
        format: any;
        src: any;
    };
    export { parse_2 as parse };
}
export function resourceToTexture(options?: {}, skipCache?: boolean): any;
export namespace roundPixelsBit {
    let name_96: string;
    export { name_96 as name };
    export namespace vertex_9 {
        let header_13: string;
        export { header_13 as header };
    }
    export { vertex_9 as vertex };
}
export namespace roundPixelsBitGl {
    let name_97: string;
    export { name_97 as name };
    export namespace vertex_10 {
        let header_14: string;
        export { header_14 as header };
    }
    export { vertex_10 as vertex };
}
export function roundedShapeArc(g: any, points: any, radius: any): void;
export function roundedShapeQuadraticCurve(g: any, points: any, radius: any, smoothness: any): void;
export function sayHello(type: any): void;
export namespace scaleModeToGlFilter {
    let linear_3: number;
    export { linear_3 as linear };
    let nearest_3: number;
    export { nearest_3 as nearest };
}
export function setBasisTranscoderPath(config: any): void;
export function setKTXTranscoderPath(config: any): void;
export function setPositions(tilingSprite: any, positions: any): void;
export function setProgramName(src: any, { name }: {
    name?: string;
}, isFragment?: boolean): any;
export function setUvs(tilingSprite: any, uvs: any): void;
export const shapeBuilders: {};
export namespace sortMixin {
    let _zIndex: number;
    let sortDirty: boolean;
    let sortableChildren: boolean;
    let zIndex: number;
    function depthOfChildModified(): void;
    /**
     * Sorts children by zIndex.
     * @memberof scene.Container#
     */
    function sortChildren(): void;
}
export namespace spritesheetAsset {
    let extension_94: any;
    export { extension_94 as extension };
    export namespace cache {
        export function test_14(asset: any): asset is {
            /** For multi-packed spritesheets, this contains a reference to all the other spritesheets it depends on. */
            linkedSheets: any[];
            _texture: Texture;
            textureSource: any;
            textures: {};
            animations: {};
            data: any;
            resolution: any;
            _frames: any;
            _frameKeys: string[];
            _batchIndex: number;
            _callback: (value: any) => void;
            /**
             * Parser spritesheet from loaded data. This is done asynchronously
             * to prevent creating too many Texture within a single process.
             */
            parse(): Promise<any>;
            /**
             * Process a batch of frames
             * @param initialFrameIndex - The index of frame to start.
             */
            _processFrames(initialFrameIndex: any): void;
            /** Parse animations config. */
            _processAnimations(): void;
            /** The parse has completed. */
            _parseComplete(): void;
            /** Begin the next batch of textures. */
            _nextBatch(): void;
            /**
             * Destroy Spritesheet and don't use after this.
             * @param {boolean} [destroyBase=false] - Whether to destroy the base texture as well
             */
            destroy(destroyBase?: boolean): void;
        };
        export { test_14 as test };
        export function getCacheableAssets_1(keys: any, asset: any): {};
        export { getCacheableAssets_1 as getCacheableAssets };
    }
    export namespace resolver {
        export namespace extension_95 {
            let type_88: any;
            export { type_88 as type };
            let name_98: string;
            export { name_98 as name };
        }
        export { extension_95 as extension };
        export function test_15(value: any): boolean;
        export { test_15 as test };
        export function parse_3(value: any): {
            resolution: number;
            format: any;
            src: any;
        };
        export { parse_3 as parse };
    }
    export namespace loader {
        let name_99: string;
        export { name_99 as name };
        export namespace extension_96 {
            let type_89: any;
            export { type_89 as type };
            let priority_24: any;
            export { priority_24 as priority };
            let name_100: string;
            export { name_100 as name };
        }
        export { extension_96 as extension };
        export function testParse(asset: any, options: any): Promise<boolean>;
        export function parse(asset: any, options: any, loader: any): Promise<{
            /** For multi-packed spritesheets, this contains a reference to all the other spritesheets it depends on. */
            linkedSheets: any[];
            _texture: Texture;
            textureSource: any;
            textures: {};
            animations: {};
            data: any;
            resolution: any;
            _frames: any;
            _frameKeys: string[];
            _batchIndex: number;
            _callback: (value: any) => void;
            /**
             * Parser spritesheet from loaded data. This is done asynchronously
             * to prevent creating too many Texture within a single process.
             */
            parse(): Promise<any>;
            /**
             * Process a batch of frames
             * @param initialFrameIndex - The index of frame to start.
             */
            _processFrames(initialFrameIndex: any): void;
            /** Parse animations config. */
            _processAnimations(): void;
            /** The parse has completed. */
            _parseComplete(): void;
            /** Begin the next batch of textures. */
            _nextBatch(): void;
            /**
             * Destroy Spritesheet and don't use after this.
             * @param {boolean} [destroyBase=false] - Whether to destroy the base texture as well
             */
            destroy(destroyBase?: boolean): void;
        }>;
        export function unload(spritesheet: any, _resolvedAsset: any, loader: any): Promise<void>;
    }
}
export function squaredDistanceToLineSegment(x: any, y: any, x1: any, y1: any, x2: any, y2: any): number;
export function stripVersion(src: any, isES300: any): any;
export function testImageFormat(imageData: any): Promise<any>;
export function testVideoFormat(mimeType: any): boolean;
export function textStyleToCSS(style: any): string;
export namespace textureBit {
    let name_101: string;
    export { name_101 as name };
    export namespace vertex_11 {
        let header_15: string;
        export { header_15 as header };
        let main_8: string;
        export { main_8 as main };
    }
    export { vertex_11 as vertex };
    export namespace fragment_4 {
        let header_16: string;
        export { header_16 as header };
        let main_9: string;
        export { main_9 as main };
    }
    export { fragment_4 as fragment };
}
export namespace textureBitGl {
    let name_102: string;
    export { name_102 as name };
    export namespace vertex_12 {
        let header_17: string;
        export { header_17 as header };
        let main_10: string;
        export { main_10 as main };
    }
    export { vertex_12 as vertex };
    export namespace fragment_5 {
        let header_18: string;
        export { header_18 as header };
        let main_11: string;
        export { main_11 as main };
    }
    export { fragment_5 as fragment };
}
export function textureFrom(id: any, skipCache?: boolean): any;
export namespace tilingBit {
    let name_103: string;
    export { name_103 as name };
    export namespace vertex_13 {
        let header_19: string;
        export { header_19 as header };
        let main_12: string;
        export { main_12 as main };
    }
    export { vertex_13 as vertex };
    export namespace fragment_6 {
        let header_20: string;
        export { header_20 as header };
        let main_13: string;
        export { main_13 as main };
    }
    export { fragment_6 as fragment };
}
export namespace tilingBitGl {
    let name_104: string;
    export { name_104 as name };
    export namespace vertex_14 {
        let header_21: string;
        export { header_21 as header };
        let main_14: string;
        export { main_14 as main };
    }
    export { vertex_14 as vertex };
    export namespace fragment_7 {
        let header_22: string;
        export { header_22 as header };
        let main_15: string;
        export { main_15 as main };
    }
    export { fragment_7 as fragment };
}
export function toFillStyle(value: any, defaultStyle: any): any;
export namespace toLocalGlobalMixin {
    /**
     * Returns the global position of the container.
     * @param point - The optional point to write the global value to.
     * @param skipUpdate - Should we skip the update transform.
     * @returns - The updated point.
     * @memberof scene.Container#
     */
    function getGlobalPosition(point?: Point, skipUpdate?: boolean): Point;
    /**
     * Calculates the global position of the container.
     * @param position - The world origin to calculate from.
     * @param point - A Point object in which to store the value, optional
     *  (otherwise will create a new Point).
     * @param skipUpdate - Should we skip the update transform.
     * @returns - A point object representing the position of this object.
     * @memberof scene.Container#
     */
    function toGlobal(position: any, point: any, skipUpdate?: boolean): any;
    /**
     * Calculates the local position of the container relative to another point.
     * @param position - The world origin to calculate from.
     * @param from - The Container to calculate the global position from.
     * @param point - A Point object in which to store the value, optional
     *  (otherwise will create a new Point).
     * @param skipUpdate - Should we skip the update transform
     * @returns - A point object representing the position of this object
     * @memberof scene.Container#
     */
    function toLocal(position: any, from: any, point: any, skipUpdate: any): any;
}
export function toStrokeStyle(value: any, defaultStyle: any): any;
export function transformVertices(vertices: any, m: any, offset: any, stride: any, size: any): void;
export function triangulateWithHoles(points: any, holes: any, vertices: any, verticesStride: any, verticesOffset: any, indices: any, indicesOffset: any): void;
export const uboSyncFunctionsSTD40: {
    f32: string;
    i32: string;
    "vec2<f32>": string;
    "vec3<f32>": string;
    "vec4<f32>": string;
    "mat2x2<f32>": string;
    "mat3x3<f32>": string;
    "mat4x4<f32>": string;
    "mat3x2<f32>": string;
    "mat4x2<f32>": string;
    "mat2x3<f32>": string;
    "mat4x3<f32>": string;
    "mat2x4<f32>": string;
    "mat3x4<f32>": string;
};
export const uboSyncFunctionsWGSL: any;
export function uid(name?: string): number;
export const uniformParsers: {
    type: string;
    test: (data: any) => boolean;
    ubo: string;
    uniform: string;
}[];
declare function unpremultiplyAlpha$1(pixels: any): void;
export function unsafeEvalSupported(): boolean;
export function updateLocalTransform(lt: any, container: any): void;
export function updateQuadBounds(bounds: any, anchor: any, texture: any, padding: any): void;
export function updateRenderGroupTransform(renderGroup: any): void;
export function updateRenderGroupTransforms(renderGroup: any, updateChildRenderGroups?: boolean): void;
export function updateTransformAndChildren(container: any, updateTick: any, updateFlags: any): void;
export function updateTransformBackwards(target: any, parentTransform: any): any;
export function updateWorldTransform(local: any, parent: any, world: any): void;
export const v8_0_0: "8.0.0";
export const validFormats: string[];
export function validateRenderables(renderGroup: any, renderPipes: any): boolean;
export const vertexGPUTemplate: "\n    @in aPosition: vec2<f32>;\n    @in aUV: vec2<f32>;\n\n    @out @builtin(position) vPosition: vec4<f32>;\n    @out vUV : vec2<f32>;\n    @out vColor : vec4<f32>;\n\n    {{header}}\n\n    struct VSOutput {\n        {{struct}}\n    };\n\n    @vertex\n    fn main( {{in}} ) -> VSOutput {\n\n        var worldTransformMatrix = globalUniforms.uWorldTransformMatrix;\n        var modelMatrix = mat3x3<f32>(\n            1.0, 0.0, 0.0,\n            0.0, 1.0, 0.0,\n            0.0, 0.0, 1.0\n          );\n        var position = aPosition;\n        var uv = aUV;\n\n        {{start}}\n        \n        vColor = vec4<f32>(1., 1., 1., 1.);\n\n        {{main}}\n\n        vUV = uv;\n\n        var modelViewProjectionMatrix = globalUniforms.uProjectionMatrix * worldTransformMatrix * modelMatrix;\n\n        vPosition =  vec4<f32>((modelViewProjectionMatrix *  vec3<f32>(position, 1.0)).xy, 0.0, 1.0);\n       \n        vColor *= globalUniforms.uWorldColorAlpha;\n\n        {{end}}\n\n        {{return}}\n    };\n";
export const vertexGlTemplate: "\n    in vec2 aPosition;\n    in vec2 aUV;\n\n    out vec4 vColor;\n    out vec2 vUV;\n\n    {{header}}\n\n    void main(void){\n\n        mat3 worldTransformMatrix = uWorldTransformMatrix;\n        mat3 modelMatrix = mat3(\n            1.0, 0.0, 0.0,\n            0.0, 1.0, 0.0,\n            0.0, 0.0, 1.0\n          );\n        vec2 position = aPosition;\n        vec2 uv = aUV;\n        \n        {{start}}\n        \n        vColor = vec4(1.);\n        \n        {{main}}\n        \n        vUV = uv;\n        \n        mat3 modelViewProjectionMatrix = uProjectionMatrix * worldTransformMatrix * modelMatrix;\n\n        gl_Position = vec4((modelViewProjectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n\n        vColor *= uWorldColorAlpha;\n\n        {{end}}\n    }\n";
export function viewportFromFrame(viewport: any, source: any, frame: any): any;
export function vkFormatToGPUFormat(vkFormat: any): any;
export function warn(...args: any[]): void;
export const wrapModeToGlAddress: {
    "clamp-to-edge": number;
    repeat: number;
    "mirror-repeat": number;
};
declare class CacheClass {
    _parsers: any[];
    _cache: Map<any, any>;
    _cacheMap: Map<any, any>;
    /** Clear all entries. */
    reset(): void;
    /**
     * Check if the key exists
     * @param key - The key to check
     */
    has(key: any): boolean;
    /**
     * Fetch entry by key
     * @param key - The key of the entry to get
     */
    get(key: any): any;
    /**
     * Set a value by key or keys name
     * @param key - The key or keys to set
     * @param value - The value to store in the cache or from which cacheable assets will be derived.
     */
    set(key: any, value: any): void;
    /**
     * Remove entry by key
     *
     * This function will also remove any associated alias from the cache also.
     * @param key - The key of the entry to remove
     */
    remove(key: any): void;
    /** All loader parsers registered */
    get parsers(): any[];
}
declare class BitmapFontManagerClass {
    /**
     * This character set includes all the letters in the alphabet (both lower- and upper- case).
     * @type {string[][]}
     * @example
     * BitmapFont.from('ExampleFont', style, { chars: BitmapFont.ALPHA })
     */
    ALPHA: string[][];
    /**
     * This character set includes all decimal digits (from 0 to 9).
     * @type {string[][]}
     * @example
     * BitmapFont.from('ExampleFont', style, { chars: BitmapFont.NUMERIC })
     */
    NUMERIC: string[][];
    /**
     * This character set is the union of `BitmapFont.ALPHA` and `BitmapFont.NUMERIC`.
     * @type {string[][]}
     */
    ALPHANUMERIC: string[][];
    /**
     * This character set consists of all the ASCII table.
     * @member {string[][]}
     * @see http://www.asciitable.com/
     */
    ASCII: string[][];
    /** Default options for installing a new BitmapFont. */
    defaultOptions: {
        chars: string[][];
        resolution: number;
        padding: number;
        skipKerning: boolean;
    };
    /**
     * Get a font for the specified text and style.
     * @param text - The text to get the font for
     * @param style - The style to use
     */
    getFont(text: any, style: any): any;
    /**
     * Get the layout of a text for the specified style.
     * @param text - The text to get the layout for
     * @param style - The style to use
     */
    getLayout(text: any, style: any): {
        width: number;
        height: number;
        offsetY: number;
        scale: number;
        lines: {
            width: number;
            charPositions: any[];
            spaceWidth: number;
            spacesIndex: any[];
            chars: any[];
        }[];
    };
    /**
     * Measure the text using the specified style.
     * @param text - The text to measure
     * @param style - The style to use
     */
    measureText(text: any, style: any): {
        width: number;
        height: number;
        offsetY: number;
        scale: number;
        lines: {
            width: number;
            charPositions: any[];
            spaceWidth: number;
            spacesIndex: any[];
            chars: any[];
        }[];
    };
    install(...args: any[]): {
        [x: string]: any;
        /**
         * this is a resolution modifier for the font size..
         * texture resolution will also be used to scale texture according to its font size also
         */
        resolution: any;
        /** The pages of the font. */
        pages: any[];
        _padding: any;
        _measureCache: any;
        _currentChars: any[];
        _currentX: number;
        _currentY: number;
        _currentPageIndex: number;
        _skipKerning: any;
        _textureSize: any;
        _mipmap: any;
        applyFillAsTint: any;
        baseRenderedFontSize: any;
        _style: any;
        fontMetrics: any;
        lineHeight: any;
        ensureCharacters(chars: any): void;
        /**
         * @deprecated since 8.0.0
         * The map of base page textures (i.e., sheets of glyphs).
         */
        readonly pageTextures: any[];
        _applyKerning(newChars: any, context: any): void;
        _nextPage(): {
            canvasAndContext: any;
            texture: Texture;
        };
        _setupContext(context: any, style: any, resolution: any): void;
        _drawGlyph(context: any, metrics: any, x: any, y: any, fontScale: any, style: any): void;
        destroy(): void;
        /** The map of characters by character code. */
        chars: any;
        /**
         * The name of the font face
         * @type {string}
         */
        fontFamily: string;
        /**
         * The offset of the font face from the baseline.
         * @type {number}
         */
        baseLineOffset: number;
        /** The range and type of the distance field for this font. */
        distanceField: {
            type: string;
            range: number;
        };
        /** The size of the font face in pixels. */
        baseMeasurementFontSize: number;
        /**
         * The name of the font face.
         * @deprecated since 8.0.0 Use `fontFamily` instead.
         */
        readonly font: string;
        /**
         * The size of the font face in pixels.
         * @deprecated since 8.0.0 Use `fontMetrics.fontSize` instead.
         */
        readonly size: number;
        /**
         * The kind of distance field for this font or "none".
         * @deprecated since 8.0.0 Use `distanceField.type` instead.
         */
        readonly distanceFieldRange: number;
        /**
         * The range of the distance field in pixels.
         * @deprecated since 8.0.0 Use `distanceField.range` instead.
         */
        readonly distanceFieldType: string;
    };
    /**
     * Uninstalls a bitmap font from the cache.
     * @param {string} name - The name of the bitmap font to uninstall.
     */
    uninstall(name: string): void;
}
declare namespace DDS_HEADER_FIELDS {
    export let MAGIC: number;
    export let SIZE: number;
    export let FLAGS: number;
    export let HEIGHT: number;
    export let WIDTH: number;
    export let MIPMAP_COUNT: number;
    export let PIXEL_FORMAT: number;
    export let PF_FLAGS: number;
    let FOURCC_1: number;
    export { FOURCC_1 as FOURCC };
    export let RGB_BITCOUNT: number;
    export let R_BIT_MASK: number;
    export let G_BIT_MASK: number;
    export let B_BIT_MASK: number;
    export let A_BIT_MASK: number;
}
declare namespace DDS_DX10_FIELDS {
    let DXGI_FORMAT: number;
    let RESOURCE_DIMENSION: number;
    let MISC_FLAG: number;
    let ARRAY_SIZE: number;
    let MISC_FLAGS2: number;
}
declare class EventsTickerClass {
    /** The frequency that fake events will be fired. */
    interactionFrequency: number;
    _deltaTime: number;
    _didMove: boolean;
    _tickerAdded: boolean;
    _pauseUpdate: boolean;
    /**
     * Initializes the event ticker.
     * @param events - The event system.
     */
    init(events: any): void;
    events: any;
    set pauseUpdate(paused: boolean);
    /** Whether to pause the update checks or not. */
    get pauseUpdate(): boolean;
    /** Adds the ticker listener. */
    addTickerListener(): void;
    /** Removes the ticker listener. */
    removeTickerListener(): void;
    /** Sets flag to not fire extra events when the user has already moved there mouse */
    pointerMoved(): void;
    /** Updates the state of interactive objects. */
    _update(): void;
    /**
     * Updates the state of interactive objects if at least {@link interactionFrequency}
     * milliseconds have passed since the last invocation.
     *
     * Invoked by a throttled ticker update from {@link Ticker.system}.
     * @param ticker - The throttled ticker.
     */
    _tickerUpdate(ticker: any): void;
}
declare const FILE_HEADER_SIZE: 64;
declare const FILE_IDENTIFIER: number[];
declare const FORMATS_TO_COMPONENTS: {
    6408: number;
    6407: number;
    33319: number;
    6403: number;
    6409: number;
    6410: number;
    6406: number;
};
declare const INTERNAL_FORMAT_TO_BYTES_PER_PIXEL: {
    33776: number;
    33777: number;
    33778: number;
    33779: number;
    35916: number;
    35917: number;
    35918: number;
    35919: number;
    36283: number;
    36284: number;
    36285: number;
    36286: number;
    37488: number;
    37489: number;
    37490: number;
    37491: number;
    37492: number;
    37496: number;
    37493: number;
    37497: number;
    37494: number;
    37495: number;
    37808: number;
    37840: number;
    37809: number;
    37841: number;
    37810: number;
    37842: number;
    37811: number;
    37843: number;
    37812: number;
    37844: number;
    37813: number;
    37845: number;
    37814: number;
    37846: number;
    37815: number;
    37847: number;
    37816: number;
    37848: number;
    37817: number;
    37849: number;
    37818: number;
    37850: number;
    37819: number;
    37851: number;
    37820: number;
    37852: number;
    37821: number;
    37853: number;
    36492: number;
    36493: number;
    36494: number;
    36495: number;
};
declare const INTERNAL_FORMAT_TO_TEXTURE_FORMATS: {
    33776: string;
    33777: string;
    33778: string;
    33779: string;
    35916: string;
    35917: string;
    35918: string;
    35919: string;
    36283: string;
    36284: string;
    36285: string;
    36286: string;
    37488: string;
    37490: string;
    37492: string;
    37496: string;
    37493: string;
    37497: string;
    37494: string;
    37495: string;
    37808: string;
    37840: string;
    37809: string;
    37841: string;
    37810: string;
    37842: string;
    37811: string;
    37843: string;
    37812: string;
    37844: string;
    37813: string;
    37845: string;
    37814: string;
    37846: string;
    37815: string;
    37847: string;
    37816: string;
    37848: string;
    37817: string;
    37849: string;
    37818: string;
    37850: string;
    37819: string;
    37851: string;
    37820: string;
    37852: string;
    37821: string;
    37853: string;
    36492: string;
    36493: string;
    36494: string;
    36495: string;
    35907: string;
    36759: string;
    36220: string;
    36238: string;
    6408: string;
};
declare namespace FIELDS {
    let FILE_IDENTIFIER_1: number;
    export { FILE_IDENTIFIER_1 as FILE_IDENTIFIER };
    let ENDIANNESS_1: number;
    export { ENDIANNESS_1 as ENDIANNESS };
    export let GL_TYPE: number;
    export let GL_TYPE_SIZE: number;
    export let GL_FORMAT: number;
    export let GL_INTERNAL_FORMAT: number;
    export let GL_BASE_INTERNAL_FORMAT: number;
    export let PIXEL_WIDTH: number;
    export let PIXEL_HEIGHT: number;
    export let PIXEL_DEPTH: number;
    export let NUMBER_OF_ARRAY_ELEMENTS: number;
    export let NUMBER_OF_FACES: number;
    export let NUMBER_OF_MIPMAP_LEVELS: number;
    export let BYTES_OF_KEY_VALUE_DATA: number;
}
declare const TYPES_TO_BYTES_PER_COMPONENT: {
    5121: number;
    5123: number;
    5124: number;
    5125: number;
    5126: number;
    36193: number;
};
declare const TYPES_TO_BYTES_PER_PIXEL: {
    32819: number;
    32820: number;
    33635: number;
};
declare const ENDIANNESS: 67305985;
declare class WorkerManagerClass {
    _initialized: boolean;
    _createdWorkers: number;
    _workerPool: any[];
    _queue: any[];
    _resolveHash: {};
    isImageBitmapSupported(): Promise<any>;
    _isImageBitmapSupported: Promise<any>;
    loadImageBitmap(src: any): Promise<any>;
    _initWorkers(): Promise<void>;
    _getWorker(): any;
    _returnWorker(worker: any): void;
    _complete(data: any): void;
    _run(id: any, args: any): Promise<any>;
    _next(): void;
}
export { fragment$4 as alphaFrag, source$5 as alphaWgsl, blendTemplate as blendTemplateWgsl, source$4 as blurTemplateWgsl, fragment$3 as colorMatrixFilterFrag, source$3 as colorMatrixFilterWgsl, vertex$2 as defaultFilterVert, fragment$2 as displacementFrag, vertex$1 as displacementVert, source$2 as displacementWgsl, earcut$1 as earcut, hsl as hslWgsl, fragment as maskFrag, vertex as maskVert, source as maskWgsl, fragment$1 as noiseFrag, source$1 as noiseWgsl, unpremultiplyAlpha$1 as unpremultiplyAlpha };
