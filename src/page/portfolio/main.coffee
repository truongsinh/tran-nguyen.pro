define (require)->
	# TODO: dust stills leaves HTML comments
	template = require 'rdust!../template'
	Base = require '../base'
	class View extends Base
		id: 'portfolio'
		template: template
