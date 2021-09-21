brain-even:
	node bin/brain-even.js

install:
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

eslint:
	npx eslint .
