module PouchDb
    @@browser = nil
    @@db_name = ''
    def self.browser
        @@browser
    end
    def self.db_name
        @@db_name
    end
    def self.connect(browser, db_name)
        @@browser = browser
        @@db_name = db_name
    end
    module Base
        def save!
            # Convert me to json,
            db_name = PouchDb.db_name
            json = self.to_json
            insert_object_script = "(function() { " +
                                        "var db = new PouchDB('#{db_name}');" +
                                        "db.post(#{json});" +
                                    "})();"
            browser = PouchDb.browser
            browser.execute_script(insert_object_script)
        end

        def to_json
            hash = {}
            self.instance_variables.each do |var|
                var_without_at = var.to_s.gsub(/@/, '')
                hash[var_without_at] = self.instance_variable_get var
            end
            hash.to_json
        end

        def from_json! string
            JSON.load(string).each do |var, val|
                self.instance_variable_set var, val
            end
        end
    end
end
