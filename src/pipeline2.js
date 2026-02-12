//NOTE: IF RECEIVING ERROR: Unable to Open Stream..., move from external HD to C drive (or somewhere)
//PDAL / JS has issue parsing E:/...  paths ZU 20251215

////Rasterizing m3c2 with threshold
//[
//  "C:/Users/ZacharyUhlmann/Documents/staging/tolt/AQ07/gcd/2024_2014/*.las",
//  {
//    "type":"filters.range",
//    "limits":"M3C2 distance![-0.208:0.208]"
//  },
//  {
//    "type":"writers.gdal",
//    "filename":"2024_2014_M3C2_mean_gt0208_bounds.tif",
//    "output_type":"mean",
//    "gdaldriver":"GTiff",
//    "resolution":1.5,
//    "override_srs":"EPSG:6597",
//    "dimension":"M3C2 distance",
//    "binmode":"true",
//    "bounds":"[1394900, 251260, 1430629, 258249]"
//  }
//  ]

//Rasterizing BE
[
  "C:/Users/ZacharyUhlmann/Documents/staging/tolt/2025_las_Class9_WaterSurf/*.las",
  {
    "type":"filters.expression",
    "expression":"Classification==9"
  },
  {
    "type":"writers.gdal",
    "filename":"2025_class9_NIR_WaterSurf.tif",
    "output_type":"mean",
    "gdaldriver":"GTiff",
    "resolution":1.5,
    "override_srs":"EPSG:6597",
//    "dimension":"M3C2 distance",
    "binmode":"true"
//    "bounds":"[1394900, 251260, 1430629, 258249]"
  }
  ]

////Merging all in dir
//[
//  "E:/tolt/2014_nv5/2014_Rev_2025_LAS_BE/*.las",
//  {
//    "type":"filters.merge"
//  },
//  "E:/tolt/2014_nv5/2014_rev2025__BE_merged.las"
//]