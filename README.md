[![Stories in Ready](https://badge.waffle.io/18F/playbook-in-action.png?label=ready&title=Ready)](https://waffle.io/18F/playbook-in-action)
=======
### Installation

This project uses the following node modules:

  - babel-preset-react
  - babelify
  - browserify
  - gulp
  - gulp-notify
  - gulp-rename
  - history
  - react
  - react-bootstrap
  - react-dom
  - react-flexbox
  - react-router
  - reactify
  - vinyl-source-stream
  - watchify

To install them, `cd` to the `app` directory and run `npm install`.

This project uses the following bower components:

  - jQuery
  - Bootstrap

The backend is a Flask app built with Python 2. It requires Postgres, which must be installed before the Python package dependencies.  To install the Python package dependencies, run `pip install -r requirements.txt`.

The server expects a `DATABASE_URL` environment variable of the form expected by [SQLAlchemy engine configuration](http://docs.sqlalchemy.org/en/latest/core/engines.html).  This project uses the `postgresql+psycopg2` dialect and driver, so an example URL might be `postgresql+psycopg2://localhost/myDBname`.

To launch the app run `python server.py`. The site will be available at `http://localhost:5000`. To seed the database and delete any old tables run create_tables() (from server.py).

To ensure bundle.js is updated with the changes to any React code, you will need to use something like the node package Gulp. Once you have it [installed](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md), leave it running in a separate Terminal tab: just change to the `app` directory (`cd app`) and run `gulp`.

### Testing

To test using a local browser, run `python tests/functional_tests.py`.

### Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.
