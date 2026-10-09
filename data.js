window.DEMO_DATA = {
  "meta": {
    "title": "When RNA and protein disagree",
    "study": "Bouhaddou et al., JCI Insight 2021;6(20):e151982",
    "doi": "10.1172/jci.insight.151982",
    "paperUrl": "https://insight.jci.org/articles/view/151982",
    "accessed": "2026-10-09",
    "modelCount": 65,
    "markerCount": 8,
    "completeMarkerPairs": 518,
    "testedModelCount": 17,
    "growthRecordCount": 748,
    "defaultMarker": "CAV1",
    "defaultGap": 30,
    "rankFormula": "100 × (average rank − 1) / (finite cohort count − 1)",
    "rankReference": "Full 65-model cohort before filtering; RNA finite n=64 for SOX2/CLDN7, n=65 otherwise; RPPA n=65.",
    "hpvDefinition": "Published clinical HPV status in Supplemental Table 2; not sequencing-derived HPV.",
    "responseDefinition": "Source Experimental R/S labels are retained. Descriptive T/C≤0.5 uses the ratio of treatment and vehicle mean normalized growth at an observed common day.",
    "responseWarning": "The 8 markers were selected using this study. This is not independent validation or a new prediction model.",
    "animalWarning": "Growth table has no animal IDs. n counts finite records at a day; SD is record spread, not an animal-level confidence interval.",
    "license": "CC BY 4.0; original source data by the article authors."
  },
  "sources": [
    {
      "table": 2,
      "file": "jci.insight.151982.sdt2.xlsx",
      "url": "https://df6sxcketz7bb.cloudfront.net/manuscripts/151000/151982/jci.insight.151982.sdt2.xlsx",
      "sha256": "262735c0348e89b5efbf0de9b99687583ce6f93d0aa8634f65d0391b09e58ce5",
      "bytes": 13416,
      "description": "Model metadata and published experimental labels"
    },
    {
      "table": 3,
      "file": "jci.insight.151982.sdt3.xlsx",
      "url": "https://df6sxcketz7bb.cloudfront.net/manuscripts/151000/151982/jci.insight.151982.sdt3.xlsx",
      "sha256": "83065e9c35e3d67a4c6ee207ae8ecf578490db8a79498b91817ac9ca0322d154",
      "bytes": 221696,
      "description": "Median-centered RPPA and antibody mapping"
    },
    {
      "table": 4,
      "file": "jci.insight.151982.sdt4.xlsx",
      "url": "https://df6sxcketz7bb.cloudfront.net/manuscripts/151000/151982/jci.insight.151982.sdt4.xlsx",
      "sha256": "4672a2e5f0665e103bd22a65028ef47abb539423cc79b275d3dd153b1546a2ec",
      "bytes": 31296,
      "description": "Longitudinal normalized tumor-growth records"
    },
    {
      "table": 5,
      "file": "jci.insight.151982.sdt5.xlsx",
      "url": "https://df6sxcketz7bb.cloudfront.net/manuscripts/151000/151982/jci.insight.151982.sdt5.xlsx",
      "sha256": "ed1652d15dcc9b394920802f78d12b909becc7912e34f2692f1bebd7b481fe9f",
      "bytes": 10145217,
      "description": "Median-centered RNA expression"
    }
  ],
  "markers": [
    {
      "gene": "CAV1",
      "probe": "Caveolin1RV",
      "label": "Caveolin-1",
      "rnaUnit": "log2 median-centered RNA (published processed values)",
      "proteinUnit": "log2 median-centered RPPA signal",
      "rnaN": 65,
      "proteinN": 65,
      "pairedN": 65,
      "spearman": 0.7796328671328672
    },
    {
      "gene": "SOX2",
      "probe": "Sox2RV",
      "label": "Sox-2",
      "rnaUnit": "log2 median-centered RNA (published processed values)",
      "proteinUnit": "log2 median-centered RPPA signal",
      "rnaN": 64,
      "proteinN": 65,
      "pairedN": 64,
      "spearman": 0.8150734326705329
    },
    {
      "gene": "AXL",
      "probe": "AxlRV",
      "label": "AXL",
      "rnaUnit": "log2 median-centered RNA (published processed values)",
      "proteinUnit": "log2 median-centered RPPA signal",
      "rnaN": 65,
      "proteinN": 65,
      "pairedN": 65,
      "spearman": 0.906653263310934
    },
    {
      "gene": "TMEM173",
      "probe": "STINGRV",
      "label": "STING",
      "rnaUnit": "log2 median-centered RNA (published processed values)",
      "proteinUnit": "log2 median-centered RPPA signal",
      "rnaN": 65,
      "proteinN": 65,
      "pairedN": 65,
      "spearman": 0.5388986013986014
    },
    {
      "gene": "BRD4",
      "probe": "BRD4RV",
      "label": "Brd4",
      "rnaUnit": "log2 median-centered RNA (published processed values)",
      "proteinUnit": "log2 median-centered RPPA signal",
      "rnaN": 65,
      "proteinN": 65,
      "pairedN": 65,
      "spearman": 0.5764267529491058
    },
    {
      "gene": "CLDN7",
      "probe": "Claudin7RV",
      "label": "Claudin-7",
      "rnaUnit": "log2 median-centered RNA (published processed values)",
      "proteinUnit": "log2 median-centered RPPA signal",
      "rnaN": 64,
      "proteinN": 65,
      "pairedN": 64,
      "spearman": 0.752160624598553
    },
    {
      "gene": "GJA1",
      "probe": "Connexin43RC",
      "label": "Connexin-43",
      "rnaUnit": "log2 median-centered RNA (published processed values)",
      "proteinUnit": "log2 median-centered RPPA signal",
      "rnaN": 65,
      "proteinN": 65,
      "pairedN": 65,
      "spearman": 0.8094842657342657
    },
    {
      "gene": "FN1",
      "probe": "FibronectinRV",
      "label": "Fibronectin",
      "rnaUnit": "log2 median-centered RNA (published processed values)",
      "proteinUnit": "log2 median-centered RPPA signal",
      "rnaN": 65,
      "proteinN": 65,
      "pairedN": 65,
      "spearman": 0.6299238409886635
    }
  ],
  "models": [
    {
      "id": "JG1",
      "sourceModelId": "JGHL1",
      "pdxNumber": "HN11-5822",
      "hpv": "Negative",
      "experimentalResponse": "S",
      "assays": {
        "CAV1": {
          "rna": -0.081669,
          "protein": 0.206273595,
          "rnaSourceValue": -0.081669,
          "rnaStatus": "measured",
          "rnaPercentile": 45.3125,
          "proteinPercentile": 54.6875,
          "rankGap": 9.375
        },
        "SOX2": {
          "rna": -1.4514,
          "protein": -0.379425153,
          "rnaSourceValue": -1.4514,
          "rnaStatus": "measured",
          "rnaPercentile": 9.523809523809524,
          "proteinPercentile": 25.0,
          "rankGap": 15.476190476190476
        },
        "AXL": {
          "rna": -1.2825,
          "protein": -0.855072559,
          "rnaSourceValue": -1.2825,
          "rnaStatus": "measured",
          "rnaPercentile": 28.125,
          "proteinPercentile": 25.0,
          "rankGap": 3.125
        },
        "TMEM173": {
          "rna": 0.87878,
          "protein": 1.485455066,
          "rnaSourceValue": 0.87878,
          "rnaStatus": "measured",
          "rnaPercentile": 75.0,
          "proteinPercentile": 82.8125,
          "rankGap": 7.8125
        },
        "BRD4": {
          "rna": -0.07015,
          "protein": -0.655538245,
          "rnaSourceValue": -0.07015,
          "rnaStatus": "measured",
          "rnaPercentile": 43.75,
          "proteinPercentile": 7.8125,
          "rankGap": 35.9375
        },
        "CLDN7": {
          "rna": -0.87077,
          "protein": -0.0570137,
          "rnaSourceValue": -0.87077,
          "rnaStatus": "measured",
          "rnaPercentile": 31.746031746031747,
          "proteinPercentile": 37.5,
          "rankGap": 5.753968253968253
        },
        "GJA1": {
          "rna": 0.35097,
          "protein": 0.411307814,
          "rnaSourceValue": 0.35097,
          "rnaStatus": "measured",
          "rnaPercentile": 59.375,
          "proteinPercentile": 59.375,
          "rankGap": 0.0
        },
        "FN1": {
          "rna": 2.5679,
          "protein": 0.224062296,
          "rnaSourceValue": 2.5679,
          "rnaStatus": "measured",
          "rnaPercentile": 75.0,
          "proteinPercentile": 60.9375,
          "rankGap": 14.0625
        }
      },
      "growth": {
        "days": [
          {
            "day": 1,
            "vehicleMean": 1,
            "vehicleN": 2,
            "vehicleMissingN": 0,
            "vehicleSD": 0.0,
            "vehicleMin": 1,
            "vehicleMax": 1,
            "cetuximabMean": 1,
            "cetuximabN": 3,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.0,
            "cetuximabMin": 1,
            "cetuximabMax": 1,
            "ratio": 1.0
          },
          {
            "day": 6,
            "vehicleMean": 2.1809085,
            "vehicleN": 2,
            "vehicleMissingN": 0,
            "vehicleSD": 1.1834527998667712,
            "vehicleMin": 1.344081,
            "vehicleMax": 3.017736,
            "cetuximabMean": 1.2134563333333335,
            "cetuximabN": 3,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.11269989048057383,
            "cetuximabMin": 1.096548,
            "cetuximabMax": 1.321414,
            "ratio": 0.5563994699150988
          },
          {
            "day": 8,
            "vehicleMean": 2.2845115,
            "vehicleN": 2,
            "vehicleMissingN": 0,
            "vehicleSD": 1.2105194332370297,
            "vehicleMin": 1.428545,
            "vehicleMax": 3.140478,
            "cetuximabMean": 0.9503726666666666,
            "cetuximabN": 3,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.016277435066168525,
            "cetuximabMin": 0.933416,
            "cetuximabMax": 0.965873,
            "ratio": 0.41600695232511054
          },
          {
            "day": 13,
            "vehicleMean": 2.3546205000000002,
            "vehicleN": 2,
            "vehicleMissingN": 0,
            "vehicleSD": 1.24659743542673,
            "vehicleMin": 1.473143,
            "vehicleMax": 3.236098,
            "cetuximabMean": 0.888032,
            "cetuximabN": 3,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.03682244982344331,
            "cetuximabMin": 0.859427,
            "cetuximabMax": 0.929578,
            "ratio": 0.37714442730792497
          },
          {
            "day": 15,
            "vehicleMean": 2.525812,
            "vehicleN": 2,
            "vehicleMissingN": 0,
            "vehicleSD": 1.355317224354505,
            "vehicleMin": 1.567458,
            "vehicleMax": 3.484166,
            "cetuximabMean": 0.8250966666666666,
            "cetuximabN": 3,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.04161499682005675,
            "cetuximabMin": 0.781611,
            "cetuximabMax": 0.864547,
            "ratio": 0.3266659065150797
          },
          {
            "day": 20,
            "vehicleMean": 3.836448,
            "vehicleN": 2,
            "vehicleMissingN": 0,
            "vehicleSD": 2.475627509981661,
            "vehicleMin": 2.085915,
            "vehicleMax": 5.586981,
            "cetuximabMean": 0.7000153333333333,
            "cetuximabN": 3,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.053795406461270755,
            "cetuximabMin": 0.667196,
            "cetuximabMax": 0.762099,
            "ratio": 0.18246443932860118
          }
        ],
        "endpoints": {
          "final": {
            "day": 20,
            "vehicleMean": 3.836448,
            "vehicleN": 2,
            "vehicleMissingN": 0,
            "vehicleSD": 2.475627509981661,
            "vehicleMin": 2.085915,
            "vehicleMax": 5.586981,
            "cetuximabMean": 0.7000153333333333,
            "cetuximabN": 3,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.053795406461270755,
            "cetuximabMin": 0.667196,
            "cetuximabMax": 0.762099,
            "ratio": 0.18246443932860118
          },
          "day14": {
            "day": 13,
            "vehicleMean": 2.3546205000000002,
            "vehicleN": 2,
            "vehicleMissingN": 0,
            "vehicleSD": 1.24659743542673,
            "vehicleMin": 1.473143,
            "vehicleMax": 3.236098,
            "cetuximabMean": 0.888032,
            "cetuximabN": 3,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.03682244982344331,
            "cetuximabMin": 0.859427,
            "cetuximabMax": 0.929578,
            "ratio": 0.37714442730792497
          }
        },
        "sourceFinalFlagDays": [
          20
        ]
      }
    },
    {
      "id": "JG2",
      "sourceModelId": "JGHL2",
      "pdxNumber": "HN11-5944",
      "hpv": "Negative",
      "experimentalResponse": "not evaluated",
      "assays": {
        "CAV1": {
          "rna": -2.6093,
          "protein": -1.293701821,
          "rnaSourceValue": -2.6093,
          "rnaStatus": "measured",
          "rnaPercentile": 10.9375,
          "proteinPercentile": 14.0625,
          "rankGap": 3.125
        },
        "SOX2": {
          "rna": null,
          "protein": -0.908264632,
          "rnaSourceValue": "#NAME?",
          "rnaStatus": "source_error",
          "rnaPercentile": null,
          "proteinPercentile": 3.125,
          "rankGap": null
        },
        "AXL": {
          "rna": 0.98196,
          "protein": 1.011425561,
          "rnaSourceValue": 0.98196,
          "rnaStatus": "measured",
          "rnaPercentile": 65.625,
          "proteinPercentile": 78.125,
          "rankGap": 12.5
        },
        "TMEM173": {
          "rna": -1.2008,
          "protein": -2.171724242,
          "rnaSourceValue": -1.2008,
          "rnaStatus": "measured",
          "rnaPercentile": 12.5,
          "proteinPercentile": 10.9375,
          "rankGap": 1.5625
        },
        "BRD4": {
          "rna": 0,
          "protein": -0.009331388,
          "rnaSourceValue": 0,
          "rnaStatus": "measured",
          "rnaPercentile": 47.65625,
          "proteinPercentile": 48.4375,
          "rankGap": 0.78125
        },
        "CLDN7": {
          "rna": -2.6692,
          "protein": 0.133716113,
          "rnaSourceValue": -2.6692,
          "rnaStatus": "measured",
          "rnaPercentile": 14.285714285714286,
          "proteinPercentile": 59.375,
          "rankGap": 45.089285714285715
        },
        "GJA1": {
          "rna": 0.061409,
          "protein": 0.535676588,
          "rnaSourceValue": 0.061409,
          "rnaStatus": "measured",
          "rnaPercentile": 51.5625,
          "proteinPercentile": 65.625,
          "rankGap": 14.0625
        },
        "FN1": {
          "rna": 0.82442,
          "protein": -0.001955244,
          "rnaSourceValue": 0.82442,
          "rnaStatus": "measured",
          "rnaPercentile": 57.8125,
          "proteinPercentile": 46.875,
          "rankGap": 10.9375
        }
      },
      "growth": {
        "days": [],
        "endpoints": {
          "final": null,
          "day14": null
        },
        "sourceFinalFlagDays": []
      }
    },
    {
      "id": "JG3",
      "sourceModelId": "JGHL3",
      "pdxNumber": "HN11-6062",
      "hpv": "Negative",
      "experimentalResponse": "S",
      "assays": {
        "CAV1": {
          "rna": 0.93832,
          "protein": 0.491159422,
          "rnaSourceValue": 0.93832,
          "rnaStatus": "measured",
          "rnaPercentile": 68.75,
          "proteinPercentile": 60.9375,
          "rankGap": 7.8125
        },
        "SOX2": {
          "rna": 0.027255,
          "protein": -0.208241364,
          "rnaSourceValue": 0.027255,
          "rnaStatus": "measured",
          "rnaPercentile": 47.61904761904762,
          "proteinPercentile": 37.5,
          "rankGap": 10.11904761904762
        },
        "AXL": {
          "rna": 0.34437,
          "protein": 0.04867591,
          "rnaSourceValue": 0.34437,
          "rnaStatus": "measured",
          "rnaPercentile": 53.125,
          "proteinPercentile": 50.0,
          "rankGap": 3.125
        },
        "TMEM173": {
          "rna": -0.28656,
          "protein": -0.615743268,
          "rnaSourceValue": -0.28656,
          "rnaStatus": "measured",
          "rnaPercentile": 39.0625,
          "proteinPercentile": 31.25,
          "rankGap": 7.8125
        },
        "BRD4": {
          "rna": -0.72438,
          "protein": -0.109029938,
          "rnaSourceValue": -0.72438,
          "rnaStatus": "measured",
          "rnaPercentile": 18.75,
          "proteinPercentile": 37.5,
          "rankGap": 18.75
        },
        "CLDN7": {
          "rna": -2.0089,
          "protein": 0.159062777,
          "rnaSourceValue": -2.0089,
          "rnaStatus": "measured",
          "rnaPercentile": 20.634920634920636,
          "proteinPercentile": 60.9375,
          "rankGap": 40.30257936507937
        },
        "GJA1": {
          "rna": 2.483,
          "protein": 1.658385789,
          "rnaSourceValue": 2.483,
          "rnaStatus": "measured",
          "rnaPercentile": 98.4375,
          "proteinPercentile": 98.4375,
          "rankGap": 0.0
        },
        "FN1": {
          "rna": 0.40195,
          "protein": -0.476639627,
          "rnaSourceValue": 0.40195,
          "rnaStatus": "measured",
          "rnaPercentile": 50.0,
          "proteinPercentile": 18.75,
          "rankGap": 31.25
        }
      },
      "growth": {
        "days": [
          {
            "day": 1,
            "vehicleMean": 1,
            "vehicleN": 2,
            "vehicleMissingN": 0,
            "vehicleSD": 0.0,
            "vehicleMin": 1,
            "vehicleMax": 1,
            "cetuximabMean": 1,
            "cetuximabN": 2,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.0,
            "cetuximabMin": 1,
            "cetuximabMax": 1,
            "ratio": 1.0
          },
          {
            "day": 6,
            "vehicleMean": 1.1726795,
            "vehicleN": 2,
            "vehicleMissingN": 0,
            "vehicleSD": 0.18039213226884365,
            "vehicleMin": 1.045123,
            "vehicleMax": 1.300236,
            "cetuximabMean": 0.845934,
            "cetuximabN": 2,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.034758540936005916,
            "cetuximabMin": 0.821356,
            "cetuximabMax": 0.870512,
            "ratio": 0.7213684557460073
          },
          {
            "day": 8,
            "vehicleMean": 1.473032,
            "vehicleN": 2,
            "vehicleMissingN": 0,
            "vehicleSD": 0.4061338508423056,
            "vehicleMin": 1.185852,
            "vehicleMax": 1.760212,
            "cetuximabMean": 0.6593795,
            "cetuximabN": 2,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.15044050323134395,
            "cetuximabMin": 0.553002,
            "cetuximabMax": 0.765757,
            "ratio": 0.447634199392817
          },
          {
            "day": 13,
            "vehicleMean": 2.2320455,
            "vehicleN": 2,
            "vehicleMissingN": 0,
            "vehicleSD": 0.6475379846190491,
            "vehicleMin": 1.774167,
            "vehicleMax": 2.689924,
            "cetuximabMean": 0.483529,
            "cetuximabN": 2,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.009605338515638051,
            "cetuximabMin": 0.476737,
            "cetuximabMax": 0.490321,
            "ratio": 0.21663044055329517
          },
          {
            "day": 15,
            "vehicleMean": 2.3183825,
            "vehicleN": 2,
            "vehicleMissingN": 0,
            "vehicleSD": 0.5881113165145692,
            "vehicleMin": 1.902525,
            "vehicleMax": 2.73424,
            "cetuximabMean": 0.46802699999999997,
            "cetuximabN": 2,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.019562816208307042,
            "cetuximabMin": 0.454194,
            "cetuximabMax": 0.48186,
            "ratio": 0.20187652382641777
          },
          {
            "day": 20,
            "vehicleMean": 3.206845,
            "vehicleN": 2,
            "vehicleMissingN": 0,
            "vehicleSD": 0.2049605573811701,
            "vehicleMin": 3.061916,
            "vehicleMax": 3.351774,
            "cetuximabMean": 0.4568805,
            "cetuximabN": 2,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.021059761264078946,
            "cetuximabMin": 0.441989,
            "cetuximabMax": 0.471772,
            "ratio": 0.142470403153255
          }
        ],
        "endpoints": {
          "final": {
            "day": 20,
            "vehicleMean": 3.206845,
            "vehicleN": 2,
            "vehicleMissingN": 0,
            "vehicleSD": 0.2049605573811701,
            "vehicleMin": 3.061916,
            "vehicleMax": 3.351774,
            "cetuximabMean": 0.4568805,
            "cetuximabN": 2,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.021059761264078946,
            "cetuximabMin": 0.441989,
            "cetuximabMax": 0.471772,
            "ratio": 0.142470403153255
          },
          "day14": {
            "day": 13,
            "vehicleMean": 2.2320455,
            "vehicleN": 2,
            "vehicleMissingN": 0,
            "vehicleSD": 0.6475379846190491,
            "vehicleMin": 1.774167,
            "vehicleMax": 2.689924,
            "cetuximabMean": 0.483529,
            "cetuximabN": 2,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.009605338515638051,
            "cetuximabMin": 0.476737,
            "cetuximabMax": 0.490321,
            "ratio": 0.21663044055329517
          }
        },
        "sourceFinalFlagDays": [
          20
        ]
      }
    },
    {
      "id": "JG4",
      "sourceModelId": "JGHL4",
      "pdxNumber": "HN11-6031",
      "hpv": "Negative",
      "experimentalResponse": "not evaluated",
      "assays": {
        "CAV1": {
          "rna": 0.67879,
          "protein": 0.525386645,
          "rnaSourceValue": 0.67879,
          "rnaStatus": "measured",
          "rnaPercentile": 62.5,
          "proteinPercentile": 65.625,
          "rankGap": 3.125
        },
        "SOX2": {
          "rna": -0.25873,
          "protein": -0.766660845,
          "rnaSourceValue": -0.25873,
          "rnaStatus": "measured",
          "rnaPercentile": 36.507936507936506,
          "proteinPercentile": 6.25,
          "rankGap": 30.257936507936506
        },
        "AXL": {
          "rna": -1.1238,
          "protein": -0.81179861,
          "rnaSourceValue": -1.1238,
          "rnaStatus": "measured",
          "rnaPercentile": 31.25,
          "proteinPercentile": 29.6875,
          "rankGap": 1.5625
        },
        "TMEM173": {
          "rna": 0.72954,
          "protein": 1.372168875,
          "rnaSourceValue": 0.72954,
          "rnaStatus": "measured",
          "rnaPercentile": 65.625,
          "proteinPercentile": 81.25,
          "rankGap": 15.625
        },
        "BRD4": {
          "rna": -0.075959,
          "protein": -0.601468601,
          "rnaSourceValue": -0.075959,
          "rnaStatus": "measured",
          "rnaPercentile": 42.1875,
          "proteinPercentile": 10.9375,
          "rankGap": 31.25
        },
        "CLDN7": {
          "rna": -0.47682,
          "protein": -0.064676843,
          "rnaSourceValue": -0.47682,
          "rnaStatus": "measured",
          "rnaPercentile": 38.095238095238095,
          "proteinPercentile": 35.9375,
          "rankGap": 2.157738095238095
        },
        "GJA1": {
          "rna": 1.4488,
          "protein": 0.498731382,
          "rnaSourceValue": 1.4488,
          "rnaStatus": "measured",
          "rnaPercentile": 87.5,
          "proteinPercentile": 64.0625,
          "rankGap": 23.4375
        },
        "FN1": {
          "rna": 1.3854,
          "protein": -0.465399725,
          "rnaSourceValue": 1.3854,
          "rnaStatus": "measured",
          "rnaPercentile": 60.9375,
          "proteinPercentile": 20.3125,
          "rankGap": 40.625
        }
      },
      "growth": {
        "days": [],
        "endpoints": {
          "final": null,
          "day14": null
        },
        "sourceFinalFlagDays": []
      }
    },
    {
      "id": "JG5",
      "sourceModelId": "JGHL5",
      "pdxNumber": "HN11-6213",
      "hpv": "Positive",
      "experimentalResponse": "not evaluated",
      "assays": {
        "CAV1": {
          "rna": -4.7171,
          "protein": -1.559847216,
          "rnaSourceValue": -4.7171,
          "rnaStatus": "measured",
          "rnaPercentile": 1.5625,
          "proteinPercentile": 4.6875,
          "rankGap": 3.125
        },
        "SOX2": {
          "rna": 2.5711,
          "protein": 1.390724953,
          "rnaSourceValue": 2.5711,
          "rnaStatus": "measured",
          "rnaPercentile": 77.77777777777777,
          "proteinPercentile": 84.375,
          "rankGap": 6.5972222222222285
        },
        "AXL": {
          "rna": -2.8408,
          "protein": -1.508787073,
          "rnaSourceValue": -2.8408,
          "rnaStatus": "measured",
          "rnaPercentile": 12.5,
          "proteinPercentile": 3.125,
          "rankGap": 9.375
        },
        "TMEM173": {
          "rna": -5.2536,
          "protein": -2.551152923,
          "rnaSourceValue": -5.2536,
          "rnaStatus": "measured",
          "rnaPercentile": 0.0,
          "proteinPercentile": 9.375,
          "rankGap": 9.375
        },
        "BRD4": {
          "rna": 1.0989,
          "protein": 0.945046221,
          "rnaSourceValue": 1.0989,
          "rnaStatus": "measured",
          "rnaPercentile": 85.9375,
          "proteinPercentile": 81.25,
          "rankGap": 4.6875
        },
        "CLDN7": {
          "rna": 3.4533,
          "protein": 1.254194771,
          "rnaSourceValue": 3.4533,
          "rnaStatus": "measured",
          "rnaPercentile": 96.82539682539682,
          "proteinPercentile": 89.0625,
          "rankGap": 7.7628968253968225
        },
        "GJA1": {
          "rna": -2.2072,
          "protein": -2.105884515,
          "rnaSourceValue": -2.2072,
          "rnaStatus": "measured",
          "rnaPercentile": 10.9375,
          "proteinPercentile": 9.375,
          "rankGap": 1.5625
        },
        "FN1": {
          "rna": -6.0843,
          "protein": -1.323031201,
          "rnaSourceValue": -6.0843,
          "rnaStatus": "measured",
          "rnaPercentile": 1.5625,
          "proteinPercentile": 4.6875,
          "rankGap": 3.125
        }
      },
      "growth": {
        "days": [],
        "endpoints": {
          "final": null,
          "day14": null
        },
        "sourceFinalFlagDays": []
      }
    },
    {
      "id": "JG6",
      "sourceModelId": "JGHL6",
      "pdxNumber": "HN11-6214",
      "hpv": "Negative",
      "experimentalResponse": "not evaluated",
      "assays": {
        "CAV1": {
          "rna": -1.4582,
          "protein": -0.328826934,
          "rnaSourceValue": -1.4582,
          "rnaStatus": "measured",
          "rnaPercentile": 23.4375,
          "proteinPercentile": 42.1875,
          "rankGap": 18.75
        },
        "SOX2": {
          "rna": -1.5425,
          "protein": -0.282094019,
          "rnaSourceValue": -1.5425,
          "rnaStatus": "measured",
          "rnaPercentile": 6.349206349206349,
          "proteinPercentile": 31.25,
          "rankGap": 24.900793650793652
        },
        "AXL": {
          "rna": -0.96997,
          "protein": -0.975433035,
          "rnaSourceValue": -0.96997,
          "rnaStatus": "measured",
          "rnaPercentile": 36.71875,
          "proteinPercentile": 21.875,
          "rankGap": 14.84375
        },
        "TMEM173": {
          "rna": -0.94088,
          "protein": -2.83844689,
          "rnaSourceValue": -0.94088,
          "rnaStatus": "measured",
          "rnaPercentile": 17.1875,
          "proteinPercentile": 6.25,
          "rankGap": 10.9375
        },
        "BRD4": {
          "rna": -0.38649,
          "protein": -0.873654531,
          "rnaSourceValue": -0.38649,
          "rnaStatus": "measured",
          "rnaPercentile": 28.125,
          "proteinPercentile": 1.5625,
          "rankGap": 26.5625
        },
        "CLDN7": {
          "rna": -6.1717,
          "protein": 0.051443587,
          "rnaSourceValue": -6.1717,
          "rnaStatus": "measured",
          "rnaPercentile": 2.380952380952381,
          "proteinPercentile": 51.5625,
          "rankGap": 49.18154761904762
        },
        "GJA1": {
          "rna": 1.7035,
          "protein": 0.353994042,
          "rnaSourceValue": 1.7035,
          "rnaStatus": "measured",
          "rnaPercentile": 93.75,
          "proteinPercentile": 57.8125,
          "rankGap": 35.9375
        },
        "FN1": {
          "rna": -4.1968,
          "protein": 0.587884603,
          "rnaSourceValue": -4.1968,
          "rnaStatus": "measured",
          "rnaPercentile": 7.8125,
          "proteinPercentile": 71.875,
          "rankGap": 64.0625
        }
      },
      "growth": {
        "days": [],
        "endpoints": {
          "final": null,
          "day14": null
        },
        "sourceFinalFlagDays": []
      }
    },
    {
      "id": "JG7",
      "sourceModelId": "JGHL7",
      "pdxNumber": "HN11-6225",
      "hpv": "Negative",
      "experimentalResponse": "R",
      "assays": {
        "CAV1": {
          "rna": -1.6052,
          "protein": -0.237536221,
          "rnaSourceValue": -1.6052,
          "rnaStatus": "measured",
          "rnaPercentile": 21.875,
          "proteinPercentile": 45.3125,
          "rankGap": 23.4375
        },
        "SOX2": {
          "rna": 3.3973,
          "protein": 1.951606567,
          "rnaSourceValue": 3.3973,
          "rnaStatus": "measured",
          "rnaPercentile": 90.47619047619048,
          "proteinPercentile": 90.625,
          "rankGap": 0.1488095238095184
        },
        "AXL": {
          "rna": -1.6731,
          "protein": -0.987552875,
          "rnaSourceValue": -1.6731,
          "rnaStatus": "measured",
          "rnaPercentile": 23.4375,
          "proteinPercentile": 20.3125,
          "rankGap": 3.125
        },
        "TMEM173": {
          "rna": 0.52276,
          "protein": 0.959531344,
          "rnaSourceValue": 0.52276,
          "rnaStatus": "measured",
          "rnaPercentile": 64.0625,
          "proteinPercentile": 75.0,
          "rankGap": 10.9375
        },
        "BRD4": {
          "rna": -0.19987,
          "protein": -0.088396313,
          "rnaSourceValue": -0.19987,
          "rnaStatus": "measured",
          "rnaPercentile": 35.9375,
          "proteinPercentile": 39.0625,
          "rankGap": 3.125
        },
        "CLDN7": {
          "rna": 2.2104,
          "protein": 0.631810858,
          "rnaSourceValue": 2.2104,
          "rnaStatus": "measured",
          "rnaPercentile": 76.19047619047619,
          "proteinPercentile": 78.125,
          "rankGap": 1.9345238095238102
        },
        "GJA1": {
          "rna": 0.59427,
          "protein": -0.212866095,
          "rnaSourceValue": 0.59427,
          "rnaStatus": "measured",
          "rnaPercentile": 70.3125,
          "proteinPercentile": 37.5,
          "rankGap": 32.8125
        },
        "FN1": {
          "rna": -3.7768,
          "protein": -1.094298787,
          "rnaSourceValue": -3.7768,
          "rnaStatus": "measured",
          "rnaPercentile": 12.5,
          "proteinPercentile": 7.8125,
          "rankGap": 4.6875
        }
      },
      "growth": {
        "days": [
          {
            "day": 1,
            "vehicleMean": 1,
            "vehicleN": 2,
            "vehicleMissingN": 0,
            "vehicleSD": 0.0,
            "vehicleMin": 1,
            "vehicleMax": 1,
            "cetuximabMean": 1,
            "cetuximabN": 2,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.0,
            "cetuximabMin": 1,
            "cetuximabMax": 1,
            "ratio": 1.0
          },
          {
            "day": 6,
            "vehicleMean": 1.3328915000000001,
            "vehicleN": 2,
            "vehicleMissingN": 0,
            "vehicleSD": 0.023499279659172426,
            "vehicleMin": 1.316275,
            "vehicleMax": 1.349508,
            "cetuximabMean": 1.403676,
            "cetuximabN": 2,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.3274201381741813,
            "cetuximabMin": 1.172155,
            "cetuximabMax": 1.635197,
            "ratio": 1.0531059729918
          },
          {
            "day": 8,
            "vehicleMean": 1.5664675,
            "vehicleN": 2,
            "vehicleMissingN": 0,
            "vehicleSD": 0.08613055569598979,
            "vehicleMin": 1.505564,
            "vehicleMax": 1.627371,
            "cetuximabMean": 1.403676,
            "cetuximabN": 2,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.3274201381741813,
            "cetuximabMin": 1.172155,
            "cetuximabMax": 1.635197,
            "ratio": 0.896077320467868
          },
          {
            "day": 13,
            "vehicleMean": 2.556153,
            "vehicleN": 2,
            "vehicleMissingN": 0,
            "vehicleSD": 1.098128345901334,
            "vehicleMin": 1.779659,
            "vehicleMax": 3.332647,
            "cetuximabMean": 2.2804395,
            "cetuximabN": 2,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.1222156289535015,
            "cetuximabMin": 2.19402,
            "cetuximabMax": 2.366859,
            "ratio": 0.892137325113168
          },
          {
            "day": 15,
            "vehicleMean": 2.855819,
            "vehicleN": 2,
            "vehicleMissingN": 0,
            "vehicleSD": 1.2659629688430858,
            "vehicleMin": 1.960648,
            "vehicleMax": 3.75099,
            "cetuximabMean": 2.4596505000000004,
            "cetuximabN": 2,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.0592350421667783,
            "cetuximabMin": 2.417765,
            "cetuximabMax": 2.501536,
            "ratio": 0.8612767475809918
          },
          {
            "day": 20,
            "vehicleMean": 3.177308,
            "vehicleN": 2,
            "vehicleMissingN": 0,
            "vehicleSD": 0.9264654468462384,
            "vehicleMin": 2.522198,
            "vehicleMax": 3.832418,
            "cetuximabMean": 2.9608790000000003,
            "cetuximabN": 2,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.3451982168667735,
            "cetuximabMin": 2.716787,
            "cetuximabMax": 3.204971,
            "ratio": 0.9318829021297275
          }
        ],
        "endpoints": {
          "final": {
            "day": 20,
            "vehicleMean": 3.177308,
            "vehicleN": 2,
            "vehicleMissingN": 0,
            "vehicleSD": 0.9264654468462384,
            "vehicleMin": 2.522198,
            "vehicleMax": 3.832418,
            "cetuximabMean": 2.9608790000000003,
            "cetuximabN": 2,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.3451982168667735,
            "cetuximabMin": 2.716787,
            "cetuximabMax": 3.204971,
            "ratio": 0.9318829021297275
          },
          "day14": {
            "day": 13,
            "vehicleMean": 2.556153,
            "vehicleN": 2,
            "vehicleMissingN": 0,
            "vehicleSD": 1.098128345901334,
            "vehicleMin": 1.779659,
            "vehicleMax": 3.332647,
            "cetuximabMean": 2.2804395,
            "cetuximabN": 2,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.1222156289535015,
            "cetuximabMin": 2.19402,
            "cetuximabMax": 2.366859,
            "ratio": 0.892137325113168
          }
        },
        "sourceFinalFlagDays": [
          20
        ]
      }
    },
    {
      "id": "JG8",
      "sourceModelId": "JGHL8",
      "pdxNumber": "HN11-6282",
      "hpv": "Negative",
      "experimentalResponse": "S",
      "assays": {
        "CAV1": {
          "rna": 1.0053,
          "protein": 0.494828955,
          "rnaSourceValue": 1.0053,
          "rnaStatus": "measured",
          "rnaPercentile": 70.3125,
          "proteinPercentile": 62.5,
          "rankGap": 7.8125
        },
        "SOX2": {
          "rna": 1.2106,
          "protein": 0.768583131,
          "rnaSourceValue": 1.2106,
          "rnaStatus": "measured",
          "rnaPercentile": 61.904761904761905,
          "proteinPercentile": 62.5,
          "rankGap": 0.5952380952380949
        },
        "AXL": {
          "rna": 2.49,
          "protein": 2.338426822,
          "rnaSourceValue": 2.49,
          "rnaStatus": "measured",
          "rnaPercentile": 87.5,
          "proteinPercentile": 98.4375,
          "rankGap": 10.9375
        },
        "TMEM173": {
          "rna": -0.64074,
          "protein": -0.265979316,
          "rnaSourceValue": -0.64074,
          "rnaStatus": "measured",
          "rnaPercentile": 26.5625,
          "proteinPercentile": 40.625,
          "rankGap": 14.0625
        },
        "BRD4": {
          "rna": -0.74768,
          "protein": -0.259007297,
          "rnaSourceValue": -0.74768,
          "rnaStatus": "measured",
          "rnaPercentile": 14.0625,
          "proteinPercentile": 23.4375,
          "rankGap": 9.375
        },
        "CLDN7": {
          "rna": -0.15329,
          "protein": -0.199205899,
          "rnaSourceValue": -0.15329,
          "rnaStatus": "measured",
          "rnaPercentile": 44.44444444444444,
          "proteinPercentile": 28.125,
          "rankGap": 16.319444444444443
        },
        "GJA1": {
          "rna": 1.5082,
          "protein": 1.126776595,
          "rnaSourceValue": 1.5082,
          "rnaStatus": "measured",
          "rnaPercentile": 89.0625,
          "proteinPercentile": 85.9375,
          "rankGap": 3.125
        },
        "FN1": {
          "rna": 3.7138,
          "protein": 0.266418587,
          "rnaSourceValue": 3.7138,
          "rnaStatus": "measured",
          "rnaPercentile": 82.8125,
          "proteinPercentile": 64.0625,
          "rankGap": 18.75
        }
      },
      "growth": {
        "days": [
          {
            "day": 1,
            "vehicleMean": 1,
            "vehicleN": 2,
            "vehicleMissingN": 0,
            "vehicleSD": 0.0,
            "vehicleMin": 1,
            "vehicleMax": 1,
            "cetuximabMean": 1,
            "cetuximabN": 2,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.0,
            "cetuximabMin": 1,
            "cetuximabMax": 1,
            "ratio": 1.0
          },
          {
            "day": 6,
            "vehicleMean": 1.912229,
            "vehicleN": 2,
            "vehicleMissingN": 0,
            "vehicleSD": 0.5813294553762094,
            "vehicleMin": 1.501167,
            "vehicleMax": 2.323291,
            "cetuximabMean": 0.8196265,
            "cetuximabN": 2,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.0022238508268317375,
            "cetuximabMin": 0.818054,
            "cetuximabMax": 0.821199,
            "ratio": 0.42862361150259726
          },
          {
            "day": 8,
            "vehicleMean": 2.351338,
            "vehicleN": 2,
            "vehicleMissingN": 0,
            "vehicleSD": 0.03463550435607953,
            "vehicleMin": 2.326847,
            "vehicleMax": 2.375829,
            "cetuximabMean": 0.735912,
            "cetuximabN": 2,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.04727715939013251,
            "cetuximabMin": 0.702482,
            "cetuximabMax": 0.769342,
            "ratio": 0.31297584609273527
          },
          {
            "day": 13,
            "vehicleMean": 3.543674,
            "vehicleN": 2,
            "vehicleMissingN": 0,
            "vehicleSD": 0.3099362159025627,
            "vehicleMin": 3.324516,
            "vehicleMax": 3.762832,
            "cetuximabMean": 0.6923079999999999,
            "cetuximabN": 2,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.06991447588303872,
            "cetuximabMin": 0.642871,
            "cetuximabMax": 0.741745,
            "ratio": 0.1953644720140735
          },
          {
            "day": 15,
            "vehicleMean": 3.9934770000000004,
            "vehicleN": 2,
            "vehicleMissingN": 0,
            "vehicleSD": 0.6081839567121119,
            "vehicleMin": 3.563426,
            "vehicleMax": 4.423528,
            "cetuximabMean": 0.621981,
            "cetuximabN": 2,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.12659332703582762,
            "cetuximabMin": 0.532466,
            "cetuximabMax": 0.711496,
            "ratio": 0.15574923806998262
          },
          {
            "day": 20,
            "vehicleMean": 4.4819735000000005,
            "vehicleN": 2,
            "vehicleMissingN": 0,
            "vehicleSD": 0.6709969591916937,
            "vehicleMin": 4.007507,
            "vehicleMax": 4.95644,
            "cetuximabMean": 0.4103915,
            "cetuximabN": 2,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.14792885994456934,
            "cetuximabMin": 0.30579,
            "cetuximabMax": 0.514993,
            "ratio": 0.09156490996655825
          }
        ],
        "endpoints": {
          "final": {
            "day": 20,
            "vehicleMean": 4.4819735000000005,
            "vehicleN": 2,
            "vehicleMissingN": 0,
            "vehicleSD": 0.6709969591916937,
            "vehicleMin": 4.007507,
            "vehicleMax": 4.95644,
            "cetuximabMean": 0.4103915,
            "cetuximabN": 2,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.14792885994456934,
            "cetuximabMin": 0.30579,
            "cetuximabMax": 0.514993,
            "ratio": 0.09156490996655825
          },
          "day14": {
            "day": 13,
            "vehicleMean": 3.543674,
            "vehicleN": 2,
            "vehicleMissingN": 0,
            "vehicleSD": 0.3099362159025627,
            "vehicleMin": 3.324516,
            "vehicleMax": 3.762832,
            "cetuximabMean": 0.6923079999999999,
            "cetuximabN": 2,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.06991447588303872,
            "cetuximabMin": 0.642871,
            "cetuximabMax": 0.741745,
            "ratio": 0.1953644720140735
          }
        },
        "sourceFinalFlagDays": [
          20
        ]
      }
    },
    {
      "id": "JG9",
      "sourceModelId": "JGHL9",
      "pdxNumber": "HN11-6335",
      "hpv": "Negative",
      "experimentalResponse": "S",
      "assays": {
        "CAV1": {
          "rna": -0.31349,
          "protein": 0.515299502,
          "rnaSourceValue": -0.31349,
          "rnaStatus": "measured",
          "rnaPercentile": 42.1875,
          "proteinPercentile": 64.0625,
          "rankGap": 21.875
        },
        "SOX2": {
          "rna": -0.86969,
          "protein": -0.214540621,
          "rnaSourceValue": -0.86969,
          "rnaStatus": "measured",
          "rnaPercentile": 20.634920634920636,
          "proteinPercentile": 35.9375,
          "rankGap": 15.302579365079364
        },
        "AXL": {
          "rna": 0.067365,
          "protein": 0.497139472,
          "rnaSourceValue": 0.067365,
          "rnaStatus": "measured",
          "rnaPercentile": 51.5625,
          "proteinPercentile": 62.5,
          "rankGap": 10.9375
        },
        "TMEM173": {
          "rna": -1.6763,
          "protein": -0.996939256,
          "rnaSourceValue": -1.6763,
          "rnaStatus": "measured",
          "rnaPercentile": 7.8125,
          "proteinPercentile": 18.75,
          "rankGap": 10.9375
        },
        "BRD4": {
          "rna": -0.29422,
          "protein": 0.157402225,
          "rnaSourceValue": -0.29422,
          "rnaStatus": "measured",
          "rnaPercentile": 31.25,
          "proteinPercentile": 56.25,
          "rankGap": 25.0
        },
        "CLDN7": {
          "rna": -6.1717,
          "protein": -0.240903896,
          "rnaSourceValue": -6.1717,
          "rnaStatus": "measured",
          "rnaPercentile": 2.380952380952381,
          "proteinPercentile": 23.4375,
          "rankGap": 21.05654761904762
        },
        "GJA1": {
          "rna": 0.58745,
          "protein": 0.248203636,
          "rnaSourceValue": 0.58745,
          "rnaStatus": "measured",
          "rnaPercentile": 68.75,
          "proteinPercentile": 54.6875,
          "rankGap": 14.0625
        },
        "FN1": {
          "rna": 2.2062,
          "protein": 0.605003545,
          "rnaSourceValue": 2.2062,
          "rnaStatus": "measured",
          "rnaPercentile": 68.75,
          "proteinPercentile": 73.4375,
          "rankGap": 4.6875
        }
      },
      "growth": {
        "days": [
          {
            "day": 1,
            "vehicleMean": 1,
            "vehicleN": 4,
            "vehicleMissingN": 0,
            "vehicleSD": 0.0,
            "vehicleMin": 1,
            "vehicleMax": 1,
            "cetuximabMean": 1,
            "cetuximabN": 4,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.0,
            "cetuximabMin": 1,
            "cetuximabMax": 1,
            "ratio": 1.0
          },
          {
            "day": 6,
            "vehicleMean": 1.5583369999999999,
            "vehicleN": 4,
            "vehicleMissingN": 0,
            "vehicleSD": 0.3121056358489329,
            "vehicleMin": 1.304193,
            "vehicleMax": 1.968533,
            "cetuximabMean": 0.85355,
            "cetuximabN": 4,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.10627525053369666,
            "cetuximabMin": 0.697907,
            "cetuximabMax": 0.937723,
            "ratio": 0.5477313315412521
          },
          {
            "day": 8,
            "vehicleMean": 1.92089525,
            "vehicleN": 4,
            "vehicleMissingN": 0,
            "vehicleSD": 0.5465821641128167,
            "vehicleMin": 1.438675,
            "vehicleMax": 2.573722,
            "cetuximabMean": 0.72932975,
            "cetuximabN": 4,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.0978785329217631,
            "cetuximabMin": 0.5835,
            "cetuximabMax": 0.793075,
            "ratio": 0.37968220807459435
          },
          {
            "day": 13,
            "vehicleMean": 2.750476,
            "vehicleN": 4,
            "vehicleMissingN": 0,
            "vehicleSD": 0.44447491776327125,
            "vehicleMin": 2.33588,
            "vehicleMax": 3.351681,
            "cetuximabMean": 0.6103824999999999,
            "cetuximabN": 4,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.06217266486433835,
            "cetuximabMin": 0.549653,
            "cetuximabMax": 0.681869,
            "ratio": 0.22191886058994878
          },
          {
            "day": 15,
            "vehicleMean": 3.28021225,
            "vehicleN": 4,
            "vehicleMissingN": 0,
            "vehicleSD": 0.4019068173249243,
            "vehicleMin": 2.684684,
            "vehicleMax": 3.532399,
            "cetuximabMean": 0.56053425,
            "cetuximabN": 4,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.07669789007691152,
            "cetuximabMin": 0.474887,
            "cetuximabMax": 0.65375,
            "ratio": 0.17088353047885851
          },
          {
            "day": 20,
            "vehicleMean": 4.8684445,
            "vehicleN": 4,
            "vehicleMissingN": 0,
            "vehicleSD": 0.987905687127572,
            "vehicleMin": 3.621581,
            "vehicleMax": 5.885906,
            "cetuximabMean": 0.51522475,
            "cetuximabN": 4,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.08357370994666921,
            "cetuximabMin": 0.417264,
            "cetuximabMax": 0.603355,
            "ratio": 0.10582943895118863
          }
        ],
        "endpoints": {
          "final": {
            "day": 20,
            "vehicleMean": 4.8684445,
            "vehicleN": 4,
            "vehicleMissingN": 0,
            "vehicleSD": 0.987905687127572,
            "vehicleMin": 3.621581,
            "vehicleMax": 5.885906,
            "cetuximabMean": 0.51522475,
            "cetuximabN": 4,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.08357370994666921,
            "cetuximabMin": 0.417264,
            "cetuximabMax": 0.603355,
            "ratio": 0.10582943895118863
          },
          "day14": {
            "day": 13,
            "vehicleMean": 2.750476,
            "vehicleN": 4,
            "vehicleMissingN": 0,
            "vehicleSD": 0.44447491776327125,
            "vehicleMin": 2.33588,
            "vehicleMax": 3.351681,
            "cetuximabMean": 0.6103824999999999,
            "cetuximabN": 4,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.06217266486433835,
            "cetuximabMin": 0.549653,
            "cetuximabMax": 0.681869,
            "ratio": 0.22191886058994878
          }
        },
        "sourceFinalFlagDays": [
          20
        ]
      }
    },
    {
      "id": "JG10",
      "sourceModelId": "JGHL10",
      "pdxNumber": "HN11-6397",
      "hpv": "Negative",
      "experimentalResponse": "not evaluated",
      "assays": {
        "CAV1": {
          "rna": -1.6365,
          "protein": -0.235513897,
          "rnaSourceValue": -1.6365,
          "rnaStatus": "measured",
          "rnaPercentile": 18.75,
          "proteinPercentile": 46.875,
          "rankGap": 28.125
        },
        "SOX2": {
          "rna": 0.57456,
          "protein": -0.095428462,
          "rnaSourceValue": 0.57456,
          "rnaStatus": "measured",
          "rnaPercentile": 55.55555555555556,
          "proteinPercentile": 43.75,
          "rankGap": 11.805555555555557
        },
        "AXL": {
          "rna": -2.042,
          "protein": -0.608600544,
          "rnaSourceValue": -2.042,
          "rnaStatus": "measured",
          "rnaPercentile": 21.875,
          "proteinPercentile": 35.9375,
          "rankGap": 14.0625
        },
        "TMEM173": {
          "rna": 0.79175,
          "protein": 1.89212492,
          "rnaSourceValue": 0.79175,
          "rnaStatus": "measured",
          "rnaPercentile": 68.75,
          "proteinPercentile": 87.5,
          "rankGap": 18.75
        },
        "BRD4": {
          "rna": -0.76572,
          "protein": -0.387888634,
          "rnaSourceValue": -0.76572,
          "rnaStatus": "measured",
          "rnaPercentile": 12.5,
          "proteinPercentile": 17.1875,
          "rankGap": 4.6875
        },
        "CLDN7": {
          "rna": 0.58081,
          "protein": 0.06445783,
          "rnaSourceValue": 0.58081,
          "rnaStatus": "measured",
          "rnaPercentile": 53.96825396825397,
          "proteinPercentile": 53.125,
          "rankGap": 0.8432539682539684
        },
        "GJA1": {
          "rna": 0.29106,
          "protein": -0.505372194,
          "rnaSourceValue": 0.29106,
          "rnaStatus": "measured",
          "rnaPercentile": 56.25,
          "proteinPercentile": 29.6875,
          "rankGap": 26.5625
        },
        "FN1": {
          "rna": -2.1162,
          "protein": -0.906979961,
          "rnaSourceValue": -2.1162,
          "rnaStatus": "measured",
          "rnaPercentile": 34.375,
          "proteinPercentile": 14.0625,
          "rankGap": 20.3125
        }
      },
      "growth": {
        "days": [],
        "endpoints": {
          "final": null,
          "day14": null
        },
        "sourceFinalFlagDays": []
      }
    },
    {
      "id": "JG11",
      "sourceModelId": "JGHL11",
      "pdxNumber": "HN12-6431",
      "hpv": "Negative",
      "experimentalResponse": "S",
      "assays": {
        "CAV1": {
          "rna": -0.9417,
          "protein": 1.489908437,
          "rnaSourceValue": -0.9417,
          "rnaStatus": "measured",
          "rnaPercentile": 28.125,
          "proteinPercentile": 98.4375,
          "rankGap": 70.3125
        },
        "SOX2": {
          "rna": -0.34727,
          "protein": -0.162971095,
          "rnaSourceValue": -0.34727,
          "rnaStatus": "measured",
          "rnaPercentile": 30.158730158730158,
          "proteinPercentile": 40.625,
          "rankGap": 10.466269841269842
        },
        "AXL": {
          "rna": -0.60021,
          "protein": 0.328515593,
          "rnaSourceValue": -0.60021,
          "rnaStatus": "measured",
          "rnaPercentile": 40.625,
          "proteinPercentile": 51.5625,
          "rankGap": 10.9375
        },
        "TMEM173": {
          "rna": 1.5314,
          "protein": -0.810875944,
          "rnaSourceValue": 1.5314,
          "rnaStatus": "measured",
          "rnaPercentile": 92.1875,
          "proteinPercentile": 25.0,
          "rankGap": 67.1875
        },
        "BRD4": {
          "rna": 0.20296,
          "protein": -0.075339516,
          "rnaSourceValue": 0.20296,
          "rnaStatus": "measured",
          "rnaPercentile": 62.5,
          "proteinPercentile": 40.625,
          "rankGap": 21.875
        },
        "CLDN7": {
          "rna": 1.4081,
          "protein": -0.033852987,
          "rnaSourceValue": 1.4081,
          "rnaStatus": "measured",
          "rnaPercentile": 63.492063492063494,
          "proteinPercentile": 43.75,
          "rankGap": 19.742063492063494
        },
        "GJA1": {
          "rna": -0.80825,
          "protein": 1.04394679,
          "rnaSourceValue": -0.80825,
          "rnaStatus": "measured",
          "rnaPercentile": 34.375,
          "proteinPercentile": 82.8125,
          "rankGap": 48.4375
        },
        "FN1": {
          "rna": 2.2702,
          "protein": 0.150825524,
          "rnaSourceValue": 2.2702,
          "rnaStatus": "measured",
          "rnaPercentile": 71.875,
          "proteinPercentile": 54.6875,
          "rankGap": 17.1875
        }
      },
      "growth": {
        "days": [
          {
            "day": 1,
            "vehicleMean": 1,
            "vehicleN": 4,
            "vehicleMissingN": 0,
            "vehicleSD": 0.0,
            "vehicleMin": 1,
            "vehicleMax": 1,
            "cetuximabMean": 1,
            "cetuximabN": 4,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.0,
            "cetuximabMin": 1,
            "cetuximabMax": 1,
            "ratio": 1.0
          },
          {
            "day": 3,
            "vehicleMean": 1.1398440165000001,
            "vehicleN": 4,
            "vehicleMissingN": 0,
            "vehicleSD": 0.08873053499635694,
            "vehicleMin": 1.051303491,
            "vehicleMax": 1.253454134,
            "cetuximabMean": 0.916128955,
            "cetuximabN": 4,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.06937357729388337,
            "cetuximabMin": 0.846308608,
            "cetuximabMax": 1.01206308,
            "ratio": 0.8037318630781266
          },
          {
            "day": 6,
            "vehicleMean": 1.3502711315,
            "vehicleN": 4,
            "vehicleMissingN": 0,
            "vehicleSD": 0.12443865385392197,
            "vehicleMin": 1.192906386,
            "vehicleMax": 1.48372207,
            "cetuximabMean": 0.69260755875,
            "cetuximabN": 4,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.06360017264352183,
            "cetuximabMin": 0.604402439,
            "cetuximabMax": 0.756247615,
            "ratio": 0.5129396182680663
          },
          {
            "day": 8,
            "vehicleMean": 1.443046524,
            "vehicleN": 4,
            "vehicleMissingN": 0,
            "vehicleSD": 0.14465502424395527,
            "vehicleMin": 1.234064552,
            "vehicleMax": 1.544841763,
            "cetuximabMean": 0.67092697575,
            "cetuximabN": 4,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.07510208377700003,
            "cetuximabMin": 0.563469041,
            "cetuximabMax": 0.737205348,
            "ratio": 0.4649378690094125
          },
          {
            "day": 10,
            "vehicleMean": 1.6506152,
            "vehicleN": 4,
            "vehicleMissingN": 0,
            "vehicleSD": 0.2853975962932211,
            "vehicleMin": 1.320144137,
            "vehicleMax": 1.998512097,
            "cetuximabMean": 0.6447944045,
            "cetuximabN": 4,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.06975345922515805,
            "cetuximabMin": 0.546993154,
            "cetuximabMax": 0.696766932,
            "ratio": 0.39063883847670855
          },
          {
            "day": 13,
            "vehicleMean": 1.8186613715,
            "vehicleN": 4,
            "vehicleMissingN": 0,
            "vehicleSD": 0.3840833550496902,
            "vehicleMin": 1.409633776,
            "vehicleMax": 2.325442208,
            "cetuximabMean": 0.5992754455,
            "cetuximabN": 4,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.06781566407944396,
            "cetuximabMin": 0.508680297,
            "cetuximabMax": 0.663564898,
            "ratio": 0.3295145841282856
          }
        ],
        "endpoints": {
          "final": {
            "day": 13,
            "vehicleMean": 1.8186613715,
            "vehicleN": 4,
            "vehicleMissingN": 0,
            "vehicleSD": 0.3840833550496902,
            "vehicleMin": 1.409633776,
            "vehicleMax": 2.325442208,
            "cetuximabMean": 0.5992754455,
            "cetuximabN": 4,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.06781566407944396,
            "cetuximabMin": 0.508680297,
            "cetuximabMax": 0.663564898,
            "ratio": 0.3295145841282856
          },
          "day14": {
            "day": 13,
            "vehicleMean": 1.8186613715,
            "vehicleN": 4,
            "vehicleMissingN": 0,
            "vehicleSD": 0.3840833550496902,
            "vehicleMin": 1.409633776,
            "vehicleMax": 2.325442208,
            "cetuximabMean": 0.5992754455,
            "cetuximabN": 4,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.06781566407944396,
            "cetuximabMin": 0.508680297,
            "cetuximabMax": 0.663564898,
            "ratio": 0.3295145841282856
          }
        },
        "sourceFinalFlagDays": [
          13
        ]
      }
    },
    {
      "id": "JG12",
      "sourceModelId": "JGHL12",
      "pdxNumber": "HN12-6722",
      "hpv": "Negative",
      "experimentalResponse": "S",
      "assays": {
        "CAV1": {
          "rna": 0.33746,
          "protein": 0.450963712,
          "rnaSourceValue": 0.33746,
          "rnaStatus": "measured",
          "rnaPercentile": 54.6875,
          "proteinPercentile": 59.375,
          "rankGap": 4.6875
        },
        "SOX2": {
          "rna": -0.86315,
          "protein": -0.38990711,
          "rnaSourceValue": -0.86315,
          "rnaStatus": "measured",
          "rnaPercentile": 22.22222222222222,
          "proteinPercentile": 23.4375,
          "rankGap": 1.2152777777777786
        },
        "AXL": {
          "rna": -0.34067,
          "protein": -0.031028605,
          "rnaSourceValue": -0.34067,
          "rnaStatus": "measured",
          "rnaPercentile": 43.75,
          "proteinPercentile": 45.3125,
          "rankGap": 1.5625
        },
        "TMEM173": {
          "rna": -0.78164,
          "protein": -2.757137784,
          "rnaSourceValue": -0.78164,
          "rnaStatus": "measured",
          "rnaPercentile": 21.875,
          "proteinPercentile": 7.8125,
          "rankGap": 14.0625
        },
        "BRD4": {
          "rna": -0.12731,
          "protein": 0.007519122,
          "rnaSourceValue": -0.12731,
          "rnaStatus": "measured",
          "rnaPercentile": 39.0625,
          "proteinPercentile": 50.0,
          "rankGap": 10.9375
        },
        "CLDN7": {
          "rna": -6.306,
          "protein": -0.045480208,
          "rnaSourceValue": -6.306,
          "rnaStatus": "measured",
          "rnaPercentile": 0.0,
          "proteinPercentile": 40.625,
          "rankGap": 40.625
        },
        "GJA1": {
          "rna": 1.6475,
          "protein": 0.561447594,
          "rnaSourceValue": 1.6475,
          "rnaStatus": "measured",
          "rnaPercentile": 92.1875,
          "proteinPercentile": 68.75,
          "rankGap": 23.4375
        },
        "FN1": {
          "rna": 0,
          "protein": -0.215337428,
          "rnaSourceValue": 0,
          "rnaStatus": "measured",
          "rnaPercentile": 48.4375,
          "proteinPercentile": 35.9375,
          "rankGap": 12.5
        }
      },
      "growth": {
        "days": [
          {
            "day": 1,
            "vehicleMean": 1,
            "vehicleN": 4,
            "vehicleMissingN": 0,
            "vehicleSD": 0.0,
            "vehicleMin": 1,
            "vehicleMax": 1,
            "cetuximabMean": 1,
            "cetuximabN": 4,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.0,
            "cetuximabMin": 1,
            "cetuximabMax": 1,
            "ratio": 1.0
          },
          {
            "day": 6,
            "vehicleMean": 1.3828305,
            "vehicleN": 4,
            "vehicleMissingN": 0,
            "vehicleSD": 0.25005011678261624,
            "vehicleMin": 1.113141,
            "vehicleMax": 1.683823,
            "cetuximabMean": 0.9327935,
            "cetuximabN": 4,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.11357094366811726,
            "cetuximabMin": 0.762445,
            "cetuximabMax": 0.991109,
            "ratio": 0.6745537504415762
          },
          {
            "day": 8,
            "vehicleMean": 1.85988325,
            "vehicleN": 4,
            "vehicleMissingN": 0,
            "vehicleSD": 0.6804812341097904,
            "vehicleMin": 1.308057,
            "vehicleMax": 2.822144,
            "cetuximabMean": 0.8757295,
            "cetuximabN": 4,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.12310016234622383,
            "cetuximabMin": 0.692122,
            "cetuximabMax": 0.955016,
            "ratio": 0.4708518666427046
          },
          {
            "day": 13,
            "vehicleMean": 2.61367625,
            "vehicleN": 4,
            "vehicleMissingN": 0,
            "vehicleSD": 1.0354172932009504,
            "vehicleMin": 1.658271,
            "vehicleMax": 4.045609,
            "cetuximabMean": 0.7680795,
            "cetuximabN": 4,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.12432510203092535,
            "cetuximabMin": 0.645201,
            "cetuximabMax": 0.940234,
            "ratio": 0.2938694109494242
          },
          {
            "day": 15,
            "vehicleMean": 3.2416935000000002,
            "vehicleN": 4,
            "vehicleMissingN": 0,
            "vehicleSD": 1.6506784772568524,
            "vehicleMin": 1.735645,
            "vehicleMax": 5.59015,
            "cetuximabMean": 0.6401567499999999,
            "cetuximabN": 4,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.22715793740240878,
            "cetuximabMin": 0.387796,
            "cetuximabMax": 0.929244,
            "ratio": 0.19747602603392328
          },
          {
            "day": 20,
            "vehicleMean": 3.4748062500000003,
            "vehicleN": 4,
            "vehicleMissingN": 0,
            "vehicleSD": 1.6905378818461647,
            "vehicleMin": 1.830767,
            "vehicleMax": 5.841051,
            "cetuximabMean": 0.63708175,
            "cetuximabN": 4,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.23116007434441757,
            "cetuximabMin": 0.385824,
            "cetuximabMax": 0.933788,
            "ratio": 0.18334310006493165
          }
        ],
        "endpoints": {
          "final": {
            "day": 20,
            "vehicleMean": 3.4748062500000003,
            "vehicleN": 4,
            "vehicleMissingN": 0,
            "vehicleSD": 1.6905378818461647,
            "vehicleMin": 1.830767,
            "vehicleMax": 5.841051,
            "cetuximabMean": 0.63708175,
            "cetuximabN": 4,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.23116007434441757,
            "cetuximabMin": 0.385824,
            "cetuximabMax": 0.933788,
            "ratio": 0.18334310006493165
          },
          "day14": {
            "day": 13,
            "vehicleMean": 2.61367625,
            "vehicleN": 4,
            "vehicleMissingN": 0,
            "vehicleSD": 1.0354172932009504,
            "vehicleMin": 1.658271,
            "vehicleMax": 4.045609,
            "cetuximabMean": 0.7680795,
            "cetuximabN": 4,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.12432510203092535,
            "cetuximabMin": 0.645201,
            "cetuximabMax": 0.940234,
            "ratio": 0.2938694109494242
          }
        },
        "sourceFinalFlagDays": [
          20
        ]
      }
    },
    {
      "id": "JG13",
      "sourceModelId": "JGHL13",
      "pdxNumber": "HN12-6744",
      "hpv": "Negative",
      "experimentalResponse": "S",
      "assays": {
        "CAV1": {
          "rna": 0,
          "protein": -0.408020037,
          "rnaSourceValue": 0,
          "rnaStatus": "measured",
          "rnaPercentile": 48.4375,
          "proteinPercentile": 40.625,
          "rankGap": 7.8125
        },
        "SOX2": {
          "rna": -4.9881,
          "protein": -0.944344026,
          "rnaSourceValue": -4.9881,
          "rnaStatus": "measured",
          "rnaPercentile": 3.1746031746031744,
          "proteinPercentile": 0.0,
          "rankGap": 3.1746031746031744
        },
        "AXL": {
          "rna": 0.79111,
          "protein": 0.372351135,
          "rnaSourceValue": 0.79111,
          "rnaStatus": "measured",
          "rnaPercentile": 60.9375,
          "proteinPercentile": 56.25,
          "rankGap": 4.6875
        },
        "TMEM173": {
          "rna": -0.19345,
          "protein": -0.502950524,
          "rnaSourceValue": -0.19345,
          "rnaStatus": "measured",
          "rnaPercentile": 43.75,
          "proteinPercentile": 34.375,
          "rankGap": 9.375
        },
        "BRD4": {
          "rna": -0.10417,
          "protein": 1.20415005,
          "rnaSourceValue": -0.10417,
          "rnaStatus": "measured",
          "rnaPercentile": 40.625,
          "proteinPercentile": 89.0625,
          "rankGap": 48.4375
        },
        "CLDN7": {
          "rna": -2.2691,
          "protein": -0.069246908,
          "rnaSourceValue": -2.2691,
          "rnaStatus": "measured",
          "rnaPercentile": 15.873015873015873,
          "proteinPercentile": 34.375,
          "rankGap": 18.501984126984127
        },
        "GJA1": {
          "rna": -0.66162,
          "protein": -1.535372769,
          "rnaSourceValue": -0.66162,
          "rnaStatus": "measured",
          "rnaPercentile": 39.0625,
          "proteinPercentile": 17.1875,
          "rankGap": 21.875
        },
        "FN1": {
          "rna": 0.70689,
          "protein": -0.293346398,
          "rnaSourceValue": 0.70689,
          "rnaStatus": "measured",
          "rnaPercentile": 53.125,
          "proteinPercentile": 29.6875,
          "rankGap": 23.4375
        }
      },
      "growth": {
        "days": [
          {
            "day": 1,
            "vehicleMean": 1,
            "vehicleN": 3,
            "vehicleMissingN": 0,
            "vehicleSD": 0.0,
            "vehicleMin": 1,
            "vehicleMax": 1,
            "cetuximabMean": 1,
            "cetuximabN": 4,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.0,
            "cetuximabMin": 1,
            "cetuximabMax": 1,
            "ratio": 1.0
          },
          {
            "day": 6,
            "vehicleMean": 1.7751223333333335,
            "vehicleN": 3,
            "vehicleMissingN": 0,
            "vehicleSD": 0.6157654685026868,
            "vehicleMin": 1.12948,
            "vehicleMax": 2.355871,
            "cetuximabMean": 0.8034095,
            "cetuximabN": 4,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.2157036355256907,
            "cetuximabMin": 0.514119,
            "cetuximabMax": 0.975063,
            "ratio": 0.4525938775674991
          },
          {
            "day": 8,
            "vehicleMean": 2.1307983333333333,
            "vehicleN": 3,
            "vehicleMissingN": 0,
            "vehicleSD": 0.5836732857227006,
            "vehicleMin": 1.644844,
            "vehicleMax": 2.778202,
            "cetuximabMean": 0.5151285,
            "cetuximabN": 4,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.379540993803041,
            "cetuximabMin": 0.118619,
            "cetuximabMax": 0.955929,
            "ratio": 0.24175375583017006
          },
          {
            "day": 13,
            "vehicleMean": 2.950688,
            "vehicleN": 3,
            "vehicleMissingN": 0,
            "vehicleSD": 1.2378712719354141,
            "vehicleMin": 1.676369,
            "vehicleMax": 4.148569,
            "cetuximabMean": 0.185047,
            "cetuximabN": 4,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.14308299819568593,
            "cetuximabMin": 0.034992,
            "cetuximabMax": 0.364079,
            "ratio": 0.06271317062325803
          },
          {
            "day": 15,
            "vehicleMean": 3.4963135000000003,
            "vehicleN": 2,
            "vehicleMissingN": 1,
            "vehicleSD": 1.7560084743020181,
            "vehicleMin": 2.254628,
            "vehicleMax": 4.737999,
            "cetuximabMean": 0.10202775,
            "cetuximabN": 4,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.10394274374986452,
            "cetuximabMin": 0.009481,
            "cetuximabMax": 0.233854,
            "ratio": 0.02918152219473454
          },
          {
            "day": 20,
            "vehicleMean": 4.687003499999999,
            "vehicleN": 2,
            "vehicleMissingN": 1,
            "vehicleSD": 0.8810006021362871,
            "vehicleMin": 4.064042,
            "vehicleMax": 5.309965,
            "cetuximabMean": 0.01206375,
            "cetuximabN": 4,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.014046352275590984,
            "cetuximabMin": 0,
            "cetuximabMax": 0.026337,
            "ratio": 0.0025738726245883967
          }
        ],
        "endpoints": {
          "final": {
            "day": 20,
            "vehicleMean": 4.687003499999999,
            "vehicleN": 2,
            "vehicleMissingN": 1,
            "vehicleSD": 0.8810006021362871,
            "vehicleMin": 4.064042,
            "vehicleMax": 5.309965,
            "cetuximabMean": 0.01206375,
            "cetuximabN": 4,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.014046352275590984,
            "cetuximabMin": 0,
            "cetuximabMax": 0.026337,
            "ratio": 0.0025738726245883967
          },
          "day14": {
            "day": 13,
            "vehicleMean": 2.950688,
            "vehicleN": 3,
            "vehicleMissingN": 0,
            "vehicleSD": 1.2378712719354141,
            "vehicleMin": 1.676369,
            "vehicleMax": 4.148569,
            "cetuximabMean": 0.185047,
            "cetuximabN": 4,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.14308299819568593,
            "cetuximabMin": 0.034992,
            "cetuximabMax": 0.364079,
            "ratio": 0.06271317062325803
          }
        },
        "sourceFinalFlagDays": [
          20
        ]
      }
    },
    {
      "id": "JG14",
      "sourceModelId": "JGHL14",
      "pdxNumber": "HN12-6758",
      "hpv": "Positive",
      "experimentalResponse": "R",
      "assays": {
        "CAV1": {
          "rna": -2.7735,
          "protein": -1.271257698,
          "rnaSourceValue": -2.7735,
          "rnaStatus": "measured",
          "rnaPercentile": 6.25,
          "proteinPercentile": 15.625,
          "rankGap": 9.375
        },
        "SOX2": {
          "rna": -5.1916,
          "protein": 1.372268294,
          "rnaSourceValue": -5.1916,
          "rnaStatus": "measured",
          "rnaPercentile": 1.5873015873015872,
          "proteinPercentile": 82.8125,
          "rankGap": 81.22519841269842
        },
        "AXL": {
          "rna": -3.9863,
          "protein": -0.684471767,
          "rnaSourceValue": -3.9863,
          "rnaStatus": "measured",
          "rnaPercentile": 6.25,
          "proteinPercentile": 34.375,
          "rankGap": 28.125
        },
        "TMEM173": {
          "rna": -3.5698,
          "protein": 2.387059481,
          "rnaSourceValue": -3.5698,
          "rnaStatus": "measured",
          "rnaPercentile": 4.6875,
          "proteinPercentile": 93.75,
          "rankGap": 89.0625
        },
        "BRD4": {
          "rna": -0.54395,
          "protein": 1.274510329,
          "rnaSourceValue": -0.54395,
          "rnaStatus": "measured",
          "rnaPercentile": 23.4375,
          "proteinPercentile": 92.1875,
          "rankGap": 68.75
        },
        "CLDN7": {
          "rna": null,
          "protein": 0.299745112,
          "rnaSourceValue": "#NAME?",
          "rnaStatus": "source_error",
          "rnaPercentile": null,
          "proteinPercentile": 64.0625,
          "rankGap": null
        },
        "GJA1": {
          "rna": -8.1331,
          "protein": -2.892964221,
          "rnaSourceValue": -8.1331,
          "rnaStatus": "measured",
          "rnaPercentile": 1.5625,
          "proteinPercentile": 4.6875,
          "rankGap": 3.125
        },
        "FN1": {
          "rna": -0.56385,
          "protein": 0.615111907,
          "rnaSourceValue": -0.56385,
          "rnaStatus": "measured",
          "rnaPercentile": 45.3125,
          "proteinPercentile": 75.0,
          "rankGap": 29.6875
        }
      },
      "growth": {
        "days": [
          {
            "day": 1,
            "vehicleMean": 1,
            "vehicleN": 2,
            "vehicleMissingN": 0,
            "vehicleSD": 0.0,
            "vehicleMin": 1,
            "vehicleMax": 1,
            "cetuximabMean": 1,
            "cetuximabN": 2,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.0,
            "cetuximabMin": 1,
            "cetuximabMax": 1,
            "ratio": 1.0
          },
          {
            "day": 6,
            "vehicleMean": 1.2983954999999998,
            "vehicleN": 2,
            "vehicleMissingN": 0,
            "vehicleSD": 0.21475327919382275,
            "vehicleMin": 1.146542,
            "vehicleMax": 1.450249,
            "cetuximabMean": 1.5486879999999998,
            "cetuximabN": 2,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.07177840935824643,
            "cetuximabMin": 1.497933,
            "cetuximabMax": 1.599443,
            "ratio": 1.1927706157330336
          },
          {
            "day": 8,
            "vehicleMean": 2.020328,
            "vehicleN": 2,
            "vehicleMissingN": 0,
            "vehicleSD": 0.13078505603470159,
            "vehicleMin": 1.927849,
            "vehicleMax": 2.112807,
            "cetuximabMean": 2.3946975,
            "cetuximabN": 2,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.6692716186455989,
            "cetuximabMin": 1.921451,
            "cetuximabMax": 2.867944,
            "ratio": 1.1853013471079943
          },
          {
            "day": 13,
            "vehicleMean": 2.453431,
            "vehicleN": 2,
            "vehicleMissingN": 0,
            "vehicleSD": 0.34833635676167934,
            "vehicleMin": 2.20712,
            "vehicleMax": 2.699742,
            "cetuximabMean": 2.8785869999999996,
            "cetuximabN": 2,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.15522549481963327,
            "cetuximabMin": 2.768826,
            "cetuximabMax": 2.988348,
            "ratio": 1.173290383956182
          },
          {
            "day": 15,
            "vehicleMean": 2.6092375,
            "vehicleN": 2,
            "vehicleMissingN": 0,
            "vehicleSD": 0.2632141353356615,
            "vehicleMin": 2.423117,
            "vehicleMax": 2.795358,
            "cetuximabMean": 2.8826644999999997,
            "cetuximabN": 2,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.13220421934454304,
            "cetuximabMin": 2.789182,
            "cetuximabMax": 2.976147,
            "ratio": 1.1047919171788692
          },
          {
            "day": 20,
            "vehicleMean": 3.0010054999999998,
            "vehicleN": 2,
            "vehicleMissingN": 0,
            "vehicleSD": 0.23253135788641524,
            "vehicleMin": 2.836581,
            "vehicleMax": 3.16543,
            "cetuximabMean": 2.868963,
            "cetuximabN": 2,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.0747807847511645,
            "cetuximabMin": 2.816085,
            "cetuximabMax": 2.921841,
            "ratio": 0.9560005804721118
          }
        ],
        "endpoints": {
          "final": {
            "day": 20,
            "vehicleMean": 3.0010054999999998,
            "vehicleN": 2,
            "vehicleMissingN": 0,
            "vehicleSD": 0.23253135788641524,
            "vehicleMin": 2.836581,
            "vehicleMax": 3.16543,
            "cetuximabMean": 2.868963,
            "cetuximabN": 2,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.0747807847511645,
            "cetuximabMin": 2.816085,
            "cetuximabMax": 2.921841,
            "ratio": 0.9560005804721118
          },
          "day14": {
            "day": 13,
            "vehicleMean": 2.453431,
            "vehicleN": 2,
            "vehicleMissingN": 0,
            "vehicleSD": 0.34833635676167934,
            "vehicleMin": 2.20712,
            "vehicleMax": 2.699742,
            "cetuximabMean": 2.8785869999999996,
            "cetuximabN": 2,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.15522549481963327,
            "cetuximabMin": 2.768826,
            "cetuximabMax": 2.988348,
            "ratio": 1.173290383956182
          }
        },
        "sourceFinalFlagDays": [
          20
        ]
      }
    },
    {
      "id": "JG15",
      "sourceModelId": "JGHL15",
      "pdxNumber": "HN12-6851",
      "hpv": "Negative",
      "experimentalResponse": "S",
      "assays": {
        "CAV1": {
          "rna": 0.65651,
          "protein": -0.044538098,
          "rnaSourceValue": 0.65651,
          "rnaStatus": "measured",
          "rnaPercentile": 60.9375,
          "proteinPercentile": 48.4375,
          "rankGap": 12.5
        },
        "SOX2": {
          "rna": -0.38896,
          "protein": -0.324118076,
          "rnaSourceValue": -0.38896,
          "rnaStatus": "measured",
          "rnaPercentile": 28.571428571428573,
          "proteinPercentile": 26.5625,
          "rankGap": 2.008928571428573
        },
        "AXL": {
          "rna": 0.42466,
          "protein": 0.334840115,
          "rnaSourceValue": 0.42466,
          "rnaStatus": "measured",
          "rnaPercentile": 56.25,
          "proteinPercentile": 53.125,
          "rankGap": 3.125
        },
        "TMEM173": {
          "rna": -0.54372,
          "protein": -3.037362611,
          "rnaSourceValue": -0.54372,
          "rnaStatus": "measured",
          "rnaPercentile": 31.25,
          "proteinPercentile": 4.6875,
          "rankGap": 26.5625
        },
        "BRD4": {
          "rna": -0.95114,
          "protein": -0.560845969,
          "rnaSourceValue": -0.95114,
          "rnaStatus": "measured",
          "rnaPercentile": 9.375,
          "proteinPercentile": 15.625,
          "rankGap": 6.25
        },
        "CLDN7": {
          "rna": -0.34445,
          "protein": 0.241681052,
          "rnaSourceValue": -0.34445,
          "rnaStatus": "measured",
          "rnaPercentile": 42.857142857142854,
          "proteinPercentile": 62.5,
          "rankGap": 19.642857142857146
        },
        "GJA1": {
          "rna": 0.87805,
          "protein": 1.01315721,
          "rnaSourceValue": 0.87805,
          "rnaStatus": "measured",
          "rnaPercentile": 71.875,
          "proteinPercentile": 81.25,
          "rankGap": 9.375
        },
        "FN1": {
          "rna": 3.4088,
          "protein": 0.689904617,
          "rnaSourceValue": 3.4088,
          "rnaStatus": "measured",
          "rnaPercentile": 79.6875,
          "proteinPercentile": 78.125,
          "rankGap": 1.5625
        }
      },
      "growth": {
        "days": [
          {
            "day": 1,
            "vehicleMean": 1,
            "vehicleN": 3,
            "vehicleMissingN": 0,
            "vehicleSD": 0.0,
            "vehicleMin": 1,
            "vehicleMax": 1,
            "cetuximabMean": 1,
            "cetuximabN": 4,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.0,
            "cetuximabMin": 1,
            "cetuximabMax": 1,
            "ratio": 1.0
          },
          {
            "day": 6,
            "vehicleMean": 1.4007736666666666,
            "vehicleN": 3,
            "vehicleMissingN": 0,
            "vehicleSD": 0.365104200689794,
            "vehicleMin": 1.001013,
            "vehicleMax": 1.716605,
            "cetuximabMean": 0.92095575,
            "cetuximabN": 4,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.07997508781437297,
            "cetuximabMin": 0.81687,
            "cetuximabMax": 0.9958,
            "ratio": 0.6574622095741853
          },
          {
            "day": 8,
            "vehicleMean": 1.7050626666666666,
            "vehicleN": 3,
            "vehicleMissingN": 0,
            "vehicleSD": 0.5121631284311018,
            "vehicleMin": 1.113745,
            "vehicleMax": 2.009006,
            "cetuximabMean": 0.83921975,
            "cetuximabN": 4,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.11887237711477242,
            "cetuximabMin": 0.726043,
            "cetuximabMax": 0.983147,
            "ratio": 0.4921929066927746
          },
          {
            "day": 13,
            "vehicleMean": 2.0940453333333333,
            "vehicleN": 3,
            "vehicleMissingN": 0,
            "vehicleSD": 0.8537616320269572,
            "vehicleMin": 1.141486,
            "vehicleMax": 2.790284,
            "cetuximabMean": 0.76078625,
            "cetuximabN": 4,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.12968910974679665,
            "cetuximabMin": 0.60526,
            "cetuximabMax": 0.869651,
            "ratio": 0.3633093505139016
          },
          {
            "day": 15,
            "vehicleMean": 2.8766533333333335,
            "vehicleN": 3,
            "vehicleMissingN": 0,
            "vehicleSD": 1.4724675308353434,
            "vehicleMin": 1.353679,
            "vehicleMax": 4.292795,
            "cetuximabMean": 0.6840125,
            "cetuximabN": 4,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.196261034812483,
            "cetuximabMin": 0.429657,
            "cetuximabMax": 0.908516,
            "ratio": 0.23778065020000091
          },
          {
            "day": 20,
            "vehicleMean": 3.1474086666666667,
            "vehicleN": 3,
            "vehicleMissingN": 0,
            "vehicleSD": 1.4904642593535526,
            "vehicleMin": 1.613098,
            "vehicleMax": 4.589769,
            "cetuximabMean": 0.75669325,
            "cetuximabN": 4,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.2365082623565542,
            "cetuximabMin": 0.422331,
            "cetuximabMax": 0.958225,
            "ratio": 0.2404178580347473
          }
        ],
        "endpoints": {
          "final": {
            "day": 20,
            "vehicleMean": 3.1474086666666667,
            "vehicleN": 3,
            "vehicleMissingN": 0,
            "vehicleSD": 1.4904642593535526,
            "vehicleMin": 1.613098,
            "vehicleMax": 4.589769,
            "cetuximabMean": 0.75669325,
            "cetuximabN": 4,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.2365082623565542,
            "cetuximabMin": 0.422331,
            "cetuximabMax": 0.958225,
            "ratio": 0.2404178580347473
          },
          "day14": {
            "day": 13,
            "vehicleMean": 2.0940453333333333,
            "vehicleN": 3,
            "vehicleMissingN": 0,
            "vehicleSD": 0.8537616320269572,
            "vehicleMin": 1.141486,
            "vehicleMax": 2.790284,
            "cetuximabMean": 0.76078625,
            "cetuximabN": 4,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.12968910974679665,
            "cetuximabMin": 0.60526,
            "cetuximabMax": 0.869651,
            "ratio": 0.3633093505139016
          }
        },
        "sourceFinalFlagDays": [
          20
        ]
      }
    },
    {
      "id": "JG16",
      "sourceModelId": "JGHL16",
      "pdxNumber": "HN12-6853",
      "hpv": "Negative",
      "experimentalResponse": "not evaluated",
      "assays": {
        "CAV1": {
          "rna": -2.0929,
          "protein": 0.847492708,
          "rnaSourceValue": -2.0929,
          "rnaStatus": "measured",
          "rnaPercentile": 15.625,
          "proteinPercentile": 81.25,
          "rankGap": 65.625
        },
        "SOX2": {
          "rna": 3.3387,
          "protein": 2.135845567,
          "rnaSourceValue": 3.3387,
          "rnaStatus": "measured",
          "rnaPercentile": 87.3015873015873,
          "proteinPercentile": 93.75,
          "rankGap": 6.448412698412696
        },
        "AXL": {
          "rna": -4.0307,
          "protein": -1.029440844,
          "rnaSourceValue": -4.0307,
          "rnaStatus": "measured",
          "rnaPercentile": 4.6875,
          "proteinPercentile": 18.75,
          "rankGap": 14.0625
        },
        "TMEM173": {
          "rna": 0.12332,
          "protein": -0.341857031,
          "rnaSourceValue": 0.12332,
          "rnaStatus": "measured",
          "rnaPercentile": 50.0,
          "proteinPercentile": 39.0625,
          "rankGap": 10.9375
        },
        "BRD4": {
          "rna": 0.38001,
          "protein": 0.748638864,
          "rnaSourceValue": 0.38001,
          "rnaStatus": "measured",
          "rnaPercentile": 67.1875,
          "proteinPercentile": 78.125,
          "rankGap": 10.9375
        },
        "CLDN7": {
          "rna": 0.85436,
          "protein": 0.358340248,
          "rnaSourceValue": 0.85436,
          "rnaStatus": "measured",
          "rnaPercentile": 55.55555555555556,
          "proteinPercentile": 67.1875,
          "rankGap": 11.631944444444443
        },
        "GJA1": {
          "rna": -0.17887,
          "protein": -0.191762002,
          "rnaSourceValue": -0.17887,
          "rnaStatus": "measured",
          "rnaPercentile": 42.1875,
          "proteinPercentile": 39.0625,
          "rankGap": 3.125
        },
        "FN1": {
          "rna": -2.2769,
          "protein": -0.31525774,
          "rnaSourceValue": -2.2769,
          "rnaStatus": "measured",
          "rnaPercentile": 31.25,
          "proteinPercentile": 28.125,
          "rankGap": 3.125
        }
      },
      "growth": {
        "days": [],
        "endpoints": {
          "final": null,
          "day14": null
        },
        "sourceFinalFlagDays": []
      }
    },
    {
      "id": "JG17",
      "sourceModelId": "JGHL17",
      "pdxNumber": "HN12-6865",
      "hpv": "Negative",
      "experimentalResponse": "not evaluated",
      "assays": {
        "CAV1": {
          "rna": 3.4189,
          "protein": 1.03661411,
          "rnaSourceValue": 3.4189,
          "rnaStatus": "measured",
          "rnaPercentile": 100.0,
          "proteinPercentile": 90.625,
          "rankGap": 9.375
        },
        "SOX2": {
          "rna": -0.078667,
          "protein": -0.639218082,
          "rnaSourceValue": -0.078667,
          "rnaStatus": "measured",
          "rnaPercentile": 42.857142857142854,
          "proteinPercentile": 12.5,
          "rankGap": 30.357142857142854
        },
        "AXL": {
          "rna": 3.9297,
          "protein": 2.410557845,
          "rnaSourceValue": 3.9297,
          "rnaStatus": "measured",
          "rnaPercentile": 100.0,
          "proteinPercentile": 100.0,
          "rankGap": 0.0
        },
        "TMEM173": {
          "rna": 1.0239,
          "protein": -0.087569535,
          "rnaSourceValue": 1.0239,
          "rnaStatus": "measured",
          "rnaPercentile": 81.25,
          "proteinPercentile": 43.75,
          "rankGap": 37.5
        },
        "BRD4": {
          "rna": 0.23834,
          "protein": -0.239139204,
          "rnaSourceValue": 0.23834,
          "rnaStatus": "measured",
          "rnaPercentile": 65.625,
          "proteinPercentile": 26.5625,
          "rankGap": 39.0625
        },
        "CLDN7": {
          "rna": 0.49284,
          "protein": -0.222422789,
          "rnaSourceValue": 0.49284,
          "rnaStatus": "measured",
          "rnaPercentile": 50.79365079365079,
          "proteinPercentile": 25.0,
          "rankGap": 25.79365079365079
        },
        "GJA1": {
          "rna": 1.9325,
          "protein": 1.177700247,
          "rnaSourceValue": 1.9325,
          "rnaStatus": "measured",
          "rnaPercentile": 95.3125,
          "proteinPercentile": 89.0625,
          "rankGap": 6.25
        },
        "FN1": {
          "rna": 8.2501,
          "protein": 3.170324113,
          "rnaSourceValue": 8.2501,
          "rnaStatus": "measured",
          "rnaPercentile": 100.0,
          "proteinPercentile": 98.4375,
          "rankGap": 1.5625
        }
      },
      "growth": {
        "days": [],
        "endpoints": {
          "final": null,
          "day14": null
        },
        "sourceFinalFlagDays": []
      }
    },
    {
      "id": "JG18",
      "sourceModelId": "JGHL18",
      "pdxNumber": "HN12-6932",
      "hpv": "Negative",
      "experimentalResponse": "S",
      "assays": {
        "CAV1": {
          "rna": 2.1788,
          "protein": 1.068790056,
          "rnaSourceValue": 2.1788,
          "rnaStatus": "measured",
          "rnaPercentile": 87.5,
          "proteinPercentile": 92.1875,
          "rankGap": 4.6875
        },
        "SOX2": {
          "rna": -0.41106,
          "protein": 0.023801972,
          "rnaSourceValue": -0.41106,
          "rnaStatus": "measured",
          "rnaPercentile": 25.396825396825395,
          "proteinPercentile": 50.0,
          "rankGap": 24.603174603174605
        },
        "AXL": {
          "rna": 1.6329,
          "protein": 1.607053088,
          "rnaSourceValue": 1.6329,
          "rnaStatus": "measured",
          "rnaPercentile": 76.5625,
          "proteinPercentile": 96.875,
          "rankGap": 20.3125
        },
        "TMEM173": {
          "rna": 0.019183,
          "protein": 0.084729951,
          "rnaSourceValue": 0.019183,
          "rnaStatus": "measured",
          "rnaPercentile": 48.4375,
          "proteinPercentile": 53.125,
          "rankGap": 4.6875
        },
        "BRD4": {
          "rna": -1.0721,
          "protein": -0.247188601,
          "rnaSourceValue": -1.0721,
          "rnaStatus": "measured",
          "rnaPercentile": 4.6875,
          "proteinPercentile": 25.0,
          "rankGap": 20.3125
        },
        "CLDN7": {
          "rna": -2.2021,
          "protein": -0.371852757,
          "rnaSourceValue": -2.2021,
          "rnaStatus": "measured",
          "rnaPercentile": 17.46031746031746,
          "proteinPercentile": 6.25,
          "rankGap": 11.210317460317459
        },
        "GJA1": {
          "rna": -0.15439,
          "protein": 0.15484579,
          "rnaSourceValue": -0.15439,
          "rnaStatus": "measured",
          "rnaPercentile": 43.75,
          "proteinPercentile": 51.5625,
          "rankGap": 7.8125
        },
        "FN1": {
          "rna": 2.2186,
          "protein": 1.227932351,
          "rnaSourceValue": 2.2186,
          "rnaStatus": "measured",
          "rnaPercentile": 70.3125,
          "proteinPercentile": 85.9375,
          "rankGap": 15.625
        }
      },
      "growth": {
        "days": [
          {
            "day": 1,
            "vehicleMean": 1,
            "vehicleN": 2,
            "vehicleMissingN": 0,
            "vehicleSD": 0.0,
            "vehicleMin": 1,
            "vehicleMax": 1,
            "cetuximabMean": 1,
            "cetuximabN": 2,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.0,
            "cetuximabMin": 1,
            "cetuximabMax": 1,
            "ratio": 1.0
          },
          {
            "day": 6,
            "vehicleMean": 2.2292095,
            "vehicleN": 2,
            "vehicleMissingN": 0,
            "vehicleSD": 0.15294083280961956,
            "vehicleMin": 2.121064,
            "vehicleMax": 2.337355,
            "cetuximabMean": 0.807979,
            "cetuximabN": 2,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.0035935166619900562,
            "cetuximabMin": 0.805438,
            "cetuximabMax": 0.81052,
            "ratio": 0.362450904681682
          },
          {
            "day": 8,
            "vehicleMean": 2.3542345,
            "vehicleN": 2,
            "vehicleMissingN": 0,
            "vehicleSD": 0.2792640450550338,
            "vehicleMin": 2.156765,
            "vehicleMax": 2.551704,
            "cetuximabMean": 0.8735515,
            "cetuximabN": 2,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.13468899257363234,
            "cetuximabMin": 0.778312,
            "cetuximabMax": 0.968791,
            "ratio": 0.3710554322434745
          },
          {
            "day": 13,
            "vehicleMean": 3.0664545,
            "vehicleN": 2,
            "vehicleMissingN": 0,
            "vehicleSD": 0.4862766263152074,
            "vehicleMin": 2.722605,
            "vehicleMax": 3.410304,
            "cetuximabMean": 0.7451915,
            "cetuximabN": 2,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.14447817885237899,
            "cetuximabMin": 0.64303,
            "cetuximabMax": 0.847353,
            "ratio": 0.24301404113447633
          },
          {
            "day": 15,
            "vehicleMean": 4.3871555,
            "vehicleN": 2,
            "vehicleMissingN": 0,
            "vehicleSD": 1.119709951969929,
            "vehicleMin": 3.595401,
            "vehicleMax": 5.17891,
            "cetuximabMean": 0.650856,
            "cetuximabN": 2,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.10143305354764788,
            "cetuximabMin": 0.579132,
            "cetuximabMax": 0.72258,
            "ratio": 0.14835489646993363
          }
        ],
        "endpoints": {
          "final": {
            "day": 15,
            "vehicleMean": 4.3871555,
            "vehicleN": 2,
            "vehicleMissingN": 0,
            "vehicleSD": 1.119709951969929,
            "vehicleMin": 3.595401,
            "vehicleMax": 5.17891,
            "cetuximabMean": 0.650856,
            "cetuximabN": 2,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.10143305354764788,
            "cetuximabMin": 0.579132,
            "cetuximabMax": 0.72258,
            "ratio": 0.14835489646993363
          },
          "day14": {
            "day": 13,
            "vehicleMean": 3.0664545,
            "vehicleN": 2,
            "vehicleMissingN": 0,
            "vehicleSD": 0.4862766263152074,
            "vehicleMin": 2.722605,
            "vehicleMax": 3.410304,
            "cetuximabMean": 0.7451915,
            "cetuximabN": 2,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.14447817885237899,
            "cetuximabMin": 0.64303,
            "cetuximabMax": 0.847353,
            "ratio": 0.24301404113447633
          }
        },
        "sourceFinalFlagDays": [
          15
        ]
      }
    },
    {
      "id": "JG19",
      "sourceModelId": "JGHL19",
      "pdxNumber": "HN12-6938",
      "hpv": "Negative",
      "experimentalResponse": "not evaluated",
      "assays": {
        "CAV1": {
          "rna": 2.835,
          "protein": 0.81784473,
          "rnaSourceValue": 2.835,
          "rnaStatus": "measured",
          "rnaPercentile": 93.75,
          "proteinPercentile": 79.6875,
          "rankGap": 14.0625
        },
        "SOX2": {
          "rna": 0.90418,
          "protein": -0.13446771,
          "rnaSourceValue": 0.90418,
          "rnaStatus": "measured",
          "rnaPercentile": 58.73015873015873,
          "proteinPercentile": 42.1875,
          "rankGap": 16.542658730158728
        },
        "AXL": {
          "rna": 2.328,
          "protein": 0.559029492,
          "rnaSourceValue": 2.328,
          "rnaStatus": "measured",
          "rnaPercentile": 84.375,
          "proteinPercentile": 64.0625,
          "rankGap": 20.3125
        },
        "TMEM173": {
          "rna": 0.96209,
          "protein": 0.864889487,
          "rnaSourceValue": 0.96209,
          "rnaStatus": "measured",
          "rnaPercentile": 79.6875,
          "proteinPercentile": 70.3125,
          "rankGap": 9.375
        },
        "BRD4": {
          "rna": 0.12915,
          "protein": -0.56917652,
          "rnaSourceValue": 0.12915,
          "rnaStatus": "measured",
          "rnaPercentile": 56.25,
          "proteinPercentile": 14.0625,
          "rankGap": 42.1875
        },
        "CLDN7": {
          "rna": 0.1784,
          "protein": -0.272360955,
          "rnaSourceValue": 0.1784,
          "rnaStatus": "measured",
          "rnaPercentile": 47.61904761904762,
          "proteinPercentile": 20.3125,
          "rankGap": 27.30654761904762
        },
        "GJA1": {
          "rna": -0.17953,
          "protein": -0.026540174,
          "rnaSourceValue": -0.17953,
          "rnaStatus": "measured",
          "rnaPercentile": 40.625,
          "proteinPercentile": 45.3125,
          "rankGap": 4.6875
        },
        "FN1": {
          "rna": -2.7197,
          "protein": 0.627502924,
          "rnaSourceValue": -2.7197,
          "rnaStatus": "measured",
          "rnaPercentile": 23.4375,
          "proteinPercentile": 76.5625,
          "rankGap": 53.125
        }
      },
      "growth": {
        "days": [],
        "endpoints": {
          "final": null,
          "day14": null
        },
        "sourceFinalFlagDays": []
      }
    },
    {
      "id": "JG20",
      "sourceModelId": "JGHL20",
      "pdxNumber": "HN12-6947",
      "hpv": "Negative",
      "experimentalResponse": "not evaluated",
      "assays": {
        "CAV1": {
          "rna": 2.8948,
          "protein": 1.094851188,
          "rnaSourceValue": 2.8948,
          "rnaStatus": "measured",
          "rnaPercentile": 96.875,
          "proteinPercentile": 93.75,
          "rankGap": 3.125
        },
        "SOX2": {
          "rna": 0.31088,
          "protein": -0.295228008,
          "rnaSourceValue": 0.31088,
          "rnaStatus": "measured",
          "rnaPercentile": 50.79365079365079,
          "proteinPercentile": 28.125,
          "rankGap": 22.66865079365079
        },
        "AXL": {
          "rna": 3.8395,
          "protein": 1.58913752,
          "rnaSourceValue": 3.8395,
          "rnaStatus": "measured",
          "rnaPercentile": 98.4375,
          "proteinPercentile": 93.75,
          "rankGap": 4.6875
        },
        "TMEM173": {
          "rna": 0.90909,
          "protein": -0.688570304,
          "rnaSourceValue": 0.90909,
          "rnaStatus": "measured",
          "rnaPercentile": 78.125,
          "proteinPercentile": 28.125,
          "rankGap": 50.0
        },
        "BRD4": {
          "rna": 0.168,
          "protein": 0.403411517,
          "rnaSourceValue": 0.168,
          "rnaStatus": "measured",
          "rnaPercentile": 59.375,
          "proteinPercentile": 64.0625,
          "rankGap": 4.6875
        },
        "CLDN7": {
          "rna": -0.70211,
          "protein": -0.291404056,
          "rnaSourceValue": -0.70211,
          "rnaStatus": "measured",
          "rnaPercentile": 34.92063492063492,
          "proteinPercentile": 18.75,
          "rankGap": 16.170634920634917
        },
        "GJA1": {
          "rna": 0.37278,
          "protein": 0.412068303,
          "rnaSourceValue": 0.37278,
          "rnaStatus": "measured",
          "rnaPercentile": 62.5,
          "proteinPercentile": 60.9375,
          "rankGap": 1.5625
        },
        "FN1": {
          "rna": 6.0705,
          "protein": 1.596336764,
          "rnaSourceValue": 6.0705,
          "rnaStatus": "measured",
          "rnaPercentile": 93.75,
          "proteinPercentile": 92.1875,
          "rankGap": 1.5625
        }
      },
      "growth": {
        "days": [],
        "endpoints": {
          "final": null,
          "day14": null
        },
        "sourceFinalFlagDays": []
      }
    },
    {
      "id": "JG21",
      "sourceModelId": "JGHL21",
      "pdxNumber": "HN12-6950",
      "hpv": "Negative",
      "experimentalResponse": "not evaluated",
      "assays": {
        "CAV1": {
          "rna": 0.92801,
          "protein": 0.750641767,
          "rnaSourceValue": 0.92801,
          "rnaStatus": "measured",
          "rnaPercentile": 67.1875,
          "proteinPercentile": 76.5625,
          "rankGap": 9.375
        },
        "SOX2": {
          "rna": 0.50714,
          "protein": -0.009811933,
          "rnaSourceValue": 0.50714,
          "rnaStatus": "measured",
          "rnaPercentile": 53.96825396825397,
          "proteinPercentile": 46.875,
          "rankGap": 7.093253968253968
        },
        "AXL": {
          "rna": 1.572,
          "protein": 0.90791128,
          "rnaSourceValue": 1.572,
          "rnaStatus": "measured",
          "rnaPercentile": 75.0,
          "proteinPercentile": 71.875,
          "rankGap": 3.125
        },
        "TMEM173": {
          "rna": -0.52045,
          "protein": -0.733055358,
          "rnaSourceValue": -0.52045,
          "rnaStatus": "measured",
          "rnaPercentile": 34.375,
          "proteinPercentile": 26.5625,
          "rankGap": 7.8125
        },
        "BRD4": {
          "rna": 0.0088081,
          "protein": -0.031501649,
          "rnaSourceValue": 0.0088081,
          "rnaStatus": "measured",
          "rnaPercentile": 53.125,
          "proteinPercentile": 42.1875,
          "rankGap": 10.9375
        },
        "CLDN7": {
          "rna": -0.4541,
          "protein": 0.009071523,
          "rnaSourceValue": -0.4541,
          "rnaStatus": "measured",
          "rnaPercentile": 39.682539682539684,
          "proteinPercentile": 48.4375,
          "rankGap": 8.754960317460316
        },
        "GJA1": {
          "rna": 2.1092,
          "protein": 1.098199563,
          "rnaSourceValue": 2.1092,
          "rnaStatus": "measured",
          "rnaPercentile": 96.875,
          "proteinPercentile": 84.375,
          "rankGap": 12.5
        },
        "FN1": {
          "rna": -3.9633,
          "protein": 0.367464259,
          "rnaSourceValue": -3.9633,
          "rnaStatus": "measured",
          "rnaPercentile": 10.9375,
          "proteinPercentile": 67.1875,
          "rankGap": 56.25
        }
      },
      "growth": {
        "days": [],
        "endpoints": {
          "final": null,
          "day14": null
        },
        "sourceFinalFlagDays": []
      }
    },
    {
      "id": "JG22",
      "sourceModelId": "JGHL22",
      "pdxNumber": "HN13-7038",
      "hpv": "Negative",
      "experimentalResponse": "not evaluated",
      "assays": {
        "CAV1": {
          "rna": 2.6972,
          "protein": 1.156516875,
          "rnaSourceValue": 2.6972,
          "rnaStatus": "measured",
          "rnaPercentile": 92.1875,
          "proteinPercentile": 95.3125,
          "rankGap": 3.125
        },
        "SOX2": {
          "rna": -4.1699,
          "protein": -0.725070654,
          "rnaSourceValue": -4.1699,
          "rnaStatus": "measured",
          "rnaPercentile": 4.761904761904762,
          "proteinPercentile": 7.8125,
          "rankGap": 3.050595238095238
        },
        "AXL": {
          "rna": 1.8327,
          "protein": 1.024588744,
          "rnaSourceValue": 1.8327,
          "rnaStatus": "measured",
          "rnaPercentile": 78.125,
          "proteinPercentile": 82.8125,
          "rankGap": 4.6875
        },
        "TMEM173": {
          "rna": -0.74882,
          "protein": 0.364091592,
          "rnaSourceValue": -0.74882,
          "rnaStatus": "measured",
          "rnaPercentile": 23.4375,
          "proteinPercentile": 60.9375,
          "rankGap": 37.5
        },
        "BRD4": {
          "rna": -0.51736,
          "protein": -1.346044971,
          "rnaSourceValue": -0.51736,
          "rnaStatus": "measured",
          "rnaPercentile": 25.0,
          "proteinPercentile": 0.0,
          "rankGap": 25.0
        },
        "CLDN7": {
          "rna": -3.9288,
          "protein": -0.009071523,
          "rnaSourceValue": -3.9288,
          "rnaStatus": "measured",
          "rnaPercentile": 6.349206349206349,
          "proteinPercentile": 46.875,
          "rankGap": 40.52579365079365
        },
        "GJA1": {
          "rna": -1.525,
          "protein": -0.915069886,
          "rnaSourceValue": -1.525,
          "rnaStatus": "measured",
          "rnaPercentile": 15.625,
          "proteinPercentile": 25.0,
          "rankGap": 9.375
        },
        "FN1": {
          "rna": 7.7514,
          "protein": 3.933913253,
          "rnaSourceValue": 7.7514,
          "rnaStatus": "measured",
          "rnaPercentile": 98.4375,
          "proteinPercentile": 100.0,
          "rankGap": 1.5625
        }
      },
      "growth": {
        "days": [],
        "endpoints": {
          "final": null,
          "day14": null
        },
        "sourceFinalFlagDays": []
      }
    },
    {
      "id": "JG23",
      "sourceModelId": "JGHL23",
      "pdxNumber": "HN13-7107",
      "hpv": "Positive",
      "experimentalResponse": "not evaluated",
      "assays": {
        "CAV1": {
          "rna": -3.7376,
          "protein": -1.354610361,
          "rnaSourceValue": -3.7376,
          "rnaStatus": "measured",
          "rnaPercentile": 4.6875,
          "proteinPercentile": 9.375,
          "rankGap": 4.6875
        },
        "SOX2": {
          "rna": -0.16187,
          "protein": -0.242074695,
          "rnaSourceValue": -0.16187,
          "rnaStatus": "measured",
          "rnaPercentile": 38.095238095238095,
          "proteinPercentile": 34.375,
          "rankGap": 3.720238095238095
        },
        "AXL": {
          "rna": -1.0028,
          "protein": -1.223917685,
          "rnaSourceValue": -1.0028,
          "rnaStatus": "measured",
          "rnaPercentile": 34.375,
          "proteinPercentile": 12.5,
          "rankGap": 21.875
        },
        "TMEM173": {
          "rna": -0.64955,
          "protein": -0.354082171,
          "rnaSourceValue": -0.64955,
          "rnaStatus": "measured",
          "rnaPercentile": 25.0,
          "proteinPercentile": 35.9375,
          "rankGap": 10.9375
        },
        "BRD4": {
          "rna": 0.23083,
          "protein": 0.671570841,
          "rnaSourceValue": 0.23083,
          "rnaStatus": "measured",
          "rnaPercentile": 64.0625,
          "proteinPercentile": 73.4375,
          "rankGap": 9.375
        },
        "CLDN7": {
          "rna": 3.1816,
          "protein": 1.379600522,
          "rnaSourceValue": 3.1816,
          "rnaStatus": "measured",
          "rnaPercentile": 95.23809523809524,
          "proteinPercentile": 93.75,
          "rankGap": 1.4880952380952408
        },
        "GJA1": {
          "rna": 0.030699,
          "protein": 0.111437873,
          "rnaSourceValue": 0.030699,
          "rnaStatus": "measured",
          "rnaPercentile": 48.4375,
          "proteinPercentile": 50.0,
          "rankGap": 1.5625
        },
        "FN1": {
          "rna": -2.8826,
          "protein": -1.483182535,
          "rnaSourceValue": -2.8826,
          "rnaStatus": "measured",
          "rnaPercentile": 20.3125,
          "proteinPercentile": 1.5625,
          "rankGap": 18.75
        }
      },
      "growth": {
        "days": [],
        "endpoints": {
          "final": null,
          "day14": null
        },
        "sourceFinalFlagDays": []
      }
    },
    {
      "id": "JG24",
      "sourceModelId": "JGHL24",
      "pdxNumber": "HN13-7025",
      "hpv": "Negative",
      "experimentalResponse": "not evaluated",
      "assays": {
        "CAV1": {
          "rna": 0.23463,
          "protein": 0.686584256,
          "rnaSourceValue": 0.23463,
          "rnaStatus": "measured",
          "rnaPercentile": 53.125,
          "proteinPercentile": 71.875,
          "rankGap": 18.75
        },
        "SOX2": {
          "rna": 1.4769,
          "protein": 0.934838464,
          "rnaSourceValue": 1.4769,
          "rnaStatus": "measured",
          "rnaPercentile": 68.25396825396825,
          "proteinPercentile": 70.3125,
          "rankGap": 2.058531746031747
        },
        "AXL": {
          "rna": 1.3203,
          "protein": 1.418900298,
          "rnaSourceValue": 1.3203,
          "rnaStatus": "measured",
          "rnaPercentile": 71.875,
          "proteinPercentile": 90.625,
          "rankGap": 18.75
        },
        "TMEM173": {
          "rna": 0,
          "protein": 0.680976689,
          "rnaSourceValue": 0,
          "rnaStatus": "measured",
          "rnaPercentile": 46.875,
          "proteinPercentile": 64.0625,
          "rankGap": 17.1875
        },
        "BRD4": {
          "rna": -0.74645,
          "protein": 0.119665569,
          "rnaSourceValue": -0.74645,
          "rnaStatus": "measured",
          "rnaPercentile": 15.625,
          "proteinPercentile": 54.6875,
          "rankGap": 39.0625
        },
        "CLDN7": {
          "rna": -1.5827,
          "protein": -0.042892524,
          "rnaSourceValue": -1.5827,
          "rnaStatus": "measured",
          "rnaPercentile": 26.984126984126984,
          "proteinPercentile": 42.1875,
          "rankGap": 15.203373015873016
        },
        "GJA1": {
          "rna": 1.1701,
          "protein": 1.186561368,
          "rnaSourceValue": 1.1701,
          "rnaStatus": "measured",
          "rnaPercentile": 84.375,
          "proteinPercentile": 90.625,
          "rankGap": 6.25
        },
        "FN1": {
          "rna": 5.0346,
          "protein": 1.125568584,
          "rnaSourceValue": 5.0346,
          "rnaStatus": "measured",
          "rnaPercentile": 87.5,
          "proteinPercentile": 84.375,
          "rankGap": 3.125
        }
      },
      "growth": {
        "days": [],
        "endpoints": {
          "final": null,
          "day14": null
        },
        "sourceFinalFlagDays": []
      }
    },
    {
      "id": "JG25",
      "sourceModelId": "JGHL25",
      "pdxNumber": "HN13-7001",
      "hpv": "Negative",
      "experimentalResponse": "not evaluated",
      "assays": {
        "CAV1": {
          "rna": 2.4612,
          "protein": 0.951259684,
          "rnaSourceValue": 2.4612,
          "rnaStatus": "measured",
          "rnaPercentile": 89.0625,
          "proteinPercentile": 84.375,
          "rankGap": 4.6875
        },
        "SOX2": {
          "rna": -1.0437,
          "protein": 0.071163201,
          "rnaSourceValue": -1.0437,
          "rnaStatus": "measured",
          "rnaPercentile": 17.46031746031746,
          "proteinPercentile": 51.5625,
          "rankGap": 34.102182539682545
        },
        "AXL": {
          "rna": 2.0028,
          "protein": 1.016150209,
          "rnaSourceValue": 2.0028,
          "rnaStatus": "measured",
          "rnaPercentile": 81.25,
          "proteinPercentile": 79.6875,
          "rankGap": 1.5625
        },
        "TMEM173": {
          "rna": 0.14167,
          "protein": 0.930202313,
          "rnaSourceValue": 0.14167,
          "rnaStatus": "measured",
          "rnaPercentile": 51.5625,
          "proteinPercentile": 73.4375,
          "rankGap": 21.875
        },
        "BRD4": {
          "rna": -0.61999,
          "protein": 0.345244147,
          "rnaSourceValue": -0.61999,
          "rnaStatus": "measured",
          "rnaPercentile": 20.3125,
          "proteinPercentile": 60.9375,
          "rankGap": 40.625
        },
        "CLDN7": {
          "rna": 0,
          "protein": -0.048535328,
          "rnaSourceValue": 0,
          "rnaStatus": "measured",
          "rnaPercentile": 46.03174603174603,
          "proteinPercentile": 39.0625,
          "rankGap": 6.969246031746032
        },
        "GJA1": {
          "rna": -1.1498,
          "protein": -0.321589921,
          "rnaSourceValue": -1.1498,
          "rnaStatus": "measured",
          "rnaPercentile": 20.3125,
          "proteinPercentile": 32.8125,
          "rankGap": 12.5
        },
        "FN1": {
          "rna": 2.3241,
          "protein": 0.228361297,
          "rnaSourceValue": 2.3241,
          "rnaStatus": "measured",
          "rnaPercentile": 73.4375,
          "proteinPercentile": 62.5,
          "rankGap": 10.9375
        }
      },
      "growth": {
        "days": [],
        "endpoints": {
          "final": null,
          "day14": null
        },
        "sourceFinalFlagDays": []
      }
    },
    {
      "id": "JG26",
      "sourceModelId": "JGHL26",
      "pdxNumber": "HN13-7020",
      "hpv": "Negative",
      "experimentalResponse": "not evaluated",
      "assays": {
        "CAV1": {
          "rna": 0.53722,
          "protein": 0.120584197,
          "rnaSourceValue": 0.53722,
          "rnaStatus": "measured",
          "rnaPercentile": 57.8125,
          "proteinPercentile": 51.5625,
          "rankGap": 6.25
        },
        "SOX2": {
          "rna": 0,
          "protein": 0.077272391,
          "rnaSourceValue": 0,
          "rnaStatus": "measured",
          "rnaPercentile": 46.03174603174603,
          "proteinPercentile": 53.125,
          "rankGap": 7.093253968253968
        },
        "AXL": {
          "rna": -2.4308,
          "protein": -1.082377468,
          "rnaSourceValue": -2.4308,
          "rnaStatus": "measured",
          "rnaPercentile": 18.75,
          "proteinPercentile": 17.1875,
          "rankGap": 1.5625
        },
        "TMEM173": {
          "rna": -0.52623,
          "protein": -0.023135372,
          "rnaSourceValue": -0.52623,
          "rnaStatus": "measured",
          "rnaPercentile": 32.8125,
          "proteinPercentile": 48.4375,
          "rankGap": 15.625
        },
        "BRD4": {
          "rna": -1.1362,
          "protein": -0.224761318,
          "rnaSourceValue": -1.1362,
          "rnaStatus": "measured",
          "rnaPercentile": 3.125,
          "proteinPercentile": 29.6875,
          "rankGap": 26.5625
        },
        "CLDN7": {
          "rna": -0.79242,
          "protein": 0.013294516,
          "rnaSourceValue": -0.79242,
          "rnaStatus": "measured",
          "rnaPercentile": 33.333333333333336,
          "proteinPercentile": 50.0,
          "rankGap": 16.666666666666664
        },
        "GJA1": {
          "rna": 0.33746,
          "protein": 0.768170675,
          "rnaSourceValue": 0.33746,
          "rnaStatus": "measured",
          "rnaPercentile": 57.8125,
          "proteinPercentile": 78.125,
          "rankGap": 20.3125
        },
        "FN1": {
          "rna": -2.3728,
          "protein": 0.29736947,
          "rnaSourceValue": -2.3728,
          "rnaStatus": "measured",
          "rnaPercentile": 29.6875,
          "proteinPercentile": 65.625,
          "rankGap": 35.9375
        }
      },
      "growth": {
        "days": [],
        "endpoints": {
          "final": null,
          "day14": null
        },
        "sourceFinalFlagDays": []
      }
    },
    {
      "id": "JG27",
      "sourceModelId": "JGHL27",
      "pdxNumber": "HN13-7096",
      "hpv": "Negative",
      "experimentalResponse": "not evaluated",
      "assays": {
        "CAV1": {
          "rna": -0.4781,
          "protein": -0.663485553,
          "rnaSourceValue": -0.4781,
          "rnaStatus": "measured",
          "rnaPercentile": 37.5,
          "proteinPercentile": 34.375,
          "rankGap": 3.125
        },
        "SOX2": {
          "rna": 0.39243,
          "protein": 0.115136928,
          "rnaSourceValue": 0.39243,
          "rnaStatus": "measured",
          "rnaPercentile": 52.38095238095238,
          "proteinPercentile": 54.6875,
          "rankGap": 2.3065476190476204
        },
        "AXL": {
          "rna": -2.5071,
          "protein": -1.139692743,
          "rnaSourceValue": -2.5071,
          "rnaStatus": "measured",
          "rnaPercentile": 15.625,
          "proteinPercentile": 15.625,
          "rankGap": 0.0
        },
        "TMEM173": {
          "rna": 0.82801,
          "protein": 2.578346271,
          "rnaSourceValue": 0.82801,
          "rnaStatus": "measured",
          "rnaPercentile": 70.3125,
          "proteinPercentile": 95.3125,
          "rankGap": 25.0
        },
        "BRD4": {
          "rna": 2.1878,
          "protein": 1.056827605,
          "rnaSourceValue": 2.1878,
          "rnaStatus": "measured",
          "rnaPercentile": 100.0,
          "proteinPercentile": 84.375,
          "rankGap": 15.625
        },
        "CLDN7": {
          "rna": 1.0722,
          "protein": 1.022985142,
          "rnaSourceValue": 1.0722,
          "rnaStatus": "measured",
          "rnaPercentile": 60.317460317460316,
          "proteinPercentile": 84.375,
          "rankGap": 24.057539682539684
        },
        "GJA1": {
          "rna": -2.1485,
          "protein": -0.515984151,
          "rnaSourceValue": -2.1485,
          "rnaStatus": "measured",
          "rnaPercentile": 12.5,
          "proteinPercentile": 28.125,
          "rankGap": 15.625
        },
        "FN1": {
          "rna": -1.4873,
          "protein": -0.739816318,
          "rnaSourceValue": -1.4873,
          "rnaStatus": "measured",
          "rnaPercentile": 39.0625,
          "proteinPercentile": 17.1875,
          "rankGap": 21.875
        }
      },
      "growth": {
        "days": [],
        "endpoints": {
          "final": null,
          "day14": null
        },
        "sourceFinalFlagDays": []
      }
    },
    {
      "id": "JG28",
      "sourceModelId": "JGHL28",
      "pdxNumber": "HN13-7120",
      "hpv": "Negative",
      "experimentalResponse": "not evaluated",
      "assays": {
        "CAV1": {
          "rna": 0.35935,
          "protein": 0.720804226,
          "rnaSourceValue": 0.35935,
          "rnaStatus": "measured",
          "rnaPercentile": 56.25,
          "proteinPercentile": 75.0,
          "rankGap": 18.75
        },
        "SOX2": {
          "rna": -1.1459,
          "protein": -0.282541873,
          "rnaSourceValue": -1.1459,
          "rnaStatus": "measured",
          "rnaPercentile": 15.079365079365079,
          "proteinPercentile": 29.6875,
          "rankGap": 14.608134920634921
        },
        "AXL": {
          "rna": -0.96997,
          "protein": -0.013338952,
          "rnaSourceValue": -0.96997,
          "rnaStatus": "measured",
          "rnaPercentile": 36.71875,
          "proteinPercentile": 46.875,
          "rankGap": 10.15625
        },
        "TMEM173": {
          "rna": -1.403,
          "protein": -0.168735874,
          "rnaSourceValue": -1.403,
          "rnaStatus": "measured",
          "rnaPercentile": 9.375,
          "proteinPercentile": 42.1875,
          "rankGap": 32.8125
        },
        "BRD4": {
          "rna": -1.0659,
          "protein": 0.110365476,
          "rnaSourceValue": -1.0659,
          "rnaStatus": "measured",
          "rnaPercentile": 6.25,
          "proteinPercentile": 53.125,
          "rankGap": 46.875
        },
        "CLDN7": {
          "rna": -3.6636,
          "protein": -0.211613747,
          "rnaSourceValue": -3.6636,
          "rnaStatus": "measured",
          "rnaPercentile": 7.936507936507937,
          "proteinPercentile": 26.5625,
          "rankGap": 18.625992063492063
        },
        "GJA1": {
          "rna": 0.97447,
          "protein": 1.636609245,
          "rnaSourceValue": 0.97447,
          "rnaStatus": "measured",
          "rnaPercentile": 78.125,
          "proteinPercentile": 96.875,
          "rankGap": 18.75
        },
        "FN1": {
          "rna": -3.4755,
          "protein": -0.279395392,
          "rnaSourceValue": -3.4755,
          "rnaStatus": "measured",
          "rnaPercentile": 14.0625,
          "proteinPercentile": 31.25,
          "rankGap": 17.1875
        }
      },
      "growth": {
        "days": [],
        "endpoints": {
          "final": null,
          "day14": null
        },
        "sourceFinalFlagDays": []
      }
    },
    {
      "id": "JG29",
      "sourceModelId": "JGHL29",
      "pdxNumber": "HN13-7296",
      "hpv": "Negative",
      "experimentalResponse": "not evaluated",
      "assays": {
        "CAV1": {
          "rna": 1.2389,
          "protein": -0.254462087,
          "rnaSourceValue": 1.2389,
          "rnaStatus": "measured",
          "rnaPercentile": 79.6875,
          "proteinPercentile": 43.75,
          "rankGap": 35.9375
        },
        "SOX2": {
          "rna": -0.98572,
          "protein": -0.411124878,
          "rnaSourceValue": -0.98572,
          "rnaStatus": "measured",
          "rnaPercentile": 19.047619047619047,
          "proteinPercentile": 21.875,
          "rankGap": 2.8273809523809526
        },
        "AXL": {
          "rna": -4.7087,
          "protein": -0.887416263,
          "rnaSourceValue": -4.7087,
          "rnaStatus": "measured",
          "rnaPercentile": 3.125,
          "proteinPercentile": 23.4375,
          "rankGap": 20.3125
        },
        "TMEM173": {
          "rna": -1.199,
          "protein": -3.512151427,
          "rnaSourceValue": -1.199,
          "rnaStatus": "measured",
          "rnaPercentile": 14.0625,
          "proteinPercentile": 1.5625,
          "rankGap": 12.5
        },
        "BRD4": {
          "rna": -0.28298,
          "protein": -0.751140976,
          "rnaSourceValue": -0.28298,
          "rnaStatus": "measured",
          "rnaPercentile": 32.8125,
          "proteinPercentile": 4.6875,
          "rankGap": 28.125
        },
        "CLDN7": {
          "rna": -0.58741,
          "protein": 0.107882621,
          "rnaSourceValue": -0.58741,
          "rnaStatus": "measured",
          "rnaPercentile": 36.507936507936506,
          "proteinPercentile": 57.8125,
          "rankGap": 21.304563492063494
        },
        "GJA1": {
          "rna": 3.335,
          "protein": 3.017379439,
          "rnaSourceValue": 3.335,
          "rnaStatus": "measured",
          "rnaPercentile": 100.0,
          "proteinPercentile": 100.0,
          "rankGap": 0.0
        },
        "FN1": {
          "rna": -5.4062,
          "protein": 0.001005477,
          "rnaSourceValue": -5.4062,
          "rnaStatus": "measured",
          "rnaPercentile": 3.125,
          "proteinPercentile": 50.0,
          "rankGap": 46.875
        }
      },
      "growth": {
        "days": [],
        "endpoints": {
          "final": null,
          "day14": null
        },
        "sourceFinalFlagDays": []
      }
    },
    {
      "id": "JG30",
      "sourceModelId": "JGHL30",
      "pdxNumber": "HN13-7159",
      "hpv": "Positive",
      "experimentalResponse": "R",
      "assays": {
        "CAV1": {
          "rna": -0.11721,
          "protein": -0.903284778,
          "rnaSourceValue": -0.11721,
          "rnaStatus": "measured",
          "rnaPercentile": 43.75,
          "proteinPercentile": 28.125,
          "rankGap": 15.625
        },
        "SOX2": {
          "rna": 1.2513,
          "protein": 0.769717256,
          "rnaSourceValue": 1.2513,
          "rnaStatus": "measured",
          "rnaPercentile": 63.492063492063494,
          "proteinPercentile": 64.0625,
          "rankGap": 0.5704365079365061
        },
        "AXL": {
          "rna": -0.085223,
          "protein": -0.593249183,
          "rnaSourceValue": -0.085223,
          "rnaStatus": "measured",
          "rnaPercentile": 45.3125,
          "proteinPercentile": 37.5,
          "rankGap": 7.8125
        },
        "TMEM173": {
          "rna": 1.8512,
          "protein": 2.617817095,
          "rnaSourceValue": 1.8512,
          "rnaStatus": "measured",
          "rnaPercentile": 96.875,
          "proteinPercentile": 96.875,
          "rankGap": 0.0
        },
        "BRD4": {
          "rna": -0.41222,
          "protein": 0.354841124,
          "rnaSourceValue": -0.41222,
          "rnaStatus": "measured",
          "rnaPercentile": 26.5625,
          "proteinPercentile": 62.5,
          "rankGap": 35.9375
        },
        "CLDN7": {
          "rna": 2.9657,
          "protein": 0.885130431,
          "rnaSourceValue": 2.9657,
          "rnaStatus": "measured",
          "rnaPercentile": 93.65079365079364,
          "proteinPercentile": 81.25,
          "rankGap": 12.400793650793645
        },
        "GJA1": {
          "rna": -1.2104,
          "protein": -1.392600639,
          "rnaSourceValue": -1.2104,
          "rnaStatus": "measured",
          "rnaPercentile": 18.75,
          "proteinPercentile": 18.75,
          "rankGap": 0.0
        },
        "FN1": {
          "rna": 2.2009,
          "protein": 0.019581562,
          "rnaSourceValue": 2.2009,
          "rnaStatus": "measured",
          "rnaPercentile": 67.1875,
          "proteinPercentile": 51.5625,
          "rankGap": 15.625
        }
      },
      "growth": {
        "days": [
          {
            "day": 1,
            "vehicleMean": 1,
            "vehicleN": 4,
            "vehicleMissingN": 0,
            "vehicleSD": 0.0,
            "vehicleMin": 1,
            "vehicleMax": 1,
            "cetuximabMean": 1,
            "cetuximabN": 4,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.0,
            "cetuximabMin": 1,
            "cetuximabMax": 1,
            "ratio": 1.0
          },
          {
            "day": 6,
            "vehicleMean": 1.42755675,
            "vehicleN": 4,
            "vehicleMissingN": 0,
            "vehicleSD": 0.1844081044700856,
            "vehicleMin": 1.205699,
            "vehicleMax": 1.648508,
            "cetuximabMean": 1.11945575,
            "cetuximabN": 4,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.12287855057298111,
            "cetuximabMin": 1.010826,
            "cetuximabMax": 1.22602,
            "ratio": 0.7841760056123863
          },
          {
            "day": 8,
            "vehicleMean": 2.06689,
            "vehicleN": 4,
            "vehicleMissingN": 0,
            "vehicleSD": 0.6026164311107578,
            "vehicleMin": 1.432099,
            "vehicleMax": 2.875678,
            "cetuximabMean": 1.26152925,
            "cetuximabN": 4,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.3223047213909791,
            "cetuximabMin": 1.025047,
            "cetuximabMax": 1.716813,
            "ratio": 0.6103514217012033
          },
          {
            "day": 13,
            "vehicleMean": 3.04771675,
            "vehicleN": 4,
            "vehicleMissingN": 0,
            "vehicleSD": 1.3752733983295529,
            "vehicleMin": 1.679564,
            "vehicleMax": 4.95624,
            "cetuximabMean": 1.88081225,
            "cetuximabN": 4,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.20147040588032605,
            "cetuximabMin": 1.659021,
            "cetuximabMax": 2.094486,
            "ratio": 0.617121735476238
          },
          {
            "day": 15,
            "vehicleMean": 4.1307655,
            "vehicleN": 4,
            "vehicleMissingN": 0,
            "vehicleSD": 2.206800068960258,
            "vehicleMin": 2.01509,
            "vehicleMax": 7.236005,
            "cetuximabMean": 2.4040755000000003,
            "cetuximabN": 4,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.1973247292518941,
            "cetuximabMin": 2.119171,
            "cetuximabMax": 2.572031,
            "ratio": 0.5819927323398049
          },
          {
            "day": 20,
            "vehicleMean": 4.84142025,
            "vehicleN": 4,
            "vehicleMissingN": 0,
            "vehicleSD": 2.624434551296256,
            "vehicleMin": 2.544665,
            "vehicleMax": 8.620598,
            "cetuximabMean": 2.7714995,
            "cetuximabN": 4,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.3796987661410029,
            "cetuximabMin": 2.317871,
            "cetuximabMax": 3.110127,
            "ratio": 0.5724558821349995
          }
        ],
        "endpoints": {
          "final": {
            "day": 20,
            "vehicleMean": 4.84142025,
            "vehicleN": 4,
            "vehicleMissingN": 0,
            "vehicleSD": 2.624434551296256,
            "vehicleMin": 2.544665,
            "vehicleMax": 8.620598,
            "cetuximabMean": 2.7714995,
            "cetuximabN": 4,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.3796987661410029,
            "cetuximabMin": 2.317871,
            "cetuximabMax": 3.110127,
            "ratio": 0.5724558821349995
          },
          "day14": {
            "day": 13,
            "vehicleMean": 3.04771675,
            "vehicleN": 4,
            "vehicleMissingN": 0,
            "vehicleSD": 1.3752733983295529,
            "vehicleMin": 1.679564,
            "vehicleMax": 4.95624,
            "cetuximabMean": 1.88081225,
            "cetuximabN": 4,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.20147040588032605,
            "cetuximabMin": 1.659021,
            "cetuximabMax": 2.094486,
            "ratio": 0.617121735476238
          }
        },
        "sourceFinalFlagDays": [
          20
        ]
      }
    },
    {
      "id": "JG31",
      "sourceModelId": "JGHL31",
      "pdxNumber": "HN13-7209",
      "hpv": "Negative",
      "experimentalResponse": "not evaluated",
      "assays": {
        "CAV1": {
          "rna": -0.38968,
          "protein": -0.618353622,
          "rnaSourceValue": -0.38968,
          "rnaStatus": "measured",
          "rnaPercentile": 39.0625,
          "proteinPercentile": 37.5,
          "rankGap": 1.5625
        },
        "SOX2": {
          "rna": 1.2767,
          "protein": -0.199910089,
          "rnaSourceValue": 1.2767,
          "rnaStatus": "measured",
          "rnaPercentile": 65.07936507936508,
          "proteinPercentile": 39.0625,
          "rankGap": 26.016865079365076
        },
        "AXL": {
          "rna": 2.5325,
          "protein": 1.397893264,
          "rnaSourceValue": 2.5325,
          "rnaStatus": "measured",
          "rnaPercentile": 89.0625,
          "proteinPercentile": 89.0625,
          "rankGap": 0.0
        },
        "TMEM173": {
          "rna": 0.14894,
          "protein": -0.934616631,
          "rnaSourceValue": 0.14894,
          "rnaStatus": "measured",
          "rnaPercentile": 53.125,
          "proteinPercentile": 21.875,
          "rankGap": 31.25
        },
        "BRD4": {
          "rna": 0.17225,
          "protein": 0.195495853,
          "rnaSourceValue": 0.17225,
          "rnaStatus": "measured",
          "rnaPercentile": 60.9375,
          "proteinPercentile": 59.375,
          "rankGap": 1.5625
        },
        "CLDN7": {
          "rna": 0.2358,
          "protein": -0.334051121,
          "rnaSourceValue": 0.2358,
          "rnaStatus": "measured",
          "rnaPercentile": 49.20634920634921,
          "proteinPercentile": 10.9375,
          "rankGap": 38.26884920634921
        },
        "GJA1": {
          "rna": 1.4335,
          "protein": 0.222844855,
          "rnaSourceValue": 1.4335,
          "rnaStatus": "measured",
          "rnaPercentile": 85.9375,
          "proteinPercentile": 53.125,
          "rankGap": 32.8125
        },
        "FN1": {
          "rna": 5.5774,
          "protein": 1.291642296,
          "rnaSourceValue": 5.5774,
          "rnaStatus": "measured",
          "rnaPercentile": 90.625,
          "proteinPercentile": 90.625,
          "rankGap": 0.0
        }
      },
      "growth": {
        "days": [],
        "endpoints": {
          "final": null,
          "day14": null
        },
        "sourceFinalFlagDays": []
      }
    },
    {
      "id": "JG32",
      "sourceModelId": "JGHL32",
      "pdxNumber": "HN13-7237",
      "hpv": "Negative",
      "experimentalResponse": "not evaluated",
      "assays": {
        "CAV1": {
          "rna": -0.82191,
          "protein": -0.682986301,
          "rnaSourceValue": -0.82191,
          "rnaStatus": "measured",
          "rnaPercentile": 31.25,
          "proteinPercentile": 32.8125,
          "rankGap": 1.5625
        },
        "SOX2": {
          "rna": 3.4193,
          "protein": 1.887213403,
          "rnaSourceValue": 3.4193,
          "rnaStatus": "measured",
          "rnaPercentile": 92.06349206349206,
          "proteinPercentile": 89.0625,
          "rankGap": 3.0009920634920633
        },
        "AXL": {
          "rna": 1.0341,
          "protein": -0.189432957,
          "rnaSourceValue": 1.0341,
          "rnaStatus": "measured",
          "rnaPercentile": 70.3125,
          "proteinPercentile": 42.1875,
          "rankGap": 28.125
        },
        "TMEM173": {
          "rna": 0.22457,
          "protein": -0.869748752,
          "rnaSourceValue": 0.22457,
          "rnaStatus": "measured",
          "rnaPercentile": 56.25,
          "proteinPercentile": 23.4375,
          "rankGap": 32.8125
        },
        "BRD4": {
          "rna": 1.1806,
          "protein": 0.872825294,
          "rnaSourceValue": 1.1806,
          "rnaStatus": "measured",
          "rnaPercentile": 87.5,
          "proteinPercentile": 79.6875,
          "rankGap": 7.8125
        },
        "CLDN7": {
          "rna": 2.8488,
          "protein": 0.883147862,
          "rnaSourceValue": 2.8488,
          "rnaStatus": "measured",
          "rnaPercentile": 88.88888888888889,
          "proteinPercentile": 79.6875,
          "rankGap": 9.201388888888886
        },
        "GJA1": {
          "rna": 0.98048,
          "protein": 0.724103776,
          "rnaSourceValue": 0.98048,
          "rnaStatus": "measured",
          "rnaPercentile": 79.6875,
          "proteinPercentile": 73.4375,
          "rankGap": 6.25
        },
        "FN1": {
          "rna": -3.3401,
          "protein": -0.236274284,
          "rnaSourceValue": -3.3401,
          "rnaStatus": "measured",
          "rnaPercentile": 16.40625,
          "proteinPercentile": 34.375,
          "rankGap": 17.96875
        }
      },
      "growth": {
        "days": [],
        "endpoints": {
          "final": null,
          "day14": null
        },
        "sourceFinalFlagDays": []
      }
    },
    {
      "id": "JG33",
      "sourceModelId": "JGHL33",
      "pdxNumber": "HN13-7163",
      "hpv": "Negative",
      "experimentalResponse": "not evaluated",
      "assays": {
        "CAV1": {
          "rna": 1.0628,
          "protein": 0.985411522,
          "rnaSourceValue": 1.0628,
          "rnaStatus": "measured",
          "rnaPercentile": 73.4375,
          "proteinPercentile": 87.5,
          "rankGap": 14.0625
        },
        "SOX2": {
          "rna": 0.045916,
          "protein": -0.281324898,
          "rnaSourceValue": 0.045916,
          "rnaStatus": "measured",
          "rnaPercentile": 49.20634920634921,
          "proteinPercentile": 32.8125,
          "rankGap": 16.39384920634921
        },
        "AXL": {
          "rna": -3.3582,
          "protein": -1.245196597,
          "rnaSourceValue": -3.3582,
          "rnaStatus": "measured",
          "rnaPercentile": 7.8125,
          "proteinPercentile": 9.375,
          "rankGap": 1.5625
        },
        "TMEM173": {
          "rna": -1.0905,
          "protein": 0.752286847,
          "rnaSourceValue": -1.0905,
          "rnaStatus": "measured",
          "rnaPercentile": 15.625,
          "proteinPercentile": 67.1875,
          "rankGap": 51.5625
        },
        "BRD4": {
          "rna": -0.038803,
          "protein": -0.120547154,
          "rnaSourceValue": -0.038803,
          "rnaStatus": "measured",
          "rnaPercentile": 45.3125,
          "proteinPercentile": 35.9375,
          "rankGap": 9.375
        },
        "CLDN7": {
          "rna": -4.9493,
          "protein": -0.302697281,
          "rnaSourceValue": -4.9493,
          "rnaStatus": "measured",
          "rnaPercentile": 4.761904761904762,
          "proteinPercentile": 17.1875,
          "rankGap": 12.425595238095237
        },
        "GJA1": {
          "rna": 0.96292,
          "protein": 0.932342404,
          "rnaSourceValue": 0.96292,
          "rnaStatus": "measured",
          "rnaPercentile": 76.5625,
          "proteinPercentile": 79.6875,
          "rankGap": 3.125
        },
        "FN1": {
          "rna": -4.1774,
          "protein": -0.091111231,
          "rnaSourceValue": -4.1774,
          "rnaStatus": "measured",
          "rnaPercentile": 9.375,
          "proteinPercentile": 43.75,
          "rankGap": 34.375
        }
      },
      "growth": {
        "days": [],
        "endpoints": {
          "final": null,
          "day14": null
        },
        "sourceFinalFlagDays": []
      }
    },
    {
      "id": "JG34",
      "sourceModelId": "JGHL34",
      "pdxNumber": "HN13-7192",
      "hpv": "Negative",
      "experimentalResponse": "R",
      "assays": {
        "CAV1": {
          "rna": -1.924,
          "protein": -1.198079897,
          "rnaSourceValue": -1.924,
          "rnaStatus": "measured",
          "rnaPercentile": 17.1875,
          "proteinPercentile": 17.1875,
          "rankGap": 0.0
        },
        "SOX2": {
          "rna": 3.3886,
          "protein": 1.817198185,
          "rnaSourceValue": 3.3886,
          "rnaStatus": "measured",
          "rnaPercentile": 88.88888888888889,
          "proteinPercentile": 85.9375,
          "rankGap": 2.9513888888888857
        },
        "AXL": {
          "rna": -1.042,
          "protein": 0.013338952,
          "rnaSourceValue": -1.042,
          "rnaStatus": "measured",
          "rnaPercentile": 32.8125,
          "proteinPercentile": 48.4375,
          "rankGap": 15.625
        },
        "TMEM173": {
          "rna": 0.89661,
          "protein": 0.082864251,
          "rnaSourceValue": 0.89661,
          "rnaStatus": "measured",
          "rnaPercentile": 76.5625,
          "proteinPercentile": 51.5625,
          "rankGap": 25.0
        },
        "BRD4": {
          "rna": 1.2988,
          "protein": 1.148822177,
          "rnaSourceValue": 1.2988,
          "rnaStatus": "measured",
          "rnaPercentile": 95.3125,
          "proteinPercentile": 87.5,
          "rankGap": 7.8125
        },
        "CLDN7": {
          "rna": 1.472,
          "protein": 0.450666438,
          "rnaSourceValue": 1.472,
          "rnaStatus": "measured",
          "rnaPercentile": 66.66666666666667,
          "proteinPercentile": 70.3125,
          "rankGap": 3.6458333333333286
        },
        "GJA1": {
          "rna": 1.0687,
          "protein": 0.629036956,
          "rnaSourceValue": 1.0687,
          "rnaStatus": "measured",
          "rnaPercentile": 82.8125,
          "proteinPercentile": 70.3125,
          "rankGap": 12.5
        },
        "FN1": {
          "rna": -1.9468,
          "protein": -0.996958042,
          "rnaSourceValue": -1.9468,
          "rnaStatus": "measured",
          "rnaPercentile": 35.9375,
          "proteinPercentile": 9.375,
          "rankGap": 26.5625
        }
      },
      "growth": {
        "days": [
          {
            "day": 1,
            "vehicleMean": 1,
            "vehicleN": 5,
            "vehicleMissingN": 0,
            "vehicleSD": 0.0,
            "vehicleMin": 1,
            "vehicleMax": 1,
            "cetuximabMean": 1,
            "cetuximabN": 5,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.0,
            "cetuximabMin": 1,
            "cetuximabMax": 1,
            "ratio": 1.0
          },
          {
            "day": 5,
            "vehicleMean": 1.4724663888,
            "vehicleN": 5,
            "vehicleMissingN": 0,
            "vehicleSD": 0.4665215178230605,
            "vehicleMin": 0.965677898,
            "vehicleMax": 2.182799471,
            "cetuximabMean": 1.3314607408,
            "cetuximabN": 5,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.3744919243137421,
            "cetuximabMin": 0.746565516,
            "cetuximabMax": 1.711724226,
            "ratio": 0.9042384606721559
          },
          {
            "day": 8,
            "vehicleMean": 1.384100535,
            "vehicleN": 5,
            "vehicleMissingN": 0,
            "vehicleSD": 0.35441667940753663,
            "vehicleMin": 0.939535888,
            "vehicleMax": 1.809008294,
            "cetuximabMean": 1.2422151044,
            "cetuximabN": 5,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.5324665930780222,
            "cetuximabMin": 0.543696966,
            "cetuximabMax": 1.936698519,
            "ratio": 0.8974890717746887
          },
          {
            "day": 12,
            "vehicleMean": 2.4167909324,
            "vehicleN": 5,
            "vehicleMissingN": 0,
            "vehicleSD": 0.5711921238756266,
            "vehicleMin": 1.574253494,
            "vehicleMax": 3.025356489,
            "cetuximabMean": 1.8006332326,
            "cetuximabN": 5,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.4567027051290365,
            "cetuximabMin": 1.222256404,
            "cetuximabMax": 2.440824844,
            "ratio": 0.7450513027255845
          },
          {
            "day": 15,
            "vehicleMean": 2.3695029724,
            "vehicleN": 5,
            "vehicleMissingN": 0,
            "vehicleSD": 0.20114880008755534,
            "vehicleMin": 2.060605342,
            "vehicleMax": 2.603205083,
            "cetuximabMean": 1.815362314,
            "cetuximabN": 5,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.754009581096022,
            "cetuximabMin": 0.8132482,
            "cetuximabMax": 2.834000273,
            "ratio": 0.7661363311822618
          },
          {
            "day": 19,
            "vehicleMean": 4.6569011172,
            "vehicleN": 5,
            "vehicleMissingN": 0,
            "vehicleSD": 1.473683035608247,
            "vehicleMin": 2.792954791,
            "vehicleMax": 6.340218356,
            "cetuximabMean": 3.2386419658,
            "cetuximabN": 5,
            "cetuximabMissingN": 0,
            "cetuximabSD": 1.1202197714209918,
            "cetuximabMin": 1.612236959,
            "cetuximabMax": 4.465724843,
            "ratio": 0.6954500180040885
          },
          {
            "day": 22,
            "vehicleMean": 4.6520209996,
            "vehicleN": 5,
            "vehicleMissingN": 0,
            "vehicleSD": 1.7284935721714942,
            "vehicleMin": 2.631141979,
            "vehicleMax": 7.004477949,
            "cetuximabMean": 2.2589778658,
            "cetuximabN": 5,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.5537620918609791,
            "cetuximabMin": 1.589176195,
            "cetuximabMax": 3.072523337,
            "ratio": 0.4855906424313725
          },
          {
            "day": 26,
            "vehicleMean": 5.2727664684,
            "vehicleN": 5,
            "vehicleMissingN": 0,
            "vehicleSD": 1.661120932855178,
            "vehicleMin": 3.615871095,
            "vehicleMax": 7.871737567,
            "cetuximabMean": 3.5533129558,
            "cetuximabN": 5,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.6697995345718792,
            "cetuximabMin": 2.631869854,
            "cetuximabMax": 4.341403509,
            "ratio": 0.6738991717337025
          }
        ],
        "endpoints": {
          "final": {
            "day": 26,
            "vehicleMean": 5.2727664684,
            "vehicleN": 5,
            "vehicleMissingN": 0,
            "vehicleSD": 1.661120932855178,
            "vehicleMin": 3.615871095,
            "vehicleMax": 7.871737567,
            "cetuximabMean": 3.5533129558,
            "cetuximabN": 5,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.6697995345718792,
            "cetuximabMin": 2.631869854,
            "cetuximabMax": 4.341403509,
            "ratio": 0.6738991717337025
          },
          "day14": {
            "day": 12,
            "vehicleMean": 2.4167909324,
            "vehicleN": 5,
            "vehicleMissingN": 0,
            "vehicleSD": 0.5711921238756266,
            "vehicleMin": 1.574253494,
            "vehicleMax": 3.025356489,
            "cetuximabMean": 1.8006332326,
            "cetuximabN": 5,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.4567027051290365,
            "cetuximabMin": 1.222256404,
            "cetuximabMax": 2.440824844,
            "ratio": 0.7450513027255845
          }
        },
        "sourceFinalFlagDays": [
          26
        ]
      }
    },
    {
      "id": "JG35",
      "sourceModelId": "JGHL35",
      "pdxNumber": "HN13-7219",
      "hpv": "Positive",
      "experimentalResponse": "not evaluated",
      "assays": {
        "CAV1": {
          "rna": 1.2255,
          "protein": -0.519852225,
          "rnaSourceValue": 1.2255,
          "rnaStatus": "measured",
          "rnaPercentile": 78.125,
          "proteinPercentile": 39.0625,
          "rankGap": 39.0625
        },
        "SOX2": {
          "rna": 0.86136,
          "protein": 0.799722679,
          "rnaSourceValue": 0.86136,
          "rnaStatus": "measured",
          "rnaPercentile": 57.142857142857146,
          "proteinPercentile": 65.625,
          "rankGap": 8.482142857142854
        },
        "AXL": {
          "rna": 2.0999,
          "protein": 0.74316267,
          "rnaSourceValue": 2.0999,
          "rnaStatus": "measured",
          "rnaPercentile": 82.8125,
          "proteinPercentile": 65.625,
          "rankGap": 17.1875
        },
        "TMEM173": {
          "rna": 1.0637,
          "protein": 1.032389955,
          "rnaSourceValue": 1.0637,
          "rnaStatus": "measured",
          "rnaPercentile": 84.375,
          "proteinPercentile": 78.125,
          "rankGap": 6.25
        },
        "BRD4": {
          "rna": 0.76157,
          "protein": 1.066184205,
          "rnaSourceValue": 0.76157,
          "rnaStatus": "measured",
          "rnaPercentile": 79.6875,
          "proteinPercentile": 85.9375,
          "rankGap": 6.25
        },
        "CLDN7": {
          "rna": 1.9415,
          "protein": 0.06776418,
          "rnaSourceValue": 1.9415,
          "rnaStatus": "measured",
          "rnaPercentile": 71.42857142857143,
          "proteinPercentile": 54.6875,
          "rankGap": 16.74107142857143
        },
        "GJA1": {
          "rna": 0.17681,
          "protein": -0.184614026,
          "rnaSourceValue": 0.17681,
          "rnaStatus": "measured",
          "rnaPercentile": 53.125,
          "proteinPercentile": 40.625,
          "rankGap": 12.5
        },
        "FN1": {
          "rna": -2.658,
          "protein": -0.204454725,
          "rnaSourceValue": -2.658,
          "rnaStatus": "measured",
          "rnaPercentile": 25.0,
          "proteinPercentile": 37.5,
          "rankGap": 12.5
        }
      },
      "growth": {
        "days": [],
        "endpoints": {
          "final": null,
          "day14": null
        },
        "sourceFinalFlagDays": []
      }
    },
    {
      "id": "JG36",
      "sourceModelId": "JGHL36",
      "pdxNumber": "HN13-7157",
      "hpv": "Positive",
      "experimentalResponse": "S",
      "assays": {
        "CAV1": {
          "rna": 1.9731,
          "protein": 0.26349608,
          "rnaSourceValue": 1.9731,
          "rnaStatus": "measured",
          "rnaPercentile": 85.9375,
          "proteinPercentile": 56.25,
          "rankGap": 29.6875
        },
        "SOX2": {
          "rna": -0.28911,
          "protein": -0.507790697,
          "rnaSourceValue": -0.28911,
          "rnaStatus": "measured",
          "rnaPercentile": 33.333333333333336,
          "proteinPercentile": 18.75,
          "rankGap": 14.583333333333336
        },
        "AXL": {
          "rna": 3.606,
          "protein": 1.521866364,
          "rnaSourceValue": 3.606,
          "rnaStatus": "measured",
          "rnaPercentile": 96.875,
          "proteinPercentile": 92.1875,
          "rankGap": 4.6875
        },
        "TMEM173": {
          "rna": 0.21213,
          "protein": -0.539212562,
          "rnaSourceValue": 0.21213,
          "rnaStatus": "measured",
          "rnaPercentile": 54.6875,
          "proteinPercentile": 32.8125,
          "rankGap": 21.875
        },
        "BRD4": {
          "rna": 0,
          "protein": -0.146420291,
          "rnaSourceValue": 0,
          "rnaStatus": "measured",
          "rnaPercentile": 47.65625,
          "proteinPercentile": 34.375,
          "rankGap": 13.28125
        },
        "CLDN7": {
          "rna": 2.513,
          "protein": 0.106540606,
          "rnaSourceValue": 2.513,
          "rnaStatus": "measured",
          "rnaPercentile": 82.53968253968254,
          "proteinPercentile": 56.25,
          "rankGap": 26.289682539682545
        },
        "GJA1": {
          "rna": -0.88855,
          "protein": -1.640685161,
          "rnaSourceValue": -0.88855,
          "rnaStatus": "measured",
          "rnaPercentile": 25.0,
          "proteinPercentile": 15.625,
          "rankGap": 9.375
        },
        "FN1": {
          "rna": 3.4718,
          "protein": 0.727760059,
          "rnaSourceValue": 3.4718,
          "rnaStatus": "measured",
          "rnaPercentile": 81.25,
          "proteinPercentile": 79.6875,
          "rankGap": 1.5625
        }
      },
      "growth": {
        "days": [
          {
            "day": 1,
            "vehicleMean": 1,
            "vehicleN": 3,
            "vehicleMissingN": 0,
            "vehicleSD": 0.0,
            "vehicleMin": 1,
            "vehicleMax": 1,
            "cetuximabMean": 1,
            "cetuximabN": 3,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.0,
            "cetuximabMin": 1,
            "cetuximabMax": 1,
            "ratio": 1.0
          },
          {
            "day": 6,
            "vehicleMean": 2.385946666666667,
            "vehicleN": 3,
            "vehicleMissingN": 0,
            "vehicleSD": 0.3551328986243508,
            "vehicleMin": 2.089972,
            "vehicleMax": 2.779736,
            "cetuximabMean": 0.9854163333333333,
            "cetuximabN": 3,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.08330733875435781,
            "cetuximabMin": 0.891359,
            "cetuximabMax": 1.04991,
            "ratio": 0.4130085333005487
          },
          {
            "day": 8,
            "vehicleMean": 4.3839109999999994,
            "vehicleN": 3,
            "vehicleMissingN": 0,
            "vehicleSD": 1.279533793491989,
            "vehicleMin": 3.227883,
            "vehicleMax": 5.758735,
            "cetuximabMean": 0.5524103333333333,
            "cetuximabN": 3,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.20052543669403472,
            "cetuximabMin": 0.323229,
            "cetuximabMax": 0.695591,
            "ratio": 0.12600856480282865
          },
          {
            "day": 13,
            "vehicleMean": 6.248341333333333,
            "vehicleN": 3,
            "vehicleMissingN": 0,
            "vehicleSD": 2.13157595366652,
            "vehicleMin": 5.000398,
            "vehicleMax": 8.709592,
            "cetuximabMean": 0.433257,
            "cetuximabN": 3,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.1410902108156339,
            "cetuximabMin": 0.270483,
            "cetuximabMax": 0.520553,
            "ratio": 0.06933952178455466
          },
          {
            "day": 15,
            "vehicleMean": 7.924274,
            "vehicleN": 3,
            "vehicleMissingN": 0,
            "vehicleSD": 2.38068725132807,
            "vehicleMin": 6.512248,
            "vehicleMax": 10.67291,
            "cetuximabMean": 0.374851,
            "cetuximabN": 3,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.11505772862350448,
            "cetuximabMin": 0.268821,
            "cetuximabMax": 0.497195,
            "ratio": 0.04730414420298945
          },
          {
            "day": 20,
            "vehicleMean": 9.756831333333334,
            "vehicleN": 3,
            "vehicleMissingN": 0,
            "vehicleSD": 3.6933840742908575,
            "vehicleMin": 7.271814,
            "vehicleMax": 14.00094,
            "cetuximabMean": 0.32491733333333334,
            "cetuximabN": 3,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.06617935793986925,
            "cetuximabMin": 0.258864,
            "cetuximabMax": 0.391222,
            "ratio": 0.03330152200369423
          }
        ],
        "endpoints": {
          "final": {
            "day": 20,
            "vehicleMean": 9.756831333333334,
            "vehicleN": 3,
            "vehicleMissingN": 0,
            "vehicleSD": 3.6933840742908575,
            "vehicleMin": 7.271814,
            "vehicleMax": 14.00094,
            "cetuximabMean": 0.32491733333333334,
            "cetuximabN": 3,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.06617935793986925,
            "cetuximabMin": 0.258864,
            "cetuximabMax": 0.391222,
            "ratio": 0.03330152200369423
          },
          "day14": {
            "day": 13,
            "vehicleMean": 6.248341333333333,
            "vehicleN": 3,
            "vehicleMissingN": 0,
            "vehicleSD": 2.13157595366652,
            "vehicleMin": 5.000398,
            "vehicleMax": 8.709592,
            "cetuximabMean": 0.433257,
            "cetuximabN": 3,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.1410902108156339,
            "cetuximabMin": 0.270483,
            "cetuximabMax": 0.520553,
            "ratio": 0.06933952178455466
          }
        },
        "sourceFinalFlagDays": [
          20
        ]
      }
    },
    {
      "id": "JG37",
      "sourceModelId": "JGHL37",
      "pdxNumber": "HN13-7313",
      "hpv": "Negative",
      "experimentalResponse": "not evaluated",
      "assays": {
        "CAV1": {
          "rna": 2.8359,
          "protein": 0.911287134,
          "rnaSourceValue": 2.8359,
          "rnaStatus": "measured",
          "rnaPercentile": 95.3125,
          "proteinPercentile": 82.8125,
          "rankGap": 12.5
        },
        "SOX2": {
          "rna": -1.2559,
          "protein": -0.827574716,
          "rnaSourceValue": -1.2559,
          "rnaStatus": "measured",
          "rnaPercentile": 12.698412698412698,
          "proteinPercentile": 4.6875,
          "rankGap": 8.010912698412698
        },
        "AXL": {
          "rna": 2.8424,
          "protein": 1.049044378,
          "rnaSourceValue": 2.8424,
          "rnaStatus": "measured",
          "rnaPercentile": 92.1875,
          "proteinPercentile": 84.375,
          "rankGap": 7.8125
        },
        "TMEM173": {
          "rna": 1.5036,
          "protein": 1.799822687,
          "rnaSourceValue": 1.5036,
          "rnaStatus": "measured",
          "rnaPercentile": 90.625,
          "proteinPercentile": 85.9375,
          "rankGap": 4.6875
        },
        "BRD4": {
          "rna": 0.0033094,
          "protein": -0.228428187,
          "rnaSourceValue": 0.0033094,
          "rnaStatus": "measured",
          "rnaPercentile": 51.5625,
          "proteinPercentile": 28.125,
          "rankGap": 23.4375
        },
        "CLDN7": {
          "rna": 0.56376,
          "protein": -0.076439248,
          "rnaSourceValue": 0.56376,
          "rnaStatus": "measured",
          "rnaPercentile": 52.38095238095238,
          "proteinPercentile": 32.8125,
          "rankGap": 19.56845238095238
        },
        "GJA1": {
          "rna": -2.5101,
          "protein": -1.671880117,
          "rnaSourceValue": -2.5101,
          "rnaStatus": "measured",
          "rnaPercentile": 7.8125,
          "proteinPercentile": 14.0625,
          "rankGap": 6.25
        },
        "FN1": {
          "rna": 6.4366,
          "protein": 1.253308342,
          "rnaSourceValue": 6.4366,
          "rnaStatus": "measured",
          "rnaPercentile": 96.875,
          "proteinPercentile": 87.5,
          "rankGap": 9.375
        }
      },
      "growth": {
        "days": [],
        "endpoints": {
          "final": null,
          "day14": null
        },
        "sourceFinalFlagDays": []
      }
    },
    {
      "id": "JG38",
      "sourceModelId": "JGHL38",
      "pdxNumber": "HN13-7475",
      "hpv": "Negative",
      "experimentalResponse": "not evaluated",
      "assays": {
        "CAV1": {
          "rna": -2.1283,
          "protein": -1.775685618,
          "rnaSourceValue": -2.1283,
          "rnaStatus": "measured",
          "rnaPercentile": 14.0625,
          "proteinPercentile": 3.125,
          "rankGap": 10.9375
        },
        "SOX2": {
          "rna": 3.7271,
          "protein": 2.291550676,
          "rnaSourceValue": 3.7271,
          "rnaStatus": "measured",
          "rnaPercentile": 95.23809523809524,
          "proteinPercentile": 96.875,
          "rankGap": 1.6369047619047592
        },
        "AXL": {
          "rna": 1.3487,
          "protein": 0.489447387,
          "rnaSourceValue": 1.3487,
          "rnaStatus": "measured",
          "rnaPercentile": 73.4375,
          "proteinPercentile": 60.9375,
          "rankGap": 12.5
        },
        "TMEM173": {
          "rna": 1.6018,
          "protein": 2.060756354,
          "rnaSourceValue": 1.6018,
          "rnaStatus": "measured",
          "rnaPercentile": 95.3125,
          "proteinPercentile": 89.0625,
          "rankGap": 6.25
        },
        "BRD4": {
          "rna": 2.146,
          "protein": 2.109974339,
          "rnaSourceValue": 2.146,
          "rnaStatus": "measured",
          "rnaPercentile": 98.4375,
          "proteinPercentile": 100.0,
          "rankGap": 1.5625
        },
        "CLDN7": {
          "rna": 1.5135,
          "protein": 0.471560538,
          "rnaSourceValue": 1.5135,
          "rnaStatus": "measured",
          "rnaPercentile": 68.25396825396825,
          "proteinPercentile": 71.875,
          "rankGap": 3.621031746031747
        },
        "GJA1": {
          "rna": 0.52238,
          "protein": 0.747293267,
          "rnaSourceValue": 0.52238,
          "rnaStatus": "measured",
          "rnaPercentile": 64.0625,
          "proteinPercentile": 75.0,
          "rankGap": 10.9375
        },
        "FN1": {
          "rna": 3.2939,
          "protein": -0.001005477,
          "rnaSourceValue": 3.2939,
          "rnaStatus": "measured",
          "rnaPercentile": 78.125,
          "proteinPercentile": 48.4375,
          "rankGap": 29.6875
        }
      },
      "growth": {
        "days": [],
        "endpoints": {
          "final": null,
          "day14": null
        },
        "sourceFinalFlagDays": []
      }
    },
    {
      "id": "JG39",
      "sourceModelId": "JGHL39",
      "pdxNumber": "HN13-7476",
      "hpv": "Negative",
      "experimentalResponse": "not evaluated",
      "assays": {
        "CAV1": {
          "rna": -2.6201,
          "protein": -1.453951421,
          "rnaSourceValue": -2.6201,
          "rnaStatus": "measured",
          "rnaPercentile": 9.375,
          "proteinPercentile": 7.8125,
          "rankGap": 1.5625
        },
        "SOX2": {
          "rna": 3.3105,
          "protein": 1.85828064,
          "rnaSourceValue": 3.3105,
          "rnaStatus": "measured",
          "rnaPercentile": 85.71428571428571,
          "proteinPercentile": 87.5,
          "rankGap": 1.7857142857142918
        },
        "AXL": {
          "rna": 1.011,
          "protein": 0.372049159,
          "rnaSourceValue": 1.011,
          "rnaStatus": "measured",
          "rnaPercentile": 67.1875,
          "proteinPercentile": 54.6875,
          "rankGap": 12.5
        },
        "TMEM173": {
          "rna": 1.2184,
          "protein": 2.324608137,
          "rnaSourceValue": 1.2184,
          "rnaStatus": "measured",
          "rnaPercentile": 87.5,
          "proteinPercentile": 92.1875,
          "rankGap": 4.6875
        },
        "BRD4": {
          "rna": 1.7422,
          "protein": 2.078805061,
          "rnaSourceValue": 1.7422,
          "rnaStatus": "measured",
          "rnaPercentile": 96.875,
          "proteinPercentile": 98.4375,
          "rankGap": 1.5625
        },
        "CLDN7": {
          "rna": 0.95895,
          "protein": 0.448963937,
          "rnaSourceValue": 0.95895,
          "rnaStatus": "measured",
          "rnaPercentile": 58.73015873015873,
          "proteinPercentile": 68.75,
          "rankGap": 10.019841269841272
        },
        "GJA1": {
          "rna": 0.88568,
          "protein": 0.759668794,
          "rnaSourceValue": 0.88568,
          "rnaStatus": "measured",
          "rnaPercentile": 73.4375,
          "proteinPercentile": 76.5625,
          "rankGap": 3.125
        },
        "FN1": {
          "rna": 2.1949,
          "protein": 0.058207794,
          "rnaSourceValue": 2.1949,
          "rnaStatus": "measured",
          "rnaPercentile": 65.625,
          "proteinPercentile": 53.125,
          "rankGap": 12.5
        }
      },
      "growth": {
        "days": [],
        "endpoints": {
          "final": null,
          "day14": null
        },
        "sourceFinalFlagDays": []
      }
    },
    {
      "id": "JG40",
      "sourceModelId": "JGHL40",
      "pdxNumber": "HN13-7327",
      "hpv": "Positive",
      "experimentalResponse": "S",
      "assays": {
        "CAV1": {
          "rna": -1.002,
          "protein": -0.872524601,
          "rnaSourceValue": -1.002,
          "rnaStatus": "measured",
          "rnaPercentile": 26.5625,
          "proteinPercentile": 31.25,
          "rankGap": 4.6875
        },
        "SOX2": {
          "rna": 2.4724,
          "protein": 0.813157117,
          "rnaSourceValue": 2.4724,
          "rnaStatus": "measured",
          "rnaPercentile": 76.19047619047619,
          "proteinPercentile": 67.1875,
          "rankGap": 9.00297619047619
        },
        "AXL": {
          "rna": -1.416,
          "protein": -0.448513008,
          "rnaSourceValue": -1.416,
          "rnaStatus": "measured",
          "rnaPercentile": 26.5625,
          "proteinPercentile": 40.625,
          "rankGap": 14.0625
        },
        "TMEM173": {
          "rna": 1.5655,
          "protein": 2.263452442,
          "rnaSourceValue": 1.5655,
          "rnaStatus": "measured",
          "rnaPercentile": 93.75,
          "proteinPercentile": 90.625,
          "rankGap": 3.125
        },
        "BRD4": {
          "rna": -0.16478,
          "protein": 0.619381294,
          "rnaSourceValue": -0.16478,
          "rnaStatus": "measured",
          "rnaPercentile": 37.5,
          "proteinPercentile": 70.3125,
          "rankGap": 32.8125
        },
        "CLDN7": {
          "rna": 2.8634,
          "protein": 1.041577106,
          "rnaSourceValue": 2.8634,
          "rnaStatus": "measured",
          "rnaPercentile": 90.47619047619048,
          "proteinPercentile": 85.9375,
          "rankGap": 4.538690476190482
        },
        "GJA1": {
          "rna": 0.20712,
          "protein": 0.002395045,
          "rnaSourceValue": 0.20712,
          "rnaStatus": "measured",
          "rnaPercentile": 54.6875,
          "proteinPercentile": 48.4375,
          "rankGap": 6.25
        },
        "FN1": {
          "rna": -2.1774,
          "protein": -0.966976254,
          "rnaSourceValue": -2.1774,
          "rnaStatus": "measured",
          "rnaPercentile": 32.8125,
          "proteinPercentile": 10.9375,
          "rankGap": 21.875
        }
      },
      "growth": {
        "days": [
          {
            "day": 1,
            "vehicleMean": 1,
            "vehicleN": 4,
            "vehicleMissingN": 0,
            "vehicleSD": 0.0,
            "vehicleMin": 1,
            "vehicleMax": 1,
            "cetuximabMean": 1,
            "cetuximabN": 4,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.0,
            "cetuximabMin": 1,
            "cetuximabMax": 1,
            "ratio": 1.0
          },
          {
            "day": 3,
            "vehicleMean": 1.5911115,
            "vehicleN": 4,
            "vehicleMissingN": 0,
            "vehicleSD": 0.06734879946715212,
            "vehicleMin": 1.518036,
            "vehicleMax": 1.663991,
            "cetuximabMean": 0.81793975,
            "cetuximabN": 4,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.10566952942507442,
            "cetuximabMin": 0.667411,
            "cetuximabMax": 0.903161,
            "ratio": 0.5140681529861357
          },
          {
            "day": 8,
            "vehicleMean": 2.021977,
            "vehicleN": 4,
            "vehicleMissingN": 0,
            "vehicleSD": 0.23451235265972661,
            "vehicleMin": 1.82147,
            "vehicleMax": 2.360413,
            "cetuximabMean": 0.73474125,
            "cetuximabN": 4,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.12932420300514774,
            "cetuximabMin": 0.564346,
            "cetuximabMax": 0.867039,
            "ratio": 0.36337764969631203
          },
          {
            "day": 10,
            "vehicleMean": 2.61909275,
            "vehicleN": 4,
            "vehicleMissingN": 0,
            "vehicleSD": 0.18983264006377648,
            "vehicleMin": 2.412831,
            "vehicleMax": 2.792215,
            "cetuximabMean": 0.70123325,
            "cetuximabN": 4,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.11095339597739526,
            "cetuximabMin": 0.547655,
            "cetuximabMax": 0.789332,
            "ratio": 0.2677389909158429
          },
          {
            "day": 15,
            "vehicleMean": 3.02313675,
            "vehicleN": 4,
            "vehicleMissingN": 0,
            "vehicleSD": 0.575599138573814,
            "vehicleMin": 2.608062,
            "vehicleMax": 3.831071,
            "cetuximabMean": 0.6458984999999999,
            "cetuximabN": 4,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.10583681611014821,
            "cetuximabMin": 0.532244,
            "cetuximabMax": 0.788029,
            "ratio": 0.21365176418168974
          }
        ],
        "endpoints": {
          "final": {
            "day": 15,
            "vehicleMean": 3.02313675,
            "vehicleN": 4,
            "vehicleMissingN": 0,
            "vehicleSD": 0.575599138573814,
            "vehicleMin": 2.608062,
            "vehicleMax": 3.831071,
            "cetuximabMean": 0.6458984999999999,
            "cetuximabN": 4,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.10583681611014821,
            "cetuximabMin": 0.532244,
            "cetuximabMax": 0.788029,
            "ratio": 0.21365176418168974
          },
          "day14": {
            "day": 10,
            "vehicleMean": 2.61909275,
            "vehicleN": 4,
            "vehicleMissingN": 0,
            "vehicleSD": 0.18983264006377648,
            "vehicleMin": 2.412831,
            "vehicleMax": 2.792215,
            "cetuximabMean": 0.70123325,
            "cetuximabN": 4,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.11095339597739526,
            "cetuximabMin": 0.547655,
            "cetuximabMax": 0.789332,
            "ratio": 0.2677389909158429
          }
        },
        "sourceFinalFlagDays": [
          15
        ]
      }
    },
    {
      "id": "JG41",
      "sourceModelId": "JGHL41",
      "pdxNumber": "HN13-7374",
      "hpv": "Negative",
      "experimentalResponse": "not evaluated",
      "assays": {
        "CAV1": {
          "rna": -2.136,
          "protein": -1.323764291,
          "rnaSourceValue": -2.136,
          "rnaStatus": "measured",
          "rnaPercentile": 12.5,
          "proteinPercentile": 10.9375,
          "rankGap": 1.5625
        },
        "SOX2": {
          "rna": 5.1716,
          "protein": 3.544728321,
          "rnaSourceValue": 5.1716,
          "rnaStatus": "measured",
          "rnaPercentile": 100.0,
          "proteinPercentile": 100.0,
          "rankGap": 0.0
        },
        "AXL": {
          "rna": -2.6731,
          "protein": -1.224129639,
          "rnaSourceValue": -2.6731,
          "rnaStatus": "measured",
          "rnaPercentile": 14.0625,
          "proteinPercentile": 10.9375,
          "rankGap": 3.125
        },
        "TMEM173": {
          "rna": -3.5987,
          "protein": -3.267850753,
          "rnaSourceValue": -3.5987,
          "rnaStatus": "measured",
          "rnaPercentile": 3.125,
          "proteinPercentile": 3.125,
          "rankGap": 0.0
        },
        "BRD4": {
          "rna": 0.92946,
          "protein": 0.668557286,
          "rnaSourceValue": 0.92946,
          "rnaStatus": "measured",
          "rnaPercentile": 81.25,
          "proteinPercentile": 71.875,
          "rankGap": 9.375
        },
        "CLDN7": {
          "rna": 4.0492,
          "protein": 2.844550696,
          "rnaSourceValue": 4.0492,
          "rnaStatus": "measured",
          "rnaPercentile": 100.0,
          "proteinPercentile": 100.0,
          "rankGap": 0.0
        },
        "GJA1": {
          "rna": -3.5134,
          "protein": -2.587839886,
          "rnaSourceValue": -3.5134,
          "rnaStatus": "measured",
          "rnaPercentile": 6.25,
          "proteinPercentile": 6.25,
          "rankGap": 0.0
        },
        "FN1": {
          "rna": -3.1678,
          "protein": -0.389857955,
          "rnaSourceValue": -3.1678,
          "rnaStatus": "measured",
          "rnaPercentile": 18.75,
          "proteinPercentile": 21.875,
          "rankGap": 3.125
        }
      },
      "growth": {
        "days": [],
        "endpoints": {
          "final": null,
          "day14": null
        },
        "sourceFinalFlagDays": []
      }
    },
    {
      "id": "JG42",
      "sourceModelId": "JGHL42",
      "pdxNumber": "HN13-7396",
      "hpv": "Negative",
      "experimentalResponse": "not evaluated",
      "assays": {
        "CAV1": {
          "rna": -0.90935,
          "protein": -1.078238202,
          "rnaSourceValue": -0.90935,
          "rnaStatus": "measured",
          "rnaPercentile": 29.6875,
          "proteinPercentile": 20.3125,
          "rankGap": 9.375
        },
        "SOX2": {
          "rna": -0.28619,
          "protein": 0.655584705,
          "rnaSourceValue": -0.28619,
          "rnaStatus": "measured",
          "rnaPercentile": 34.92063492063492,
          "proteinPercentile": 60.9375,
          "rankGap": 26.016865079365083
        },
        "AXL": {
          "rna": 0.98056,
          "protein": 0.993609159,
          "rnaSourceValue": 0.98056,
          "rnaStatus": "measured",
          "rnaPercentile": 64.0625,
          "proteinPercentile": 75.0,
          "rankGap": 10.9375
        },
        "TMEM173": {
          "rna": -0.89228,
          "protein": 0.023135372,
          "rnaSourceValue": -0.89228,
          "rnaStatus": "measured",
          "rnaPercentile": 18.75,
          "proteinPercentile": 50.0,
          "rankGap": 31.25
        },
        "BRD4": {
          "rna": -0.59253,
          "protein": 0.413125334,
          "rnaSourceValue": -0.59253,
          "rnaStatus": "measured",
          "rnaPercentile": 21.875,
          "proteinPercentile": 65.625,
          "rankGap": 43.75
        },
        "CLDN7": {
          "rna": 2.2378,
          "protein": 1.292140413,
          "rnaSourceValue": 2.2378,
          "rnaStatus": "measured",
          "rnaPercentile": 77.77777777777777,
          "proteinPercentile": 90.625,
          "rankGap": 12.847222222222229
        },
        "GJA1": {
          "rna": 0.566,
          "protein": 1.488187837,
          "rnaSourceValue": 0.566,
          "rnaStatus": "measured",
          "rnaPercentile": 67.1875,
          "proteinPercentile": 95.3125,
          "rankGap": 28.125
        },
        "FN1": {
          "rna": 1.8941,
          "protein": -0.192883767,
          "rnaSourceValue": 1.8941,
          "rnaStatus": "measured",
          "rnaPercentile": 64.0625,
          "proteinPercentile": 39.0625,
          "rankGap": 25.0
        }
      },
      "growth": {
        "days": [],
        "endpoints": {
          "final": null,
          "day14": null
        },
        "sourceFinalFlagDays": []
      }
    },
    {
      "id": "JG43",
      "sourceModelId": "JGHL43",
      "pdxNumber": "HN13-7414",
      "hpv": "Positive",
      "experimentalResponse": "not evaluated",
      "assays": {
        "CAV1": {
          "rna": 1.1014,
          "protein": 0.772236824,
          "rnaSourceValue": 1.1014,
          "rnaStatus": "measured",
          "rnaPercentile": 75.0,
          "proteinPercentile": 78.125,
          "rankGap": 3.125
        },
        "SOX2": {
          "rna": 2.5907,
          "protein": 1.297331778,
          "rnaSourceValue": 2.5907,
          "rnaStatus": "measured",
          "rnaPercentile": 79.36507936507937,
          "proteinPercentile": 78.125,
          "rankGap": 1.2400793650793673
        },
        "AXL": {
          "rna": 2.5739,
          "protein": 0.996947636,
          "rnaSourceValue": 2.5739,
          "rnaStatus": "measured",
          "rnaPercentile": 90.625,
          "proteinPercentile": 76.5625,
          "rankGap": 14.0625
        },
        "TMEM173": {
          "rna": 1.5025,
          "protein": 1.694156183,
          "rnaSourceValue": 1.5025,
          "rnaStatus": "measured",
          "rnaPercentile": 89.0625,
          "proteinPercentile": 84.375,
          "rankGap": 4.6875
        },
        "BRD4": {
          "rna": 1.0126,
          "protein": 0.728406322,
          "rnaSourceValue": 1.0126,
          "rnaStatus": "measured",
          "rnaPercentile": 82.8125,
          "proteinPercentile": 75.0,
          "rankGap": 7.8125
        },
        "CLDN7": {
          "rna": 1.2592,
          "protein": -0.106489426,
          "rnaSourceValue": 1.2592,
          "rnaStatus": "measured",
          "rnaPercentile": 61.904761904761905,
          "proteinPercentile": 31.25,
          "rankGap": 30.654761904761905
        },
        "GJA1": {
          "rna": 0.95509,
          "protein": 0.425592876,
          "rnaSourceValue": 0.95509,
          "rnaStatus": "measured",
          "rnaPercentile": 75.0,
          "proteinPercentile": 62.5,
          "rankGap": 12.5
        },
        "FN1": {
          "rna": 3.7863,
          "protein": 0.563003896,
          "rnaSourceValue": 3.7863,
          "rnaStatus": "measured",
          "rnaPercentile": 84.375,
          "proteinPercentile": 70.3125,
          "rankGap": 14.0625
        }
      },
      "growth": {
        "days": [],
        "endpoints": {
          "final": null,
          "day14": null
        },
        "sourceFinalFlagDays": []
      }
    },
    {
      "id": "JG44",
      "sourceModelId": "JGHL44",
      "pdxNumber": "HN13-7442",
      "hpv": "Negative",
      "experimentalResponse": "not evaluated",
      "assays": {
        "CAV1": {
          "rna": 0.011236,
          "protein": 0.044538098,
          "rnaSourceValue": 0.011236,
          "rnaStatus": "measured",
          "rnaPercentile": 50.0,
          "proteinPercentile": 50.0,
          "rankGap": 0.0
        },
        "SOX2": {
          "rna": 0.97709,
          "protein": 1.344188951,
          "rnaSourceValue": 0.97709,
          "rnaStatus": "measured",
          "rnaPercentile": 60.317460317460316,
          "proteinPercentile": 79.6875,
          "rankGap": 19.370039682539684
        },
        "AXL": {
          "rna": -1.4608,
          "protein": -0.844657046,
          "rnaSourceValue": -1.4608,
          "rnaStatus": "measured",
          "rnaPercentile": 25.0,
          "proteinPercentile": 26.5625,
          "rankGap": 1.5625
        },
        "TMEM173": {
          "rna": -0.18519,
          "protein": 0.291786577,
          "rnaSourceValue": -0.18519,
          "rnaStatus": "measured",
          "rnaPercentile": 45.3125,
          "proteinPercentile": 57.8125,
          "rankGap": 12.5
        },
        "BRD4": {
          "rna": -0.27005,
          "protein": -0.022593389,
          "rnaSourceValue": -0.27005,
          "rnaStatus": "measured",
          "rnaPercentile": 34.375,
          "proteinPercentile": 45.3125,
          "rankGap": 10.9375
        },
        "CLDN7": {
          "rna": 0.86319,
          "protein": -0.016040656,
          "rnaSourceValue": 0.86319,
          "rnaStatus": "measured",
          "rnaPercentile": 57.142857142857146,
          "proteinPercentile": 45.3125,
          "rankGap": 11.830357142857146
        },
        "GJA1": {
          "rna": -0.92196,
          "protein": -0.23020216,
          "rnaSourceValue": -0.92196,
          "rnaStatus": "measured",
          "rnaPercentile": 23.4375,
          "proteinPercentile": 35.9375,
          "rankGap": 12.5
        },
        "FN1": {
          "rna": -1.0708,
          "protein": 0.503927926,
          "rnaSourceValue": -1.0708,
          "rnaStatus": "measured",
          "rnaPercentile": 40.625,
          "proteinPercentile": 68.75,
          "rankGap": 28.125
        }
      },
      "growth": {
        "days": [],
        "endpoints": {
          "final": null,
          "day14": null
        },
        "sourceFinalFlagDays": []
      }
    },
    {
      "id": "JG45",
      "sourceModelId": "JGHL45",
      "pdxNumber": "HN13-7450",
      "hpv": "Negative",
      "experimentalResponse": "not evaluated",
      "assays": {
        "CAV1": {
          "rna": 1.7397,
          "protein": 1.015989465,
          "rnaSourceValue": 1.7397,
          "rnaStatus": "measured",
          "rnaPercentile": 82.8125,
          "proteinPercentile": 89.0625,
          "rankGap": 6.25
        },
        "SOX2": {
          "rna": -0.39524,
          "protein": 0.398172523,
          "rnaSourceValue": -0.39524,
          "rnaStatus": "measured",
          "rnaPercentile": 26.984126984126984,
          "proteinPercentile": 57.8125,
          "rankGap": 30.828373015873016
        },
        "AXL": {
          "rna": 0,
          "protein": 0.44964144,
          "rnaSourceValue": 0,
          "rnaStatus": "measured",
          "rnaPercentile": 48.4375,
          "proteinPercentile": 57.8125,
          "rankGap": 9.375
        },
        "TMEM173": {
          "rna": -0.57934,
          "protein": -0.619043438,
          "rnaSourceValue": -0.57934,
          "rnaStatus": "measured",
          "rnaPercentile": 28.125,
          "proteinPercentile": 29.6875,
          "rankGap": 1.5625
        },
        "BRD4": {
          "rna": -0.38072,
          "protein": 0.532434507,
          "rnaSourceValue": -0.38072,
          "rnaStatus": "measured",
          "rnaPercentile": 29.6875,
          "proteinPercentile": 68.75,
          "rankGap": 39.0625
        },
        "CLDN7": {
          "rna": -0.38395,
          "protein": -0.355796587,
          "rnaSourceValue": -0.38395,
          "rnaStatus": "measured",
          "rnaPercentile": 41.26984126984127,
          "proteinPercentile": 9.375,
          "rankGap": 31.894841269841272
        },
        "GJA1": {
          "rna": 0.054049,
          "protein": 1.19463475,
          "rnaSourceValue": 0.054049,
          "rnaStatus": "measured",
          "rnaPercentile": 50.0,
          "proteinPercentile": 92.1875,
          "rankGap": 42.1875
        },
        "FN1": {
          "rna": 1.5044,
          "protein": -0.27210158,
          "rnaSourceValue": 1.5044,
          "rnaStatus": "measured",
          "rnaPercentile": 62.5,
          "proteinPercentile": 32.8125,
          "rankGap": 29.6875
        }
      },
      "growth": {
        "days": [],
        "endpoints": {
          "final": null,
          "day14": null
        },
        "sourceFinalFlagDays": []
      }
    },
    {
      "id": "JG46",
      "sourceModelId": "JGHL46",
      "pdxNumber": "HN14-7970",
      "hpv": "Negative",
      "experimentalResponse": "not evaluated",
      "assays": {
        "CAV1": {
          "rna": 1.1326,
          "protein": 0.329122937,
          "rnaSourceValue": 1.1326,
          "rnaStatus": "measured",
          "rnaPercentile": 76.5625,
          "proteinPercentile": 57.8125,
          "rankGap": 18.75
        },
        "SOX2": {
          "rna": -1.1459,
          "protein": -0.079994554,
          "rnaSourceValue": -1.1459,
          "rnaStatus": "measured",
          "rnaPercentile": 15.079365079365079,
          "proteinPercentile": 45.3125,
          "rankGap": 30.23313492063492
        },
        "AXL": {
          "rna": 1.8679,
          "protein": 1.25954976,
          "rnaSourceValue": 1.8679,
          "rnaStatus": "measured",
          "rnaPercentile": 79.6875,
          "proteinPercentile": 87.5,
          "rankGap": 7.8125
        },
        "TMEM173": {
          "rna": -0.33852,
          "protein": -0.35405235,
          "rnaSourceValue": -0.33852,
          "rnaStatus": "measured",
          "rnaPercentile": 37.5,
          "proteinPercentile": 37.5,
          "rankGap": 0.0
        },
        "BRD4": {
          "rna": -1.8715,
          "protein": -0.86547129,
          "rnaSourceValue": -1.8715,
          "rnaStatus": "measured",
          "rnaPercentile": 1.5625,
          "proteinPercentile": 3.125,
          "rankGap": 1.5625
        },
        "CLDN7": {
          "rna": -0.98848,
          "protein": -0.322957187,
          "rnaSourceValue": -0.98848,
          "rnaStatus": "measured",
          "rnaPercentile": 30.158730158730158,
          "proteinPercentile": 12.5,
          "rankGap": 17.658730158730158
        },
        "GJA1": {
          "rna": -4.1588,
          "protein": -2.362673079,
          "rnaSourceValue": -4.1588,
          "rnaStatus": "measured",
          "rnaPercentile": 4.6875,
          "proteinPercentile": 7.8125,
          "rankGap": 3.125
        },
        "FN1": {
          "rna": 2.8946,
          "protein": 1.102234864,
          "rnaSourceValue": 2.8946,
          "rnaStatus": "measured",
          "rnaPercentile": 76.5625,
          "proteinPercentile": 82.8125,
          "rankGap": 6.25
        }
      },
      "growth": {
        "days": [],
        "endpoints": {
          "final": null,
          "day14": null
        },
        "sourceFinalFlagDays": []
      }
    },
    {
      "id": "JG47",
      "sourceModelId": "JGHL47",
      "pdxNumber": "HN14-7636",
      "hpv": "Positive",
      "experimentalResponse": "not evaluated",
      "assays": {
        "CAV1": {
          "rna": -0.75171,
          "protein": -1.465614811,
          "rnaSourceValue": -0.75171,
          "rnaStatus": "measured",
          "rnaPercentile": 32.8125,
          "proteinPercentile": 6.25,
          "rankGap": 26.5625
        },
        "SOX2": {
          "rna": 2.6624,
          "protein": 0.95781462,
          "rnaSourceValue": 2.6624,
          "rnaStatus": "measured",
          "rnaPercentile": 80.95238095238095,
          "proteinPercentile": 71.875,
          "rankGap": 9.077380952380949
        },
        "AXL": {
          "rna": -2.0765,
          "protein": -1.439429654,
          "rnaSourceValue": -2.0765,
          "rnaStatus": "measured",
          "rnaPercentile": 20.3125,
          "proteinPercentile": 6.25,
          "rankGap": 14.0625
        },
        "TMEM173": {
          "rna": 0.83479,
          "protein": 0.785106379,
          "rnaSourceValue": 0.83479,
          "rnaStatus": "measured",
          "rnaPercentile": 71.875,
          "proteinPercentile": 68.75,
          "rankGap": 3.125
        },
        "BRD4": {
          "rna": 0.73439,
          "protein": -0.211866532,
          "rnaSourceValue": 0.73439,
          "rnaStatus": "measured",
          "rnaPercentile": 78.125,
          "proteinPercentile": 31.25,
          "rankGap": 46.875
        },
        "CLDN7": {
          "rna": 2.5026,
          "protein": 1.05887532,
          "rnaSourceValue": 2.5026,
          "rnaStatus": "measured",
          "rnaPercentile": 80.95238095238095,
          "proteinPercentile": 87.5,
          "rankGap": 6.547619047619051
        },
        "GJA1": {
          "rna": -4.8003,
          "protein": -3.317650691,
          "rnaSourceValue": -4.8003,
          "rnaStatus": "measured",
          "rnaPercentile": 3.125,
          "proteinPercentile": 1.5625,
          "rankGap": 1.5625
        },
        "FN1": {
          "rna": -4.6783,
          "protein": 0.215166349,
          "rnaSourceValue": -4.6783,
          "rnaStatus": "measured",
          "rnaPercentile": 4.6875,
          "proteinPercentile": 59.375,
          "rankGap": 54.6875
        }
      },
      "growth": {
        "days": [],
        "endpoints": {
          "final": null,
          "day14": null
        },
        "sourceFinalFlagDays": []
      }
    },
    {
      "id": "JG48",
      "sourceModelId": "JGHL48",
      "pdxNumber": "HN14-7964",
      "hpv": "Negative",
      "experimentalResponse": "not evaluated",
      "assays": {
        "CAV1": {
          "rna": 0.5635,
          "protein": -1.13683573,
          "rnaSourceValue": 0.5635,
          "rnaStatus": "measured",
          "rnaPercentile": 59.375,
          "proteinPercentile": 18.75,
          "rankGap": 40.625
        },
        "SOX2": {
          "rna": -0.13798,
          "protein": -0.681433187,
          "rnaSourceValue": -0.13798,
          "rnaStatus": "measured",
          "rnaPercentile": 39.682539682539684,
          "proteinPercentile": 9.375,
          "rankGap": 30.307539682539684
        },
        "AXL": {
          "rna": -0.039145,
          "protein": -1.179330796,
          "rnaSourceValue": -0.039145,
          "rnaStatus": "measured",
          "rnaPercentile": 46.875,
          "proteinPercentile": 14.0625,
          "rankGap": 32.8125
        },
        "TMEM173": {
          "rna": -1.2866,
          "protein": -0.080954603,
          "rnaSourceValue": -1.2866,
          "rnaStatus": "measured",
          "rnaPercentile": 10.9375,
          "proteinPercentile": 45.3125,
          "rankGap": 34.375
        },
        "BRD4": {
          "rna": -0.79608,
          "protein": -0.359748309,
          "rnaSourceValue": -0.79608,
          "rnaStatus": "measured",
          "rnaPercentile": 10.9375,
          "proteinPercentile": 18.75,
          "rankGap": 7.8125
        },
        "CLDN7": {
          "rna": -1.7672,
          "protein": -0.143742564,
          "rnaSourceValue": -1.7672,
          "rnaStatus": "measured",
          "rnaPercentile": 25.396825396825395,
          "proteinPercentile": 29.6875,
          "rankGap": 4.290674603174605
        },
        "GJA1": {
          "rna": -0.86328,
          "protein": -3.023386949,
          "rnaSourceValue": -0.86328,
          "rnaStatus": "measured",
          "rnaPercentile": 31.25,
          "proteinPercentile": 3.125,
          "rankGap": 28.125
        },
        "FN1": {
          "rna": 0.78855,
          "protein": -1.121067103,
          "rnaSourceValue": 0.78855,
          "rnaStatus": "measured",
          "rnaPercentile": 56.25,
          "proteinPercentile": 6.25,
          "rankGap": 50.0
        }
      },
      "growth": {
        "days": [],
        "endpoints": {
          "final": null,
          "day14": null
        },
        "sourceFinalFlagDays": []
      }
    },
    {
      "id": "JG49",
      "sourceModelId": "JGHL49",
      "pdxNumber": "HN15-7992",
      "hpv": "Negative",
      "experimentalResponse": "not evaluated",
      "assays": {
        "CAV1": {
          "rna": -0.48675,
          "protein": 0.663260622,
          "rnaSourceValue": -0.48675,
          "rnaStatus": "measured",
          "rnaPercentile": 35.9375,
          "proteinPercentile": 68.75,
          "rankGap": 32.8125
        },
        "SOX2": {
          "rna": -0.063587,
          "protein": 0.268381075,
          "rnaSourceValue": -0.063587,
          "rnaStatus": "measured",
          "rnaPercentile": 44.44444444444444,
          "proteinPercentile": 56.25,
          "rankGap": 11.805555555555557
        },
        "AXL": {
          "rna": 0.67324,
          "protein": 1.070306381,
          "rnaSourceValue": 0.67324,
          "rnaStatus": "measured",
          "rnaPercentile": 59.375,
          "proteinPercentile": 85.9375,
          "rankGap": 26.5625
        },
        "TMEM173": {
          "rna": -2.0836,
          "protein": 0.213337272,
          "rnaSourceValue": -2.0836,
          "rnaStatus": "measured",
          "rnaPercentile": 6.25,
          "proteinPercentile": 56.25,
          "rankGap": 50.0
        },
        "BRD4": {
          "rna": -1.9662,
          "protein": -0.662798211,
          "rnaSourceValue": -1.9662,
          "rnaStatus": "measured",
          "rnaPercentile": 0.0,
          "proteinPercentile": 6.25,
          "rankGap": 6.25
        },
        "CLDN7": {
          "rna": -2.0053,
          "protein": -0.30402326,
          "rnaSourceValue": -2.0053,
          "rnaStatus": "measured",
          "rnaPercentile": 22.22222222222222,
          "proteinPercentile": 15.625,
          "rankGap": 6.597222222222221
        },
        "GJA1": {
          "rna": -0.83015,
          "protein": 0.31348781,
          "rnaSourceValue": -0.83015,
          "rnaStatus": "measured",
          "rnaPercentile": 32.8125,
          "proteinPercentile": 56.25,
          "rankGap": 23.4375
        },
        "FN1": {
          "rna": -3.3401,
          "protein": -0.136501159,
          "rnaSourceValue": -3.3401,
          "rnaStatus": "measured",
          "rnaPercentile": 16.40625,
          "proteinPercentile": 42.1875,
          "rankGap": 25.78125
        }
      },
      "growth": {
        "days": [],
        "endpoints": {
          "final": null,
          "day14": null
        },
        "sourceFinalFlagDays": []
      }
    },
    {
      "id": "JG50",
      "sourceModelId": "JGHL50",
      "pdxNumber": "HN13-7483",
      "hpv": "Positive",
      "experimentalResponse": "not evaluated",
      "assays": {
        "CAV1": {
          "rna": 0.81363,
          "protein": -0.640314131,
          "rnaSourceValue": 0.81363,
          "rnaStatus": "measured",
          "rnaPercentile": 64.0625,
          "proteinPercentile": 35.9375,
          "rankGap": 28.125
        },
        "SOX2": {
          "rna": 2.8051,
          "protein": 1.357299131,
          "rnaSourceValue": 2.8051,
          "rnaStatus": "measured",
          "rnaPercentile": 84.12698412698413,
          "proteinPercentile": 81.25,
          "rankGap": 2.8769841269841265
        },
        "AXL": {
          "rna": -2.8809,
          "protein": -1.471714121,
          "rnaSourceValue": -2.8809,
          "rnaStatus": "measured",
          "rnaPercentile": 10.9375,
          "proteinPercentile": 4.6875,
          "rankGap": 6.25
        },
        "TMEM173": {
          "rna": 3.0236,
          "protein": 3.104682131,
          "rnaSourceValue": 3.0236,
          "rnaStatus": "measured",
          "rnaPercentile": 100.0,
          "proteinPercentile": 98.4375,
          "rankGap": 1.5625
        },
        "BRD4": {
          "rna": 0.60966,
          "protein": 1.054327995,
          "rnaSourceValue": 0.60966,
          "rnaStatus": "measured",
          "rnaPercentile": 75.0,
          "proteinPercentile": 82.8125,
          "rankGap": 7.8125
        },
        "CLDN7": {
          "rna": 2.3772,
          "protein": 0.529301131,
          "rnaSourceValue": 2.3772,
          "rnaStatus": "measured",
          "rnaPercentile": 79.36507936507937,
          "proteinPercentile": 73.4375,
          "rankGap": 5.927579365079367
        },
        "GJA1": {
          "rna": -0.66454,
          "protein": -1.333923797,
          "rnaSourceValue": -0.66454,
          "rnaStatus": "measured",
          "rnaPercentile": 37.5,
          "proteinPercentile": 20.3125,
          "rankGap": 17.1875
        },
        "FN1": {
          "rna": -0.61667,
          "protein": -0.945838684,
          "rnaSourceValue": -0.61667,
          "rnaStatus": "measured",
          "rnaPercentile": 43.75,
          "proteinPercentile": 12.5,
          "rankGap": 31.25
        }
      },
      "growth": {
        "days": [],
        "endpoints": {
          "final": null,
          "day14": null
        },
        "sourceFinalFlagDays": []
      }
    },
    {
      "id": "JG51",
      "sourceModelId": "JGHL51",
      "pdxNumber": "HN13-7478",
      "hpv": "Negative",
      "experimentalResponse": "not evaluated",
      "assays": {
        "CAV1": {
          "rna": -0.66745,
          "protein": -0.895947772,
          "rnaSourceValue": -0.66745,
          "rnaStatus": "measured",
          "rnaPercentile": 34.375,
          "proteinPercentile": 29.6875,
          "rankGap": 4.6875
        },
        "SOX2": {
          "rna": -0.1106,
          "protein": -0.491728022,
          "rnaSourceValue": -0.1106,
          "rnaStatus": "measured",
          "rnaPercentile": 41.26984126984127,
          "proteinPercentile": 20.3125,
          "rankGap": 20.957341269841272
        },
        "AXL": {
          "rna": 0.043474,
          "protein": -0.53137993,
          "rnaSourceValue": 0.043474,
          "rnaStatus": "measured",
          "rnaPercentile": 50.0,
          "proteinPercentile": 39.0625,
          "rankGap": 10.9375
        },
        "TMEM173": {
          "rna": 0.51715,
          "protein": -0.0347095,
          "rnaSourceValue": 0.51715,
          "rnaStatus": "measured",
          "rnaPercentile": 62.5,
          "proteinPercentile": 46.875,
          "rankGap": 15.625
        },
        "BRD4": {
          "rna": 0.60192,
          "protein": 0.188414007,
          "rnaSourceValue": 0.60192,
          "rnaStatus": "measured",
          "rnaPercentile": 73.4375,
          "proteinPercentile": 57.8125,
          "rankGap": 15.625
        },
        "CLDN7": {
          "rna": 2.6903,
          "protein": 1.316920398,
          "rnaSourceValue": 2.6903,
          "rnaStatus": "measured",
          "rnaPercentile": 85.71428571428571,
          "proteinPercentile": 92.1875,
          "rankGap": 6.473214285714292
        },
        "GJA1": {
          "rna": -0.88783,
          "protein": -0.726217722,
          "rnaSourceValue": -0.88783,
          "rnaStatus": "measured",
          "rnaPercentile": 26.5625,
          "proteinPercentile": 26.5625,
          "rankGap": 0.0
        },
        "FN1": {
          "rna": 0.7867,
          "protein": -0.349166042,
          "rnaSourceValue": 0.7867,
          "rnaStatus": "measured",
          "rnaPercentile": 54.6875,
          "proteinPercentile": 23.4375,
          "rankGap": 31.25
        }
      },
      "growth": {
        "days": [],
        "endpoints": {
          "final": null,
          "day14": null
        },
        "sourceFinalFlagDays": []
      }
    },
    {
      "id": "JG52",
      "sourceModelId": "JGHL52",
      "pdxNumber": "HN14-7680",
      "hpv": "Positive",
      "experimentalResponse": "not evaluated",
      "assays": {
        "CAV1": {
          "rna": -4.3952,
          "protein": -2.700376412,
          "rnaSourceValue": -4.3952,
          "rnaStatus": "measured",
          "rnaPercentile": 3.125,
          "proteinPercentile": 0.0,
          "rankGap": 3.125
        },
        "SOX2": {
          "rna": 4.3258,
          "protein": 1.966784836,
          "rnaSourceValue": 4.3258,
          "rnaStatus": "measured",
          "rnaPercentile": 96.82539682539682,
          "proteinPercentile": 92.1875,
          "rankGap": 4.6378968253968225
        },
        "AXL": {
          "rna": -1.2691,
          "protein": -0.787601045,
          "rnaSourceValue": -1.2691,
          "rnaStatus": "measured",
          "rnaPercentile": 29.6875,
          "proteinPercentile": 31.25,
          "rankGap": 1.5625
        },
        "TMEM173": {
          "rna": -0.83662,
          "protein": 1.063471355,
          "rnaSourceValue": -0.83662,
          "rnaStatus": "measured",
          "rnaPercentile": 20.3125,
          "proteinPercentile": 79.6875,
          "rankGap": 59.375
        },
        "BRD4": {
          "rna": 1.233,
          "protein": 0.478126096,
          "rnaSourceValue": 1.233,
          "rnaStatus": "measured",
          "rnaPercentile": 92.1875,
          "proteinPercentile": 67.1875,
          "rankGap": 25.0
        },
        "CLDN7": {
          "rna": 2.5632,
          "protein": 2.30467175,
          "rnaSourceValue": 2.5632,
          "rnaStatus": "measured",
          "rnaPercentile": 84.12698412698413,
          "proteinPercentile": 98.4375,
          "rankGap": 14.310515873015873
        },
        "GJA1": {
          "rna": -1.4843,
          "protein": 0.545033433,
          "rnaSourceValue": -1.4843,
          "rnaStatus": "measured",
          "rnaPercentile": 17.1875,
          "proteinPercentile": 67.1875,
          "rankGap": 50.0
        },
        "FN1": {
          "rna": -2.7623,
          "protein": -0.344014883,
          "rnaSourceValue": -2.7623,
          "rnaStatus": "measured",
          "rnaPercentile": 21.875,
          "proteinPercentile": 25.0,
          "rankGap": 3.125
        }
      },
      "growth": {
        "days": [],
        "endpoints": {
          "final": null,
          "day14": null
        },
        "sourceFinalFlagDays": []
      }
    },
    {
      "id": "JG53",
      "sourceModelId": "JGHL53",
      "pdxNumber": "HN14-7849",
      "hpv": "Positive",
      "experimentalResponse": "not evaluated",
      "assays": {
        "CAV1": {
          "rna": -0.34012,
          "protein": -1.074901206,
          "rnaSourceValue": -0.34012,
          "rnaStatus": "measured",
          "rnaPercentile": 40.625,
          "proteinPercentile": 21.875,
          "rankGap": 18.75
        },
        "SOX2": {
          "rna": 2.802,
          "protein": 1.229570918,
          "rnaSourceValue": 2.802,
          "rnaStatus": "measured",
          "rnaPercentile": 82.53968253968254,
          "proteinPercentile": 75.0,
          "rankGap": 7.539682539682545
        },
        "AXL": {
          "rna": -2.4915,
          "protein": -0.71914441,
          "rnaSourceValue": -2.4915,
          "rnaStatus": "measured",
          "rnaPercentile": 17.1875,
          "proteinPercentile": 32.8125,
          "rankGap": 15.625
        },
        "TMEM173": {
          "rna": 2.1535,
          "protein": 3.206382727,
          "rnaSourceValue": 2.1535,
          "rnaStatus": "measured",
          "rnaPercentile": 98.4375,
          "proteinPercentile": 100.0,
          "rankGap": 1.5625
        },
        "BRD4": {
          "rna": 1.2759,
          "protein": 1.796218881,
          "rnaSourceValue": 1.2759,
          "rnaStatus": "measured",
          "rnaPercentile": 93.75,
          "proteinPercentile": 96.875,
          "rankGap": 3.125
        },
        "CLDN7": {
          "rna": 2.0604,
          "protein": 0.350033912,
          "rnaSourceValue": 2.0604,
          "rnaStatus": "measured",
          "rnaPercentile": 73.01587301587301,
          "proteinPercentile": 65.625,
          "rankGap": 7.390873015873012
        },
        "GJA1": {
          "rna": -2.2695,
          "protein": -1.783342884,
          "rnaSourceValue": -2.2695,
          "rnaStatus": "measured",
          "rnaPercentile": 9.375,
          "proteinPercentile": 10.9375,
          "rankGap": 1.5625
        },
        "FN1": {
          "rna": 1.1759,
          "protein": 0.190174457,
          "rnaSourceValue": 1.1759,
          "rnaStatus": "measured",
          "rnaPercentile": 59.375,
          "proteinPercentile": 56.25,
          "rankGap": 3.125
        }
      },
      "growth": {
        "days": [],
        "endpoints": {
          "final": null,
          "day14": null
        },
        "sourceFinalFlagDays": []
      }
    },
    {
      "id": "JG54",
      "sourceModelId": "JGHL54",
      "pdxNumber": "HN14-7561",
      "hpv": "Negative",
      "experimentalResponse": "not evaluated",
      "assays": {
        "CAV1": {
          "rna": -0.048353,
          "protein": 0.181768794,
          "rnaSourceValue": -0.048353,
          "rnaStatus": "measured",
          "rnaPercentile": 46.875,
          "proteinPercentile": 53.125,
          "rankGap": 6.25
        },
        "SOX2": {
          "rna": 3.4194,
          "protein": 2.141704592,
          "rnaSourceValue": 3.4194,
          "rnaStatus": "measured",
          "rnaPercentile": 93.65079365079364,
          "proteinPercentile": 95.3125,
          "rankGap": 1.661706349206355
        },
        "AXL": {
          "rna": -2.9014,
          "protein": -1.353075665,
          "rnaSourceValue": -2.9014,
          "rnaStatus": "measured",
          "rnaPercentile": 9.375,
          "proteinPercentile": 7.8125,
          "rankGap": 1.5625
        },
        "TMEM173": {
          "rna": -0.36833,
          "protein": 0.715818066,
          "rnaSourceValue": -0.36833,
          "rnaStatus": "measured",
          "rnaPercentile": 35.9375,
          "proteinPercentile": 65.625,
          "rankGap": 29.6875
        },
        "BRD4": {
          "rna": 1.1898,
          "protein": 1.716699965,
          "rnaSourceValue": 1.1898,
          "rnaStatus": "measured",
          "rnaPercentile": 90.625,
          "proteinPercentile": 95.3125,
          "rankGap": 4.6875
        },
        "CLDN7": {
          "rna": 1.6266,
          "protein": 0.951935008,
          "rnaSourceValue": 1.6266,
          "rnaStatus": "measured",
          "rnaPercentile": 69.84126984126983,
          "proteinPercentile": 82.8125,
          "rankGap": 12.971230158730165
        },
        "GJA1": {
          "rna": -0.68341,
          "protein": -0.135675066,
          "rnaSourceValue": -0.68341,
          "rnaStatus": "measured",
          "rnaPercentile": 35.9375,
          "proteinPercentile": 42.1875,
          "rankGap": 6.25
        },
        "FN1": {
          "rna": 0.54143,
          "protein": 0.213166965,
          "rnaSourceValue": 0.54143,
          "rnaStatus": "measured",
          "rnaPercentile": 51.5625,
          "proteinPercentile": 57.8125,
          "rankGap": 6.25
        }
      },
      "growth": {
        "days": [],
        "endpoints": {
          "final": null,
          "day14": null
        },
        "sourceFinalFlagDays": []
      }
    },
    {
      "id": "JG55",
      "sourceModelId": "JGHL55",
      "pdxNumber": "HN14-7889",
      "hpv": "Negative",
      "experimentalResponse": "not evaluated",
      "assays": {
        "CAV1": {
          "rna": 1.7562,
          "protein": 1.531671607,
          "rnaSourceValue": 1.7562,
          "rnaStatus": "measured",
          "rnaPercentile": 84.375,
          "proteinPercentile": 100.0,
          "rankGap": 15.625
        },
        "SOX2": {
          "rna": -0.33063,
          "protein": -0.573924654,
          "rnaSourceValue": -0.33063,
          "rnaStatus": "measured",
          "rnaPercentile": 31.746031746031747,
          "proteinPercentile": 14.0625,
          "rankGap": 17.683531746031747
        },
        "AXL": {
          "rna": 0.47514,
          "protein": 0.470886464,
          "rnaSourceValue": 0.47514,
          "rnaStatus": "measured",
          "rnaPercentile": 57.8125,
          "proteinPercentile": 59.375,
          "rankGap": 1.5625
        },
        "TMEM173": {
          "rna": -0.23925,
          "protein": 1.027136041,
          "rnaSourceValue": -0.23925,
          "rnaStatus": "measured",
          "rnaPercentile": 42.1875,
          "proteinPercentile": 76.5625,
          "rankGap": 34.375
        },
        "BRD4": {
          "rna": 1.036,
          "protein": -0.572464657,
          "rnaSourceValue": 1.036,
          "rnaStatus": "measured",
          "rnaPercentile": 84.375,
          "proteinPercentile": 12.5,
          "rankGap": 71.875
        },
        "CLDN7": {
          "rna": -3.4444,
          "protein": -0.495430242,
          "rnaSourceValue": -3.4444,
          "rnaStatus": "measured",
          "rnaPercentile": 9.523809523809524,
          "proteinPercentile": 3.125,
          "rankGap": 6.398809523809524
        },
        "GJA1": {
          "rna": 0,
          "protein": 1.139141867,
          "rnaSourceValue": 0,
          "rnaStatus": "measured",
          "rnaPercentile": 46.875,
          "proteinPercentile": 87.5,
          "rankGap": 40.625
        },
        "FN1": {
          "rna": 4.2122,
          "protein": 1.934809615,
          "rnaSourceValue": 4.2122,
          "rnaStatus": "measured",
          "rnaPercentile": 85.9375,
          "proteinPercentile": 95.3125,
          "rankGap": 9.375
        }
      },
      "growth": {
        "days": [],
        "endpoints": {
          "final": null,
          "day14": null
        },
        "sourceFinalFlagDays": []
      }
    },
    {
      "id": "JG56",
      "sourceModelId": "JGHL56",
      "pdxNumber": "HN14-7721",
      "hpv": "Negative",
      "experimentalResponse": "not evaluated",
      "assays": {
        "CAV1": {
          "rna": 0.16906,
          "protein": -0.965386719,
          "rnaSourceValue": 0.16906,
          "rnaStatus": "measured",
          "rnaPercentile": 51.5625,
          "proteinPercentile": 25.0,
          "rankGap": 26.5625
        },
        "SOX2": {
          "rna": 1.6903,
          "protein": 0.009811933,
          "rnaSourceValue": 1.6903,
          "rnaStatus": "measured",
          "rnaPercentile": 71.42857142857143,
          "proteinPercentile": 48.4375,
          "rankGap": 22.99107142857143
        },
        "AXL": {
          "rna": 0.88072,
          "protein": 0.850228959,
          "rnaSourceValue": 0.88072,
          "rnaStatus": "measured",
          "rnaPercentile": 62.5,
          "proteinPercentile": 68.75,
          "rankGap": 6.25
        },
        "TMEM173": {
          "rna": 1.1409,
          "protein": -1.38972925,
          "rnaSourceValue": 1.1409,
          "rnaStatus": "measured",
          "rnaPercentile": 85.9375,
          "proteinPercentile": 14.0625,
          "rankGap": 71.875
        },
        "BRD4": {
          "rna": 0.44013,
          "protein": -0.601743271,
          "rnaSourceValue": 0.44013,
          "rnaStatus": "measured",
          "rnaPercentile": 70.3125,
          "proteinPercentile": 9.375,
          "rankGap": 60.9375
        },
        "CLDN7": {
          "rna": 1.4391,
          "protein": -0.432199038,
          "rnaSourceValue": 1.4391,
          "rnaStatus": "measured",
          "rnaPercentile": 65.07936507936508,
          "proteinPercentile": 4.6875,
          "rankGap": 60.391865079365076
        },
        "GJA1": {
          "rna": 0.37076,
          "protein": -0.289492624,
          "rnaSourceValue": 0.37076,
          "rnaStatus": "measured",
          "rnaPercentile": 60.9375,
          "proteinPercentile": 34.375,
          "rankGap": 26.5625
        },
        "FN1": {
          "rna": 5.8476,
          "protein": 1.95165576,
          "rnaSourceValue": 5.8476,
          "rnaStatus": "measured",
          "rnaPercentile": 92.1875,
          "proteinPercentile": 96.875,
          "rankGap": 4.6875
        }
      },
      "growth": {
        "days": [],
        "endpoints": {
          "final": null,
          "day14": null
        },
        "sourceFinalFlagDays": []
      }
    },
    {
      "id": "JG57",
      "sourceModelId": "JGHL57",
      "pdxNumber": "HN13-6997",
      "hpv": "Negative",
      "experimentalResponse": "not evaluated",
      "assays": {
        "CAV1": {
          "rna": -6.5014,
          "protein": -1.808012665,
          "rnaSourceValue": -6.5014,
          "rnaStatus": "measured",
          "rnaPercentile": 0.0,
          "proteinPercentile": 1.5625,
          "rankGap": 1.5625
        },
        "SOX2": {
          "rna": 4.4453,
          "protein": 3.233052212,
          "rnaSourceValue": 4.4453,
          "rnaStatus": "measured",
          "rnaPercentile": 98.41269841269842,
          "proteinPercentile": 98.4375,
          "rankGap": 0.024801587301581662
        },
        "AXL": {
          "rna": -5.8607,
          "protein": -1.550332027,
          "rnaSourceValue": -5.8607,
          "rnaStatus": "measured",
          "rnaPercentile": 0.0,
          "proteinPercentile": 1.5625,
          "rankGap": 1.5625
        },
        "TMEM173": {
          "rna": -3.8893,
          "protein": -3.726200825,
          "rnaSourceValue": -3.8893,
          "rnaStatus": "measured",
          "rnaPercentile": 1.5625,
          "proteinPercentile": 0.0,
          "rankGap": 1.5625
        },
        "BRD4": {
          "rna": 1.1895,
          "protein": 1.25642344,
          "rnaSourceValue": 1.1895,
          "rnaStatus": "measured",
          "rnaPercentile": 89.0625,
          "proteinPercentile": 90.625,
          "rankGap": 1.5625
        },
        "CLDN7": {
          "rna": 2.7849,
          "protein": 1.991809796,
          "rnaSourceValue": 2.7849,
          "rnaStatus": "measured",
          "rnaPercentile": 87.3015873015873,
          "proteinPercentile": 95.3125,
          "rankGap": 8.010912698412696
        },
        "GJA1": {
          "rna": -8.2171,
          "protein": -3.763338723,
          "rnaSourceValue": -8.2171,
          "rnaStatus": "measured",
          "rnaPercentile": 0.0,
          "proteinPercentile": 0.0,
          "rankGap": 0.0
        },
        "FN1": {
          "rna": -2.4462,
          "protein": -0.862165887,
          "rnaSourceValue": -2.4462,
          "rnaStatus": "measured",
          "rnaPercentile": 28.125,
          "proteinPercentile": 15.625,
          "rankGap": 12.5
        }
      },
      "growth": {
        "days": [],
        "endpoints": {
          "final": null,
          "day14": null
        },
        "sourceFinalFlagDays": []
      }
    },
    {
      "id": "JG58",
      "sourceModelId": "JGHL58",
      "pdxNumber": "HN13-7026",
      "hpv": "Negative",
      "experimentalResponse": "not evaluated",
      "assays": {
        "CAV1": {
          "rna": 0.85579,
          "protein": 0.964581622,
          "rnaSourceValue": 0.85579,
          "rnaStatus": "measured",
          "rnaPercentile": 65.625,
          "proteinPercentile": 85.9375,
          "rankGap": 20.3125
        },
        "SOX2": {
          "rna": 1.5155,
          "protein": 0.918148793,
          "rnaSourceValue": 1.5155,
          "rnaStatus": "measured",
          "rnaPercentile": 69.84126984126983,
          "proteinPercentile": 68.75,
          "rankGap": 1.0912698412698347
        },
        "AXL": {
          "rna": 2.9598,
          "protein": 1.600227223,
          "rnaSourceValue": 2.9598,
          "rnaStatus": "measured",
          "rnaPercentile": 93.75,
          "proteinPercentile": 95.3125,
          "rankGap": 1.5625
        },
        "TMEM173": {
          "rna": 0.23144,
          "protein": 0.124999926,
          "rnaSourceValue": 0.23144,
          "rnaStatus": "measured",
          "rnaPercentile": 57.8125,
          "proteinPercentile": 54.6875,
          "rankGap": 3.125
        },
        "BRD4": {
          "rna": 0.069004,
          "protein": 0.074647357,
          "rnaSourceValue": 0.069004,
          "rnaStatus": "measured",
          "rnaPercentile": 54.6875,
          "proteinPercentile": 51.5625,
          "rankGap": 3.125
        },
        "CLDN7": {
          "rna": -1.9929,
          "protein": -0.716945433,
          "rnaSourceValue": -1.9929,
          "rnaStatus": "measured",
          "rnaPercentile": 23.80952380952381,
          "proteinPercentile": 1.5625,
          "rankGap": 22.24702380952381
        },
        "GJA1": {
          "rna": 1.0238,
          "protein": 1.483849692,
          "rnaSourceValue": 1.0238,
          "rnaStatus": "measured",
          "rnaPercentile": 81.25,
          "proteinPercentile": 93.75,
          "rankGap": 12.5
        },
        "FN1": {
          "rna": 5.1235,
          "protein": 1.005406516,
          "rnaSourceValue": 5.1235,
          "rnaStatus": "measured",
          "rnaPercentile": 89.0625,
          "proteinPercentile": 81.25,
          "rankGap": 7.8125
        }
      },
      "growth": {
        "days": [],
        "endpoints": {
          "final": null,
          "day14": null
        },
        "sourceFinalFlagDays": []
      }
    },
    {
      "id": "JG59",
      "sourceModelId": "JGHL59",
      "pdxNumber": "HN13-7039",
      "hpv": "Negative",
      "experimentalResponse": "not evaluated",
      "assays": {
        "CAV1": {
          "rna": 2.9431,
          "protein": 1.240106485,
          "rnaSourceValue": 2.9431,
          "rnaStatus": "measured",
          "rnaPercentile": 98.4375,
          "proteinPercentile": 96.875,
          "rankGap": 1.5625
        },
        "SOX2": {
          "rna": -1.4811,
          "protein": -0.65842265,
          "rnaSourceValue": -1.4811,
          "rnaStatus": "measured",
          "rnaPercentile": 7.936507936507937,
          "proteinPercentile": 10.9375,
          "rankGap": 3.0009920634920633
        },
        "AXL": {
          "rna": 3.0792,
          "protein": 1.021286315,
          "rnaSourceValue": 3.0792,
          "rnaStatus": "measured",
          "rnaPercentile": 95.3125,
          "proteinPercentile": 81.25,
          "rankGap": 14.0625
        },
        "TMEM173": {
          "rna": -0.56261,
          "protein": -1.420644286,
          "rnaSourceValue": -0.56261,
          "rnaStatus": "measured",
          "rnaPercentile": 29.6875,
          "proteinPercentile": 12.5,
          "rankGap": 17.1875
        },
        "BRD4": {
          "rna": 0.16505,
          "protein": -0.313623483,
          "rnaSourceValue": 0.16505,
          "rnaStatus": "measured",
          "rnaPercentile": 57.8125,
          "proteinPercentile": 20.3125,
          "rankGap": 37.5
        },
        "CLDN7": {
          "rna": -2.0215,
          "protein": -0.73341393,
          "rnaSourceValue": -2.0215,
          "rnaStatus": "measured",
          "rnaPercentile": 19.047619047619047,
          "proteinPercentile": 0.0,
          "rankGap": 19.047619047619047
        },
        "GJA1": {
          "rna": 1.5325,
          "protein": 0.69722002,
          "rnaSourceValue": 1.5325,
          "rnaStatus": "measured",
          "rnaPercentile": 90.625,
          "proteinPercentile": 71.875,
          "rankGap": 18.75
        },
        "FN1": {
          "rna": 6.3535,
          "protein": 1.279152375,
          "rnaSourceValue": 6.3535,
          "rnaStatus": "measured",
          "rnaPercentile": 95.3125,
          "proteinPercentile": 89.0625,
          "rankGap": 6.25
        }
      },
      "growth": {
        "days": [],
        "endpoints": {
          "final": null,
          "day14": null
        },
        "sourceFinalFlagDays": []
      }
    },
    {
      "id": "JG60",
      "sourceModelId": "JGHL60",
      "pdxNumber": "HN168 (HN17-062117)",
      "hpv": "Positive",
      "experimentalResponse": "R",
      "assays": {
        "CAV1": {
          "rna": -1.6181,
          "protein": -1.035152909,
          "rnaSourceValue": -1.6181,
          "rnaStatus": "measured",
          "rnaPercentile": 20.3125,
          "proteinPercentile": 23.4375,
          "rankGap": 3.125
        },
        "SOX2": {
          "rna": 1.4527,
          "protein": 0.994476073,
          "rnaSourceValue": 1.4527,
          "rnaStatus": "measured",
          "rnaPercentile": 66.66666666666667,
          "proteinPercentile": 73.4375,
          "rankGap": 6.770833333333329
        },
        "AXL": {
          "rna": 0.36808,
          "protein": -0.082495923,
          "rnaSourceValue": 0.36808,
          "rnaStatus": "measured",
          "rnaPercentile": 54.6875,
          "proteinPercentile": 43.75,
          "rankGap": 10.9375
        },
        "TMEM173": {
          "rna": 1.0626,
          "protein": 0.318561718,
          "rnaSourceValue": 1.0626,
          "rnaStatus": "measured",
          "rnaPercentile": 82.8125,
          "proteinPercentile": 59.375,
          "rankGap": 23.4375
        },
        "BRD4": {
          "rna": 0.55684,
          "protein": 1.604040523,
          "rnaSourceValue": 0.55684,
          "rnaStatus": "measured",
          "rnaPercentile": 71.875,
          "proteinPercentile": 93.75,
          "rankGap": 21.875
        },
        "CLDN7": {
          "rna": -1.3461,
          "protein": -0.319534697,
          "rnaSourceValue": -1.3461,
          "rnaStatus": "measured",
          "rnaPercentile": 28.571428571428573,
          "proteinPercentile": 14.0625,
          "rankGap": 14.508928571428573
        },
        "GJA1": {
          "rna": -1.093,
          "protein": -1.006854227,
          "rnaSourceValue": -1.093,
          "rnaStatus": "measured",
          "rnaPercentile": 21.875,
          "proteinPercentile": 23.4375,
          "rankGap": 1.5625
        },
        "FN1": {
          "rna": -2.4637,
          "protein": -1.607374403,
          "rnaSourceValue": -2.4637,
          "rnaStatus": "measured",
          "rnaPercentile": 26.5625,
          "proteinPercentile": 0.0,
          "rankGap": 26.5625
        }
      },
      "growth": {
        "days": [
          {
            "day": 1,
            "vehicleMean": 1,
            "vehicleN": 5,
            "vehicleMissingN": 0,
            "vehicleSD": 0.0,
            "vehicleMin": 1,
            "vehicleMax": 1,
            "cetuximabMean": 1,
            "cetuximabN": 5,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.0,
            "cetuximabMin": 1,
            "cetuximabMax": 1,
            "ratio": 1.0
          },
          {
            "day": 3,
            "vehicleMean": 1.796859561,
            "vehicleN": 5,
            "vehicleMissingN": 0,
            "vehicleSD": 0.3062409036001922,
            "vehicleMin": 1.359452946,
            "vehicleMax": 2.134678081,
            "cetuximabMean": 1.417154534,
            "cetuximabN": 5,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.1685723884586697,
            "cetuximabMin": 1.224453975,
            "cetuximabMax": 1.637825552,
            "ratio": 0.7886840823616265
          },
          {
            "day": 6,
            "vehicleMean": 2.5419341794,
            "vehicleN": 5,
            "vehicleMissingN": 0,
            "vehicleSD": 0.4856999674659859,
            "vehicleMin": 2.028046394,
            "vehicleMax": 3.059229634,
            "cetuximabMean": 1.9609618132,
            "cetuximabN": 5,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.12867157987771285,
            "cetuximabMin": 1.793902307,
            "cetuximabMax": 2.141618972,
            "ratio": 0.7714447640272364
          },
          {
            "day": 8,
            "vehicleMean": 3.0747413856,
            "vehicleN": 5,
            "vehicleMissingN": 0,
            "vehicleSD": 0.5561283934942258,
            "vehicleMin": 2.558140843,
            "vehicleMax": 3.898550421,
            "cetuximabMean": 2.2067639918,
            "cetuximabN": 5,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.24310109533877433,
            "cetuximabMin": 1.881894354,
            "cetuximabMax": 2.55600215,
            "ratio": 0.7177071873865501
          },
          {
            "day": 10,
            "vehicleMean": 3.4250896842,
            "vehicleN": 5,
            "vehicleMissingN": 0,
            "vehicleSD": 0.5751768318809192,
            "vehicleMin": 2.933251227,
            "vehicleMax": 4.368537333,
            "cetuximabMean": 2.803441604,
            "cetuximabN": 5,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.26515302073244446,
            "cetuximabMin": 2.348580375,
            "cetuximabMax": 3.005957049,
            "ratio": 0.8185016634549239
          },
          {
            "day": 13,
            "vehicleMean": 4.5274708738000005,
            "vehicleN": 5,
            "vehicleMissingN": 0,
            "vehicleSD": 0.8833191254854059,
            "vehicleMin": 3.595956566,
            "vehicleMax": 5.738064543,
            "cetuximabMean": 3.8863176124,
            "cetuximabN": 5,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.4234263333256531,
            "cetuximabMin": 3.293765412,
            "cetuximabMax": 4.288603684,
            "ratio": 0.8583859997619671
          },
          {
            "day": 15,
            "vehicleMean": 5.4043861432,
            "vehicleN": 5,
            "vehicleMissingN": 0,
            "vehicleSD": 1.0796170886125953,
            "vehicleMin": 4.23193468,
            "vehicleMax": 6.957776791,
            "cetuximabMean": 4.709532697799999,
            "cetuximabN": 5,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.20906671073143904,
            "cetuximabMin": 4.459897709,
            "cetuximabMax": 4.994812923,
            "ratio": 0.87142786858887
          }
        ],
        "endpoints": {
          "final": {
            "day": 15,
            "vehicleMean": 5.4043861432,
            "vehicleN": 5,
            "vehicleMissingN": 0,
            "vehicleSD": 1.0796170886125953,
            "vehicleMin": 4.23193468,
            "vehicleMax": 6.957776791,
            "cetuximabMean": 4.709532697799999,
            "cetuximabN": 5,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.20906671073143904,
            "cetuximabMin": 4.459897709,
            "cetuximabMax": 4.994812923,
            "ratio": 0.87142786858887
          },
          "day14": {
            "day": 13,
            "vehicleMean": 4.5274708738000005,
            "vehicleN": 5,
            "vehicleMissingN": 0,
            "vehicleSD": 0.8833191254854059,
            "vehicleMin": 3.595956566,
            "vehicleMax": 5.738064543,
            "cetuximabMean": 3.8863176124,
            "cetuximabN": 5,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.4234263333256531,
            "cetuximabMin": 3.293765412,
            "cetuximabMax": 4.288603684,
            "ratio": 0.8583859997619671
          }
        },
        "sourceFinalFlagDays": [
          15
        ]
      }
    },
    {
      "id": "JG62",
      "sourceModelId": "JGHL62",
      "pdxNumber": "HN13-7343",
      "hpv": "Negative",
      "experimentalResponse": "not evaluated",
      "assays": {
        "CAV1": {
          "rna": 2.6821,
          "protein": 0.688077512,
          "rnaSourceValue": 2.6821,
          "rnaStatus": "measured",
          "rnaPercentile": 90.625,
          "proteinPercentile": 73.4375,
          "rankGap": 17.1875
        },
        "SOX2": {
          "rna": -1.4095,
          "protein": -0.564676858,
          "rnaSourceValue": -1.4095,
          "rnaStatus": "measured",
          "rnaPercentile": 11.11111111111111,
          "proteinPercentile": 15.625,
          "rankGap": 4.513888888888889
        },
        "AXL": {
          "rna": -0.52287,
          "protein": 0.840419515,
          "rnaSourceValue": -0.52287,
          "rnaStatus": "measured",
          "rnaPercentile": 42.1875,
          "proteinPercentile": 67.1875,
          "rankGap": 25.0
        },
        "TMEM173": {
          "rna": 0.41464,
          "protein": -1.041030924,
          "rnaSourceValue": 0.41464,
          "rnaStatus": "measured",
          "rnaPercentile": 60.9375,
          "proteinPercentile": 15.625,
          "rankGap": 45.3125
        },
        "BRD4": {
          "rna": 0.43931,
          "protein": -0.171659545,
          "rnaSourceValue": 0.43931,
          "rnaStatus": "measured",
          "rnaPercentile": 68.75,
          "proteinPercentile": 32.8125,
          "rankGap": 35.9375
        },
        "CLDN7": {
          "rna": -2.9087,
          "protein": -0.26110512,
          "rnaSourceValue": -2.9087,
          "rnaStatus": "measured",
          "rnaPercentile": 12.698412698412698,
          "proteinPercentile": 21.875,
          "rankGap": 9.176587301587302
        },
        "GJA1": {
          "rna": 0.54369,
          "protein": -0.058596247,
          "rnaSourceValue": 0.54369,
          "rnaStatus": "measured",
          "rnaPercentile": 65.625,
          "proteinPercentile": 43.75,
          "rankGap": 21.875
        },
        "FN1": {
          "rna": -1.8632,
          "protein": 1.86019775,
          "rnaSourceValue": -1.8632,
          "rnaStatus": "measured",
          "rnaPercentile": 37.5,
          "proteinPercentile": 93.75,
          "rankGap": 56.25
        }
      },
      "growth": {
        "days": [],
        "endpoints": {
          "final": null,
          "day14": null
        },
        "sourceFinalFlagDays": []
      }
    },
    {
      "id": "JG63",
      "sourceModelId": "JGHL63",
      "pdxNumber": "HN15-8021",
      "hpv": "Negative",
      "experimentalResponse": "not evaluated",
      "assays": {
        "CAV1": {
          "rna": 1.371,
          "protein": 0.686014542,
          "rnaSourceValue": 1.371,
          "rnaStatus": "measured",
          "rnaPercentile": 81.25,
          "proteinPercentile": 70.3125,
          "rankGap": 10.9375
        },
        "SOX2": {
          "rna": -5.378,
          "protein": -0.940052066,
          "rnaSourceValue": -5.378,
          "rnaStatus": "measured",
          "rnaPercentile": 0.0,
          "proteinPercentile": 1.5625,
          "rankGap": 1.5625
        },
        "AXL": {
          "rna": 1.0151,
          "protein": 0.883828216,
          "rnaSourceValue": 1.0151,
          "rnaStatus": "measured",
          "rnaPercentile": 68.75,
          "proteinPercentile": 70.3125,
          "rankGap": 1.5625
        },
        "TMEM173": {
          "rna": -0.27678,
          "protein": -1.030469718,
          "rnaSourceValue": -0.27678,
          "rnaStatus": "measured",
          "rnaPercentile": 40.625,
          "proteinPercentile": 17.1875,
          "rankGap": 23.4375
        },
        "BRD4": {
          "rna": -0.9547,
          "protein": -0.029292627,
          "rnaSourceValue": -0.9547,
          "rnaStatus": "measured",
          "rnaPercentile": 7.8125,
          "proteinPercentile": 43.75,
          "rankGap": 35.9375
        },
        "CLDN7": {
          "rna": -2.9187,
          "protein": -0.368153455,
          "rnaSourceValue": -2.9187,
          "rnaStatus": "measured",
          "rnaPercentile": 11.11111111111111,
          "proteinPercentile": 7.8125,
          "rankGap": 3.2986111111111107
        },
        "GJA1": {
          "rna": -0.086512,
          "protein": -0.002395045,
          "rnaSourceValue": -0.086512,
          "rnaStatus": "measured",
          "rnaPercentile": 45.3125,
          "proteinPercentile": 46.875,
          "rankGap": 1.5625
        },
        "FN1": {
          "rna": -0.90636,
          "protein": -0.330445605,
          "rnaSourceValue": -0.90636,
          "rnaStatus": "measured",
          "rnaPercentile": 42.1875,
          "proteinPercentile": 26.5625,
          "rankGap": 15.625
        }
      },
      "growth": {
        "days": [],
        "endpoints": {
          "final": null,
          "day14": null
        },
        "sourceFinalFlagDays": []
      }
    },
    {
      "id": "JG64",
      "sourceModelId": "JGHL64",
      "pdxNumber": "HN173",
      "hpv": "Positive",
      "experimentalResponse": "S",
      "assays": {
        "CAV1": {
          "rna": -1.3154,
          "protein": -0.932922114,
          "rnaSourceValue": -1.3154,
          "rnaStatus": "measured",
          "rnaPercentile": 25.0,
          "proteinPercentile": 26.5625,
          "rankGap": 1.5625
        },
        "SOX2": {
          "rna": 2.1903,
          "protein": 0.496550911,
          "rnaSourceValue": 2.1903,
          "rnaStatus": "measured",
          "rnaPercentile": 74.60317460317461,
          "proteinPercentile": 59.375,
          "rankGap": 15.228174603174608
        },
        "AXL": {
          "rna": -0.79226,
          "protein": -0.820826968,
          "rnaSourceValue": -0.79226,
          "rnaStatus": "measured",
          "rnaPercentile": 39.0625,
          "proteinPercentile": 28.125,
          "rankGap": 10.9375
        },
        "TMEM173": {
          "rna": 0.38906,
          "protein": 0.365291204,
          "rnaSourceValue": 0.38906,
          "rnaStatus": "measured",
          "rnaPercentile": 59.375,
          "proteinPercentile": 62.5,
          "rankGap": 3.125
        },
        "BRD4": {
          "rna": -0.72682,
          "protein": -0.286514093,
          "rnaSourceValue": -0.72682,
          "rnaStatus": "measured",
          "rnaPercentile": 17.1875,
          "proteinPercentile": 21.875,
          "rankGap": 4.6875
        },
        "CLDN7": {
          "rna": 2.0813,
          "protein": 0.562433029,
          "rnaSourceValue": 2.0813,
          "rnaStatus": "measured",
          "rnaPercentile": 74.60317460317461,
          "proteinPercentile": 76.5625,
          "rankGap": 1.9593253968253919
        },
        "GJA1": {
          "rna": -0.88622,
          "protein": -1.177076035,
          "rnaSourceValue": -0.88622,
          "rnaStatus": "measured",
          "rnaPercentile": 28.125,
          "proteinPercentile": 21.875,
          "rankGap": 6.25
        },
        "FN1": {
          "rna": -4.5482,
          "protein": -0.159298418,
          "rnaSourceValue": -4.5482,
          "rnaStatus": "measured",
          "rnaPercentile": 6.25,
          "proteinPercentile": 40.625,
          "rankGap": 34.375
        }
      },
      "growth": {
        "days": [
          {
            "day": 1,
            "vehicleMean": 1,
            "vehicleN": 5,
            "vehicleMissingN": 0,
            "vehicleSD": 0.0,
            "vehicleMin": 1,
            "vehicleMax": 1,
            "cetuximabMean": 1,
            "cetuximabN": 5,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.0,
            "cetuximabMin": 1,
            "cetuximabMax": 1,
            "ratio": 1.0
          },
          {
            "day": 3,
            "vehicleMean": 1.2470250512,
            "vehicleN": 5,
            "vehicleMissingN": 0,
            "vehicleSD": 0.09551645811515055,
            "vehicleMin": 1.173840812,
            "vehicleMax": 1.414546117,
            "cetuximabMean": 0.9583010426,
            "cetuximabN": 5,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.10785416026397493,
            "cetuximabMin": 0.83296944,
            "cetuximabMax": 1.08622181,
            "ratio": 0.768469760633787
          },
          {
            "day": 5,
            "vehicleMean": 1.5325224998,
            "vehicleN": 5,
            "vehicleMissingN": 0,
            "vehicleSD": 0.10595622383219835,
            "vehicleMin": 1.369389964,
            "vehicleMax": 1.646999838,
            "cetuximabMean": 0.9035666126,
            "cetuximabN": 5,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.17640554244928597,
            "cetuximabMin": 0.728080319,
            "cetuximabMax": 1.134284809,
            "ratio": 0.5895943535693074
          },
          {
            "day": 8,
            "vehicleMean": 1.7966803226,
            "vehicleN": 5,
            "vehicleMissingN": 0,
            "vehicleSD": 0.22265503917626148,
            "vehicleMin": 1.447606393,
            "vehicleMax": 2.009129332,
            "cetuximabMean": 0.7349537814,
            "cetuximabN": 5,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.07511220299711938,
            "cetuximabMin": 0.68590845,
            "cetuximabMax": 0.864328886,
            "ratio": 0.40906207529252536
          },
          {
            "day": 10,
            "vehicleMean": 2.0707765496,
            "vehicleN": 5,
            "vehicleMissingN": 0,
            "vehicleSD": 0.1645789453728307,
            "vehicleMin": 1.828760998,
            "vehicleMax": 2.281391703,
            "cetuximabMean": 0.5580377702,
            "cetuximabN": 5,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.13446773056592357,
            "cetuximabMin": 0.448658386,
            "cetuximabMax": 0.76177815,
            "ratio": 0.2694823689730275
          },
          {
            "day": 12,
            "vehicleMean": 2.3835875576,
            "vehicleN": 5,
            "vehicleMissingN": 0,
            "vehicleSD": 0.2717728727360149,
            "vehicleMin": 1.914743436,
            "vehicleMax": 2.602013785,
            "cetuximabMean": 0.5154451118,
            "cetuximabN": 5,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.15588820659088262,
            "cetuximabMin": 0.3818318,
            "cetuximabMax": 0.736783809,
            "ratio": 0.21624760968252169
          },
          {
            "day": 15,
            "vehicleMean": 2.7469911936,
            "vehicleN": 5,
            "vehicleMissingN": 0,
            "vehicleSD": 0.3493313962143719,
            "vehicleMin": 2.224995418,
            "vehicleMax": 3.0497309,
            "cetuximabMean": 0.488365825,
            "cetuximabN": 5,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.1594808192296586,
            "cetuximabMin": 0.325007172,
            "cetuximabMax": 0.71114838,
            "ratio": 0.1777820861376641
          },
          {
            "day": 17,
            "vehicleMean": 3.2079796302,
            "vehicleN": 5,
            "vehicleMissingN": 0,
            "vehicleSD": 0.2782703366021435,
            "vehicleMin": 2.759716851,
            "vehicleMax": 3.467518547,
            "cetuximabMean": 0.4631383868,
            "cetuximabN": 5,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.15405083744281003,
            "cetuximabMin": 0.298937293,
            "cetuximabMax": 0.678951003,
            "ratio": 0.1443707380308789
          },
          {
            "day": 19,
            "vehicleMean": 3.5990655179999997,
            "vehicleN": 5,
            "vehicleMissingN": 0,
            "vehicleSD": 0.4031112555766695,
            "vehicleMin": 3.278755221,
            "vehicleMax": 4.27342892,
            "cetuximabMean": 0.40336828539999997,
            "cetuximabN": 5,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.15080876813595984,
            "cetuximabMin": 0.211628864,
            "cetuximabMax": 0.585493655,
            "ratio": 0.11207583840378424
          },
          {
            "day": 22,
            "vehicleMean": 3.9883835104000003,
            "vehicleN": 5,
            "vehicleMissingN": 0,
            "vehicleSD": 0.5735725112570457,
            "vehicleMin": 3.414303652,
            "vehicleMax": 4.742530741,
            "cetuximabMean": 0.353386263,
            "cetuximabN": 5,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.1306449276478556,
            "cetuximabMin": 0.166567212,
            "cetuximabMax": 0.519682214,
            "ratio": 0.08860388226922501
          }
        ],
        "endpoints": {
          "final": {
            "day": 22,
            "vehicleMean": 3.9883835104000003,
            "vehicleN": 5,
            "vehicleMissingN": 0,
            "vehicleSD": 0.5735725112570457,
            "vehicleMin": 3.414303652,
            "vehicleMax": 4.742530741,
            "cetuximabMean": 0.353386263,
            "cetuximabN": 5,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.1306449276478556,
            "cetuximabMin": 0.166567212,
            "cetuximabMax": 0.519682214,
            "ratio": 0.08860388226922501
          },
          "day14": {
            "day": 12,
            "vehicleMean": 2.3835875576,
            "vehicleN": 5,
            "vehicleMissingN": 0,
            "vehicleSD": 0.2717728727360149,
            "vehicleMin": 1.914743436,
            "vehicleMax": 2.602013785,
            "cetuximabMean": 0.5154451118,
            "cetuximabN": 5,
            "cetuximabMissingN": 0,
            "cetuximabSD": 0.15588820659088262,
            "cetuximabMin": 0.3818318,
            "cetuximabMax": 0.736783809,
            "ratio": 0.21624760968252169
          }
        },
        "sourceFinalFlagDays": [
          22
        ]
      }
    },
    {
      "id": "JG65",
      "sourceModelId": "JGHL65",
      "pdxNumber": "HN174 (HN17-071117)",
      "hpv": "Negative",
      "experimentalResponse": "not evaluated",
      "assays": {
        "CAV1": {
          "rna": 1.0301,
          "protein": 0.532370652,
          "rnaSourceValue": 1.0301,
          "rnaStatus": "measured",
          "rnaPercentile": 71.875,
          "proteinPercentile": 67.1875,
          "rankGap": 4.6875
        },
        "SOX2": {
          "rna": -0.6567,
          "protein": -0.514064757,
          "rnaSourceValue": -0.6567,
          "rnaStatus": "measured",
          "rnaPercentile": 23.80952380952381,
          "proteinPercentile": 17.1875,
          "rankGap": 6.62202380952381
        },
        "AXL": {
          "rna": 2.3444,
          "protein": 0.935704435,
          "rnaSourceValue": 2.3444,
          "rnaStatus": "measured",
          "rnaPercentile": 85.9375,
          "proteinPercentile": 73.4375,
          "rankGap": 12.5
        },
        "TMEM173": {
          "rna": 0.86912,
          "protein": -0.952031706,
          "rnaSourceValue": 0.86912,
          "rnaStatus": "measured",
          "rnaPercentile": 73.4375,
          "proteinPercentile": 20.3125,
          "rankGap": 53.125
        },
        "BRD4": {
          "rna": 0.0022071,
          "protein": -0.013783382,
          "rnaSourceValue": 0.0022071,
          "rnaStatus": "measured",
          "rnaPercentile": 50.0,
          "proteinPercentile": 46.875,
          "rankGap": 3.125
        },
        "CLDN7": {
          "rna": 2.8897,
          "protein": 0.534008859,
          "rnaSourceValue": 2.8897,
          "rnaStatus": "measured",
          "rnaPercentile": 92.06349206349206,
          "proteinPercentile": 75.0,
          "rankGap": 17.063492063492063
        },
        "GJA1": {
          "rna": -2.08,
          "protein": -1.680022873,
          "rnaSourceValue": -2.08,
          "rnaStatus": "measured",
          "rnaPercentile": 14.0625,
          "proteinPercentile": 12.5,
          "rankGap": 1.5625
        },
        "FN1": {
          "rna": -0.084277,
          "protein": -0.065280762,
          "rnaSourceValue": -0.084277,
          "rnaStatus": "measured",
          "rnaPercentile": 46.875,
          "proteinPercentile": 45.3125,
          "rankGap": 1.5625
        }
      },
      "growth": {
        "days": [],
        "endpoints": {
          "final": null,
          "day14": null
        },
        "sourceFinalFlagDays": []
      }
    },
    {
      "id": "JG66",
      "sourceModelId": "JGHL66",
      "pdxNumber": "HN142",
      "hpv": "Positive",
      "experimentalResponse": "not evaluated",
      "assays": {
        "CAV1": {
          "rna": -2.7027,
          "protein": -1.301653044,
          "rnaSourceValue": -2.7027,
          "rnaStatus": "measured",
          "rnaPercentile": 7.8125,
          "proteinPercentile": 12.5,
          "rankGap": 4.6875
        },
        "SOX2": {
          "rna": 1.9074,
          "protein": 1.254005426,
          "rnaSourceValue": 1.9074,
          "rnaStatus": "measured",
          "rnaPercentile": 73.01587301587301,
          "proteinPercentile": 76.5625,
          "rankGap": 3.5466269841269877
        },
        "AXL": {
          "rna": -5.3302,
          "protein": -1.787567146,
          "rnaSourceValue": -5.3302,
          "rnaStatus": "measured",
          "rnaPercentile": 1.5625,
          "proteinPercentile": 0.0,
          "rankGap": 1.5625
        },
        "TMEM173": {
          "rna": 0.77727,
          "protein": 0.928917146,
          "rnaSourceValue": 0.77727,
          "rnaStatus": "measured",
          "rnaPercentile": 67.1875,
          "proteinPercentile": 71.875,
          "rankGap": 4.6875
        },
        "BRD4": {
          "rna": 0.6648,
          "protein": 0.731433678,
          "rnaSourceValue": 0.6648,
          "rnaStatus": "measured",
          "rnaPercentile": 76.5625,
          "proteinPercentile": 76.5625,
          "rankGap": 0.0
        },
        "CLDN7": {
          "rna": 3.6444,
          "protein": 2.283616952,
          "rnaSourceValue": 3.6444,
          "rnaStatus": "measured",
          "rnaPercentile": 98.41269841269842,
          "proteinPercentile": 96.875,
          "rankGap": 1.5376984126984183
        },
        "GJA1": {
          "rna": -0.86787,
          "protein": -0.437937951,
          "rnaSourceValue": -0.86787,
          "rnaStatus": "measured",
          "rnaPercentile": 29.6875,
          "proteinPercentile": 31.25,
          "rankGap": 1.5625
        },
        "FN1": {
          "rna": -7.2363,
          "protein": -1.38342462,
          "rnaSourceValue": -7.2363,
          "rnaStatus": "measured",
          "rnaPercentile": 0.0,
          "proteinPercentile": 3.125,
          "rankGap": 3.125
        }
      },
      "growth": {
        "days": [],
        "endpoints": {
          "final": null,
          "day14": null
        },
        "sourceFinalFlagDays": []
      }
    }
  ],
  "qa": {
    "joinedModelCount": 65,
    "modelJoinExact": true,
    "rppaFeatures": 247,
    "rnaGeneRows": 19154,
    "markerModelSlots": 520,
    "completeMarkerPairs": 518,
    "missingRna": [
      {
        "model": "JG2",
        "gene": "SOX2",
        "sourceValue": "#NAME?"
      },
      {
        "model": "JG14",
        "gene": "CLDN7",
        "sourceValue": "#NAME?"
      }
    ],
    "growthRows": 748,
    "finiteGrowthRows": 746,
    "growthModels": 17,
    "growthMissing": [
      {
        "sourceRow": 96,
        "pdxNumber": "HN12-6744",
        "day": 15,
        "treatment": "Vehicle"
      },
      {
        "sourceRow": 97,
        "pdxNumber": "HN12-6744",
        "day": 20,
        "treatment": "Vehicle"
      }
    ],
    "publishedExperimentalResponseCounts": {
      "S": 12,
      "not evaluated": 48,
      "R": 5
    },
    "clinicalHpvCounts": {
      "Negative": 50,
      "Positive": 15
    },
    "sourceFinalFlagDays": [
      13,
      15,
      20,
      22,
      26
    ],
    "sourceFinalDayFlagAgreement": true,
    "finalLabelMismatchesAtHalfRatio": [],
    "endpointThresholdCrossingModelsAtHalfRatio": [],
    "defaultCav1QueueAt30": [
      "JG11",
      "JG16",
      "JG48",
      "JG35",
      "JG29",
      "JG49"
    ],
    "note": "Counts refer to source records or model-level pairs, not independently identified animals."
  }
};
