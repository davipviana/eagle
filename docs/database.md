<!-- erDiagram
          CUSTOMER }|..|{ DELIVERY-ADDRESS : has
          CUSTOMER ||--o{ ORDER : places
          CUSTOMER ||--o{ INVOICE : "liable for"
          DELIVERY-ADDRESS ||--o{ ORDER : receives
          INVOICE ||--|{ ORDER : covers
          ORDER ||--|{ ORDER-ITEM : includes
          PRODUCT-CATEGORY ||--|{ PRODUCT : contains
          PRODUCT ||--o{ ORDER-ITEM : "ordered in"
             -->
```mermaid
erDiagram
          TradeConfirmation ||..|{ Trade : contains
          TradeConfirmation {
            int TradeConfirmationId
            date TradeConfirmationDate
            double TotalFee
          }
          Trade {
            int TradeId
            int TradeConfirmationid
            int AssetId
            int TradeTypeId
            double Quantity
            double Price
          }
          Trade ||..|| Asset : is-of
          Trade ||..|| TradeType : is
          TradeType {
            int TradeTypeId
          }
          TradeType ||..|{ TradeTypeLocale : has
          TradeTypeLocale {
            int TradeTypeId
            int CultureId
            string TradeTypeName
          }
          TradeTypeLocale ||..|| Culture : is
          Asset {
            int AssetId
            string Symbol
            string AssetTypeId
          }
          Asset ||..|| AssetType : is
          AssetType {
            int AssetTypeId
          }
          AssetTypeLocale {
            int AssetTypeId
            int CultureId
            string AssetTypeName
          }
          AssetType ||..|{ AssetTypeLocale : has
          Culture {
            int CultureId
            string IsoCode
          }
          AssetTypeLocale ||..|| Culture : is
          Wallet {
            int WalletId
            Asset[] Assets
          }
          Wallet }|..|{ Asset : contains
          Wallet ||..|{ WalletLocale : has
          WalletLocale {
            int WalletId
            int CultureId
            string WalletDescription
          }
          WalletLocale ||..|| Culture : is

            