import { Character } from "@src/router/gamecore";
import { uuid } from "@src/utils/utils";

export enum LayerType {
    Background = "background",
    Character = "character",
    Effect = "effect",
    UI = "ui",
    Mask = "mask",
}

export enum BlendMode {
    Normal = "normal",
    Multiply = "multiply",
    Screen = "screen",
    Overlay = "overlay",
}

export interface LayerOptions {
    opacity?: number;
    visible?: boolean;
    locked?: boolean;
    blendMode?: BlendMode;
}

export class Layer {
    readonly id: string;
    readonly baseType: string = "layer";
    type: LayerType;
    tags: string[] = [];
    name: string;
    index: number = 0;
    options: LayerOptions;
    parent: Character | LayerGroup | null = null;

    constructor(name: string, type: LayerType = LayerType.Character, options: LayerOptions = {}) {
        this.id = `layer_${uuid.v4()}`;
        this.name = name;
        this.type = type;
        this.options = {
            opacity: 1.0,
            visible: true,
            locked: false,
            blendMode: BlendMode.Normal,
            ...options,
        };
    }

    moveTo(index: number): boolean {
        if (!this.parent || this.options.locked) return false;

        if (this.parent instanceof Character) {
            const layers = this.parent.layerSet;
            layers.splice(index, 0, layers.splice(this.index, 1)[0]);
            this.index = index;
            return true;
        } else if (this.parent instanceof LayerGroup) {
            return this.parent.moveLayer(this, index);
        }
        return false;
    }

    setVisible(visible: boolean): void {
        this.options.visible = visible;
    }

    setLocked(locked: boolean): void {
        this.options.locked = locked;
    }

    setBlendMode(mode: BlendMode): void {
        this.options.blendMode = mode;
    }

    delete(): boolean {
        if (!this.parent || this.options.locked) return false;

        if (this.parent instanceof Character) {
            this.parent.layerSet.splice(this.index, 1);
            return true;
        } else if (this.parent instanceof LayerGroup) {
            return this.parent.removeLayer(this);
        }
        return false;
    }

    mergeWith(layer: Layer): Layer | null {
        if (!this.parent || this.options.locked) return null;
        // 合并图层逻辑
        return this;
    }
}

export class LayerGroup extends Layer {
    private layers: Layer[] = [];

    constructor(name: string, layers: Layer[] = [], options: LayerOptions = {}) {
        super(name, LayerType.Character, options);
        this.layers = layers;
        this.layers.forEach((layer) => (layer.parent = this));
    }

    addLayer(layer: Layer, index?: number): boolean {
        if (layer.options.locked) return false;

        if (index === undefined || index >= this.layers.length) {
            this.layers.push(layer);
            layer.index = this.layers.length - 1;
        } else {
            this.layers.splice(index, 0, layer);
            this.updateIndices();
        }
        layer.parent = this;
        return true;
    }

    removeLayer(layer: Layer): boolean {
        if (layer.options.locked) return false;

        const index = this.layers.indexOf(layer);
        if (index !== -1) {
            this.layers.splice(index, 1);
            this.updateIndices();
            return true;
        }
        return false;
    }

    moveLayer(layer: Layer, newIndex: number): boolean {
        if (layer.options.locked) return false;

        const currentIndex = this.layers.indexOf(layer);
        if (currentIndex === -1) return false;

        this.layers.splice(newIndex, 0, this.layers.splice(currentIndex, 1)[0]);
        this.updateIndices();
        return true;
    }

    private updateIndices(): void {
        this.layers.forEach((layer, index) => {
            layer.index = index;
        });
    }
}
