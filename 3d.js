"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var THREE = require("three");
var Effet3D = /** @class */ (function () {
    function Effet3D(selector) {
        this.name = document.querySelector(selector);
        this.scene = null;
        this.camera = null;
        this.forme = null;
        this.material = null;
        this.object = null;
    }
    ;
    Effet3D.prototype.createScene = function () {
        var _a;
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        (_a = this.name) === null || _a === void 0 ? void 0 : _a.appendChild(renderer.domElement);
    };
    ;
    Effet3D.prototype.createObject = function () {
        var _a;
        this.forme = new THREE.PlaneGeometry(2, 2, 2);
        this.material = new THREE.MeshBasicMaterial({ color: 0xfff0, side: THREE.DoubleSide });
        this.object = new THREE.Mesh(this.forme, this.material);
        (_a = this.scene) === null || _a === void 0 ? void 0 : _a.add(this.object);
    };
    ;
    return Effet3D;
}());
var view3d = new Effet3D("#view3dmod");
view3d.createScene();
view3d.createObject();
