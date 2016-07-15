class Profile < ActiveRecord::Base
  belongs_to :user

  validate :first_or_last_name_null
  validates :gender, inclusion: ["male", "female"]
  validate :male_not_first_name_sue

  def first_or_last_name_null
  	if first_name.nil? && last_name.nil?
  		errors.add(:base, "either first_name or last_name must be present!")
  	end
  end

  def male_not_first_name_sue
  	if gender.eql?("male") && first_name.eql?("Sue")
  		errors.add(:base, "no male can have fist_name Sue!")
  	end
  end

  def self.get_all_profiles(min_birth_year, max_birth_year)
  	Profile.where("birth_year BETWEEN :min_birth_year AND :max_birth_year", min_birth_year: min_birth_year, max_birth_year: max_birth_year).order(birth_year: :asc)
  end
end
