/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */

import { Theme } from "@here/harp-datasource-protocol";
import { GeoBox, GeoCoordinates } from "@here/harp-geoutils";
import { MapControls } from "@here/harp-map-controls";
import { MapView } from "@here/harp-mapview";
import { VectorTileDataSource } from "@here/harp-vectortile-datasource";

const defaultTheme = "resources/theme.json";

export interface ViewParameters {
  theme?: string | Theme;
  canvas: HTMLCanvasElement;
}

export class View {
  readonly canvas: HTMLCanvasElement;
  readonly theme: string | Theme;

  readonly mapView: MapView;

  constructor(args: ViewParameters) {
    this.canvas = args.canvas;
    this.theme = args.theme === undefined ? defaultTheme : args.theme;
    this.mapView = this.initialize();
  }

  protected initialize(): MapView {
    const mapView = new MapView({
      canvas: this.canvas,
      theme: this.theme,
      decoderUrl: "decoder.bundle.js",
    });

    const dataSource = new VectorTileDataSource({
      authenticationCode: "G4uyuwI4UE7We1bgdtk9occ1Mx7DKAr30Nrei3DNZAI",
    });
    mapView.addDataSource(dataSource);

    MapControls.create(mapView);

    // console.log(
    //   (mapView.geoMaxBounds = new GeoBox(
    //     new GeoCoordinates(50.83974767552581, 4.316129290206697),
    //     new GeoCoordinates(50.84350457856893, 4.3282761706196275)
    //   ))
    // );

    return mapView;
  }
}
