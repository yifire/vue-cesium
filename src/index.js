import { version } from '../package.json'
import CesiumViewer from '@/viewer/CesiumViewer.vue'
import ImageryLayer from '@/imageryLayers/ImageryLayer.vue'
import ArcGisMapServerImageryProvider from '@/imageryLayers/ArcGisMapServerImageryProvider.vue'
import BingMapsImageryProvider from '@/imageryLayers/BingMapsImageryProvider.vue'
import MapboxImageryProvider from '@/imageryLayers/MapboxImageryProvider.vue'
import OpenStreetMapImageryProvider from '@/imageryLayers/OpenStreetMapImageryProvider.vue'
import SingleTileImageryProvider from '@/imageryLayers/SingleTileImageryProvider.vue'
import UrlTemplateImageryProvider from '@/imageryLayers/UrlTemplateImageryProvider.vue'
import WebMapTileServiceImageryProvider from '@/imageryLayers/WebMapTileServiceImageryProvider.vue'
import SuperMapImageryProvider from '@/imageryLayers/SuperMapImageryProvider.vue'

import Entity from '@/entities/Entity.vue'
import PolylineGraphics from '@/entities/PolylineGraphics.vue'
import PolygonGraphics from '@/entities/PolygonGraphics.vue'

import PointCollection from '@/primitives/PointPrimitiveCollection.vue'
import PolylineCollection from '@/primitives/PolylineCollection.vue'
import LabelCollection from '@/primitives/LabelCollection.vue'
import PointPrimitive from '@/primitives/PointPrimitive.vue'
import Polyline from '@/primitives/Polyline.vue'
import Label from '@/primitives/Label.vue'
import Cesium3DTileset from '@/primitives/Cesium3DTileset.vue'
import Model from '@/primitives/Model.vue'

import MeasureDistance from '@/measure/MeasureDistance.vue'
import MeasureArea from '@/measure/MeasureArea.vue'
import MeasureHeight from '@/measure/MeasureHeight.vue'

export default {
  install (Vue, options) {
    let cesiumPath = options ? options.cesiumPath : 'https://unpkg.com/cesium/Build/Cesium/Cesium.js'
    Vue.prototype._Cesium = () => ({ cesiumPath })
    Vue.component('cesium-viewer', CesiumViewer)
    Vue.component(ImageryLayer.name, ImageryLayer)
    Vue.component(ArcGisMapServerImageryProvider.name, ArcGisMapServerImageryProvider)
    Vue.component(BingMapsImageryProvider.name, BingMapsImageryProvider)
    Vue.component(MapboxImageryProvider.name, MapboxImageryProvider)
    Vue.component(OpenStreetMapImageryProvider.name, OpenStreetMapImageryProvider)
    Vue.component(SingleTileImageryProvider.name, SingleTileImageryProvider)
    Vue.component(UrlTemplateImageryProvider.name, UrlTemplateImageryProvider)
    Vue.component(WebMapTileServiceImageryProvider.name, WebMapTileServiceImageryProvider)
    Vue.component(SuperMapImageryProvider.name, SuperMapImageryProvider)

    Vue.component(Entity.name, Entity)
    Vue.component(PolylineGraphics.name, PolylineGraphics)
    Vue.component(PolygonGraphics.name, PolygonGraphics)

    Vue.component(Cesium3DTileset.name, Cesium3DTileset)
    Vue.component(PolylineCollection.name, PolylineCollection)
    Vue.component(Polyline.name, Polyline)
    Vue.component(LabelCollection.name, LabelCollection)
    Vue.component(Label.name, Label)
    Vue.component(PointCollection.name, PointCollection)
    Vue.component(PointPrimitive.name, PointPrimitive)

    Vue.component('model-primitive', Model)
    Vue.component('measure-distance', MeasureDistance)
    Vue.component('measure-area', MeasureArea)
    Vue.component('measure-height', MeasureHeight)
  },
  version
}

export {
  CesiumViewer, ImageryLayer, ArcGisMapServerImageryProvider, BingMapsImageryProvider, MapboxImageryProvider, OpenStreetMapImageryProvider, SingleTileImageryProvider,
  UrlTemplateImageryProvider, WebMapTileServiceImageryProvider, SuperMapImageryProvider, Entity, PolylineGraphics, Cesium3DTileset, PolygonGraphics, PointCollection,
  PolylineCollection, PointPrimitive, Polyline, LabelCollection, Label, MeasureDistance, MeasureArea, MeasureHeight, Model
}
