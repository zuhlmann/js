//NOTE: IF RECEIVING ERROR: Unable to Open Stream..., move from external HD to C drive (or somewhere)
//PDAL / JS has issue parsing E:/...  paths ZU 20251215


////Ferry CloudCompare Dimensions to PDAL for M3C2
//[
//  "E:/tolt/add_2026/2020_2022/2022_2020_m3c2_Tile1_30norm_6proj.las",
//  {
//    "type":"filters.ferry",
//    "dimensions":"Npoints_cloud1 =>M3C2_distance"
//  },
//  {
//    "type":"filters.ferry",
//    "dimensions":"Npoints_cloud2 =>m3c2_count2"
//  },
//  {
//    "type":"filters.ferry",
//    "dimensions":"significant change =>m3c2_significant"
//  },
//  {
//    "type":"filters.ferry",
//    "dimensions":"distance uncertainty =>m3c2_uncertainty"
//  },
//  {
//    "type":"filters.ferry",
//    "dimensions":"M3C2 distance =>m3c2_distance"
//  },
//    {
//    "type": "writers.las",
//    "filename": "E:/tolt/add_2026/2020_2022/2022_2020_m3c2_Tile1_30norm_6proj_DimsFmt.las",
//    "extra_dims": "all",
//    "minor_version": "4"
//    }
//]

//Filter point cloud
[
  "E:/tolt/2025_Final/2025_LAS/*.las",
  {
    "type":"filters.expression",
    "expression":"Classification==41 || Classification==45"
//    "expression":"Classification==40"
  },
 {
    "type":"writers.gdal",
    "filename":"E:/tolt/2025_Final/2025_Processed_Rasters_McM/SFT2025_Cls41_45_GreenReturns_Mean.tif",
    "output_type":"mean",
    "gdaldriver":"GTiff",
    "resolution":1.5,
    "override_srs":"EPSG:6597",
//    binmode (read docs) will respect the resolution - only points within pixel will be considered
    "binmode":"true",
//    2025 lidar bounds(mst and sft)
    "bounds":"[1370458, 233905, 1430560, 257677]"
//    Just Lower SFT Bounds (all other NV5 years)
//    "bounds":"[1394900, 251260, 1430629, 258249]"
  }
]

////m3C2 diff
//  [
//    {
//    "filename":"E:/tolt/2014_nv5/2014_Rev_2025_LAS_BE_split/2014_rev2025_BE_split_10000ft_offset_1.las",
//    "tag":"A"
//    },
//    {
////    "filename":"C:/Users/ZacharyUhlmann/Documents/staging/tolt/AQ07/gcd/2024/2024_split/2024_all_split_10000ft_offset_4.las",
//    "filename":"E:/tolt/2025_Final/2025_tile_split/2025_BE_split_10000ft_offset_7.las",
//
//    "tag":"B"
//    },
////    {
////    "type":"filters.sample",
////    "cell": 3,
////    "tag":"sampled"
////    },
//    {
//    "type": "filters.m3c2",
//    "normal_radius": 15,
//    "cyl_radius": 3,
//    "cyl_halflen": 25,
//    "reg_error": 0.213,
//    "inputs": [
//        "A",
//        "B",
//        "A"
//    ]
//    },
//    {
//    "type": "writers.las",
//    "filename": "E:/tolt/add_2026/2014_2025/SFT2014_2025_m3c2_30norm_6rad_Tile1.las",
//    "extra_dims": "all",
//    "minor_version": "4"
//    }
//  ]

