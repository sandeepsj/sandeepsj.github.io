window.hyperpay_configuration_version = '2.4';
if (window.JOS && typeof window.JOS.registerVersion == 'function') {
	 window.JOS.registerVersion(window.JOS.self)('configuration')(window.hyperpay_configuration_version)(); 
}
    let fontName = "HelveticaNeue";
    let fonts = [
  {
    "name": "HelveticaNeue",
    "url": "https://assets.juspay.in/hyper/bundles/in.juspay.merchants/fonts/HelveticaNeue/HelveticaNeue-Regular.ttf",
    "weight": 400
  },
  {
    "name": "HelveticaNeue",
    "url": "https://assets.juspay.in/hyper/bundles/in.juspay.merchants/fonts/HelveticaNeue/HelveticaNeue-SemiBold.ttf",
    "weight": 500
  },
  {
    "name": "HelveticaNeue",
    "url": "https://assets.juspay.in/hyper/bundles/in.juspay.merchants/fonts/HelveticaNeue/HelveticaNeue-Bold.ttf",
    "weight": 700
  }
];

    if(window.JBridge && typeof window.JBridge.loadFonts === 'function') {
    window.JBridge.loadFonts(fonts);
    }

    window.getMerchantConfig = function () {
      var configuration = {
  "context": [
    ""
  ],
  "componentMapping": {
    "NBScreen.PrimaryButton": "nbPrimaryButton",
    "PaymentPage.Expanded.LinkedWallet.ListItem": "linkedWalletListItem",
    "PaymentPage.Expanded.UnlinkedWallet.ListItem": "unlinkedWalletListItem",
    "UPIScreen.SavedVPA.ListItem": "savedVPAListItem",
    "PaymentPageScreen.AmountBar": "ppAmountBar",
    "PaymentPageScreen.Toolbar": "ppToolbar",
    "NBScreen.OtherBanks.SecondaryButton": "nbOtherBanksSecondaryButton",
    "UPIScreen.OtherUPI.SecondaryButton": "upiOtherOptionsSecondaryButton",
    "PaymentPage.SavedCard.ListItem": "ppSavedCardListItem",
    "NBScreen.OtherBanks.ListItem": "nbScreenOtherBanksListItem",
    "UPIScreen.UPIApp.ListItem": "upiAppListItem",
    "WebWrapper.PaymentHeader.Toolbar": "webPaymentHeaderToolbar",
    "WebWrapper.Back.Toolbar": "webBackToolBar",
    "COD.ScreenConfig": "codScreen",
    "PaymentPageScreen.CashOD.ListItem": "unlinkedWalletListItem"
  },
  "mainConfig": {
    "codScreen": {
      "#override": [
        "screenConfig",
        {
          "sectionHeader.text": "Pay On Delivery"
        }
      ]
    },
    "masterConfig": {
      "themes": {
        "TypoGraphy": {
          "fontFamily": "HelveticaNeue"
        }
      }
    },
    "upiOtherOptionsSecondaryButton": {
      "#override": [
        "defaultSecondaryButton",
        {
          "text.text": "Other UPI Options",
          "text.padding": [
            16,
            12,
            0,
            12
          ],
          "width": 140,
          "text.color": "#981a4d"
        }
      ]
    },
    "nbOtherBanksSecondaryButton": {
      "#override": [
        "defaultSecondaryButton",
        {
          "text.text": "Other Banks",
          "text.padding": [
            16,
            12,
            0,
            12
          ],
          "width": 100,
          "text.color": "#981a4d"
        }
      ]
    },
    "webBackToolBar": {
      "#override": [
        "webPaymentHeaderToolbar",
        {
          "background": "#ffffff",
          "height": 60,
          "padding": [
            12,
            0,
            0,
            0
          ],
          "textSize": {
            "#js-expr": [
              "rc('globalConfig.fontSize')"
            ]
          },
          "leftIcon.visibility": "Visible",
          "visibility": "VISIBLE"
        }
      ]
    },
    "webPaymentHeaderToolbar": {
      "#override": [
        "defaultToolbar",
        {
          "background": "#f3f3f3",
          "textSize": {
            "#js-expr": [
              "rc('globalConfig.fontSize') + 4"
            ]
          },
          "leftIcon.visibility": "GONE",
          "text": "Payment Methods",
          "height": 120,
          "padding": [
            0,
            60,
            0,
            0
          ],
          "visibility": {
            "#js-expr": [
              "(window.__OS.toLowerCase() === \"web\") ? (window.__payload?.integrationType?.toLowerCase() === \"iframe\") ? \"GONE\" : \"VISIBLE\" : \"VISIBLE\""
            ]
          }
        }
      ]
    },
    "ppToolbar": {
      "#override": [
        "defaultToolbar",
        {
          "visibility": {
            "#js-expr": [
              "(window.__OS.toLowerCase() === \"web\") ? (window.__payload?.integrationType?.toLowerCase() === \"iframe\") ? \"GONE\" : \"VISIBLE\" : \"VISIBLE\""
            ]
          }
        }
      ]
    },
    "ppAmountBar": {
      "#override": [
        "defaultAmountBar",
        {
          "visibility": {
            "#js-expr": [
              "(window.__OS.toLowerCase() === \"web\") ? (window.__payload?.integrationType?.toLowerCase() === \"iframe\") ? \"GONE\" : \"VISIBLE\" : \"VISIBLE\""
            ]
          }
        }
      ]
    },
    "unlinkedWalletListItem": {
      "#override": [
        "defaultListItem",
        {
          "topView.padding": [
            16,
            16,
            16,
            16
          ],
          "bottomView.button.height": "42",
          "bottomView.button.width": {
            "#if": [
              {
                "#js-expr": [
                  "window.isDesktopView()"
                ]
              },
              275,
              "match_parent"
            ]
          },
          "bottomView.editText.visibility": "GONE"
        }
      ]
    },
    "upiAppListItem": {
      "#override": [
        "defaultListItem",
        {
          "topView.rightImage.visibility": "visible",
          "topView.rightImage.usePackageIcon": false,
          "topView.isClickable": true,
          "bottomView.bottomDefaultExpand": false,
          "bottomView.editText.visibility": "gone",
          "bottomView.fifthLine.visibility": "gone",
          "divider.visibility": "gone"
        }
      ]
    },
    "nbScreenOtherBanksListItem": {
      "#override": [
        "defaultListItem",
        {
          "bottomView.editText.visibility": "gone",
          "bottomView.button.width": "match_parent"
        }
      ]
    },
    "ppSavedCardListItem": {
      "#override": [
        "defaultListItem",
        {
          "topView.padding": [
            16,
            16,
            16,
            16
          ],
          "topView.secondLine.visibility": "visible",
          "topView.secondLine.text.visibility": "visible",
          "bottomView.editTextWeight": {
            "#if": [
              {
                "#js-expr": [
                  "window.isDesktopView()"
                ]
              },
              0.15,
              0.25
            ]
          },
          "bottomView.buttonWeight": {
            "#if": [
              {
                "#js-expr": [
                  "window.isDesktopView()"
                ]
              },
              0.85,
              0.75
            ]
          },
          "bottomView.button.margin": {
            "#js-expr": [
              "if (window.isDesktopView()) {\n                [20, 0, 0, 0]\n              } else {\n                [16, 0, 0, 0]\n              }"
            ]
          },
          "bottomView.editText.hint.text": {
            "#if": [
              {
                "#js-expr": [
                  "window.isDesktopView()"
                ]
              },
              "C V V",
              "●●●"
            ]
          },
          "bottomView.button.width": {
            "#if": [
              {
                "#js-expr": [
                  "window.isDesktopView()"
                ]
              },
              250,
              "match_parent"
            ]
          },
          "bottomView.button.height": "42",
          "bottomView.editText.input.height": "42",
          "bottomView.editText.input.padding": [
            5,
            0,
            5,
            0
          ],
          "bottomView.editText.focus": true,
          "bottomView.editText.stroke": {
            "#js-expr": [
              "var color = rc('globalConfig.primaryColor');\n          \"1,\" + color"
            ]
          },
          "bottomView.editText.input.letterSpacing": 1,
          "bottomView.editText.input.textSize": {
            "#ref": [
              "globalConfig.fontSizeVeryLarge"
            ]
          },
          "bottomView.editText.input.inpType": "NumericPassword",
          "bottomView.editText.icon.visibility": "GONE",
          "bottomView.fifthLine.visibility": "gone"
        }
      ]
    },
    "savedVPAListItem": {
      "#override": [
        "defaultListItem",
        {
          "topView.firstLine.textTwo.visibility": "gone",
          "topView.secondLine.visibility": "visible",
          "topView.secondLine.text.visibility": "visible",
          "bottomView.editText.visibility": "gone",
          "bottomView.button.width": {
            "#if": [
              {
                "#js-expr": [
                  "window.isDesktopView()"
                ]
              },
              275,
              "match_parent"
            ]
          }
        }
      ]
    },
    "linkedWalletListItem": {
      "#override": [
        "defaultListItem",
        {
          "topView.padding": [
            16,
            16,
            16,
            16
          ],
          "bottomView.button.height": "42"
        }
      ]
    },
    "nbPrimaryButton": {
      "#override": [
        "defaultPrimaryButton",
        {
          "margin": {
            "#js-expr": [
              "if (window.isDesktopView()) {\n        [24, 0, 24,10]\n      } else {\n        var hSpace = rc('screenConfig.containerAttribs.horizontalSpacing');\n        [hSpace, 8, hSpace, 8]\n       }"
            ]
          }
        }
      ]
    },
    "globalConfig": {
      "primaryColor": "#95E8BE",
      "secondaryColor": "#D6D6D6",
      "textPrimaryColor": "#121212",
      "textSecondaryColor": "#999999",
      "textTertiaryColor": "#999999",
      "dividerColor": "#e9e9e9",
      "hintColor": "#999999",
      "checkboxFontColor": "#6B6B6B",
      "primaryFont": {
        "type": "FontName",
        "value": "HelveticaNeue-Regular"
      },
      "checkboxFont": {
        "type": "FontName",
        "value": "HelveticaNeue-Regular"
      },
      "fontBold": {
        "type": "FontName",
        "value": "HelveticaNeue-Bold"
      },
      "fontSemiBold": {
        "type": "FontName",
        "value": "HelveticaNeue-SemiBold"
      },
      "fontRegular": {
        "type": "FontName",
        "value": "HelveticaNeue-Regular"
      },
      "checkboxSize": 16
    },
    "amountBarValues": {
      "#js-expr": [
        " let keys = [\"Plans\"];\n            let values = [\" \"];\n            let obj = {};\n            if (window.__payload.description) {\n            if (typeof window.__payload.description === \"string\") {\n              values[0] = window.__payload.description;\n            } else if (typeof window.__payload.description === \"object\") {\n              let i = 0;\n              for (let [_key, _value] of Object.entries(window.__payload.description)) {\n                keys[i] = _key || \" \";\n                values[i] = _value || \" \";\n                i++;\n              }\n            }\n          }\n          obj[\"keys\"] = keys;\n          obj[\"values\"] = values;\n          obj;\n          "
      ]
    },
    "cardNumberConfig": {
      "#override": [
        "defaultEditText",
        {
          "input.separator": {
            "#js-expr": [
              "' '"
            ]
          },
          "input.separatorRepeat": "4",
          "input.inpType": "numeric",
          "input.pattern": "^([0-9]| )+$,24",
          "icon.width": 40,
          "icon.height": 40
        }
      ]
    },
    "cvvConfig": {
      "#override": [
        "defaultEditText",
        {
          "input.inpType": "NumericPassword",
          "input.pattern": "^[0-9]+$,3",
          "visibility": "VISIBLE",
          "icon.visibility": "visible",
          "icon.width": {
            "#ref": [
              "globalConfig.checkboxSize"
            ]
          },
          "icon.height": {
            "#ref": [
              "globalConfig.checkboxSize"
            ]
          }
        }
      ]
    },
    "expiryDateConfig": {
      "#override": [
        "defaultEditText",
        {
          "hint.text": "MM / YY",
          "input.separator": "/",
          "input.separatorRepeat": "2",
          "input.inpType": "Numeric",
          "input.pattern": "^([0-9]|\\/)+$,5",
          "visibility": "VISIBLE",
          "icon.textVisibility": "gone",
          "icon.visibility": "visible",
          "input.width": "wrap_content",
          "error.textFont": {
            "#ref": [
              "globalConfig.fontSemiBold"
            ]
          }
        }
      ]
    },
    "flowConfig": {
      "showSavedVPAs": false,
      "upiQREnable": true,
      "popularBanks": [
        "NB_SBI",
        "NB_HDFC",
        "NB_ICICI",
        "NB_AXIS"
      ],
      "paymentOptions": [
        {
          "group": "others",
          "onlyDisable": [
            "SHAREit",
            "WhatsApp"
          ],
          "po": "upi",
          "visibility": "GONE"
        },
        {
          "group": "others",
          "onlyDisable": [
            "SHAREit",
            "WhatsApp"
          ],
          "po": "upiAppsWithOther",
          "visibility": "VISIBLE"
        },
        {
          "group": "others",
          "po": "googlepay",
          "onlyDisable": [],
          "visibility": "GONE"
        },
        {
          "group": "others",
          "onlyDisable": [],
          "po": "cards",
          "visibility": "VISIBLE"
        },
        {
          "group": "others",
          "po": "wallets",
          "onlyDisable": [
            "GOOGLEPAY",
            "CRED"
          ],
          "visibility": "VISIBLE"
        },
        {
          "group": "others",
          "onlyDisable": [],
          "po": "cashod",
          "visibility": "GONE"
        },
        {
          "group": "others",
          "onlyDisable": [],
          "po": "foodCards",
          "visibility": "VISIBLE"
        },
        {
          "group": "others",
          "onlyDisable": [
            "NB_DUMMY",
            "NB_SBM",
            "NB_SBT"
          ],
          "po": "nb",
          "visibility": "VISIBLE"
        },
        {
          "group": "others",
          "onlyDisable": [],
          "po": "emi",
          "visibility": "GONE"
        },
        {
          "group": "others",
          "po": "inApps",
          "onlyDisable": [],
          "visibility": "GONE"
        },
        {
          "group": "others",
          "onlyDisable": [],
          "po": "payLater",
          "visibility": "VISIBLE"
        }
      ],
      "sideBarTabs": {
        "#if": [
          "window.__payload.action !== 'paymentManagement'",
          {
            "#ref": [
              "flowConfig.sideBarTabsRef"
            ]
          },
          {
            "#js-expr": [
              "rc('flowConfig.sideBarTabsRef').includes('MANAGE') ? ['MANAGE']:[]"
            ]
          }
        ]
      },
      "firstLoadSideBarTab": {
        "#js-expr": [
          "rc('flowConfig.sideBarTabsRef')[0]"
        ]
      },
      "flows": {
        "directOTP": "false",
        "hideIneligiblePayLater": false,
        "useSilentMandateEnforcement": "false",
        "enforceSaveCard": false
      },
      "payeeName": "Juspay",
      "mandateAndDOTPSupport": false,
      "drawFromStatusBar": false,
      "verifyVpa": true,
      "offers": {
        "isEnabled": true,
        "isInstantDiscount": true
      },
      "sideBarTabsRef": [
        "CARD",
        "NET_BANKING",
        "UPI",
        "PAY_LATER",
        "FOOD_CARD"
      ]
    },
    "screenConfig": {
      "bgPrimaryColor": {
        "#js-expr": [
          "window.isDesktopView() ? \"#f3f3f3\" : \"#fcfcfc\""
        ]
      },
      "bgSecondaryColor": "#FDFDFD",
      "containerAttribs": {
        "horizontalSpacing": {
          "#js-expr": [
            "window.isDesktopView() ? 8: 16"
          ]
        },
        "verticalSpacing": 0
      },
      "uiCard": {
        "cornerRadius": 10,
        "horizontalPadding": 16,
        "verticalPadding": 24,
        "color": "#ffffff",
        "addStrokeToForm": true
      },
      "button": {
        "background": {
          "#ref": [
            "screenConfig.bgPrimaryColor"
          ]
        },
        "maxWidth": {
          "#js-expr": [
            "(window.__OS.toLowerCase() === \"web\") && window.isDesktopView() ? 223 : \"match_parent\""
          ]
        }
      },
      "sectionHeader": {
        "font": {
          "#js-expr": [
            "if (window.isDesktopView()) {\n        rc('globalConfig.fontSemiBold')\n      } else {\n        rc('globalConfig.fontRegular')\n      }"
          ]
        },
        "textSize": 16,
        "margin": {
          "#js-expr": [
            " if (window.isDesktopView()) {\n                  [0, 24, 0, 0]\n                } else {\n                  var uiPadding = rc('screenConfig.uiCard.horizontalPadding');\n                  var hSpace = rc('screenConfig.containerAttribs.horizontalSpacing');\n                  var bottomMargin = rc('screenConfig.sectionHeader.bottomMargin');\n                  var tM = (rc('screenConfig.uiCard.translation') == 0.0) ? 0 : 4\n                  if (hSpace == 0){\n                    [uiPadding, 0, uiPadding, bottomMargin]\n                  }\n                  else {\n                    [tM, 0, 0, bottomMargin]\n                  }\n                }\n              "
          ]
        },
        "padding": {
          "#if": [
            {
              "#js-expr": [
                "window.isDesktopView()"
              ]
            },
            [
              22,
              0,
              18,
              15
            ],
            [
              0,
              0,
              0,
              0
            ]
          ]
        },
        "dividerHeight": 1,
        "dividerColor": {
          "#ref": [
            "globalConfig.dividerColor"
          ]
        },
        "dividerVisibility": {
          "#if": [
            {
              "#js-expr": [
                "window.isDesktopView()"
              ]
            },
            "VISIBLE",
            "GONE"
          ]
        },
        "color": "#121212",
        "alpha": 0.6,
        "background": "transparent"
      },
      "sideBar": {
        "maxWidth": 250,
        "icon": {
          "notSelectedColor": "#323640"
        },
        "navbarItem": {
          "fontColor": "#323640",
          "selectedFontColor": "#323640",
          "selectedFont": {
            "#ref": [
              "globalConfig.fontBold"
            ]
          },
          "selectedStroke": {
            "#js-expr": [
              "\"6,\" + rc('globalConfig.primaryColor') + \",l\""
            ]
          },
          "fontSize": {
            "#ref": [
              "globalConfig.fontSize"
            ]
          }
        }
      },
      "expand": {
        "popularNBView": true,
        "cod": true
      },
      "nb": {
        "useV2": {
          "#js-expr": [
            "window.isDesktopView()"
          ]
        },
        "popularBanksBanksHeader": {
          "#if": [
            {
              "#js-expr": [
                "window.isDesktopView()"
              ]
            },
            false,
            true
          ]
        },
        "gridViewPadding": [
          0,
          8,
          8,
          8
        ],
        "addMargin": false,
        "showPopular": true
      },
      "upi": {
        "showAddUpiHeader": true
      }
    },
    "defaultListItem": {
      "topView": {
        "firstLine": {
          "textOne": {
            "font": {
              "#ref": [
                "globalConfig.fontRegular"
              ]
            },
            "margin": [
              12,
              0,
              0,
              0
            ]
          }
        },
        "secondLine": {
          "text": {
            "color": {
              "#ref": [
                "globalConfig.textSecondaryColor"
              ]
            },
            "size": {
              "#ref": [
                "globalConfig.fontSizeSmall"
              ]
            },
            "margin": [
              12,
              0,
              0,
              0
            ]
          }
        },
        "leftImage": {
          "margin": [
            0,
            0,
            8,
            0
          ],
          "padding": {
            "#if": [
              {
                "#js-expr": [
                  "window.isDesktopView()"
                ]
              },
              [
                5,
                5,
                5,
                5
              ],
              [
                0,
                0,
                0,
                0
              ]
            ]
          }
        },
        "selectionLabel": {
          "size": {
            "#if": [
              {
                "#js-expr": [
                  "window.isDesktopView()"
                ]
              },
              {
                "#ref": [
                  "globalConfig.fontSize"
                ]
              },
              {
                "#ref": [
                  "globalConfig.fontSizeSmall"
                ]
              }
            ]
          },
          "color": {
            "#ref": [
              "globalConfig.primaryColor"
            ]
          },
          "font": {
            "#ref": [
              "globalConfig.fontSemiBold"
            ]
          },
          "background": {
            "#ref": [
              "screenConfig.uiCard.color"
            ]
          },
          "cornerRadius": 0,
          "stroke": "0,#ffffff"
        },
        "height": 56
      },
      "bottomView": {
        "editText": {
          "#override": [
            "defaultEditText",
            {
              "input.height": 48,
              "focus": false,
              "visibility": "GONE"
            }
          ]
        },
        "button": {
          "#override": [
            "defaultPrimaryButton",
            {
              "margin": [
                0,
                0,
                0,
                0
              ],
              "height": 48,
              "width": "match_parent"
            }
          ]
        },
        "margin": {
          "#js-expr": [
            "var imageSize = rc('defaultListItem.topView.leftImage.size');\n      var pX = rc('screenConfig.uiCard.horizontalPadding') - 8;\n      if (window.isDesktopView()) pX = 24;\n      var space = pX + imageSize;\n      [space, 0, pX, 0]"
          ]
        },
        "padding": {
          "#if": [
            {
              "#js-expr": [
                "window.isDesktopView()"
              ]
            },
            [
              12,
              0,
              0,
              16
            ],
            [
              28,
              0,
              8,
              16
            ]
          ]
        }
      }
    },
    "ppSavedVPAListItem": {
      "#override": [
        "defaultListItem",
        {
          "topView.padding": [
            16,
            16,
            16,
            16
          ],
          "bottomView.button.height": "42",
          "topView.secondLine.text.visibility": "VISIBLE",
          "topView.secondLine.visibility": "VISIBLE",
          "bottomView.editText.visibility": "GONE"
        }
      ]
    },
    "defaultToolbar": {
      "text": "Payment Methods",
      "textColor": {
        "#if": [
          {
            "#js-expr": [
              "window.isDesktopView()"
            ]
          },
          {
            "#ref": [
              "globalConfig.textPrimaryColor"
            ]
          },
          "#1c3a30"
        ]
      },
      "textSize": 18,
      "imageUrl": {
        "#js-expr": [
          "(window.getIcons && JSON.parse(window.getIcons()).toolbarBackArrow) ? JSON.parse(window.getIcons()).toolbarBackArrow : 'toolbar_back_arrow'"
        ]
      },
      "contentMargin": {
        "#js-expr": [
          "var uiPadding = rc('screenConfig.uiCard.horizontalPadding');\n                  var topMargin = rc('flowConfig.drawFromStatusBar') ? window.getStatusBarHeight() : 0;\n                  [uiPadding, topMargin, uiPadding, 0]"
        ]
      },
      "leftIcon": {
        "url": {
          "#js-expr": [
            "(window.getIcons && JSON.parse(window.getIcons()).toolbarBackArrow) ? JSON.parse(window.getIcons()).toolbarBackArrow : 'toolbar_back_arrow'"
          ]
        }
      }
    },
    "defaultAmountBar": {
      "padding": [
        0,
        8,
        0,
        0
      ],
      "rightSection": {
        "visibility": "GONE"
      },
      "lineItems": [
        {
          "leftText": {
            "text": {
              "#js-expr": [
                "var obj = rc('amountBarValues');\n obj.keys[0];"
              ]
            },
            "font": {
              "#ref": [
                "globalConfig.fontSemiBold"
              ]
            },
            "size": {
              "#ref": [
                "globalConfig.fontSizeVerySmall"
              ]
            },
            "color": {
              "#ref": [
                "globalConfig.textSecondaryColor"
              ]
            },
            "stroke": "",
            "minWidth": "MATCH_PARENT",
            "padding": [
              16,
              0,
              0,
              2
            ],
            "gravity": "center",
            "useTextFromHtml": false
          },
          "rightText": {
            "text": "Amount",
            "font": {
              "#ref": [
                "globalConfig.fontSemiBold"
              ]
            },
            "size": {
              "#ref": [
                "globalConfig.fontSizeVerySmall"
              ]
            },
            "color": {
              "#ref": [
                "globalConfig.textSecondaryColor"
              ]
            },
            "stroke": "",
            "minWidth": "MATCH_PARENT",
            "padding": [
              0,
              0,
              16,
              2
            ],
            "gravity": "center",
            "useTextFromHtml": false
          },
          "padding": [
            0,
            0,
            0,
            0
          ]
        },
        {
          "leftText": {
            "text": {
              "#js-expr": [
                "var obj = rc('amountBarValues');\n obj.values[0];"
              ]
            },
            "font": {
              "#ref": [
                "globalConfig.fontSemiBold"
              ]
            },
            "size": {
              "#ref": [
                "globalConfig.fontSize"
              ]
            },
            "color": {
              "#ref": [
                "globalConfig.textPrimaryColor"
              ]
            },
            "stroke": "",
            "minWidth": "MATCH_PARENT",
            "padding": [
              16,
              0,
              0,
              8
            ],
            "gravity": "center",
            "useTextFromHtml": false
          },
          "centerText": {
            "text": "",
            "font": {
              "#ref": [
                "globalConfig.fontBold"
              ]
            },
            "size": {
              "#ref": [
                "globalConfig.fontSize"
              ]
            },
            "color": {
              "#ref": [
                "screenConfig.bgPrimaryColor"
              ]
            },
            "stroke": "",
            "minWidth": "MATCH_PARENT",
            "padding": [
              0,
              0,
              0,
              0
            ],
            "gravity": "center",
            "useTextFromHtml": false
          },
          "rightText": {
            "text": "<amount>",
            "font": {
              "#ref": [
                "globalConfig.fontSemiBold"
              ]
            },
            "size": {
              "#ref": [
                "globalConfig.fontSize"
              ]
            },
            "color": {
              "#ref": [
                "globalConfig.textPrimaryColor"
              ]
            },
            "stroke": "",
            "minWidth": "MATCH_PARENT",
            "padding": [
              0,
              0,
              16,
              8
            ],
            "gravity": "center",
            "useTextFromHtml": false
          },
          "padding": [
            0,
            0,
            0,
            0
          ]
        }
      ],
      "translation": 4,
      "background": "#FFFFFF",
      "visibility": "GONE",
      "dividerColor": "#80CCCCCC",
      "dividerVisibility": "VISIBLE"
    },
    "defaultWebAmountBar": {
      "padding": [
        0,
        20,
        0,
        20
      ],
      "percentWidth": true,
      "width": 80,
      "height": 85,
      "leftSection": {
        "size": 24,
        "font": {
          "#ref": [
            "globalConfig.fontRegular"
          ]
        },
        "color": "#363636",
        "margin": [
          0,
          0,
          120,
          0
        ]
      },
      "lineItems": [
        {
          "leftText": {
            "text": {
              "#js-expr": [
                "var obj = rc('amountBarValues');\n obj.keys[0];"
              ]
            },
            "font": {
              "#ref": [
                "globalConfig.fontRegular"
              ]
            },
            "size": {
              "#ref": [
                "globalConfig.fontSizeSmall"
              ]
            },
            "color": {
              "#ref": [
                "globalConfig.textSecondaryColor"
              ]
            },
            "stroke": "1,#EBEBEB,r",
            "minWidth": 200,
            "padding": [
              0,
              0,
              0,
              0
            ],
            "gravity": "left",
            "useTextFromHtml": false
          },
          "centerText": {
            "text": "Amount",
            "font": {
              "#ref": [
                "globalConfig.fontRegular"
              ]
            },
            "size": {
              "#ref": [
                "globalConfig.fontSizeSmall"
              ]
            },
            "color": {
              "#ref": [
                "globalConfig.textSecondaryColor"
              ]
            },
            "stroke": "",
            "minWidth": 200,
            "padding": [
              95,
              0,
              0,
              0
            ],
            "gravity": "left",
            "useTextFromHtml": false
          }
        },
        {
          "leftText": {
            "text": {
              "#js-expr": [
                "var obj = rc('amountBarValues');\n obj.values[0];"
              ]
            },
            "font": {
              "#ref": [
                "globalConfig.fontSemiBold"
              ]
            },
            "size": {
              "#ref": [
                "globalConfig.fontSizeVeryLarge"
              ]
            },
            "color": {
              "#ref": [
                "globalConfig.textPrimaryColor"
              ]
            },
            "stroke": "1,#EBEBEB,r",
            "minWidth": 200,
            "padding": [
              0,
              5,
              0,
              0
            ],
            "gravity": "left",
            "useTextFromHtml": false
          },
          "centerText": {
            "text": "<amount>",
            "font": {
              "#ref": [
                "globalConfig.fontRegular"
              ]
            },
            "size": {
              "#ref": [
                "globalConfig.fontSizeVeryLarge"
              ]
            },
            "color": {
              "#ref": [
                "globalConfig.textPrimaryColor"
              ]
            },
            "stroke": "0,#EBEBEB,r",
            "minWidth": 200,
            "padding": [
              95,
              5,
              0,
              0
            ],
            "gravity": "left",
            "useTextFromHtml": false
          }
        }
      ],
      "translation": 3,
      "visibility": {
        "#js-expr": [
          "(window.__OS.toLowerCase() === \"web\") ? (window.__payload?.integrationType?.toLowerCase() === \"iframe\") ? \"GONE\" : \"VISIBLE\" : \"VISIBLE\""
        ]
      }
    },
    "defaultPrimaryButton": {
      "height": 48,
      "text": {
        "text": "Proceed to Pay",
        "font": {
          "#ref": [
            "globalConfig.fontSemiBold"
          ]
        }
      }
    },
    "defaultEditText": {
      "cornerRadius": 4,
      "stroke": {
        "#js-expr": [
          "var color = rc('globalConfig.secondaryColor');\n          \"1,\" + color"
        ]
      },
      "icon": {
        "width": {
          "#js-expr": [
            "rc('globalConfig.iconSize') - 20"
          ]
        },
        "height": {
          "#js-expr": [
            "rc('globalConfig.iconSize') - 20"
          ]
        },
        "textColor": {
          "#ref": [
            "globalConfig.primaryColor"
          ]
        }
      },
      "input": {
        "height": 48,
        "font": {
          "#ref": [
            "globalConfig.fontSemiBold"
          ]
        },
        "width": {
          "#if": [
            {
              "#js-expr": [
                "window.isDesktopView()"
              ]
            },
            399,
            "match_parent"
          ]
        }
      }
    },
    "defaultGridItem": {
      "size": {
        "#if": [
          {
            "#js-expr": [
              "window.parent.innerWidth >= 400"
            ]
          },
          74,
          70
        ]
      }
    },
    "defaultSearchBox": {
      "stroke": {
        "#ref": [
          "defaultEditText.stroke"
        ]
      },
      "height": 40,
      "padding": {
        "#js-expr": [
          "var pY = rc('screenConfig.uiCard.horizontalPadding');\n      [12, 0, 12, 0]"
        ]
      },
      "margin": {
        "#if": [
          {
            "#js-expr": [
              "window.isDesktopView()"
            ]
          },
          [
            0,
            15,
            24,
            0
          ],
          [
            4,
            4,
            4,
            4
          ]
        ]
      },
      "cornerRadius": {
        "#ref": [
          "defaultEditText.cornerRadius"
        ]
      }
    },
    "defaultAddCard": {
      "cardNumber": {
        "labelConfig": {
          "textFont": {
            "#ref": [
              "globalConfig.fontRegular"
            ]
          },
          "textColor": {
            "#ref": [
              "globalConfig.textSecondaryColor"
            ]
          },
          "textSize": {
            "#ref": [
              "globalConfig.fontSizeSmall"
            ]
          }
        },
        "editTextConfig": {
          "#override": [
            "cardNumberConfig",
            {
              "input.height": 48
            }
          ]
        },
        "inputFieldMargin": {
          "#if": [
            {
              "#js-expr": [
                "window.__OS == 'ANDROID'"
              ]
            },
            [
              0,
              0,
              0,
              10
            ],
            [
              0,
              8,
              0,
              20
            ]
          ]
        }
      },
      "expiry": {
        "labelConfig": {
          "textFont": {
            "#ref": [
              "globalConfig.fontRegular"
            ]
          },
          "textColor": {
            "#ref": [
              "globalConfig.textSecondaryColor"
            ]
          },
          "textSize": {
            "#ref": [
              "globalConfig.fontSizeSmall"
            ]
          }
        },
        "editTextConfig": {
          "#override": [
            "expiryDateConfig",
            {
              "icon.visibility": "gone",
              "input.height": 48
            }
          ]
        }
      },
      "cvv": {
        "labelConfig": {
          "textFont": {
            "#ref": [
              "globalConfig.fontRegular"
            ]
          },
          "textColor": {
            "#ref": [
              "globalConfig.hintColor"
            ]
          },
          "textSize": {
            "#ref": [
              "globalConfig.fontSizeSmall"
            ]
          }
        },
        "editTextConfig": {
          "#override": [
            "cvvConfig",
            {
              "input.height": 48
            }
          ]
        }
      },
      "saveCard": {
        enabled: false,
        "text": "Securely save this card for future payments.",
        "textSize": {
          "#if": [
            {
              "#js-expr": [
                "window.isDesktopView()"
              ]
            },
            {
              "#ref": [
                "globalConfig.fontSizeSmall"
              ]
            },
            {
              "#ref": [
                "globalConfig.fontSizeVerySmall"
              ]
            }
          ]
        },
        "margin": [
          0,
          10,
          0,
          0
        ],
        "infoIcon": {
          "visible": false
        }
      },
      "payButtonConfig": {
        "#override": [
          "defaultPrimaryButton",
          {
            "margin": {
              "#if": [
                {
                  "#js-expr": [
                    "window.isDesktopView()"
                  ]
                },
                [
                  16,
                  15,
                  0,
                  0
                ],
                [
                  0,
                  12,
                  0,
                  12
                ]
              ]
            },
            "width": {
              "#if": [
                {
                  "#js-expr": [
                    "window.isDesktopView()"
                  ]
                },
                250,
                "match_parent"
              ]
            }
          }
        ]
      },
      "cardConfig.margin": {
        "#js-expr": [
          "var vP = rc('screenConfig.containerAttribs.verticalSpacing');\n                  var tM = rc('screenConfig.utils.translationMargin');\n                  window.isDesktopView() ? [16, 15, tM, vP] : [tM, 24, tM, vP]"
        ]
      }
    },
    "defaultSecondaryButton": {
      "#override": [
        "defaultPrimaryButton",
        {
          "cornerRadius": 15,
          "translation": 0,
          "margin": [
            0,
            0,
            0,
            0
          ],
          "stroke": "0,#ffffff",
          "color": {
            "#ref": [
              "screenConfig.uiCard.color"
            ]
          },
          "text.color": {
            "#ref": [
              "globalConfig.primaryColor"
            ]
          },
          "text.size": 14,
          "text.font": {
            "#ref": [
              "globalConfig.fontSemiBold"
            ]
          }
        }
      ]
    },
    "defaultPrestoList": {
      "margin": {
        "#if": [
          {
            "#js-expr": [
              "window.isDesktopView()"
            ]
          },
          [
            0,
            0,
            16,
            0
          ],
          [
            0,
            0,
            0,
            0
          ]
        ]
      },
      "font": {
        "#ref": [
          "globalConfig.fontRegular"
        ]
      },
      "hasButton": {
        "#js-expr": [
          "window.isDesktopView()"
        ]
      },
      "space": 16
    },
    "defaultLoaderConfig": {
      "loaderType": "ProgressBar"
    }
  }
};
      return JSON.stringify(configuration);
      }
