{
  "pipeline"
:
  [
    "C:/Users/ZacharyUhlmann/Documents/staging/tolt/20250722_lidar_reprocessed/2025_LAS/SFT2025_018.las",
    {
      "type": "filters.stats",
      "count": "Classification"
    },
    {
      "type":"writers.text",
      "format":"csv",
      "filename":"SFT2025_018_Class_Distribution.csv"
    }
  ]
}