////Generate water surfaces BE
//[
//    "E:/tolt/add_2026/2020_2014/*.las",
////  {
////    "type":"filters.ferry",
////    "dimensions":"significant change =>significant_change"
////  },
//  {
//    "type":"filters.expression",
////    "expression":"Classification==72",
//    "expression":"m3c2_count1>0 && m3c2_count2>0"
////    "tag":"multiple"
//   },
//  {
//    "type":"filters.assign",
//    "value":"m3c2_distance = 0 WHERE (m3c2_significant==0)"
//  },
////    {
////    "type": "writers.las",
//////    "filename": "C:/Box/MCM USERS/3.0 - Employees/zuhlmann/Tutorials/lidar_lightning/2024_0292_Class2_9_73.las",
////    "filename": "E:/tolt/add_2026/2020_2014/2020_2014_M3C2_30norm_6rad_2020Ref_Mean.las",
////    "extra_dims": "all",
////    "minor_version": "4"
////    },
//  {
//    "type":"writers.gdal",
//    "filename":"E:/tolt/add_2026/2020_2014/2020_2014_M3C2_30norm_6rad_2020Ref_Mean.tif",
//    "output_type":"mean",
//    "gdaldriver":"GTiff",
//    "resolution":1.5,
////    "override_srs":"EPSG:6557",
//    "override_srs":"EPSG:6597",
//    "dimension":"m3c2_distance",
//    "binmode":"true"
////    2025 lidar bounds(mst and sft)
////    "bounds":"[2154740, 1322950, 2156100, 1324220]"
////    "bounds":"[2154355, 1320725, 2157455, 1324460]"
//////    other year bounds
////    "bounds":"[1394900, 251260, 1430629, 258249]"
//  }
//]

////Merging all in dir
//[
//  "E:/tolt/2014_nv5/2014_Rev_2025_LAS_BE/*.las",
//  {
//    "type":"filters.merge"
//  },
//  "E:/tolt/2014_nv5/2014_rev2025__BE_merged.las"
//]

//LWD single tile high res whitney devel May 2026

//
//[
//    "E:/tolt/2024_LiDAR/2024_LAS/2024_LAS/Boulder/*.las",
//    {
//        "type": "filters.range",
//        "limits": "Classification[2:2], Classification[72:72]"
//    },
//    {
//        "type": "filters.hag_delaunay"
//    },
//    {
//
//        "type": "filters.ferry",
//        "dimensions": "HeightAboveGround=Z"
//    },
//    {
//        "type": "filters.expression",
//        "expression": "Classification==72"
//    },
//    {
//        "type": "writers.gdal",
//        "filename": "filename":"E:/tolt/2024_LiDAR/2024_McM_Processed/SFT2024_Boulder_Class72_HAG.tif",
//        "output_type": "max",
//        "gdaldriver": "GTiff",
//        "nodata": -9999,
//        "resolution": 0.1
//    }
//    ]

//[
//    {
//        "filename":"E:/tolt/add_2026/SUBSTRATE/2024_las_merged_reach1.las",
//        "tag":"A"
//    },
//    {
//        "type": "filters.range",
//        "limits": "Classification[2:2], Classification[72:72]"
//    },
//    {
//        "type": "filters.hag_delaunay"
//    },
//    {
//
//        "type": "filters.ferry",
//        "dimensions": "HeightAboveGround=Z"
//    },
//    {
//        "type": "filters.expression",
//        "expression": "Classification==72"
//    },
//    {
//        "type": "writers.gdal",
//        "filename":"E:/tolt/2024_LiDAR/2024_McM_Processed/SFT2024_Boulder_Class72_HAG.tif",
//        "output_type": "max",
//        "gdaldriver": "GTiff",
//        "nodata": -9999,
//        "resolution": 1.5,
////        "bounds":"[1394900, 251260, 1430629, 258249]"
////        Just Reach 1
//        "bounds":"[1396750, 251600, 1401440, 256740]"
//    }
//    ]

////Index has location field.  Refer to pipeline2.js for more details
//[
//    {
//        "type":"readers.tindex",
//        "filename":"E:/tolt/add_2026/SUBSTRATE/Tolt_River_2024_Lidar_Index_Reach1.shp",
//        "lyr_name":"Tolt_River_2024_Lidar_Index_Reach1",
//        "t_srs":"EPSG:6597"
//    },
//    {
//        "type": "writers.las",
//        "filename": "E:/tolt/add_2026/SUBSTRATE/2024_las_merged_reach1.las"
//    }
//    ]