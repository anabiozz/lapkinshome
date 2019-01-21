package api

import (
	"encoding/json"
	"net/http"

	"github.com/anabiozz/logger"
	"github.com/anabiozz/store-engine/common"
)

// GetProductByID ...
func GetProductByID(env *common.Env) http.HandlerFunc {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")

		product, err := env.DB.GetProductByID(r.URL.Query().Get("product_id"))
		if err != nil {
			logger.Info(err)
			return
		}

		json.NewEncoder(w).Encode(product)
	})
}
