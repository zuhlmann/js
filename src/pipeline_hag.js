{
  "pipeline"
:
  [
    "E:/tolt/2020_las/Full_Classification/*.las",
//    {
//      "type": "filters.expression",
//      "expression": "((Classification==2) && (Classification==73))"
//    },
    {
      "type": "filters.range",
      "limits": "Classification[2:2], Classification[73:73]"
    },
    {
      "type": "filters.hag_delaunay"
    },
    // {
    //   "type":"writers.las",
    //   "filename":"C:/Users/ZacharyUhlmann/Documents/staging/pdal_test/2024_lwd/SFT2024_0153_hag.laz",
    //   "extra_dims":"HeightAboveGround=float32"
    // }
    {
//    check if in newer pdal version that you dont need to replace = syntax with =>
//https://pdal.io/en/stable/stages/filters.ferry.html
      "type": "filters.ferry",
      "dimensions": "HeightAboveGround=Z"
    },
    {
      "type": "filters.expression",
      "expression": "Classification==73"
    },
    {
    "type":"writers.gdal",
      "filename":"E:/tolt/2020_las/Full_Classification/SFT2020_LWD_HtAboveGd.tif",
      "output_type":"max",
      "gdaldriver":"GTiff",
      "nodata": -9999,
      "resolution":1
    }
  ]
}