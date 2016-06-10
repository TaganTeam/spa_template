Rails.application.routes.draw do

  mount API::Base => '/api'
  mount GrapeSwaggerRails::Engine => '/apidoc'

  root 'application#show'

end