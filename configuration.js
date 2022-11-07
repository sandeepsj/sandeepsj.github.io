window.hyperpay_configuration_version = '4.12';
if (window.JOS && typeof window.JOS.registerVersion == 'function') {
	 window.JOS.registerVersion(window.JOS.self)('config')(window.hyperpay_configuration_version)(); 
}
    let fontName = "VoltePlay";
    let fonts = [
  {
    "name": "VoltePlay",
    "url": "https://assets.juspay.in/hyper/bundles/in.juspay.merchants/fonts/VoltePlay/VoltePlay-Regular.ttf",
    "weight": 400
  },
  {
    "name": "VoltePlay",
    "url": "https://assets.juspay.in/hyper/bundles/in.juspay.merchants/fonts/VoltePlay/VoltePlay-SemiBold.ttf",
    "weight": 500
  },
  {
    "name": "VoltePlay",
    "url": "https://assets.juspay.in/hyper/bundles/in.juspay.merchants/fonts/VoltePlay/VoltePlay-Bold.ttf",
    "weight": 700
  }
];

    if(window.JBridge && typeof window.JBridge.loadFonts === 'function') {
    window.JBridge.loadFonts(fonts);
    }

    window.getMerchantConfig = function () {
      var configuration = {
  "context": [
    "window.isMwebUI = function(){ return !window.isDesktopView() && (window.__OS.toLowerCase() !== \"ios\") && (window.__OS.toLowerCase() !== \"android\"); }"
  ],
  "componentMapping": {
    "*.WebWrapper.AmountBar": "defaultWebAmountBar",
    "*.PrimaryButton": "defaultPrimaryButton",
    "*.InApp.ListItem": "inAppListItem",
    "WebWrapper.PaymentHeader.Toolbar": "webPaymentHeaderToolbar",
    "Screen.Error.Message": "upiMandateErrorMessage",
    "WebWrapper.Back.Toolbar": "webBackToolbar",
    "WebWrapper.AddButton.Toolbar": "webAddButtonToolbar",
    "MandateEducation.PrimaryButton": "mandateEducationPrimaryButton",
    "WebWrapper.Error.Message": "webErrorMessage",
    "UPIScreen.PrimaryButton": "upiscreenPrimaryButtonConfig",
    "PaymentPage.Expanded.UnlinkedWallet.ListItem": "tokenizedWalletListItem",
    "UPIHomeScreen.ScreenConfig": "upiHomeScreenConfig",
    "UPIScreen.AddUPI.EditText": "upiScreenEditTextConfig",
    "UPIAddScreen.ScreenConfig": "upiAddScreenConfig",
    "UPIScreen.PaymentOption.ListItem": "upiScreenListItem",
    "AddCardScreen.ScreenConfig": "addCardScreenConfig",
    "NBScreen.OtherBanks.ListItem": "nbScreenListItemConfig",
    "NBScreen.PopularBanks.GridItem": "nbPopularBankGridItem",
    "PaymentPage.UPI.GridItem": "upiAppGridConfig",
    "VerifyNumber.PrimaryButton": "verifyNumberButtonConfig",
    "WalletVerifyNumberScreen.ScreenConfig": "walletVerifyNumberConfig",
    "NBScreen.ScreenConfig": "nbScreenConfig",
    "PaymentPageScreen.AmountBar": "paymentPageAmountBar",
    "walletOtp.PrimaryButton": "walletOtpButton",
    "PaymentPageScreen.Toolbar": "ppToolbarConfig",
    "NBScreenV2.ScreenConfig": "nbScreenV2Config",
    "NBScreen.PrimaryButton": "nbScreenPrimaryButton",
    "NBScreen.OtherBanks.SecondaryButton": "nbOtherBanksSecondaryButton",
    "PaymentPageScreen.ScreenConfig": "ppScreenConfig",
    "UPI.WaitingLayout": "waitingScreen"
  },
  "mainConfig": {
    "ppScreenConfig": {
      "#override": [
        "screenConfig",
        {
          "sectionHeader.stroke": {
            "#if": [
              {
                "#js-expr": [
                  "window.isDesktopView()"
                ]
              },
              "",
              "1,#8E81A1"
            ]
          }
        }
      ]
    },
    "nbScreenV2Config": {
      "#override": [
        "screenConfig",
        {
          "uiCard.horizontalPadding": 12,
          "nb.otherBankHeight": 300
        }
      ]
    },
    "nbScreenConfig": {
      "#override": [
        "screenConfig",
        {
          "containerAttribs.margin": {
            "#if": [
              {
                "#js-expr": [
                  "window.isDesktopView()"
                ]
              },
              [
                0,
                24,
                0,
                24
              ],
              [
                0,
                14,
                0,
                0
              ]
            ]
          },
          "uiCard.horizontalPadding": 12,
          "sectionHeader.color": "#ffffff",
          "sectionHeader.background": "#220046",
          "sectionHeader.dividerVisibility": "GONE",
          "sectionHeader.stroke": "1,#8E81A1",
          "button.width": "MATCH_PARENT",
          "sectionHeader.padding": {
            "#if": [
              {
                "#js-expr": [
                  "window.isDesktopView()"
                ]
              },
              [
                18,
                18,
                18,
                10
              ],
              [
                20,
                18,
                0,
                0
              ]
            ]
          },
          "button.background": "#000000"
        }
      ]
    },
    "walletVerifyNumberConfig": {
      "#override": [
        "screenConfig",
        {
          "uiCard.horizontalPadding": 24
        }
      ]
    },
    "addCardScreenConfig": {
      "#override": [
        "screenConfig",
        {
          "button.maxWidth": 70,
          "button.width": 70,
          "uiCard.color": "#ffffff",
          "uiCard.cornerRadius": 10,
          "containerAttribs.horizontalSpacing": {
            "#if": [
              {
                "#js-expr": [
                  "window.isDesktopView()"
                ]
              },
              24,
              0
            ]
          },
          "sectionHeader.background": "#000000"
        }
      ]
    },
    "upiAddScreenConfig": {
      "#override": [
        "screenConfig",
        {
          "containerAttribs.horizontalSpacing": 6,
          "uiCard.color": "#220046",
          "uiCard.stroke": "1,#564372",
          "uiCard.addStrokeToForm": true,
          "containerAttribs.margin": {
            "#if": [
              {
                "#js-expr": [
                  "window.isDesktopView()"
                ]
              },
              [
                24,
                24,
                24,
                24
              ],
              [
                0,
                16,
                0,
                26
              ]
            ]
          },
          "sectionHeader.background": "#000000",
          "loaderProps.progressColor": "#E10092",
          "loaderProps.upiTimerBackground": "#5CFFFBFB",
          "juspayBrandingVisibility": "VISIBLE"
        }
      ]
    },
    "upiHomeScreenConfig": {
      "#override": [
        "screenConfig",
        {
          "uiCard.addStrokeToForm": true
        }
      ]
    },
    "masterConfig": {
      "themes": {
        "TypoGraphy": {
          "fontFamily": "VoltePlay"
        }
      }
    },
    "waitingScreen": {
      "#override": [
        "waitingLayout",
        {
          "#if": [
            {
              "#js-expr": [
                "window.__OS.toLowerCase()=='web'"
              ]
            },
            {
              "upiIcon.height": 50,
              "upiIcon.width": 50,
              "upiIcon.margin": [
                0,
                15,
                0,
                15
              ],
              "amountView.margin": [
                0,
                0,
                0,
                15
              ],
              "instructionView.background": "#220046",
              "instructionView.width": 90,
              "instructionView.isPercentWidth": true,
              "progressView.width": 90,
              "progressView.isPercentWidth": true
            },
            {
              "instructionView.background": "#220046"
            }
          ]
        }
      ]
    },
    "nbOtherBanksSecondaryButton": {
      "#override": [
        "defaultSecondaryButton",
        {
          "text.text": "More Banks",
          "margin": {
            "#if": [
              {
                "#js-expr": [
                  "window.isDesktopView()"
                ]
              },
              [
                10,
                0,
                0,
                10
              ],
              [
                10,
                0,
                0,
                10
              ]
            ]
          }
        }
      ]
    },
    "upiAppGridConfig": {
      "#override": [
        "defaultGridItem",
        {
          "margin": [
            0,
            0,
            20,
            0
          ]
        }
      ]
    },
    "nbPopularBankGridItem": {
      "#override": [
        "defaultGridItem",
        {
          "background": {
            "#ref": [
              "screenConfig.uiCard.color"
            ]
          },
          "stroke.value": ""
        }
      ]
    },
    "upiScreenEditTextConfig": {
      "#override": [
        "defaultEditText",
        {
          "icon.textColor": {
            "#ref": [
              "globalConfig.primaryColor"
            ]
          },
          "icon.height": 25,
          "icon.visibility": "GONE",
          "cornerRadius": {
            "#if": [
              {
                "#js-expr": [
                  "window.isDesktopView()"
                ]
              },
              8,
              3
            ]
          },
          "input.padding": [
            10,
            0,
            10,
            0
          ],
          "hint.text": "Sample text",
          "hint.color": "#8E81A1",
          "lineSeparator.focusedColor": "#8e81a1"
        }
      ]
    },
    "webErrorMessage": {
      "#override": [
        "defaultMessage",
        {
          "margin": [
            0,
            32,
            0,
            0
          ],
          "background": {
            "#ref": [
              "globalConfig.errorColor"
            ]
          },
          "cornerRadius": 8,
          "text.text": "Something went wrong. Please retry the payment.",
          "text.margin": [
            20,
            5,
            20,
            5
          ],
          "text.color": {
            "#ref": [
              "screenConfig.bgPrimaryColor"
            ]
          }
        }
      ]
    },
    "upiMandateErrorMessage": {
      "#override": [
        "defaultMessage",
        {
          "visibility": "VISIBLE",
          "background": "#ffffff",
          "cornerRadius": 0,
          "text.color": "#a58a21",
          "text.visibility": "VISIBLE",
          "text.margin": [
            0,
            5,
            0,
            20
          ]
        }
      ]
    },
    "ppToolbarConfig": {
      "#override": [
        "defaultToolbar",
        {
          "height": 120,
          "textSize": 22,
          "textGravity": "CENTER",
          "background": "#020005",
          "text": "Select a Payment Option",
          "padding": [
            0,
            60,
            0,
            0
          ],
          "leftIcon.url": "toolbar_back_arrow",
          "leftIcon.visibility": {
            "#js-expr": [
              "(window.__OS.toLowerCase() === \"web\") ? (window.__payload?.integrationType?.toLowerCase() === \"iframe\") ? \"GONE\" : \"VISIBLE\" : \"VISIBLE\""
            ]
          },
          "visibility": {
            "#js-expr": [
              "window.isMwebUI()? \"GONE\" : \"VISIBLE\""
            ]
          }
        }
      ]
    },
    "webAddButtonToolbar": {
      "#override": [
        "defaultToolbar",
        {
          "text": "Add New Card",
          "background": {
            "#ref": [
              "screenConfig.uiCard.color"
            ]
          },
          "textSize": {
            "#ref": [
              "globalConfig.fontSizeSmall"
            ]
          },
          "height": 42,
          "useBackgroundImage": false,
          "textColor": "#FFFFFF",
          "font": {
            "#ref": [
              "globalConfig.fontRegular"
            ]
          },
          "backIconSize": 20,
          "backIconVisibility": "gone",
          "contentMargin": [
            24,
            0,
            0,
            0
          ],
          "padding": [
            24,
            10,
            24,
            10
          ],
          "divider.visibility": "gone"
        }
      ]
    },
    "webBackToolbar": {
      "#override": [
        "defaultToolbar",
        {
          "textSize": 16,
          "font": {
            "#ref": [
              "globalConfig.fontSemiBold"
            ]
          },
          "leftIcon.visibility": "VISIBLE",
          "background": "#220046",
          "useBackgroundImage": false,
          "height": "WRAP_CONTENT",
          "backIconSize": 12,
          "padding": [
            10,
            0,
            0,
            3
          ],
          "contentMargin": [
            14,
            24,
            0,
            10
          ],
          "textColor": "#FFFFFF"
        }
      ]
    },
    "webPaymentHeaderToolbar": {
      "#override": [
        "defaultToolbar",
        {
          "text": "Payment Method",
          "visibility": "GONE",
          "textSize": 20,
          "backIconVisibility": "GONE",
          "leftIcon.visibility": "GONE",
          "height": "WRAP_CONTENT",
          "padding": [
            24,
            25,
            30,
            15
          ],
          "contentMargin": [
            0,
            15,
            0,
            0
          ],
          "textColor": "#363636",
          "background": "#1D1E30"
        }
      ]
    },
    "nbScreenListItemConfig": {
      "#override": [
        "defaultListItem",
        {
          "topView.firstLine.textTwo.font": {
            "#ref": [
              "globalConfig.fontRegular"
            ]
          },
          "topView.rightImage.visibility": "visible",
          "topView.rightImage.usePackageIcon": false,
          "topView.firstLine.textTwo.visibility": "gone",
          "topView.isClickable": true,
          "bottomView.bottomDefaultExpand": true,
          "bottomView.editText.visibility": "gone",
          "bottomView.fifthLine.visibility": "gone"
        }
      ]
    },
    "upiScreenListItem": {
      "#override": [
        "defaultListItem",
        {
          "topView.leftImage.size": 20,
          "topView.leftImage.margin": [
            0,
            0,
            0,
            0
          ],
          "topView.height": 42,
          "topView.firstLine.textOne.size": {
            "#ref": [
              "globalConfig.fontSizeSmall"
            ]
          },
          "topView.firstLine.textOne.padding": [
            24,
            0,
            24,
            0
          ],
          "divider.visibility": "GONE"
        }
      ]
    },
    "tokenizedWalletListItem": {
      "#override": [
        "defaultListItem",
        {
          "topView.selectionLabel.stroke": "",
          "topView.selectionLabel.background": "#1D1E30",
          "topView.selectionLabel.cornerRadius": 0,
          "topView.selectionLabel.size": 12,
          "topView.selectionLabel.color": {
            "#ref": [
              "globalConfig.primaryColor"
            ]
          },
          "bottomView.bottomDefaultExpand": false,
          "bottomView.editText.visibility": "gone",
          "bottomView.fifthLine.visibility": "gone"
        }
      ]
    },
    "inAppListItem": {
      "#override": [
        "defaultListItem",
        {
          "bottomView.visibility": "gone",
          "topView.leftImage.visibility": "visible",
          "topView.leftImage.placeholder": "cred",
          "bottomView.fifthLine.visibility": "gone",
          "topView.fourthLine.image.visibility": "visible",
          "topView.fourthLine.text.font": {
            "#ref": [
              "globalConfig.fontRegular"
            ]
          },
          "topView.fourthLine.text.visibility": "visible",
          "topView.fourthLine.padding": {
            "#js-expr": [
              "var space = rc('globalConfig.iconSize');\n        [5, 10, 10, 10]"
            ]
          },
          "topView.fourthLine.image.margin": [
            0,
            0,
            10,
            0
          ],
          "topView.fourthLine.text.size": 12,
          "topView.fourthLine.image.size": 16,
          "bottomView.editText.visibility": "gone",
          "divider.visibility": "gone"
        }
      ]
    },
    "nbScreenPrimaryButton": {
      "#override": [
        "defaultPrimaryButton",
        {
          "margin": {
            "#js-expr": [
              "if (window.isDesktopView())\n              [20, 0, 24,24]\n            else\n              [5, 0, 5, 10]"
            ]
          },
          "width": {
            "#js-expr": [
              "if (window.isDesktopView())\n              173\n            else\n              'match_parent'"
            ]
          }
        }
      ]
    },
    "walletOtpButton": {
      "#override": [
        "defaultPrimaryButton",
        {
          "margin": [
            16,
            0,
            16,
            0
          ]
        }
      ]
    },
    "verifyNumberButtonConfig": {
      "#override": [
        "defaultPrimaryButton",
        {
          "margin": [
            16,
            0,
            16,
            0
          ]
        }
      ]
    },
    "upiscreenPrimaryButtonConfig": {
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
                60,
                26,
                60,
                26
              ],
              [
                50,
                15,
                50,
                20
              ]
            ]
          },
          "height": 45,
          "width": "match_parent",
          "cornerRadius": 30
        }
      ]
    },
    "mandateEducationPrimaryButton": {
      "#override": [
        "defaultPrimaryButton",
        {
          "loader.start": false,
          "margin": [
            16,
            0,
            16,
            24
          ]
        }
      ]
    },
    "defaultPrimaryButton": {
      "color": "#E10092",
      "text": {
        "text": "Make Payment",
        "color": "#ffffff",
        "font": {
          "#ref": [
            "globalConfig.fontSemiBold"
          ]
        }
      },
      "width": 173,
      "maxWidth": {
        "#ref": [
          "screenConfig.button.maxWidth"
        ]
      },
      "height": 46,
      "cornerRadius": 22,
      "useGradient": false,
      "gradient": {
        "angle": {
          "#if": [
            {
              "#js-expr": [
                "window.__OS != 'IOS' || window.__OS != 'ANDROID'"
              ]
            },
            "0.0",
            "20.0"
          ]
        },
        "values": [
          "#FF9797",
          "#F69B00"
        ]
      },
      "visibility": "VISIBLE"
    },
    "paymentPageAmountBar": {
      "#override": [
        "defaultAmountBar",
        {
          "visibility": {
            "#js-expr": [
              "window.isMwebUI()? \"GONE\" : \"VISIBLE\""
            ]
          },
          "background": "#220046"
        }
      ]
    },
    "defaultWebAmountBar": {
      "visibility": "gone",
      "leftSection": {
        "visibility": "VISIBLE",
        "text": "Order Summary",
        "margin": [
          24,
          0,
          65,
          0
        ],
        "size": 24,
        "font": {
          "#ref": [
            "globalConfig.fontRegular"
          ]
        },
        "color": "#121212"
      },
      "width": 100,
      "height": 85,
      "padding": [
        0,
        20,
        0,
        20
      ],
      "percentWidth": true,
      "background": "#1D1E30",
      "translation": 0.1,
      "lineItems": [
        {
          "leftText": {
            "text": "Plan Type",
            "font": {
              "#ref": [
                "globalConfig.fontRegular"
              ]
            },
            "size": 14,
            "color": "#363636",
            "stroke": "",
            "minWidth": 280,
            "padding": [
              0,
              0,
              0,
              0
            ],
            "margin": [
              0,
              0,
              10,
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
            "size": 14,
            "color": "#363636",
            "stroke": "1,#C0C0C0,l",
            "minWidth": 260,
            "padding": [
              30,
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
            "text": "<orderdescription>",
            "font": {
              "#ref": [
                "globalConfig.fontBold"
              ]
            },
            "size": 20,
            "color": "#363636",
            "stroke": "",
            "minWidth": 280,
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
            "text": "<amount>",
            "font": {
              "#ref": [
                "globalConfig.fontBold"
              ]
            },
            "size": 20,
            "color": "#363636",
            "stroke": "1,#C0C0C0,l",
            "minWidth": 260,
            "padding": [
              30,
              0,
              0,
              0
            ],
            "gravity": "left",
            "useTextFromHtml": false
          }
        }
      ]
    },
    "globalConfig": {
      "primaryColor": "#5087C7",
      "textTertiaryColor": "#999999",
      "textSecondaryColor": "#FFFFFF",
      "textPrimaryColor": "#FFFFFF",
      "checkboxFontColor": "#FFFFFF",
      "hintColor": "#8381A1",
      "dividerColor": "#444764",
      "primaryFont": {
        "type": "FontName",
        "value": "VoltePlay-Regular"
      },
      "checkboxSize": 18,
      "checkboxFont": {
        "type": "FontName",
        "value": "VoltePlay-Regular"
      },
      "iconSizeSmall": 30,
      "iconSizeLarge": 50,
      "iconSizeVeryLarge": 60,
      "iconSize": 40,
      "fontBold": {
        "type": "FontName",
        "value": "VoltePlay-Bold"
      },
      "fontSemiBold": {
        "type": "FontName",
        "value": "VoltePlay-Medium"
      },
      "fontRegular": {
        "type": "FontName",
        "value": "VoltePlay-Regular"
      },
      "fontMedium": {
        "type": "FontName",
        "value": "VoltePlay-Medium"
      }
    },
    "flowConfig": {
      "popularBanks": [
        "NB_HDFC",
        "NB_AXIS",
        "NB_ICICI",
        "NB_SBI"
      ],
      "isPopularBanksDisbableOnclick": true,
      "recentOptions": {
        "useRecentPaymentOptions": {
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
        "numberOfRecentPayments": 3
      },
      "paymentOptions": [
        {
          "group": "others",
          "onlyDisable": [],
          "po": "cards",
          "visibility": "VISIBLE"
        },
        {
          "group": "others",
          "onlyDisable": [
            "SHAREit",
            "WhatsApp"
          ],
          "po": "upiappswithotherandsavedvpas",
          "visibility": "VISIBLE"
        },
        {
          "group": "others",
          "po": "inApps",
          "onlyDisable": [],
          "visibility": "VISIBLE"
        },
        {
          "group": "others",
          "po": "wallets",
          "onlyDisable": [
            "GOOGLEPAY",
            "CRED",
            "paypal"
          ],
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
        }
      ],
      "firstLoadSideBarTab": "CARD",
      "verifyMobile": true,
      "upiQREnable": false,
      "savedOptionsWeb": true,
      "sideBarTabs": [
        "CARD",
        "UPI",
        "WALLET",
        "NET_BANKING"
      ],
      "mandateInstruments": [
        "cards"
      ],
      "showMandateDetailsScreenForInstruments": [],
      "dotpEnable": true,
      "verifyVpa": true,
      "flows": {
        "directOTP": "true",
        exitOnBackPressAfterTxnCall: true,
        "walletForRedirectionFlow": [
          "paytm",
          "mobikwik",
          "freecharge",
          "amazonpay"
        ],
        "vies": false,
        "enforceSaveCard": false,
        "useSilentMandateEnforcement": "false",
        "showSIEducationScreen": false,
        "mandateUPIHandles": [],
        "enforceMandate": false,
        "useNonTokenizedFlow": [
          "AMAZONPAY"
        ]
      },
      "dynamicCardMandateEnforcement": true,
      "payeeName": "tatabinge",
      "webUpiIntent": {
        "enableGenericIntent": true,
        "enableGooglePayIntent": true,
        "enablePhonepeIntent": true
      },
      "preferred": {
        "promote": {
          "isEnabled": "true",
          "instruments": []
        },
        "lastUsed": {
          "isEnabled": "true"
        },
        "savedOptions": {
          "cardsEnabled": "true",
          "walletsEnabled": "true",
          "upiEnabled": "true",
          "order": [],
          "webVisibility": "true",
          "webInstruments": []
        },
        "order": []
      },
      "savedPaymentOptions": {
        "instruments": [
          "wallets",
          "payLater",
          "cards",
          "vpas"
        ],
        "webInstruments": [
          "cards"
        ]
      },
      "mandateAndDOTPSupport": true,
      "enableUPISI": true,
      "upiConfig": {
        "skipHomeScreen": true,
        "showVPAMetadata": true,
        "showSaveOption": true,
        "showVPAError": true,
        "collectInExpandedUPI": false,
        "useSnackBarForError": false,
        "collectInExpandedSection": true,
        "upiAppInExpandedSection": false,
        "enableSettings": false
      },
      "cardsConfig": {
        "enableSettings": false,
        "expandable": false,
        "cardNumberInPrimaryText": false,
        "showCvvInfoLogo": true,
        "useToolTip": false,
        "useSnackBarForVoucherError": false,
        "useUpdatedVoucherAmount": false,
        "changeSavedCardMasking": false,
        "cardIconSize": 32,
        "cardsConfig": 0,
        "showExtValidationMessage": true
      },
      "paymentLockingVersion": "v2"
    },
    "screenConfig": {
      "upiCollectViewType": "v3",
      "bgSecondaryColor": "#1D1E30",
      "bgPrimaryColor": "#020005",
      "containerAttribs": {
        "horizontalSpacing": {
          "#if": [
            {
              "#js-expr": [
                "window.__OS != 'IOS' || window.__OS != 'ANDROID'"
              ]
            },
            0,
            10
          ]
        },
        "sectionSpacing": 0
      },
      "amountBar": {
        "attach": true
      },
      "sideBar": {
        "background": "#220046",
        "widthinPercentage": 40,
        "maxWidth": 264,
        "icon": {
          "selectedColor": "#FFFFFF",
          "notSelectedColor": "#919294"
        },
        "navbarItem": {
          "selectedBackgroundColor": "#220046",
          "fontColor": "#b3b3b3",
          "selectedStroke": "6,#E10092,l",
          "selectedFontColor": "#FFFFFF",
          "font": {
            "#ref": [
              "globalConfig.fontSemiBold"
            ]
          },
          "selectedFont": {
            "#ref": [
              "globalConfig.fontBold"
            ]
          },
          "height": 56,
          "fontSize": 15
        }
      },
      "webWrapper": {
        "gravity": "CENTER",
        "fullAmountBar": true
      },
      "uiCard": {
        "translation": 0.1,
        "cornerRadius": 6,
        "horizontalPadding": 12,
        "verticalPadding": 16,
        "color": "#020005",
        "shadow": {
          "spread": 0,
          "blur": 0,
          "opacity": 0,
          "hOffset": 0,
          "vOffset": 0,
          "color": "#1D1E30"
        }
      },
      "merchantViews": [
        {
          "merchantViewType": "HEADER",
          "screen": [
            "PAYMENTPAGE"
          ]
        }
      ],
      "button": {
        "background": "#1D1E30",
        "atBottom": false,
        "changeText": true,
        "useAlphaForState": false,
        "inactiveColor": "#8E81A1",
        "addAmountToText": false,
        "maxWidth": "match_parent",
        "discountedAmountColor": "#785754",
        "discountedAmountSize": {
          "#ref": [
            "globalConfig.fontSize"
          ]
        }
      },
      "offersProps": {
        "preview": {
          "useLoader": true,
          "headerTextSize": 32
        },
        "useDecimal": false,
        "poheight": 12,
        "visibility": "VISIBLE",
        "attachOffersOnAddCardFormTop": false,
        "displayGroupOfferHorizontally": false
      },
      "sectionHeader": {
        "font": {
          "#js-expr": [
            "if (window.isDesktopView()) {\n            rc('globalConfig.fontSemiBold')\n          } else {\n            rc('globalConfig.fontRegular')\n          }"
          ]
        },
        "height": "56",
        "width": "match_parent",
        "background": "#220046",
        "textSize": 16,
        "padding": {
          "#if": [
            {
              "#js-expr": [
                "window.isDesktopView()"
              ]
            },
            [
              20,
              17,
              0,
              10
            ],
            [
              18,
              18,
              0,
              0
            ]
          ]
        },
        "bottomMargin": {
          "#if": [
            {
              "#js-expr": [
                "window.isDesktopView()"
              ]
            },
            8,
            0
          ]
        },
        "dividerHeight": 1,
        "dividerColor": "#F3CBE3",
        "margin": [
          0,
          0,
          0,
          0
        ],
        "dividerVisibility": "GONE",
        "color": "#FFFFFF"
      },
      "expand": {
        "walletView": true,
        "popularNBView": true,
        "upiCollectView": true,
        "upiView": true,
        "upiAppsView": true,
        "payLater": true,
        "inAccordion": false,
        "otherOptions": true,
        "indentExpandedSections": false,
        "useTickOnExpanded": false,
        "hideLastDivider": true,
        "defaultPayOpt": false,
        "emiView": false,
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
        "useGrid": true,
        "showOtherBanksHeader": false
      },
      "upi": {
        "useGrid": false,
        "showAddUpiHeader": true,
        "otherOptionsAsListView": true,
        "useEditTextForErrorMessage": false,
        "forceShowUPIExpandedSection": true,
        "highlightUPIId": true
      },
      "gridProps": {
        "useTick": false,
        "gridSelectedStroke": "2,#dcdcdc",
        "useButtonForSelection": false,
        "horizontalFade": true,
        "fadingEdgeLength": 0,
        "useGridViewPadding": true
      },
      "enableMandateWarning": true,
      "juspayBrandingVisibility": "gone"
    },
    "defaultToolbar": {
      "textSize": 18,
      "background": "#000000",
      "divider.color": "#444764",
      "rightIcon": {
        "url": "",
        "size": 20,
        "visibility": "GONE"
      },
      "visibility": "VISIBLE"
    },
    "defaultAmountBar": {
      "margin": [
        20,
        0,
        20,
        5
      ],
      "cornerRadius": 10,
      "leftSection": {
        "visibility": "VISIBLE",
        "text": "Payable Amount",
        "size": 16,
        "font": {
          "#ref": [
            "globalConfig.fontBold"
          ]
        },
        "color": {
          "#ref": [
            "globalConfig.textPrimaryColor"
          ]
        },
        "margin": [
          0,
          0,
          0,
          0
        ],
        "padding": [
          4,
          10,
          4,
          10
        ],
        "useTextFromHtml": false
      },
      "rightSection": {
        "visibility": "VISIBLE",
        "text": "<amount>",
        "size": 16,
        "font": {
          "#ref": [
            "globalConfig.fontBold"
          ]
        },
        "color": {
          "#ref": [
            "globalConfig.textPrimaryColor"
          ]
        },
        "margin": [
          0,
          0,
          0,
          0
        ],
        "padding": [
          0,
          0,
          0,
          0
        ],
        "useTextFromHtml": false
      },
      "lineItems": [],
      "visibility": "GONE"
    },
    "defaultEditText": {
      "background": "#020005",
      "stroke": "1,#564372",
      "input.font": {
        "#ref": [
          "globalConfig.fontMedium"
        ]
      },
      "lineSeparator.focusedColor": "#8e81a1",
      "input.width": {
        "#if": [
          {
            "#js-expr": [
              "window.isDesktopView()"
            ]
          },
          "match_parent",
          "match_parent"
        ]
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
            }
          }
        },
        "secondLine": {
          "text": {
            "text": "First Line",
            "color": "#999999",
            "font": {
              "#ref": [
                "globalConfig.fontRegular"
              ]
            },
            "size": 12,
            "margin": [
              0,
              0,
              0,
              0
            ],
            "padding": [
              0,
              0,
              0,
              0
            ]
          }
        }
      },
      "bottomView": {
        "useAccordionView": true,
        "button": {
          "#override": [
            "defaultPrimaryButton",
            {
              "margin": [
                0,
                0,
                0,
                10
              ]
            }
          ]
        }
      }
    },
    "savedCardListItem": {
      "#override": [
        "defaultListItem",
        {
          "topView.firstLine.imageOne.visibility": "visible",
          "topView.firstLine.textOne.color": "#8081A1",
          "topView.firstLine.textOne.size": 14,
          "topView.firstLine.textOne.font": {
            "#ref": [
              "globalConfig.fontMedium"
            ]
          },
          "topView.secondLine.text.size": 16,
          "topView.secondLine.text.color": "#ffffff",
          "topView.firstLine.imageOne.position": "Right",
          "topView.firstLine.imageOne.margin": [
            8,
            0,
            8,
            0
          ],
          "topView.secondLine.text.useHTMLForText": true,
          "topView.secondLine.text.visibility": "visible",
          "topView.secondLine.visibility": "visible",
          "topView.isClickable": true,
          "topView.selectionLabel.text": "Delete",
          "topView.selectionLabel.color": "#E20000",
          "bottomView.button.margin": {
            "#js-expr": [
              "if (window.isDesktopView())\n              [24, 0, 0, 0]\n            else\n              [8, 0, 0, 0]"
            ]
          },
          "bottomView.bottomDefaultExpand": false,
          "bottomView.editText.visibility": "visible",
          "bottomView.editText.hint.text": "CVV",
          "bottomView.editText.hint.color": "#8E81A1",
          "bottomView.editText.stroke": "1,#564372",
          "bottomView.editText.input.height": {
            "#if": [
              {
                "#js-expr": [
                  "window.isDesktopView()"
                ]
              },
              40,
              50
            ]
          },
          "bottomView.editText.cornerRadius": 2,
          "bottomView.editText.hint.hide": false,
          "bottomView.editText.header.text": "",
          "bottomView.editText.focus": true,
          "bottomView.margin": [
            60,
            0,
            12,
            0
          ],
          "bottomView.editText.input.inpType": "NumericPassword",
          "bottomView.editText.input.font": {
            "#ref": [
              "globalConfig.fontMedium"
            ]
          },
          "bottomView.editText.input.letterSpacing": 0,
          "bottomView.editText.icon.visibility": "visible",
          "bottomView.fifthLine.visibility": "gone",
          "bottomView.buttonWeight": 0.6,
          "bottomView.editTextWeight": 0.25
        }
      ]
    },
    "unlinkedWalletListItem": {
      "#override": [
        "defaultListItem",
        {
          "topView.selectionLabel.stroke": "",
          "topView.selectionLabel.color": {
            "#ref": [
              "globalConfig.primaryColor"
            ]
          },
          "bottomView.bottomDefaultExpand": false,
          "bottomView.editText.visibility": "gone",
          "bottomView.fifthLine.visibility": "gone",
          "bottomView.button.margin": [
            10,
            0,
            0,
            10
          ]
        }
      ]
    },
    "defaultGridItem": {
      "background": "#020005",
      "size": 64,
      "image": {
        "url": "",
        "visibility": "VISIBLE",
        "size": {
          "#ref": [
            "globalConfig.iconSize"
          ]
        },
        "usePackageIcon": false
      },
      "tick": {
        "url": "tick",
        "visibility": "GONE",
        "size": 12,
        "usePackageIcon": false
      },
      "margin": {
        "#if": [
          {
            "#js-expr": [
              "window.isDesktopView()"
            ]
          },
          [
            15,
            0,
            0,
            0
          ],
          [
            0,
            0,
            10,
            0
          ]
        ]
      },
      "text.font": {
        "#ref": [
          "globalConfig.fontMedium"
        ]
      }
    },
    "defaultSearchBox": {
      "leftImage": {
        "size": 16,
        "margin": [
          8,
          0,
          5,
          0
        ]
      },
      "rightImage": {
        "size": 20,
        "margin": [
          0,
          0,
          13,
          0
        ]
      },
      "text": {
        "size": 14,
        "font": {
          "#ref": [
            "globalConfig.fontMedium"
          ]
        },
        "padding": [
          5,
          1,
          0,
          0
        ],
        "color": {
          "#ref": [
            "globalConfig.textPrimaryColor"
          ]
        }
      },
      "cornerRadius": 6,
      "hint": {
        "color": "#8E81A1"
      },
      "margin": {
        "#if": [
          {
            "#js-expr": [
              "window.isDesktopView()"
            ]
          },
          [
            7,
            4,
            16,
            12
          ],
          {
            "#if": [
              {
                "#js-expr": [
                  "window.__OS === \"WEB\" && ! window.isDesktopView()"
                ]
              },
              [
                17,
                0,
                28,
                0
              ],
              [
                17,
                0,
                24,
                0
              ]
            ]
          }
        ]
      },
      "stroke": "1,#564372",
      "height": 30,
      "padding": [
        8,
        4,
        4,
        4
      ]
    },
    "defaultAddCard": {
      "si": {
        "enabled": true
      },
      "cardConfig": {
        "width": "match_parent",
        "padding": {
          "#js-expr": [
            "var hP = rc('screenConfig.uiCard.horizontalPadding');\n        var vP = rc('screenConfig.uiCard.verticalPadding');\n        if (window.isDesktopView()) {\n          [8, 8, 8, 0]\n        } else {\n          [24, vP, 24, 28]\n        }"
          ]
        },
        "margin": {
          "#js-expr": [
            "var vP = rc('screenConfig.containerAttribs.verticalSpacing');\n      var tM = rc('screenConfig.utils.translationMargin');\n    if (window.isDesktopView()) {\n        [24, 16, 24, 16]\n      } else {\n       [8, 12, 8, 0]\n      }"
          ]
        },
        "cornerRadius": {
          "#if": [
            {
              "#js-expr": [
                "window.isDesktopView()"
              ]
            },
            8,
            8
          ]
        },
        "backgroundColor": "#220046",
        "stroke": "1,#564372"
      },
      "cardNumber": {
        "labelConfig": {
          "textFont": {
            "#ref": [
              "globalConfig.fontRegular"
            ]
          }
        },
        "editTextConfig": {
          "#override": [
            "defaultEditText",
            {
              "input.padding": [
                12,
                0,
                12,
                0
              ],
              "input.letterSpacing": 0,
              "input.textMargin": [
                0,
                0,
                0,
                0
              ],
              "header.text": "Card Number",
              "hint.text": "Enter card number here",
              "icon.height": {
                "#js-expr": [
                  "rc('globalConfig.iconSizeSmall')"
                ]
              },
              "icon.width": {
                "#js-expr": [
                  "rc('globalConfig.iconSizeSmall')"
                ]
              },
              "input.height": 48,
              "icon.textVisibility": "gone",
              "input.separator": " ",
              "input.separatorRepeat": "4",
              "input.inpType": "numeric",
              "input.pattern": "^([0-9]| )+$,24",
              "stroke": "1,#564372",
              "cornerRadius": 4,
              "margin": [
                0,
                100,
                0,
                0
              ],
              "hint.color": "#8E81A1",
              "input.font": {
                "#ref": [
                  "globalConfig.fontMedium"
                ]
              }
            }
          ]
        },
        "inputFieldMargin": [
          0,
          0,
          0,
          0
        ]
      },
      "expiry": {
        "labelConfig": {
          "textFont": {
            "#ref": [
              "globalConfig.fontRegular"
            ]
          }
        },
        "editTextConfig": {
          "#override": [
            "defaultEditText",
            {
              "textMargin": [
                0,
                0,
                0,
                0
              ],
              "input.padding": [
                12,
                0,
                12,
                0
              ],
              "header.text": "Expiry",
              "icon.visibility": "gone",
              "input.height": 48,
              "input.separator": "/",
              "input.separatorRepeat": "2",
              "input.inpType": "Numeric",
              "input.pattern": "^([0-9]|\\/)+$,5",
              "hint.text": "MM/YY",
              "icon.textVisibility": "gone",
              "cornerRadius": 4,
              "hint.color": "#8E81A1",
              "input.font": {
                "#ref": [
                  "globalConfig.fontMedium"
                ]
              }
            }
          ]
        },
        "inputFieldMargin": [
          0,
          10,
          0,
          0
        ]
      },
      "cvv": {
        "labelConfig": {
          "textFont": {
            "#ref": [
              "globalConfig.fontRegular"
            ]
          }
        },
        "editTextConfig": {
          "#override": [
            "defaultEditText",
            {
              "input.letterSpacing": 0,
              "input.padding": [
                12,
                0,
                12,
                0
              ],
              "textMargin": [
                0,
                0,
                0,
                0
              ],
              "header.text": "CVV",
              "hint.text": "CVV",
              "input.inpType": "NumericPassword",
              "input.pattern": "^[0-9]+$,3",
              "icon.url": "ic_question_mark",
              "input.height": 48,
              "icon.textVisibility": "gone",
              "icon.visibility": "visible",
              "icon.width": 20,
              "icon.height": 20,
              "cornerRadius": 4,
              "hint.color": "#8E81A1",
              "input.font": {
                "#ref": [
                  "globalConfig.fontMedium"
                ]
              }
            }
          ]
        },
        "inputFieldMargin": [
          0,
          10,
          0,
          0
        ]
      },
      "saveCard": {
        "text": "Securely save this card for future payments",
        "infoIcon": {
          "visible": false
        },
        "textSize": 12
      },
      "payButtonConfig": {
        "#override": [
          "defaultPrimaryButton",
          {
            "width": "match_parent",
            "maxWidth": "match_parent",
            "height": 46,
            "margin": [
              50,
              20,
              50,
              10
            ],
            "cornerRadius": 22
          }
        ]
      }
    },
    "defaultSecondaryButton": {
      "#override": [
        "defaultPrimaryButton",
        {
          "width": 90,
          "height": 30,
          "cornerRadius": 20,
          "margin": {
            "#if": [
              {
                "#js-expr": [
                  "window.isDesktopView()"
                ]
              },
              [
                10,
                0,
                0,
                10
              ],
              [
                16,
                0,
                0,
                10
              ]
            ]
          },
          "stroke": "0,#ffffff",
          "color": "#020005",
          "loader.color": "",
          "text.color": "#f3cbe3",
          "text.font": {
            "#ref": [
              "globalConfig.fontRegular"
            ]
          },
          "text.text": "MORE BANKS",
          "text.size": 14
        }
      ]
    },
    "otherUPISecondaryButton": {
      "#override": [
        "defaultSecondaryButton",
        {
          "text.text": "Other UPI Options",
          "width": 120,
          "margin": {
            "#if": [
              {
                "#js-expr": [
                  "window.isDesktopView()"
                ]
              },
              [
                10,
                0,
                0,
                10
              ],
              [
                10,
                0,
                0,
                10
              ]
            ]
          }
        }
      ]
    },
    "defaultPrestoList": {
      "margin": [
        0,
        0,
        0,
        0
      ],
      "leftImage": {
        "margin": [
          5,
          0,
          12,
          0
        ]
      },
      "rightImage": {
        "margin": [
          0,
          0,
          8,
          0
        ]
      },
      "font": {
        "#ref": [
          "globalConfig.fontRegular"
        ]
      }
    }
  }
};
      return JSON.stringify(configuration);
      }
