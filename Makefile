SHELL := /bin/bash
.ONESHELL:

assets: ./assets/mhrise-buffs.json
./assets/mhrise-buffs.json: ./assets/mhrise-buffs.csv
	$(eval ROOT_DIR := $(shell pwd))

	cd $(ROOT_DIR)/assets
	colordiff -u mhrise-buffs.csv.bak mhrise-buffs.csv | less
	colordiff -u mhrise-buffs.json <(node convert-mhrise-buffs.js | jq .) | less
	node convert-mhrise-buffs.js | jq . > mhrise-buffs.json
	cp mhrise-buffs.csv mhrise-buffs.csv.bak

	cd $(ROOT_DIR)/src
	perl -MPath::Tiny -i.bak -0pe '$$j = path("../assets/mhrise-buffs.json")->slurp; chop $$j; s/(?<=export const ENHANCEMENTS = ).*\](?=.)/$$j/s' enhancement.ts

	cd $(ROOT_DIR)
	npm run build

